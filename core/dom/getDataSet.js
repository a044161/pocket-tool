import Utils from '../utils/index';

const getDataSet = function(element, key) {
	if (Utils.isUndefined(element.className)) {
		throw '参数1传入的对象类型必须为node object';
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

	try {
		val = JSON.parse(val);
	} catch (e) {
		val = eval('(' + val + ')');
	}
	return val;
};

export default getDataSet;
