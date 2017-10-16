module.exports = [
	{
		value: [
			{
				type: 'string',
				value: 'string'
			},
			{
				type: 'null',
				value: null
			},
			{
				type: 'array',
				value: []
			}
		],
		name: '全部正确',
		expect: true
	},
	{
		value: [
			{
				type: 'sadasd',
				value: 'string'
			}
		],
		name: '不存在的类型判断',
		expect: false
	},
	{
		value: [
			{
				type: 'number',
				value: 'string'
			},
			{
				type: 'null',
				value: 'null'
			},
			{
				type: 'array',
				value: '[]'
			}
		],
		name: '全部错误',
		expect: false
	},
	{
		value: [
			{
				type: 'number',
				value: 'string'
			},
			{
				type: 'null',
				value: null
			},
			{
				type: 'array',
				value: []
			},
			{
				type: 'string',
				value: []
			},
			{
				type: 'object',
				value: []
			},
			{
				type: 'function',
				value: []
			},
			{
				type: 'undefined',
				value: []
			}
		],
		name:
			'number + null + array + string + object + function + undefined 错误',
		expect: false
	},
	{
		value: [
			{
				type: 'number',
				value: 1
			},
			{
				type: 'null',
				value: null
			},
			{
				type: 'array',
				value: []
			},
			{
				type: 'string',
				value: 'abc'
			},
			{
				type: 'object',
				value: { a: 1, b: 2 }
			},
			{
				type: 'function',
				value: function() {
					console.log('aaa');
				}
			},
			{
				type: 'undefined',
				value: undefined
			}
		],
		name:
			'number + null + array + string + object + function + undefined 正确',
		expect: true
	},
	{
		value: [
			{
				type: 'number',
				value: 'a'
			},
			{
				type: 'null',
				value: null
			},
			{
				type: 'array',
				value: []
			},
			{
				type: 'string',
				value: 'abc'
			},
			{
				type: 'object',
				value: { a: 1, b: 2 }
			},
			{
				type: 'function',
				value: function() {
					console.log('aaa');
				}
			},
			{
				type: 'undefined',
				value: undefined
			}
		],
		name: '第1个类型就为错误，结果为false',
		expect: false
	},
	{
		value: [
			{
				type: 'number',
				value: 1111
			},
			{
				type: 'null',
				value: 'null'
			},
			{
				type: 'array',
				value: []
			},
			{
				type: 'string',
				value: 'abc'
			},
			{
				type: 'object',
				value: { a: 1, b: 2 }
			},
			{
				type: 'function',
				value: function() {
					console.log('aaa');
				}
			},
			{
				type: 'undefined',
				value: undefined
			}
		],
		name: '第2个类型就为错误，结果为false',
		expect: false
	},
	{
		value: [
			{
				type: 'number',
				value: 11111
			},
			{
				type: 'null',
				value: null
			},
			{
				type: 'array',
				value: '[]'
			},
			{
				type: 'string',
				value: 'abc'
			},
			{
				type: 'object',
				value: { a: 1, b: 2 }
			},
			{
				type: 'function',
				value: function() {
					console.log('aaa');
				}
			},
			{
				type: 'undefined',
				value: undefined
			}
		],
		name: '第3个类型就为错误，结果为false',
		expect: false
	},
	{
		value: [
			{
				type: 'number',
				value: 123123
			},
			{
				type: 'null',
				value: null
			},
			{
				type: 'array',
				value: []
			},
			{
				type: 'string',
				value: 12312
			},
			{
				type: 'object',
				value: { a: 1, b: 2 }
			},
			{
				type: 'function',
				value: function() {
					console.log('aaa');
				}
			},
			{
				type: 'undefined',
				value: undefined
			}
		],
		name: '第4个类型就为错误，结果为false',
		expect: false
	},
	{
		value: [
			{
				type: 'number',
				value: 1312312
			},
			{
				type: 'null',
				value: null
			},
			{
				type: 'array',
				value: []
			},
			{
				type: 'string',
				value: 'abc'
			},
			{
				type: 'object',
				value: '{ a: 1, b: 2 }'
			},
			{
				type: 'function',
				value: function() {
					console.log('aaa');
				}
			},
			{
				type: 'undefined',
				value: undefined
			}
		],
		name: '第5个类型就为错误，结果为false',
		expect: false
	},
	{
		value: [
			{
				type: 'number',
				value: 1111
			},
			{
				type: 'null',
				value: null
			},
			{
				type: 'array',
				value: []
			},
			{
				type: 'string',
				value: 'abc'
			},
			{
				type: 'object',
				value: { a: 1, b: 2 }
			},
			{
				type: 'function',
				value: 'czxczxc'
			},
			{
				type: 'undefined',
				value: undefined
			}
		],
		name: '第6个类型就为错误，结果为false',
		expect: false
	},
	{
		value: [
			{
				type: 'number',
				value: 23192803
			},
			{
				type: 'null',
				value: null
			},
			{
				type: 'array',
				value: []
			},
			{
				type: 'string',
				value: 'abc'
			},
			{
				type: 'object',
				value: { a: 1, b: 2 }
			},
			{
				type: 'function',
				value: function() {
					console.log('aaa');
				}
			},
			{
				type: 'undefined',
				value: 'undefined'
			}
		],
		name: '第7个类型就为错误，结果为false',
		expect: false
	}
];
