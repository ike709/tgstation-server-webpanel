(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{723:function(e,t,r){"use strict";var n=r(76),o=r(6),a=r(4),u=r(9);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t,r,n,o,a,u){try{var c=e[a](u),i=c.value}catch(e){return void r(e)}c.done?t(i):Promise.resolve(i).then(n,o)}function s(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function u(e){i(a,n,o,u,c,"next",e)}function c(e){i(a,n,o,u,c,"throw",e)}u(void 0)}))}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=R(e);if(t){var o=R(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return d(this,r)}}function d(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function R(e){return(R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}t.a=new(function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(w,e);var t,r,n,c,i,d,R,b=y(w);function w(){return l(this,w),b.apply(this,arguments)}return t=w,(r=[{key:"updateGroup",value:(R=s((function*(e){var t;yield u.a.wait4Init();try{t=yield u.a.apiClient.UserGroupController_Update(null,e)}catch(e){return new a.b({code:a.a.ERROR,error:e})}switch(t.status){case 200:return new a.b({code:a.a.OK,payload:t.data});case 410:return new a.b({code:a.a.ERROR,error:new o.c(o.b.GROUP_NOT_FOUND,{errorMessage:t.data})});default:return new a.b({code:a.a.ERROR,error:new o.c(o.b.UNHANDLED_RESPONSE,{axiosResponse:t},t)})}})),function(e){return R.apply(this,arguments)})},{key:"listGroups",value:(d=s((function*(){var e;yield u.a.wait4Init();try{e=yield u.a.apiClient.UserGroupController_List({pageSize:100,page:1})}catch(e){return new a.b({code:a.a.ERROR,error:e})}switch(e.status){case 200:return new a.b({code:a.a.OK,payload:e.data.content});default:return new a.b({code:a.a.ERROR,error:new o.c(o.b.UNHANDLED_RESPONSE,{axiosResponse:e},e)})}})),function(){return d.apply(this,arguments)})},{key:"createGroup",value:(i=s((function*(e,t){var r;yield u.a.wait4Init();try{r=yield u.a.apiClient.UserGroupController_Create(null,{name:e,permissionSet:t})}catch(e){return new a.b({code:a.a.ERROR,error:e})}switch(r.status){case 201:return new a.b({code:a.a.OK,payload:r.data});default:return new a.b({code:a.a.ERROR,error:new o.c(o.b.UNHANDLED_RESPONSE,{axiosResponse:r},r)})}})),function(e,t){return i.apply(this,arguments)})},{key:"deleteGroup",value:(c=s((function*(e){var t;yield u.a.wait4Init();try{t=yield u.a.apiClient.UserGroupController_Delete({id:e})}catch(e){return new a.b({code:a.a.ERROR,error:e})}switch(t.status){case 204:return new a.b({code:a.a.OK,payload:null});case 409:return new a.b({code:a.a.ERROR,error:new o.c(o.b.GROUP_NOT_EMPTY,{errorMessage:t.data})});case 410:return new a.b({code:a.a.ERROR,error:new o.c(o.b.GROUP_NOT_FOUND,{errorMessage:t.data})});default:return new a.b({code:a.a.ERROR,error:new o.c(o.b.UNHANDLED_RESPONSE,{axiosResponse:t},t)})}})),function(e){return c.apply(this,arguments)})}])&&f(t.prototype,r),n&&f(t,n),w}(n.a))}}]);
//# sourceMappingURL=9.88770d4d0b9bfeb9add4.js.map