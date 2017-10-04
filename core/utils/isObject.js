import isUndefined from './isUndefined';
import isNull from './isNull';

const isObject = function(obj) {
	if (isUndefined(obj) || isNull(obj)) {
		return false;
	}
	return obj.constructor === Object;
};

export default isObject;
