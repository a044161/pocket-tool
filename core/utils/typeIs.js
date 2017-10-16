import { is } from './typeObject';

/**
 * 判断对象为某种类型
 * @param {object} obj 
 * @returns {string}
 * 
 * @example
 * typeIs('abc')
 * // returns 'string'
 */
const typeIs = function(obj) {
	let _type;
	for (let o in is) {
		if (is[o](obj)) {
			_type = o;
		}
	}
	return _type;
};

export default typeIs;
