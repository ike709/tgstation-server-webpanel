(self.webpackChunktgstation_server_control_panel=self.webpackChunktgstation_server_control_panel||[]).push([[233],{34233:function(e,t,n){"use strict";var r=n(75798),o=n(36800),c=n(38592),a=n(65022);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t,n,r,o,c,a){try{var u=e[c](a),i=u.value}catch(e){return void n(e)}u.done?t(i):Promise.resolve(i).then(r,o)}function l(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var c=e.apply(t,n);function a(e){i(c,r,o,a,u,"next",e)}function u(e){i(c,r,o,a,u,"throw",e)}a(void 0)}))}}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}t.Z=new(function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(h,e);var t,n,r,u,i,R,w=(i=h,R=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=d(i);if(R){var n=d(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return y(this,e)});function h(){return f(this,h),w.apply(this,arguments)}return t=h,(n=[{key:"Download",value:(u=l((function*(e){var t;yield a.Z.wait4Init();try{t=yield a.Z.apiClient.TransferController_Download({ticket:e},null,{headers:{Accept:"application/json, application/octet-stream"}})}catch(e){return new c.Z({code:c.G.ERROR,error:e})}switch(t.status){case 200:return new c.Z({code:c.G.OK,payload:t.data});case 410:return new c.Z({code:c.G.ERROR,error:new o.ZP(o.jK.TRANSFER_NOT_AVAILABLE,{errorMessage:t.data})});default:return new c.Z({code:c.G.ERROR,error:new o.ZP(o.jK.UNHANDLED_RESPONSE,{axiosResponse:t},t)})}})),function(e){return u.apply(this,arguments)})},{key:"Upload",value:(r=l((function*(e,t){var n;yield a.Z.wait4Init();try{n=yield a.Z.apiClient.TransferController_Upload({ticket:e},null,{data:t,headers:{"Content-Type":"application/octect-stream"}})}catch(e){return new c.Z({code:c.G.ERROR,error:e})}switch(n.status){case 204:return new c.Z({code:c.G.OK,payload:null});case 409:return new c.Z({code:c.G.ERROR,error:new o.ZP(o.jK.UPLOAD_FAILED,{void:!0})});case 410:return new c.Z({code:c.G.ERROR,error:new o.ZP(o.jK.TRANSFER_NOT_AVAILABLE,{errorMessage:n.data})});default:return new c.Z({code:c.G.ERROR,error:new o.ZP(o.jK.UNHANDLED_RESPONSE,{axiosResponse:n},n)})}})),function(e,t){return r.apply(this,arguments)})}])&&s(t.prototype,n),h}(r.S))}}]);
//# sourceMappingURL=233.815eae6bddb9a4144dff.js.map