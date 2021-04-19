(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{353:function(t,e,r){"use strict";r.r(e);var a=r(0),n=r.n(a),o=r(37),s=r(139),i=r(75),u=r(73),c=r(13),l=r(58),p=r(6),d=r(4),h=r(9),f=r(68),m=r(65),y=r(55),w=r(49);function E(t){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function v(t,e,r,a,n,o,s){try{var i=t[o](s),u=i.value}catch(t){return void r(t)}i.done?e(u):Promise.resolve(u).then(a,n)}function b(t){return function(){var e=this,r=arguments;return new Promise((function(a,n){var o=t.apply(e,r);function s(t){v(o,a,n,s,i,"next",t)}function i(t){v(o,a,n,s,i,"throw",t)}s(void 0)}))}}function g(t,e){for(var r=0;r<e.length;r++){var a=e[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function S(t,e){return(S=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function O(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,a=x(t);if(e){var n=x(this).constructor;r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments);return P(this,r)}}function P(t,e){return!e||"object"!==E(e)&&"function"!=typeof e?k(t):e}function k(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function x(t){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var C=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&S(t,e)}(v,t);var e,r,a,c,m,E=O(v);function v(t,e){var r,a;if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,v),r=E.call(this,t),null==e||!e.user)throw Error("ChangePassword: this.context?.user is null!");return a=t.match.params.id?parseInt(t.match.params.id):e.user.id,r.state={errors:[],password1:"",password2:"",userId:a,currentUser:e.user.id===a,loading:!0},r.submit=r.submit.bind(k(r)),r}return e=v,(r=[{key:"componentDidMount",value:(m=b((function*(){var t=yield f.a.getUser(this.state.userId);t.code==d.a.OK?this.setState({user:t.payload}):this.addError(t.error),this.setState({loading:!1})})),function(){return m.apply(this,arguments)})},{key:"addError",value:function(t){this.setState((function(e){var r=Array.from(e.errors);return r.push(t),{errors:r}}))}},{key:"submit",value:(c=b((function*(t){if(this.state.user){t.preventDefault();var e=!1;if(this.state.password1.length<this.context.serverInfo.minimumPasswordLength?(e=!0,this.setState({lengthError:!0})):this.setState({lengthError:!1}),this.state.password2!==this.state.password1?(e=!0,this.setState({matchError:!0})):this.setState({matchError:!1}),!e){this.setState({pwdload:!0});var r=yield f.a.editUser({password:this.state.password1,id:this.state.user.id});switch(r.code){case d.a.OK:this.state.currentUser&&h.a.login({type:l.a.Password,userName:this.state.user.name,password:this.state.password1}),this.props.history.goBack();break;case d.a.ERROR:this.addError(r.error),this.setState({pwdload:!1})}}}else this.addError(new p.c(p.b.APP_FAIL,{jsError:Error("changepassword submit: this.user is falsy")}))})),function(t){return c.apply(this,arguments)})},{key:"render",value:function(){var t=this;return this.state.loading?n.a.createElement(w.a,{text:"loading.info"}):this.state.pwdload?n.a.createElement(w.a,{text:"loading.passwd"}):n.a.createElement(i.a,{onSubmit:this.submit},n.a.createElement(s.a,{className:"mx-auto",lg:5,md:8},this.state.errors.map((function(e,r){if(e)return n.a.createElement(y.a,{key:r,error:e,onClose:function(){return t.setState((function(t){var e=Array.from(t.errors);return e[r]=void 0,{errors:e}}))}})})),this.state.user?n.a.createElement(n.a.Fragment,null,n.a.createElement("h3",null,n.a.createElement(u.a,{id:"view.user.passwd.title"}),this.state.user.name,"(",this.state.user.id,")"),n.a.createElement("hr",null),n.a.createElement(i.a.Group,{controlId:"password1"},n.a.createElement(i.a.Label,null,n.a.createElement(u.a,{id:"login.password"})),n.a.createElement(i.a.Control,{type:"password",onChange:function(e){return t.setState({password1:e.target.value})},value:this.state.password1,isInvalid:this.state.matchError||this.state.lengthError}),n.a.createElement(i.a.Control.Feedback,{type:"invalid"},this.state.lengthError?n.a.createElement(n.a.Fragment,null,n.a.createElement(u.a,{id:"login.password.repeat.short"}),this.context.serverInfo.minimumPasswordLength):"")),n.a.createElement(i.a.Group,{controlId:"password2"},n.a.createElement(i.a.Label,null,n.a.createElement(u.a,{id:"login.password.repeat"})),n.a.createElement(i.a.Control,{type:"password",onChange:function(e){return t.setState({password2:e.target.value})},value:this.state.password2,isInvalid:this.state.matchError||this.state.lengthError}),n.a.createElement(i.a.Control.Feedback,{type:"invalid"},this.state.matchError?n.a.createElement(u.a,{id:"login.password.repeat.match"}):"")),n.a.createElement(o.a,{type:"submit"},n.a.createElement(u.a,{id:"routes.passwd"}))):""))}}])&&g(e.prototype,r),a&&g(e,a),v}(n.a.Component);C.contextType=m.a,e.default=Object(c.f)(C)}}]);
//# sourceMappingURL=13.25e05dc8120a20a6740b.js.map