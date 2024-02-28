/*! For license information please see ae6c6eb98ebfe4cfdec8a4d6149df5ce.js.LICENSE.txt */
"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[76450],{76450:(e,t,n)=>{n.r(t),n.d(t,{arcgis_group_badge:()=>c});var r=n(28384),o=n(62727),i=n(26426);n(18869),n(81068),n(66716);const a={Collaboration:{icon:"collaboration"},FeaturedContent:{icon:"home"},Gallery:{icon:"images"},OpenData:{image:function(){return(0,r.h)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,r.h)("path",{d:"M13.5 12.5a.5.5 0 0 0-.5.5v.064C13 13.96 10.816 15 8 15s-5-1.04-5-1.936V8.85a11.936 11.936 0 0 0 5 .984.5.5 0 0 0 0-1A10.147 10.147 0 0 1 2.815 7.62a.484.484 0 0 0-.799.3c-.002.013-.006.025-.007.037C2.007 7.972 2 7.985 2 8v5.064C2 14.902 5.05 16 8 16s6-1.098 6-2.936V13a.5.5 0 0 0-.5-.5zM8 1C4.58 1 2 2.29 2 4s2.58 3 6 3a8.63 8.63 0 0 0 5-1.297v5.334a.5.5 0 0 0 1 0V4c0-1.71-2.58-3-6-3zm0 5C5.138 6 3 4.944 3 4s2.138-2 5-2c2.861 0 5 1.056 5 2s-2.139 2-5 2z",fill:"currentColor"}))}},SharedUpdate:{icon:"pencil"},Partnered:{image:function(){return(0,r.h)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,r.h)("path",{d:"M13.89,6.11a5.47,5.47,0,0,0-2.56-1.45A5.39,5.39,0,0,0,9.89,2.11,5.5,5.5,0,0,0,2.11,9.89a5.47,5.47,0,0,0,2.56,1.45,5.39,5.39,0,0,0,1.44,2.55,5.5,5.5,0,0,0,7.78-7.78Zm-.71,7.07A4.5,4.5,0,1,1,6.82,6.82l-.71-.71A5.46,5.46,0,0,0,4.5,10a2.09,2.09,0,0,0,0,.25A4.51,4.51,0,1,1,9.18,9.18l.71.71A5.46,5.46,0,0,0,11.5,6a2.09,2.09,0,0,0,0-.25,4.5,4.5,0,0,1,1.69,7.43Z",fill:"currentColor"}))}},AnyOrg:{icon:"zoom-to-object"}},c=class{constructor(e){(0,r.r)(this,e),this.openTooltip=()=>{this.tooltipOpen=!0},this.closeTooltip=async()=>{await(0,i.t)(200),this.tooltipOpen=!1,this.tooltip=null},this.width="full",this.scale="m",this.badgeType=void 0,this.appearance=void 0,this.showTooltip=!0,this.tooltipText="",this.tooltipOpen=void 0}async componentWillLoad(){const{el:e}=this,t=await(0,o.g)(e);this.i18n=t[0]}renderImage(e){return(0,r.h)("span",{slot:"image",class:"image"},e())}render(){const{badgeType:e,width:t,scale:n,showTooltip:o,appearance:i}=this,c=this.i18n[e],{icon:l,image:s}=a[this.badgeType],u="narrow"===t,d={badge:!0,"badge--red":"SharedUpdate"===e,narrow:u,[`narrow--${n}`]:u};return(0,r.h)(r.H,null,(0,r.h)("div",Object.assign({class:"wrapper"},o?{onMouseLeave:this.closeTooltip,onMouseEnter:this.openTooltip,onFocusout:this.closeTooltip,onFocusin:this.openTooltip}:{}),u?(0,r.h)("calcite-chip",Object.assign({class:d,value:e,ref:e=>this.chip=e,tabIndex:0,scale:n,appearance:i},l?{icon:l}:{}),!l&&this.renderImage(s)):(0,r.h)("calcite-chip",Object.assign({class:d,value:e},{icon:l},{ref:e=>this.chip=e,tabIndex:0,scale:n,appearance:i}),s&&this.renderImage(s),c.title),this.tooltipOpen&&(0,r.h)("arcgis-tunnel",{reference:this.el},(0,r.h)("calcite-tooltip",{ref:e=>{e&&(e.referenceElement=this.chip,this.tooltip||(this.tooltip=e,this.tooltip.open=!0))},closeOnClick:!0,label:c.title,placement:"bottom-start",offsetDistance:6,offsetSkidding:0,style:{pointerEvents:"none",zIndex:"calc(var(--calcite-app-z-index-modal) + 1)"}},u&&(0,r.h)("h3",{class:"tooltip__title",style:{fontSize:"var(--calcite-font-size--1)",color:"var(--calcite-ui-text-1)",margin:"0 0 .25rem 0",padding:"0"}},c.title),(0,r.h)("p",{class:"tooltip__text",style:{fontSize:"var(--calcite-font-size--2)",color:"var(--calcite-ui-text-1)",margin:"0",padding:"0"}},c.tooltip)))))}get el(){return(0,r.d)(this)}};c.style=".badge{--calcite-ui-icon-color:var(--calcite-ui-brand);display:inline-block;border-width:0}.badge--red{--calcite-ui-icon-color:var(--calcite-ui-danger)}.narrow{width:2rem;box-sizing:border-box;--calcite-chip-spacing-unit-l:0}.icon{margin-top:0.25rem;-webkit-margin-start:0.375rem;margin-inline-start:0.375rem}.image{border-radius:0;align-items:center;justify-content:center;-webkit-margin-start:0.5rem;margin-inline-start:0.5rem}.image svg{color:var(--calcite-ui-icon-color)}.narrow--s{width:1.5rem}.narrow--s .icon{margin:0.25rem}.narrow--s .image{-webkit-margin-start:0;margin-inline-start:0}.narrow--m .icon{margin:0.3125rem 0.5rem}.narrow--m .image{-webkit-margin-start:0;margin-inline-start:0}.narrow--l{width:2.75rem}.narrow--l .icon{margin:0.5rem 0.8rem}.narrow--l .image{-webkit-margin-start:0.25rem;margin-inline-start:0.25rem}"},26426:(e,t,n)=>{n.d(t,{a:()=>s,b:()=>p,c:()=>o,d:()=>r,e:()=>i,f:()=>u,g:()=>h,i:()=>a,m:()=>c,t:()=>l,u:()=>d});const r=(e,t)=>{let n,r="idle";const o=(...o)=>new Promise((i=>{switch(r){case"flushed":r="idle",n?(clearTimeout(n),i(e(...o))):i(null);break;case"invoked":clearTimeout(n),r="idle",i(e(...o));break;case"cancelled":clearTimeout(n),r="idle",i(null);break;default:n&&clearTimeout(n),r="pending",n=setTimeout((()=>(r="idle",i(e(...o)))),t)}}));return o.flush=function(...e){return r="flushed",o(...e)},o.invoke=function(...e){return r="invoked",o(...e)},o.cancel=function(...e){return r="cancelled",o(...e)},o.getStatus=function(){return r},o},o=(e,t)=>{let n;return(...r)=>new Promise((o=>{n||(n=setTimeout((()=>{clearTimeout(n),n=void 0,o(e(...r))}),t))}))};function i(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function a(e){return null!=e}async function c(e,t){return await Promise.all([e,l(t)]),e}function l(e){return new Promise((t=>setTimeout(t,e)))}const s=(e,t)=>Object.fromEntries((e||[]).map((e=>{const{key:n,data:r}=t(e);return[n,r]}))),u=(e,t)=>e.length===t.length&&e.reduce(((e,n)=>e&&t.indexOf(n)>-1),!0);function d(e,t){const n=[],r={};return e.forEach((e=>{const o=t(e);null==r[o]&&(r[o]=e,n.push(e))})),n}function p(e){const t={boolean:{},number:{},string:{}},n=[];return e.filter((e=>{let r=typeof e;return r in t?!t[r].hasOwnProperty(e)&&(t[r][e]=!0):!(n.indexOf(e)>=0)&&n.push(e)}))}const h=(e,t)=>[...Array(Math.ceil(e.length/t))].map(((n,r)=>e.slice(t*r,t+t*r)))},81068:(e,t,n)=>{n.d(t,{C:()=>c,a:()=>u,f:()=>l,g:()=>a,l:()=>i});var r=n(66716),o=n(18869);const i=new Map([["ar","ar"],["bg","bg"],["bs","bs"],["ca","ca"],["cs","cs"],["da","da"],["de","de"],["el","el"],["en","en"],["es","es"],["et","et"],["fi","fi"],["fr","fr"],["he","he"],["hr","hr"],["hu","hu"],["id","id"],["it","it"],["ja","ja"],["ko","ko"],["lt","lt"],["lv","lv"],["nb","nb"],["nl","nl"],["pl","pl"],["pt-br","pt-BR"],["pt-pt","pt-PT"],["ro","ro"],["ru","ru"],["sk","sk"],["sl","sl"],["sr","sr"],["sv","sv"],["th","th"],["tr","tr"],["uk","uk"],["vi","vi"],["zh-cn","zh-CN"],["zh-hk","zh-HK"],["zh-tw","zh-TW"]]);function a(e){return function(e,t,n){const r=(0,o.c)(e,"[dir]");return r?r.getAttribute("dir"):"ltr"}(e)}const c={rtl:"arcgis--rtl"};async function l(e,t){const{api:n,type:o,places:i}=t||{};if(4===n){const[t]=await(0,r.l)(["esri/intl"]),n=t.convertNumberFormatToIntlOptions({places:i,style:o,digitSeparator:!0});return t.formatNumber(e,Object.assign(Object.assign({},n),{style:o}))}const[a]=await(0,r.l)(["dojo/number"]);return a.format(e,{type:o,places:i,pattern:null==t?void 0:t.pattern})}const s={};function u(e){const t=document.documentElement.lang;return s[t]||(s[t]=new Intl.DateTimeFormat(document.documentElement.lang,{year:"numeric",month:"short",day:"numeric"})),s[t].format(e)}},66716:(e,t,n)=>{n.d(t,{a:()=>r,c:()=>i,e:()=>a,g:()=>o,l:()=>c});var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{};function o(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function i(e,t,n){return e(n={path:t,exports:{},require:function(e,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},n.exports),n.exports}var a=i((function(e,t){!function(e){var t={Promise:"undefined"!=typeof window?window.Promise:void 0},n="4.24",r="next";function o(e){if(e.toLowerCase()===r)return r;var t=e&&e.match(/^(\d)\.(\d+)/);return t&&{major:parseInt(t[1],10),minor:parseInt(t[2],10)}}function i(e){return void 0===e&&(e=n),"https://js.arcgis.com/".concat(e,"/")}function a(e){return!e||o(e)?function(e){void 0===e&&(e=n);var t=i(e),a=o(e);if(a!==r&&3===a.major){var c=a.minor<=10?"js/":"";return"".concat(t).concat(c,"esri/css/esri.css")}return"".concat(t,"esri/themes/light/main.css")}(e):e}function c(e,t){var n=a(e),r=function(e){return document.querySelector('link[href*="'.concat(e,'"]'))}(n);return r||function(e,t){if(t){var n=document.querySelector(t);n.parentNode.insertBefore(e,n)}else document.head.appendChild(e)}(r=function(e){var t=document.createElement("link");return t.rel="stylesheet",t.href=e,t}(n),t),r}var l={};function s(e,t,n){var r;n&&(r=function(e,t){var n=function(r){t(r.error||new Error("There was an error attempting to load ".concat(e.src))),e.removeEventListener("error",n,!1)};return e.addEventListener("error",n,!1),n}(e,n));var o=function(){t(e),e.removeEventListener("load",o,!1),r&&e.removeEventListener("error",r,!1)};e.addEventListener("load",o,!1)}function u(){return document.querySelector("script[data-esri-loader]")}function d(){var e=window.require;return e&&e.on}function p(e){void 0===e&&(e={});var n={};[l,e].forEach((function(e){for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t])}));var r=n.version,o=n.url||i(r);return new t.Promise((function(e,t){var i=u();if(i){var a=i.getAttribute("src");a!==o?t(new Error("The ArcGIS API for JavaScript is already loaded (".concat(a,")."))):d()?e(i):s(i,e,t)}else if(d())t(new Error("The ArcGIS API for JavaScript is already loaded."));else{var l=n.css;l&&c(!0===l?r:l,n.insertCssBefore),s(i=function(e){var t=document.createElement("script");return t.type="text/javascript",t.src=e,t.setAttribute("data-esri-loader","loading"),t}(o),(function(){i.setAttribute("data-esri-loader","loaded"),e(i)}),t),document.body.appendChild(i)}}))}function h(e){return new t.Promise((function(t,n){var r=window.require.on("error",n);window.require(e,(function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];r.remove(),t(e)}))}))}e.utils=t,e.loadModules=function(e,t){if(void 0===t&&(t={}),d())return h(e);var n=u(),r=n&&n.getAttribute("src");return!t.url&&r&&(t.url=r),p(t).then((function(){return h(e)}))},e.getScript=u,e.isLoaded=d,e.loadScript=p,e.setDefaultOptions=function(e){void 0===e&&(e={}),l=e},e.loadCss=c,Object.defineProperty(e,"__esModule",{value:!0})}(t)}));const c=async(e,t)=>(await a.loadModules(e,t)).map((e=>e.__esModule&&e.default?e.default:e))},62727:(e,t,n)=>{n.d(t,{a:()=>a,g:()=>s});var r=n(18869),o=n(81068),i=n(28384);function a(e){var t,n,i;const a=null!==(t=(0,r.c)(e,"[lang]"))&&void 0!==t?t:null===(i=null===(n=e.shadowRoot)||void 0===n?void 0:n.ownerDocument)||void 0===i?void 0:i.documentElement,c=((null==a?void 0:a.lang)||(null===navigator||void 0===navigator?void 0:navigator.language)||"en").toLowerCase();return o.l.has(c)?o.l.get(c):o.l.has(c.slice(0,2))?o.l.get(c.slice(0,2)):"en"}const c={};function l(e,t){const n=`${e}${t}`;return c[n]||(c[n]=function(e,t){return new Promise(((n,r)=>{fetch((0,i.a)(`../arcgis-app-assets/i18n/${e}.i18n.${t}.json`)).then((e=>{e.ok?n(e.json()):r()}),(()=>r()))}))}(e,t)),c[n]}async function s(e,t){const n=t||e.tagName.toLowerCase(),i=a(e),c=function(e){var t,n,i;const a=null!==(t=(0,r.c)(e,"[lang]"))&&void 0!==t?t:null===(i=null===(n=e.shadowRoot)||void 0===n?void 0:n.ownerDocument)||void 0===i?void 0:i.documentElement,c=((null==a?void 0:a.lang)||(null===navigator||void 0===navigator?void 0:navigator.language)||"en").toLowerCase();return o.l.has(c)?o.l.get(c):o.l.has(c.slice(0,2))?c:"en"}(e);let s;try{s=await l(n,i)}catch(e){console.warn(`no locale for ${n} (${i}) loading default locale en.`),s=await l(n,"en")}return[s,i,c]}}}]);