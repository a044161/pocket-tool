(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.pocketTool = {})));
}(this, (function (exports) { 'use strict';

var isUndefined$1 = function isUndefined(obj) {
	return typeof obj === 'undefined';
};

var isNull$1 = function isNull(obj) {
	return obj === null;
};

var isObject$1 = function isObject(obj) {
	if (isUndefined$1(obj) || isNull$1(obj)) {
		return false;
	}
	return obj.constructor === Object;
};

var isArray$1 = function isArray(obj) {
	return obj instanceof Array;
};

var isString$1 = function isString(obj) {
	return typeof obj === 'string';
};

var isFunction$1 = function isFunction(obj) {
	return typeof obj === 'function';
};

var isNumber$1 = function isNumber(obj) {
	return typeof obj === 'number';
};

/**
 * 定义静态类型
 */
var OBJECT = 'object';
var ARRAY = 'array';
var STRING = 'string';
var FUNCTION = 'function';
var NULL = 'null';
var UNDEFINED = 'undefined';
var NUMBER = 'number';

/**
 * 类型的常量定义
 * @returns {object}
 * code.object 
 * // returns 'object'
 */
var code = {};

code[OBJECT] = OBJECT;
code[ARRAY] = ARRAY;
code[STRING] = STRING;
code[FUNCTION] = FUNCTION;
code[NULL] = NULL;
code[UNDEFINED] = UNDEFINED;
code[NUMBER] = NUMBER;

/**
 * 类型的判断方法定义
 */
var isType = {};

isType[OBJECT] = function () {
	return function (obj) {
		return isObject$1(obj);
	};
}();

isType[ARRAY] = function () {
	return function (obj) {
		return isArray$1(obj);
	};
}();

isType[STRING] = function () {
	return function (obj) {
		return isString$1(obj);
	};
}();

isType[FUNCTION] = function () {
	return function (obj) {
		return isFunction$1(obj);
	};
}();

isType[NULL] = function () {
	return function (obj) {
		return isNull$1(obj);
	};
}();

isType[UNDEFINED] = function () {
	return function (obj) {
		return isUndefined$1(obj);
	};
}();

isType[NUMBER] = function () {
	return function (obj) {
		return isNumber$1(obj);
	};
}();

/**
 * 判断是否为某个类型，后面直接跟着想要判断的类型
 * @returns {object}
 * @example
 * is.string('string')
 * // returns true
 */
var is = function () {
	return isType;
}();

var _typeObject = {
	is: is,
	code: code
};

/**
 * 转换为数组
 * @param obj 
 * @returns {array}
 */
var toArray$1 = function toArray(obj) {
	var new_array = void 0;

	if (obj && obj.length && is.string(obj)) {
		new_array = [obj];
	} else if (obj && obj.length) {
		new_array = Array.prototype.slice.call(obj);
	} else {
		new_array = [obj];
	}

	return new_array;
};

var merge$1 = function merge() {
	var newObj = {};
	var args = toArray$1(arguments);

	args.forEach(function (arg) {
		if (isObject$1(arg)) {
			for (var key in arg) {
				newObj[key] = arg[key];
			}
		}
	});
	return newObj;
};

/**
 * 判断对象为某种类型
 * @param {object} obj 
 * @returns {string}
 * 
 * @example
 * typeIs('abc')
 * // returns 'string'
 */
var typeIs$1 = function typeIs(obj) {
  var _type = void 0;
  for (var o in is) {
    if (is[o](obj)) {
      _type = o;
    }
  }
  return _type;
};

/**
 * 可用于单个或者批量的类型判断
 * @param 
 */

/**
 * 根据传入的对象进行判断是否属于某种类型
 * @param {string} type 给予期待的类型
 * @param  value 具体的对象
 */
var checkObjType = function checkObjType(type, value) {
	var _typeObj = is[type];
	if (_typeObj) {
		return _typeObj(value);
	}

	return false;
};

/**
 * 检查传入的对象类型为object
 * @param {object} obj 
 */
var checkFromObject = function checkFromObject(obj) {
	if (!is.object(obj)) {
		throw new Error(obj + ' \u5FC5\u987B\u4E3AObject\u7C7B\u578B');
	}
	var isPass = checkObjType(obj.type, obj.value);

	return isPass;
};

/**
 * 检查传入的对象类型为array
 * @param {array} obj 
 */
var checkFromArray = function checkFromArray(obj, isAny) {
	var isPass = !isAny;

	if (!is.array(obj)) {
		throw new Error(obj + ' \u5FC5\u987B\u4E3AArray\u7C7B\u578B');
	}

	obj.map(function (item) {
		if (isAny && checkFromObject(item)) {
			isPass = true;
		} else if (!isAny && !checkFromObject(item)) {
			isPass = false;
		}
	});

	return isPass;
};

var checkFn = {};

checkFn[code.object] = checkFromObject;
checkFn[code.array] = checkFromArray;

/**
 * 批量类型检查
 * @param {object,array} obj 
 */
var typeCheck$1 = function typeCheck(obj, isAny) {
	var isPass = true; // 赋初值
	var getCheckFn = checkFn[typeIs$1(obj)]; //

	if (getCheckFn) {
		isPass = getCheckFn(obj, isAny);
	}

	return isPass;
};

/**
 * 判断是否其中一个满足条件
 * @param {object} obj 
 */
var any = function any(obj) {
	return typeCheck$1(obj, true);
};

/**
 * 判断是否全部满足条件
 * @param {object} obj 
 */
var all = function all(obj) {
	return typeCheck$1(obj);
};

var _typeCheck = {
	any: any,
	all: all
};

var isObject = isObject$1;
var isArray = isArray$1;
var isString = isString$1;
var isUndefined = isUndefined$1;
var isFunction = isFunction$1;
var isNull = isNull$1;
var isNumber = isNumber$1;
var merge = merge$1;
var toArray = toArray$1;
var typeCheck = _typeCheck;
var typeIs = typeIs$1;
var typeObject = _typeObject;

var Utils$1 = {
	isObject: isObject,
	isArray: isArray,
	isString: isString,
	isUndefined: isUndefined,
	isFunction: isFunction,
	isNull: isNull,
	isNumber: isNumber,
	merge: merge,
	toArray: toArray,
	typeCheck: typeCheck,
	typeIs: typeIs,
	typeObject: typeObject
};

var addClass$1 = function addClass(element, className) {
	if (!Utils$1.isString(className)) {
		throw new Error(className + ' \u5FC5\u987B\u4E3Astring');
	}

	element = Utils$1.toArray(element);

	element.forEach(function (e, index) {
		if (!e.nodeType) {
			throw new Error(e + ' \u5FC5\u987B\u4E3AHTMLElement');
		}
		var oldClassName = e.className.length === 0 ? [] : e.className.split(' ');
		var addClassName = className.split(' ');

		addClassName.forEach(function (c, index) {
			var c_index = oldClassName.indexOf(c);
			if (c_index === -1) {
				oldClassName.push(c);
			}
		});

		var newClassName = oldClassName;

		e.className = newClassName.join(' ');
	});
};

var removeClass$1 = function removeClass(element, className) {
	if (!Utils$1.isString(className)) {
		throw new Error('传入的对象类型必须为string');
	}

	element = Utils$1.toArray(element);

	element.forEach(function (e) {
		if (!e.nodeType) {
			throw new Error(e + ' \u5FC5\u987B\u4E3AHTMLElement');
		}
		var oldClassName = e.className.length === 0 ? [] : e.className.split(' ');
		var removeClassName = className.split(' ');

		removeClassName.forEach(function (c, index) {
			var c_index = oldClassName.indexOf(c);
			if (c_index > -1) {
				oldClassName.splice(c_index, 1);
			}
		});

		e.className = oldClassName.join(' ');
	});
};

var handleAddEventListener = function handleAddEventListener(ele, event, handler) {
	ele.addEventListener(event, handler);
};

var handleAttachEvent = function handleAttachEvent(ele, event, handler) {
	ele.attachEvent('on' + event, handler);
};

var on$1 = function on(element, event, handler, propagation) {
	var _type = [{
		type: 'string',
		value: event
	}, {
		type: 'function',
		value: handler
	}];

	if (!Utils$1.typeCheck.all(_type)) {
		throw new Error(event + ' \u5FC5\u987B\u4E3Astring, ' + handler + ' \u5FC5\u987B\u4E3AFunction');
	}

	element = Utils$1.toArray(element);

	var _eventHandle = function eventHandle(e, event, handler) {
		if (document.addEventListener) {
			_eventHandle = handleAddEventListener;
		} else {
			_eventHandle = handleAttachEvent;
		}
		_eventHandle(e, event, handler);
	};

	element.forEach(function (e) {
		if (!e.nodeType) {
			throw e + ' \u5FC5\u987B\u4E3AHTMLElement';
		}
		_eventHandle(e, event, handler);
	});
};

var handleRemoveEventListener = function handleRemoveEventListener(ele, event, handler) {
	ele.removeEventListener(event, handler);
};

var handleDetachEvent = function handleDetachEvent(ele, event, handler) {
	ele.detachEvent('on' + event, handler);
};

var off$1 = function off(element, event, handler, propagation) {
	var _type = [{
		type: 'string',
		value: event
	}, {
		type: 'function',
		value: handler
	}];

	if (!Utils$1.typeCheck.all(_type)) {
		throw new Error(event + ' \u5FC5\u987B\u4E3Astring, ' + handler + ' \u5FC5\u987B\u4E3AFunction');
	}

	element = Utils$1.toArray(element);

	var _eventHandle = function eventHandle(e, event, handler) {
		if (document.addEventListener) {
			_eventHandle = handleRemoveEventListener;
		} else {
			_eventHandle = handleDetachEvent;
		}
		_eventHandle(e, event, handler);
	};

	element.forEach(function (e) {
		if (!e.nodeType) {
			throw e + ' \u5FC5\u987B\u4E3AHTMLElement';
		}
		_eventHandle(e, event, handler);
	});
};

var getDataSet$1 = function getDataSet(element, key) {
	if (element.length) {
		element = element[0];
	}

	if (!element.nodeType) {
		throw new Error(element + ' \u5FC5\u987B\u4E3AHTMLElement');
	}

	if (!Utils$1.isString(key)) {
		throw new Error(key + ' \u5FC5\u987B\u4E3Astring');
	}
	var val = void 0;

	if (element.dataset) {
		val = element.dataset[key];
	} else {
		val = element.getAttribute(key);
	}

	val = eval('(' + val + ')');

	return val;
};

var _getElement = function _getElement(tag) {
	if (!Utils$1.isString(tag)) {
		throw '传入的对象类型必须为string';
	}

	var isId = tag.indexOf('#') === 0;
	var isClass = tag.indexOf('.') === 0;
	var elementArray = [];

	if (document.querySelector) {
		if (isClass || !isId) {
			elementArray = document.querySelectorAll(tag);
		} else {
			elementArray.push(document.querySelector(tag));
		}
	} else if (isId || isClass) {
		tag = tag.slice(1);
		if (isId) {
			elementArray.push(document.getElementById(tag));
		} else if (isClass) {
			elementArray = document.getElementsByClassName(tag);
		} else {
			elementArray = document.getElementsByTagName(tag);
		}
	}

	elementArray = Utils$1.toArray(elementArray);

	// 拓展方法
	var extendObj = {
		addClass: function addClass(className) {
			addClass$1(this, className);
			return this;
		},
		removeClass: function removeClass(className) {
			removeClass$1(this, className);
			return this;
		},
		on: function on(event, handler, propagation) {
			return on$1(this, event, handler, propagation);
		},
		off: function off(event, handler, propagation) {
			return off$1(this, event, handler, propagation);
		},
		getDataSet: function getDataSet(key) {
			return getDataSet$1(this, key);
		},
		eq: function eq(index) {
			if (this[index]) {
				var e = Object.create(extendObj);
				e[0] = this[index];
				e.length = 1;
				return e;
			}
			return this[index];
		}
	};

	// 构建Element的原型链
	var element = Object.create(extendObj);

	// 创建类数组对象
	elementArray.forEach(function (e, index) {
		element[index] = e;
	});

	element.length = elementArray.length;

	return element;
};

var getElement$1 = function getElement(element) {
	if (Utils$1.isNull(_getElement(element))) {
		return null;
	}
	return new _getElement(element);
};

var getElement = getElement$1;
var on = on$1;
var off = off$1;
var addClass = addClass$1;
var removeClass = removeClass$1;
var getDataSet = getDataSet$1;

var Dom = {
	getElement: getElement,
	on: on,
	off: off,
	addClass: addClass,
	removeClass: removeClass,
	getDataSet: getDataSet
};

var Core$1 = {
	Dom: Dom,
	Utils: Utils$1
};

var Utils = Core$1.Utils;
var DOM = Core$1.Dom;

exports.Utils = Utils;
exports.DOM = DOM;
exports['default'] = Core$1;

Object.defineProperty(exports, '__esModule', { value: true });

})));
