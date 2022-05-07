// 此文件用于根据 Vue 项目的特点，覆盖 ESLint 预设规则

module.exports = {
	'radix': [0],	// 能运行 Vue 的浏览器均已支持 ES5+，此时 parseInt() 已经没有八进制的坑了
}
