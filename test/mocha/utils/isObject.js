module.exports = [
	{
		value: {},
		name: 'Object',
		expect: true
	},
	{
		value: [],
		name: 'Array',
		expect: false
	},
	{
		value: 1,
		name: 'Number',
		expect: false
	},
	{
		value: 'a',
		name: 'String',
		expect: false
	},
	{
		value: null,
		name: 'Null',
		expect: false
	},
	{
		value: undefined,
		name: 'Undefined',
		expect: false
	},
	{
		value() {
			let test = 1;
			test = null;
		},
		name: 'Function',
		expect: false
	},
	{
		value: true,
		name: 'Boolean',
		expect: false
	},
	{
		value: NaN,
		name: 'NaN',
		expect: false
	}
];
