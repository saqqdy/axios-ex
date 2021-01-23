'use strict'

var utils = require('axios/lib/utils')
var bind = require('axios/lib/helpers/bind')
var Axios = require('axios/lib/core/Axios')
var mergeConfig = require('axios/lib/core/mergeConfig')
var defaults = require('axios/lib/defaults')

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
	var context = new Axios(defaultConfig)
	var instance = bind(Axios.prototype.request, context)

	// Copy axios.prototype to instance
	utils.extend(instance, Axios.prototype, context)

	// Copy context to instance
	utils.extend(instance, context)

	return instance
}

// Create the default instance to be exported
var axios = createInstance(defaults)

// Expose Axios class to allow class inheritance
axios.Axios = Axios

// Factory for creating new instances
axios.create = function create(instanceConfig) {
	return createInstance(mergeConfig(axios.defaults, instanceConfig))
}

// Factory for creating new instances
axios.createEx = function create(instanceConfig) {
	return createInstance({ ...mergeConfig(axios.defaults, instanceConfig), maxConnect: 10, queueOptions: {} })
}

// Expose Cancel & CancelToken
axios.Cancel = require('axios/lib/cancel/Cancel')
axios.CancelToken = require('axios/lib/cancel/CancelToken')
axios.isCancel = require('axios/lib/cancel/isCancel')

// Expose all/spread
axios.all = function all(promises) {
	return Promise.all(promises)
}
axios.spread = require('axios/lib/helpers/spread')

// Expose isAxiosError
axios.isAxiosError = require('axios/lib/helpers/isAxiosError')

module.exports = axios

// Allow use of default import syntax in TypeScript
module.exports.default = axios
