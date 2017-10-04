import isObject from './isObject';

const merge = function() {
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

export default merge;
