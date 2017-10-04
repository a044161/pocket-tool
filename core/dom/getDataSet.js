import Utils from '../utils/index';

const getDataSet = function(element, key) {
	if (element.length) {
		element = element[0];
	}

	if (!Utils.isString(key)) {
		throw '参数2传入的对象类型必须为string';
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
