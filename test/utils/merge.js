module.exports = [
	{
		value: [
			{
				a: 1,
				b: 2
			},
			{
				a: 2,
				b: 2
			},
			{
				c: 3
			}
		],
		name: 'abc对象合并',
		expect: {
			a: 2,
			b: 2,
			c: 3
		}
	},
	{
		name: '对象包含对象合并',
		value: [
			{},
			{
				c: {
					a: 1,
					b: 3,
					d: 3
				}
			},
			{
				b: 1
			},
			{
				c: {
					a: 1,
					b: 3,
					e: 5
				}
			}
		],
		expect: {
			c: {
				a: 1,
				b: 3,
				e: 5
			},
			b: 1
		}
	},
	{
		name: '顺序测试',
		value: [
			{
				b: 1
			},
			{
				a: 2
			},
			{
				b: '还是1'
			},
			{
				c: 3
			},
			{
				a: '还是2'
			}
		],
		expect: {
			b: '还是1',
			a: '还是2',
			c: 3
		}
	}
];
