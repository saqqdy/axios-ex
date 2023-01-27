module.exports = {
	presets: [
		[
			'@babel/env',
			{
				loose: true,
				modules: 'auto',
				useBuiltIns: 'usage',
				corejs: 3,
				targets: ['> 0.1%', 'last 2 versions', 'not ie < 11']
				// exclude: ['es.promise', 'es.promise.finally']
			}
		],
		'@babel/typescript'
	],
	plugins: []
}
