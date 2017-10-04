import Utils from '../utils/index';

const removeClass = function(element, className) {
	if (Utils.isUndefined(element.className)) {
		throw '参数1传入的对象类型必须为node object';
	}

	if (!Utils.isString(className)) {
		throw '传入的对象类型必须为string';
	}

	const oldClassName =
		element.className.length === 0 ? [] : element.className.split(' ');
	const removeClassName = className.split(' ');

	removeClassName.forEach((c, index) => {
		let c_index = oldClassName.indexOf(c);
		if (c_index > -1) {
			oldClassName.splice(c_index, 1);
		}
	});

	element.className = oldClassName.join(' ');
};

export default removeClass;
