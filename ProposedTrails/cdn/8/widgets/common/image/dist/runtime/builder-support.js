System.register(["jimu-core","jimu-for-builder","jimu-ui","jimu-ui/basic/imagecrop"],(function(t,e){var o={},i={},n={},r={};return{setters:[function(t){o.Immutable=t.Immutable,o.MutableStoreManager=t.MutableStoreManager,o.React=t.React,o.ReactDOM=t.ReactDOM,o.appActions=t.appActions,o.getAppStore=t.getAppStore},function(t){i.getAppConfigAction=t.getAppConfigAction},function(t){n.CropType=t.CropType},function(t){r.ImageCrop=t.ImageCrop}],execute:function(){t((()=>{"use strict";var t={48891:t=>{t.exports=o},23137:t=>{t.exports=i},30726:t=>{t.exports=n},48024:t=>{t.exports=r}},e={};function a(o){var i=e[o];if(void 0!==i)return i.exports;var n=e[o]={exports:{}};return t[o](n,n.exports,a),n.exports}a.d=(t,e)=>{for(var o in e)a.o(e,o)&&!a.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},a.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),a.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var p={};return(()=>{a.r(p),a.d(p,{default:()=>r});var t=a(48891),e=a(23137),o=a(30726),i=a(48024);class n extends t.React.PureComponent{constructor(i){super(i),this.__unmount=!1,this.preloadImage=t=>{this.imgObject=new Image,this.imgObject.src=t;const e=this;this.imgObject.onload=t=>{e.imgObject&&(e.__unmount||e.setState({imageWidth:e.imgObject.width,imageHeight:e.imgObject.height}))}},this.getCropZoomInCropTool=(t,e,o,i,n)=>{const r=t&&t.cropPixel,a=t&&t.cropZoom;let p=null,s=null,g=null,c=null;if(r&&a){const t=r.width,s=r.height;let m=null;e/o>=i/n?(g=e,c=n/i*g,e/o>=t/s?(m=e/(t*a),p=n*a*m/c):(m=o/(s*a),p=n*a*m/c)):(c=o,g=i/n*c,e/o>=t/s?(m=e/(t*a),p=n*a*m/c):(m=o/(s*a),p=n*a*m/c))}else e/o>=i/n?(g=e,c=n/i*g):(c=o,g=i/n*c),p=1;return s=g*p/i,s},this.getCropPositonInCropTool=(t,e)=>{const o=t&&t.cropPosition;return o?{x:e*o.x/t.cropZoom,y:e*o.y/t.cropZoom}:{x:0,y:0}},this.onCancelCrop=()=>{(0,t.getAppStore)().dispatch(t.appActions.setWidgetIsInlineEditingState(this.props.widgetId,!1))},this.onConfirmCrop=(i,n)=>{let r=this.props.config.functionConfig.imageParam;if(i.cropType===o.CropType.Real&&n&&(r=r.set("url",n.blobUrl).set("fileFormat",n.fileFormat)),r=r.set("cropParam",i),i.cropPixel){(0,t.getAppStore)().dispatch(t.appActions.setWidgetIsInlineEditingState(this.props.widgetId,!1));let o=(0,t.Immutable)(this.props.config.functionConfig);o=o.set("isCropped",!0),o=o.set("imageParam",r),(0,e.getAppConfigAction)().editWidgetConfig(this.props.widgetId,this.props.config.set("functionConfig",o)).exec()}},this.state={imageWidth:null,imageHeight:null}}componentDidMount(){this.__unmount=!1,this.preloadImage(this.props.config.functionConfig.imageParam.originalUrl)}componentWillUnmount(){this.__unmount=!0,this.props.onUnmount&&this.props.onUnmount()}render(){const e=t.MutableStoreManager.getInstance().getStateValue([this.props.widgetId,"clientRect"]),n=this.props.config.functionConfig.imageParam&&this.props.config.functionConfig.imageParam.cropParam,r=this.props.widgetWidth,a=this.props.widgetHeight;if(this.state.imageWidth&&this.state.imageHeight){const p=this.getCropZoomInCropTool(n,r,a,this.state.imageWidth,this.state.imageHeight),s=this.getCropPositonInCropTool(n,p),g=this.props.config.functionConfig.imageParam.originalUrl;return t.React.createElement(i.ImageCrop,{crop:s,cropZoom:p,imageFormat:this.props.config.functionConfig.imageParam.fileFormat,onCancelCrop:this.onCancelCrop,widgetArea:e,cropParam:n,originId:this.props.config.functionConfig.imageParam.originalId,widgetId:this.props.widgetId,image:g,onConfirmCrop:this.onConfirmCrop,cropType:"BY_URL"===this.props.config.functionConfig.imageParam.imgSourceType?o.CropType.Fake:null})}return t.ReactDOM.createPortal(t.React.createElement("div",null,t.React.createElement("div",{className:"jimu-widget",style:{zIndex:9999,position:"fixed",top:0,left:0,backgroundColor:"rgb(0, 0, 0, .5)"}}),t.React.createElement("div",{style:{position:"absolute",left:"50%",top:"50%",zIndex:9999},className:"jimu-secondary-loading"})),document&&document.getElementsByTagName("body")[0])}}const r={WidgetInBuilder:n}})(),p})())}}}));