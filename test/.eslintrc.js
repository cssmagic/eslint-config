const merge = require('lodash.merge')

const configJS = require('../index')
const configVue = require('../vue')

module.exports = merge({}, configJS, configVue)
