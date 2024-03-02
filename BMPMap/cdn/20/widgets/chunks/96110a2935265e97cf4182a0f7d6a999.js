/*! For license information please see 96110a2935265e97cf4182a0f7d6a999.js.LICENSE.txt */
"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[44095],{44095:(e,t,n)=>{n.r(t),n.d(t,{arcgis_onboarding_whats_new:()=>a});var r=n(28384),o=n(62727);n(18869),n(81068),n(66716);const a=class{constructor(e){(0,r.r)(this,e),this.helpBase=void 0,this.helpMap=void 0,this.portal=void 0,this.user=void 0}async componentWillLoad(){const e=await(0,o.g)(this.el);this.i18n=e[0]}replaceLink(e,t){return e.replace("${linkStart}",`<calcite-link href="${t}" target="_blank">`).replace("${linkEnd}","</calcite-link>")}getWhatsNewLink(){const{helpBase:e,helpMap:t}=this;return`${e}${t[120004140]}`}render(){const{i18n:e,helpMap:t}=this;if(!t)return null;const n=this.getWhatsNewLink();return(0,r.h)(r.H,null,(0,r.h)("arcgis-onboarding",{portal:this.portal,user:this.user,features:[{id:"fall_2023_general",title:e.general.title,expiration:new Date("November 8, 2023"),icon:"arcgis-online",description:e.general.description,learnMore:n,learnMoreText:e.general.learnMore}]}))}get el(){return(0,r.d)(this)}}},81068:(e,t,n)=>{n.d(t,{C:()=>l,a:()=>u,f:()=>s,g:()=>i,l:()=>a});var r=n(66716),o=n(18869);const a=new Map([["ar","ar"],["bg","bg"],["bs","bs"],["ca","ca"],["cs","cs"],["da","da"],["de","de"],["el","el"],["en","en"],["es","es"],["et","et"],["fi","fi"],["fr","fr"],["he","he"],["hr","hr"],["hu","hu"],["id","id"],["it","it"],["ja","ja"],["ko","ko"],["lt","lt"],["lv","lv"],["nb","nb"],["nl","nl"],["pl","pl"],["pt-br","pt-BR"],["pt-pt","pt-PT"],["ro","ro"],["ru","ru"],["sk","sk"],["sl","sl"],["sr","sr"],["sv","sv"],["th","th"],["tr","tr"],["uk","uk"],["vi","vi"],["zh-cn","zh-CN"],["zh-hk","zh-HK"],["zh-tw","zh-TW"]]);function i(e){return function(e,t,n){const r=(0,o.c)(e,"[dir]");return r?r.getAttribute("dir"):"ltr"}(e)}const l={rtl:"arcgis--rtl"};async function s(e,t){const{api:n,type:o,places:a}=t||{};if(4===n){const[t]=await(0,r.l)(["esri/intl"]),n=t.convertNumberFormatToIntlOptions({places:a,style:o,digitSeparator:!0});return t.formatNumber(e,Object.assign(Object.assign({},n),{style:o}))}const[i]=await(0,r.l)(["dojo/number"]);return i.format(e,{type:o,places:a,pattern:null==t?void 0:t.pattern})}const c={};function u(e){const t=document.documentElement.lang;return c[t]||(c[t]=new Intl.DateTimeFormat(document.documentElement.lang,{year:"numeric",month:"short",day:"numeric"})),c[t].format(e)}},66716:(e,t,n)=>{n.d(t,{a:()=>r,c:()=>a,e:()=>i,g:()=>o,l:()=>l});var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{};function o(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function a(e,t,n){return e(n={path:t,exports:{},require:function(e,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},n.exports),n.exports}var i=a((function(e,t){!function(e){var t={Promise:"undefined"!=typeof window?window.Promise:void 0},n="4.24",r="next";function o(e){if(e.toLowerCase()===r)return r;var t=e&&e.match(/^(\d)\.(\d+)/);return t&&{major:parseInt(t[1],10),minor:parseInt(t[2],10)}}function a(e){return void 0===e&&(e=n),"https://js.arcgis.com/".concat(e,"/")}function i(e){return!e||o(e)?function(e){void 0===e&&(e=n);var t=a(e),i=o(e);if(i!==r&&3===i.major){var l=i.minor<=10?"js/":"";return"".concat(t).concat(l,"esri/css/esri.css")}return"".concat(t,"esri/themes/light/main.css")}(e):e}function l(e,t){var n=i(e),r=function(e){return document.querySelector('link[href*="'.concat(e,'"]'))}(n);return r||function(e,t){if(t){var n=document.querySelector(t);n.parentNode.insertBefore(e,n)}else document.head.appendChild(e)}(r=function(e){var t=document.createElement("link");return t.rel="stylesheet",t.href=e,t}(n),t),r}var s={};function c(e,t,n){var r;n&&(r=function(e,t){var n=function(r){t(r.error||new Error("There was an error attempting to load ".concat(e.src))),e.removeEventListener("error",n,!1)};return e.addEventListener("error",n,!1),n}(e,n));var o=function(){t(e),e.removeEventListener("load",o,!1),r&&e.removeEventListener("error",r,!1)};e.addEventListener("load",o,!1)}function u(){return document.querySelector("script[data-esri-loader]")}function d(){var e=window.require;return e&&e.on}function f(e){void 0===e&&(e={});var n={};[s,e].forEach((function(e){for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t])}));var r=n.version,o=n.url||a(r);return new t.Promise((function(e,t){var a=u();if(a){var i=a.getAttribute("src");i!==o?t(new Error("The ArcGIS API for JavaScript is already loaded (".concat(i,")."))):d()?e(a):c(a,e,t)}else if(d())t(new Error("The ArcGIS API for JavaScript is already loaded."));else{var s=n.css;s&&l(!0===s?r:s,n.insertCssBefore),c(a=function(e){var t=document.createElement("script");return t.type="text/javascript",t.src=e,t.setAttribute("data-esri-loader","loading"),t}(o),(function(){a.setAttribute("data-esri-loader","loaded"),e(a)}),t),document.body.appendChild(a)}}))}function v(e){return new t.Promise((function(t,n){var r=window.require.on("error",n);window.require(e,(function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];r.remove(),t(e)}))}))}e.utils=t,e.loadModules=function(e,t){if(void 0===t&&(t={}),d())return v(e);var n=u(),r=n&&n.getAttribute("src");return!t.url&&r&&(t.url=r),f(t).then((function(){return v(e)}))},e.getScript=u,e.isLoaded=d,e.loadScript=f,e.setDefaultOptions=function(e){void 0===e&&(e={}),s=e},e.loadCss=l,Object.defineProperty(e,"__esModule",{value:!0})}(t)}));const l=async(e,t)=>(await i.loadModules(e,t)).map((e=>e.__esModule&&e.default?e.default:e))},62727:(e,t,n)=>{n.d(t,{a:()=>i,g:()=>c});var r=n(18869),o=n(81068),a=n(28384);function i(e){var t,n,a;const i=null!==(t=(0,r.c)(e,"[lang]"))&&void 0!==t?t:null===(a=null===(n=e.shadowRoot)||void 0===n?void 0:n.ownerDocument)||void 0===a?void 0:a.documentElement,l=((null==i?void 0:i.lang)||(null===navigator||void 0===navigator?void 0:navigator.language)||"en").toLowerCase();return o.l.has(l)?o.l.get(l):o.l.has(l.slice(0,2))?o.l.get(l.slice(0,2)):"en"}const l={};function s(e,t){const n=`${e}${t}`;return l[n]||(l[n]=function(e,t){return new Promise(((n,r)=>{fetch((0,a.a)(`../arcgis-app-assets/i18n/${e}.i18n.${t}.json`)).then((e=>{e.ok?n(e.json()):r()}),(()=>r()))}))}(e,t)),l[n]}async function c(e,t){const n=t||e.tagName.toLowerCase(),a=i(e),l=function(e){var t,n,a;const i=null!==(t=(0,r.c)(e,"[lang]"))&&void 0!==t?t:null===(a=null===(n=e.shadowRoot)||void 0===n?void 0:n.ownerDocument)||void 0===a?void 0:a.documentElement,l=((null==i?void 0:i.lang)||(null===navigator||void 0===navigator?void 0:navigator.language)||"en").toLowerCase();return o.l.has(l)?o.l.get(l):o.l.has(l.slice(0,2))?l:"en"}(e);let c;try{c=await s(n,a)}catch(e){console.warn(`no locale for ${n} (${a}) loading default locale en.`),c=await s(n,"en")}return[c,a,l]}}}]);