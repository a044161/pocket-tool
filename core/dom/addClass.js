import Utils from '../utils/index';

const addClass = function(element, className) {
	if (Utils.isUndefined(element.className)) {
		throw '参数1传入的对象类型必须为node object';
	}

	if (!Utils.isString(className)) {
		throw '参数2传入的对象类型必须为string';
	}

	const oldClassName =
		element.className.length === 0 ? [] : element.className.split(' ');
	const addClassName = className.split(' ');

	addClassName.forEach((c, index) => {
		let c_index = oldClassName.indexOf(c);
		if (c_index === -1) {
			oldClassName.push(c);
		}
	});

	const newClassName = oldClassName;

	element.className = newClassName.join(' ');
};

export default addClass;
