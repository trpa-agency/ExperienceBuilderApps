System.register(["jimu-core","jimu-layouts/layout-runtime","jimu-ui"],(function(e,t){var o={},r={},n={};return{setters:[function(e){o.React=e.React,o.jsx=e.jsx},function(e){r.LayoutEntry=e.LayoutEntry},function(e){n.WidgetPlaceholder=e.WidgetPlaceholder}],execute:function(){e((()=>{var e={11804:e=>{e.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H1v12a1 1 0 001 1h12a1 1 0 001-1V2zM2 0h12a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2zm1 3h4a1 1 0 011 1v4a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1zm0 1v4h4V4H3zm7 5h3a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-3a1 1 0 011-1zm0 1v3h3v-3h-3z" fill="#000" fill-rule="nonzero"></path></svg>'},48891:e=>{"use strict";e.exports=o},74758:e=>{"use strict";e.exports=r},30726:e=>{"use strict";e.exports=n}},t={};function s(o){var r=t[o];if(void 0!==r)return r.exports;var n=t[o]={exports:{}};return e[o](n,n.exports,s),n.exports}s.d=(e,t)=>{for(var o in t)s.o(t,o)&&!s.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.p="";var i={};return s.p=window.jimuConfig.baseUrl,(()=>{"use strict";s.r(i),s.d(i,{default:()=>n});var e=s(48891),t=s(74758);var o=s(30726);const r=s(11804);class n extends e.React.PureComponent{render(){const{layouts:n,id:s,intl:i,builderSupportModules:a}=this.props,u=window.jimuConfig.isInBuilder?a.widgetModules.LayoutBuilder:t.LayoutEntry;if(null==u)return(0,e.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},"No layout component!");const l=Object.keys(n)[0];return(0,e.jsx)("div",{className:"widget-fixed-layout d-flex w-100 h-100"},(0,e.jsx)(u,{layouts:n[l],isInWidget:!0,style:{overflow:"auto",minHeight:"none"}},(0,e.jsx)(o.WidgetPlaceholder,{icon:r,widgetId:s,style:{border:"none"},message:i.formatMessage({id:"tips",defaultMessage:"Fixed Panel"})})))}}})(),i})())}}}));