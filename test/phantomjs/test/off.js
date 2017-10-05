(function() {
	var DOM = pocketTool.DOM;
	var on = DOM.on;
	var off = DOM.off;
	var getElement = DOM.getElement;

	var TARGET_1 = '#on-test';

	describe('off Test', function() {
		var getElement_target_1 = getElement(TARGET_1);
		var noFn = function() {};

		describe('Error 相关', function() {
			it('参数2传入[]为错误类型', function() {
				off.bind(this, getElement_target_1, [], noFn).should.throw();
			});

			it('参数2传入null为错误类型', function() {
				off.bind(this, getElement_target_1, null, noFn).should.throw();
			});

			it('参数2传入undefined为错误类型', function() {
				off
					.bind(this, getElement_target_1, undefined, noFn)
					.should.throw();
			});

			it('参数2传入{}为错误类型', function() {
				off.bind(this, getElement_target_1, {}, noFn).should.throw();
			});

			it('参数2传入1为错误类型', function() {
				off.bind(this, getElement_target_1, 1, noFn).should.throw();
			});
			it('参数2传入function为错误类型', function() {
				off.bind(this, getElement_target_1, noFn, noFn).should.throw();
			});
			it('参数3传入[]为错误类型', function() {
				off.bind(this, getElement_target_1, 'none', []).should.throw();
			});

			it('参数3传入null为错误类型', function() {
				off
					.bind(this, getElement_target_1, 'none', null)
					.should.throw();
			});

			it('参数3传入undefined为错误类型', function() {
				on
					.bind(this, getElement_target_1, 'none', undefined)
					.should.throw();
			});

			it('参数3传入{}为错误类型', function() {
				off.bind(this, getElement_target_1, 'none', {}).should.throw();
			});

			it('参数3传入1为错误类型', function() {
				off.bind(this, getElement_target_1, 'none', 1).should.throw();
			});
		});

		describe('移除事件相关', function() {
			it('移除点击事件测试', function(done) {
				var clickVar = 0;
				var clickFn = function() {
					clickVar += 1;
				};

				on(getElement_target_1, 'click', clickFn);
				getElement_target_1.click();
				off(getElement_target_1, 'click', clickFn);
				getElement_target_1.click();

				clickVar.should.equal(1);
				done();
			});
		});
	});
})();
