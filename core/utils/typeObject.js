import isObject from './isObject';
import isArray from './isArray';
import isString from './isString';
import isUndefined from './isUndefined';
import isFunction from './isFunction';
import isNull from './isNull';
import isNumber from './isNumber';

/**
 * 定义静态类型
 */
const OBJECT = 'object';
const ARRAY = 'array';
const STRING = 'string';
const FUNCTION = 'function';
const NULL = 'null';
const UNDEFINED = 'undefined';
const NUMBER = 'number';

/**
 * 类型的常量定义
 * @returns {object}
 * code.object 
 * // returns 'object'
 */
export let code = {};

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
let isType = {};

isType[OBJECT] = (function() {
	return function(obj) {
		return isObject(obj);
	};
})();

isType[ARRAY] = (function() {
	return function(obj) {
		return isArray(obj);
	};
})();

isType[STRING] = (function() {
	return function(obj) {
		return isString(obj);
	};
})();

isType[FUNCTION] = (function() {
	return function(obj) {
		return isFunction(obj);
	};
})();

isType[NULL] = (function() {
	return function(obj) {
		return isNull(obj);
	};
})();

isType[UNDEFINED] = (function() {
	return function(obj) {
		return isUndefined(obj);
	};
})();

isType[NUMBER] = (function() {
	return function(obj) {
		return isNumber(obj);
	};
})();

/**
 * 判断是否为某个类型，后面直接跟着想要判断的类型
 * @returns {object}
 * @example
 * is.string('string')
 * // returns true
 */
export const is = (function() {
	return isType;
})();

export default {
	is,
	code
};
