define(["exports"],(function(t){"use strict";var e="object"==typeof global&&global&&global.Object===Object&&global,o="object"==typeof self&&self&&self.Object===Object&&self,n=e||o||Function("return this")(),l=n.Symbol,r=Object.prototype,c=r.hasOwnProperty,i=r.toString,b=l?l.toStringTag:void 0,a=Object.prototype.toString,u=l?l.toStringTag:void 0;t.Symbol=l,t.baseGetTag=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":u&&u in Object(t)?function(t){var e=c.call(t,b),o=t[b];try{t[b]=void 0;var n=!0}catch(t){}var l=i.call(t);return n&&(e?t[b]=o:delete t[b]),l}(t):function(t){return a.call(t)}(t)},t.freeGlobal=e,t.isObject=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},t.isObjectLike=function(t){return null!=t&&"object"==typeof t},t.root=n}));