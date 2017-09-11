import babel from 'rollup-plugin-babel';

export default {
	input: './index.js',
	plugins: [
		babel({
			exclude: 'node_modules/**',
			plugins: ['external-helpers'],
			externalHelpers: true
		})
	],
	output: {
		file: './dist/ww-tools.js',
		name: 'wwTools',
		format: 'umd'
	}
};
