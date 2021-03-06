const basic = require('../src/config--basic')

let rules = {
	...require('../src/rule--possible-errors'),
	...require('../src/rule--best-practices'),
	...require('../src/rule--strict-mode'),
	...require('../src/rule--variables'),
	...require('../src/rule--stylistic-issues--critical'),
	...require('../src/rule--ecmascript-6'),
}


const config = {
	...basic,
	rules,
}

module.exports = config
