(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{378:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return R}));var o=n(59),r=n(0),c=n(113),u=n(145),i=n(750),a=n(80),s=n(144),f=n(67),l=n(19);function p(t){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function y(t,e,n,o,r,c,u){try{var i=t[c](u),a=i.value}catch(t){return void n(t)}i.done?e(a):Promise.resolve(a).then(o,r)}function h(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function m(t,e){return(m=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function d(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=w(t);if(e){var r=w(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return b(this,n)}}function b(t,e){return!e||"object"!==p(e)&&"function"!=typeof e?v(t):e}function v(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function w(t){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var R=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&m(t,e)}(x,t);var e,n,p,b,w,R=d(x);function x(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,x),(e=R.call(this,t)).setRoutes=e.setRoutes.bind(v(e)),e.state={routes:[]},e}return e=x,(n=[{key:"setRoutes",value:function(t){this.setState({routes:t})}},{key:"componentDidMount",value:(b=function*(){this.setState({routes:yield f.a.getRoutes(!1)}),f.a.on("refreshAll",this.setRoutes)},w=function(){var t=this,e=arguments;return new Promise((function(n,o){var r=b.apply(t,e);function c(t){y(r,n,o,c,u,"next",t)}function u(t){y(r,n,o,c,u,"throw",t)}c(void 0)}))},function(){return w.apply(this,arguments)})},{key:"componentWillUnmount",value:function(){f.a.removeListener("refreshAll",this.setRoutes)}},{key:"render",value:function(){return r.createElement(i.a,{xs:1,sm:2,md:3,lg:4,className:"justify-content-center"},this.state.routes.map((function(t){if(t.homeIcon&&t!==l.b.home)return r.createElement(u.a,{key:t.link||t.route,className:"mb-1"},r.createElement(c.a,{as:t.cachedAuth?s.b:"div",to:t.link||t.route,className:"text-decoration-none m-1 h-75 ".concat(t.cachedAuth?"text-primary":"text-danger d-sm-flex d-none")},r.createElement(c.a.Body,{style:{height:"245px"}},r.createElement(o.a,{fixedWidth:!0,icon:t.homeIcon,className:"d-block w-100 h-100 m-auto"})),r.createElement(c.a.Footer,{className:"text-center font-weight-bold ".concat(t.cachedAuth?"":"text-danger font-italic")},r.createElement(a.a,{id:t.name}))))})))}}])&&h(e.prototype,n),p&&h(e,p),x}(r.Component);R.Route="/"}}]);
//# sourceMappingURL=14.0646aaf02ab42a205aa8.js.map