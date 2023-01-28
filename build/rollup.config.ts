import { resolve } from 'node:path'
import type { RollupOptions } from 'rollup'
import nodeResolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import terser from '@rollup/plugin-terser'
import typescript from '@rollup/plugin-typescript'
import json from '@rollup/plugin-json'
import alias, { type ResolverObject } from '@rollup/plugin-alias'
import filesize from 'rollup-plugin-filesize'
import { visualizer } from 'rollup-plugin-visualizer'
import pkg from '../package.json' assert { type: 'json' }
import { banner, extensions, reporter } from './config'

const externals = [
	...Object.keys(pkg.dependencies || {}),
	...Object.keys(pkg.devDependencies || {})
]
const nodeResolver = nodeResolve({
	// Use the `package.json` "browser" field
	browser: true,
	extensions,
	preferBuiltins: true,
	exportConditions: ['node'],
	moduleDirectories: ['node_modules']
})
const iifeGlobals = {
	'js-cool': 'JsCool',
	axios: 'Axios'
}

const options: RollupOptions = {
	plugins: [
		alias({
			customResolver: nodeResolver as ResolverObject,
			entries: [
				{
					find: /^js-cool\/es\/(.+)$/,
					replacement: resolve('js-cool', 'lib', '$1')
				}
			]
		}),
		nodeResolver,
		commonjs({
			sourceMap: false
		}),
		json(),
		typescript({
			compilerOptions: {
				declaration: false,
				target: 'es5'
			}
		}),
		babel({
			babelHelpers: 'bundled',
			extensions,
			exclude: ['node_modules']
		}),
		visualizer(),
		filesize({ reporter })
	],
	external(id) {
		return ['core-js', 'axios', 'js-cool', 'regenerator-runtime', '@babel/runtime']
			.concat(externals)
			.some(k => new RegExp('^' + k).test(id))
	}
}

export default [
	{
		input: 'src/index.ts',
		output: [
			{
				file: pkg.main,
				exports: 'auto',
				format: 'cjs',
				banner
			},
			{
				file: pkg.module,
				exports: 'auto',
				format: 'es',
				banner
			},
			{
				file: 'dist/index.min.js',
				name: 'axiosExtend',
				exports: 'auto',
				format: 'iife',
				banner,
				globals: iifeGlobals,
				plugins: [terser()]
			},
			{
				file: 'dist/index.js',
				name: 'axiosExtend',
				exports: 'auto',
				format: 'iife',
				banner,
				globals: iifeGlobals
			}
		],
		...options
	}
]
