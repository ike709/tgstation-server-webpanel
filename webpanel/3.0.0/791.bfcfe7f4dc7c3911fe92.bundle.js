"use strict";(self.webpackChunktgstation_server_control_panel=self.webpackChunktgstation_server_control_panel||[]).push([[791],{8425:function(e,t,r){r.d(t,{t:function(){return l}});var n=r(7294),s=r(5171),a=r.n(s),o=r(7961);function i(e){return n.createElement(a(),{src:e.obj,name:"JSON",theme:"tube",iconStyle:"triangle",collapsed:!0,displayDataTypes:!1})}function l(e){return o.ZP.showjson.value?n.createElement("div",{className:"text-left"},n.createElement(i,{obj:e.obj})):n.createElement(n.Fragment,null)}},1791:function(e,t,r){r.r(t),r.d(t,{default:function(){return V}});var n=r(7294),s=r(5005),a=r(1555),o=r(4716),i=r(2318),l=r(5293),c=r(3489),d=r(4012),u=r(724),m=r.n(u),h=r(5977),p=r(2480),v=r(6846),E=r(3803),f=r(5631),g=r(6942),w=r(4615),b=r(7162),Z=r(7347),y=r(2638),k=r(2527),R=r(7961),S=r(6755);async function O(e,t,r){const n=e.endpoint.merge(t,r);return R.ZP.githubtoken.value&&(n.headers.authorization=`token ${R.ZP.githubtoken.value}`),e(n)}async function x(){return R.ZP.githubtoken.value?{type:"token",tokenType:"pat",token:R.ZP.githubtoken.value}:{type:"unauthenticated"}}const C=()=>Object.assign(x.bind(null),{hook:O.bind(null)});var L=new class extends k.TypedEmitter{constructor(){super(),this.apiClient=void 0;const e=y.v.plugin(b.X,Z.O);this.apiClient=new e({authStrategy:C,userAgent:"tgstation-server-control-panel/"+S.q4,baseUrl:"https://api.github.com",throttle:{onRateLimit:(e,t)=>(console.warn(`Request quota exhausted for request ${t.method} ${t.url}`),0===t.request.retryCount&&(console.log(`Retrying after ${e} seconds!`),!0)),onAbuseLimit:(e,t)=>{console.warn(`Abuse detected for request ${t.method} ${t.url}`)}}})}async getVersions({owner:e,repo:t,current:r,all:n}){let s,a=0;try{s=await this.apiClient.paginate(this.apiClient.repos.listReleases,{owner:e,repo:t},((e,t)=>e.data.reduce(((e,s)=>{const o=/tgstation-server-v([\d.]+)/.exec(s.name??"");if(!o)return e;if("4"!==o[1][0])return e;const i=o[1];let l=!1;if(i<=r){if(a>=3&&!n)return t(),e;a++,l=!0}return e.push({version:i,body:s.body??"",current:i===r,old:l}),e}),[])))}catch(e){return new E.Z({code:E.G.ERROR,error:new v.ZP(v.jK.GITHUB_FAIL,{jsError:e})})}return new E.Z({code:E.G.OK,payload:s})}},N=r(1320),P=r(3e3),j=r(8425),A=r(5855);class G extends n.Component{constructor(e){super(e),this.loadNotes=this.loadNotes.bind(this),this.updateServer=this.updateServer.bind(this),this.state={versions:[],errors:[],loading:!0}}async componentDidMount(){const e=[];e.push(this.loadVersions()),await Promise.all(e),this.setState({loading:!1})}componentWillUnmount(){this.state.timer&&window.clearInterval(this.state.timer)}addError(e){this.setState((t=>{const r=Array.from(t.errors);return r.push(e),{errors:r}}))}async loadVersions(){const e=await p.Z.getAdminInfo();switch(e.code){case E.G.ERROR:return this.addError(e.error);case E.G.OK:{const t=e.payload.trackedRepositoryUrl,r=/https?:\/\/(github\.com)\/(.*?)\/(.*)/.exec(t);if(!r)return this.addError(new v.ZP(v.jK.APP_FAIL,{jsError:Error(`Unknown repository url format: ${t}`)}));if("github.com"!==r[1])return void this.setState({versions:[{body:"Updates unavailable to non github repos",version:"Updates unavailable to non github repos",current:!0,old:!0}]});const n=await L.getVersions({owner:r[2],repo:r[3],current:this.context.serverInfo.version,all:!!this.props.match.params.all});switch(console.log("Version info: ",n),n.code){case E.G.ERROR:return this.addError(n.error);case E.G.OK:this.setState({versions:n.payload})}}}}loadNotes(){for(const e of this.state.versions){if(e.version!==this.state.selectedOption)continue;const t=window.setInterval((()=>{this.setState((e=>void 0===e.secondsLeft||null===e.secondsLeft?e:1===e.secondsLeft?(window.clearInterval(e.timer),{timer:null,secondsLeft:null}):{secondsLeft:e.secondsLeft-1}))}),1e3);return void this.setState({selectedVersion:e,timer:t,secondsLeft:10})}}async updateServer(){if(!this.state.selectedOption)return console.error("Attempted to update server to a no version"),void this.setState({selectedVersion:void 0});const e=await p.Z.updateServer(this.state.selectedOption);switch(e.code){case E.G.ERROR:this.addError(e.error);break;case E.G.OK:f.Z.autoLogin=!1,window.setInterval((async()=>{if((await g.Z.getCurrentUser(!0)).code===E.G.ERROR)window.location.reload()}),2e3),this.setState({updating:!0})}}render(){if(this.state.updating)return n.createElement(A.Z,{text:"loading.updating"});if(this.state.loading)return n.createElement(A.Z,{text:"loading.version"});const e=e=>{this.setState({selectedOption:e.target.value})},t="number"==typeof this.state.secondsLeft;return n.createElement(n.Fragment,null,n.createElement(j.t,{obj:this.state.versions}),n.createElement("div",{className:"text-center"},this.state.errors.map(((e,t)=>{if(e)return n.createElement(P.ZP,{key:t,error:e,onClose:()=>this.setState((e=>{const r=Array.from(e.errors);return r[t]=void 0,{errors:r}}))})}))),this.state.selectedVersion?n.createElement(n.Fragment,null,n.createElement("div",{className:"text-center"},n.createElement(s.Z,{className:"mr-3",onClick:()=>this.setState({selectedVersion:void 0})},n.createElement(d.Z,{id:"generic.goback"})),n.createElement(l.Z,{overlay:n.createElement(c.Z,{id:"timing-tooltip"},n.createElement(d.Z,{id:"view.admin.update.wait"})),show:t},n.createElement(s.Z,{onClick:this.updateServer,disabled:t},n.createElement(d.Z,{id:"generic.continue"}),t?` [${this.state.secondsLeft}]`:"")),n.createElement("h3",null,n.createElement(d.Z,{id:"view.admin.update.releasenotes"})),n.createElement("hr",null)),n.createElement(m(),{source:this.state.selectedVersion.body})):n.createElement("div",{className:"text-center"},n.createElement("h3",{className:"mb-4"},n.createElement(d.Z,{id:"view.admin.update.selectversion"})),n.createElement(a.Z,{xs:8,md:6,className:"mx-auto"},this.state.versions.map(((t,r)=>n.createElement(i.Z,{className:"mb-3",key:t.version},n.createElement(i.Z.Prepend,null,n.createElement(i.Z.Radio,{id:t.version,name:"version",disabled:t.current,value:t.version,checked:this.state.selectedOption===t.version,onChange:e})),n.createElement(o.Z,{as:"label",htmlFor:t.version,disabled:!0},t.version,t.current?n.createElement(d.Z,{id:"view.admin.update.current"}):"",0==r?n.createElement(d.Z,{id:"view.admin.update.latest"}):"")))),n.createElement(s.Z,{variant:"link",onClick:()=>{this.props.history.push((N.$w.admin_update.link??N.$w.admin_update.route)+"all/",{reload:!0})},disabled:!!this.props.match.params.all},n.createElement(d.Z,{id:"view.admin.update.showall"})),n.createElement("br",null),n.createElement(s.Z,{onClick:this.loadNotes,disabled:!this.state.selectedOption},n.createElement(d.Z,{id:"generic.continue"})))))}}G.contextType=w.f;var V=(0,h.EN)(G)}}]);
//# sourceMappingURL=791.bfcfe7f4dc7c3911fe92.bundle.js.map