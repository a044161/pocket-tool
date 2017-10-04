import Utils from '../utils/index';

const on = function(element, event, handler, propagation) {
	if (!Utils.isString(event)) {
		throw `${event} 必须为string`;
	}

	if (!Utils.isFunction(handler)) {
		throw `${handler} 必须为Function`;
	}

	if (!element.length) {
		element = [element];
	} else {
		element = Array.from(element);
	}

	if (document.addEventListener) {
		if (!propagation) {
			propagation = false;
		}
		if (element && event && handler) {
			element.forEach(e => {
				e.addEventListener(event, handler, propagation);
			});
		}
	} else {
		if (element && event && handler) {
			element.forEach(e => {
				e.attachEvent('on' + event, handler);
			});
		}
	}
};

export default on;
