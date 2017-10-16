const isObject = require('./isObject');
const isNull = require('./isNull');
const isString = require('./isString');
const isUndefined = require('./isUndefined');
const isFunction = require('./isFunction');
const isArray = require('./isArray');
const isNumber = require('./isNumber');
const merge = require('./merge');
const typeCheckAll = require('./typeCheckAll');
const typeCheckAny = require('./typeCheckAny');
const typeIs = require('./typeIs');
const typeObjectIs = require('./typeObjectIs');
const typeObjectCode = require('./typeObjectCode');
const toArray = require('./toArray');

module.exports = {
	isObject,
	isNull,
	isString,
	isUndefined,
	isFunction,
	isArray,
	isNumber,
	merge,
	typeCheckAll,
	typeCheckAny,
	typeIs,
	typeObjectIs,
	typeObjectCode,
	toArray
};
