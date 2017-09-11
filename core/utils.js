/**
 * 判断是否为undefined
 */
export const isUndefined = function(obj) {
	return typeof obj === 'undefined';
};

/**
 * 判断是否为null
 */
export const isNull = function(obj) {
	return obj === null;
};

/**
 * 判断是否为对象
 */
export const isObject = function(obj) {
	if (isUndefined(obj) || isNull(obj)) {
		return false;
	}
	return obj.constructor === Object;
};

/**
 * 判断是否为数组
 */
export const isArray = function(obj) {
	return obj instanceof Array;
};

/**
 * 合并对象
 */
export const merge = function() {
	let newObj = {};
	let args = Array.from(arguments ? arguments : []);

	args.forEach(arg => {
		if (isObject(arg)) {
			for (let key in arg) {
				newObj[key] = arg[key];
			}
		}
	});
	return newObj;
};

export default {
	isObject,
	isArray,
	isUndefined,
	isNull,
	merge
};
