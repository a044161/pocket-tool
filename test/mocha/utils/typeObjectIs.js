module.exports = [
	{
		value: 'string',
		name: '字符串类型',
		expect: 'string'
	},
	{
		value: 1,
		name: '数字类型',
		expect: 'number'
	},
	{
		value: function() {},
		name: '函数类型',
		expect: 'function'
	},
	{
		value: undefined,
		name: 'undefined类型',
		expect: 'undefined'
	},
	{
		value: [],
		name: '数组类型',
		expect: 'array'
	},
	{
		value: { a: 1, b: 2 },
		name: '字面量对象类型',
		expect: 'object'
	},
	{
		value: null,
		name: 'null类型',
		expect: 'null'
	}
];
