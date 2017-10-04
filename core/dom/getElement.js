import Utils from '../utils/index';

const getElement = function(tag) {
	if (!Utils.isString(tag)) {
		throw '传入的对象类型必须为string';
	}

	const isId = tag.indexOf('#') === 0;
	const isClass = tag.indexOf('.') === 0;
	let element;
	if (document.querySelector) {
		if (isClass || !isId) {
			element = document.querySelectorAll(tag);
		} else {
			element = document.querySelector(tag);
		}
	} else if (isId || isClass) {
		tag = tag.slice(1);
		if (isId) {
			element = document.getElementById(tag);
		} else if (isClass) {
			element = document.getElementsByClassName(tag);
		} else {
			element = document.getElementsByTagName(tag);
		}
	}
	return element;
};

export default getElement;
