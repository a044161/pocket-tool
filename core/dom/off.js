import Utils from '../utils/index';

const off = function(element, event, handler, propagation) {
	if (Utils.isUndefined(element.className)) {
		throw `${element} 必须为node object`;
	}

	if (!Utils.isString(event)) {
		throw `${event} 必须为string`;
	}

	if (!Utils.isFunction(handler)) {
		throw `${handler} 必须为Function`;
	}

	if (document.removeEventListener) {
		if (!propagation) {
			propagation = false;
		}
		if (element && event) {
			element.removeEventListener(event, handler, propagation);
		}
	} else {
		if (element && event) {
			element.detachEvent('on' + event, handler);
		}
	}
};

export default off;
