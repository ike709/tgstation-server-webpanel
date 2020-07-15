import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FormattedMessage } from "react-intl";
import configOptions, { ConfigMap, ConfigOption } from "../../utils/config";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import ConfigController from "../../utils/ConfigController";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IProps {}
interface IState {
    values: { [key: string]: ConfigOption };
    //if youre adding some state, make sure it doesnt get sent to be saved
}

export default class Configuration extends React.Component<IProps, IState> {
    public constructor(props: IProps) {
        super(props);
        this.save = this.save.bind(this);

        this.state = {
            values: {}
        };
    }

    private save() {
        ConfigController.saveconfig(this.state.values);
        this.setState({
            values: {}
        });
    }

    public render() {
        const config = Object.entries(configOptions);

        return (
            <React.Fragment>
                {config.map(([key, currentVal]) => {
                    //const persistRef = React.createRef<HTMLInputElement>();
                    const valueRef = React.createRef<HTMLInputElement>();
                    const value = this.state.values[key] || currentVal;
                    const reset = () => {
                        this.setState((prevState: IState) => {
                            const filtered: ConfigMap = {};
                            for (const [innerkey, val] of Object.entries(prevState.values)) {
                                if (innerkey === key) continue;
                                filtered[innerkey] = val;
                            }
                            return {
                                values: filtered
                            };
                        });
                    };

                    const updateValue = () => {
                        const obj: ConfigOption = this.state.values[key] || {
                            id: currentVal.id,
                            type: currentVal.type
                        };
                        //obj.persist = persistRef.current!.checked;
                        obj.value =
                            value.type === "bool"
                                ? valueRef.current!.checked
                                : valueRef.current!.value;
                        this.setState(prevstate => {
                            return {
                                values: {
                                    ...prevstate.values,
                                    [key]: obj
                                }
                            };
                        });
                    };
                    let type;
                    switch (value.type) {
                        case "num": {
                            type = "number";
                            break;
                        }
                        case "str": {
                            type = "input";
                            break;
                        }
                        case "bool": {
                            type = "switch";
                        }
                    }

                    const tooltip = (innerid: string) => {
                        return (props: any): React.ReactNode => {
                            return (
                                <Tooltip {...props}>
                                    <FormattedMessage id={innerid} />
                                </Tooltip>
                            );
                        };
                    };

                    const random = Math.random().toString();

                    return (
                        <InputGroup className="mb-4" key={value.id}>
                            <InputGroup.Prepend className="w-40 flex-grow-1 flex-xl-grow-0 overflow-auto mb-2 mb-xl-0">
                                {/*<InputGroup.Text
                                    as="label"
                                    htmlFor={value.id}
                                    className={this.state.values[key] ? 'font-weight-bold' : ''}>
                                    <Form.Check
                                        id={value.id}
                                        inline
                                        label={<FormattedMessage id="generic.persist" />}
                                        type="switch"
                                        custom
                                        onChange={updateValue}
                                        ref={persistRef}
                                        checked={value.persist}
                                        value={''}
                                    />
                                </InputGroup.Text>*/}
                                <OverlayTrigger overlay={tooltip(value.id + ".desc")}>
                                    <InputGroup.Text
                                        className={`flex-fill ${
                                            this.state.values[key] ? "font-weight-bold" : ""
                                        }`}>
                                        <FormattedMessage id={value.id} />
                                        <div className="ml-auto">
                                            <FontAwesomeIcon fixedWidth icon="info" />
                                        </div>
                                    </InputGroup.Text>
                                </OverlayTrigger>
                            </InputGroup.Prepend>
                            <div className="flex-grow-1 w-100 w-xl-auto d-flex">
                                {type === "switch" ? (
                                    <label
                                        htmlFor={random}
                                        className="d-flex justify-content-center align-content-center flex-grow-1 w-100 w-xl-auto">
                                        <Form.Check
                                            inline
                                            type="switch"
                                            custom
                                            id={random}
                                            className="m-auto"
                                            label=""
                                            ref={valueRef}
                                            onChange={updateValue}
                                            checked={value.value as boolean}
                                        />
                                    </label>
                                ) : (
                                    <FormControl
                                        custom
                                        type={type}
                                        className={`flex-fill ${
                                            this.state.values[key] ? "font-weight-bold" : ""
                                        }`}
                                        ref={valueRef}
                                        onChange={updateValue}
                                        value={value.value as number | string}
                                    />
                                )}
                                {this.state.values[key] ? (
                                    <InputGroup.Append>
                                        <InputGroup.Text>
                                            <FontAwesomeIcon
                                                fixedWidth
                                                icon="undo"
                                                onClick={reset}
                                            />
                                        </InputGroup.Text>
                                    </InputGroup.Append>
                                ) : (
                                    ""
                                )}
                            </div>
                        </InputGroup>
                    );
                })}

                <br />

                <div className="text-center">
                    <Button
                        className="px-5"
                        onClick={this.save}
                        disabled={!Object.keys(this.state.values).length}>
                        <FormattedMessage id="generic.save" />
                    </Button>
                </div>
            </React.Fragment>
        );
    }
}