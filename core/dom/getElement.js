import Utils from '../utils/index';

import _addClass from './addClass';
import _removeClass from './removeClass';
import _on from './on';
import _off from './off';
import _getDataSet from './getDataSet';

const _getElement = function(tag) {
	if (!Utils.isString(tag)) {
		throw '传入的对象类型必须为string';
	}

	const isId = tag.indexOf('#') === 0;
	const isClass = tag.indexOf('.') === 0;
	let elementArray = [];

	if (document.querySelector) {
		if (isClass || !isId) {
			elementArray = document.querySelectorAll(tag);
		} else {
			elementArray.push(document.querySelector(tag));
		}
	} else if (isId || isClass) {
		tag = tag.slice(1);
		if (isId) {
			elementArray.push(document.getElementById(tag));
		} else if (isClass) {
			elementArray = document.getElementsByClassName(tag);
		} else {
			elementArray = document.getElementsByTagName(tag);
		}
	}

	elementArray = Array.from(elementArray);

	// 拓展方法
	const extendObj = {
		addClass(className) {
			_addClass(this, className);
			return this;
		},
		removeClass(className) {
			_removeClass(this, className);
			return this;
		},
		on(event, handler, propagation) {
			return _on(this, event, handler, propagation);
		},
		off(event, handler, propagation) {
			return _off(this, event, handler, propagation);
		},
		getDataSet(key) {
			return _getDataSet(this, key);
		},
		eq(index) {
			if (this[index]) {
				let e = Object.create(extendObj);
				e[0] = this[index];
				e.length = 1;
				return e;
			}
			return this[index];
		}
	};

	// 构建Element的原型链
	let element = Object.create(extendObj);

	// 创建类数组对象
	elementArray.forEach((e, index) => {
		element[index] = e;
	});

	element.length = elementArray.length;

	return element;
};

const getElement = function(element) {
	if (Utils.isNull(_getElement(element))) {
		return null;
	}
	return new _getElement(element);
};

export default getElement;
