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
    // retryDelay(retryNumber) {
    //     const delay = Math.pow(2, retryNumber) * 1000
    //     const randomSum = delay * 0.5 * Math.random() // 0-20% of the delay
    //     return delay + randomSum
    // }
})
// console.log(queue, queue.queue, queue.create)

export default function (options) {
    // queue.init({ maxConnections: 30, unique: true, retries: 3, orderly: false, setHeaders, onRequest, onResponse, onCancel })
    options.unique = options.unique ?? false
    options.orderly = options.orderly ?? false
    // 这里的unique优先级更高
    return queue.create(options)

    return new Promise((resolve, reject) => {
        queue
            .create(options)
            .then(res => {
                console.log(900, res)
                resolve(res)
            })
            .catch(err => {
                console.log(901, err)
                reject(err)
            })
        console.log(909, queue)
        // AxiosExtend
        //     .create(options, {
        //         unique: options.unique,
        //         setHeaders,
        //         onRequest,
        //         onResponse,
        //         onCancel
        //     })
        //     .then(res => {
        //         setTimeout(() => {
        //             resolve(res)
        //         }, 3000)
        //     })
        //     .catch(err => {
        //         const isLogin = location.href.indexOf('login') !== -1
        //         // 如果参数显示错误信息，则直接调用实例的catch
        //         if (options.error) {
        //             reject(err)
        //             return
        //         }
        //         // 如果是登录页面，则忽略报错
        //         if (isLogin) {
        //             return
        //         }
        //         if (err.code == 9001) {
        //             // 登录失效
        //             location.href = '/login'
        //             setCookie('token', '')
        //         } else {
        //             // 请求错误
        //             console.error(err.message)
        //         }
        //     })
    })
}
