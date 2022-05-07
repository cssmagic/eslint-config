module.exports = {
	parser: 'babel-eslint',
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
		ecmaFeatures: {
			impliedStrict: true,
		},
	},
	env: {
		'browser': true,
		'node': true,	// TODO 在 node 相关规则成熟之后，把这一行去掉，用 `/node` 这个配置入口来代替
		'es6': true,
	},
	globals: {
		'Vue': false,
		'jQuery': false,
		'Zepto': false,
		'$': false,
		'_': false,
	},
}
