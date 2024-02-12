System.register(["jimu-core","jimu-ui","jimu-ui/basic/color-picker","jimu-ui/advanced/setting-components","jimu-ui/advanced/data-source-selector","jimu-ui/advanced/style-setting-components","jimu-arcgis"],(function(e,t){var s={},o={},a={},i={},n={},r={},p={};return{setters:[function(e){s.DataSourceComponent=e.DataSourceComponent,s.FormattedMessage=e.FormattedMessage,s.Immutable=e.Immutable,s.React=e.React,s.css=e.css,s.getAppStore=e.getAppStore,s.jsx=e.jsx,s.polished=e.polished},function(e){o.Button=e.Button,o.ButtonGroup=e.ButtonGroup,o.Checkbox=e.Checkbox,o.DistanceUnits=e.DistanceUnits,o.Dropdown=e.Dropdown,o.DropdownButton=e.DropdownButton,o.DropdownItem=e.DropdownItem,o.DropdownMenu=e.DropdownMenu,o.Select=e.Select,o.TextArea=e.TextArea,o.defaultMessages=e.defaultMessages},function(e){a.ThemeColorPicker=e.ThemeColorPicker},function(e){i.MapWidgetSelector=e.MapWidgetSelector,i.SettingRow=e.SettingRow,i.SettingSection=e.SettingSection},function(e){n.AllDataSourceTypes=e.AllDataSourceTypes,n.DataSourceSelector=e.DataSourceSelector},function(e){r.InputUnit=e.InputUnit},function(e){p.loadArcGISJSAPIModules=e.loadArcGISJSAPIModules}],execute:function(){e((()=>{var e={26826:e=>{"use strict";e.exports=p},48891:e=>{"use strict";e.exports=s},30726:e=>{"use strict";e.exports=o},338:e=>{"use strict";e.exports=n},77756:e=>{"use strict";e.exports=i},55505:e=>{"use strict";e.exports=r},41362:e=>{"use strict";e.exports=a}},t={};function c(s){var o=t[s];if(void 0!==o)return o.exports;var a=t[s]={exports:{}};return e[s](a,a.exports,c),a.exports}c.d=(e,t)=>{for(var s in t)c.o(t,s)&&!c.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.p="";var l={};return c.p=window.jimuConfig.baseUrl,(()=>{"use strict";c.r(l),c.d(l,{__set_webpack_public_path__:()=>m,default:()=>g});var e,t,s=c(48891),o=c(30726),a=c(41362),i=c(77756),n=c(338);!function(e){e.syncWithTheme="syncWithTheme",e.usePopupDefined="usePopupDefined",e.custom="custom"}(e||(e={})),function(e){e.auto="auto",e.custom="custom"}(t||(t={}));const r={sourceLabel:"Source",sourceDescript:"A web map or web scene, or any combination of the two.",detailOptions:"Details options",content:"Content",media:"Media",attachments:"Attachments",lastEditInfo:"Last edit info",maxFeauresDisplayed:"Maximum features displayed",noDataMessage:"No data message",noDeataMessageDefaultText:"No data found.",textSize:"Text size",widgetTitle:"Widget title",placeholderOfEditTitleHere:"Edit title here",placeholderOfEditDesHere:"Edit description here",syncWithTheme:"Sync with experince theme",respectTheSource:"Respect the source",usePopupDefined:"Use popup defined"};var p=c(55505),u=c(26826),d=function(e,t,s,o){return new(s||(s=Promise))((function(a,i){function n(e){try{p(o.next(e))}catch(e){i(e)}}function r(e){try{p(o.throw(e))}catch(e){i(e)}}function p(e){var t;e.done?a(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(n,r)}p((o=o.apply(e,t||[])).next())}))};const h=Object.assign({},r,o.defaultMessages);class g extends s.React.PureComponent{constructor(o){super(o),this.supportedDsTypes=(0,s.Immutable)([n.AllDataSourceTypes.FeatureLayer,n.AllDataSourceTypes.SceneLayer]),this.getPortUrl=()=>(0,s.getAppStore)().getState().portalUrl,this.onRadioChange=e=>{this.props.onSettingChange({id:this.props.id,config:this.props.config.set("useMapWidget",e)}),this.setState({useMapWidget:e})},this.onPropertyChange=(e,t)=>{this.props.onSettingChange({id:this.props.id,config:this.props.config.set(e,t)})},this.onOptionsChanged=(e,t)=>{this.props.onSettingChange({id:this.props.id,config:this.props.config.set(t,e)})},this.onToggleUseDataEnabled=e=>{this.props.onSettingChange({id:this.props.id,useDataSourcesEnabled:e})},this.onStyleTypeChanged=e=>{const t=e.target.value;this.props.onSettingChange({id:this.props.id,config:this.props.config.set("styleType",t)})},this.onStyleChanged=(e,t)=>{this.props.onSettingChange({id:this.props.id,config:this.props.config.setIn(["style",e],t)})},this.onSelectAutoFontSizeType=()=>{this.props.onSettingChange({id:this.props.id,config:this.props.config.setIn(["style","fontSizeType"],t.auto)})},this.onSelectCustomFontSizeType=()=>{this.props.onSettingChange({id:this.props.id,config:this.props.config.setIn(["style","fontSizeType"],t.custom)})},this.onFontSizeChanged=e=>{this.props.onSettingChange({id:this.props.id,config:this.props.config.setIn(["style","fontSize"],e)})},this.onFilterChange=(e,t)=>{const s=this.props.useDataSources;s&&s[0]&&s[0].dataSourceId===t&&this.props.onSettingChange({id:this.props.id,useDataSources:[s[0].setIn(["query","where"],e).asMutable({deep:!0})]})},this.onSortChange=(e,t)=>{const{useDataSources:s}=this.props;s&&s[0]&&s[0].dataSourceId===t&&this.props.onSettingChange({id:this.props.id,useDataSources:[s[0].setIn(["query","orderBy"],e).asMutable({deep:!0})]})},this.onDataSourceChange=e=>{e&&this.props.onSettingChange({id:this.props.id,useDataSources:e})},this.onDataSourceCreated=t=>{this.dataSource=t,this.setDisplayFieldsToConfig(t),function(e){return d(this,void 0,void 0,(function*(){return yield(0,u.loadArcGISJSAPIModules)(["esri/layers/FeatureLayer"]).then((t=>{const[s]=t;let o;return o=e.layer?e.layer:e.itemId?new s({portalItem:{id:e.itemId,portal:{url:e.portalUrl}}}):new s({url:e.url}),o.load().then((()=>d(this,void 0,void 0,(function*(){return yield Promise.resolve(o)}))))})).catch((e=>(console.warn(e),null)))}))}(t).then((t=>{var s,o,a,i,n;const r=null===(s=null==t?void 0:t.popupTemplate)||void 0===s?void 0:s.content;let p=!1,c=!1,l=!1,u=!!(null===(o=null==t?void 0:t.popupTemplate)||void 0===o?void 0:o.title),d=null===(a=null==t?void 0:t.popupTemplate)||void 0===a?void 0:a.lastEditInfoEnabled;r&&r.length?r.forEach((e=>{switch(e.type){case"text":p=!0;break;case"media":c=!0;break;case"attachments":l=!0}})):(p=!0,u=!0,c=!1,l=!1,d=!1),p||this.props.onSettingChange({id:this.props.id,config:this.props.config.set("styleType",e.custom)});const h=null===(n=null===(i=null==t?void 0:t.capabilities)||void 0===i?void 0:i.data)||void 0===n?void 0:n.supportsAttachment,g=!(!(null==t?void 0:t.editingInfo)||!(null==t?void 0:t.editFieldsInfo));this.setState({popupHasTextContent:p,popupHasMediaContent:c,popupHasAttachmentsContent:l,popupHasTitle:u,popupHasChangeTracking:d,layerHasAttachment:h,layerHasChangeTracking:g})}))},this.onDataSourceRemoved=()=>{this.props.onSettingChange({id:this.props.id,useDataSources:[]})},this.onMapWidgetSelected=e=>{this.props.onSettingChange({id:this.props.id,useMapWidgetIds:e})},this.i18nMessage=(e,t)=>{const{intl:s}=this.props;return s?s.formatMessage({id:e,defaultMessage:t||h[e]}):""},this.state={useMapWidget:this.props.config.useMapWidget||!1,popupHasTextContent:!0,popupHasMediaContent:!1,popupHasAttachmentsContent:!1,popupHasTitle:!1,popupHasChangeTracking:!1,layerHasAttachment:!1,layerHasChangeTracking:!1}}getStyleConfig(){return this.props.config.style?this.props.config.style:{textColor:"",fontSize:{distance:0,unit:o.DistanceUnits.PIXEL},backgroundColor:""}}getCapabilities(){return{supportsTitle:this.state.popupHasTitle,supportsMedia:this.state.popupHasMediaContent,supportsAttachment:this.state.popupHasAttachmentsContent&&this.state.layerHasAttachment,supportsChangeTracking:this.state.popupHasChangeTracking&&this.state.layerHasChangeTracking}}setDisplayFieldsToConfig(e){var t;const s=null===(t=this.props.useDataSources)||void 0===t?void 0:t[0];s&&e&&this.props.onSettingChange({id:this.props.id,useDataSources:[s.set("useFieldsInPopupInfo",!0).asMutable({deep:!0})]})}render(){const c=[];if(this.props.useDataSources)for(let e=0;e<this.props.useDataSources.length;e++)c.push(this.props.useDataSources[e].dataSourceId);const l=this.props.useDataSources&&this.props.useDataSources[0];let u,d,h,g=null,m=null,f=null,S=null;return l&&l.dataSourceId&&(f=(0,s.jsx)(s.DataSourceComponent,{useDataSource:l,onDataSourceCreated:this.onDataSourceCreated,query:null})),m=(0,s.jsx)(i.SettingSection,{title:this.i18nMessage("sourceLabel")},(0,s.jsx)(i.SettingRow,null,(0,s.jsx)(n.DataSourceSelector,{types:this.supportedDsTypes,useDataSourcesEnabled:!0,mustUseDataSource:!0,useDataSources:this.props.useDataSources,onChange:this.onDataSourceChange,widgetId:this.props.id}),f)),S=(0,s.jsx)(i.SettingSection,{className:"map-selector-section",title:this.i18nMessage("sourceDescript","map widget **")},(0,s.jsx)(i.SettingRow,null,(0,s.jsx)("div",{className:"map-selector-descript"},this.i18nMessage("sourceDescript","set an interactive map **"))),(0,s.jsx)(i.SettingRow,null,(0,s.jsx)(i.MapWidgetSelector,{onSelect:this.onMapWidgetSelected,useMapWidgetIds:this.props.useMapWidgetIds}))),g=this.state.useMapWidget?S:m,this.state.popupHasTextContent&&(d=(0,s.jsx)(o.Select,{size:"sm",value:this.props.config&&this.props.config.styleType,onChange:this.onStyleTypeChanged,className:""},(0,s.jsx)("option",{key:2,value:e.usePopupDefined},(0,s.jsx)(s.FormattedMessage,{id:"respectTheSource",defaultMessage:r.respectTheSource})),(0,s.jsx)("option",{key:3,value:e.custom},(0,s.jsx)(s.FormattedMessage,{id:"custom",defaultMessage:"abc"})))),"custom"===this.props.config.styleType&&(h=this.props.config.style.fontSizeType===t.custom?(0,s.jsx)(p.InputUnit,{style:{width:"6.5rem"},units:[o.DistanceUnits.PIXEL,o.DistanceUnits.PERCENTAGE],className:"item",min:1,value:this.getStyleConfig().fontSize,onChange:this.onFontSizeChanged}):(0,s.jsx)(o.Button,{style:{width:"6.5rem"},disabled:!0,size:"sm"},(0,s.jsx)(s.FormattedMessage,{id:"auto",defaultMessage:"Auto"})),u=(0,s.jsx)("div",null,(0,s.jsx)(i.SettingRow,{className:"mt-3",label:(0,s.jsx)(s.FormattedMessage,{id:"textSize",defaultMessage:r.textSize}),"aria-label":this.i18nMessage("textSize"),role:"group"},(0,s.jsx)(o.ButtonGroup,null,(0,s.jsx)(o.Dropdown,{activeIcon:!0,className:"dropdown"},(0,s.jsx)(o.DropdownButton,{size:"sm",style:{width:"auto"},icon:!0,"aria-haspopup":"menu"}),(0,s.jsx)(o.DropdownMenu,{className:"dropdown-menu",zIndex:"55",alignment:"start"},(0,s.jsx)(o.DropdownItem,{key:1,active:this.props.config.style.fontSizeType===t.auto,onClick:this.onSelectAutoFontSizeType},(0,s.jsx)(s.FormattedMessage,{id:"auto",defaultMessage:"Auto"})),(0,s.jsx)(o.DropdownItem,{key:2,active:this.props.config.style.fontSizeType===t.custom,onClick:this.onSelectCustomFontSizeType},(0,s.jsx)(s.FormattedMessage,{id:"custom",defaultMessage:"Custom"})))),h)),(0,s.jsx)(i.SettingRow,{label:(0,s.jsx)(s.FormattedMessage,{id:"textColor",defaultMessage:"Text color"})},(0,s.jsx)(a.ThemeColorPicker,{specificTheme:this.props.theme2,value:this.getStyleConfig().textColor,onChange:e=>{this.onStyleChanged("textColor",e)},"aria-label":this.i18nMessage("textColor")})))),(0,s.jsx)("div",{css:(x=this.props.theme,s.css`
    .widget-setting-featureInfo{
      font-weight: lighter;
      font-size: 13px;

      .second-header {
        color: ${x.colors.palette.dark[600]};
      }

      .webmap-thumbnail{
        cursor: auto;
        width: 100%;
        height: 120px;
        overflow: hidden;
        padding: 1px;
        border: ${s.polished.rem(2)} solid initial;
        img, div{
          width: 100%;
          height: 100%;
        }
      }

      .featureInfo-options-part{
        background-color: ${x.colors.palette.light[200]};
        padding: 0.5rem;
      }

      .featureInfo-options{
        .featureInfo-options-item{
          display: flex;
          justify-content: space-between;
          /* margin-bottom: 8px; */
        }
      }
    }
  `)},(0,s.jsx)("div",{className:"widget-setting-featureInfo"},g,(0,s.jsx)(i.SettingSection,{title:this.i18nMessage("detailOptions"),"aria-label":this.i18nMessage("detailOptions"),role:"group"},(0,s.jsx)("div",{className:"featureInfo-options-part"},(0,s.jsx)(i.SettingRow,{label:(0,s.jsx)(s.FormattedMessage,{id:"title",defaultMessage:"Title"})},(0,s.jsx)(o.Checkbox,{className:"can-x-switch",disabled:!this.getCapabilities().supportsTitle,checked:this.props.config&&this.props.config.title,"data-key":"title",onChange:e=>{this.onOptionsChanged(e.target.checked,"title")},"aria-label":this.i18nMessage("title")})),(0,s.jsx)(i.SettingRow,{label:(0,s.jsx)(s.FormattedMessage,{id:"content",defaultMessage:r.content})},(0,s.jsx)(o.Checkbox,{className:"can-x-switch",checked:this.props.config&&this.props.config.fields,"data-key":"content",onChange:e=>{this.onOptionsChanged(e.target.checked,"fields")},"aria-label":this.i18nMessage("content")})),(0,s.jsx)(i.SettingRow,{label:(0,s.jsx)(s.FormattedMessage,{id:"media",defaultMessage:r.media})},(0,s.jsx)(o.Checkbox,{className:"can-x-switch",disabled:!this.getCapabilities().supportsMedia,checked:this.props.config&&this.props.config.media,"data-key":"media",onChange:e=>{this.onOptionsChanged(e.target.checked,"media")},"aria-label":this.i18nMessage("media")})),(0,s.jsx)(i.SettingRow,{label:(0,s.jsx)(s.FormattedMessage,{id:"attachments",defaultMessage:r.attachments})},(0,s.jsx)(o.Checkbox,{className:"can-x-switch",disabled:!this.getCapabilities().supportsAttachment,checked:this.props.config&&this.props.config.attachments,"data-key":"attachments",onChange:e=>{this.onOptionsChanged(e.target.checked,"attachments")},"aria-label":this.i18nMessage("attachments")})),(0,s.jsx)(i.SettingRow,{label:(0,s.jsx)(s.FormattedMessage,{id:"lastEditInfo",defaultMessage:r.lastEditInfo})},(0,s.jsx)(o.Checkbox,{className:"can-x-switch",disabled:!this.getCapabilities().supportsChangeTracking,checked:this.props.config&&this.props.config.lastEditInfo,"data-key":"lastEditInfo",onChange:e=>{this.onOptionsChanged(e.target.checked,"lastEditInfo")},"aria-label":this.i18nMessage("lastEditInfo")})))),(0,s.jsx)(i.SettingSection,{title:this.i18nMessage("style"),"aria-label":this.i18nMessage("style"),role:"group"},d,u),(0,s.jsx)(i.SettingSection,{title:this.i18nMessage("general"),"aria-label":this.i18nMessage("general"),role:"group"},(0,s.jsx)("label",{className:"second-header"},(0,s.jsx)(s.FormattedMessage,{id:"noDataMessage",defaultMessage:r.noDataMessage})),(0,s.jsx)(o.TextArea,{"aria-label":this.i18nMessage("noDataMessage"),className:"w-100",name:"text",id:"noDeataMessageDefaultText",defaultValue:this.props.config.noDataMessage||this.i18nMessage("noDeataMessageDefaultText"),onBlur:e=>{this.onPropertyChange("noDataMessage",e.target.value)}})),null));var x}}function m(e){c.p=e}g.mapExtraStateProps=e=>({dsJsons:e.appStateInBuilder.appConfig.dataSources})})(),l})())}}}));