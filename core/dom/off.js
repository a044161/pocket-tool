import Utils from '../utils/index';

const off = function(element, event, handler, propagation) {
	if (element.length) {
		element = Array.from(element);
	} else {
		element = [element];
	}

	if (!Utils.isString(event)) {
		throw `${event} 必须为string`;
	}

	if (!Utils.isFunction(handler)) {
		throw `${handler} 必须为Function`;
	}

	element = Array.from(element);

	if (document.removeEventListener) {
		if (!propagation) {
			propagation = false;
		}
		if (element && event) {
			element.forEach(e => {
				if (!e.nodeType) {
					throw `${e} 必须为HTMLElement`;
				}
				e.removeEventListener(event, handler, propagation);
			});
		}
	} else {
		if (element && event) {
			element.forEach(e => {
				if (!e.nodeType) {
					throw `${e} 必须为HTMLElement`;
				}
				e.detachEvent('on' + event, handler);
			});
		}
	}
};

export default off;
