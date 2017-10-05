const should = require('should');
const Utils = require('../../dist/pocket-tool').Utils;

const utilsCase = require('./utils');

// 结果为boolean类型的判断
function booleanFn(target, expect) {
	if (expect) {
		target.should.be.true();
	} else {
		target.should.be.false();
	}
}

function runTestFn(type, itemCb) {
	let testItemObj = utilsCase[type];
	testItemObj.map(item => {
		itemCb(item);
	});
}

describe('undefined判断', () => {
	runTestFn('isUndefined', item => {
		it(`${item.name}${item.expect ? '为' : '不为'}undefined`, () => {
			booleanFn(Utils.isUndefined(item.value), item.expect);
		});
	});
});

describe('null判断', () => {
	runTestFn('isNull', item => {
		it(`${item.name}${item.expect ? '为' : '不为'}null`, () => {
			booleanFn(Utils.isNull(item.value), item.expect);
		});
	});
});

describe('string判断', () => {
	runTestFn('isString', item => {
		it(`${item.name}${item.expect ? '为' : '不为'}string`, () => {
			booleanFn(Utils.isString(item.value), item.expect);
		});
	});
});

describe('function判断', () => {
	runTestFn('isFunction', item => {
		it(`${item.name}${item.expect ? '为' : '不为'}function`, () => {
			booleanFn(Utils.isFunction(item.value), item.expect);
		});
	});
});

describe('对象判断', () => {
	runTestFn('isObject', item => {
		it(`${item.name}${item.expect ? '为' : '不为'}对象`, () => {
			booleanFn(Utils.isObject(item.value), item.expect);
		});
	});
});

describe('数组判断', () => {
	runTestFn('isArray', item => {
		it(`${item.name}${item.expect ? '为' : '不为'}数组`, () => {
			booleanFn(Utils.isArray(item.value), item.expect);
		});
	});
});

describe('合并对象', () => {
	runTestFn('merge', item => {
		it(item.name, () => {
			let mergeResult = Utils.merge(...item.value);
			mergeResult.should.be.eql(item.expect);
		});
	});
});
