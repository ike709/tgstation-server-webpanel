"use strict";(self.webpackChunktgstation_server_control_panel=self.webpackChunktgstation_server_control_panel||[]).push([[46,664],{9049:function(e,t,a){a.d(t,{fS:function(){return m},Pg:function(){return b},ZP:function(){return h}});var n=a(7814),r=a(7294),i=a(5005),s=a(2258),l=a(2318),c=a(5293),o=a(3489),d=a(4012);function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},u.apply(this,arguments)}let m;!function(e){e.Boolean="boolean",e.Number="number",e.String="string",e.Password="password",e.Enum="enum"}(m||(m={}));const f=r.forwardRef((function(e,t){return r.createElement(s.Z.Control,{value:e.value,onChange:t=>e.onChange(t.target.value),disabled:e.disabled,ref:t})})),p=r.forwardRef((function(e,t){return r.createElement(s.Z.Control,{value:e.value,onChange:t=>e.onChange(t.target.value),disabled:e.disabled,type:"password",ref:t})})),v=r.forwardRef((function(e,t){const a=Math.random().toString();return r.createElement("label",{htmlFor:a,className:"d-flex m-0 flex-grow-1 justify-content-center align-content-center"},r.createElement(s.Z.Check,{id:a,checked:e.value,onChange:t=>e.onChange(t.target.checked),type:"switch",className:"m-auto",disabled:e.disabled,ref:t}))})),g=r.forwardRef((function(e,t){return r.createElement(s.Z.Control,{value:e.value,onChange:t=>e.onChange(isNaN(t.target.valueAsNumber)?t.target.value:t.target.valueAsNumber),disabled:e.disabled,min:e.min,max:e.max,type:"number",ref:t})})),E=r.forwardRef((function(e,t){return r.createElement(s.Z.Control,{value:e.value,onChange:t=>e.onChange(parseInt(t.target.value)),disabled:e.disabled,as:"select",custom:!0,ref:t},Object.entries(e.enum).filter((([e])=>isNaN(parseInt(e)))).map((([t,a])=>r.createElement(d.Z,{id:`${e.name}.${t}`,key:t},(e=>r.createElement("option",{key:a,value:a},e))))))})),b={[m.Enum]:0,[m.Number]:0,[m.Boolean]:!1,[m.String]:"",[m.Password]:""};function h(e){const[t,a]=(0,r.useState)(e.defaultValue??b[e.type]),s=(0,r.useRef)(null);(0,r.useEffect)((()=>{a(e.defaultValue??b[e.type])}),[e.defaultValue]),(0,r.useEffect)((()=>{s.current&&(s.current.checkValidity()?s.current.classList.remove("is-invalid"):s.current.classList.add("is-invalid")),h(t)}),[t]);const h=t=>{switch(e.type){case m.Boolean:case m.Enum:case m.Number:case m.String:case m.Password:return void e.onChange(t,s.current?.checkValidity()??!0)}},y={string:f,password:p,boolean:v,[m.Number]:void 0,[m.Enum]:void 0},w=t!=(e.defaultValue??b[e.type]);return r.createElement(l.Z,null,r.createElement(c.Z,{overlay:(Z=e.tooltip,Z?r.createElement(o.Z,{id:Z},r.createElement(d.Z,{id:Z})):r.createElement(r.Fragment,null)),show:!!e.tooltip&&void 0},(({ref:t,...a})=>r.createElement(l.Z.Prepend,{className:"w-40"},r.createElement(l.Z.Text,u({className:"flex-grow-1"},a),r.createElement("span",{className:w?"font-weight-bold":""},r.createElement(d.Z,{id:e.name})),r.createElement("div",{className:"ml-auto"},e.disabled?r.createElement(d.Z,{id:"generic.readonly"}):null,r.createElement("div",{ref:t,className:"d-inline-block ml-2",style:{visibility:e.tooltip?"unset":"hidden"}},r.createElement(n.G,{icon:"info"}))))))),e.type===m.Number?r.createElement(g,{value:t,onChange:e=>a(e),name:e.name,disabled:e.disabled,max:e.max,min:e.min,ref:s}):e.type===m.Enum?r.createElement(E,{value:t,onChange:e=>a(e),name:e.name,enum:e.enum,disabled:e.disabled}):r.createElement(y[e.type],{value:t,onChange:e=>a(e),disabled:e.disabled,name:e.type,ref:s}),r.createElement(l.Z.Append,null,r.createElement(i.Z,{style:{visibility:!w||e.disabled?"hidden":void 0},variant:"danger",onClick:()=>a(e.defaultValue??b[e.type])},r.createElement(n.G,{icon:"undo"}))));var Z}},5619:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(7294),r=a(5005),i=a(5293),s=a(3489),l=a(4012),c=a(9049);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o.apply(this,arguments)}function d(e){const t=new Map,a=new Map,[d,u]=(0,n.useState)({});(0,n.useEffect)((()=>{Object.keys(e.fields).forEach((e=>{u((t=>({...t,[e]:{}})))}))}),[]),Object.entries(e.fields).forEach((([e,r])=>{a.set(e,r),t.set(r,(0,n.useState)(r.defaultValue??c.Pg[r.type]))}));let m=!1,f=!1;for(const[e,n]of a){const[a]=t.get(n),r=d[e];if((n.defaultValue??c.Pg[n.type])!=a&&(m=!0),r?.invalid&&(f=!0),m&&f)break}return e.hideDisabled&&!Object.values(e.fields).some((e=>!e.disabled))?n.createElement(n.Fragment,null):n.createElement("div",null,Object.entries(e.fields).map((([a,r])=>{const{disabled:i,...s}=r;return e.hideDisabled&&i?null:n.createElement(c.ZP,o({key:a},s,{disabled:e.readOnly||i,onChange:(e,n)=>{t.get(r)[1](e),u((e=>({...e,[a]:{...e[a],invalid:!n}})))}}))})),n.createElement("div",{className:"text-center mt-2"},n.createElement(i.Z,{overlay:n.createElement(s.Z,{id:"form-invalid"},n.createElement(l.Z,{id:"generic.invalid_form"})),show:!!f&&void 0},n.createElement(r.Z,{variant:e.readOnly||f?"danger":"success",disabled:e.readOnly||!m||f,onClick:()=>{const n={};for(const[r,i]of a){const[a]=t.get(i);(i.alwaysInclude||a!=(i.defaultValue??c.Pg[i.type])||e.includeAll)&&(n[r]=a)}e.onSave(n)}},n.createElement(l.Z,{id:"generic.save"})))))}},8425:function(e,t,a){a.d(t,{t:function(){return c}});var n=a(7294),r=a(5171),i=a.n(r),s=a(7961);function l(e){return n.createElement(i(),{src:e.obj,name:"JSON",theme:"tube",iconStyle:"triangle",collapsed:!0,displayDataTypes:!1})}function c(e){return s.ZP.showjson.value?n.createElement("div",{className:"text-left"},n.createElement(l,{obj:e.obj})):n.createElement(n.Fragment,null)}},6642:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(7294),r=a(5881),i=a(4012),s=a(6755);class l extends n.Component{render(){return n.createElement(r.Z,{className:"bg-transparent",border:"info"},n.createElement(r.Z.Header,{className:"bg-info text-dark font-weight-bold"},n.createElement(i.Z,{id:"generic.wip"})),n.createElement(r.Z.Body,null,n.createElement(r.Z.Title,null,n.createElement(i.Z,{id:"generic.wip.desc"}),n.createElement("a",{href:"https://github.com/tgstation/Tgstation.Server.ControlPanel/releases/latest"},"https://github.com/tgstation/Tgstation.Server.ControlPanel/releases/latest")),n.createElement(r.Z.Text,{as:"pre",className:"bg-transparent text-info"},n.createElement("code",null,`Version: ${s.q4}\nWebpanel Mode: ${s.IK}\nCurrent route: ${window.location.toString()}`))))}}},6046:function(e,t,a){a.r(t),a.d(t,{default:function(){return S}});var n,r=a(7294),i=a(7977),s=a(5005),l=a(5293),c=a(3489),o=a(4012),d=a(7179),u=a(8509),m=a(3803),f=a(9521),p=a(6190),v=a(6964),g=a(3e3),E=a(9635),b=a(9049),h=a(5619),y=a(8425),w=a(5855),Z=a(6642);function S(){const e=(0,r.useContext)(p.g),[t,a]=(0,r.useState)(),[S,N]=(0,r.useState)(!1),P=(0,r.useState)([]);async function C(){if(!(0,v.mg)(e.instancePermissionSet,u.py.ReadMetadata))return a({});const t=await d.Z.getWatchdogStatus(e.instance.id);t.code===m.G.ERROR?(0,g.iT)(P,t.error):a(t.payload)}async function R(t){N(!0);const a=await d.Z.updateWatchdogStatus(e.instance.id,t);a.code===m.G.ERROR&&(0,g.iT)(P,a.error),await C(),N(!1)}if((0,r.useEffect)((()=>{C()}),[]),!t)return r.createElement(r.Fragment,null,(0,g.hP)(P));if(S)return r.createElement(w.Z,null);const x={autoStart:{type:b.fS.Boolean,name:"fields.instance.watchdog.autostart",defaultValue:t.autoStart,disabled:!(0,v.mg)(e.instancePermissionSet,u.py.SetAutoStart)},port:{type:b.fS.Number,name:"fields.instance.watchdog.port",defaultValue:t.port,min:0,max:65535,disabled:!(0,v.mg)(e.instancePermissionSet,u.py.SetPort)},visibility:{type:b.fS.Enum,name:"fields.instance.watchdog.visibility",defaultValue:t.visibility,enum:u.Ye,disabled:!(0,v.mg)(e.instancePermissionSet,u.py.SetVisibility)},securityLevel:{type:b.fS.Enum,name:"fields.instance.watchdog.securitylevel",defaultValue:t.securityLevel,enum:u.ns,disabled:!(0,v.mg)(e.instancePermissionSet,u.py.SetSecurity)},startupTimeout:{type:b.fS.Number,name:"fields.instance.watchdog.timeout.startup",defaultValue:t.startupTimeout,min:0,disabled:!(0,v.mg)(e.instancePermissionSet,u.py.SetStartupTimeout)},topicRequestTimeout:{type:b.fS.Number,name:"fields.instance.watchdog.timeout.topic",defaultValue:t.topicRequestTimeout,min:0,disabled:!(0,v.mg)(e.instancePermissionSet,u.py.SetTopicTimeout)},heartbeatSeconds:{type:b.fS.Number,name:"fields.instance.watchdog.heartbeat",defaultValue:t.heartbeatSeconds,min:0,disabled:!(0,v.mg)(e.instancePermissionSet,u.py.SetHeartbeatInterval)},allowWebClient:{type:b.fS.Boolean,name:"fields.instance.watchdog.allowwebclient",defaultValue:t.allowWebClient,disabled:!(0,v.mg)(e.instancePermissionSet,u.py.SetWebClient)},additionalParameters:{type:b.fS.String,name:"fields.instance.watchdog.additionalparams",defaultValue:t.additionalParameters,disabled:!(0,v.mg)(e.instancePermissionSet,u.py.SetAdditionalParameters)}},k=Object.values(x).some((e=>!e.disabled)),O=r.createElement(c.Z,{id:"generic.no_perm"},r.createElement(o.Z,{id:"generic.no_perm"})),V=(0,v.mg)(e.instancePermissionSet,u.py.Start),_=(0,v.mg)(e.instancePermissionSet,u.py.Shutdown),T=(0,v.mg)(e.instancePermissionSet,u.py.Restart),j=(0,v.mg)(e.instancePermissionSet,u.py.CreateDump),W=(0,v.mg)(e.instancePermissionSet,u.py.ReadMetadata),G=(0,v.mg)(e.instancePermissionSet,u.py.SoftShutdown)||(0,v.mg)(e.instancePermissionSet,u.py.SoftRestart),A=V||_||T||j;return r.createElement("div",null,r.createElement(y.t,{obj:t}),(0,g.hP)(P),r.createElement("h2",{className:"text-center"},r.createElement(o.Z,{id:"view.instance.server.status"}),r.createElement(i.Z,{pill:!0,variant:t.status===u.Ni.Online?"success":t.status===u.Ni.Offline?"danger":"warning"},r.createElement(o.Z,{id:`view.instance.server.status.${u.Ni[t.status]}`}))),r.createElement("hr",null),r.createElement("h3",{className:"text-center"},r.createElement(o.Z,{id:"view.instance.server.settings"})),W?null:k?r.createElement(E.Z,{title:"view.instance.server.no_metadata"}):r.createElement(E.Z,{title:"view.instance.server.no_metadata_and_no_settings"}),r.createElement(h.Z,{fields:x,onSave:R,hideDisabled:!W}),r.createElement("hr",null),r.createElement("h3",{className:"text-center"},r.createElement(o.Z,{id:"view.instance.server.actions"})),A?r.createElement(r.Fragment,null,W?null:r.createElement(E.Z,{title:"view.instance.server.no_metadata_actions"}),r.createElement("div",{className:"text-center mb-3"},r.createElement(l.Z,{overlay:O,show:!V&&void 0},r.createElement(s.Z,{variant:"success",className:"mx-2",onClick:async function(){N(!0);const t=await d.Z.startWatchdog(e.instance.id);t.code===m.G.ERROR?(0,g.iT)(P,t.error):(f.Z.registerCallback(t.payload.id,(()=>{C()})),f.Z.fastmode=5,await C()),N(!1)},disabled:W&&t.status!=u.Ni.Offline||!V},r.createElement(o.Z,{id:"view.instance.server.start"}))),r.createElement(l.Z,{overlay:O,show:!_&&void 0},r.createElement(s.Z,{variant:"danger",className:"mx-2",onClick:async function(){N(!0);const t=await d.Z.stopWatchdog(e.instance.id);t.code===m.G.ERROR?(0,g.iT)(P,t.error):await C(),N(!1)},disabled:W&&t.status!=u.Ni.Online||!_},r.createElement(o.Z,{id:"view.instance.server.stop"}))),r.createElement(l.Z,{overlay:O,show:!T&&void 0},r.createElement(s.Z,{variant:"warning",className:"mx-2",onClick:async function(){N(!0);const t=await d.Z.restartWatchdog(e.instance.id);t.code===m.G.ERROR?(0,g.iT)(P,t.error):(f.Z.registerCallback(t.payload.id,(()=>{C()})),f.Z.fastmode=5,await C()),N(!1)},disabled:W&&t.status!=u.Ni.Online||!T},r.createElement(o.Z,{id:"view.instance.server.restart"}))),r.createElement(l.Z,{overlay:O,show:!j&&void 0},r.createElement(s.Z,{variant:"info",className:"mx-2",onClick:async function(){N(!0);const t=await d.Z.dumpWatchdog(e.instance.id);t.code===m.G.ERROR?(0,g.iT)(P,t.error):f.Z.fastmode=5,N(!1)},disabled:W&&t.status!=u.Ni.Online||!j},r.createElement(o.Z,{id:"view.instance.server.dump"}))))):r.createElement(E.Z,{title:"view.instance.server.no_actions"}),!W&&G?r.createElement(E.Z,{title:"view.instance.server.no_metadata_graceful"}):null,W||G?r.createElement("div",{className:"w-75 mx-auto"},r.createElement(b.ZP,{name:"view.instance.graceful",type:b.fS.Enum,enum:n,tooltip:"view.instance.graceful.desc",defaultValue:t.softRestart?n.Restart:t.softShutdown?n.Stop:n.None,disabled:!G,onChange:e=>{switch(e){case n.None:if(!t?.softRestart&&!t?.softShutdown)return;R({softShutdown:!t.softShutdown&&void 0,softRestart:!t.softRestart&&void 0});break;case n.Stop:if(t?.softShutdown)return;R({softShutdown:!0});break;case n.Restart:if(t?.softRestart)return;R({softRestart:!0})}}})):A?r.createElement(E.Z,{title:"view.instance.server.no_graceful"}):null,r.createElement("hr",null),r.createElement("h3",{className:"text-center"},r.createElement(o.Z,{id:"view.instance.server.deployment_info"})),r.createElement(Z.Z,null))}!function(e){e[e.None=0]="None",e[e.Stop=1]="Stop",e[e.Restart=2]="Restart"}(n||(n={}))},6190:function(e,t,a){a.d(t,{g:function(){return n}});const n=a(7294).createContext(void 0)},7977:function(e,t,a){var n=a(7462),r=a(3366),i=a(4184),s=a.n(i),l=a(7294),c=a(6792),o=["bsPrefix","variant","pill","className","as"],d=l.forwardRef((function(e,t){var a=e.bsPrefix,i=e.variant,d=e.pill,u=e.className,m=e.as,f=void 0===m?"span":m,p=(0,r.Z)(e,o),v=(0,c.vE)(a,"badge");return l.createElement(f,(0,n.Z)({ref:t},p,{className:s()(u,v,d&&v+"-pill",i&&v+"-"+i)}))}));d.displayName="Badge",d.defaultProps={pill:!1},t.Z=d},2318:function(e,t,a){var n=a(3366),r=a(7462),i=a(4184),s=a.n(i),l=a(7294),c=a(4680),o=a(6792),d=["bsPrefix","size","hasValidation","className","as"],u=(0,c.Z)("input-group-append"),m=(0,c.Z)("input-group-prepend"),f=(0,c.Z)("input-group-text",{Component:"span"}),p=l.forwardRef((function(e,t){var a=e.bsPrefix,i=e.size,c=e.hasValidation,u=e.className,m=e.as,f=void 0===m?"div":m,p=(0,n.Z)(e,d);return a=(0,o.vE)(a,"input-group"),l.createElement(f,(0,r.Z)({ref:t},p,{className:s()(u,a,i&&a+"-"+i,c&&"has-validation")}))}));p.displayName="InputGroup",p.Text=f,p.Radio=function(e){return l.createElement(f,null,l.createElement("input",(0,r.Z)({type:"radio"},e)))},p.Checkbox=function(e){return l.createElement(f,null,l.createElement("input",(0,r.Z)({type:"checkbox"},e)))},p.Append=u,p.Prepend=m,t.Z=p}}]);
//# sourceMappingURL=46.b8935a8f41ce5fd15a2a.bundle.js.map