import Utils from '../utils/index';

const on = function(element, event, handler, propagation) {
	if (Utils.isUndefined(element.className)) {
		throw `${element} 必须为node object`;
	}

	if (!Utils.isString(event)) {
		throw `${event} 必须为string`;
	}

	if (!Utils.isFunction(handler)) {
		throw `${handler} 必须为Function`;
	}

	if (document.addEventListener) {
		if (!propagation) {
			propagation = false;
		}
		if (element && event && handler) {
			element.addEventListener(event, handler, propagation);
		}
	} else {
		if (element && event && handler) {
			element.attachEvent('on' + event, handler);
		}
	}
};

export default on;
