(window.webpackJsonp=window.webpackJsonp||[]).push([[4,6,7],{372:function(e,t,n){"use strict";n.r(t);var r=n(59),a=n(0),o=n.n(a),i=n(33),c=n(81),s=n(244),l=n(745),u=n(91),f=n(92),p=n(80),d=n(772),m=n(10),y=n(5),h=n(2),b=n(768),v=n(246),E=n(58),g=n(49);function w(e){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function x(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function S(e,t,n,r,a,o,i){try{var c=e[o](i),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,a)}function k(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){S(o,r,a,i,c,"next",e)}function c(e){S(o,r,a,i,c,"throw",e)}i(void 0)}))}}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function P(e,t){return(P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function C(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=_(e);if(t){var a=_(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return V(this,n)}}function V(e,t){return!t||"object"!==w(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var R=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)}(V,e);var t,n,a,b,w,S=C(V);function V(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,V),(t=S.call(this,e)).state={versions:[],errors:[],activeVersion:"",latestVersion:"",selectedVersion:"",loading:!0},t}return t=V,(n=[{key:"addError",value:function(e){this.setState((function(t){var n=Array.from(t.errors);return n.push(e),{errors:n}}))}},{key:"loadVersions",value:(w=k((function*(){var e=yield d.a.listAllVersions(this.context.instance.id);if(e.code===h.a.OK){this.setState({versions:e.payload.content});var t=yield d.a.getActiveVersion(this.context.instance.id);t.code===h.a.OK?this.setState({activeVersion:t.payload.version}):this.addError(t.error)}else this.addError(e.error)})),function(){return w.apply(this,arguments)})},{key:"componentDidMount",value:(b=k((function*(){var e=this;yield this.loadVersions(),fetch("https://secure.byond.com/download/version.txt").then((function(e){return e.text()})).then((function(e){return e.split("\n")})).then((function(e){return e[0]})).then((function(t){e.setState({latestVersion:t,selectedVersion:t,loading:!1})})).catch((function(t){e.addError(new y.c(y.b.APP_FAIL,{jsError:Error(t)})),e.setState({loading:!1})}))})),function(){return b.apply(this,arguments)})},{key:"render",value:function(){var e=this;return this.state.loading?o.a.createElement(g.a,{text:"loading.instance"}):this.context.instancePermissionSet.byondRights&m.b.ListInstalled&&this.context.instancePermissionSet.byondRights&m.b.ReadActive?o.a.createElement("div",{className:"text-center"},o.a.createElement("h1",null,o.a.createElement(p.a,{id:"view.instance.hosting.byond"})),this.state.errors.map((function(t,n){if(t)return o.a.createElement(E.a,{key:n,error:t,onClose:function(){return e.setState((function(e){var t=Array.from(e.errors);return t[n]=void 0,{errors:t}}))}})})),o.a.createElement("div",{onChange:function(){var t=k((function*(t){e.setState({loading:!0});var n=yield d.a.switchActive(e.context.instance.id,t.target.value);n.code===h.a.OK?yield e.loadVersions():e.addError(n.error),e.setState({loading:!1})}));return function(e){return t.apply(this,arguments)}}()},this.state.versions.map((function(t){return o.a.createElement(l.a,{className:"w-25 mb-1 mx-auto d-flex",key:t.version},o.a.createElement(l.a.Prepend,null,o.a.createElement(l.a.Radio,{disabled:!(e.context.instancePermissionSet.byondRights&m.b.InstallOfficialOrChangeActiveVersion),name:"byond",id:t.version,value:t.version,defaultChecked:t.version===e.state.activeVersion})),o.a.createElement(l.a.Append,{className:"flex-grow-1 m-0",as:"label",htmlFor:t.version},o.a.createElement(u.a,{overlay:(n="view.instance.hosting.byond.custom",n?o.a.createElement(f.a,{id:n},o.a.createElement(p.a,{id:n})):o.a.createElement(o.a.Fragment,null)),show:!t.version.endsWith(".0")&&void 0},(function(e){var n=e.ref,a=x(e,["ref"]);return o.a.createElement(l.a.Text,O({className:"w-100"},a),t.version.endsWith(".0")?t.version.substr(0,t.version.length-2):t.version,t.version.endsWith(".0")?null:o.a.createElement("div",{className:"ml-auto",ref:n},o.a.createElement(r.a,{fixedWidth:!0,icon:"info"})))}))));var n}))),o.a.createElement("hr",null),o.a.createElement("h4",null,o.a.createElement(p.a,{id:"view.instance.hosting.byond.add"})),o.a.createElement(l.a,{className:"w-25 mb-3 mx-auto"},o.a.createElement(s.a,{type:"number",defaultValue:this.state.latestVersion.split(".")[0],onChange:function(t){e.setState((function(e){var n=e.selectedVersion.split(".");return n[0]=t.target.value,{selectedVersion:n.join(".")}}))}}),o.a.createElement(l.a.Text,{className:"rounded-0"},"."),o.a.createElement(s.a,{type:"number",defaultValue:this.state.latestVersion.split(".")[1],onChange:function(t){e.setState((function(e){var n=e.selectedVersion.split(".");return n[1]=t.target.value,{selectedVersion:n.join(".")}}))}}),o.a.createElement(l.a.Append,null,o.a.createElement(i.a,{variant:"success",onClick:k((function*(){e.setState({loading:!0});var t=yield d.a.switchActive(e.context.instance.id,e.state.selectedVersion,e.state.customFile?yield e.state.customFile.arrayBuffer():void 0);t.code===h.a.ERROR?e.addError(t.error):(e.setState({customFile:null}),yield e.loadVersions()),e.setState({loading:!1})}))},o.a.createElement(r.a,{icon:"plus"})))),o.a.createElement(c.a,null,o.a.createElement(c.a.File,{custom:!0,id:"test",className:"w-25 text-left",label:this.state.customFile?this.state.customFile.name:o.a.createElement(p.a,{id:"view.instance.hosting.byond.upload"}),accept:".zip",onChange:function(t){e.setState({customFile:t.target.files?t.target.files[0]:null})}}))):o.a.createElement(v.a,null)}}])&&j(t.prototype,n),a&&j(t,a),V}(o.a.Component);R.contextType=b.a,t.default=R},373:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(13),i=n(10),c=n(97),s=n(2),l=n(768),u=n(36),f=n(58),p=n(59),d=n(81),m=n(244),y=n(745),h=n(91),b=n(92),v=n(80);function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function w(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function x(e,t){return(x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function S(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=j(e);if(t){var a=j(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return k(this,n)}}function k(e,t){return!t||"object"!==E(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&x(e,t)}(i,e);var t,n,r,o=S(i);function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=o.call(this,e)).state={currentValue:e.defaultValue},t}return t=i,(n=[{key:"render",value:function(){var e,t=this,n=Math.random().toString(),r=this.state.currentValue!==this.props.defaultValue,o=function(e){var n=e||t.state.currentValue;switch(t.props.type){case"str":case"num":case"bool":case"enum":t.props.onChange(n)}};return a.a.createElement(y.a,null,a.a.createElement(y.a.Prepend,{className:"w-40 flex-grow-1 flex-xl-grow-0 overflow-auto mb-2 mb-xl-0"},a.a.createElement(h.a,{overlay:(e=this.props.tooltip,e?a.a.createElement(b.a,{id:e},a.a.createElement(v.a,{id:e})):a.a.createElement(a.a.Fragment,null)),show:!!this.props.tooltip&&void 0},(function(e){var n=e.ref,o=w(e,["ref"]);return a.a.createElement(y.a.Text,g({className:"flex-fill ".concat(r?"font-weight-bold":"")},o),a.a.createElement(v.a,{id:"fields.".concat(t.props.name)}),t.props.tooltip?a.a.createElement("div",{className:"ml-auto",ref:n},a.a.createElement(p.a,{fixedWidth:!0,icon:"info"})):null)}))),a.a.createElement("div",{className:"flex-grow-1 w-100 w-xl-auto d-flex mb-3 mb-xl-0"},"enum"===this.props.type?a.a.createElement("select",{className:"flex-fill mb-0 ".concat(r?"font-weight-bold":""),onChange:function(e){t.props.setEditLock&&!t.props.instantCommit&&(r&&e.target.selectedOptions[0].value===t.props.defaultValue?t.props.setEditLock(!1):r||e.target.selectedOptions[0].value===t.props.defaultValue||t.props.setEditLock(!0)),t.props.instantCommit?o(e.target.selectedOptions[0].value):t.setState({currentValue:e.target.selectedOptions[0].value})},disabled:this.props.disabled||!r&&this.props.editLock,defaultValue:this.props.defaultValue},Object.values(this.props.enum).filter((function(e){return isNaN(parseInt(e))})).map((function(e){return a.a.createElement(v.a,{key:e,id:"fields.".concat(t.props.name,".").concat(e)},(function(t){return a.a.createElement("option",{value:e},t)}))}))):"bool"===this.props.type?a.a.createElement("label",{htmlFor:n,className:"d-flex justify-content-center align-content-center flex-grow-1 w-100 w-xl-auto mb-0"},a.a.createElement(d.a.Check,{inline:!0,type:"switch",custom:!0,id:n,className:"m-auto",label:"",onChange:function(e){t.props.setEditLock&&!t.props.instantCommit&&(r&&e.currentTarget.checked===t.props.defaultValue?t.props.setEditLock(!1):r||e.currentTarget.checked===t.props.defaultValue||t.props.setEditLock(!0)),t.props.instantCommit?o(e.currentTarget.checked):t.setState({currentValue:e.currentTarget.checked})},checked:this.state.currentValue,disabled:this.props.disabled||!r&&this.props.editLock})):a.a.createElement(m.a,{custom:!0,type:"num"===this.props.type?"number":"text",className:"flex-fill mb-0 ".concat(r?"font-weight-bold":""),onChange:function(e){var n="num"==t.props.type?parseInt(e.currentTarget.value):e.currentTarget.value;t.props.setEditLock&&!t.props.instantCommit&&(r&&n===t.props.defaultValue?t.props.setEditLock(!1):r||n===t.props.defaultValue||t.props.setEditLock(!0)),t.props.instantCommit?o(n):t.setState({currentValue:n})},value:this.state.currentValue,disabled:this.props.disabled||!r&&this.props.editLock}),a.a.createElement(a.a.Fragment,null,a.a.createElement(y.a.Append,{style:r?{}:{opacity:0,pointerEvents:"none"},onClick:function(){t.props.setEditLock&&t.props.setEditLock(!1),t.setState({currentValue:t.props.defaultValue})}},a.a.createElement(y.a.Text,null,a.a.createElement(p.a,{fixedWidth:!0,icon:"undo"}))),a.a.createElement(y.a.Append,{style:r?{}:{opacity:0,pointerEvents:"none"},onClick:function(){o()}},a.a.createElement(y.a.Text,null,a.a.createElement(p.a,{fixedWidth:!0,icon:"check"}))))))}}])&&O(t.prototype,n),r&&O(t,r),i}(a.a.Component);function C(e){return(C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function V(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?V(Object(n),!0).forEach((function(t){R(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):V(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function R(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function I(e,t,n,r,a,o,i){try{var c=e[o](i),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,a)}function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function N(e,t){return(N=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function T(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=B(e);if(t){var a=B(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return A(this,n)}}function A(e,t){return!t||"object"!==C(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function B(e){return(B=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var F=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&N(e,t)}(d,e);var t,n,r,o,l,p=T(d);function d(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,d),(t=p.call(this,e)).state={editLock:!1,errors:[]},t}return t=d,(n=[{key:"addError",value:function(e){this.setState((function(t){var n=Array.from(t.errors);return n.push(e),{errors:n}}))}},{key:"_editInstance",value:(o=function*(e){var t=yield c.a.editInstance(_(_({},e),{},{id:this.context.instance.id}));t.code===s.a.OK?this.context.reloadInstance():this.addError(t.error)},l=function(){var e=this,t=arguments;return new Promise((function(n,r){var a=o.apply(e,t);function i(e){I(a,n,r,i,c,"next",e)}function c(e){I(a,n,r,i,c,"throw",e)}i(void 0)}))},function(e){return l.apply(this,arguments)})},{key:"editInstance",value:function(e){this._editInstance(e)}},{key:"render",value:function(){var e=this,t=function(t){return Object(u.d)(e.context.user).instanceManagerRights&t},n=function(t){e.setState({editLock:t})};return a.a.createElement("div",{className:"text-center"},this.state.errors.map((function(t,n){if(t)return a.a.createElement(f.a,{key:n,error:t,onClose:function(){return e.setState((function(e){var t=Array.from(e.errors);return t[n]=void 0,{errors:t}}))}})})),a.a.createElement(P,{name:"instance.name",defaultValue:this.context.instance.name,type:"str",onChange:function(t){e.editInstance({name:t})},disabled:!t(i.e.Rename),setEditLock:n,editLock:this.state.editLock}),a.a.createElement(P,{name:"instance.path",defaultValue:this.context.instance.path,type:"str",onChange:function(t){e.editInstance({path:t})},disabled:!t(i.e.Relocate),setEditLock:n,editLock:this.state.editLock}),a.a.createElement(P,{name:"instance.chatbotlimit",defaultValue:this.context.instance.chatBotLimit,type:"num",onChange:function(t){e.editInstance({chatBotLimit:t})},disabled:!t(i.e.SetChatBotLimit),setEditLock:n,editLock:this.state.editLock}),a.a.createElement(P,{name:"instance.autoupdate",defaultValue:this.context.instance.autoUpdateInterval,type:"num",onChange:function(t){e.editInstance({autoUpdateInterval:t})},disabled:!t(i.e.SetAutoUpdate),setEditLock:n,editLock:this.state.editLock}),a.a.createElement(P,{name:"instance.filemode",defaultValue:i.c[this.context.instance.configurationType],type:"enum",enum:i.c,onChange:function(t){e.editInstance({configurationType:i.c[t]})},disabled:!t(i.e.SetConfiguration),setEditLock:n,editLock:this.state.editLock}))}}])&&L(t.prototype,n),r&&L(t,r),d}(a.a.Component);F.contextType=l.a;t.default=Object(o.f)(F)},381:function(e,t,n){"use strict";n.r(t);var r=n(59),a=n(0),o=n.n(a),i=n(113),c=n(69),s=n(46),l=n(751),u=n(80),f=n(13),p=n(97),d=n(77),m=n(2),y=n(71),h=n(768),b=n(19),v=n(49),E=n(770),g=n(372),w=n(373);function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function x(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return S(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return S(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function k(e,t,n,r,a,o,i){try{var c=e[o](i),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,a)}function j(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){k(o,r,a,i,c,"next",e)}function c(e){k(o,r,a,i,c,"throw",e)}i(void 0)}))}}function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function C(e,t){return(C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function V(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=I(e);if(t){var a=I(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return _(this,n)}}function _(e,t){return!t||"object"!==O(t)&&"function"!=typeof t?R(e):t}function R(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function I(e){return(I=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var L=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&C(e,t)}(w,e);var t,n,a,f,y,g=V(w);function w(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,w),(t=g.call(this,e)).reloadInstance=t.reloadInstance.bind(R(t)),t.deleteContextError=t.deleteContextError.bind(R(t)),b.c.selectedinstanceid=parseInt(t.props.match.params.id),t.state={tab:e.match.params.tab||w.tabs[0][0],errors:new Set,instance:null,instancePermissionSet:null,reloadInstance:t.reloadInstance,deleteError:t.deleteContextError,instanceid:parseInt(t.props.match.params.id)},t}return t=w,(n=[{key:"deleteContextError",value:function(e){this.setState((function(t){var n=new Set(t.errors);return n.delete(e),{errors:n}}))}},{key:"componentDidMount",value:(y=j((function*(){yield this.reloadInstance()})),function(){return y.apply(this,arguments)})},{key:"reloadInstance",value:(f=j((function*(){this.setState({instance:null,instancePermissionSet:null});var e=yield p.a.getInstance(this.state.instanceid);if(e.code===m.a.OK){this.setState({instance:e.payload});var t=yield d.a.getCurrentInstancePermissionSet(this.state.instanceid);t.code===m.a.OK?this.setState({instancePermissionSet:t.payload}):this.setState((function(e){var n=new Set(e.errors);return n.add(t.error),{instancePermissionSet:null,errors:n}}))}else this.setState((function(t){var n=new Set(t.errors);return n.add(e.error),{instance:null,errors:n}}))})),function(){return f.apply(this,arguments)})},{key:"render",value:function(){var e=this;if(!this.state.instance||!this.state.instancePermissionSet)return o.a.createElement(v.a,{text:"loading.instance"});var t=function(t){if(t){var n=w.tabs.find((function(t){return t[0]===e.state.tab}));if(!n)throw"InstanceEdit: unable to find active tab";return o.a.createElement(c.a,{onSelect:function(t){t=t||w.tabs[0][0],b.c.selectedinstanceedittab=t,e.props.history.push(b.b.instanceedit.link||b.b.instanceedit.route),e.setState({tab:t||w.tabs[0][0]})}},o.a.createElement(c.a.Toggle,{variant:"secondary",id:"tabselect",className:"d-block mx-auto w-75 text-center"},o.a.createElement(r.a,{icon:n[1],className:"mr-1"}),o.a.createElement(u.a,{id:"view.instanceedit.tabs.".concat(n[0])})),o.a.createElement(c.a.Menu,{popperConfig:{modifiers:[{name:"bottomPlacement",enabled:!0,phase:"beforeMain",fn:function(e){var t=e.state;"bottom"!=t.placement&&(t.placement="bottom",t.reset=!0)}}]},className:"d-block mx-auto w-75 text-center"},w.tabs.map((function(e){if(e!==n&&void 0!==e[2])return o.a.createElement(c.a.Item,{key:e[0],eventKey:e[0]},o.a.createElement(r.a,{icon:e[1],className:"mr-1"}),o.a.createElement(u.a,{id:"view.instanceedit.tabs.".concat(e[0])}))}))))}return o.a.createElement(s.a,{defaultActiveKey:e.state.tab,onSelect:function(t){t=t||w.tabs[0][0],b.c.selectedinstanceedittab=t,e.props.history.push(b.b.instanceedit.link||b.b.instanceedit.route),e.setState({tab:t||w.tabs[0][0]})},fill:!0,variant:"pills",activeKey:e.state.tab,className:"flex-nowrap text-nowrap overflow-auto "},w.tabs.map((function(e){var t=x(e,3),n=t[0],a=t[1],i=t[2];return o.a.createElement(s.a.Item,{key:n},o.a.createElement(s.a.Link,{eventKey:n,bsPrefix:"nav-link instanceedittab ",className:i?"":"wip text-white"},o.a.createElement(o.a.Fragment,null,o.a.createElement(r.a,{icon:a,className:"mr-1"}),o.a.createElement(u.a,{id:"view.instanceedit.tabs.".concat(n)}))))})))};return o.a.createElement(h.a.Provider,{value:Object.assign({user:this.context.user,serverInfo:this.context.serverInfo},this.state)},o.a.createElement(i.a,null,o.a.createElement(i.a.Header,{className:"text-center mb-2"},o.a.createElement("h3",null,o.a.createElement(u.a,{id:"view.instanceedit.title",values:{instanceid:this.props.match.params.id,instancename:this.state.instance.name}})),o.a.createElement("h5",{className:"text-white-50"},o.a.createElement(u.a,{id:"view.instanceedit.tabs.".concat(this.state.tab)}))),o.a.createElement(l.a.Container,{mountOnEnter:!0,unmountOnExit:!0,id:"instanceedit",activeKey:this.state.tab},o.a.createElement(i.a.Body,null,o.a.createElement("div",{className:"d-block d-xl-none"},t(!0)),o.a.createElement("div",{className:"d-none d-xl-block"},t(!1))),o.a.createElement(i.a.Body,{className:"bg-body"},o.a.createElement(l.a.Content,null,w.tabs.map((function(e){var t=x(e,3),n=t[0],r=t[2];return o.a.createElement(l.a.Pane,{eventKey:n,key:n},r?o.a.createElement(r,null):o.a.createElement(E.a,null))})))))))}}])&&P(t.prototype,n),a&&P(t,a),w}(o.a.Component);L.tabs=[["info","info"],["repository","code-branch"],["deployment","hammer"],["byond","list-ul",g.default],["chatbots","comments"],["files","folder-open"],["users","users"],["config","cogs",w.default]],L.contextType=y.a,t.default=Object(f.f)(L)},768:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(0),a=n.n(r).a.createContext(void 0)},770:function(e,t,n){"use strict";n.d(t,"a",(function(){return y}));var r=n(0),a=n.n(r),o=n(113),i=n(80),c=n(21);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=m(e);if(t){var a=m(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return d(this,n)}}function d(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(d,e);var t,n,r,s=p(d);function d(){return l(this,d),s.apply(this,arguments)}return t=d,(n=[{key:"render",value:function(){return a.a.createElement(o.a,{className:"bg-transparent",border:"info"},a.a.createElement(o.a.Header,{className:"bg-info text-dark font-weight-bold"},a.a.createElement(i.a,{id:"generic.wip"})),a.a.createElement(o.a.Body,null,a.a.createElement(o.a.Title,null,a.a.createElement(i.a,{id:"generic.wip.desc"}),a.a.createElement("a",{href:"https://github.com/tgstation/Tgstation.Server.ControlPanel/releases/latest"},"https://github.com/tgstation/Tgstation.Server.ControlPanel/releases/latest")),a.a.createElement(o.a.Text,{as:"pre",className:"bg-transparent text-info"},a.a.createElement("code",null,"Version: ".concat(c.e,"\nWebpanel Mode: ").concat(c.d,"\nCurrent route: ").concat(window.location.toString())))))}}])&&u(t.prototype,n),r&&u(t,r),d}(a.a.Component)}}]);
//# sourceMappingURL=4.b126101f941b5d59cdd0.js.map