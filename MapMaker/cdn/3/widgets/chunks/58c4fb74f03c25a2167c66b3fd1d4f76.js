/*! For license information please see 58c4fb74f03c25a2167c66b3fd1d4f76.js.LICENSE.txt */
"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[7877],{7877:(t,e,n)=>{n.r(e),n.d(e,{arcgis_group_thumbnail:()=>u});var i=n(28384),o=n(41171),r=n(18869);n(66716),n(76134),n(27010),n(62381);const l=/^#[0-9A-F]{3}$/i,s=/^#[0-9A-F]{6}$/i;function a(t){return function(t){return t&&4===t.length&&l.test(t)}(t)||function(t){return t&&7===t.length&&s.test(t)}(t)}const u=class{constructor(t){(0,i.r)(this,t),this.openTooltip=()=>{this.tooltipElement&&(this.tooltipElement.open=!0)},this.closeTooltip=()=>{this.tooltipElement&&(this.tooltipElement.open=!1)},this.group=void 0,this.portal=void 0,this.tooltip=void 0,this.scale="m",this.error=!1}render(){const{group:t,error:e,openTooltip:n,closeTooltip:o}=this;if((null==t?void 0:t.thumbnail)&&!e)return(0,i.h)(i.H,null,(0,i.h)("img",{alt:"",class:"thumbnail",onError:()=>this.error=!0,ref:t=>this.thumbnailElement=t,src:this.getThumbnailURI(),onMouseLeave:o,onMouseEnter:n,onFocusout:o,onFocusin:n}),this.renderTooltip());const r=this.generateInitials(),l=this.generateFillColor();return(0,i.h)(i.H,null,(0,i.h)("span",{class:"background",ref:t=>this.thumbnailElement=t,style:{backgroundColor:l},onMouseLeave:o,onMouseEnter:n,onFocusout:o,onFocusin:n},r?(0,i.h)("span",{"aria-hidden":"true",class:"initials"},r):(0,i.h)("calcite-icon",{class:"icon",icon:"users",scale:"xl"===this.scale?"l":this.scale})),this.renderTooltip())}renderTooltip(){return this.tooltip?(0,i.h)("calcite-tooltip",{ref:t=>{t.referenceElement=this.thumbnailElement,this.tooltipElement=t},closeOnClick:!0,label:this.group.title,placement:"bottom-start",offsetDistance:6,offsetSkidding:0,class:"tooltip"},(0,i.h)("p",{class:"tooltip-text"},this.group.title)):null}getThumbnailURI(){const{group:t}=this;if(!(null==t?void 0:t.thumbnail))return null;if(t.thumbnail.startsWith("http"))return t.thumbnail;const e=(0,o.h)(this.portal),n=e?`?token=${e}`:"";return`${(0,o.g)(this.portal)}community/groups/${t.id}/info/${t.thumbnail}${n}`}generateFillColor(){const{group:{title:t,id:e},el:n}=this,i=(0,r.g)(n),o=`#${null==e?void 0:e.substr(e.length-6)}`,l=e&&a(o)?o:function(t){let e=0;for(let n=0;n<t.length;n++)e=t.charCodeAt(n)+((e<<5)-e);let n="#";for(let t=0;t<3;t++)n+=("00"+(e>>8*t&255).toString(16)).substr(-2);return n}(t);return(e||t)&&a(l)?`hsl(${function(t){return function(t){let{r:e,g:n,b:i}=t;e/=255,n/=255,i/=255;const o=Math.max(e,n,i),r=Math.min(e,n,i),l=o-r;if(o===r)return 0;let s=(o+r)/2;switch(o){case e:s=(n-i)/l+(n<i?6:0);break;case n:s=(i-e)/l+2;break;case i:s=(e-n)/l+4}return Math.round(60*s)}(function(t){if(!a(t))return null;if(3===(t=t.replace("#","")).length){const[e,n,i]=t.split("");return{r:parseInt(`${e}${e}`,16),g:parseInt(`${n}${n}`,16),b:parseInt(`${i}${i}`,16)}}return{r:parseInt(t.slice(0,2),16),g:parseInt(t.slice(2,4),16),b:parseInt(t.slice(4,6),16)}}(t))}(l)}, 60%, ${"dark"===i?20:90}%)`:"var(--calcite-ui-foreground-2)"}generateInitials(){var t,e;const n=null===(e=null===(t=this.group)||void 0===t?void 0:t.title)||void 0===e?void 0:e.trim().charAt(0);return!!(null==n?void 0:n.match(/^\w+$/))&&n}get el(){return(0,i.d)(this)}};u.style=":host{display:inline-block}:host([scale=s]){font-size:0.625rem;height:1.5rem;width:1.5rem}:host([scale=m]){font-size:0.75rem;height:2rem;width:2rem}:host([scale=l]){font-size:1rem;height:2.75rem;width:2.75rem}:host([scale=xl]){font-size:1.25rem;height:4rem;width:4rem}.icon{display:flex;color:var(--calcite-ui-text-3)}.background{display:flex;height:100%;width:100%;align-items:center;justify-content:center;position:relative}.initials{color:var(--calcite-ui-text-2);font-weight:700;text-transform:uppercase;position:absolute}.thumbnail{height:100%;width:100%}.tooltip-text{margin:0;padding:0;font-size:0.75rem;color:var(--calcite-ui-text-2)}calcite-tooltip{pointer-events:none}"},76134:(t,e,n)=>{n.d(e,{c:()=>o,o:()=>r});const i=(0,n(27010).c)({portal:null,user:null,api:4,scale:"m"}),o=i.state,r=i.onChange},41171:(t,e,n)=>{n.d(e,{a:()=>x,b:()=>C,c:()=>b,d:()=>k,e:()=>u,f:()=>m,g:()=>w,h:()=>s,i:()=>j,j:()=>g,k:()=>y,l:()=>I,p:()=>h,q:()=>E,r:()=>c});var i=n(66716),o=n(76134),r=n(62381),l=n(26426);function s(t){var e,n,i,r;return null!=t||(t=null===o.c||void 0===o.c?void 0:o.c.portal),(null===(e=null==t?void 0:t.credential)||void 0===e?void 0:e.token)||(null==t?void 0:t.token)||(null===(i=null===(n=null==t?void 0:t.user)||void 0===n?void 0:n.credential)||void 0===i?void 0:i.token)||(null===(r=null==t?void 0:t.portalUser)||void 0===r?void 0:r.token)||""}function a(t){var e;const{config:n}=o.c;return"https:"===window.location.protocol||!0===(null===(e=null==n?void 0:n.self)||void 0===e?void 0:e.allSSL)?t.replace("http:","https:"):t}async function u(t,e,n={},r){const[l]=await(0,i.l)(["esri/request"]),{api:u}=o.c;t.includes("f=")||e.append("f","json");const c=s();return c&&!e.has("token")&&e.append("token",c),new Promise(((i,o)=>{if(3===u){const s={url:!1===n.addSSL?t:a(t),form:e,timeout:n.timeout||0},u="post"===r?Object.assign({usePost:!0},n):n;l(s,u).then(i,o)}else l(t,Object.assign(Object.assign({body:e},n),{timeout:n.timeout||0,method:r||"auto"})).then((t=>{i(t.data)})).catch((t=>o(t)))}))}async function c(t,e={},n={},r,l){const[s]=await(0,i.l)(["esri/request"]),{api:u,portal:c}=o.c,d=Object.assign({},e);if(t.includes("f=")||!0===(null==l?void 0:l.excludeJson)||(d.f="json"),!1!==n.addTokenManually){const t=await k(c,u);d.token=t}const h=!1===n.addSSL?t:a(t);if(3===u)return s(Object.assign({url:h,content:d,timeout:n.timeout||0,withCredentials:n.withCredentials},null==l?void 0:l.v3Request),"post"===r?Object.assign({usePost:!0},n):n);{const t=Object.assign(Object.assign(Object.assign({query:d,method:r||"auto"},n),{timeout:n.timeout||0}),(null==n?void 0:n.disableIdentityLookup)?{authMode:"anonymous"}:{});return(await s(h,t)).data}}const d=[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,15,15,30,30,30,30,30,30,30,30,30,30,120],h=async(t,e,n)=>{var i,o;const r=null!==(i=null==e?void 0:e.pendingStatuses)&&void 0!==i?i:["processing","partial","Pending","InProgress","EXECUTING"],s=null!==(o=null==e?void 0:e.successStatuses)&&void 0!==o?o:["completed","Completed","COMPLETED"];let a=0;const u=async()=>{const i=await c(t,null==e?void 0:e.requestParams,{},n),o=i.status||i.jobStatus;if(r.includes(o))return await(0,l.t)((h=a++,1e3*d[h>-1&&h<d.length-1?h:d.length-1])),u();if(s.includes(o))return i;throw i;var h};try{return u()}catch(t){throw console.error(t),t}},p={},v={},f={};async function m(t,e,n,i){var o,r,l,s;const a=null===(r=null===(o=f[e])||void 0===o?void 0:o[n])||void 0===r?void 0:r.expireAt,u=!!a&&(new Date).getTime()>a;if((null===(l=p[e])||void 0===l?void 0:l[n])&&!u)return p[e][n];v[e]||(v[e]={}),v[e][n]&&!u||(v[e][n]=t());const c=await v[e][n];if(p[e]||(p[e]={}),f[e]||(f[e]={}),p[e][n]=c,i){const{expireAfter:t,getExpireAfterFromResult:o}=i,r=o||t?(new Date).getTime()+(null!==(s=null==o?void 0:o(c))&&void 0!==s?s:t):null;f[e][n]=Object.assign(Object.assign({},f[e][n]),{expireAt:r})}return c}function g(t,e){var n;return null===(n=null==p?void 0:p[t])||void 0===n?void 0:n[e]}const b=(t,e)=>{var n,i;e?(null===(n=p[t])||void 0===n||delete n[e],null===(i=v[t])||void 0===i||delete i[e]):(delete p[t],delete v[t])};function w(t){var e;const{portal:n,config:i}=o.c||{};return null!==(e=(0,r.d)(null==i?void 0:i.restBaseUrl))&&void 0!==e?e:y(t||n)}function y(t){var e;return(0,r.d)(null!==(e=t.restUrl)&&void 0!==e?e:t.portalUrl)}const k=async(t,e)=>{var n,i;if(!(null==t?void 0:t.isPortal)||!t.isWebTierAuth)return s(t);const{token:r}=await m((()=>$(t,null!=e?e:null===o.c||void 0===o.c?void 0:o.c.api)),"platformSelf",null!==(i=null===(n=t.user)||void 0===n?void 0:n.id)&&void 0!==i?i:t.id,{getExpireAfterFromResult:t=>t.expires_in});return r},$=async(t,e)=>{const n=await(async(t,e)=>{var n,o,r,l;const s=3===e,[a]=await i.e.loadModules([s?"esri/IdentityManager":"esri/identity/IdentityManager"]),u=await m((()=>a.getCredential(w(t),{oAuthPopupConfirmation:!1})),"credential",null===(n=t.user)||void 0===n?void 0:n.id);return null!==(l=s?null===(o=u._oAuthCred)||void 0===o?void 0:o.appId:null===(r=u.oAuthState)||void 0===r?void 0:r.appId)&&void 0!==l?l:"arcgisonline"})(t,e),o={"X-Esri-Auth-Client-Id":n,"X-Esri-Auth-Redirect-Uri":window.location.href.replace(/#.*$/,"")};return c(`${w(t)}/oauth2/platformSelf`,{},{disableIdentityLookup:!0,headers:4===e?o:void 0,addTokenManually:!1,withCredentials:!0},"post",{v3Request:{headers:o}})};async function E(t={},e){return c(`${w(e)}/community/groups`,t)}const I=async(t,e)=>{var n;if(!t)return[];const i=`${(0,r.d)(null!==(n=e.restUrl)&&void 0!==n?n:e.portalUrl)}portals/self/servers`,o=await c(i);return null==o?void 0:o.servers},x=t=>C(y(t)),C=t=>{var e;const n=`${(0,r.d)(null!==(e=(0,r.l)(t))&&void 0!==e?e:t)}info`;return m((()=>c(n,{},{addTokenManually:!1})),"portalInfo",n)},j=async(t,e)=>{if(t.isBackedBySDS)return{result:!0};const n=(0,r.e)(e)||(0,r.f)(e)||(0,r.g)(e)||(0,r.h)(e)||(0,r.j)(e);if(t.isPortal&&e&&(n||(0,r.k)(e)))try{const n=await S(e,t);return{result:!!(null==n?void 0:n[0])}}catch(t){return console.error(t),{error:{code:"unhandledError",message:JSON.stringify(t)},result:!1}}return{result:!0}},S=async(t,e)=>{const n=await T(t,e);if(!n)return null;const i=`${n.adminUrl}/admin/data/findItems`;return(await c(i,{managed:!0})).items.filter((t=>{var e;return"arcgis data store"===(null===(e=t.provider)||void 0===e?void 0:e.toLowerCase())}))},T=async(t,e)=>{var n;return(null!==(n=await I(t,e))&&void 0!==n?n:[]).filter((t=>t.isHosted))[0]}}}]);