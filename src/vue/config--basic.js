// get proper parser package
let parser
let canGetParserDirectly = false
let canGetParserRelatively = false
try {
	parser = require.resolve('vue-eslint-parser')
	canGetParserDirectly = true
} catch (e) {}
try {
	parser = require.resolve('eslint-plugin-vue/node_modules/vue-eslint-parser')
	canGetParserRelatively = true
} catch (e) {}
// console.log(canGetParserDirectly)
// console.log(canGetParserRelatively)
// 如果两种方法都取不到依赖的 parser，则报错退出
if (!(canGetParserDirectly || canGetParserRelatively)) {
	console.error('Error: Cannot find module "vue-eslint-parser", please install manually:')
	console.error('Error: Run "npm i -D vue-eslint-parser", then try again.')
	process.exit(1)
}

const config = {
	parser,
	parserOptions: {
		parser: 'babel-eslint',
	},
	env: {
		'node': true,	// 因为 Vue 项目的根目录会有一些配置文件（运行在 Node 下）
	},
	plugins: [
		'vue',
	],
	'overrides': [
		{
			'files': ['*.vue'],
			'rules': {
				// 避免和 ESLint 的 'indent' 规则冲突
				// ref: https://eslint.vuejs.org/rules/script-indent.html#options
				'indent': 'off',
				// max-len 规则对 Vue 文件的检查存在两个问题：
				// (1) 模板代码本身很容易超长
				// (2) 无法忽略 SCSS 代码中超长的 DataURI
				// 我们希望这条规则只检查 <script> 中的 JS 代码，但目前似乎还无法通过配置让这条规则忽略 <template> 和 <style> 中的代码，
				// 因此决定在 Vue 文件中完全关闭此规则。
				'max-len': 'off',
			},
		},
	],
}

module.exports = config
