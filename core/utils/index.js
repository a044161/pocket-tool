import _isObject from './isObject';
import _isArray from './isArray';
import _isString from './isString';
import _isUndefined from './isUndefined';
import _isFunction from './isFunction';
import _isNull from './isNull';
import _merge from './merge';

export const isObject = _isObject;
export const isArray = _isArray;
export const isString = _isString;
export const isUndefined = _isUndefined;
export const isFunction = _isFunction;
export const isNull = _isNull;
export const merge = _merge;

export default {
	isObject,
	isArray,
	isString,
	isUndefined,
	isFunction,
	isNull,
	merge
};
