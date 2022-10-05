"use strict";(self.webpackChunktgstation_server_control_panel=self.webpackChunktgstation_server_control_panel||[]).push([[728,917],{3918:function(e,t,n){n.d(t,{a:function(){return E}});var a=n(1436),r=n(7814),l=n(7294),i=n(7977),s=n(5147),o=n(5293),c=n(3489),m=n(4012),u=n(8509),d=n(8425),p=n(5855),h=n(9905);function v(){return v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},v.apply(this,arguments)}let E;!function(e){e[e.CompileJobs=0]="CompileJobs",e[e.Watchdog=1]="Watchdog"}(E||(E={}));class g extends l.Component{constructor(e){super(e),this.state={openTestMergesId:null}}render(){return l.createElement("div",null,l.createElement(d.t,{obj:this.props.viewData}),l.createElement("h3",{className:"text-center"},l.createElement(m.Z,{id:"view.instance.server.deployment_info"})),this.props.viewData?this.renderViewData(this.props.viewData):l.createElement(p.Z,{text:"loading.compile_jobs"}))}renderViewData(e){let t,n=!1;const a=e,r=e;switch(e.viewDataType){case E.Watchdog:n=!a.activeCompileJob,t=()=>this.renderWatchdog(a);break;case E.CompileJobs:n=!!r.compileJobs&&0===r.compileJobs.length,t=()=>this.renderDeployments(r);break;default:throw new Error("Invalid enum value for ViewDataType!")}return n?l.createElement("h1",null,l.createElement(i.Z,{variant:"warning"},l.createElement(m.Z,{id:"view.utils.deployment_viewer.no_jobs"}))):t()}renderTable(e){return l.createElement(s.Z,{className:"table table-hover"},l.createElement("thead",null,l.createElement("th",null),l.createElement("th",null,l.createElement(m.Z,{id:"view.utils.deployment_viewer.table.id"})),l.createElement("th",null,l.createElement(m.Z,{id:"view.utils.deployment_viewer.table.byond"})),l.createElement("th",null,l.createElement(m.Z,{id:"view.utils.deployment_viewer.table.started_at"})),l.createElement("th",null,l.createElement(m.Z,{id:"view.utils.deployment_viewer.table.completed_at"})),l.createElement("th",null,l.createElement(m.Z,{id:"view.utils.deployment_viewer.table.started_by"})),l.createElement("th",null,l.createElement(m.Z,{id:"view.utils.deployment_viewer.table.project"})),l.createElement("th",null,l.createElement(m.Z,{id:"view.utils.deployment_viewer.table.revision"})),l.createElement("th",null,l.createElement(m.Z,{id:"view.utils.deployment_viewer.table.origin"})),l.createElement("th",null,l.createElement(m.Z,{id:"view.utils.deployment_viewer.table.security"})),l.createElement("th",null,l.createElement(m.Z,{id:"view.utils.deployment_viewer.table.dmapi"}))),l.createElement("tbody",null,e))}renderWatchdog(e){return this.renderTable(l.createElement(l.Fragment,null,l.createElement("tr",null,l.createElement("td",{colSpan:11},l.createElement("h3",null,l.createElement(i.Z,{pill:!0,variant:"success"},l.createElement(m.Z,{id:"view.instance.server.deployment_info.active"}))))),this.renderCompileJob(e.activeCompileJob),e.stagedCompileJob?l.createElement(l.Fragment,null,l.createElement("tr",null,l.createElement("td",{colSpan:11},l.createElement("h3",null,l.createElement(i.Z,{pill:!0,variant:"warning"},l.createElement(m.Z,{id:"view.instance.server.deployment_info.staged"}))))),this.renderCompileJob(e.stagedCompileJob)):l.createElement(l.Fragment,null)))}renderDeployments(e){return l.createElement(l.Fragment,null,this.renderTable(l.createElement(l.Fragment,null,e.compileJobs.map((e=>this.renderCompileJob(e))))),l.createElement(h.Z,{className:"mt-4",selectPage:t=>{e.paging.loadPage(t)},totalPages:e.paging.totalPages,currentPage:e.paging.currentPage}))}renderCompileJob(e){let t=e.byondVersion;t.endsWith(".0")&&(t=t.substring(0,t.length-2));const n={day:"2-digit",year:"numeric",month:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!1,timeZoneName:"short"},i=e.revisionInformation.activeTestMerges&&e.revisionInformation.activeTestMerges.length>0,d=this.state.openTestMergesId===e.id;return l.createElement(l.Fragment,null,l.createElement("tr",{className:"nowrap",onClick:()=>{d?this.setState({openTestMergesId:null}):i&&this.setState({openTestMergesId:e.id})}},l.createElement("td",null,i?l.createElement("h5",null,l.createElement(o.Z,{overlay:l.createElement(c.Z,{id:`${e.id}-tooltip-test-merges`},l.createElement(m.Z,{id:"view.utils.deployment_viewer.test_merges_hint."+(d?"hide":"show")}))},(({ref:e,...t})=>l.createElement("span",v({ref:e},t),l.createElement(r.G,{icon:d?a.eW2:a.I4f}))))):l.createElement(l.Fragment,null)),l.createElement("td",null,e.id),l.createElement("td",null,t),l.createElement("td",null,new Date(e.job.startedAt).toLocaleString("en-CA",n)),l.createElement("td",null,new Date(e.job.stoppedAt).toLocaleString("en-CA",n)),l.createElement("td",null,e.job.startedBy.name),l.createElement("td",null,e.dmeName),l.createElement("td",null,e.revisionInformation.commitSha.substring(0,7)),l.createElement("td",null,e.revisionInformation.originCommitSha.substring(0,7)),l.createElement("td",null,null!=e.minimumSecurityLevel?Object.keys(u.ns).filter((e=>isNaN(Number(e))))[e.minimumSecurityLevel]:"N/A"),l.createElement("td",null,e.dmApiVersion)),d?l.createElement("tr",null,l.createElement("td",{colSpan:10},l.createElement(s.Z,null,l.createElement("thead",null,l.createElement("th",null,l.createElement(m.Z,{id:"view.utils.deployment_viewer.table.pr.number"})),l.createElement("th",null,l.createElement(m.Z,{id:"view.utils.deployment_viewer.table.pr.title"})),l.createElement("th",null,l.createElement(m.Z,{id:"view.utils.deployment_viewer.table.revision"})),l.createElement("th",null,l.createElement(m.Z,{id:"view.utils.deployment_viewer.table.pr.merged_by"})),l.createElement("th",null,l.createElement(m.Z,{id:"view.utils.deployment_viewer.table.pr.merged_at"})),l.createElement("th",null,l.createElement(m.Z,{id:"view.utils.deployment_viewer.table.pr.comment"}))),l.createElement("tbody",null,e.revisionInformation.activeTestMerges.map((t=>l.createElement("tr",{key:`test-merge-#${t.number}-cj-${e.id}`},l.createElement("td",null,l.createElement("a",{href:t.url},"#",t.number)),l.createElement("td",null,l.createElement("a",{href:t.url},t.titleAtMerge)),l.createElement("td",null,t.targetCommitSha.substring(0,7)),l.createElement("td",null,t.mergedBy.name),l.createElement("td",null,new Date(t.mergedAt).toLocaleString("en-CA",n)),l.createElement("td",null,t.comment||"N/A")))))))):l.createElement(l.Fragment,null))}}t.Z=g},9049:function(e,t,n){n.d(t,{fS:function(){return d},Pg:function(){return f},ZP:function(){return b}});var a=n(7814),r=n(7294),l=n(5005),i=n(2258),s=n(2318),o=n(5293),c=n(3489),m=n(4012);function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},u.apply(this,arguments)}let d;!function(e){e.Boolean="boolean",e.Number="number",e.String="string",e.Password="password",e.Enum="enum"}(d||(d={}));const p=r.forwardRef((function(e,t){return r.createElement(i.Z.Control,{value:e.value,onChange:t=>e.onChange(t.target.value),disabled:e.disabled,ref:t})})),h=r.forwardRef((function(e,t){return r.createElement(i.Z.Control,{value:e.value,onChange:t=>e.onChange(t.target.value),disabled:e.disabled,type:"password",ref:t})})),v=r.forwardRef((function(e,t){const n=Math.random().toString();return r.createElement("label",{htmlFor:n,className:"d-flex m-0 flex-grow-1 justify-content-center align-content-center"},r.createElement(i.Z.Check,{id:n,checked:e.value,onChange:t=>e.onChange(t.target.checked),type:"switch",className:"m-auto",disabled:e.disabled,ref:t}))})),E=r.forwardRef((function(e,t){return r.createElement(i.Z.Control,{value:e.value,onChange:t=>e.onChange(isNaN(t.target.valueAsNumber)?t.target.value:t.target.valueAsNumber),disabled:e.disabled,min:e.min,max:e.max,type:"number",ref:t})})),g=r.forwardRef((function(e,t){return r.createElement(i.Z.Control,{value:e.value,onChange:t=>e.onChange(parseInt(t.target.value)),disabled:e.disabled,as:"select",custom:!0,ref:t},Object.entries(e.enum).filter((([e])=>isNaN(parseInt(e)))).map((([t,n])=>e.noLocalize?r.createElement("option",{key:n,value:n},t):r.createElement(m.Z,{id:`${e.name}.${t}`,key:t},(e=>r.createElement("option",{key:n,value:n},e))))))})),f={[d.Enum]:0,[d.Number]:0,[d.Boolean]:!1,[d.String]:"",[d.Password]:""};function b(e){const[t,n]=(0,r.useState)(e.defaultValue??f[e.type]),i=(0,r.useRef)(null);(0,r.useEffect)((()=>{n(e.defaultValue??f[e.type])}),[e.defaultValue]),(0,r.useEffect)((()=>{switch(i.current&&(i.current.checkValidity()?i.current.classList.remove("is-invalid"):i.current.classList.add("is-invalid")),e.type){case d.Boolean:case d.Enum:case d.Number:case d.String:case d.Password:return void e.onChange(t,i.current?.checkValidity()??!0)}}),[t]);const b={string:p,password:h,boolean:v,[d.Number]:void 0,[d.Enum]:void 0},y=t!=(e.defaultValue??f[e.type]);return r.createElement(s.Z,null,r.createElement(o.Z,{overlay:(w=e.tooltip,w?r.createElement(c.Z,{id:w},r.createElement(m.Z,{id:w})):r.createElement(r.Fragment,null)),show:!!e.tooltip&&void 0},(({ref:t,...n})=>r.createElement(s.Z.Prepend,{className:"w-50 w-xl-40"},r.createElement(s.Z.Text,u({className:"flex-grow-1"},n),r.createElement("span",{className:y?"font-weight-bold":""},r.createElement(m.Z,{id:e.name})),r.createElement("div",{className:"ml-auto"},e.disabled?r.createElement(m.Z,{id:"generic.readonly"}):null,r.createElement("div",{ref:t,className:"d-inline-block ml-2",style:{visibility:e.tooltip?"unset":"hidden"}},r.createElement(a.G,{icon:"info"}))))))),e.type===d.Number?r.createElement(E,{value:t,onChange:e=>n(e),name:e.name,disabled:e.disabled,max:e.max,min:e.min,ref:i}):e.type===d.Enum?r.createElement(g,{value:t,onChange:e=>n(e),name:e.name,enum:e.enum,noLocalize:e.noLocalize,disabled:e.disabled}):r.createElement(b[e.type],{value:t,onChange:e=>n(e),disabled:e.disabled,name:e.type,ref:i}),r.createElement(s.Z.Append,null,r.createElement(l.Z,{style:{visibility:!y||e.disabled?"hidden":void 0},variant:"danger",onClick:()=>n(e.defaultValue??f[e.type])},r.createElement(a.G,{icon:"undo"}))));var w}},5619:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(7294),r=n(5005),l=n(5293),i=n(3489),s=n(4012),o=n(9049);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c.apply(this,arguments)}function m(e){const t=new Map,n=new Map,[m,u]=(0,a.useState)({});(0,a.useEffect)((()=>{Object.keys(e.fields).forEach((e=>{u((t=>({...t,[e]:{}})))}))}),[]);for(const[r,l]of Object.entries(e.fields))n.set(r,l),t.set(l,(0,a.useState)(l.defaultValue??o.Pg[l.type]));let d=!1,p=!1;for(const[e,a]of n){const[n]=t.get(a),r=m[e];if((a.defaultValue??o.Pg[a.type])!=n&&(d=!0),r?.invalid&&(p=!0),d&&p)break}return e.hideDisabled&&!Object.values(e.fields).some((e=>!e.disabled))?a.createElement(a.Fragment,null):a.createElement("div",null,Object.entries(e.fields).map((([n,r])=>{const{disabled:l,...i}=r;return e.hideDisabled&&l?null:a.createElement(o.ZP,c({key:n},i,{disabled:e.readOnly||l,onChange:(e,a)=>{t.get(r)[1](e),u((e=>({...e,[n]:{...e[n],invalid:!a}})))}}))})),a.createElement("div",{className:"text-center mt-2"},a.createElement(l.Z,{overlay:a.createElement(i.Z,{id:"form-invalid"},a.createElement(s.Z,{id:"generic.invalid_form"})),show:!!p&&void 0},a.createElement(r.Z,{variant:e.readOnly||p?"danger":"success",disabled:e.readOnly||!d||p,onClick:()=>{const a={};for(const[r,l]of n){const[n]=t.get(l);(l.alwaysInclude||n!=(l.defaultValue??o.Pg[l.type])||e.includeAll)&&(a[r]=n)}e.onSave(a)}},a.createElement(s.Z,{id:e.saveMessageId??"generic.save"})))))}},8425:function(e,t,n){n.d(t,{t:function(){return o}});var a=n(7294),r=n(5171),l=n.n(r),i=n(7961);function s(e){return a.createElement(l(),{src:e.obj,name:"JSON",theme:"tube",iconStyle:"triangle",collapsed:!0,displayDataTypes:!1})}function o(e){return i.ZP.showjson.value?a.createElement("div",{className:"text-left"},a.createElement(s,{obj:e.obj})):a.createElement(a.Fragment,null)}},9905:function(e,t,n){n.d(t,{Z:function(){return T}});var a=n(7814),r=n(7294),l=n(5005),i=n(2258),s=n(5293),o=n(7462),c=n(3366),m=n(4184),u=n.n(m),d=n(6792),p=n(8358),h=["active","disabled","className","style","activeLabel","children"],v=["children"],E=r.forwardRef((function(e,t){var n=e.active,a=e.disabled,l=e.className,i=e.style,s=e.activeLabel,m=e.children,d=(0,c.Z)(e,h),v=n||a?"span":p.Z;return r.createElement("li",{ref:t,style:i,className:u()(l,"page-item",{active:n,disabled:a})},r.createElement(v,(0,o.Z)({className:"page-link",disabled:a},d),m,n&&s&&r.createElement("span",{className:"sr-only"},s)))}));E.defaultProps={active:!1,disabled:!1,activeLabel:"(current)"},E.displayName="PageItem";var g=E;function f(e,t,n){function a(e){var a=e.children,l=(0,c.Z)(e,v);return r.createElement(E,l,r.createElement("span",{"aria-hidden":"true"},a||t),r.createElement("span",{className:"sr-only"},n))}return void 0===n&&(n=e),a.displayName=e,a}var b=f("First","\xab"),y=f("Prev","\u2039","Previous"),w=f("Ellipsis","\u2026","More"),Z=f("Next","\u203a"),P=f("Last","\xbb"),N=["bsPrefix","className","children","size"],C=r.forwardRef((function(e,t){var n=e.bsPrefix,a=e.className,l=e.children,i=e.size,s=(0,c.Z)(e,N),m=(0,d.vE)(n,"pagination");return r.createElement("ul",(0,o.Z)({ref:t},s,{className:u()(a,m,i&&m+"-"+i)}),l)}));C.First=b,C.Prev=y,C.Ellipsis=w,C.Item=g,C.Next=Z,C.Last=P;var x=C,_=(n(5638),["as","bsPrefix","className","children"]),k=r.forwardRef((function(e,t){var n=e.as,a=void 0===n?"div":n,l=e.bsPrefix,i=e.className,s=e.children,m=(0,c.Z)(e,_);return l=(0,d.vE)(l,"popover-header"),r.createElement(a,(0,o.Z)({ref:t},m,{className:u()(l,i)}),s)})),j=["as","bsPrefix","className","children"],S=r.forwardRef((function(e,t){var n=e.as,a=void 0===n?"div":n,l=e.bsPrefix,i=e.className,s=e.children,m=(0,c.Z)(e,j);return l=(0,d.vE)(l,"popover-body"),r.createElement(a,(0,o.Z)({ref:t},m,{className:u()(i,l)}),s)})),I=["bsPrefix","placement","className","style","children","content","arrowProps","popper","show"],O=r.forwardRef((function(e,t){var n=e.bsPrefix,a=e.placement,l=e.className,i=e.style,s=e.children,m=e.content,p=e.arrowProps,h=(e.popper,e.show,(0,c.Z)(e,I)),v=(0,d.vE)(n,"popover"),E=((null==a?void 0:a.split("-"))||[])[0];return r.createElement("div",(0,o.Z)({ref:t,role:"tooltip",style:i,"x-placement":E,className:u()(l,v,E&&"bs-popover-"+E)},h),r.createElement("div",(0,o.Z)({className:"arrow"},p)),m?r.createElement(S,null,s):s)}));O.defaultProps={placement:"right"},O.Title=k,O.Content=S;var M=O,V=n(4012);function D(){return D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},D.apply(this,arguments)}class T extends r.PureComponent{constructor(e){super(e),this.state={showGoto:!1,gotoValue:e.currentPage}}render(){const e=[],t=Math.max(this.props.totalPages-this.props.currentPage-1,0),n=Math.max(this.props.currentPage-2,0),o=Math.max(this.props.currentPage-Math.max(5-Number(this.props.currentPage!==this.props.totalPages)-t,2),2),c=Math.min(this.props.currentPage+Math.max(5-Number(1!==this.props.currentPage)-n,2),this.props.totalPages-1);for(let t=o;t<=c;t++)e.push(r.createElement(x.Item,{key:t,active:t===this.props.currentPage,onClick:()=>this.props.selectPage(t)},t));const m=this.props.totalPages>7?r.createElement(x.Ellipsis,{disabled:!0}):null,u=r.createElement(M,{id:"popover-gotopage"},r.createElement(M.Title,null,r.createElement(V.Z,{id:"generic.goto.title"})),r.createElement(M.Content,null,r.createElement("form",{className:"d-flex",onSubmit:e=>{e.preventDefault(),this.props.selectPage(this.state.gotoValue),this.setState({showGoto:!1})}},r.createElement(i.Z.Control,{className:"mr-2",type:"number",min:1,max:this.props.totalPages,value:this.state.gotoValue,onChange:e=>this.setState({gotoValue:parseInt(e.target.value)}),custom:!0}),r.createElement(l.Z,{type:"submit"},r.createElement(V.Z,{id:"generic.goto"}))))),{selectPage:d,totalPages:p,currentPage:h,...v}=this.props;return r.createElement("div",D({className:"text-center",style:{position:"sticky",bottom:"1.5em"}},v),r.createElement(x,{className:"justify-content-center"},r.createElement(x.Prev,{disabled:this.props.currentPage<=1,onClick:()=>this.props.selectPage(Math.max(this.props.currentPage-1,1))}),r.createElement(x.Item,{active:this.props.currentPage<=1,onClick:()=>this.props.selectPage(1)},"1"),m,e,m,this.props.totalPages>=2?r.createElement(x.Item,{active:this.props.currentPage>=this.props.totalPages,onClick:()=>this.props.selectPage(this.props.totalPages)},this.props.totalPages):null,this.props.totalPages>7?r.createElement(s.Z,{show:this.state.showGoto,placement:"top",overlay:u},r.createElement(x.Item,{onClick:()=>this.setState((e=>({showGoto:!e.showGoto})))},r.createElement(a.G,{icon:"search"}))):null,r.createElement(x.Next,{disabled:this.props.currentPage>=this.props.totalPages,onClick:()=>this.props.selectPage(Math.min(this.props.currentPage+1,this.props.totalPages))})))}}},6190:function(e,t,n){n.d(t,{g:function(){return a}});const a=n(7294).createContext(void 0)}}]);
//# sourceMappingURL=728.568b214f60ddb2811f69.bundle.js.map