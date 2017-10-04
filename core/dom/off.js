import Utils from '../utils/index';

const off = function(element, event, handler, propagation) {
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

	if (document.removeEventListener) {
		if (!propagation) {
			propagation = false;
		}
		if (element && event) {
			element.forEach(e => {
				e.removeEventListener(event, handler, propagation);
			});
		}
	} else {
		if (element && event) {
			element.forEach(e => {
				e.detachEvent('on' + event, handler);
			});
		}
	}
};

export default off;
