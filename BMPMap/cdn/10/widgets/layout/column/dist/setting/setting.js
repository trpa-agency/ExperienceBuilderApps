System.register(["jimu-core","jimu-for-builder","jimu-ui/advanced/setting-components","jimu-ui","jimu-layouts/layout-runtime","jimu-ui/advanced/style-setting-components"],(function(t,e){var s={},n={},i={},a={},o={},r={};return{setters:[function(t){s.Immutable=t.Immutable,s.React=t.React,s.jsx=t.jsx},function(t){n.getAppConfigAction=t.getAppConfigAction},function(t){i.SettingRow=t.SettingRow,i.SettingSection=t.SettingSection},function(t){a.Select=t.Select,a.defaultMessages=t.defaultMessages},function(t){o.utils=t.utils},function(t){r.InputUnit=t.InputUnit,r.Padding=t.Padding}],execute:function(){t((()=>{var t={48891:t=>{"use strict";t.exports=s},23137:t=>{"use strict";t.exports=n},74758:t=>{"use strict";t.exports=o},30726:t=>{"use strict";t.exports=a},77756:t=>{"use strict";t.exports=i},55505:t=>{"use strict";t.exports=r}},e={};function l(s){var n=e[s];if(void 0!==n)return n.exports;var i=e[s]={exports:{}};return t[s](i,i.exports,l),i.exports}l.d=(t,e)=>{for(var s in e)l.o(e,s)&&!l.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})},l.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),l.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.p="";var u={};return l.p=window.jimuConfig.baseUrl,(()=>{"use strict";l.r(u),l.d(u,{__set_webpack_public_path__:()=>c,default:()=>g});var t=l(48891),e=l(23137),s=l(77756),n=l(30726),i=l(74758);const a=(0,t.Immutable)({space:10,min:16,style:{padding:{number:[0],unit:"px"},justifyContent:"center",alignItems:"stretch"}});var o=l(55505);const r=Object.assign({},{verticalAlign:"Vertical align",spaceAround:"Space around",spaceBetween:"Space between",spaceEvenly:"Space evenly",horizontalAlign:"Horizontal align",scrollable:"Scrollable"},n.defaultMessages),p={width:110};class g extends t.React.PureComponent{constructor(){super(...arguments),this.handleSpaceChange=t=>{this.props.onSettingChange({id:this.props.id,config:this.props.config.set("space",t)});const s=(0,e.getAppConfigAction)();this.getLayoutIds().forEach((e=>{s.editLayoutProperty(e,"setting.space",t.distance)})),s.exec()},this.handlePaddingChange=t=>{this.props.onSettingChange({id:this.props.id,config:this.props.config.setIn(["style","padding"],t)});const s=(0,e.getAppConfigAction)();this.getLayoutIds().forEach((e=>{s.editLayoutProperty(e,"setting.padding",t)})),s.exec()},this.handleJustifyContentChange=t=>{this.props.onSettingChange({id:this.props.id,config:this.props.config.setIn(["style","justifyContent"],t.target.value)});const s=(0,e.getAppConfigAction)();this.getLayoutIds().forEach((e=>{s.editLayoutProperty(e,"setting.justifyContent",t.target.value)})),s.exec()},this.formatMessage=t=>this.props.intl.formatMessage({id:t,defaultMessage:r[t]})}getLayoutIds(){const t=[],{layouts:e}=this.props;if(null!=e){const s=e[Object.keys(e)[0]];Object.keys(s).forEach((e=>{t.push(s[e])}))}return t}getLayoutSetting(){var t;const{layouts:s}=this.props;if(null!=s){const n=s[Object.keys(s)[0]][i.utils.getCurrentSizeMode()];return null===(t=(0,e.getAppConfigAction)().appConfig.layouts[n])||void 0===t?void 0:t.setting}}render(){var e;const i=this.getLayoutSetting();return(0,t.jsx)("div",{className:"flexbox-layout-setting"},(0,t.jsx)(s.SettingSection,{title:this.formatMessage("layout"),role:"group","aria-label":this.formatMessage("layout")},(0,t.jsx)(s.SettingRow,{label:this.formatMessage("verticalAlign")},(0,t.jsx)(n.Select,{"aria-label":this.formatMessage("verticalAlign"),value:null!==(e=null==i?void 0:i.justifyContent)&&void 0!==e?e:"flex-start",size:"sm",onChange:this.handleJustifyContentChange,style:p},(0,t.jsx)("option",{value:"flex-start"},this.formatMessage("start")),(0,t.jsx)("option",{value:"flex-end"},this.formatMessage("end")),(0,t.jsx)("option",{value:"center"},this.formatMessage("center")),(0,t.jsx)("option",{value:"space-around"},this.formatMessage("spaceAround")),(0,t.jsx)("option",{value:"space-between"},this.formatMessage("spaceBetween")),(0,t.jsx)("option",{value:"space-evenly"},this.formatMessage("spaceEvenly")))),(0,t.jsx)(s.SettingRow,{label:this.formatMessage("gap")},(0,t.jsx)(o.InputUnit,{"aria-label":this.formatMessage("gap"),precision:0,value:{distance:(null==i?void 0:i.space)>=0?i.space:a.space,unit:void 0},min:0,onChange:this.handleSpaceChange,style:p})),(0,t.jsx)(s.SettingRow,{role:"group","aria-label":this.formatMessage("padding"),label:this.formatMessage("padding"),flow:"wrap"},(0,t.jsx)(o.Padding,{value:null==i?void 0:i.padding,onChange:this.handlePaddingChange}))))}}function c(t){l.p=t}})(),u})())}}}));