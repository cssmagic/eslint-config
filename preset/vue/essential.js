const basic = require('../../src/vue/config--basic')

let rules = {
	...require('../../src/vue/rule--_patch'),
	...require('../../src/vue/rule--base-rules'),
	...require('../../src/vue/rule--priority-a'),
	...require('../../src/vue/rule--priority-b'),
	...require('../../src/vue/rule--priority-c'),
	...require('../../src/vue/rule--uncategorized'),
}


const config = {
	...basic,
	rules,
}

module.exports = config
