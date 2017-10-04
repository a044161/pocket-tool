var DOM = pocketTool.DOM;
var removeClass = DOM.removeClass;
var getElement = DOM.getElement;

var TARGET_1 = '#addclass-test';
var REMOVE_CLASS_NAME_1 = 'test-new-1';
var REMOVE_CLASS_NAME_2 = 'test-new-2 test-new-3';

describe('removeClass Test', function() {
	describe('Error 相关', function() {
		it('参数1传入[]为错误类型', function() {
			removeClass.bind([], 'none').should.throw();
		});

		it('参数1传入null为错误类型', function() {
			removeClass.bind(null, 'none').should.throw();
		});

		it('参数1传入undefined为错误类型', function() {
			removeClass.bind(undefined, 'none').should.throw();
		});

		it('参数1传入{}为错误类型', function() {
			removeClass.bind({}, 'none').should.throw();
		});

		it('参数1传入1为错误类型', function() {
			removeClass.bind(1, 'none').should.throw();
		});

		it('参数1传入function为错误类型', function() {
			removeClass.bind(function() {}, 'none').should.throw();
		});

		it('参数2传入[]为错误类型', function() {
			removeClass.bind(getElement, []).should.throw();
		});

		it('参数2传入null为错误类型', function() {
			removeClass.bind(getElement, null).should.throw();
		});

		it('参数2传入undefined为错误类型', function() {
			removeClass.bind(getElement, undefined).should.throw();
		});

		it('参数2传入{}为错误类型', function() {
			removeClass.bind(getElement, {}).should.throw();
		});

		it('参数2传入1为错误类型', function() {
			removeClass.bind(getElement, 1).should.throw();
		});

		it('参数2传入function为错误类型', function() {
			removeClass.bind(getElement, function() {}).should.throw();
		});
	});

	describe('删除类名相关', function() {
		var getElment_target_1 = getElement(TARGET_1);
		var jquery_target_1 = $(TARGET_1);

		it('删除一个类名', function() {
			removeClass(getElment_target_1, REMOVE_CLASS_NAME_1);
			getElment_target_1.className.should.be.equal(
				jquery_target_1.attr('class')
			);
		});

		it('删除两个类名', function() {
			removeClass(getElment_target_1, REMOVE_CLASS_NAME_2);
			getElment_target_1.className.should.be.equal(
				jquery_target_1.attr('class')
			);
		});
	});
});
