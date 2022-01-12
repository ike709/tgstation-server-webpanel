"use strict";(self.webpackChunktgstation_server_control_panel=self.webpackChunktgstation_server_control_panel||[]).push([[408],{8425:function(e,t,a){a.d(t,{t:function(){return i}});var r=a(7294),s=a(5171),n=a.n(s),l=a(7961);function o(e){return r.createElement(n(),{src:e.obj,name:"JSON",theme:"tube",iconStyle:"triangle",collapsed:!0,displayDataTypes:!1})}function i(e){return l.ZP.showjson.value?r.createElement("div",{className:"text-left"},r.createElement(o,{obj:e.obj})):r.createElement(r.Fragment,null)}},9905:function(e,t,a){a.d(t,{Z:function(){return O}});var r=a(7814),s=a(7294),n=a(5005),l=a(2258),o=a(5293),i=a(7462),c=a(3366),m=a(4184),p=a.n(m),d=a(6792),h=a(8358),g=["active","disabled","className","style","activeLabel","children"],u=["children"],E=s.forwardRef((function(e,t){var a=e.active,r=e.disabled,n=e.className,l=e.style,o=e.activeLabel,m=e.children,d=(0,c.Z)(e,g),u=a||r?"span":h.Z;return s.createElement("li",{ref:t,style:l,className:p()(n,"page-item",{active:a,disabled:r})},s.createElement(u,(0,i.Z)({className:"page-link",disabled:r},d),m,a&&o&&s.createElement("span",{className:"sr-only"},o)))}));E.defaultProps={active:!1,disabled:!1,activeLabel:"(current)"},E.displayName="PageItem";var v=E;function f(e,t,a){function r(e){var r=e.children,n=(0,c.Z)(e,u);return s.createElement(E,n,s.createElement("span",{"aria-hidden":"true"},r||t),s.createElement("span",{className:"sr-only"},a))}return void 0===a&&(a=e),r.displayName=e,r}var P=f("First","\xab"),b=f("Prev","\u2039","Previous"),y=f("Ellipsis","\u2026","More"),N=f("Next","\u203a"),Z=f("Last","\xbb"),w=["bsPrefix","className","children","size"],x=s.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,n=e.children,l=e.size,o=(0,c.Z)(e,w),m=(0,d.vE)(a,"pagination");return s.createElement("ul",(0,i.Z)({ref:t},o,{className:p()(r,m,l&&m+"-"+l)}),n)}));x.First=P,x.Prev=b,x.Ellipsis=y,x.Item=v,x.Next=N,x.Last=Z;var k=x,L=(a(5638),["as","bsPrefix","className","children"]),C=s.forwardRef((function(e,t){var a=e.as,r=void 0===a?"div":a,n=e.bsPrefix,l=e.className,o=e.children,m=(0,c.Z)(e,L);return n=(0,d.vE)(n,"popover-header"),s.createElement(r,(0,i.Z)({ref:t},m,{className:p()(n,l)}),o)})),R=["as","bsPrefix","className","children"],S=s.forwardRef((function(e,t){var a=e.as,r=void 0===a?"div":a,n=e.bsPrefix,l=e.className,o=e.children,m=(0,c.Z)(e,R);return n=(0,d.vE)(n,"popover-body"),s.createElement(r,(0,i.Z)({ref:t},m,{className:p()(l,n)}),o)})),M=["bsPrefix","placement","className","style","children","content","arrowProps","popper","show"],G=s.forwardRef((function(e,t){var a=e.bsPrefix,r=e.placement,n=e.className,l=e.style,o=e.children,m=e.content,h=e.arrowProps,g=(e.popper,e.show,(0,c.Z)(e,M)),u=(0,d.vE)(a,"popover"),E=((null==r?void 0:r.split("-"))||[])[0];return s.createElement("div",(0,i.Z)({ref:t,role:"tooltip",style:l,"x-placement":E,className:p()(n,u,E&&"bs-popover-"+E)},g),s.createElement("div",(0,i.Z)({className:"arrow"},h)),m?s.createElement(S,null,o):o)}));G.defaultProps={placement:"right"},G.Title=C,G.Content=S;var j=G,_=a(4012);function I(){return I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},I.apply(this,arguments)}class O extends s.PureComponent{constructor(e){super(e),this.state={showGoto:!1,gotoValue:e.currentPage}}render(){const e=[],t=Math.max(this.props.totalPages-this.props.currentPage-1,0),a=Math.max(this.props.currentPage-2,0),i=Math.max(this.props.currentPage-Math.max(5-Number(this.props.currentPage!==this.props.totalPages)-t,2),2),c=Math.min(this.props.currentPage+Math.max(5-Number(1!==this.props.currentPage)-a,2),this.props.totalPages-1);for(let t=i;t<=c;t++)e.push(s.createElement(k.Item,{key:t,active:t===this.props.currentPage,onClick:()=>this.props.selectPage(t)},t));const m=this.props.totalPages>7?s.createElement(k.Ellipsis,{disabled:!0}):null,p=s.createElement(j,{id:"popover-gotopage"},s.createElement(j.Title,null,s.createElement(_.Z,{id:"generic.goto.title"})),s.createElement(j.Content,null,s.createElement("form",{className:"d-flex",onSubmit:e=>{e.preventDefault(),this.props.selectPage(this.state.gotoValue),this.setState({showGoto:!1})}},s.createElement(l.Z.Control,{className:"mr-2",type:"number",min:1,max:this.props.totalPages,value:this.state.gotoValue,onChange:e=>this.setState({gotoValue:parseInt(e.target.value)}),custom:!0}),s.createElement(n.Z,{type:"submit"},s.createElement(_.Z,{id:"generic.goto"}))))),{selectPage:d,totalPages:h,currentPage:g,...u}=this.props;return s.createElement("div",I({className:"text-center",style:{position:"sticky",bottom:"1.5em"}},u),s.createElement(k,{className:"justify-content-center"},s.createElement(k.Prev,{disabled:this.props.currentPage<=1,onClick:()=>this.props.selectPage(Math.max(this.props.currentPage-1,1))}),s.createElement(k.Item,{active:this.props.currentPage<=1,onClick:()=>this.props.selectPage(1)},"1"),m,e,m,this.props.totalPages>=2?s.createElement(k.Item,{active:this.props.currentPage>=this.props.totalPages,onClick:()=>this.props.selectPage(this.props.totalPages)},this.props.totalPages):null,this.props.totalPages>7?s.createElement(o.Z,{show:this.state.showGoto,placement:"top",overlay:p},s.createElement(k.Item,{onClick:()=>this.setState((e=>({showGoto:!e.showGoto})))},s.createElement(r.G,{icon:"search"}))):null,s.createElement(k.Next,{disabled:this.props.currentPage>=this.props.totalPages,onClick:()=>this.props.selectPage(Math.min(this.props.currentPage+1,this.props.totalPages))})))}}},3408:function(e,t,a){a.r(t);var r=a(7294),s=a(5005),n=a(682),l=a(5293),o=a(5147),i=a(3489),c=a(4012),m=a(8272),p=a(5977),d=a(3727),h=a(2480),g=a(6846),u=a(3803),E=a(6964),v=a(1320),f=a(3e3),P=a(8425),b=a(5855),y=a(9905);t.default=(0,p.EN)(class extends r.Component{constructor(e){super(e),this.state={errors:[],loading:!0,logs:[],page:v.Mq.loglistpage??1}}async componentDidUpdate(e,t){t.page!==this.state.page&&(v.Mq.loglistpage=this.state.page,await this.loadLogs())}async componentDidMount(){const e=this.props.match.params.name;if(e){const t=await h.Z.getLog(e);switch(t.code){case u.G.OK:{const e=RegExp(/(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{7}[-+]\d{2}:\d{2})\s+(.*?)(?=(?:\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{7}[-+]\d{2}:\d{2}|$))/,"gs");let a;const r=[];for(;null!==(a=e.exec(t.payload.content));)r.push({time:a[1],content:a[2]});this.setState({viewedLog:{logFile:t.payload,entries:r}});break}case u.G.ERROR:this.addError(t.error)}}await this.loadLogs()}async loadLogs(){this.setState({loading:!0});const e=await h.Z.getLogs({page:this.state.page});switch(e.code){case u.G.OK:if(this.state.page>e.payload.totalPages&&0!==e.payload.totalPages)return void this.setState({page:1});this.setState({logs:e.payload.content,maxPage:e.payload.totalPages});break;case u.G.ERROR:this.addError(e.error)}this.setState({loading:!1})}addError(e){this.setState((t=>{const a=Array.from(t.errors);return a.push(e),{errors:a}}))}async downloadLog(e){const t=await h.Z.getLog(e);switch(t.code){case u.G.OK:(0,E.LR)(e,t.payload.content);break;case u.G.ERROR:this.addError(t.error)}}render(){return r.createElement("div",{className:"text-center"},this.state.errors.map(((e,t)=>{if(e)return r.createElement(f.ZP,{key:t,error:e,onClose:()=>this.setState((e=>{const a=Array.from(e.errors);return a[t]=void 0,{errors:a}}))})})),this.state.loading?r.createElement(b.Z,{text:"loading.logs"}):this.props.match.params.name&&this.state.viewedLog?r.createElement("div",{className:"mx-5 mt-5"},r.createElement(P.t,{obj:this.state.viewedLog}),r.createElement("h3",null,this.props.match.params.name),r.createElement(s.Z,{className:"mr-1",as:d.rU,to:v.$w.admin_logs.link??v.$w.admin_logs.route},r.createElement(c.Z,{id:"generic.goback"})),r.createElement(s.Z,{onClick:()=>{(0,E.LR)(this.props.match.params.name,this.state.viewedLog.logFile.content)}},r.createElement(c.Z,{id:"generic.download"})),r.createElement("hr",null),r.createElement("div",{style:{height:"60vh",display:"block"},className:"table-responsive"},r.createElement(o.Z,{striped:!0,hover:!0,variant:"dark",className:"text-left"},r.createElement("thead",{className:"bg-dark",style:{position:"sticky",top:0}},r.createElement("th",null,r.createElement(c.Z,{id:"generic.datetime"})),r.createElement("th",null,r.createElement(c.Z,{id:"generic.entry"}))),r.createElement("tbody",null,this.state.viewedLog.entries.map((e=>r.createElement("tr",{key:e.time},r.createElement("td",{className:"py-1"},e.time),r.createElement("td",{className:"py-1"},r.createElement("pre",{className:"mb-0"},e.content))))))))):r.createElement(n.Z,{className:"mt-5 mb-5"},r.createElement(P.t,{obj:this.state.logs}),r.createElement(o.Z,{striped:!0,bordered:!0,hover:!0,variant:"dark",responsive:!0},r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"#"),r.createElement("th",null,r.createElement(c.Z,{id:"generic.name"})),r.createElement("th",null,r.createElement(c.Z,{id:"generic.datetime"})),r.createElement("th",null,r.createElement(c.Z,{id:"generic.action"})))),r.createElement("tbody",null,this.state.logs.map(((e,t)=>{const a=new Date(e.lastModified),n=(a.getTime()-Date.now())/1e3;return r.createElement("tr",{key:e.name},r.createElement("td",null,t),r.createElement("td",null,e.name),r.createElement(l.Z,{overlay:r.createElement(i.Z,{id:`${e.name}-tooltip`},a.toLocaleString())},(({ref:e,...t})=>r.createElement("td",t,r.createElement("span",{ref:e},r.createElement(m.Z,{value:n,numeric:"auto",updateIntervalInSeconds:1}))))),r.createElement("td",{className:"align-middle p-0"},r.createElement(s.Z,{className:"mr-1",onClick:()=>{this.props.history.push((v.$w.admin_logs.link??v.$w.admin_logs.route)+e.name+"/",{reload:!0})}},r.createElement(c.Z,{id:"generic.view"})),r.createElement(s.Z,{onClick:()=>{this.downloadLog(e.name).catch((e=>{this.addError(new g.ZP(g.jK.APP_FAIL,{jsError:e}))}))}},r.createElement(c.Z,{id:"generic.download"}))))})))),r.createElement(y.Z,{selectPage:e=>this.setState({page:e}),totalPages:this.state.maxPage??1,currentPage:this.state.page})))}})},5147:function(e,t,a){var r=a(7462),s=a(3366),n=a(4184),l=a.n(n),o=a(7294),i=a(6792),c=["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"],m=o.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,m=e.striped,p=e.bordered,d=e.borderless,h=e.hover,g=e.size,u=e.variant,E=e.responsive,v=(0,s.Z)(e,c),f=(0,i.vE)(a,"table"),P=l()(n,f,u&&f+"-"+u,g&&f+"-"+g,m&&f+"-striped",p&&f+"-bordered",d&&f+"-borderless",h&&f+"-hover"),b=o.createElement("table",(0,r.Z)({},v,{className:P,ref:t}));if(E){var y=f+"-responsive";return"string"==typeof E&&(y=y+"-"+E),o.createElement("div",{className:y},b)}return b}));t.Z=m}}]);
//# sourceMappingURL=408.9d3b9814d5d6e1db5d4d.bundle.js.map