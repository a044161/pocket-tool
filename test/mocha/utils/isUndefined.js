module.exports = [
	{
		value: undefined,
		name: 'Undefined',
		expect: true
	},
	{
		value: null,
		name: 'Null',
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
		value: [],
		name: 'Array',
		expect: false
	},
	{
		value: {},
		name: 'Object',
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
