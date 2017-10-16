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

describe('数字判断', () => {
	runTestFn('isNumber', item => {
		it(`${item.name}${item.expect ? '为' : '不为'}数字`, () => {
			booleanFn(Utils.isNumber(item.value), item.expect);
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

describe('批量类型检查', () => {
	describe('全部满足条件', () => {
		runTestFn('typeCheckAll', item => {
			it(item.name, () => {
				let typeCheckResult = Utils.typeCheck.all(item.value);
				typeCheckResult.should.be.eql(item.expect);
			});
		});
	});
	describe('其中一个满足条件', () => {
		runTestFn('typeCheckAny', item => {
			it(item.name, () => {
				let typeCheckResult = Utils.typeCheck.any(item.value);
				typeCheckResult.should.be.eql(item.expect);
			});
		});
	});
});

describe('类型返回', () => {
	runTestFn('typeIs', item => {
		it(item.name, () => {
			let typeCheckResult = Utils.typeIs(item.value);
			typeCheckResult.should.be.eql(item.expect);
		});
	});
});

describe('typeObject.is 测试', () => {
	runTestFn('typeObjectIs', item => {
		it(item.name, () => {
			let typeCheckResult = Utils.typeObject.is[item.expect](item.value);
			typeCheckResult.should.be.true();
		});
	});
});

describe('typeObject.code 测试', () => {
	runTestFn('typeObjectCode', item => {
		it(item.name, () => {
			let typeCheckResult = Utils.typeObject.code[item.value];
			typeCheckResult.should.be.eql(item.expect);
		});
	});
});

describe('转化为数组测试', () => {
	runTestFn('toArray', item => {
		it(item.name, () => {
			let typeCheckResult = Utils.toArray(item.value);
			typeCheckResult.should.be.deepEqual(item.expect);
		});
	});
});
