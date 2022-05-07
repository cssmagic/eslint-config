module.exports = {
	// priority-b
	'vue/html-closing-bracket-newline': [2],
	'vue/html-closing-bracket-spacing': [2],
	'vue/html-indent': [2, 'tab', { alignAttributesVertically: false }],
	'vue/html-quotes': [2],
	'vue/html-self-closing': [2, {
		html: {
			void: 'never',
			normal: 'never',
			component: 'always',
		},
		svg: 'any',
		math: 'any',
	}],
	'vue/max-attributes-per-line': [2, {
		singleline: 3,
		multiline: {
			max: 1,
			allowFirstLine: true,
		},
	}],
	'vue/mustache-interpolation-spacing': [2],
	'vue/name-property-casing': [2],
	'vue/no-spaces-around-equal-signs-in-attribute': [2],
	'vue/prop-name-casing': [2],

	// uncategorized
	'vue/array-bracket-spacing': [2],
	'vue/arrow-spacing': [2],
	'vue/block-spacing': [2],
	'vue/brace-style': [2, '1tbs', { allowSingleLine: true }],
	'vue/camelcase': [2, {
		properties: 'never',
		ignoreDestructuring: true,
		allow: ['^\\$_[a-z]+([A-Z][a-z]*)*'],
	}],
	// 'vue/comma-dangle': [2, 'always-multiline'],	// disabled due to its auto-fix bug
	'vue/dot-location': [2, 'property'],
	'vue/key-spacing': [2, {
		singleLine: {},
		multiLine: { mode: 'minimum' }
	}],
	'vue/keyword-spacing': [2],
	'vue/match-component-file-name': [2, { extensions: ['vue'], shouldMatchCase: true }],
	'vue/object-curly-spacing': [2, 'always'],
	'vue/script-indent': [2, 'tab', { baseIndent: 0, switchCase: 1 }],
	'vue/space-infix-ops': [2],
	'vue/space-unary-ops': [2, { words: true, nonwords: false }],
}
