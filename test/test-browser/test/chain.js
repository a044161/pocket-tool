(function() {
	var DOM = pocketTool.DOM;
	var getElement = DOM.getElement;

	var TARGET_1 = '#chain-test';
	var TARGET_2 = '.chain-test';
	var TARGET_3 = '#chain-test-data';
	var TARGET_4 = '.chain-test-data';

	var NEW_CLASS_NAME_1 = 'chain-test-1';
	var NEW_CLASS_NAME_2 = 'chain-test-2';

	var DATA_TEST = 'test';

	describe('链式调用测试', function() {
		describe('根据ID获取', function() {
			var getElement_target_1 = getElement(TARGET_1);
			var jquery_target_1 = $(TARGET_1);
			var getElement_target_3 = getElement(TARGET_3);
			var jquery_target_3 = $(TARGET_3);

			it('getElement + addClass', function() {
				getElement_target_1.addClass(NEW_CLASS_NAME_1);
				getElement_target_1.className.should.equal(
					jquery_target_1.attr('class')
				);
			});

			it('getElement + removeClass', function() {
				getElement_target_1.removeClass(NEW_CLASS_NAME_1);
				getElement_target_1.className.should.equal(
					jquery_target_1.attr('class')
				);
			});

			it('getElement + addClass + removeClass', function() {
				getElement_target_1
					.addClass(NEW_CLASS_NAME_1)
					.removeClass(NEW_CLASS_NAME_1);
				getElement_target_1.className.should.equal(
					jquery_target_1.attr('class')
				);
			});

			it('getElement + getDataSet', function() {
				getElement_target_3.getDataSet(DATA_TEST).should.equal(1);
			});

			it('getElement + on', function(done) {
				var clickVar = 0;
				var clickFn = function() {
					clickVar += 1;
				};
				getElement_target_3.on('click', clickFn);
				getElement_target_3.click();
				clickVar.should.equal(1);

				done();
			});

			it('getElement + off', function(done) {
				var clickVar = 0;
				var clickFn = function() {
					clickVar += 1;
				};

				getElement_target_3.on('click', clickFn);
				getElement_target_3.click();
				getElement_target_3.off('click', clickFn);
				getElement_target_3.click();
				clickVar.should.equal(1);
				done();
			});
		});

		describe('根据Class获取', function() {
			var getElement_target_2 = getElement(TARGET_2);
			var jquery_target_2 = $(TARGET_2);
			var getElement_target_4 = getElement(TARGET_4);
			var jquery_target_4 = $(TARGET_4);

			it('getElement + addClass', function() {
				getElement_target_2.addClass(NEW_CLASS_NAME_2);
				getElement_target_2[0].className.should.equal(
					jquery_target_2.eq(0).attr('class')
				);
			});

			it('getElement + removeClass', function() {
				getElement_target_2.removeClass(NEW_CLASS_NAME_2);
				getElement_target_2[0].className.should.equal(
					jquery_target_2.eq(0).attr('class')
				);
			});

			it('getElement + addClass + removeClass', function() {
				getElement_target_2
					.addClass(NEW_CLASS_NAME_2)
					.removeClass(NEW_CLASS_NAME_2);
				getElement_target_2[0].className.should.equal(
					jquery_target_2.eq(0).attr('class')
				);
			});

			it('getElement + getDataSet', function() {
				getElement_target_4.getDataSet(DATA_TEST).should.equal(1);
			});

			it('getElement + on', function(done) {
				var clickVar = 0;
				var clickFn = function() {
					clickVar += 1;
				};
				getElement_target_2.on('click', clickFn);
				getElement_target_2[0].click();
				clickVar.should.equal(1);

				done();
			});

			it('getElement + off', function(done) {
				var clickVar = 0;
				var clickFn = function() {
					clickVar += 1;
				};

				getElement_target_2.on('click', clickFn);
				getElement_target_2[0].click();
				getElement_target_2.off('click', clickFn);
				getElement_target_2[0].click();
				clickVar.should.equal(1);
				done();
			});
		});
	});
})();
