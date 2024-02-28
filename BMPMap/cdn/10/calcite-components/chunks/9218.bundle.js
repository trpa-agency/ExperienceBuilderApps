/*! For license information please see 9218.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[9218],{5611:(e,t,i)=>{function n(){const e=navigator.userAgentData;return e?.brands?e.brands.map((({brand:e,version:t})=>`${e}/${t}`)).join(" "):navigator.userAgent}i.d(t,{g:()=>n})},9218:(e,t,i)=>{i.r(t),i.d(t,{calcite_inline_editable:()=>h});var n=i(8641),s=i(2322),a=i(9336),l=i(7039),c=i(3844),o=i(4879),d=i(5527),r=i(339);i(8274);const h=class{constructor(e){(0,n.r)(this,e),this.calciteInlineEditableEditCancel=(0,n.c)(this,"calciteInlineEditableEditCancel",6),this.calciteInlineEditableEditConfirm=(0,n.c)(this,"calciteInlineEditableEditConfirm",6),this.calciteInternalInlineEditableEnableEditingChange=(0,n.c)(this,"calciteInternalInlineEditableEnableEditingChange",6),this.mutationObserver=(0,d.c)("mutation",(()=>this.mutationObserverCallback())),this.enableEditing=()=>{this.valuePriorToEditing=this.inputElement?.value,this.editingEnabled=!0,this.inputElement?.setFocus(),this.calciteInternalInlineEditableEnableEditingChange.emit()},this.disableEditing=()=>{this.editingEnabled=!1},this.cancelEditing=()=>{this.inputElement&&(this.inputElement.value=this.valuePriorToEditing),this.disableEditing(),this.enableEditingButton.setFocus(),!this.editingEnabled&&this.shouldEmitCancel&&this.calciteInlineEditableEditCancel.emit()},this.escapeKeyHandler=async e=>{e.defaultPrevented||("Escape"===e.key&&(e.preventDefault(),this.cancelEditing()),"Tab"===e.key&&this.shouldShowControls&&(e.shiftKey||e.target!==this.inputElement||(e.preventDefault(),this.cancelEditingButton.setFocus()),e.shiftKey&&e.target===this.cancelEditingButton&&(e.preventDefault(),this.inputElement?.setFocus())))},this.cancelEditingHandler=async e=>{e.preventDefault(),this.cancelEditing()},this.enableEditingHandler=async e=>{this.disabled||e.target===this.cancelEditingButton||e.target===this.confirmEditingButton||(e.preventDefault(),this.editingEnabled||this.enableEditing())},this.confirmChangesHandler=async e=>{e.preventDefault(),this.calciteInlineEditableEditConfirm.emit();try{this.afterConfirm&&(this.loading=!0,await this.afterConfirm(),this.disableEditing(),this.enableEditingButton.setFocus())}catch(e){}finally{this.loading=!1}},this.disabled=!1,this.editingEnabled=!1,this.loading=!1,this.controls=!1,this.scale=void 0,this.afterConfirm=void 0,this.messages=void 0,this.messageOverrides=void 0,this.defaultMessages=void 0,this.effectiveLocale=void 0}disabledWatcher(e){this.inputElement&&(this.inputElement.disabled=e)}editingEnabledWatcher(e,t){this.inputElement&&(this.inputElement.editingEnabled=e),!e&&t&&(this.shouldEmitCancel=!0)}onMessagesChange(){}connectedCallback(){(0,a.c)(this),(0,l.c)(this),(0,o.c)(this),(0,r.c)(this),this.mutationObserver?.observe(this.el,{childList:!0}),this.mutationObserverCallback()}async componentWillLoad(){(0,c.s)(this),await(0,r.s)(this)}componentDidLoad(){(0,c.a)(this)}disconnectedCallback(){(0,a.d)(this),(0,l.d)(this),(0,o.d)(this),(0,r.d)(this),this.mutationObserver?.disconnect()}componentDidRender(){(0,a.u)(this)}render(){return(0,n.h)("div",{class:"wrapper",onClick:this.enableEditingHandler,onKeyDown:this.escapeKeyHandler},(0,n.h)("div",{class:"input-wrapper"},(0,n.h)("slot",null)),(0,n.h)("div",{class:"controls-wrapper"},(0,n.h)("calcite-button",{appearance:"transparent",class:"enable-editing-button",disabled:this.disabled,iconStart:"pencil",kind:"neutral",label:this.messages.enableEditing,onClick:this.enableEditingHandler,scale:this.scale,style:{opacity:this.editingEnabled?"0":"1",width:this.editingEnabled?"0":"inherit"},type:"button",ref:e=>this.enableEditingButton=e}),this.shouldShowControls&&[(0,n.h)("div",{class:"cancel-editing-button-wrapper"},(0,n.h)("calcite-button",{appearance:"transparent",class:"cancel-editing-button",disabled:this.disabled,iconStart:"x",kind:"neutral",label:this.messages.cancelEditing,onClick:this.cancelEditingHandler,scale:this.scale,type:"button",ref:e=>this.cancelEditingButton=e})),(0,n.h)("calcite-button",{appearance:"solid",class:"confirm-changes-button",disabled:this.disabled,iconStart:"check",kind:"brand",label:this.messages.confirmChanges,loading:this.loading,onClick:this.confirmChangesHandler,scale:this.scale,type:"button",ref:e=>this.confirmEditingButton=e})]))}blurHandler(){this.controls||this.disableEditing()}effectiveLocaleChange(){(0,r.u)(this,this.effectiveLocale)}async setFocus(){await(0,c.c)(this),this.el?.focus()}mutationObserverCallback(){this.updateSlottedInput(),this.scale=this.scale||this.inputElement?.scale}onLabelClick(){this.setFocus()}updateSlottedInput(){const e=(0,s.e)(this.el,{matches:"calcite-input"});this.inputElement=e,e&&(this.inputElement.disabled=this.disabled,this.inputElement.label=this.inputElement.label||(0,l.g)(this))}get shouldShowControls(){return this.editingEnabled&&this.controls}static get delegatesFocus(){return!0}static get assetsDirs(){return["assets"]}get el(){return(0,n.a)(this)}static get watchers(){return{disabled:["disabledWatcher"],editingEnabled:["editingEnabledWatcher"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}};h.style=":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:block}:host([scale=s]) .controls-wrapper{block-size:1.5rem}:host([scale=m]) .controls-wrapper{block-size:2rem}:host([scale=l]) .controls-wrapper{block-size:2.75rem}:host(:not([editing-enabled]):not([disabled])) .wrapper:hover{background-color:var(--calcite-ui-foreground-2)}.wrapper{box-sizing:border-box;display:flex;justify-content:space-between;background-color:var(--calcite-ui-foreground-1);transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.wrapper .input-wrapper{flex:1 1 0%}.controls-wrapper{display:flex}:host([disabled]) .cancel-editing-button-wrapper{border-color:var(--calcite-ui-border-2)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host([hidden]){display:none}[hidden]{display:none}"},9336:(e,t,i)=>{i.d(t,{c:()=>E,d:()=>f,u:()=>h});var n=i(5611);const s=/firefox/i.test((0,n.g)()),a=s?new WeakMap:null;function l(){const{disabled:e}=this;e||HTMLElement.prototype.click.call(this)}function c(e){const t=e.target;if(s&&!a.get(t))return;const{disabled:i}=t;i&&e.preventDefault()}const o=["mousedown","mouseup","click"];function d(e){if(s&&!a.get(e.target))return;const{disabled:t}=e.target;t&&(e.stopImmediatePropagation(),e.preventDefault())}const r={capture:!0};function h(e,t=!1){if(e.disabled)return e.el.setAttribute("tabindex","-1"),e.el.setAttribute("aria-disabled","true"),e.el.contains(document.activeElement)&&document.activeElement.blur(),void u(e);g(e),"function"==typeof t?e.el.setAttribute("tabindex",t.call(e)?"0":"-1"):!0===t?e.el.setAttribute("tabindex","0"):!1===t&&e.el.removeAttribute("tabindex"),e.el.removeAttribute("aria-disabled")}function u(e){var t;e.el.click=l,(t=s?b(e):e.el)&&(t.addEventListener("pointerdown",c,r),o.forEach((e=>t.addEventListener(e,d,r))))}function b(e){return a.get(e.el)}function g(e){var t;delete e.el.click,(t=s?b(e):e.el)&&(t.removeEventListener("pointerdown",c,r),o.forEach((e=>t.removeEventListener(e,d,r))))}function E(e){if(!e.disabled||!s)return;const t=e.el.parentElement||e.el;a.set(e.el,t),u(e)}function f(e){s&&(a.delete(e.el),g(e))}},7039:(e,t,i)=>{i.d(t,{a:()=>l,c:()=>g,d:()=>E,g:()=>p,l:()=>a});var n=i(2322);const s="calciteInternalLabelClick",a="calciteInternalLabelConnected",l="calciteInternalLabelDisconnected",c="calcite-label",o=new WeakMap,d=new WeakMap,r=new WeakMap,h=new WeakMap,u=new WeakSet,b=e=>{const{id:t}=e,i=t&&(0,n.q)(e,{selector:`${c}[for="${t}"]`});if(i)return i;const s=(0,n.c)(e,c);return!s||function(e,t){let i;const n="custom-element-ancestor-check",s=n=>{n.stopImmediatePropagation();const s=n.composedPath();i=s.slice(s.indexOf(t),s.indexOf(e))};e.addEventListener(n,s,{once:!0}),t.dispatchEvent(new CustomEvent(n,{composed:!0,bubbles:!0})),e.removeEventListener(n,s);return i.filter((i=>i!==t&&i!==e)).filter((e=>e.tagName?.includes("-"))).length>0}(s,e)?null:s};function g(e){const t=b(e.el);if(d.has(t)&&t===e.labelEl||!t&&u.has(e))return;const i=w.bind(e);if(t){e.labelEl=t;const n=o.get(t)||[];n.push(e),o.set(t,n.sort(f)),d.has(e.labelEl)||(d.set(e.labelEl,m),e.labelEl.addEventListener(s,m)),u.delete(e),document.removeEventListener(a,r.get(e)),h.set(e,i),document.addEventListener(l,i)}else u.has(e)||(i(),document.removeEventListener(l,h.get(e)))}function E(e){if(u.delete(e),document.removeEventListener(a,r.get(e)),document.removeEventListener(l,h.get(e)),r.delete(e),h.delete(e),!e.labelEl)return;const t=o.get(e.labelEl);1===t.length&&(e.labelEl.removeEventListener(s,d.get(e.labelEl)),d.delete(e.labelEl)),o.set(e.labelEl,t.filter((t=>t!==e)).sort(f)),e.labelEl=null}function f(e,t){return(0,n.k)(e.el,t.el)?-1:1}function p(e){return e.label||e.labelEl?.textContent?.trim()||""}function m(e){const t=e.detail.sourceEvent.target,i=o.get(this),n=i.find((e=>e.el===t));if(i.includes(n))return;const s=i[0];s.disabled||s.onLabelClick(e)}function v(){u.has(this)&&g(this)}function w(){u.add(this);const e=r.get(this)||v.bind(this);r.set(this,e),document.addEventListener(a,e)}},3844:(e,t,i)=>{i.d(t,{a:()=>c,b:()=>o,c:()=>d,s:()=>l});var n=i(8641);const s=new WeakMap,a=new WeakMap;function l(e){a.set(e,new Promise((t=>s.set(e,t))))}function c(e){s.get(e)()}function o(e){return a.get(e)}async function d(e){return await o(e),(0,n.f)(e),new Promise((e=>requestAnimationFrame((()=>e()))))}},339:(e,t,i)=>{i.d(t,{c:()=>h,d:()=>u,s:()=>o,u:()=>r});var n=i(8641),s=i(4879);const a={};function l(){throw new Error("could not fetch component message bundle")}function c(e){e.messages={...e.defaultMessages,...e.messageOverrides}}async function o(e){e.defaultMessages=await d(e,e.effectiveLocale),c(e)}async function d(e,t){const{el:i}=e,c=i.tagName.toLowerCase().replace("calcite-","");return async function(e,t){const i=`${t}_${e}`;return a[i]||(a[i]=fetch((0,n.g)(`./assets/${t}/t9n/messages_${e}.json`)).then((e=>(e.ok||l(),e.json()))).catch((()=>l()))),a[i]}((0,s.g)(t,"t9n"),c)}async function r(e,t){e.defaultMessages=await d(e,t),c(e)}function h(e){e.onMessagesChange=b}function u(e){e.onMessagesChange=void 0}function b(){c(this)}}}]);