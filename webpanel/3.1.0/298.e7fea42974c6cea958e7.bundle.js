"use strict";(self.webpackChunktgstation_server_control_panel=self.webpackChunktgstation_server_control_panel||[]).push([[298,664],{9049:function(e,t,n){n.d(t,{fS:function(){return m},Pg:function(){return E},ZP:function(){return g}});var a=n(7814),i=n(7294),l=n(5005),r=n(2258),o=n(2318),s=n(5293),c=n(3489),d=n(4012);function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},u.apply(this,arguments)}let m;!function(e){e.Boolean="boolean",e.Number="number",e.String="string",e.Password="password",e.Enum="enum"}(m||(m={}));const f=i.forwardRef((function(e,t){return i.createElement(r.Z.Control,{value:e.value,onChange:t=>e.onChange(t.target.value),disabled:e.disabled,ref:t})})),p=i.forwardRef((function(e,t){return i.createElement(r.Z.Control,{value:e.value,onChange:t=>e.onChange(t.target.value),disabled:e.disabled,type:"password",ref:t})})),v=i.forwardRef((function(e,t){const n=Math.random().toString();return i.createElement("label",{htmlFor:n,className:"d-flex m-0 flex-grow-1 justify-content-center align-content-center"},i.createElement(r.Z.Check,{id:n,checked:e.value,onChange:t=>e.onChange(t.target.checked),type:"switch",className:"m-auto",disabled:e.disabled,ref:t}))})),b=i.forwardRef((function(e,t){return i.createElement(r.Z.Control,{value:e.value,onChange:t=>e.onChange(isNaN(t.target.valueAsNumber)?t.target.value:t.target.valueAsNumber),disabled:e.disabled,min:e.min,max:e.max,type:"number",ref:t})})),y=i.forwardRef((function(e,t){return i.createElement(r.Z.Control,{value:e.value,onChange:t=>e.onChange(parseInt(t.target.value)),disabled:e.disabled,as:"select",custom:!0,ref:t},Object.entries(e.enum).filter((([e])=>isNaN(parseInt(e)))).map((([t,n])=>i.createElement(d.Z,{id:`${e.name}.${t}`,key:t},(e=>i.createElement("option",{key:n,value:n},e))))))})),E={[m.Enum]:0,[m.Number]:0,[m.Boolean]:!1,[m.String]:"",[m.Password]:""};function g(e){const[t,n]=(0,i.useState)(e.defaultValue??E[e.type]),r=(0,i.useRef)(null);(0,i.useEffect)((()=>{n(e.defaultValue??E[e.type])}),[e.defaultValue]),(0,i.useEffect)((()=>{switch(r.current&&(r.current.checkValidity()?r.current.classList.remove("is-invalid"):r.current.classList.add("is-invalid")),e.type){case m.Boolean:case m.Enum:case m.Number:case m.String:case m.Password:return void e.onChange(t,r.current?.checkValidity()??!0)}}),[t]);const g={string:f,password:p,boolean:v,[m.Number]:void 0,[m.Enum]:void 0},h=t!=(e.defaultValue??E[e.type]);return i.createElement(o.Z,null,i.createElement(s.Z,{overlay:(Z=e.tooltip,Z?i.createElement(c.Z,{id:Z},i.createElement(d.Z,{id:Z})):i.createElement(i.Fragment,null)),show:!!e.tooltip&&void 0},(({ref:t,...n})=>i.createElement(o.Z.Prepend,{className:"w-50 w-xl-40"},i.createElement(o.Z.Text,u({className:"flex-grow-1"},n),i.createElement("span",{className:h?"font-weight-bold":""},i.createElement(d.Z,{id:e.name})),i.createElement("div",{className:"ml-auto"},e.disabled?i.createElement(d.Z,{id:"generic.readonly"}):null,i.createElement("div",{ref:t,className:"d-inline-block ml-2",style:{visibility:e.tooltip?"unset":"hidden"}},i.createElement(a.G,{icon:"info"}))))))),e.type===m.Number?i.createElement(b,{value:t,onChange:e=>n(e),name:e.name,disabled:e.disabled,max:e.max,min:e.min,ref:r}):e.type===m.Enum?i.createElement(y,{value:t,onChange:e=>n(e),name:e.name,enum:e.enum,disabled:e.disabled}):i.createElement(g[e.type],{value:t,onChange:e=>n(e),disabled:e.disabled,name:e.type,ref:r}),i.createElement(o.Z.Append,null,i.createElement(l.Z,{style:{visibility:!h||e.disabled?"hidden":void 0},variant:"danger",onClick:()=>n(e.defaultValue??E[e.type])},i.createElement(a.G,{icon:"undo"}))));var Z}},5619:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(7294),i=n(5005),l=n(5293),r=n(3489),o=n(4012),s=n(9049);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c.apply(this,arguments)}function d(e){const t=new Map,n=new Map,[d,u]=(0,a.useState)({});(0,a.useEffect)((()=>{Object.keys(e.fields).forEach((e=>{u((t=>({...t,[e]:{}})))}))}),[]);for(const[i,l]of Object.entries(e.fields))n.set(i,l),t.set(l,(0,a.useState)(l.defaultValue??s.Pg[l.type]));let m=!1,f=!1;for(const[e,a]of n){const[n]=t.get(a),i=d[e];if((a.defaultValue??s.Pg[a.type])!=n&&(m=!0),i?.invalid&&(f=!0),m&&f)break}return e.hideDisabled&&!Object.values(e.fields).some((e=>!e.disabled))?a.createElement(a.Fragment,null):a.createElement("div",null,Object.entries(e.fields).map((([n,i])=>{const{disabled:l,...r}=i;return e.hideDisabled&&l?null:a.createElement(s.ZP,c({key:n},r,{disabled:e.readOnly||l,onChange:(e,a)=>{t.get(i)[1](e),u((e=>({...e,[n]:{...e[n],invalid:!a}})))}}))})),a.createElement("div",{className:"text-center mt-2"},a.createElement(l.Z,{overlay:a.createElement(r.Z,{id:"form-invalid"},a.createElement(o.Z,{id:"generic.invalid_form"})),show:!!f&&void 0},a.createElement(i.Z,{variant:e.readOnly||f?"danger":"success",disabled:e.readOnly||!m||f,onClick:()=>{const a={};for(const[i,l]of n){const[n]=t.get(l);(l.alwaysInclude||n!=(l.defaultValue??s.Pg[l.type])||e.includeAll)&&(a[i]=n)}e.onSave(a)}},a.createElement(o.Z,{id:"generic.save"})))))}},8425:function(e,t,n){n.d(t,{t:function(){return s}});var a=n(7294),i=n(5171),l=n.n(i),r=n(7961);function o(e){return a.createElement(l(),{src:e.obj,name:"JSON",theme:"tube",iconStyle:"triangle",collapsed:!0,displayDataTypes:!1})}function s(e){return r.ZP.showjson.value?a.createElement("div",{className:"text-left"},a.createElement(o,{obj:e.obj})):a.createElement(a.Fragment,null)}},2741:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7294),i=n(5293),l=n(3489),r=n(4012);function o(e){return a.createElement(i.Z,{show:e.show,overlay:a.createElement(l.Z,{id:e.tooltipid},a.createElement(r.Z,{id:e.tooltipid}))},e.children)}},4298:function(e,t,n){n.r(t),n.d(t,{Deployment:function(){return g}});var a=n(7294),i=n(5005),l=n(4012),r=n(5856),o=n(8509),s=n(3803),c=n(9521),d=n(6190),u=n(6964),m=n(3e3),f=n(9635),p=n(9049),v=n(5619),b=n(8425),y=n(5855),E=n(2741);function g(){const e=(0,a.useContext)(d.g),t=(0,a.useState)([]),[n,g]=(0,a.useState)(!0),[h,Z]=(0,a.useState)(null),w=(0,u.$A)(e.instancePermissionSet,o.xb.Read),S=(0,u.$A)(e.instancePermissionSet,o.xb.Compile);async function C(){if(!w)return g(!1);g(!0);const n=await r.Z.getDeployInfo(e.instance.id);g(!1),n.code===s.G.OK?Z(n.payload):(0,m.iT)(t,n.error)}let N;(0,a.useEffect)((()=>{C()}),[e.instance.id]);const x=/(?:(?<days>\d+)\.)?(?<hours>\d+):(?<minutes>\d+):(?<seconds>\d+)/.exec(h?.timeout??"");if(x){const e=x.groups;N=60*(24*parseInt(e.days??0)+parseInt(e.hours))+parseInt(e.minutes)+parseInt(e.seconds)/60}const P={projectName:{type:p.fS.String,name:"fields.instance.deploy.projectname",tooltip:"fields.instance.deploy.projectname.desc",defaultValue:h?.projectName,disabled:!(0,u.$A)(e.instancePermissionSet,o.xb.SetDme)},timeout:{type:p.fS.Number,name:"fields.instance.deploy.timeout",tooltip:"fields.instance.deploy.timeout.desc",defaultValue:N,disabled:!(0,u.$A)(e.instancePermissionSet,o.xb.SetTimeout)},apiValidationPort:{type:p.fS.Number,min:1,max:65535,name:"fields.instance.deploy.apiport",tooltip:"fields.instance.deploy.apiport.desc",defaultValue:h?.apiValidationPort,disabled:!(0,u.$A)(e.instancePermissionSet,o.xb.SetApiValidationPort)},apiValidationSecurityLevel:{type:p.fS.Enum,enum:o.ns,name:"fields.instance.deploy.seclevel",tooltip:"fields.instance.deploy.seclevel.desc",defaultValue:h?.apiValidationSecurityLevel,disabled:!(0,u.$A)(e.instancePermissionSet,o.xb.SetSecurityLevel)},requireDMApiValidation:{type:p.fS.Boolean,name:"fields.instance.deploy.validateapi",tooltip:"fields.instance.deploy.validateapi.desc",defaultValue:h?.requireDMApiValidation,disabled:!(0,u.$A)(e.instancePermissionSet,o.xb.SetApiValidationRequirement)}};return a.createElement("div",{className:"text-center"},a.createElement(b.t,{obj:{deployInfo:h}}),a.createElement("h3",null,a.createElement(l.Z,{id:"view.instance.deploy.title"})),w?null:a.createElement(f.Z,{title:"view.instance.no_metadata"}),(0,m.hP)(t),n?a.createElement(y.Z,null):a.createElement(a.Fragment,null,a.createElement(v.Z,{hideDisabled:!w,fields:P,onSave:async n=>{let a;if(n.timeout){const e=Math.floor(n.timeout/1440);n.timeout-=1440*e;const t=Math.floor(n.timeout/60);n.timeout-=60*t;const i=Math.floor(n.timeout);n.timeout-=i;const l=Math.floor(60*n.timeout);a=e?`${e}.${t}:${i}:${l}`:`${t}:${i}:${l}`}const i={...n,timeout:a};g(!0);const l=await r.Z.updateDeployInfo(e.instance.id,i);l.code===s.G.ERROR?(0,m.iT)(t,l.error):await C(),g(!1)}}),a.createElement("hr",null),a.createElement(E.Z,{tooltipid:"generic.no_perm",show:!S&&void 0},a.createElement(i.Z,{disabled:!S,onClick:async()=>{const n=await r.Z.startCompile(e.instance.id);n.code===s.G.ERROR?(0,m.iT)(t,n.error):(c.Z.registerJob(n.payload,e.instance.id),c.Z.fastmode=5)}},a.createElement(l.Z,{id:"view.instance.deploy.deploy"})))))}},6190:function(e,t,n){n.d(t,{g:function(){return a}});const a=n(7294).createContext(void 0)},2318:function(e,t,n){var a=n(3366),i=n(7462),l=n(4184),r=n.n(l),o=n(7294),s=n(4680),c=n(6792),d=["bsPrefix","size","hasValidation","className","as"],u=(0,s.Z)("input-group-append"),m=(0,s.Z)("input-group-prepend"),f=(0,s.Z)("input-group-text",{Component:"span"}),p=o.forwardRef((function(e,t){var n=e.bsPrefix,l=e.size,s=e.hasValidation,u=e.className,m=e.as,f=void 0===m?"div":m,p=(0,a.Z)(e,d);return n=(0,c.vE)(n,"input-group"),o.createElement(f,(0,i.Z)({ref:t},p,{className:r()(u,n,l&&n+"-"+l,s&&"has-validation")}))}));p.displayName="InputGroup",p.Text=f,p.Radio=function(e){return o.createElement(f,null,o.createElement("input",(0,i.Z)({type:"radio"},e)))},p.Checkbox=function(e){return o.createElement(f,null,o.createElement("input",(0,i.Z)({type:"checkbox"},e)))},p.Append=u,p.Prepend=m,t.Z=p}}]);
//# sourceMappingURL=298.e7fea42974c6cea958e7.bundle.js.map