import Utils from '../utils/index';

const handleAddEventListener = function(ele, event, handler) {
	ele.addEventListener(event, handler);
};

const handleAttachEvent = function(ele, event, handler) {
	ele.attachEvent('on' + event, handler);
};

const on = function(element, event, handler, propagation) {
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
			eventHandle = handleAddEventListener;
		} else {
			eventHandle = handleAttachEvent;
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

export default on;
