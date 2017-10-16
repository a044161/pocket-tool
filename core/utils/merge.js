import isObject from './isObject';
import toArray from './toArray';

const merge = function() {
	let newObj = {};
	let args = toArray(arguments);

	args.forEach(arg => {
		if (isObject(arg)) {
			for (let key in arg) {
				newObj[key] = arg[key];
			}
		}
	});
	return newObj;
};

export default merge;
