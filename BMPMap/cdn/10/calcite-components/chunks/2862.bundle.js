/*! For license information please see 2862.bundle.js.LICENSE.txt */
(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[2862,1993,9731,842,7166,5283],{1993:e=>{function t(e){return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}t.keys=()=>[],t.resolve=t,t.id=1993,e.exports=t},4270:(e,t,i)=>{"use strict";i.r(t),i.d(t,{CalciteColorPickerSwatch:()=>l,defineCustomElement:()=>c});var r=i(798);const l=r.C,c=r.d},798:(e,t,i)=>{"use strict";i.d(t,{C:()=>a,d:()=>d});var r=i(7210),l=i(5934),c=i(9145),n=i(8845);const s="checker",o=4,h=8,a=(0,r.GH)(class extends r.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.active=!1,this.color=void 0,this.scale="m"}handleColorChange(e){this.internalColor=e?(0,l.c)(e):null}componentWillLoad(){this.handleColorChange(this.color)}render(){const e={swatch:!0,"swatch--no-color":!this.internalColor};return(0,r.h)("svg",{class:e,xmlns:"http://www.w3.org/2000/svg"},this.renderSwatch())}renderSwatch(){const{active:e,el:t,internalColor:i}=this,l=e?"100%":"0",a={height:"100%",rx:l,stroke:"light"===(0,c.r)(t)?"rgba(0, 0, 0, 0.3)":"rgba(255, 255, 255, 0.15)","stroke-width":"2",width:"100%"};if(!i)return(0,r.h)(r.HY,null,(0,r.h)("clipPath",{id:"shape"},(0,r.h)("rect",{height:"100%",rx:l,width:"100%"})),(0,r.h)("rect",{"clip-path":`inset(0 round ${l})`,rx:l,...a}),(0,r.h)("line",{"clip-path":"url(#shape)","stroke-width":"3",x1:"100%",x2:"0",y1:"0",y2:"100%"}));const d=i.alpha(),u=(0,n.h)(i),p=(0,n.h)(i,d<1);return(0,r.h)(r.HY,null,(0,r.h)("title",null,p),(0,r.h)("defs",null,(0,r.h)("pattern",{height:h,id:"checker",patternUnits:"userSpaceOnUse",width:h,x:"0",y:"0"},(0,r.h)("rect",{class:s,height:o,width:o,x:"0",y:"0"}),(0,r.h)("rect",{class:s,height:o,width:o,x:o,y:o}))),(0,r.h)("rect",{fill:"url(#checker)",height:"100%",rx:l,width:"100%"}),(0,r.h)("rect",{fill:u,style:{"clip-path":d<1?"polygon(100% 0, 0 0, 0 100%)":`inset(0 round ${l})`},...a}),d<1?(0,r.h)("rect",{fill:p,key:"opacity-fill",style:{"clip-path":"polygon(100% 0, 100% 100%, 0 100%)"},...a}):null)}get el(){return this}static get watchers(){return{color:["handleColorChange"]}}static get style(){return":host{position:relative;display:inline-flex}:host([scale=s]){block-size:1.25rem;inline-size:1.25rem}:host([scale=m]){block-size:1.5rem;inline-size:1.5rem}:host([scale=l]){block-size:2rem;inline-size:2rem}.swatch{overflow:hidden;block-size:inherit;inline-size:inherit}.swatch rect{transition-property:all;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.swatch--no-color rect{fill:var(--calcite-ui-foreground-1)}.swatch--no-color line{stroke:var(--calcite-ui-danger)}.checker{fill:#cacaca}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-color-picker-swatch",{active:[516],color:[1],scale:[513]}]);function d(){"undefined"!=typeof customElements&&["calcite-color-picker-swatch"].forEach((e=>{"calcite-color-picker-swatch"===e&&(customElements.get(e)||customElements.define(e,a))}))}d()}}]);