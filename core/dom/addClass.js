import Utils from '../utils/index';

const addClass = function(element, className) {
	if (!Utils.isString(className)) {
		throw '参数2传入的对象类型必须为string';
	}

	if (element.length) {
		element = Array.from(element);
	} else {
		element = [element];
	}

	element.forEach((e, index) => {
		if (!e.nodeType) {
			throw `${e} 必须为HTMLElement`;
		}
		let oldClassName =
			e.className.length === 0 ? [] : e.className.split(' ');
		let addClassName = className.split(' ');

		addClassName.forEach((c, index) => {
			let c_index = oldClassName.indexOf(c);
			if (c_index === -1) {
				oldClassName.push(c);
			}
		});

		let newClassName = oldClassName;

		e.className = newClassName.join(' ');
	});
};

export default addClass;
