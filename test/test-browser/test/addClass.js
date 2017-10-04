var DOM = pocketTool.DOM;
var addClass = DOM.addClass;
var getElement = DOM.getElement;

var TARGET_1 = '#addclass-test';
var NEW_CLASS_NAME_1 = 'test-new-1';
var NEW_CLASS_NAME_2 = 'test-new-2 test-new-3';

describe('addClass Test', function() {
	describe('Error 相关', function() {
		it('参数1传入[]为错误类型', function() {
			addClass.bind([], 'none').should.throw();
		});

		it('参数1传入null为错误类型', function() {
			addClass.bind(null, 'none').should.throw();
		});

		it('参数1传入undefined为错误类型', function() {
			addClass.bind(undefined, 'none').should.throw();
		});

		it('参数1传入{}为错误类型', function() {
			addClass.bind({}, 'none').should.throw();
		});

		it('参数1传入1为错误类型', function() {
			addClass.bind(1, 'none').should.throw();
		});

		it('参数1传入function为错误类型', function() {
			addClass.bind(function() {}, 'none').should.throw();
		});

		it('参数2传入[]为错误类型', function() {
			addClass.bind(getElement, []).should.throw();
		});

		it('参数2传入null为错误类型', function() {
			addClass.bind(getElement, null).should.throw();
		});

		it('参数2传入undefined为错误类型', function() {
			addClass.bind(getElement, undefined).should.throw();
		});

		it('参数2传入{}为错误类型', function() {
			addClass.bind(getElement, {}).should.throw();
		});

		it('参数2传入1为错误类型', function() {
			addClass.bind(getElement, 1).should.throw();
		});

		it('参数2传入function为错误类型', function() {
			addClass.bind(getElement, function() {}).should.throw();
		});
	});

	describe('增加类名相关', function() {
		var getElment_target_1 = getElement(TARGET_1);
		var jquery_target_1 = $(TARGET_1);

		it('增加一个类名', function() {
			addClass(getElment_target_1, NEW_CLASS_NAME_1);
			getElment_target_1.className.should.be.equal(
				jquery_target_1.attr('class')
			);
		});

		it('重复增加类名', function() {
			addClass(getElment_target_1, NEW_CLASS_NAME_1);
			getElment_target_1.className.should.be.equal(NEW_CLASS_NAME_1);
		});

		it('增加两个类名', function() {
			addClass(getElment_target_1, NEW_CLASS_NAME_2);
			getElment_target_1.className.should.be.equal(
				jquery_target_1.attr('class')
			);
		});
	});
});
