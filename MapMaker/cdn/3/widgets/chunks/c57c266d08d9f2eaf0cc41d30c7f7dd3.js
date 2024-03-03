/*! For license information please see c57c266d08d9f2eaf0cc41d30c7f7dd3.js.LICENSE.txt */
"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[68055],{68055:(e,t,i)=>{i.r(t),i.d(t,{arcgis_table:()=>m,arcgis_table_column_info:()=>u,arcgis_table_field_selection:()=>f});var l=i(28384),s=i(62727),o=i(66716),a=i(42762),n=i(34077),r=i(72637),c=i(81068);i(18869);const d="tooltip";function h(e){if(!(null==e?void 0:e.capabilities))return!1;const{capabilities:{data:{supportsAttachment:t},operations:{supportsQueryAttachments:i}}}=e;return t&&i}function p(e){return"esri.layers.support.Sublayer"===e.declaredClass?"sublayer":(0,n.c)(e)}const m=class{constructor(e){(0,l.r)(this,e),this.arcgisTableScaleChange=(0,l.c)(this,"arcgisTableScaleChange",7),this.arcgisTableDismissedChange=(0,l.c)(this,"arcgisTableDismissedChange",7),this.selectedOnlyMode=!1,this.recordsCount=0,this.selectedCount=0,this.panelKeyDownHandler=e=>{this.dismissible&&"Escape"===e.key&&!e.defaultPrevented&&(this.handleCloseClick(),e.preventDefault())},this.afterCreatePanel=async e=>{const{layer:t,view:i}=this.props;"imagery"===t.type?this.recordsCount=await(0,n.n)(t):"wfs"===t.type?this.recordsCount=await t.queryFeatureCount():this.recordsCount=await(0,n.g)(t,i),this.displayCount(),this.panelNode=e,this.watchTitleHandler=t.watch("title",(()=>{this.reRender=!this.reRender}))},this.afterCreateCloseButton=e=>{this.closeButtonNode=e},this.afterCreateTableNode=e=>{const{props:t,selectedFeatureIds:i,reactiveUtils:l,supportsSelection:s}=this,{layer:o,view:a}=t,{table:n}=this;if(n)return;const{tableTemplate:r}=this,c="feature"===o.type&&o.effectiveEditingEnabled;this.table=new this.FeatureTable({layer:o,view:a,tableTemplate:r,editingEnabled:c,attachmentsEnabled:"feature"===o.type&&h(o),highlightOnRowSelectEnabled:s,multiSortEnabled:!1,visibleElements:{header:!1,menu:!1},container:e}),s||(this.table.grid.visibleElements={selectionColumn:!1}),this.watchHndlSize=l.watch((()=>this.table.viewModel.size),(e=>{this.recordsCount=e,this.displayCount()})),s&&(this.table.highlightIds.on("change",(e=>{e.removed.forEach((e=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)})),e.added.forEach((e=>{-1===i.indexOf(e)&&i.push(e)})),this.selectedCount=i.length,this.displayCount(),this.lockRasters(),this.reRender=!this.reRender})),this.watchHndlActive=l.watch((()=>{var e,t;return null===(t=null===(e=a.popup)||void 0===e?void 0:e.viewModel)||void 0===t?void 0:t.active}),(()=>{const e=a.popup.selectedFeature;if(e&&a.popup.visible){this.table.highlightIds.removeAll();const e=a.popup.selectedFeature.getObjectId();this.table.highlightIds.push(e),i.push(e)}else e&&!a.popup.visible&&this.table.highlightIds.removeAll()})))},this.handleEditingClick=()=>{const{strings:e}=this;this.removeEditingPopover(),this.editingPopoverNode=document.createElement("arcgis-table-editing-popover"),this.editingPopoverNode.referenceElement=this.editingActionNode,this.editingPopoverNode.strings=e,this.editingPopoverNode.addEventListener("arcgisTableEditingPopoverClose",(e=>{e.stopPropagation(),this.removeEditingPopover(),setTimeout((()=>this.editingActionNode.setFocus()),200)})),this.editingPopoverNode.addEventListener("arcgisTableEditingPopoverDisconnected",(e=>{e.stopPropagation(),this.removeEditingPopover()})),document.body.appendChild(this.editingPopoverNode),this.editingPopoverNode.setOpen(!0),setTimeout((()=>this.editingPopoverNode.setFocus()),100)},this.handleVisibilityClick=e=>{if(this.fieldSelectionPopover)return;document.removeEventListener("click",this.clickHandler);const{layer:t}=this.props,{props:i,strings:l,currentLanguageIntl:s,tableTemplate:o,table:a,fieldSortOrder:n}=this,r=document.createElement("arcgis-table-field-selection");r.props=i,r.strings=l,r.currentLanguage=s,r.columnTemplates=o.columnTemplates,r.sortBy=n,r.attachmentsEnabled=!("feature"!==t.type||!h(t))&&a.attachmentsEnabled,r.popoverReferenceElement=e.target,r.addEventListener("columnTemplatesChange",(e=>{e.stopPropagation(),this.updateTable(new this.TableTemplate({columnTemplates:e.detail}))})),r.addEventListener("attachmentsChange",(e=>{e.stopPropagation(),this.table.attachmentsEnabled=e.detail})),r.addEventListener("fieldSortByChange",(e=>{e.stopPropagation(),this.fieldSortOrder=e.detail})),r.addEventListener("arcgisTableFieldSelectionClose",(()=>{this.closePopovers(),setTimeout((()=>this.settingsActionNode.setFocus()),200)})),document.body.appendChild(r),this.fieldSelectionPopover=r,setTimeout((()=>document.addEventListener("click",this.clickHandler)),200)},this.clickHandler=e=>{this.fieldSelectionPopover?(0,a.i)(e.target,"arcgis-table-field-selection")||(document.body.removeChild(this.fieldSelectionPopover),this.fieldSelectionPopover=null,document.removeEventListener("click",this.clickHandler)):document.removeEventListener("click",this.clickHandler)},this.handleHomeClick=()=>{const{view:e,initialViewpoint:t}=this;e.goTo(t)},this.handleZoomToClick=()=>{const{layer:e,view:t,selectedFeatureIds:i,Query:l}=this;if("imagery"===p(e)){const s=new l;s.outSpatialReference=t.spatialReference,s.objectIds=[...i],s.returnGeometry=!0,e.queryRasters(s).then((e=>{t.goTo(e.features)}))}else{const l=e.createQuery();l.outSpatialReference=t.spatialReference,l.objectIds=[...i],l.returnGeometry=!0,e.queryFeatures(l).then((e=>{t.goTo(e.features)}))}},this.handleClearClick=()=>{const{table:e,supportsSelection:t}=this,{viewModel:i,grid:l}=e;e.highlightIds.removeAll(),i.clearSelectionFilter(),this.selectedOnlyMode=!1,t&&(l.visibleElements={selectionColumn:!0})},this.handleShowSelectedClick=()=>{const{table:e}=this,{viewModel:t}=e;this.selectedOnlyMode=!0,t.filterBySelection(),this.reRender=!this.reRender},this.handleShowAllClick=()=>{const{table:e}=this,{viewModel:t}=e;this.selectedOnlyMode=!1,t.clearSelectionFilter(),this.reRender=!this.reRender},this.handleSelectVisibleClick=async()=>{const{layer:e,view:t,table:i}=this;i.highlightIds.removeAll();const l=t.get("extent"),s=await async function(e,t,i){const[l,s,a]=await(0,o.l)(["esri/geometry/Polygon","esri/geometry/Point","esri/rest/support/ImageIdentifyParameters"]),n=new l(e.spatialReference);n.addRing([[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]);const r=new s((e.xmax-e.xmin)/t.width,(e.ymax-e.ymin)/t.height,e.spatialReference),c=new a;c.geometry=n,c.returnGeometry=!0,c.pixelSize=r;const d=i.mosaicRule.clone();return i.definitionExpression&&(d.where=i.definitionExpression),c.mosaicRule=d,c}(l,t,e);this.selectFeaturesFromIdentify(s)},this.handleDisplaySelectedClick=()=>{this.lockRaster=!0,this.lockRasters()},this.handleDisplayAllClick=()=>{var e;const{MosaicRule:t}=this;this.lockRaster=!1;const i=this.layer,{sourceJSON:l}=i,s=l.allowedMosaicMethods.split(",").map((e=>e.trim().toLowerCase()));s.unshift(l.defaultMosaicMethod.toLowerCase());const o=null!==(e=s.find((e=>"lockraster"!==e&&"viewpoint"!==e&&("byattribute"!==e||!!l.sortField))))&&void 0!==e?e:"none";i.mosaicRule=t.fromJSON(Object.assign(Object.assign({},l),{defaultMosaicMethod:o})),i.visible=!0},this.handleRefreshClick=()=>{const{table:e}=this;e.refresh(),this.reRender=!this.reRender},this.handleExpandClick=()=>{const{scale:e}=this,t=e===a.s.SMALL?a.s.MEDIUM:a.s.SMALL;this.arcgisTableScaleChange.emit(t),this.scale=t,this.closePopovers()},this.handleCloseClick=()=>{this.arcgisTableDismissedChange.emit()},this.view=void 0,this.layer=void 0,this.initialViewpoint=void 0,this.scale=a.s.SMALL,this.dismissible=!1,this.tableTemplate=void 0,this.reRender=!1,this.lockRaster=!1,this.isBarExpanded=!1,this.selectedFeatureIds=[]}async setFocus(e){var t,i;"dismiss-button"===e||!e&&this.dismissible?null===(t=this.closeButtonNode)||void 0===t||t.setFocus():null===(i=this.settingsActionNode)||void 0===i||i.setFocus()}async componentWillLoad(){const[e,t,i]=await(0,s.g)(this.hostElement);this.strings=e,this.currentLanguage=t,this.currentLanguageIntl=i,await this.loadAllModules();const{view:l,layer:o}=this;if("sublayer"===p(o)){this.supportsSelection=!1;const e=o;await this.reactiveUtils.whenOnce((()=>!l.updating));const t=await e.createFeatureLayer();await t.load(),this.props={view:l,layer:t,mapImageSublayer:e}}else(0,n.c)(o)===r.s.imagery?(this.supportsSelection=!0,this.imagerySelection=!0,this.props={view:l,layer:o}):(this.supportsSelection=!("isTable"in o&&o.isTable),this.props={view:l,layer:o});await this.getFieldTemplates()}componentDidLoad(){requestAnimationFrame((()=>this.closeButtonNode.setFocus()))}disconnectedCallback(){var e,t,i;this.closePopovers();const{table:l}=this;null==l||l.destroy(),null===(e=this.watchTitleHandler)||void 0===e||e.remove(),null===(t=this.watchHndlSize)||void 0===t||t.remove(),null===(i=this.watchHndlActive)||void 0===i||i.remove()}render(){const{props:e}=this,{layer:t}=e;if(!t)return null;const i="rtl"===(0,c.g)(this.hostElement);return(0,l.h)(l.H,{class:"host"},(0,l.h)("div",{class:{content:!0,[c.C.rtl]:i}},this.renderActionBar(),(0,l.h)("calcite-panel",{heading:t.title,ref:this.afterCreatePanel,onKeyDown:this.panelKeyDownHandler},this.renderHeaderActions(),this.renderTable())))}renderActionBar(){const{supportsSelection:e,selectedFeatureIds:t,imagerySelection:i,isBarExpanded:s,strings:o}=this;return(0,l.h)("calcite-action-bar",{class:"action-bar",onCalciteActionBarToggle:e=>{this.isBarExpanded=e.target.expanded}},(0,l.h)("calcite-action-group",null,e&&(0,l.h)(l.F,null,(0,l.h)("calcite-action",{id:"zoom",icon:"zoom-to-object",text:o.zoomToSelection,disabled:!(null==t?void 0:t.length),onClick:this.handleZoomToClick}),!s&&(0,l.h)("calcite-tooltip",{referenceElement:"zoom",label:o.zoomToSelection},(0,l.h)("div",{class:d},o.zoomToSelection))),(0,l.h)("calcite-action",{id:"home",icon:"home",text:o.home,onClick:this.handleHomeClick}),!s&&(0,l.h)("calcite-tooltip",{referenceElement:"home",label:o.home},(0,l.h)("div",{class:d},o.home)),(0,l.h)("calcite-tooltip",{slot:"menu-tooltip",label:o.more},(0,l.h)("div",{class:d},o.more))),!i&&this.renderTableActions(),i&&e&&this.renderImageryTableActions(),(0,l.h)("calcite-tooltip",{slot:"expand-tooltip",label:o.expand},(0,l.h)("div",{class:d},o.expand)))}renderTableActions(){var e,t;const{selectedFeatureIds:i,supportsSelection:s,table:o,isBarExpanded:a,strings:n}=this,r=!!(null===(t=null===(e=null==o?void 0:o.viewModel)||void 0===e?void 0:e.activeFilters)||void 0===t?void 0:t.find((e=>"selection"===e.type)));return(0,l.h)("calcite-action-group",null,s&&(0,l.h)(l.F,null,(0,l.h)("calcite-action",{id:"erase",icon:"erase",text:n.clearSelection,disabled:!(null==i?void 0:i.length),onClick:this.handleClearClick}),!a&&(0,l.h)("calcite-tooltip",{referenceElement:"erase",label:n.clearSelection},(0,l.h)("div",{class:d},n.clearSelection))),s&&(0,l.h)(l.F,null,(0,l.h)("calcite-action",{id:"showSelected",icon:"selected-items-filter",text:n.showSelected,disabled:!(null==i?void 0:i.length),onClick:this.handleShowSelectedClick}),!a&&(0,l.h)("calcite-tooltip",{referenceElement:"showSelected",label:n.showSelected},(0,l.h)("div",{class:d},n.showSelected))),s&&(0,l.h)(l.F,null,(0,l.h)("calcite-action",{id:"showAll",icon:"list",text:n.showAll,disabled:!r,onClick:this.handleShowAllClick}),!a&&(0,l.h)("calcite-tooltip",{referenceElement:"showAll",label:n.showAll},(0,l.h)("div",{class:d},n.showAll))),(0,l.h)("calcite-action",{id:"refresh",icon:"refresh",text:n.refresh,onClick:this.handleRefreshClick}),!a&&(0,l.h)("calcite-tooltip",{referenceElement:"refresh",label:n.refresh},(0,l.h)("div",{class:d},n.refresh)),(0,l.h)("calcite-tooltip",{slot:"menu-tooltip",label:n.more},(0,l.h)("div",{class:d},n.more)))}renderImageryTableActions(){const{selectedFeatureIds:e,lockRaster:t,isBarExpanded:i,strings:s}=this;return(0,l.h)("calcite-action-group",null,(0,l.h)("calcite-action",{id:"erase",icon:"erase",text:s.clearSelection,disabled:!(null==e?void 0:e.length),onClick:this.handleClearClick}),!i&&(0,l.h)("calcite-tooltip",{referenceElement:"erase",label:s.clearSelection},(0,l.h)("div",{class:d},s.clearSelection)),(0,l.h)("calcite-action",{id:"visible",icon:"select-visible",text:s.selectVisible,onClick:this.handleSelectVisibleClick}),!i&&(0,l.h)("calcite-tooltip",{referenceElement:"visible",label:s.selectVisible},(0,l.h)("div",{class:d},s.selectVisible)),(0,l.h)("calcite-action",{id:"displayImage",icon:t?"unlock":"lock",text:t?s.displayAll:s.displaySelected,onClick:t?this.handleDisplayAllClick:this.handleDisplaySelectedClick}),!i&&(0,l.h)("calcite-tooltip",{referenceElement:"displayImage",label:t?s.displayAll:s.displaySelected},(0,l.h)("div",{class:d},t?s.displayAll:s.displaySelected)),(0,l.h)("calcite-tooltip",{slot:"menu-tooltip",label:s.more},(0,l.h)("div",{class:d},s.more)))}renderHeaderActions(){const{layer:e,scale:t,strings:i,dismissible:s}=this,o="type"in e&&"feature"===e.type&&e.effectiveEditingEnabled&&!e.editingEnabled;return(0,l.h)("div",{slot:"header-actions-end",class:"menu-actions"},o&&(0,l.h)("calcite-action",{id:"table-editing-action",text:i.layerEditing,scale:"m",onClick:this.handleEditingClick,ref:e=>this.editingActionNode=e},(0,l.h)("calcite-icon",{scale:"s",icon:"exclamation-mark-circle"})),(0,l.h)("calcite-action",{id:"table-settings-action",text:i.fieldVisibility,scale:"m",onClick:this.handleVisibilityClick,ref:e=>this.settingsActionNode=e},(0,l.h)("calcite-icon",{scale:"s",icon:"gear"})),t===a.s.SMALL?(0,l.h)("calcite-action",{key:"expand-table",text:i.expand,scale:"s",onClick:this.handleExpandClick},(0,l.h)("calcite-icon",{scale:"m",icon:"chevrons-up"})):(0,l.h)("calcite-action",{key:"expand",text:i.shrink,scale:"s",onClick:this.handleExpandClick},(0,l.h)("calcite-icon",{scale:"m",icon:"chevrons-down"})),s?(0,l.h)("calcite-action",{text:i.close,icon:"x",onClick:this.handleCloseClick,ref:this.afterCreateCloseButton}):null)}renderTable(){return(0,l.h)("div",{class:"table"},(0,l.h)("div",{ref:this.afterCreateTableNode}))}removeEditingPopover(){if(this.editingPopoverNode)try{document.body.removeChild(this.editingPopoverNode),this.editingPopoverNode=null}catch(e){}}handleHideClick(e){this.table.hideColumn(e),this.tableTemplate.columnTemplates.forEach((t=>{t.fieldName===e&&(t.visible=!1)}))}handleColumnInfo(e){const{currentLanguageIntl:t}=this;this.columnInfoPopover&&this.columnInfoPopover.parentNode.removeChild(this.columnInfoPopover);const{props:i,strings:l}=this,s=document.createElement("arcgis-table-column-info");s.props=i,s.strings=l,s.currentLanguage=t,s.fieldName=e,s.popoverReferenceElement=document.getElementById("table-settings-action"),s.addEventListener("arcgisTableColumnInfoClose",(()=>{this.closePopovers(),setTimeout((()=>this.closeButtonNode.setFocus()),100)})),document.body.appendChild(s),this.columnInfoPopover=s}closePopovers(){document.removeEventListener("click",this.clickHandler),this.fieldSelectionPopover&&(document.body.removeChild(this.fieldSelectionPopover),this.fieldSelectionPopover=null),this.columnInfoPopover&&(document.body.removeChild(this.columnInfoPopover),this.columnInfoPopover=null),this.removeEditingPopover()}async selectFeaturesFromIdentify(e){var t;const{layer:i,imageService:l}=this;let s=[];if(i.visible){const o=await l.identify(i.url,e);if((null===(t=null==o?void 0:o.catalogItems)||void 0===t?void 0:t.features)&&o.catalogItemVisibilities)for(let e=0;e<o.catalogItems.features.length;e++)o.catalogItemVisibilities[e]>0&&s.push(o.catalogItems.features[e]);const a=s.map((e=>new this.Graphic({attributes:e.attributes,geometry:e.geometry,sourceLayer:this.table.layer,layer:this.table.layer})));a.length?this.table.selectRows(a):this.table.highlightIds.removeAll()}}async lockRasters(){const{selectedFeatureIds:e,layer:t,imagerySelection:i,MosaicRule:l}=this;if(this.lockRaster)if(i&&e.length){const i=[...e],s=new l;s.method="lock-raster",s.lockRasterIds=i;const o=t.definitionExpression;o&&(s.where=o),t.mosaicRule=s,t.visible=!0}else t.visible=!1}updateTable(e){this.table.tableTemplate=e}async getFieldTemplates(){var e;const{layer:t}=this.props,{strings:i}=this,l=e=>({items:[{label:i.information,iconClass:"esri-icon-description",autoCloseMenu:!0,clickFunction:()=>{this.handleColumnInfo(e)}},{label:i.hideField,iconClass:"esri-icon-non-visible",autoCloseMenu:!0,clickFunction:()=>{this.handleHideClick(e)}}]});this.tableTemplate=new this.TableTemplate({columnTemplates:[]});const s=this.popupUtils.createFieldInfos({fields:t.fields,objectIdField:t.objectIdField}),o=new Map(s.map((e=>[e.fieldName,e])));let a;if(null===(e=t.popupTemplate)||void 0===e?void 0:e.fieldInfos){const{popupTemplate:e}=t;a=new Map(e.fieldInfos.map((e=>[e.fieldName,e]))),this.reactiveUtils.watch((()=>t.popupTemplate),(()=>{const{popupTemplate:e}=t;this.tableTemplate.columnTemplates.forEach((t=>{e.fieldInfos.forEach((e=>{t.fieldName===e.fieldName&&(t.label=e.label,t.format=e.format)}))})),this.updateTable(this.tableTemplate)}))}t.fields.forEach((e=>{if("geometry"===e.type)return;const t=o.get(e.name),i=null==a?void 0:a.get(e.name),s={fieldName:e.name,label:(null==i?void 0:i.label)||e.alias||e.name,visible:null==t?void 0:t.visible,format:(null==i?void 0:i.format)||this.getDefaultFormat(e),menuConfig:l(e.name)};this.tableTemplate.columnTemplates.push(s)}))}getDefaultFormat(e){return["integer","small-integer","big-integer"].indexOf(e.type)>-1?new this.FieldInfoFormat({digitSeparator:!1,places:0}):["single","double","long"].indexOf(e.type)>-1?new this.FieldInfoFormat({digitSeparator:!1,places:2}):["date","time-only","timestamp-offset"].indexOf(e.type)>-1?new this.FieldInfoFormat({dateFormat:"short-date-short-time"}):"date-only"===e.type?new this.FieldInfoFormat({dateFormat:"short-date"}):void 0}displayCount(){const{strings:e,panelNode:t,recordsCount:i,selectedCount:l,supportsSelection:s,intl:o}=this;if(!t)return;const a=o.convertNumberFormatToIntlOptions({digitSeparator:!0}),r=o.formatNumber(i,a);if((0,n.i)(l)&&s)if(0===l)t.description=0===i?e.zeroRecordsZeroSel:1===i?e.oneRecordZeroSel:e.numRecordsZeroSel.replace("${count}",`${r}`);else if(1===l)t.description=0===i?e.zeroRecordsOneSel:1===i?e.oneRecordOneSel:e.numRecordsOneSel.replace("${count}",`${r}`);else{const s=o.formatNumber(l,a);t.description=0===i?e.zeroRecordsNumSel.replace("${countSel}",`${s}`):1===i?e.oneRecordNumSel.replace("${countSel}",`${s}`):e.numRecordsNumSel.replace("${count}",`${r}`).replace("${countSel}",`${s}`)}else t.description=0===i?e.zeroRecords:1===i?e.oneRecord:e.numRecords.replace("${count}",`${r}`)}async loadAllModules(){const[e,t,i,l,s,a,n,r,c,d]=await(0,o.l)(["esri/widgets/FeatureTable","esri/widgets/FeatureTable/support/TableTemplate","esri/support/popupUtils","esri/core/reactiveUtils","esri/popup/support/FieldInfoFormat","esri/rest/support/Query","esri/rest/imageService","esri/layers/support/MosaicRule","esri/Graphic","esri/intl"]);this.FeatureTable=e,this.TableTemplate=t,this.popupUtils=i,this.reactiveUtils=l,this.FieldInfoFormat=s,this.Query=a,this.imageService=n,this.MosaicRule=r,this.Graphic=c,this.intl=d}get hostElement(){return(0,l.d)(this)}};m.style=".host.sc-arcgis-table{width:100%}.content.sc-arcgis-table{height:100%;display:flex}.manager.sc-arcgis-table{height:100%}.action-bar.sc-arcgis-table{height:100%;border-width:0 1px 0 0;border-style:solid;border-color:var(--calcite-ui-border-2)}.menu-actions.sc-arcgis-table{display:inline-flex;justify-self:stretch}.table.sc-arcgis-table{height:100%}.tooltip.sc-arcgis-table{white-space:nowrap}.arcgis--rtl.sc-arcgis-table .action-bar.sc-arcgis-table{border-width:0 0 0 1px}";const u=class{constructor(e){(0,l.r)(this,e),this.arcgisTableColumnInfoClose=(0,l.c)(this,"arcgisTableColumnInfoClose",7),this.afterCreatePopover=e=>{this.popoverNode=e},this.afterCreateCloseButton=e=>{this.closeButtonNode=e},this.afterCreateFieldInfo=e=>{e.addEventListener("arcgisFieldInfoComplete",(()=>this.reposition()))},this.handleCloseClick=()=>{this.arcgisTableColumnInfoClose.emit()},this.props=void 0,this.fieldName=void 0,this.popoverReferenceElement=void 0,this.strings=void 0,this.currentLanguage=void 0,this.isOpen=!1,this.reRender=!1}async reposition(){var e;null===(e=this.popoverNode)||void 0===e||e.reposition()}async componentWillLoad(){const{layer:e}=this.props;this.fieldsMap=await(0,n.d)(e)}componentDidLoad(){this.reposition(),this.isOpen=!0,setTimeout((()=>requestAnimationFrame((()=>this.closeButtonNode.setFocus()))),100)}render(){const{fieldName:e,fieldsMap:t,popoverReferenceElement:i}=this,s=t.get(e);return(0,l.h)(l.H,{class:"js-app-flyout"},(0,l.h)("calcite-popover",{placement:"leading",dir:document.dir,open:this.isOpen,pointerDisabled:!0,referenceElement:i,offsetDistance:-48,offsetSkidding:0,class:"popover",label:"",ref:this.afterCreatePopover},(0,l.h)("calcite-flow",{class:"flow"},(0,l.h)("calcite-flow-item",{heading:s.alias||s.name,description:e},this.renderCloseButton(),this.renderInfo()))))}renderCloseButton(){const{strings:e}=this;return(0,l.h)("calcite-action",{text:e.close,scale:"s",slot:"header-actions-end",onClick:this.handleCloseClick,ref:this.afterCreateCloseButton,icon:"x"})}renderInfo(){const{layer:e,view:t}=this.props,{fieldName:i,currentLanguage:s}=this;return(0,l.h)("arcgis-field-info",{fieldName:i,layer:e,view:t,lang:s,class:"info",ref:this.afterCreateFieldInfo})}get hostElement(){return(0,l.d)(this)}};u.style=".flow{max-height:400px}.info{background-color:#ffffff;max-height:400px;width:20vw;max-width:420px;min-width:240px}";const f=class{constructor(e){(0,l.r)(this,e),this.arcgisTableFieldSelectionClose=(0,l.c)(this,"arcgisTableFieldSelectionClose",7),this.columnTemplatesChange=(0,l.c)(this,"columnTemplatesChange",7),this.fieldSortByChange=(0,l.c)(this,"fieldSortByChange",7),this.attachmentsChange=(0,l.c)(this,"attachmentsChange",7),this.waitHandler=null,this.afterCreatePopover=e=>{this.popoverNode=e},this.afterCreateFlow=e=>{this.flowNode=e},this.afterCreateFlowItem=e=>{this.firstPanelNode=e},this.afterCreateCloseButton=e=>{this.closeButtonNode=e},this.afterCreatePickList=e=>{this.pickListNode=e},this.afterCreatePickListItem=e=>{e.addEventListener("calciteListItemChange",(e=>{this.handleCalciteListItemChange(e)}))},this.afterCreatePickListItemAttachments=e=>{e.addEventListener("calciteListItemChange",(e=>{this.handleCalciteAttachmentsItemChange(e)}))},this.handleCloseClick=()=>{this.arcgisTableFieldSelectionClose.emit()},this.props=void 0,this.columnTemplates=void 0,this.attachmentsEnabled=!1,this.popoverReferenceElement=void 0,this.sortBy=void 0,this.strings=void 0,this.currentLanguage=void 0,this.reRender=!1,this.lastSortBy=r.L.display,this.filterFields=null,this.isOpen=!1}async reposition(){var e;null===(e=this.popoverNode)||void 0===e||e.reposition()}async componentWillLoad(){const{layer:e}=this.props;this.fieldsMap=await(0,n.d)(e),this.totalCounts=this.getTotalFieldTypeCount(),this.lastSortBy=this.sortBy||r.L.default}componentDidLoad(){this.reposition(),this.isOpen=!0,setTimeout((()=>requestAnimationFrame((()=>this.closeButtonNode.setFocus()))),200)}render(){const{strings:e,popoverReferenceElement:t}=this;return(0,l.h)(l.H,{class:"js-app-flyout"},(0,l.h)("calcite-popover",{placement:"leading",dir:document.dir,open:this.isOpen,pointerDisabled:!0,referenceElement:t,offsetDistance:-48,offsetSkidding:0,class:"popover",label:"",ref:this.afterCreatePopover},(0,l.h)("calcite-flow",{class:"flow",ref:this.afterCreateFlow},(0,l.h)("calcite-flow-item",{heading:e.fieldVisibility,ref:this.afterCreateFlowItem},this.renderCloseButton(),this.renderDoneButton(),this.renderPickList()))))}renderCloseButton(){const{strings:e}=this;return(0,l.h)("calcite-action",{text:e.close,scale:"s",slot:"header-actions-end",onClick:this.handleCloseClick,icon:"x",ref:this.afterCreateCloseButton})}renderDoneButton(){const{strings:e}=this;return(0,l.h)("calcite-button",{appearance:"outline-fill",scale:"m",slot:"footer",width:"full",onClick:this.handleCloseClick,label:e.done},e.done)}renderPickList(){const{strings:e}=this;return(0,l.h)("calcite-pick-list",{class:"content","drag-enabled":!1,multiple:!0,filterEnabled:!0,filterPlaceholder:e.filterFields,ref:this.afterCreatePickList,onCalciteListFilter:e=>{const t=e.target;this.filterFields=t.filteredItems}},this.renderSelection(),this.renderSort(),this.renderPickListItems(),this.renderAttachmentPickListItem())}renderSelection(){const{filterFields:e,strings:t}=this,i=this.filterContainsAll();return(0,l.h)("calcite-button",{key:`${e}`,class:"select-button",appearance:"transparent",scale:"s",width:"full",onClick:()=>this.handleSelectionAllClick(i),label:i?t.deselectAll:t.selectAll},i?t.deselectAll:t.selectAll)}renderSort(){const{lastSortBy:e,totalCounts:t,strings:i}=this;let s=t.number>0,o=t.string>0,a=t.date>0,n=!(!s||!o&&!a)||!(!o||!a);return(0,l.h)("calcite-dropdown",{slot:"menu-actions",placement:"bottom-end",overlayPositioning:"fixed"},(0,l.h)("calcite-action",{slot:"trigger",text:i.sortFields,label:i.sortFields,"aria-label":i.sortFields},(0,l.h)("calcite-icon",{scale:"s",icon:"sortDescending"})),(0,l.h)("calcite-dropdown-group",{"group-title":i.sortBy},(0,l.h)("calcite-dropdown-item",{selected:e===r.L.default,onClick:()=>{this.lastSortBy=r.L.default,this.fieldSortByChange.emit(this.lastSortBy)}},i.default),(0,l.h)("calcite-dropdown-item",{selected:e===r.L.display,onClick:()=>{this.lastSortBy=r.L.display,this.fieldSortByChange.emit(this.lastSortBy)}},i.sortByDisplayName),n?(0,l.h)("calcite-dropdown-item",{selected:e===r.L.type,onClick:()=>{this.lastSortBy=r.L.type,this.fieldSortByChange.emit(this.lastSortBy)}},i.sortByType):null,(0,l.h)("calcite-dropdown-item",{selected:e===r.L.field,onClick:()=>{this.lastSortBy=r.L.field,this.fieldSortByChange.emit(this.lastSortBy)}},i.sortByFieldName)))}renderPickListItems(){const{lastSortBy:e}=this;let t=this.cloneFieldTemplates();return e===r.L.display?t=this.sortFieldsAlphabetically(t):e===r.L.type?t=this.sortFieldsByType(this.sortFieldsAlphabetically(t)):e===r.L.field&&t.sort(((e,t)=>e.fieldName.localeCompare(t.fieldName))),t.map((e=>this.renderPickListItem(e)))}renderPickListItem(e){const{strings:t,filterFields:i}=this;let s=!1;return i&&!i.some((t=>t.value===e.fieldName))&&(s=!0),(0,l.h)("calcite-pick-list-item",{key:e.fieldName,label:e.label,value:e.fieldName,selected:e.visible,hidden:s,ref:this.afterCreatePickListItem},(0,l.h)("calcite-action",{slot:"actions-end",text:t.info,onClick:t=>{t.stopPropagation(),this.handleInfoClick(e,t.target)}},(0,l.h)("calcite-icon",{scale:"s",icon:"information"})))}renderAttachmentPickListItem(){const{layer:e}=this.props,{strings:t,attachmentsEnabled:i}=this;return"imagery"===e.type?null:"feature"!==e.type||h(e)?(0,l.h)("calcite-pick-list-item",{key:"attachments",label:t.photosAndFiles,description:t.attachments,value:"__attachments",selected:i,hidden:!1,ref:this.afterCreatePickListItemAttachments}):null}handleSelectionAllClick(e){const{columnTemplates:t,filterFields:i}=this;t.forEach((t=>{i&&!i.some((e=>e.value===t.fieldName))||(t.visible=!e)})),this.pickListNode.querySelectorAll("calcite-pick-list-item").forEach((t=>{i&&!i.some((e=>e.value===t.getAttribute("value")))||(e?t.removeAttribute("selected"):t.setAttribute("selected","true"))})),this.reRender=!this.reRender}handleCalciteListItemChange({detail:{value:e,selected:t}}){const{columnTemplates:i}=this;i.forEach((i=>{i.fieldName===e&&(i.visible=t)})),this.waitHandler&&clearTimeout(this.waitHandler),this.waitHandler=setTimeout((()=>{this.waitHandler=null,this.columnTemplatesChange.emit(this.cloneFieldTemplates()),this.reRender=!this.reRender}),100)}handleCalciteAttachmentsItemChange({detail:{selected:e}}){this.attachmentsChange.emit(e),this.attachmentsEnabled=e}handleInfoClick(e,t){var i;const{layer:l,view:s}=this.props,{flowNode:o,firstPanelNode:a,currentLanguage:n}=this,r=a.getBoundingClientRect(),c=document.createElement("arcgis-field-info");c.lang=n,c.fieldName=e.fieldName,c.layer=l,c.view=s,c.className="info";const d=document.createElement("calcite-flow-item");d.heading=null!==(i=e.label)&&void 0!==i?i:e.fieldName,d.description=e.fieldName,d.style.height=`${r.height}px`,d.style.width=`${r.width}px`,d.appendChild(c),d.addEventListener("calciteFlowItemBack",(()=>requestAnimationFrame((()=>t.setFocus())))),o.appendChild(d),setTimeout((()=>d.setFocus()),200),this.reposition()}cloneFieldTemplates(){return this.columnTemplates.map((e=>Object.assign({},e)))}filterContainsAll(){const{columnTemplates:e,filterFields:t,attachmentsEnabled:i}=this;if(t){const l=t.filter((e=>"__attachments"!==e.value)).map((e=>({value:e.value,selected:e.selected}))),s=e.filter((e=>l.some((t=>e.fieldName===t.value))));let o=t.length!==l.length;return l.every((e=>!s.some((t=>t.fieldName===e.value&&!t.visible))))&&(o&&i||!o)}return!e.some((e=>!e.visible))}getTotalFieldTypeCount(){const{columnTemplates:e,fieldsMap:t}=this,i={string:0,number:0,date:0};return e.forEach((e=>{switch(t.get(e.fieldName).type){case"small-integer":case"big-integer":case"integer":case"single":case"double":case"long":case"oid":case"guid":i.number++;break;case"string":i.string++;break;case"date":case"date-only":case"time-only":case"timestamp-offset":i.date++}})),i}sortFieldsAlphabetically(e){return e.sort(((e,t)=>"_"===e.label.charAt(0)?1:"_"===t.label.charAt(0)?-1:e.label.localeCompare(t.label)))}sortFieldsByType(e){const{fieldsMap:t}=this;return e.filter((e=>["small-integer","big-integer","integer","single","double","long"].indexOf(t.get(e.fieldName).type)>-1)).map((e=>e)).concat(e.filter((e=>"string"===t.get(e.fieldName).type)).map((e=>e))).concat(e.filter((e=>["date","date-only","time-only","timestamp-offset"].indexOf(t.get(e.fieldName).type)>-1)).map((e=>e))).concat(e.filter((e=>"oid"===t.get(e.fieldName).type)).map((e=>e))).concat(e.filter((e=>"guid"===t.get(e.fieldName).type)).map((e=>e))).concat(e.filter((e=>-1===["small-integer","big-integer","integer","single","double","long","string","date","date-only","time-only","timestamp-offset","oid","guid"].indexOf(t.get(e.fieldName).type))).map((e=>e)))}get hostElement(){return(0,l.d)(this)}};f.style=".flow{max-height:400px;width:280px}.content{max-height:80vh}.info{background-color:#ffffff}.select-button{margin:4px 0}"},42762:(e,t,i)=>{var l;function s(e){return null!=e}function o(e,t){for(;e;){if(e.nodeName===t.toUpperCase())return!0;e=e.parentElement}return!1}i.d(t,{a:()=>s,i:()=>o,s:()=>l}),function(e){e.SMALL="s",e.MEDIUM="m",e.LARGE="l"}(l||(l={}))},62727:(e,t,i)=>{i.d(t,{a:()=>a,g:()=>c});var l=i(18869),s=i(81068),o=i(28384);function a(e){var t,i,o;const a=null!==(t=(0,l.c)(e,"[lang]"))&&void 0!==t?t:null===(o=null===(i=e.shadowRoot)||void 0===i?void 0:i.ownerDocument)||void 0===o?void 0:o.documentElement,n=((null==a?void 0:a.lang)||(null===navigator||void 0===navigator?void 0:navigator.language)||"en").toLowerCase();return s.l.has(n)?s.l.get(n):s.l.has(n.slice(0,2))?s.l.get(n.slice(0,2)):"en"}const n={};function r(e,t){const i=`${e}${t}`;return n[i]||(n[i]=function(e,t){return new Promise(((i,l)=>{fetch((0,o.a)(`../arcgis-app-assets/i18n/${e}.i18n.${t}.json`)).then((e=>{e.ok?i(e.json()):l()}),(()=>l()))}))}(e,t)),n[i]}async function c(e,t){const i=t||e.tagName.toLowerCase(),o=a(e),n=function(e){var t,i,o;const a=null!==(t=(0,l.c)(e,"[lang]"))&&void 0!==t?t:null===(o=null===(i=e.shadowRoot)||void 0===i?void 0:i.ownerDocument)||void 0===o?void 0:o.documentElement,n=((null==a?void 0:a.lang)||(null===navigator||void 0===navigator?void 0:navigator.language)||"en").toLowerCase();return s.l.has(n)?s.l.get(n):s.l.has(n.slice(0,2))?n:"en"}(e);let c;try{c=await r(i,o)}catch(e){console.warn(`no locale for ${i} (${o}) loading default locale en.`),c=await r(i,"en")}return[c,o,n]}}}]);