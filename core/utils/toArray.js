import { is } from './typeObject';

/**
 * 转换为数组
 * @param obj 
 * @returns {array}
 */
const toArray = function(obj) {
	let new_array;

	if (obj && obj.length && is.string(obj)) {
		new_array = [obj];
	} else if (obj && obj.length) {
		new_array = Array.prototype.slice.call(obj);
	} else {
		new_array = [obj];
	}

	return new_array;
};

export default toArray;
