/**
 * 获取dom元素
 */
export const getElement = function(tag) {
	const isId = tag.indexOf('#') === 0;
	const isClass = tag.indexOf('.') === 0;
	let element;

	if (document.querySelector) {
		element = document.querySelector(tag);
		if (element.length > 0) {
			element = document.querySelectorAll(tag);
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

/**
 * 增加类名
 */
export const addClass = function(element, className) {
	const oldClassName = element.className.split(' ');
	const addClassName = className.split(' ');

	const newClassName = oldClassName.concat(addClassName);

	element.className = newClassName.join(' ');
};

/**
 * 删除类名
 */
export const removeClass = function(element, className) {
	const oldClassName = element.className.split(' ');
	const removeClassName = className.split(' ');

	removeClassName.forEach((c, index) => {
		let c_index = oldClassName.indexOf(c);
		if (c_index > -1) {
			oldClassName.splice(c_index, 1);
		}
	});

	element.className = oldClassName.join(' ');
};

/**
 * 增加事件监听器
 */
export const on = function(element, event, handler, propagation) {
	if (document.addEventListener) {
		if (!propagation) {
			propagation = false;
		}
		if (element && event && handler) {
			element.addEventListener(event, handler, propagation);
		}
	} else {
		if (element && event && handler) {
			element.attachEvent('on' + event, handler);
		}
	}
};

/**
 * 移除事件监听器
 */
export const off = function(element, event, handler, propagation) {
	if (document.removeEventListener) {
		if (!propagation) {
			propagation = false;
		}
		if (element && event) {
			element.removeEventListener(event, handler, propagation);
		}
	} else {
		if (element && event) {
			element.detachEvent('on' + event, handler);
		}
	}
};

/**
 * 获取dataset
 */
export const getDataSet = function(element, key) {
	let val;

	if (element.dataset) {
		val = element.dataset[key];
	} else {
		val = element.getAttribute(key);
	}

	try {
		return JSON.parse(val);
	} catch (e) {
		return val;
	}
};

export default {
	getElement,
	on,
	off,
	addClass,
	removeClass,
	getDataSet
};
