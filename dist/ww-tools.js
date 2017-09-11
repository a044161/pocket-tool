(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.wwTools = factory());
}(this, (function () { 'use strict';

/**
 * 获取dom元素
 */
var getElement = function getElement(tag) {
	var isId = tag.indexOf('#') === 0;
	var isClass = tag.indexOf('.') === 0;
	var element = void 0;

	if (document.querySelector) {
		element = document.querySelector(tag);
		if (element.length > 0) {
			element = document.querySelectorAll(tag);
		}
	} else if (isId || isClass) {
		tag = tag.slice(1);
		if (isId) {
			element = document.getElementById(tag);
		} else if (isClass) {
			element = document.getElementsByClassName(tag);
		} else {
			element = document.getElementsByTagName(tag);
		}
	}

	return element;
};

/**
 * 增加类名
 */
var addClass = function addClass(element, className) {
	var oldClassName = element.className.split(' ');
	var addClassName = className.split(' ');

	var newClassName = oldClassName.concat(addClassName);

	element.className = newClassName.join(' ');
};

/**
 * 删除类名
 */
var removeClass = function removeClass(element, className) {
	var oldClassName = element.className.split(' ');
	var removeClassName = className.split(' ');

	removeClassName.forEach(function (c, index) {
		var c_index = oldClassName.indexOf(c);
		if (c_index > -1) {
			oldClassName.splice(c_index, 1);
		}
	});

	element.className = oldClassName.join(' ');
};

/**
 * 增加事件监听器
 */
var on = function on(element, event, handler, propagation) {
	if (document.addEventListener) {
		if (!propagation) {
			propagation = false;
		}
		if (element && event && handler) {
			element.addEventListener(event, handler, propagation);
		}
	} else {
		if (element && event && handler) {
			element.attachEvent('on' + event, handler);
		}
	}
};

/**
 * 移除事件监听器
 */
var off = function off(element, event, handler, propagation) {
	if (document.removeEventListener) {
		if (!propagation) {
			propagation = false;
		}
		if (element && event) {
			element.removeEventListener(event, handler, propagation);
		}
	} else {
		if (element && event) {
			element.detachEvent('on' + event, handler);
		}
	}
};

/**
 * 获取dataset
 */
var getDataSet = function getDataSet(element, key) {
	var val = void 0;

	if (element.dataset) {
		val = element.dataset[key];
	} else {
		val = element.getAttribute(key);
	}

	try {
		return JSON.parse(val);
	} catch (e) {
		return val;
	}
};

var Dom = {
	getElement: getElement,
	on: on,
	off: off,
	addClass: addClass,
	removeClass: removeClass,
	getDataSet: getDataSet
};

/**
 * 判断是否为undefined
 */
var isUndefined = function isUndefined(obj) {
	return typeof obj === 'undefined';
};

/**
 * 判断是否为null
 */
var isNull = function isNull(obj) {
	return obj === null;
};

/**
 * 判断是否为对象
 */
var isObject = function isObject(obj) {
	if (isUndefined(obj) || isNull(obj)) {
		return false;
	}
	return obj.constructor === Object;
};

/**
 * 判断是否为数组
 */
var isArray = function isArray(obj) {
	return obj instanceof Array;
};

/**
 * 合并对象
 */
var merge = function merge() {
	var newObj = {};
	var args = Array.from(arguments ? arguments : []);

	args.forEach(function (arg) {
		if (isObject(arg)) {
			for (var key in arg) {
				newObj[key] = arg[key];
			}
		}
	});
	return newObj;
};

var Utils = {
	isObject: isObject,
	isArray: isArray,
	isUndefined: isUndefined,
	isNull: isNull,
	merge: merge
};

var Core$1 = {
	Dom: Dom,
	Utils: Utils
};

return Core$1;

})));
