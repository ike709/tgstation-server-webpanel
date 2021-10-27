"use strict";(self.webpackChunktgstation_server_control_panel=self.webpackChunktgstation_server_control_panel||[]).push([[120],{9657:function(e,t,r){r.d(t,{Z:function(){return V}});var n=r(67814),a=r(67294),o=r(35005),s=r(32258),i=r(15293),l=r(87462),c=r(63366),u=r(94184),p=r.n(u),f=r(76792),m=r(48358),d=["active","disabled","className","style","activeLabel","children"],v=["children"],h=a.forwardRef((function(e,t){var r=e.active,n=e.disabled,o=e.className,s=e.style,i=e.activeLabel,u=e.children,f=(0,c.Z)(e,d),v=r||n?"span":m.Z;return a.createElement("li",{ref:t,style:s,className:p()(o,"page-item",{active:r,disabled:n})},a.createElement(v,(0,l.Z)({className:"page-link",disabled:n},f),u,r&&i&&a.createElement("span",{className:"sr-only"},i)))}));h.defaultProps={active:!1,disabled:!1,activeLabel:"(current)"},h.displayName="PageItem";var y=h;function g(e,t,r){function n(e){var n=e.children,o=(0,c.Z)(e,v);return a.createElement(h,o,a.createElement("span",{"aria-hidden":"true"},n||t),a.createElement("span",{className:"sr-only"},r))}return void 0===r&&(r=e),n.displayName=e,n}var E=g("First","«"),b=g("Prev","‹","Previous"),P=g("Ellipsis","…","More"),Z=g("Next","›"),w=g("Last","»"),N=["bsPrefix","className","children","size"],O=a.forwardRef((function(e,t){var r=e.bsPrefix,n=e.className,o=e.children,s=e.size,i=(0,c.Z)(e,N),u=(0,f.vE)(r,"pagination");return a.createElement("ul",(0,l.Z)({ref:t},i,{className:p()(n,u,s&&u+"-"+s)}),o)}));O.First=E,O.Prev=b,O.Ellipsis=P,O.Item=y,O.Next=Z,O.Last=w;var x=O,S=(r(55638),["as","bsPrefix","className","children"]),k=a.forwardRef((function(e,t){var r=e.as,n=void 0===r?"div":r,o=e.bsPrefix,s=e.className,i=e.children,u=(0,c.Z)(e,S);return o=(0,f.vE)(o,"popover-header"),a.createElement(n,(0,l.Z)({ref:t},u,{className:p()(o,s)}),i)})),j=["as","bsPrefix","className","children"],R=a.forwardRef((function(e,t){var r=e.as,n=void 0===r?"div":r,o=e.bsPrefix,s=e.className,i=e.children,u=(0,c.Z)(e,j);return o=(0,f.vE)(o,"popover-body"),a.createElement(n,(0,l.Z)({ref:t},u,{className:p()(s,o)}),i)})),_=["bsPrefix","placement","className","style","children","content","arrowProps","popper","show"],C=a.forwardRef((function(e,t){var r=e.bsPrefix,n=e.placement,o=e.className,s=e.style,i=e.children,u=e.content,m=e.arrowProps,d=(e.popper,e.show,(0,c.Z)(e,_)),v=(0,f.vE)(r,"popover"),h=((null==n?void 0:n.split("-"))||[])[0];return a.createElement("div",(0,l.Z)({ref:t,role:"tooltip",style:s,"x-placement":h,className:p()(o,v,h&&"bs-popover-"+h)},d),a.createElement("div",(0,l.Z)({className:"arrow"},m)),u?a.createElement(R,null,i):i)}));C.defaultProps={placement:"right"},C.Title=k,C.Content=R;var M=C,I=r(44012);function G(e){return G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},G(e)}var L=["selectPage","totalPages","currentPage"];function T(){return T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},T.apply(this,arguments)}function U(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function B(e,t){return B=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},B(e,t)}function D(e,t){if(t&&("object"===G(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function z(e){return z=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},z(e)}var V=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&B(e,t)}(p,e);var t,r,l,c,u=(l=p,c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=z(l);if(c){var r=z(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return D(this,e)});function p(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,p),(t=u.call(this,e)).state={showGoto:!1,gotoValue:e.currentPage},t}return t=p,(r=[{key:"render",value:function(){for(var e=this,t=[],r=Math.max(this.props.totalPages-this.props.currentPage-1,0),l=Math.max(this.props.currentPage-2,0),c=Math.max(this.props.currentPage-Math.max(5-Number(this.props.currentPage!==this.props.totalPages)-r,2),2),u=Math.min(this.props.currentPage+Math.max(5-Number(1!==this.props.currentPage)-l,2),this.props.totalPages-1),p=function(r){t.push(a.createElement(x.Item,{key:r,active:r===e.props.currentPage,onClick:function(){return e.props.selectPage(r)}},r))},f=c;f<=u;f++)p(f);var m=this.props.totalPages>7?a.createElement(x.Ellipsis,{disabled:!0}):null,d=a.createElement(M,{id:"popover-gotopage"},a.createElement(M.Title,null,a.createElement(I.Z,{id:"generic.goto.title"})),a.createElement(M.Content,null,a.createElement("form",{className:"d-flex",onSubmit:function(t){t.preventDefault(),e.props.selectPage(e.state.gotoValue),e.setState({showGoto:!1})}},a.createElement(s.Z.Control,{className:"mr-2",type:"number",min:1,max:this.props.totalPages,value:this.state.gotoValue,onChange:function(t){return e.setState({gotoValue:parseInt(t.target.value)})},custom:!0}),a.createElement(o.Z,{type:"submit"},a.createElement(I.Z,{id:"generic.goto"}))))),v=this.props,h=(v.selectPage,v.totalPages,v.currentPage,function(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}(v,L));return a.createElement("div",T({className:"text-center",style:{position:"sticky",bottom:"1.5em"}},h),a.createElement(x,{className:"justify-content-center"},a.createElement(x.Prev,{disabled:this.props.currentPage<=1,onClick:function(){return e.props.selectPage(Math.max(e.props.currentPage-1,1))}}),a.createElement(x.Item,{active:this.props.currentPage<=1,onClick:function(){return e.props.selectPage(1)}},"1"),m,t,m,this.props.totalPages>=2?a.createElement(x.Item,{active:this.props.currentPage>=this.props.totalPages,onClick:function(){return e.props.selectPage(e.props.totalPages)}},this.props.totalPages):null,this.props.totalPages>7?a.createElement(i.Z,{show:this.state.showGoto,placement:"top",overlay:d},a.createElement(x.Item,{onClick:function(){return e.setState((function(e){return{showGoto:!e.showGoto}}))}},a.createElement(n.G,{icon:"search"}))):null,a.createElement(x.Next,{disabled:this.props.currentPage>=this.props.totalPages,onClick:function(){return e.props.selectPage(Math.min(e.props.currentPage+1,e.props.totalPages))}})))}}])&&U(t.prototype,r),p}(a.PureComponent)},11120:function(e,t,r){r.r(t);var n=r(67294),a=r(88375),o=r(27977),s=r(35005),i=r(15293),l=r(75147),c=r(43489),u=r(44012),p=r(48272),f=r(5977),m=r(73727),d=r(48155),v=r(38592),h=r(69644),y=r(42540),g=r(3429),E=r(43307),b=r(71739),P=r(9657);function Z(e){return Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Z(e)}var w=["ref"],N=["ref"],O=["ref"];function x(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function S(e,t,r,n,a,o,s){try{var i=e[o](s),l=i.value}catch(e){return void r(e)}i.done?t(l):Promise.resolve(l).then(n,a)}function k(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function s(e){S(o,n,a,s,i,"next",e)}function i(e){S(o,n,a,s,i,"throw",e)}s(void 0)}))}}function j(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function R(e,t){return R=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},R(e,t)}function _(e,t){if(t&&("object"===Z(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function C(e){return C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},C(e)}t.default=(0,f.EN)(function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&R(e,t)}(L,e);var t,r,f,Z,S,M,I,G=(M=L,I=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=C(M);if(I){var r=C(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return _(this,e)});function L(e){var t,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,L),(r=G.call(this,e)).state={errors:[],users:[],loading:!0,canList:!1,page:null!==(t=g.Mq.userlistpage)&&void 0!==t?t:1},r}return t=L,r=[{key:"addError",value:function(e){this.setState((function(t){var r=Array.from(t.errors);return r.push(e),{errors:r}}))}},{key:"loadUsers",value:(S=k((function*(){if(this.setState({loading:!0}),this.state.canList){var e=yield h.Z.listUsers({page:this.state.page});switch(e.code){case v.G.OK:this.state.page>e.payload.totalPages&&0!==e.payload.totalPages&&this.setState({page:1}),this.setState({users:e.payload.content,maxPage:e.payload.totalPages});break;case v.G.ERROR:this.addError(e.error)}}else{var t=yield h.Z.getCurrentUser();t.code===v.G.OK?this.setState({users:[t.payload]}):this.addError(t.error)}this.setState({loading:!1})})),function(){return S.apply(this,arguments)})},{key:"componentDidUpdate",value:(Z=k((function*(e,t){t.page!==this.state.page&&(g.Mq.userlistpage=this.state.page,yield this.loadUsers())})),function(e,t){return Z.apply(this,arguments)})},{key:"componentDidMount",value:(f=k((function*(){var e=yield h.Z.getCurrentUser();if(e.code==v.G.OK){var t=!!((0,y.Zg)(e.payload).administrationRights&d.oj.ReadUsers);this.setState({canList:t}),yield this.loadUsers()}else this.addError(e.error);this.setState({loading:!1})})),function(){return f.apply(this,arguments)})},{key:"render",value:function(){var e,t,r=this;return this.state.loading?n.createElement(b.Z,{text:"loading.userlist"}):n.createElement("div",{className:"text-center"},this.state.canList?"":n.createElement(a.Z,{className:"clearfix",variant:"error"},n.createElement(u.Z,{id:"view.user.list.cantlist"})),this.state.errors.map((function(e,t){if(e)return n.createElement(E.ZP,{key:t,error:e,onClose:function(){return r.setState((function(e){var r=Array.from(e.errors);return r[t]=void 0,{errors:r}}))}})})),n.createElement(l.Z,{striped:!0,bordered:!0,hover:!0,variant:"dark",responsive:!0},n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",null,"#"),n.createElement("th",null,n.createElement(u.Z,{id:"generic.name"})),n.createElement("th",null,n.createElement(u.Z,{id:"generic.details"})),n.createElement("th",null,n.createElement(u.Z,{id:"generic.group"})),n.createElement("th",null,n.createElement(u.Z,{id:"generic.created"})),n.createElement("th",null,n.createElement(u.Z,{id:"generic.createdby"})),n.createElement("th",null,n.createElement(u.Z,{id:"generic.action"})))),n.createElement("tbody",null,this.state.users.map((function(e){var t=new Date(e.createdAt),a=(t.getTime()-Date.now())/1e3;return n.createElement("tr",{key:e.id},n.createElement("td",null,e.id),n.createElement("td",null,e.name),n.createElement("td",null,e.systemIdentifier?n.createElement(o.Z,{variant:"primary",className:"mx-1"},n.createElement(u.Z,{id:"generic.system.short"})):n.createElement(o.Z,{variant:"primary",className:"mx-1"},n.createElement(u.Z,{id:"generic.tgs"})),e.enabled?n.createElement(o.Z,{variant:"success",className:"mx-1"},n.createElement(u.Z,{id:"generic.enabled"})):n.createElement(o.Z,{variant:"danger",className:"mx-1"},n.createElement(u.Z,{id:"generic.disabled"})),e.group?n.createElement(o.Z,{variant:"warning",className:"mx-1"},n.createElement(u.Z,{id:"generic.grouped"})):null),e.group?n.createElement(i.Z,{overlay:n.createElement(c.Z,{id:"".concat(e.name,"-tooltip-group")},n.createElement(u.Z,{id:"generic.groupid",values:{id:e.group.id}}))},(function(t){var r=t.ref,a=x(t,w);return n.createElement("td",a,n.createElement("span",{ref:r},e.group.name))})):n.createElement("td",null),n.createElement(i.Z,{overlay:n.createElement(c.Z,{id:"".concat(e.name,"-tooltip")},t.toLocaleString())},(function(e){var t=e.ref,r=x(e,N);return n.createElement("td",r,n.createElement("span",{ref:t},n.createElement(p.Z,{value:a,numeric:"auto",updateIntervalInSeconds:1})))})),n.createElement(i.Z,{overlay:n.createElement(c.Z,{id:"".concat(e.name,"-tooltip-createdby")},n.createElement(u.Z,{id:"generic.userid"}),e.createdBy.id)},(function(t){var r=t.ref,a=x(t,O);return n.createElement("td",a,n.createElement("span",{ref:r},e.createdBy.name))})),n.createElement("td",{className:"align-middle p-0"},n.createElement(s.Z,{onClick:function(){var t;g.Mq.selecteduserid=e.id,r.props.history.push(null!==(t=g.$w.useredit.link)&&void 0!==t?t:g.$w.useredit.route)}},n.createElement(u.Z,{id:"generic.edit"}))))})))),n.createElement(P.Z,{selectPage:function(e){return r.setState({page:e})},totalPages:null!==(e=this.state.maxPage)&&void 0!==e?e:1,currentPage:this.state.page}),n.createElement(s.Z,{as:m.rU,to:null!==(t=g.$w.usercreate.link)&&void 0!==t?t:g.$w.usercreate.route},n.createElement(u.Z,{id:"routes.usercreate"})))}}],r&&j(t.prototype,r),L}(n.Component))},27977:function(e,t,r){var n=r(87462),a=r(63366),o=r(94184),s=r.n(o),i=r(67294),l=r(76792),c=["bsPrefix","variant","pill","className","as"],u=i.forwardRef((function(e,t){var r=e.bsPrefix,o=e.variant,u=e.pill,p=e.className,f=e.as,m=void 0===f?"span":f,d=(0,a.Z)(e,c),v=(0,l.vE)(r,"badge");return i.createElement(m,(0,n.Z)({ref:t},d,{className:s()(p,v,u&&v+"-pill",o&&v+"-"+o)}))}));u.displayName="Badge",u.defaultProps={pill:!1},t.Z=u},75147:function(e,t,r){var n=r(87462),a=r(63366),o=r(94184),s=r.n(o),i=r(67294),l=r(76792),c=["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"],u=i.forwardRef((function(e,t){var r=e.bsPrefix,o=e.className,u=e.striped,p=e.bordered,f=e.borderless,m=e.hover,d=e.size,v=e.variant,h=e.responsive,y=(0,a.Z)(e,c),g=(0,l.vE)(r,"table"),E=s()(o,g,v&&g+"-"+v,d&&g+"-"+d,u&&g+"-striped",p&&g+"-bordered",f&&g+"-borderless",m&&g+"-hover"),b=i.createElement("table",(0,n.Z)({},y,{className:E,ref:t}));if(h){var P=g+"-responsive";return"string"==typeof h&&(P=P+"-"+h),i.createElement("div",{className:P},b)}return b}));t.Z=u}}]);
//# sourceMappingURL=120.be843c7c0b920fab744c.js.map