import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';
import resolve from 'rollup-plugin-node-resolve';

import { minify } from 'uglify-es';

export default {
	input: './index.js',
	plugins: [
		resolve(),
		babel({
			exclude: 'node_modules/**',
			plugins: ['external-helpers'],
			externalHelpers: true
		}),
		uglify({}, minify)
	],
	output: {
		file: './dist/pocket-tool.js',
		name: 'pocketTool',
		format: 'umd'
	}
};
