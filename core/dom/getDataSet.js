import Utils from '../utils/index';

const getDataSet = function(element, key) {
	if (element.length) {
		element = element[0];
	}

	if (!element.nodeType) {
		throw new Error(`${element} 必须为HTMLElement`);
	}

	if (!Utils.isString(key)) {
		throw new Error(`${key} 必须为string`);
	}
	let val;

	if (element.dataset) {
		val = element.dataset[key];
	} else {
		val = element.getAttribute(key);
	}

	val = eval('(' + val + ')');

	return val;
};

export default getDataSet;
