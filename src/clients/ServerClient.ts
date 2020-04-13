import IHttpClient from "./IHttpClient";
import IServerClient from "./IServerClient";

import ICredentials from "../models/ICredentials";
import ServerResponse from "../models/ServerResponse";

import { ConfigurationParameters, Configuration, ApiResponse, HomeApi } from './generated';
import { Token } from "./generated/models";

import ITranslation from '../translations/ITranslation';

export default class ServerClient implements IServerClient {
    private static readonly UserAgent: string = ServerClient.getUserAgent();
    private static readonly ApiVersion: string = ServerClient.getApiVersion();

    private credentials: ICredentials | null;
    private token: Token | null;

    private translation: ITranslation | null;

    private onLoginRefreshStart?: () => void;
    private onLoginRefreshFailure?: () => void;

    private tokenRefreshTimeout: NodeJS.Timeout | null;

    constructor(private readonly httpClient: IHttpClient) {
        this.loginRefresh = this.loginRefresh.bind(this);
        this.token = null;
        this.tokenRefreshTimeout = null;
        this.credentials = null;
        this.translation = null;

        const configParameters: ConfigurationParameters = {
            basePath: httpClient.serverUrl,
            accessToken: () => this.token?.bearer || "",
            headers: {
                "Accept": "application/json"
            }
        }

        // eslint-disable-next-line
        const apiConfig = new Configuration(configParameters);
    }

    public setTranslation(translation: ITranslation): void {
        this.translation = translation;
    }

    public loggedIn(): boolean {
        if (!this.token?.expiresAt)
            return false;
        const now = new Date();
        return this.token.expiresAt > now;
    }

    public setRefreshHandlers(onLoginRefreshStart?: () => void, onLoginRefreshFailure?: () => void) {
        this.onLoginRefreshStart = onLoginRefreshStart;
        this.onLoginRefreshFailure = onLoginRefreshFailure;
    }

    public tryLogin(credentials: ICredentials): Promise<ServerResponse<Token>> {
        this.credentials = credentials;
        return this.tryRefreshLogin();
    }

    public async tryRefreshLogin(): Promise<ServerResponse<Token>> {
        this.cancelLoginRefresh();

        if (!this.credentials) {
            throw new Error('Invalid credentials!');
        }

        // we need to create this configuration object every time because it's where the username/parameters are set
        const loginHomeApi = new HomeApi(
            new Configuration({
                basePath: this.httpClient.serverUrl,
                headers: {
                    "Accept": "application/json"
                },
                username: this.credentials.userName,
                password: this.credentials.password
            }));

        const serverResponse = await this.makeApiRequest(
            loginHomeApi.homeControllerCreateTokenRaw.bind(loginHomeApi),
            null,
            null,
            false);

        if (!serverResponse)
            throw new Error('Login request returned null!');

        if (serverResponse.model) {
            this.token = serverResponse.model;

            if (serverResponse.model?.expiresAt) {
                this.tokenRefreshTimeout = setTimeout(
                    () => this.loginRefresh(),
                    new Date(serverResponse.model.expiresAt).getTime() - Date.now());
            }
        }
        else {
            this.credentials = null;
        }

        return serverResponse;
    }

    private static getApiVersion(): string {
        const packageJson = require('../../package.json');
        return `Tgstation.Server.Api/${packageJson.tgs_api_version}`;
    }

    private static getUserAgent(): string {
        const packageJson = require('../../package.json');
        return `${packageJson.name}/${packageJson.version}`;
    }

    private async makeApiRequest<TRequestParameters, TModel>(
        rawRequestFunc: (requestParameters: TRequestParameters) => Promise<ApiResponse<TModel>>,
        instanceId?: number | null,
        requestParameters?: TRequestParameters | null,
        requiresToken: boolean = true): Promise<ServerResponse<TModel> | null> {

        if (!this.translation)
            throw new Error('ServerClient translation not set!');

        if (requiresToken && !this.token) {
            const refreshResponse = await this.tryRefreshLogin();
            if (!refreshResponse.model) {
                if (this.onLoginRefreshFailure) {
                    this.onLoginRefreshFailure();
                }

                return null;
            }
        }

        requestParameters = requestParameters || {} as TRequestParameters;

        const basicRequestParameters = {
            api: ServerClient.ApiVersion,
            userAgent: ServerClient.UserAgent,
            instanceId
        }

        requestParameters = { ...basicRequestParameters, ...requestParameters };

        try {
            const apiResponse = await rawRequestFunc(requestParameters);
            const model = await apiResponse.value();

            return new ServerResponse(this.translation, apiResponse.raw, model)
        }
        catch (thrownResponse) {
            if (!(thrownResponse instanceof Response)) {
                return new ServerResponse(this.translation);
            }

            return new ServerResponse(this.translation, thrownResponse);
        }
    }

    public cancelLoginRefresh() {
        if (this.tokenRefreshTimeout) {
            clearTimeout(this.tokenRefreshTimeout);
            this.tokenRefreshTimeout = null;
        }
    }

    private async loginRefresh() {
        if (this.onLoginRefreshStart)
            this.onLoginRefreshStart();
        const result = await this.tryRefreshLogin();
        if (this.onLoginRefreshFailure && !result)
            this.onLoginRefreshFailure();
    }
}