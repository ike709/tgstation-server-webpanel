(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{351:function(t,e,n){"use strict";n.r(e);var r=n(212),a=n(0),o=n.n(a),c=n(37),i=n(694),s=n(693),u=n(73),l=n(138),f=n(13),p=n(713),m=n(4),y=n(65),b=n(714),d=n(33),h=n(14),v=n(55),g=n(49),w=n(712);function E(t){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function O(t,e,n,r,a,o,c){try{var i=t[o](c),s=i.value}catch(t){return void n(t)}i.done?e(s):Promise.resolve(s).then(r,a)}function S(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var o=t.apply(e,n);function c(t){O(o,r,a,c,i,"next",t)}function i(t){O(o,r,a,c,i,"throw",t)}c(void 0)}))}}function j(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function P(t,e){return(P=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function k(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=R(t);if(e){var a=R(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return _(this,n)}}function _(t,e){return!e||"object"!==E(e)&&"function"!=typeof e?x(t):e}function x(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function R(t){return(R=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var T=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&P(t,e)}(_,t);var e,a,f,y,E,O=k(_);function _(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,_),(e=O.call(this,t)).loadInstance=e.loadInstance.bind(x(e)),h.c.instanceid=t.match.params.id,h.c.selectedinstanceconfigtab=t.match.params.tab,e.state={tab:t.match.params.tab||"settings",errors:[],loading:!0},e}return e=_,(a=[{key:"componentDidUpdate",value:function(t){t.match.params.tab!==this.props.match.params.tab&&this.setState({tab:this.props.match.params.tab||"settings"})}},{key:"componentDidMount",value:(E=S((function*(){this.setState({loading:!0}),yield this.loadInstance()})),function(){return E.apply(this,arguments)})},{key:"addError",value:function(t){this.setState((function(e){var n=Array.from(e.errors);return n.push(t),{errors:n}}))}},{key:"loadInstance",value:(y=S((function*(){this.setState({loading:!0});var t=yield p.a.getInstance(parseInt(this.props.match.params.id));t.code===m.a.OK?this.setState({instance:t.payload}):this.addError(t.error),this.setState({loading:!1})})),function(){return y.apply(this,arguments)})},{key:"render",value:function(){var t=this;if(this.state.loading)return o.a.createElement(g.a,{text:"loading.instance"});var e=o.a.createElement(g.a,{text:"loading.page"}),a=Object(r.a)((function(){return Promise.all([n.e(0),n.e(29)]).then(n.bind(null,342))}),{fallback:e});return o.a.createElement("div",{className:"text-center"},this.state.errors.map((function(e,n){if(e)return o.a.createElement(v.a,{key:n,error:e,onClose:function(){return t.setState((function(t){var e=Array.from(t.errors);return e[n]=void 0,{errors:e}}))}})})),this.state.instance?o.a.createElement("h3",null,"".concat(this.state.instance.name," (").concat(this.state.instance.id,")")):o.a.createElement("h3",null,o.a.createElement(u.a,{id:"generic.assert.noinstance"})),o.a.createElement(c.a,{as:l.b,to:h.b.instancelist.link||h.b.instancelist.route},o.a.createElement(u.a,{id:"generic.goback"})),o.a.createElement(s.a,{className:"justify-content-center mb-3 mt-4 flex-column flex-md-row",activeKey:this.state.tab,onSelect:function(e){e&&(h.c.instanceid=t.props.match.params.id,h.c.selectedinstanceconfigtab=e,b.a.setupMode||window.history.pushState(null,window.document.title,h.b.instanceconfig.link||h.b.instanceconfig.route),t.setState({tab:e}))}},o.a.createElement(i.a,{eventKey:"settings",title:o.a.createElement(u.a,{id:"view.instance.config.instancesettings"})},this.state.instance?o.a.createElement(a,{instance:this.state.instance,loadInstance:this.loadInstance,selfPermissionSet:Object(d.d)(this.context.user)}):o.a.createElement(u.a,{id:"generic.assert.noinstance"})),o.a.createElement(i.a,{eventKey:"users",title:o.a.createElement(u.a,{id:"view.instance.config.instanceusers"})},o.a.createElement(w.a,null)),o.a.createElement(i.a,{eventKey:"chatbots",title:o.a.createElement(u.a,{id:"view.instance.config.chatbots"})},o.a.createElement(w.a,null))))}}])&&j(e.prototype,a),f&&j(e,f),_}(o.a.Component);T.contextType=y.a,e.default=Object(f.f)(T)},712:function(t,e,n){"use strict";n.d(e,"a",(function(){return b}));var r=n(0),a=n.n(r),o=n(97),c=n(73),i=n(20);function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function p(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=y(t);if(e){var a=y(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return m(this,n)}}function m(t,e){return!e||"object"!==s(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function y(t){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var b=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(m,t);var e,n,r,s=p(m);function m(){return u(this,m),s.apply(this,arguments)}return e=m,(n=[{key:"render",value:function(){return a.a.createElement(o.a,{className:"bg-transparent",border:"info"},a.a.createElement(o.a.Header,{className:"bg-info text-dark font-weight-bold"},a.a.createElement(c.a,{id:"generic.wip"})),a.a.createElement(o.a.Body,null,a.a.createElement(o.a.Title,null,a.a.createElement(c.a,{id:"generic.wip.desc"}),a.a.createElement("a",{href:"https://github.com/tgstation/Tgstation.Server.ControlPanel/releases/latest"},"https://github.com/tgstation/Tgstation.Server.ControlPanel/releases/latest")),a.a.createElement(o.a.Text,{as:"pre",className:"bg-transparent text-info"},a.a.createElement("code",null,"Version: ".concat(i.e,"\nWebpanel Mode: ").concat(i.d,"\nCurrent route: ").concat(window.location.toString())))))}}])&&l(e.prototype,n),r&&l(e,r),m}(a.a.Component)},714:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r={}}}]);
//# sourceMappingURL=6.24d5e7000edb92c61c6c.js.map