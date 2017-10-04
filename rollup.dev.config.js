import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';

export default {
	input: './index.js',
	plugins: [
		resolve(),
		babel({
			exclude: 'node_modules/**',
			plugins: ['external-helpers'],
			externalHelpers: true
		})
	],
	output: {
		file: './dist/pocket-tool.js',
		name: 'pocketTool',
		format: 'umd'
	}
};
