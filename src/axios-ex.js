const Axios = require('axios')
const extend = require('js-cool/lib/extend')
// const cleanData = require('js-cool/lib/cleanData')
const newAxios = extend(true, {}, Axios)
const DEFAULT_MAX_CONNECTIONS = 10

function bind(fn, thisArg) {
	return function wrap() {
		var args = new Array(arguments.length)
		for (var i = 0; i < args.length; i++) {
			args[i] = arguments[i]
		}
		return fn.apply(thisArg, args)
	}
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
// function extend(a, b, thisArg) {
// 	forEach(b, function assignValue(val, key) {
// 		if (thisArg && typeof val === 'function') {
// 			a[key] = bind(val, thisArg)
// 		} else {
// 			a[key] = val
// 		}
// 	})
// 	return a
// }

// function create(maxConcurrent = DEFAULT_MAX_CONNECTIONS, queueOptions = {}) {
// 	return proxyAxios(Queue(maxConcurrent, queueOptions), axios)
// }

// ===========

const extendAxiosInstance = axios => {
	for (const key in AxiosEx) {
		axios[key] = AxiosEx[key].bind(axios)
	}
}

const createAxiosInstance = axiosOptions => {
	// Create new axios instance
	const axios = Axios.create(axiosOptions)
	axios.CancelToken = Axios.CancelToken
	axios.isCancel = Axios.isCancel

	// Extend axios proto
	extendAxiosInstance(axios)

	// Intercept to apply default headers
	axios.onRequest(config => {
		config.headers = { ...axios.defaults.headers.common, ...config.headers }
	})

	return axios
}

const config = {}

const AxiosEx = {
	// constructor(instanceConfig) {
	// 	this.qneue = []
	// },
	create(instanceConfig) {
		return createAxiosInstance(instanceConfig)
	},
	setBaseURL(baseURL) {
		this.defaults.baseURL = baseURL
	},
	setHeader(name, value, scopes = 'common') {
		for (const scope of Array.isArray(scopes) ? scopes : [scopes]) {
			if (!value) {
				delete this.defaults.headers[scope][name]
				return
			}
			this.defaults.headers[scope][name] = value
		}
	},
	setToken() {},
	onRequest() {},
	onResponse() {},
	onRequestError() {},
	onResponseError() {},
	onError() {}
}

// newAxios.create = function create(instanceConfig) {
// 	return Axios.create(instanceConfig)
// }

module.exports = AxiosEx
