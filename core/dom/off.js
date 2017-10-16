import Utils from '../utils/index';

const handleRemoveEventListener = function(ele, event, handler) {
	ele.removeEventListener(event, handler);
};

const handleDetachEvent = function(ele, event, handler) {
	ele.detachEvent('on' + event, handler);
};

const off = function(element, event, handler, propagation) {
	const _type = [
		{
			type: 'string',
			value: event
		},
		{
			type: 'function',
			value: handler
		}
	];

	if (!Utils.typeCheck.all(_type)) {
		throw new Error(`${event} 必须为string, ${handler} 必须为Function`);
	}

	element = Utils.toArray(element);

	let eventHandle = function(e, event, handler) {
		if (document.addEventListener) {
			eventHandle = handleRemoveEventListener;
		} else {
			eventHandle = handleDetachEvent;
		}
		eventHandle(e, event, handler);
	};

	element.forEach(e => {
		if (!e.nodeType) {
			throw `${e} 必须为HTMLElement`;
		}
		eventHandle(e, event, handler);
	});
};

export default off;
