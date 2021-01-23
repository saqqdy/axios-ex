// const Axios = require('axios/lib/core/Axios')
const axios = require('./')

// axios.createEx = function createEx(instanceConfig) {
// 	console.log(32323)
// }

function $axios(options) {
	const instance = axios.create()

	// 添加一个请求拦截器
	instance.interceptors.request.use(
		config => {
			console.log(config)
			return config
		},
		err => {
			return Promise.reject(err)
		}
	)
	// 添加一个响应拦截器
	instance.interceptors.response.use(
		res => {
			if (res.data.success) return res.data
			else return Promise.reject(res.data)
		},
		err => {
			return Promise.reject(err)
		}
	)
	instance(options)
		.then(res => {
			// 成功回调
		})
		.catch(err => {
			// 失败回调
		})
}

console.log($axios, axios.create())
