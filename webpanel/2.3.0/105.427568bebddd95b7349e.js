(self.webpackChunktgstation_server_control_panel=self.webpackChunktgstation_server_control_panel||[]).push([[105],{9657:function(e,t,r){"use strict";r.d(t,{Z:function(){return G}});var n=r(67814),a=r(67294),o=r(35005),l=r(32258),s=r(86828),c=r(22122),i=r(19756),u=r(94184),p=r.n(u),f=r(76792),m=r(48358),d=a.forwardRef((function(e,t){var r=e.active,n=e.disabled,o=e.className,l=e.style,s=e.activeLabel,u=e.children,f=(0,i.Z)(e,["active","disabled","className","style","activeLabel","children"]),d=r||n?"span":m.Z;return a.createElement("li",{ref:t,style:l,className:p()(o,"page-item",{active:r,disabled:n})},a.createElement(d,(0,c.Z)({className:"page-link",disabled:n},f),u,r&&s&&a.createElement("span",{className:"sr-only"},s)))}));d.defaultProps={active:!1,disabled:!1,activeLabel:"(current)"},d.displayName="PageItem";var h=d;function g(e,t,r){function n(e){var n=e.children,o=(0,i.Z)(e,["children"]);return a.createElement(d,o,a.createElement("span",{"aria-hidden":"true"},n||t),a.createElement("span",{className:"sr-only"},r))}return void 0===r&&(r=e),n.displayName=e,n}var v=g("First","«"),y=g("Prev","‹","Previous"),b=g("Ellipsis","…","More"),E=g("Next","›"),P=g("Last","»"),w=a.forwardRef((function(e,t){var r=e.bsPrefix,n=e.className,o=e.children,l=e.size,s=(0,i.Z)(e,["bsPrefix","className","children","size"]),u=(0,f.vE)(r,"pagination");return a.createElement("ul",(0,c.Z)({ref:t},s,{className:p()(n,u,l&&u+"-"+l)}),o)}));w.First=v,w.Prev=y,w.Ellipsis=b,w.Item=h,w.Next=E,w.Last=P;var Z=w,N=(r(55638),a.forwardRef((function(e,t){var r=e.as,n=void 0===r?"div":r,o=e.bsPrefix,l=e.className,s=e.children,u=(0,i.Z)(e,["as","bsPrefix","className","children"]);return o=(0,f.vE)(o,"popover-header"),a.createElement(n,(0,c.Z)({ref:t},u,{className:p()(o,l)}),s)}))),O=a.forwardRef((function(e,t){var r=e.as,n=void 0===r?"div":r,o=e.bsPrefix,l=e.className,s=e.children,u=(0,i.Z)(e,["as","bsPrefix","className","children"]);return o=(0,f.vE)(o,"popover-body"),a.createElement(n,(0,c.Z)({ref:t},u,{className:p()(l,o)}),s)})),k=a.forwardRef((function(e,t){var r=e.bsPrefix,n=e.placement,o=e.className,l=e.style,s=e.children,u=e.content,m=e.arrowProps,d=(e.popper,e.show,(0,i.Z)(e,["bsPrefix","placement","className","style","children","content","arrowProps","popper","show"])),h=(0,f.vE)(r,"popover"),g=((null==n?void 0:n.split("-"))||[])[0];return a.createElement("div",(0,c.Z)({ref:t,role:"tooltip",style:l,"x-placement":g,className:p()(o,h,g&&"bs-popover-"+g)},d),a.createElement("div",(0,c.Z)({className:"arrow"},m)),u?a.createElement(O,null,s):s)}));k.defaultProps={placement:"right"},k.Title=N,k.Content=O;var x=k,R=r(44012);function S(e){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function _(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function L(e,t){return(L=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function C(e,t){return!t||"object"!==S(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function M(e){return(M=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var G=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&L(e,t)}(p,e);var t,r,c,i,u=(c=p,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=M(c);if(i){var r=M(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return C(this,e)});function p(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,p),(t=u.call(this,e)).state={showGoto:!1,gotoValue:e.currentPage},t}return t=p,(r=[{key:"render",value:function(){for(var e=this,t=[],r=Math.max(this.props.totalPages-this.props.currentPage-1,0),c=Math.max(this.props.currentPage-2,0),i=Math.max(this.props.currentPage-Math.max(5-Number(this.props.currentPage!==this.props.totalPages)-r,2),2),u=Math.min(this.props.currentPage+Math.max(5-Number(1!==this.props.currentPage)-c,2),this.props.totalPages-1),p=function(r){t.push(a.createElement(Z.Item,{key:r,active:r===e.props.currentPage,onClick:function(){return e.props.selectPage(r)}},r))},f=i;f<=u;f++)p(f);var m=this.props.totalPages>7?a.createElement(Z.Ellipsis,{disabled:!0}):null,d=a.createElement(x,{id:"popover-gotopage"},a.createElement(x.Title,null,a.createElement(R.Z,{id:"generic.goto.title"})),a.createElement(x.Content,null,a.createElement("form",{className:"d-flex",onSubmit:function(t){t.preventDefault(),e.props.selectPage(e.state.gotoValue),e.setState({showGoto:!1})}},a.createElement(l.Z.Control,{className:"mr-2",type:"number",min:1,max:this.props.totalPages,value:this.state.gotoValue,onChange:function(t){return e.setState({gotoValue:parseInt(t.target.value)})},custom:!0}),a.createElement(o.Z,{type:"submit"},a.createElement(R.Z,{id:"generic.goto"}))))),h=this.props,g=(h.selectPage,h.totalPages,h.currentPage,function(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}(h,["selectPage","totalPages","currentPage"]));return a.createElement("div",j({className:"text-center"},g),a.createElement(Z,{className:"justify-content-center"},a.createElement(Z.Prev,{disabled:this.props.currentPage<=1,onClick:function(){return e.props.selectPage(Math.max(e.props.currentPage-1,1))}}),a.createElement(Z.Item,{active:this.props.currentPage<=1,onClick:function(){return e.props.selectPage(1)}},"1"),m,t,m,this.props.totalPages>=2?a.createElement(Z.Item,{active:this.props.currentPage>=this.props.totalPages,onClick:function(){return e.props.selectPage(e.props.totalPages)}},this.props.totalPages):null,this.props.totalPages>7?a.createElement(s.Z,{show:this.state.showGoto,placement:"top",overlay:d},a.createElement(Z.Item,{onClick:function(){return e.setState((function(e){return{showGoto:!e.showGoto}}))}},a.createElement(n.G,{icon:"search"}))):null,a.createElement(Z.Next,{disabled:this.props.currentPage>=this.props.totalPages,onClick:function(){return e.props.selectPage(Math.min(e.props.currentPage+1,e.props.totalPages))}})))}}])&&_(t.prototype,r),p}(a.PureComponent)},90105:function(e,t,r){"use strict";r.r(t);var n=r(67294),a=r(35005),o=r(10682),l=r(86828),s=r(75147),c=r(43489),i=r(44012),u=r(48272),p=r(41153),f=r(73727),m=r(34820),d=r(36800),h=r(38592),g=r(42540),v=r(3429),y=r(43307),b=r(71739),E=r(9657);function P(e){return(P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,t,r,n,a,o,l){try{var s=e[o](l),c=s.value}catch(e){return void r(e)}s.done?t(c):Promise.resolve(c).then(n,a)}function Z(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function l(e){w(o,n,a,l,s,"next",e)}function s(e){w(o,n,a,l,s,"throw",e)}l(void 0)}))}}function N(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function k(e,t){return!t||"object"!==P(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}t.default=(0,p.EN)(function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(L,e);var t,r,p,P,w,R,S,j,_=(S=L,j=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=x(S);if(j){var r=x(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return k(this,e)});function L(e){var t,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,L),(r=_.call(this,e)).state={errors:[],loading:!0,logs:[],page:null!==(t=v.Mq.loglistpage)&&void 0!==t?t:1},r}return t=L,(r=[{key:"componentDidUpdate",value:(R=Z((function*(e,t){t.page!==this.state.page&&(v.Mq.loglistpage=this.state.page,yield this.loadLogs())})),function(e,t){return R.apply(this,arguments)})},{key:"componentDidMount",value:(w=Z((function*(){var e=this.props.match.params.name;if(e){var t=yield m.Z.getLog(e);switch(t.code){case h.G.OK:for(var r,n=RegExp(/(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{7}[-+]\d{2}:\d{2})\s+(.*?)(?=(?:\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{7}[-+]\d{2}:\d{2}|$))/,"gs"),a=[];null!==(r=n.exec(t.payload.content));)a.push({time:r[1],content:r[2]});this.setState({viewedLog:{logFile:t.payload,entries:a}});break;case h.G.ERROR:this.addError(t.error)}}yield this.loadLogs()})),function(){return w.apply(this,arguments)})},{key:"loadLogs",value:(P=Z((function*(){this.setState({loading:!0});var e=yield m.Z.getLogs({page:this.state.page});switch(e.code){case h.G.OK:if(this.state.page>e.payload.totalPages&&0!==e.payload.totalPages)return void this.setState({page:1});this.setState({logs:e.payload.content,maxPage:e.payload.totalPages});break;case h.G.ERROR:this.addError(e.error)}this.setState({loading:!1})})),function(){return P.apply(this,arguments)})},{key:"addError",value:function(e){this.setState((function(t){var r=Array.from(t.errors);return r.push(e),{errors:r}}))}},{key:"downloadLog",value:(p=Z((function*(e){var t=yield m.Z.getLog(e);switch(t.code){case h.G.OK:(0,g.LR)(e,t.payload.content);break;case h.G.ERROR:this.addError(t.error)}})),function(e){return p.apply(this,arguments)})},{key:"render",value:function(){var e,t,r=this;return n.createElement("div",{className:"text-center"},this.state.errors.map((function(e,t){if(e)return n.createElement(y.Z,{key:t,error:e,onClose:function(){return r.setState((function(e){var r=Array.from(e.errors);return r[t]=void 0,{errors:r}}))}})})),this.state.loading?n.createElement(b.Z,{text:"loading.logs"}):this.props.match.params.name&&this.state.viewedLog?n.createElement("div",{className:"mx-5 mt-5"},n.createElement("h3",null,this.props.match.params.name),n.createElement(a.Z,{className:"mr-1",as:f.rU,to:null!==(e=v.$w.admin_logs.link)&&void 0!==e?e:v.$w.admin_logs.route},n.createElement(i.Z,{id:"generic.goback"})),n.createElement(a.Z,{onClick:function(){(0,g.LR)(r.props.match.params.name,r.state.viewedLog.logFile.content)}},n.createElement(i.Z,{id:"generic.download"})),n.createElement("hr",null),n.createElement("div",{style:{height:"60vh",display:"block"},className:"table-responsive"},n.createElement(s.Z,{striped:!0,hover:!0,variant:"dark",className:"text-left"},n.createElement("thead",{className:"bg-dark",style:{position:"sticky",top:0}},n.createElement("th",null,n.createElement(i.Z,{id:"generic.datetime"})),n.createElement("th",null,n.createElement(i.Z,{id:"generic.entry"}))),n.createElement("tbody",null,this.state.viewedLog.entries.map((function(e){return n.createElement("tr",{key:e.time},n.createElement("td",{className:"py-1"},e.time),n.createElement("td",{className:"py-1"},n.createElement("pre",{className:"mb-0"},e.content)))})))))):n.createElement(o.Z,{className:"mt-5 mb-5"},n.createElement(s.Z,{striped:!0,bordered:!0,hover:!0,variant:"dark",responsive:!0},n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",null,"#"),n.createElement("th",null,n.createElement(i.Z,{id:"generic.name"})),n.createElement("th",null,n.createElement(i.Z,{id:"generic.datetime"})),n.createElement("th",null,n.createElement(i.Z,{id:"generic.action"})))),n.createElement("tbody",null,this.state.logs.map((function(e,t){var o=new Date(e.lastModified),s=(o.getTime()-Date.now())/1e3;return n.createElement("tr",{key:e.name},n.createElement("td",null,t),n.createElement("td",null,e.name),n.createElement(l.Z,{overlay:n.createElement(c.Z,{id:"".concat(e.name,"-tooltip")},o.toLocaleString())},(function(e){var t=e.ref,r=function(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}(e,["ref"]);return n.createElement("td",r,n.createElement("span",{ref:t},n.createElement(u.Z,{value:s,numeric:"auto",updateIntervalInSeconds:1})))})),n.createElement("td",{className:"align-middle p-0"},n.createElement(a.Z,{className:"mr-1",onClick:function(){var t;r.props.history.push((null!==(t=v.$w.admin_logs.link)&&void 0!==t?t:v.$w.admin_logs.route)+e.name+"/",{reload:!0})}},n.createElement(i.Z,{id:"generic.view"})),n.createElement(a.Z,{onClick:function(){r.downloadLog(e.name).catch((function(e){r.addError(new d.ZP(d.jK.APP_FAIL,{jsError:e}))}))}},n.createElement(i.Z,{id:"generic.download"}))))})))),n.createElement(E.Z,{selectPage:function(e){return r.setState({page:e})},totalPages:null!==(t=this.state.maxPage)&&void 0!==t?t:1,currentPage:this.state.page})))}}])&&N(t.prototype,r),L}(n.Component))},75147:function(e,t,r){"use strict";var n=r(22122),a=r(19756),o=r(94184),l=r.n(o),s=r(67294),c=r(76792),i=s.forwardRef((function(e,t){var r=e.bsPrefix,o=e.className,i=e.striped,u=e.bordered,p=e.borderless,f=e.hover,m=e.size,d=e.variant,h=e.responsive,g=(0,a.Z)(e,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),v=(0,c.vE)(r,"table"),y=l()(o,v,d&&v+"-"+d,m&&v+"-"+m,i&&v+"-striped",u&&v+"-bordered",p&&v+"-borderless",f&&v+"-hover"),b=s.createElement("table",(0,n.Z)({},g,{className:y,ref:t}));if(h){var E=v+"-responsive";return"string"==typeof h&&(E=E+"-"+h),s.createElement("div",{className:E},b)}return b}));t.Z=i}}]);
//# sourceMappingURL=105.427568bebddd95b7349e.js.map