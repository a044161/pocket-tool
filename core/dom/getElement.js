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
	let element = [];
	if (document.querySelector) {
		if (isClass || !isId) {
			element = document.querySelectorAll(tag);
		} else {
			element.push(document.querySelector(tag));
		}
	} else if (isId || isClass) {
		tag = tag.slice(1);
		if (isId) {
			element.push(document.getElementById(tag));
		} else if (isClass) {
			element = document.getElementsByClassName(tag);
		} else {
			element = document.getElementsByTagName(tag);
		}
	}

	let __proto__ = {
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
		text(val) {
			if (val) {
				this.innerText = val;
			} else {
				return this.innerText;
			}
		}
	};
	element = Array.from(element);

	element.forEach(e => {
		if (!Utils.isNull(e)) {
			e.__proto__ = Object.assign(e.__proto__, __proto__);
		}
	});

	if (isId) {
		return element[0];
	}

	element.__proto__ = __proto__;

	return element;
};

const getElement = function(element) {
	if (Utils.isNull(_getElement(element))) {
		return null;
	}
	return new _getElement(element);
};

export default getElement;
