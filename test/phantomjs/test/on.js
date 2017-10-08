(function() {
	var DOM = pocketTool.DOM;
	var on = DOM.on;
	var getElement = DOM.getElement;

	var TARGET_1 = '#on-test';

	describe('on Test', function() {
		var getElement_target_1 = getElement(TARGET_1);
		var noFn = function() {};

		describe('Error 相关', function() {
			it('参数1传入string为错误类型', function() {
				on.bind(this, 'getElement', 'click', noFn).should.throw();
			});

			it('参数1传入number为错误类型', function() {
				on.bind(this, 1, 'click', noFn).should.throw();
			});

			it('参数1传入null为错误类型', function() {
				on.bind(this, null, 'click', noFn).should.throw();
			});

			it('参数1传入undefined为错误类型', function() {
				on.bind(this, undefined, 'click', noFn).should.throw();
			});

			it('参数1传入boolean为错误类型', function() {
				on.bind(this, true, 'click', noFn).should.throw();
			});

			it('参数1传入function为错误类型', function() {
				on.bind(this, function() {}, 'click', noFn).should.throw();
			});

			it('参数1传入{}为错误类型', function() {
				on.bind(this, {}, 'click', noFn).should.throw();
			});

			it('参数1传入[]为错误类型', function() {
				on.bind(this, [], 'click', noFn).should.throw();
			});

			it('参数2传入[]为错误类型', function() {
				on.bind(this, getElement_target_1, [], noFn).should.throw();
			});

			it('参数2传入null为错误类型', function() {
				on.bind(this, getElement_target_1, null, noFn).should.throw();
			});

			it('参数2传入undefined为错误类型', function() {
				on
					.bind(this, getElement_target_1, undefined, noFn)
					.should.throw();
			});

			it('参数2传入{}为错误类型', function() {
				on.bind(this, getElement_target_1, {}, noFn).should.throw();
			});

			it('参数2传入1为错误类型', function() {
				on.bind(this, getElement_target_1, 1, noFn).should.throw();
			});
			it('参数2传入function为错误类型', function() {
				on.bind(this, getElement_target_1, noFn, noFn).should.throw();
			});
			it('参数3传入[]为错误类型', function() {
				on.bind(this, getElement_target_1, 'none', []).should.throw();
			});

			it('参数3传入null为错误类型', function() {
				on.bind(this, getElement_target_1, 'none', null).should.throw();
			});

			it('参数3传入undefined为错误类型', function() {
				on
					.bind(this, getElement_target_1, 'none', undefined)
					.should.throw();
			});

			it('参数3传入{}为错误类型', function() {
				on.bind(this, getElement_target_1, 'none', {}).should.throw();
			});

			it('参数3传入1为错误类型', function() {
				on.bind(this, getElement_target_1, 'none', 1).should.throw();
			});
		});

		describe('增加事件相关', function() {
			it('增加点击事件测试', function(done) {
				var clickVar = 0;
				var clickFn = function() {
					clickVar += 1;
				};
				on(getElement_target_1, 'click', clickFn);
				getElement_target_1[0].click();

				clickVar.should.equal(1);

				done();
			});
		});
	});
})();
