(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{324:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(40),i=n(129),c=n(195),u=n(630),s=n(114),l=n(113),f=n(90),d=n(639),p=n.n(d),y=n(17),h=n(654),v=n(7),m=n(3),b=n(10),w=n(50),g=n(640),E=n(641),O=n(643),S=n(47),R=n(21),k=n(25);function j(e){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function x(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=C(e);if(t){var o=C(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return A(this,n)}}function A(e,t){return!t||"object"!==j(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function C(e){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function L(e,t,n,r,o,a,i){try{var c=e[a](i),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,o)}function I(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){L(a,r,o,i,c,"next",e)}function c(e){L(a,r,o,i,c,"throw",e)}i(void 0)}))}}function N(e,t,n){return V.apply(this,arguments)}function V(){return(V=I((function*(e,t,n){var r=e.endpoint.merge(t,n);return R.a.githubtoken.value&&(r.headers.authorization="token ".concat(R.a.githubtoken.value)),e(r)}))).apply(this,arguments)}function U(){return T.apply(this,arguments)}function T(){return(T=I((function*(){return R.a.githubtoken.value?{type:"token",tokenType:"pat",token:R.a.githubtoken.value}:{type:"unauthenticated"}}))).apply(this,arguments)}var q=function(){return Object.assign(U.bind(null),{hook:N.bind(null)})},D=new(function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(i,e);var t,n,r,o,a=x(i);function i(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(e=a.call(this)).apiClient=void 0;var t=O.a.plugin(g.a,E.a);return e.apiClient=new t({authStrategy:q,userAgent:"tgstation-server-control-panel/"+k.e,baseUrl:"https://api.github.com",throttle:{onRateLimit:function(e,t){return console.warn("Request quota exhausted for request ".concat(t.method," ").concat(t.url)),0===t.request.retryCount&&(console.log("Retrying after ".concat(e," seconds!")),!0)},onAbuseLimit:function(e,t){console.warn("Abuse detected for request ".concat(t.method," ").concat(t.url))}}}),e}return t=i,(n=[{key:"getVersions",value:(o=I((function*(e){var t,n=e.owner,r=e.repo,o=e.current,a=e.all,i=0;try{t=yield this.apiClient.paginate(this.apiClient.repos.listReleases,{owner:n,repo:r},(function(e,t){return e.data.reduce((function(e,n){var r=/tgstation-server-v([\d.]+)/.exec(n.name||"");if(!r)return e;if("4"!==r[1][0])return e;var c=r[1],u=!1;if(c<=o){if(i>=3&&!a)return t(),e;i++,u=!0}return e.push({version:c,body:n.body||"",current:c===o,old:u}),e}),[])}))}catch(e){return new m.b({code:m.a.ERROR,error:new v.c(v.b.GITHUB_FAIL,{jsError:e})})}return new m.b({code:m.a.OK,payload:t})})),function(e){return o.apply(this,arguments)})}])&&P(t.prototype,n),r&&P(t,r),i}(S.TypedEmitter)),F=n(14),K=n(68),J=n(55);function M(e){return(M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function z(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return B(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return B(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return i=e.done,e},e:function(e){c=!0,a=e},f:function(){try{i||null==n.return||n.return()}finally{if(c)throw a}}}}function B(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function G(e,t,n,r,o,a,i){try{var c=e[a](i),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,o)}function H(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){G(a,r,o,i,c,"next",e)}function c(e){G(a,r,o,i,c,"throw",e)}i(void 0)}))}}function W(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function $(e,t){return($=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Q(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Z(e);if(t){var o=Z(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return X(this,n)}}function X(e,t){return!t||"object"!==M(t)&&"function"!=typeof t?Y(e):t}function Y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Z(e){return(Z=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}t.default=Object(y.f)(function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&$(e,t)}(O,e);var t,n,r,d,y,g,E=Q(O);function O(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,O),(t=E.call(this,e)).loadNotes=t.loadNotes.bind(Y(t)),t.updateServer=t.updateServer.bind(Y(t)),t.state={versions:[],errors:[],loading:!0},t}return t=O,(n=[{key:"componentDidMount",value:(g=H((function*(){var e=[];e.push(this.loadVersions()),yield Promise.all(e),this.setState({loading:!1})})),function(){return g.apply(this,arguments)})},{key:"componentWillUnmount",value:function(){this.state.timer&&window.clearInterval(this.state.timer)}},{key:"addError",value:function(e){this.setState((function(t){var n=Array.from(t.errors);return n.push(e),{errors:n}}))}},{key:"loadVersions",value:(y=H((function*(){var e=yield h.a.getAdminInfo();switch(e.code){case m.a.ERROR:return this.addError(e.error);case m.a.OK:var t=e.payload.trackedRepositoryUrl,n=/https?:\/\/(github\.com)\/(.*?)\/(.*)/.exec(t);if(!n)return this.addError(new v.c(v.b.APP_FAIL,{jsError:Error("Unknown repository url format: ".concat(t))}));if("github.com"!==n[1])return void this.setState({versions:[{body:"Updates unavailable to non github repos",version:"Updates unavailable to non github repos",current:!0,old:!0}]});var r=yield b.a.getServerInfo();switch(r.code){case m.a.ERROR:return this.addError(r.error);case m.a.OK:var o=yield D.getVersions({owner:n[2],repo:n[3],current:r.payload.version,all:!!this.props.match.params.all});switch(console.log("Version info: ",o),o.code){case m.a.ERROR:return this.addError(o.error);case m.a.OK:this.setState({versions:o.payload})}}}})),function(){return y.apply(this,arguments)})},{key:"loadNotes",value:function(){var e,t=this,n=z(this.state.versions);try{for(n.s();!(e=n.n()).done;){var r=e.value;if(r.version===this.state.selectedOption){var o=window.setInterval((function(){t.setState((function(e){return void 0===e.secondsLeft||null===e.secondsLeft?e:1===e.secondsLeft?(window.clearInterval(e.timer),{timer:null,secondsLeft:null}):{secondsLeft:e.secondsLeft-1}}))}),1e3);return void this.setState({selectedVersion:r,timer:o,secondsLeft:10})}}}catch(e){n.e(e)}finally{n.f()}}},{key:"updateServer",value:(d=H((function*(){if(!this.state.selectedOption)return console.error("Attempted to update server to a no version"),void this.setState({selectedVersion:void 0});var e=yield h.a.updateServer(this.state.selectedOption);switch(e.code){case m.a.ERROR:this.addError(e.error);break;case m.a.OK:b.a.autoLogin=!1,window.setInterval(H((function*(){switch((yield w.a.getCurrentUser(!0)).code){case m.a.ERROR:window.location.reload()}})),2e3),this.setState({updating:!0})}})),function(){return d.apply(this,arguments)})},{key:"render",value:function(){var e=this;if(this.state.updating)return o.a.createElement(J.a,{text:"loading.updating"});if(this.state.loading)return o.a.createElement(J.a,{text:"loading.version"});var t=function(t){e.setState({selectedOption:t.target.value})},n="number"==typeof this.state.secondsLeft;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"text-center"},this.state.errors.map((function(t,n){if(t)return o.a.createElement(K.a,{key:n,error:t,onClose:function(){return e.setState((function(e){var t=Array.from(e.errors);return t[n]=void 0,{errors:t}}))}})}))),this.state.selectedVersion?o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"text-center"},o.a.createElement(a.a,{className:"mr-3",onClick:function(){return e.setState({selectedVersion:void 0})}},o.a.createElement(f.a,{id:"generic.goback"})),o.a.createElement(s.a,{overlay:o.a.createElement(l.a,{id:"timing-tooltip"},o.a.createElement(f.a,{id:"view.admin.update.wait"})),show:n},o.a.createElement(a.a,{onClick:this.updateServer,disabled:n},o.a.createElement(f.a,{id:"generic.continue"}),n?" [".concat(this.state.secondsLeft,"]"):"")),o.a.createElement("h3",null,o.a.createElement(f.a,{id:"view.admin.update.releasenotes"})),o.a.createElement("hr",null)),o.a.createElement(p.a,{source:this.state.selectedVersion.body})):o.a.createElement("div",{className:"text-center"},o.a.createElement("h3",{className:"mb-4"},o.a.createElement(f.a,{id:"view.admin.update.selectversion"})),o.a.createElement(i.a,{xs:8,md:6,className:"mx-auto"},this.state.versions.map((function(n,r){return o.a.createElement(u.a,{className:"mb-3",key:n.version},o.a.createElement(u.a.Prepend,null,o.a.createElement(u.a.Radio,{id:n.version,name:"version",disabled:n.current,value:n.version,checked:e.state.selectedOption===n.version,onChange:t})),o.a.createElement(c.a,{as:"label",htmlFor:n.version,disabled:!0},n.version,n.current?o.a.createElement(f.a,{id:"view.admin.update.current"}):"",0==r?o.a.createElement(f.a,{id:"view.admin.update.latest"}):""))})),o.a.createElement(a.a,{variant:"link",onClick:function(){e.props.history.push((F.b.admin_update.link||F.b.admin_update.route)+"all/",{reload:!0})},disabled:!!this.props.match.params.all},o.a.createElement(f.a,{id:"view.admin.update.showall"})),o.a.createElement("br",null),o.a.createElement(a.a,{onClick:this.loadNotes,disabled:!this.state.selectedOption},o.a.createElement(f.a,{id:"generic.continue"})))))}}])&&W(t.prototype,n),r&&W(t,r),O}(o.a.Component))}}]);
//# sourceMappingURL=10.18b6c0e12dac382404cf.js.map