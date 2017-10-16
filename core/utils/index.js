import _isObject from './isObject';
import _isArray from './isArray';
import _isString from './isString';
import _isUndefined from './isUndefined';
import _isFunction from './isFunction';
import _isNull from './isNull';
import _isNumber from './isNumber';
import _merge from './merge';
import _toArray from './toArray';
import _typeCheck from './typeCheck';
import _typeIs from './typeIs';
import _typeObject from './typeObject';

export const isObject = _isObject;
export const isArray = _isArray;
export const isString = _isString;
export const isUndefined = _isUndefined;
export const isFunction = _isFunction;
export const isNull = _isNull;
export const isNumber = _isNumber;
export const merge = _merge;
export const toArray = _toArray;
export const typeCheck = _typeCheck;
export const typeIs = _typeIs;
export const typeObject = _typeObject;

export default {
	isObject,
	isArray,
	isString,
	isUndefined,
	isFunction,
	isNull,
	isNumber,
	merge,
	toArray,
	typeCheck,
	typeIs,
	typeObject
};
