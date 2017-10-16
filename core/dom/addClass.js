import Utils from '../utils/index';

const addClass = function(element, className) {
	if (!Utils.isString(className)) {
		throw new Error(`${className} 必须为string`);
	}

	element = Utils.toArray(element);

	element.forEach((e, index) => {
		if (!e.nodeType) {
			throw new Error(`${e} 必须为HTMLElement`);
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
