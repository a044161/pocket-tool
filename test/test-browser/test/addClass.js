(function() {
	var DOM = pocketTool.DOM;
	var addClass = DOM.addClass;
	var getElement = DOM.getElement;

	var TARGET_1 = '#addclass-test';
	var TARGET_2 = '.addclass-test';
	var NEW_CLASS_NAME_1 = 'test-new-1';
	var NEW_CLASS_NAME_2 = 'test-new-2 test-new-3';
	var NEW_CLASS_NAME_3 = 'addclass-test test-new-1';

	describe('addClass Test', function() {
		describe('Error 相关', function() {
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
			var getElment_target_2 = getElement(TARGET_2);
			var jquery_target_2 = $(TARGET_2);

			it('根据id增加一个类名', function() {
				addClass(getElment_target_1, NEW_CLASS_NAME_1);
				getElment_target_1.className.should.equal(
					jquery_target_1.attr('class')
				);
			});

			it('根据id重复增加类名', function() {
				addClass(getElment_target_1, NEW_CLASS_NAME_1);
				getElment_target_1.className.should.equal(NEW_CLASS_NAME_1);
			});

			it('根据id增加两个类名', function() {
				addClass(getElment_target_1, NEW_CLASS_NAME_2);
				getElment_target_1.className.should.equal(
					jquery_target_1.attr('class')
				);
			});

			it('根据Class增加一个类名', function() {
				addClass(getElment_target_2, NEW_CLASS_NAME_1);
				getElment_target_2[0].className.should.equal(
					jquery_target_2.eq(0).attr('class')
				);
			});

			it('根据Class重复增加类名', function() {
				addClass(getElment_target_2, NEW_CLASS_NAME_1);
				getElment_target_2[0].className.should.equal(NEW_CLASS_NAME_3);
			});

			it('根据Class增加两个类名', function() {
				addClass(getElment_target_2, NEW_CLASS_NAME_2);
				getElment_target_2[0].className.should.equal(
					jquery_target_2.eq(0).attr('class')
				);
			});
		});
	});
})();
