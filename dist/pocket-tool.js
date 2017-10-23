!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t(e.pocketTool={})}(this,function(exports){"use strict";var isUndefined$1=function(e){return void 0===e},isNull$1=function(e){return null===e},isObject$1=function(e){return!isUndefined$1(e)&&!isNull$1(e)&&e.constructor===Object},isArray$1=function(e){return e instanceof Array},isString$1=function(e){return"string"==typeof e},isFunction$1=function(e){return"function"==typeof e},isNumber$1=function(e){return"number"==typeof e},OBJECT="object",ARRAY="array",STRING="string",FUNCTION="function",NULL="null",UNDEFINED="undefined",NUMBER="number",code={};code[OBJECT]=OBJECT,code[ARRAY]=ARRAY,code[STRING]=STRING,code[FUNCTION]=FUNCTION,code[NULL]=NULL,code[UNDEFINED]=UNDEFINED,code[NUMBER]=NUMBER;var isType={};isType[OBJECT]=function(e){return isObject$1(e)},isType[ARRAY]=function(e){return isArray$1(e)},isType[STRING]=function(e){return isString$1(e)},isType[FUNCTION]=function(e){return isFunction$1(e)},isType[NULL]=function(e){return isNull$1(e)},isType[UNDEFINED]=function(e){return isUndefined$1(e)},isType[NUMBER]=function(e){return isNumber$1(e)};var is=isType,_typeObject={is:is,code:code},toArray$1=function(e){return e&&e.length&&is.string(e)?[e]:e&&e.length?Array.prototype.slice.call(e):[e]},merge$1=function(){var e={};return toArray$1(arguments).forEach(function(t){if(isObject$1(t))for(var n in t)e[n]=t[n]}),e},typeIs$1=function(e){var t=void 0;for(var n in is)is[n](e)&&(t=n);return t},checkObjType=function(e,t){var n=is[e];return!!n&&n(t)},checkFromObject=function(e){if(!is.object(e))throw new Error(e+" 必须为Object类型");return checkObjType(e.type,e.value)},checkFromArray=function(e,t){var n=!t;if(!is.array(e))throw new Error(e+" 必须为Array类型");return e.map(function(e){t&&checkFromObject(e)?n=!0:t||checkFromObject(e)||(n=!1)}),n},checkFn={};checkFn[code.object]=checkFromObject,checkFn[code.array]=checkFromArray;var typeCheck$1=function(e,t){var n=!0,r=checkFn[typeIs$1(e)];return r&&(n=r(e,t)),n},any=function(e){return typeCheck$1(e,!0)},all=function(e){return typeCheck$1(e)},_typeCheck={any:any,all:all},isObject=isObject$1,isArray=isArray$1,isString=isString$1,isUndefined=isUndefined$1,isFunction=isFunction$1,isNull=isNull$1,isNumber=isNumber$1,merge=merge$1,toArray=toArray$1,typeCheck=_typeCheck,typeIs=typeIs$1,typeObject=_typeObject,Utils$1={isObject:isObject,isArray:isArray,isString:isString,isUndefined:isUndefined,isFunction:isFunction,isNull:isNull,isNumber:isNumber,merge:merge,toArray:toArray,typeCheck:typeCheck,typeIs:typeIs,typeObject:typeObject},addClass$1=function(e,t){if(!Utils$1.isString(t))throw new Error(t+" 必须为string");(e=Utils$1.toArray(e)).forEach(function(e,n){if(!e.nodeType)throw new Error(e+" 必须为HTMLElement");var r=0===e.className.length?[]:e.className.split(" ");t.split(" ").forEach(function(e,t){-1===r.indexOf(e)&&r.push(e)});var i=r;e.className=i.join(" ")})},removeClass$1=function(e,t){if(!Utils$1.isString(t))throw new Error("传入的对象类型必须为string");(e=Utils$1.toArray(e)).forEach(function(e){if(!e.nodeType)throw new Error(e+" 必须为HTMLElement");var n=0===e.className.length?[]:e.className.split(" ");t.split(" ").forEach(function(e,t){var r=n.indexOf(e);r>-1&&n.splice(r,1)}),e.className=n.join(" ")})},handleAddEventListener=function(e,t,n){e.addEventListener(t,n)},handleAttachEvent=function(e,t,n){e.attachEvent("on"+t,n)},on$1=function(e,t,n,r){var i=[{type:"string",value:t},{type:"function",value:n}];if(!Utils$1.typeCheck.all(i))throw new Error(t+" 必须为string, "+n+" 必须为Function");var o=function(e,t,n){(o=document.addEventListener?handleAddEventListener:handleAttachEvent)(e,t,n)};(e=Utils$1.toArray(e)).forEach(function(e){if(!e.nodeType)throw e+" 必须为HTMLElement";o(e,t,n)})},handleRemoveEventListener=function(e,t,n){e.removeEventListener(t,n)},handleDetachEvent=function(e,t,n){e.detachEvent("on"+t,n)},off$1=function(e,t,n,r){var i=[{type:"string",value:t},{type:"function",value:n}];if(!Utils$1.typeCheck.all(i))throw new Error(t+" 必须为string, "+n+" 必须为Function");var o=function(e,t,n){(o=document.addEventListener?handleRemoveEventListener:handleDetachEvent)(e,t,n)};(e=Utils$1.toArray(e)).forEach(function(e){if(!e.nodeType)throw e+" 必须为HTMLElement";o(e,t,n)})},getDataSet$1=function getDataSet(element,key){if(element.length&&(element=element[0]),!element.nodeType)throw new Error(element+" 必须为HTMLElement");if(!Utils$1.isString(key))throw new Error(key+" 必须为string");var val=void 0;return val=element.dataset?element.dataset[key]:element.getAttribute(key),val=eval("("+val+")")},_getElement=function(e){var t=[];if(!!e.nodeType)t.push(e);else{var n=0===e.indexOf("#"),r=0===e.indexOf(".");document.querySelector?r||!n?t=document.querySelectorAll(e):t.push(document.querySelector(e)):(n||r)&&(e=e.slice(1),n?t.push(document.getElementById(e)):t=r?document.getElementsByClassName(e):document.getElementsByTagName(e))}t=Utils$1.toArray(t);var i={addClass:function(e){return addClass$1(this,e),this},removeClass:function(e){return removeClass$1(this,e),this},on:function(e,t,n){return on$1(this,e,t,n)},off:function(e,t,n){return off$1(this,e,t,n)},getDataSet:function(e){return getDataSet$1(this,e)},eq:function(e){if(this[e]){var t=Object.create(i);return t[0]=this[e],t.length=1,t}return this[e]}},o=Object.create(i);return t.forEach(function(e,t){o[t]=e}),o.length=t.length,o},getElement$1=function(e){return Utils$1.isNull(_getElement(e))?null:new _getElement(e)},getElement=getElement$1,on=on$1,off=off$1,addClass=addClass$1,removeClass=removeClass$1,getDataSet=getDataSet$1,Dom={getElement:getElement,on:on,off:off,addClass:addClass,removeClass:removeClass,getDataSet:getDataSet},Core$1={Dom:Dom,Utils:Utils$1},Utils=Core$1.Utils,DOM=Core$1.Dom;exports.Utils=Utils,exports.DOM=DOM,exports.default=Core$1,Object.defineProperty(exports,"__esModule",{value:!0})});
