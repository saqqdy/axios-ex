import qs from 'qs'
import { Message } from 'element-ui'
import sets from '../config'

/**
 * @description axios
 * @param {object} ctx ctx
 * @param {Function} ctx.$axios axios
 * @param {Function} ctx.redirect redirect
 * @param {object} ctx.req req
 * @param {object} ctx.route route
 * @param {Function} inject inject
 */
export default function ({ $axios, redirect, req, route }, inject) {
	// 设置请求头
	// $axios.setHeader('Content-Type', 'application/json')
	$axios.setHeader('Content-Type', 'application/x-www-form-urlencoded')
	$axios.defaults.timeout = 15000
	// 请求回调
	$axios.onRequest(config => {
		const isJava = config.url.indexOf('/java/') === 0
		const isPartnerJava = config.url.indexOf('/partner-java/') === 0
		// let token
		if (process.server) {
			config.url = (isJava ? sets.api : isPartnerJava ? sets.info : sets.node) + config.url
		} else if (process.dev && !isJava && !isPartnerJava) {
			config.url = '/node' + config.url
		}
		const isFormData = Object.prototype.toString.call(config.data) === '[object FormData]'
		if (isFormData) {
			config.data.append('_time', Date.now())
		} else {
			config.data = Object.assign({}, { _time: Date.now() }, config.data)
		}
		if (config.type === 'post') {
			config.method = 'post'
			if (!isFormData) {
				config.data = qs.stringify(config.data, { arrayFormat: 'indices', allowDots: true })
			}
		} else {
			config.method = 'get'
			config.params = Object.assign({}, config.data)
			config.data = {}
		}
	})

	// 返回回调
	$axios.onResponse(res => {
		const { status, data } = res
		if (status === 200 && data.success) {
			return data
		}
		return Promise.reject(res)
	})

	// 错误回调
	$axios.onError(err => {
		if (err instanceof Error || err.name === 'Error') {
			// 请求错误
			Message({
				type: 'error',
				message: err.name + ': ' + err.message,
				dangerouslyUseHTMLString: true
			})
			// const errCode = err.message.match(/[\d]{3}$/)
			// if (errCode && [504, 404].includes(+errCode[0])) redirect('/404', { from: 'axios' })
		} else if (err.data.code === 9001) {
			Message({
				type: 'error',
				message: err.data.msg,
				dangerouslyUseHTMLString: true
			})
		} else {
			Message({
				type: 'error',
				message: err.data.msg,
				dangerouslyUseHTMLString: true
			})
		}
	})
}
