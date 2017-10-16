(function() {
	var DOM = pocketTool.DOM;
	var getElement = DOM.getElement;

	var ID = '#test-id';
	var CLASS = '.test-class';
	var CLASS_DOUBLE = '.test-class.test-class-level2';
	var CLASS_CHILD = '.test-class-parent .test-class-child';
	var P = 'p';
	var NAME_TEST = '[name=test-name]';
	var DATA_TEST = '[data-test=test-data]';

	describe('getElement Test', function() {
		describe('Error相关', function() {
			it('传入[]为错误类型', function() {
				getElement.bind(this, []).should.throw();
			});

			it('传入null为错误类型', function() {
				getElement.bind(this, null).should.throw();
			});

			it('传入undefined为错误类型', function() {
				getElement.bind(this, undefined).should.throw();
			});

			it('传入{}为错误类型', function() {
				getElement.bind(this, {}).should.throw();
			});

			it('传入1为错误类型', function() {
				getElement.bind(this, 1).should.throw();
			});

			it('传入function为错误类型', function() {
				getElement.bind(this, function() {}).should.throw();
			});
		});

		describe('id相关', function() {
			var getElement_id = getElement(ID);
			var jquery_id = $(ID);

			it('无匹配ID，返回null', function() {
				should(getElement('#none')[0]).be.null();
			});

			it('成功获取到ID，则为object类型', function() {
				getElement_id.should.be.Object();
			});

			it('id的值相同，都为text-id', function() {
				getElement_id[0].id.should.equal(jquery_id.attr('id'));
			});

			it('id的内容相同，都为text-id', function() {
				getElement_id[0].innerText.should.equal(jquery_id.text());
			});
		});

		describe('class相关', function() {
			var getElement_class = getElement(CLASS);
			var jquery_class = $(CLASS);
			var getElement_class_double = getElement(CLASS_DOUBLE);
			var jquery_class_double = $(CLASS_DOUBLE);
			var getElement_class_child = getElement(CLASS_CHILD);
			var jquery_class_child = $(CLASS_CHILD);

			it('无匹配class，返回nodelist object', function() {
				getElement('.none').length.should.equal(1);
			});

			it('成功获取class，则长度大于0', function() {
				getElement_class.length.should.be.above(0);
				getElement_class_double.length.should.be.above(0);
				getElement_class_child.length.should.be.above(0);
			});

			it('class的长度相同，都为3', function() {
				getElement_class.should.have.length(jquery_class.length);
			});

			it('class的内容相同', function() {
				for (var i = 0; i < getElement_class.length; i++) {
					should(getElement_class[i].innerText).equal(
						jquery_class.eq(i).text()
					);
				}
			});

			it('两个class同级获取测试', function() {
				should(getElement_class_double[0].innerText).equal(
					jquery_class_double.eq(0).text()
				);
			});

			it('子class获取测试', function() {
				should(getElement_class_child[0].innerText).equal(
					jquery_class_child.eq(0).text()
				);
			});
		});

		describe('tag相关', function() {
			var getElement_p = getElement(P);
			var jquery_p = $(P);
			var getElement_name = getElement(NAME_TEST);
			var jquery_name = $(NAME_TEST);
			var getElement_data = getElement(DATA_TEST);
			var jquery_data = $(DATA_TEST);

			it('无匹配tag，返回nodelist object', function() {
				getElement('b').should.be.Object();
			});

			it('成功获取tag，则长度大于0', function() {
				getElement_p.length.should.be.above(0);
				getElement_name.length.should.be.above(0);
				getElement_data.length.should.be.above(0);
			});

			it('获取p标签，长度为3', function() {
				getElement_p.should.have.length(jquery_p.length);
			});

			it('获取p标签，内容相同', function() {
				for (var i = 0; i < getElement_p.length; i++) {
					should(getElement_p[i].innerText).equal(
						jquery_p.eq(i).text()
					);
				}
			});

			it('获取name="test-name"元素', function() {
				should(getElement_name[0].innerText).equal(
					jquery_name.eq(0).text()
				);
			});

			it('获取data-test="test-data"元素', function() {
				should(getElement_data[0].innerText).equal(
					jquery_data.eq(0).text()
				);
			});
		});
	});
})();
