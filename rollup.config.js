import resolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import pkg from './package.json'

const production = !process.env.ROLLUP_WATCH

export default [
	{
		input: 'src/index.js',
		output: {
			name: 'AXIOSQUEUE',
			file: 'lib/index.umd.js',
			format: 'umd'
		},
		plugins: [
			resolve(), // so Rollup can find `ms`
			commonjs(), // so Rollup can convert `ms` to an ES module
			babel({ babelHelpers: 'inline' }),
			production && terser()
		],
		external: ['core-js', 'axios', 'js-cool']
	},
	{
		input: 'src/index.js',
		output: [
			{
				file: pkg.main,
				format: 'cjs'
			},
			{
				file: 'lib/index.esm.js',
				format: 'es'
			}
		],
		plugins: [babel({ babelHelpers: 'bundled' })],
		external: ['core-js', 'axios', 'js-cool']
	}
]
