import Utils from '../utils/index';

const removeClass = function(element, className) {
	if (element.length) {
		element = Array.from(element);
	} else {
		element = [element];
	}

	if (!Utils.isString(className)) {
		throw '传入的对象类型必须为string';
	}

	element = Array.from(element);

	element.forEach(e => {
		if (!e.nodeType) {
			throw `${e} 必须为HTMLElement`;
		}
		const oldClassName =
			e.className.length === 0 ? [] : e.className.split(' ');
		const removeClassName = className.split(' ');

		removeClassName.forEach((c, index) => {
			let c_index = oldClassName.indexOf(c);
			if (c_index > -1) {
				oldClassName.splice(c_index, 1);
			}
		});

		e.className = oldClassName.join(' ');
	});
};

export default removeClass;
