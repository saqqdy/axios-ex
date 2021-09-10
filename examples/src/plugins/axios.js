import qs from 'qs'
import { getCookie, setCookie } from 'js-cool'
import AxiosExtend from 'axios-ex'

function setHeaders(instance) {
    const token = getCookie('token')
    instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
    if (token) {
        instance.defaults.headers.common['authorization'] = token
    }
}
// 请求拦截器
function onRequest(config, options = {}) {
    console.log(888888888888888888, options, config)
    const _time = Date.now()
    const isFormData = Object.prototype.toString.call(config.data) === '[object FormData]'
    if (config.url.indexOf('/jar') === -1) config.url = '/jar' + config.url
    if (isFormData) {
        config.data.append('_time', _time)
    } else {
        config.data = Object.assign({}, { _time }, config.data)
    }
    if (options.type == 'post') {
        config.method = 'post'
        if (!isFormData) {
            config.data = qs.stringify(config.data, { arrayFormat: 'indices', allowDots: true })
        }
    } else {
        config.method = 'get'
        config.params = config.data
        // delete config.data
    }
    console.log(300, config.data, config.params)
    return config
}
// 响应拦截器
function onResponse(res) {
    if (res.data.success) return res.data
    return Promise.reject(res.data)
}
// 请求取消
function onCancel(err) {
    console.info(err.message)
}

// ---------------------------------------------

// console.log(AxiosExtend, AxiosExtend.queue)
// console.log(Object.keys(AxiosExtend))
// console.log(AxiosExtend.__proto__)
// console.log(AxiosExtend.prototype)

const queue = new AxiosExtend({
    maxConnections: 30,
    unique: true,
    retries: 0,
    orderly: false,
    setHeaders,
    onRequest,
    onResponse,
    onCancel
})
// console.log(queue, queue.queue, queue.create)

export default function (options) {
    options.unique = options.unique ?? false
    options.orderly = options.orderly ?? false
    // 这里的unique优先级更高
    return queue.create(options)
}
