/**
 * 可用于单个或者批量的类型判断
 * @param 
 */

import { code, is } from './typeObject';
import typeIs from './typeIs';

const ARRAY = 'array';
const OBJECT = 'object';

/**
 * 根据传入的对象进行判断是否属于某种类型
 * @param {string} type 给予期待的类型
 * @param  value 具体的对象
 */
const checkObjType = function(type, value) {
	const _typeObj = is[type];
	if (_typeObj) {
		return _typeObj(value);
	}

	return false;
};

/**
 * 检查传入的对象类型为object
 * @param {object} obj 
 */
const checkFromObject = function(obj) {
	if (!is.object(obj)) {
		throw new Error(`${obj} 必须为Object类型`);
	}
	let isPass = checkObjType(obj.type, obj.value);

	return isPass;
};

/**
 * 检查传入的对象类型为array
 * @param {array} obj 
 */
const checkFromArray = function(obj, isAny) {
	let isPass = !isAny;

	if (!is.array(obj)) {
		throw new Error(`${obj} 必须为Array类型`);
	}

	obj.map(item => {
		if (isAny && checkFromObject(item)) {
			isPass = true;
		} else if (!isAny && !checkFromObject(item)) {
			isPass = false;
		}
	});

	return isPass;
};

let checkFn = {};

checkFn[code.object] = checkFromObject;
checkFn[code.array] = checkFromArray;

/**
 * 批量类型检查
 * @param {object,array} obj 
 */
const typeCheck = function(obj, isAny) {
	let isPass = true; // 赋初值
	const getCheckFn = checkFn[typeIs(obj)]; //

	if (getCheckFn) {
		isPass = getCheckFn(obj, isAny);
	}

	return isPass;
};

/**
 * 判断是否其中一个满足条件
 * @param {object} obj 
 */
const any = function(obj) {
	return typeCheck(obj, true);
};

/**
 * 判断是否全部满足条件
 * @param {object} obj 
 */
const all = function(obj) {
	return typeCheck(obj);
};

export default {
	any,
	all
};
