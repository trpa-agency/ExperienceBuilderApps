System.register(["jimu-core","jimu-ui/advanced/setting-components","jimu-ui","jimu-ui/advanced/resource-selector","jimu-ui/advanced/style-setting-components","jimu-ui/basic/color-picker","jimu-theme"],(function(e,t){var n={},a={},o={},i={},l={},s={},r={};return{setters:[function(e){n.Immutable=e.Immutable,n.React=e.React,n.css=e.css,n.jsx=e.jsx},function(e){a.SettingRow=e.SettingRow,a.SettingSection=e.SettingSection},function(e){o.Label=e.Label,o.Radio=e.Radio,o.Select=e.Select,o.Switch=e.Switch,o.TextAlignValue=e.TextAlignValue,o.defaultMessages=e.defaultMessages,o.hooks=e.hooks},function(e){i.IconPicker=e.IconPicker},function(e){l.InputUnit=e.InputUnit,l.NavStyleSettingByState=e.NavStyleSettingByState,l.TextAlignment=e.TextAlignment},function(e){s.ThemeColorPicker=e.ThemeColorPicker},function(e){r.getNavigationVariables=e.getNavigationVariables,r.useTheme2=e.useTheme2}],execute:function(){e((()=>{var e={48891:e=>{"use strict";e.exports=n},34796:e=>{"use strict";e.exports=r},30726:e=>{"use strict";e.exports=o},20663:e=>{"use strict";e.exports=i},77756:e=>{"use strict";e.exports=a},55505:e=>{"use strict";e.exports=l},41362:e=>{"use strict";e.exports=s}},t={};function c(n){var a=t[n];if(void 0!==a)return a.exports;var o=t[n]={exports:{}};return e[n](o,o.exports,c),o.exports}c.d=(e,t)=>{for(var n in t)c.o(t,n)&&!c.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.p="";var u={};return c.p=window.jimuConfig.baseUrl,(()=>{"use strict";c.r(u),c.d(u,{default:()=>x});var e,t=c(48891),n=c(77756);!function(e){e.Icon="ICON",e.Vertical="VERTICAL",e.Horizontal="HORIZONTAL"}(e||(e={}));var a=c(30726),o=c(20663),i=c(55505),l=c(41362),s=c(34796);const{useMemo:r}=t.React,d=(e,n)=>{var a;const o=(0,s.getNavigationVariables)();let i=null===(a=null==o?void 0:o[e])||void 0===a?void 0:a[n];const l={item:{default:{icon:{size:"14px"},size:"14px"},active:{icon:{color:"pills"===n?"var(--white)":"var(--primary)",size:"14px"},size:"14px"},hover:{icon:{color:"var(--primary)",size:"14px"},size:"14px"}}};return i=(0,t.Immutable)(i).merge(l,{deep:!0}),i},p={subMenuExpandMode:"Submenu expand mode",mainMenu:"Main menu",subMenu:"Submenu"},g={svg:'<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="css-1i7frhi jimu-icon"><path d="M2 1a1 1 0 100 2h12a1 1 0 100-2H2zm0-1h12a2 2 0 010 4H2a2 2 0 010-4zm0 7a1 1 0 100 2h12a1 1 0 100-2H2zm0-1h12a2 2 0 010 4H2a2 2 0 010-4zm0 7a1 1 0 100 2h12a1 1 0 100-2H2zm0-1h12a2 2 0 010 4H2a2 2 0 010-4z" fill="currentColor" fill-rule="nonzero"></path></svg>',properties:{color:"var(--dark-800)",size:20,inlineSvg:!0}},v=e=>{var t;return null===(t=null==e?void 0:e.components)||void 0===t?void 0:t.paper},m=t.css`
  .radio-container {
    display: flex;
    width: 100%;
    margin-top: 0.5rem;
    > span.jimu-radio {
      flex-shrink: 0;
      margin-top: 0.1rem;
    }
    > label {
      margin-bottom: 0;
    }
  }
`,x=c=>{var u,x,w;const h=a.hooks.useTranslate(p,a.defaultMessages),f=(0,s.useTheme2)(),{config:j,id:b,onSettingChange:S}=c,{vertical:y,type:z,menuStyle:R,variant:I,advanced:C,standard:T}=j,{anchor:k,textAlign:M,icon:A,submenuMode:N,gap:H,showIcon:P}=T||{},V=((e,t,n,a)=>r((()=>n?a:d("nav",t)),[n,a,"nav",t]))(0,R,C,I),O=C?null==j?void 0:j.paper:v(f),B="drawer"===z?e.Icon:y?e.Vertical:e.Horizontal,E=(e,t)=>{S({id:b,config:Array.isArray(e)?j.setIn(e,t):j.set(e,t)})};return(0,t.jsx)("div",{css:m,className:"widget-setting-menu jimu-widget-setting"},(0,t.jsx)(n.SettingSection,null,(0,t.jsx)(n.SettingRow,{label:h("type")},(0,t.jsx)(a.Select,{size:"sm",value:B,onChange:n=>{const o=n.target.value,i=o===e.Icon?"drawer":"nav",l=o===e.Icon?"left":"",s=o!==e.Horizontal,r=s?"foldable":"dropdown",c={icon:o===e.Icon?(0,t.Immutable)(g):null,anchor:l,submenuMode:r,textAlign:a.TextAlignValue.CENTER,gap:"0px"},u=j.set("type",i).set("menuStyle","default").set("standard",c).set("advanced",!1).without("variant").without("paper").set("vertical",s);S({id:b,config:u})},style:{width:"50%"}},(0,t.jsx)("option",{value:e.Icon},h("icon")),(0,t.jsx)("option",{value:e.Vertical},h("vertical")),(0,t.jsx)("option",{value:e.Horizontal},h("horizontal")))),"drawer"===z&&(0,t.jsx)(n.SettingRow,{label:h("location"),flow:"no-wrap"},(0,t.jsx)(a.Select,{size:"sm",style:{width:"50%"},value:k,onChange:e=>E(["standard","anchor"],e.target.value)},(0,t.jsx)("option",{value:"left"},h("left")),(0,t.jsx)("option",{value:"right"},h("right")))),y&&(0,t.jsx)(n.SettingRow,{label:h("subMenuExpandMode"),flow:"wrap"},(0,t.jsx)(a.Select,{size:"sm",value:N,onChange:e=>E(["standard","submenuMode"],e.target.value)},(0,t.jsx)("option",{value:"foldable"},h("foldable")),(0,t.jsx)("option",{value:"static"},h("expand")))),"drawer"===z&&(0,t.jsx)(t.React.Fragment,null,(0,t.jsx)(n.SettingRow,{label:h("icon"),flow:"no-wrap"},(0,t.jsx)(o.IconPicker,{hideRemove:!0,icon:A,previewOptions:{color:!0,size:!1},onChange:e=>E(["standard","icon"],e)})),(0,t.jsx)(n.SettingRow,{label:h("iconSize"),flow:"no-wrap"},(0,t.jsx)(i.InputUnit,{size:"sm",className:"w-50",value:`${null!==(x=null===(u=null==A?void 0:A.properties)||void 0===u?void 0:u.size)&&void 0!==x?x:0}px`,onChange:e=>E(["standard","icon","properties","size"],e.distance)})))),(0,t.jsx)(n.SettingSection,{title:h("appearance")},(0,t.jsx)(n.SettingRow,{label:h("style"),flow:"wrap"},[{label:h("default"),value:"default"},{label:h("underline"),value:"underline"},{label:h("pills"),value:"pills"}].map(((e,n)=>(0,t.jsx)("div",{className:"radio-container",key:n},(0,t.jsx)(a.Radio,{id:"nav-style-type"+n,style:{cursor:"pointer"},name:"style-type",onChange:t=>((e,t)=>{if(!e.currentTarget.checked)return;let n=j.set("menuStyle",t).set("advanced",!1).set("variant",null);S({id:b,config:n})})(t,e.value),checked:R===e.value}),(0,t.jsx)(a.Label,{style:{cursor:"pointer"},for:"nav-style-type"+n,className:"ml-2 text-break"},e.label))))),(0,t.jsx)(n.SettingRow,{label:h("space"),flow:"no-wrap"},(0,t.jsx)(i.InputUnit,{size:"sm",className:"w-50",value:H,onChange:e=>E(["standard","gap"],`${e.distance}${e.unit}`)})),(0,t.jsx)(n.SettingRow,{flow:"no-wrap",label:h("alignment")},(0,t.jsx)(i.TextAlignment,{textAlign:M,onChange:e=>E(["standard","textAlign"],e)})),(0,t.jsx)(n.SettingRow,{flow:"no-wrap",label:h("showIcon")},(0,t.jsx)(a.Switch,{checked:P,onChange:(e,t)=>E(["standard","showIcon"],t)}))),(0,t.jsx)(n.SettingSection,null,(0,t.jsx)(n.SettingRow,{flow:"no-wrap",label:h("advance")},(0,t.jsx)(a.Switch,{checked:C,onChange:()=>{const e=!(null==j?void 0:j.advanced);let t=j.set("advanced",e);if(e){const e=d("nav",R),n=v(f);t=t.set("variant",e).set("paper",n)}else t=t.without("variant").without("paper");S({id:b,config:t})}})),C&&(0,t.jsx)(t.React.Fragment,null,"drawer"!==z&&(0,t.jsx)(n.SettingRow,{label:h("background"),flow:"no-wrap"},(0,t.jsx)(l.ThemeColorPicker,{specificTheme:f,value:null===(w=null==V?void 0:V.root)||void 0===w?void 0:w.bg,onChange:e=>E(["variant","root","bg"],e)})),"drawer"===z&&(0,t.jsx)(n.SettingRow,{label:h("background"),flow:"no-wrap"},(0,t.jsx)(l.ThemeColorPicker,{specificTheme:f,value:null==O?void 0:O.bg,onChange:e=>E(["paper","bg"],e)})),(0,t.jsx)(i.NavStyleSettingByState,{variant:V,onlyBorderColor:"underline"===R,text:!0,icon:!1,iconInText:P,onChange:(e,t,n)=>{E(["variant","item",e,t],n)}}))))}})(),u})())}}}));