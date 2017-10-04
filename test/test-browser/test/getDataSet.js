var DOM = pocketTool.DOM;
var getDataSet = DOM.getDataSet;
var getElement = DOM.getElement;

var TYPE_STRING = '#getdataset-test-string';
var TYPE_NUMBER = '#getdataset-test-number';
var TYPE_ARRAY = '#getdataset-test-array';
var TYPE_OBJECT = '#getdataset-test-object';

describe('getDataSet Test', function() {
	var getElement_string = getElement(TYPE_STRING);
	var getElement_number = getElement(TYPE_NUMBER);
	var getElement_array = getElement(TYPE_ARRAY);
	var getElement_object = getElement(TYPE_OBJECT);
	describe('Error 相关', function() {
		it('参数1传入[]为错误类型', function() {
			getDataSet.bind([], 'none').should.throw();
		});

		it('参数1传入null为错误类型', function() {
			getDataSet.bind(null, 'none').should.throw();
		});

		it('参数1传入undefined为错误类型', function() {
			getDataSet.bind(undefined, 'none').should.throw();
		});

		it('参数1传入{}为错误类型', function() {
			getDataSet.bind({}, 'none').should.throw();
		});

		it('参数1传入1为错误类型', function() {
			getDataSet.bind(1, 'none').should.throw();
		});

		it('参数1传入function为错误类型', function() {
			getDataSet.bind(function() {}, 'none').should.throw();
		});

		it('参数2传入[]为错误类型', function() {
			getDataSet.bind(getElement_string, []).should.throw();
		});

		it('参数2传入null为错误类型', function() {
			getDataSet.bind(getElement_string, null).should.throw();
		});

		it('参数2传入undefined为错误类型', function() {
			getDataSet.bind(getElement_string, undefined).should.throw();
		});

		it('参数2传入{}为错误类型', function() {
			getDataSet.bind(getElement_string, {}).should.throw();
		});

		it('参数2传入1为错误类型', function() {
			getDataSet.bind(getElement_string, 1).should.throw();
		});

		it('参数2传入function为错误类型', function() {
			getDataSet.bind(getElement_string, function() {}).should.throw();
		});
	});

	describe('获取data-set相关', function() {
		it('key的值为字符串', function() {
			getDataSet(getElement_string, 'target')
				.should.be.String()
				.and.equal('a');
		});

		it('key的值为数值', function() {
			getDataSet(getElement_number, 'target')
				.should.be.Number()
				.and.equal(1);
		});

		it('key的值为数组', function() {
			getDataSet(getElement_array, 'target')
				.should.be.Array()
				.and.deepEqual([1, 2, 3]);
		});

		it('key的值为对象', function() {
			getDataSet(getElement_object, 'target')
				.should.be.Object()
				.and.deepEqual({ 1: 'a', 2: 'b', b: [1, 3, 4], c: { cc: 1 } });
		});
	});
});
