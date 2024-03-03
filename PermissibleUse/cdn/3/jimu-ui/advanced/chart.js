System.register(["arcgis-charts","jimu-core","jimu-theme","jimu-ui"],(function(e,t){var r={},a={},s={},n={};return Object.defineProperty(r,"__esModule",{value:!0}),{setters:[function(e){Object.keys(e).forEach((function(t){r[t]=e[t]}))},function(e){a.React=e.React,a.classNames=e.classNames,a.css=e.css,a.jsx=e.jsx,a.lodash=e.lodash,a.polished=e.polished},function(e){s.getThemeColorValue=e.getThemeColorValue,s.useTheme=e.useTheme},function(e){n.hooks=e.hooks}],execute:function(){e((()=>{"use strict";var e={8847:(e,t,r)=>{r.d(t,{k:()=>i});var a=r(48891),s=r(87061),n=r(90622),o=r(12653),c=r(34796);const i=a.React.memo(a.React.forwardRef(((e,t)=>{const{className:r,config:i,data:l,selectedDataItems:u,options:g}=e,d=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(a=Object.getOwnPropertySymbols(e);s<a.length;s++)t.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]])}return r}(e,["className","config","data","selectedDataItems","options"]),p=(0,c.useTheme)(),h=a.React.useMemo((()=>{var e;const t=i;if(null!=t.asMutable){const r=t.asMutable(),a=null===(e=t.dataSource)||void 0===e?void 0:e.asMutable({deep:!0});return r.dataSource=a,r}return i}),[i]),f=a.React.useMemo((()=>{var e;let t=h;if("inline"===(null===(e=null==h?void 0:h.dataSource)||void 0===e?void 0:e.type)&&l){let e=null;e="pieSeries"===(0,n.getSeriesType)(t.series)?Object.assign(Object.assign({},h.dataSource),{data:l}):Object.assign(Object.assign({},h.dataSource),{data:{dataItems:l}}),t=Object.assign(Object.assign({},h),{dataSource:e})}return t}),[h,l]),C=a.React.useMemo((()=>{const e=a.lodash.cloneDeep(f);return(0,o.If)(e,p)}),[f,p]),b=a.React.useMemo((()=>{let e=g;return u&&(e=e||{},e=Object.assign(Object.assign({},e),{selectionData:{selectionItems:u}})),e}),[g,u]);return a.React.createElement(s.P,Object.assign({ref:t,options:b,className:(0,a.classNames)("chart",r),config:C},d))})));i.displayName="Chart"},87061:(e,t,r)=>{r.d(t,{P:()=>l});var a=r(48891),s=r(90622),n=r(30726);const o=(e,t,r)=>{a.React.useEffect((()=>{if(null!=e&&null!=r)return e.addEventListener(t,r),()=>{e.removeEventListener(t,r)}}),[r,t,e])},c={queueChartCreation:!0,hideLicenceWatermark:!0,enableResponsiveFeatures:!1,useAnimatedCharts:!1,autoDisposeChart:!1},i=a.css`
  pointer-events: auto;
`,l=a.React.memo(a.React.forwardRef((function(e,t){const{className:r,config:l,options:u,globalOptions:g=c,arcgisChartsJSDataProcessComplete:d,arcgisChartsJSLegendItemVisibilityChange:p,arcgisChartsJSUpdateComplete:h,arcgisChartsJSRenderingComplete:f,arcgisChartsJSSelectionChange:C,arcgisChartsJSSeriesColorChange:b,arcgisChartsJSAxesMinMaxChange:m,arcgisChartsJSSelectionComplete:S,arcgisChartsJSBadDataWarningRaise:v,arcgisChartsJSTooManySelectedElements:O}=e,y=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(a=Object.getOwnPropertySymbols(e);s<a.length;s++)t.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]])}return r}(e,["className","config","options","globalOptions","arcgisChartsJSDataProcessComplete","arcgisChartsJSLegendItemVisibilityChange","arcgisChartsJSUpdateComplete","arcgisChartsJSRenderingComplete","arcgisChartsJSSelectionChange","arcgisChartsJSSeriesColorChange","arcgisChartsJSAxesMinMaxChange","arcgisChartsJSSelectionComplete","arcgisChartsJSBadDataWarningRaise","arcgisChartsJSTooManySelectedElements"]),j=a.React.useRef(null),R=a.React.useRef(null);return((e,t,r,o,c)=>{const i=a.React.useRef(null),l=n.hooks.useForkRef(e,i),u=a.React.useRef(!1),g=a.React.useRef(),d=n.hooks.useRefValue({config:r,options:o,globalOptions:c});a.React.useEffect((()=>{var e;if(null==t.current)return void(null===(e=i.current)||void 0===e||e.dispose());(0,s.validateWebChart)({input:r,queryObject:null}).then((e=>{var r;if(!e.valid)return console.error(e.schemaErrors),null===(r=i.current)||void 0===r||r.dispose(),void(t.current&&(t.current.innerHTML=""));g.current?u.current=!0:null!=i.current?n():a()}));const a=()=>{const{config:e,options:r,globalOptions:a}=d.current;g.current=(0,s.createChart)({chartContainer:t.current,chartConfig:e,options:Object.assign(Object.assign({},r),{dataUpdated:!0}),globalOptions:a}),g.current.then((e=>{l(e),g.current=void 0,u.current&&(u.current=!1,n())}),(()=>{l(null),g.current=void 0,u.current=!1}))},n=()=>{const{config:e,options:t,globalOptions:r}=d.current;g.current=i.current.update({newChartConfig:e,updateOptions:Object.assign(Object.assign({},t),{dataUpdated:!0}),updateGlobalOptions:r}),g.current.then((()=>{g.current=void 0,u.current&&(u.current=!1,n())}),(()=>{g.current=void 0,u.current=!1}))}}),[r,o,c,t,l,d]),a.React.useEffect((()=>()=>{null!=i.current&&i.current.dispose()}),[])})(n.hooks.useForkRef(t,R),j,l,u,g),o(j.current,"arcgisChartsJSDataProcessComplete",d),o(j.current,"arcgisChartsJSLegendItemVisibilityChange",p),o(j.current,"arcgisChartsJSUpdateComplete",h),o(j.current,"arcgisChartsJSRenderingComplete",f),o(j.current,"arcgisChartsJSSelectionChange",C),o(j.current,"arcgisChartsJSSeriesColorChange",b),o(j.current,"arcgisChartsJSAxesMinMaxChange",m),o(j.current,"arcgisChartsJSSelectionComplete",S),o(j.current,"arcgisChartsJSBadDataWarningRaise",v),o(j.current,"arcgisChartsJSTooManySelectedElements",O),(0,a.jsx)("div",Object.assign({css:i,className:(0,a.classNames)("chart-core w-100 h-100",r)},y,{ref:j}))})));l.displayName="ChartCore"},99772:(e,t,r)=>{r.r(t),r.d(t,{Chart:()=>a.k,ChartCore:()=>s.P,traverse:()=>n.fw,traverseConvertColor:()=>n.T5,traverseConvertWebChartColor:()=>n.If}),r(55515);var a=r(8847),s=r(87061),n=r(12653),o=r(90622),c={};for(const e in o)["default","Chart","ChartCore","traverse","traverseConvertColor","traverseConvertWebChartColor"].indexOf(e)<0&&(c[e]=()=>o[e]);r.d(t,c)},55515:()=>{},12653:(e,t,r)=>{r.d(t,{fw:()=>i,T5:()=>o,If:()=>c});var a=r(48891),s=r(34796);const n=/^var\(--(.+?)\)$/,o=(e,t,r="color")=>{if(!t)return e;const o=i(e,((e,t,o)=>{if((e=>"string"==typeof r?e===r:"function"==typeof r?r(e):void 0)(t)){const t=((e,t)=>{var r;if("string"!=typeof e||""===e||null==e)return e;const o=((e,t)=>(e=>!!n.test(e))(e)?(0,s.getThemeColorValue)(e,t):e)(e,t),c=a.polished.parseToRgb(o);if(null==c)return;const{red:i,green:l,blue:u}=c;return[i,l,u,255*(null!==(r=c.alpha)&&void 0!==r?r:1)]})(o,e);return t}return o}).bind(null,t),null);return o},c=(e,t)=>o(e,t,(e=>"color"===e||"background"===e)),i=(e,t,r)=>("[object Object]"===Object.prototype.toString.call(e)?Object.entries(e).forEach((([r,a])=>{a=i(a,t,r),e.asMutable?e=e.set(r,a):e[r]=a})):"[object Array]"===Object.prototype.toString.call(e)?e.forEach(((r,a)=>{r=i(r,t,a),e.asMutable?e=e.set(a,r):e[a]=r})):e=t(r,e),e)},90622:e=>{e.exports=r},48891:e=>{e.exports=a},34796:e=>{e.exports=s},30726:e=>{e.exports=n}},t={};function o(r){var a=t[r];if(void 0!==a)return a.exports;var s=t[r]={exports:{}};return e[r](s,s.exports,o),s.exports}o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var c={};return(()=>{o.r(c);var e=o(99772),t={};for(const r in e)"default"!==r&&(t[r]=()=>e[r]);o.d(c,t)})(),c})())}}}));