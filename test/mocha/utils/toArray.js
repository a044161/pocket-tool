module.exports = [
	{
		value: {
			0: 1,
			1: 2,
			2: 3,
			length: 3
		},
		name: '字面量对象',
		expect: [1, 2, 3]
	},
	{
		value: 'string',
		name: '单个字符串对象',
		expect: ['string']
	},
	{
		value: [1, 2, 3],
		name: '数组对象',
		expect: [1, 2, 3]
	},
	{
		value: undefined,
		name: 'undefined对象',
		expect: [undefined]
	},
	{
		value: null,
		name: 'null对象',
		expect: [null]
	},
	{
		value: function() {},
		name: 'function对象',
		expect: [function() {}]
	}
];
