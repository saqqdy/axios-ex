import axios, { AxiosRequestConfig, CancelTokenSource, CancelToken, AxiosInstance, AxiosResponse, AxiosError } from 'axios'
import isRetryAllowed from 'is-retry-allowed'
import extend from 'js-cool/lib/extend'
import getRandomStr from 'js-cool/lib/getRandomStr'

export const namespace = 'axios-extend'

const SAFE_HTTP_METHODS = ['get', 'head', 'options']
const IDEMPOTENT_HTTP_METHODS = SAFE_HTTP_METHODS.concat(['put', 'delete'])

export interface AxiosExtendObject {
    promiseKey: string
    url: string
    promise: Promise<any>
    source: CancelTokenSource
}

export interface AxiosExtendCurrentStateType {
    lastRequestTime: number
    retryCount: number
}

export interface AxiosExtendRequestOptions extends AxiosRequestConfig {
    [namespace]?: any
    unique?: boolean
    orderly?: boolean
    requestOptions?: AxiosExtendRequestOptions
    cancelToken?: CancelToken
    type?: string
    error?: string
}

export interface AxiosExtendConfig {
    maxConnections?: number
    unique?: boolean
    retries?: number
    orderly?: boolean
    shouldResetTimeout?: boolean
    retryCondition?(): boolean
    retryDelay?(retryNumber: number, error: any): number
    setHeaders?(instance: AxiosInstance): void
    onRequest?(config: AxiosRequestConfig, requestOptions: AxiosExtendRequestOptions): AxiosRequestConfig | Promise<AxiosRequestConfig>
    onRequestError?(error: any): void
    onResponse?(res: AxiosResponse<any>, requestOptions: AxiosExtendRequestOptions): AxiosResponse<any> | Promise<AxiosResponse<any>>
    onResponseError?(error: any): void
    onError?(error: any): void
    onCancel?(error: any): void
}

/**
 * 获取默认延迟时间 毫秒
 *
 * @private
 * @returns number - delay in milliseconds, always 0
 */
function noRetryDelay() {
    return 0
}
/**
 * 初始化和返回用于retry的config
 *
 * @param  config - AxiosExtendRequestOptions
 * @return currentState
 */
function getCurrentState(config: AxiosExtendRequestOptions): AxiosExtendCurrentStateType {
    const currentState = config[namespace] || {}
    currentState.retryCount = currentState.retryCount || 0
    config[namespace] = currentState
    return currentState
}
/**
 * 获取请求数据
 *
 * @param  config - AxiosExtendRequestOptions
 * @param  defaultOptions - AxiosExtendConfig
 * @return options
 */
function getRequestOptions(config: AxiosExtendRequestOptions, defaultOptions: AxiosExtendConfig): AxiosExtendConfig {
    return Object.assign({}, defaultOptions, config[namespace])
}
/**
 * 清理agent防止死循环
 *
 * @param  axios - any
 * @param  config - any
 */
function fixConfig(axios: any, config: any): void {
    if (axios.defaults.agent === config.agent) {
        delete config.agent
    }
    if (axios.defaults.httpAgent === config.httpAgent) {
        delete config.httpAgent
    }
    if (axios.defaults.httpsAgent === config.httpsAgent) {
        delete config.httpsAgent
    }
}
/**
 * @param error - 错误类型
 * @return boolean
 */
export function isNetworkError(error: AxiosError): boolean {
    return (
        !error.response &&
        Boolean(error.code) && // Prevents retrying cancelled requests
        error.code !== 'ECONNABORTED' && // Prevents retrying timed out requests
        isRetryAllowed(error)
    ) // Prevents retrying unsafe errors
}
/**
 * @param error - 错误类型
 * @return boolean
 */
export function isSafeRequestError(error: any): boolean {
    // Cannot determine if the request can be retried
    if (!error.config) return false
    return isRetryableError(error) && SAFE_HTTP_METHODS.indexOf(error.config.method) !== -1
}
/**
 * @param error - 错误类型
 * @return boolean
 */
export function isIdempotentRequestError(error: any): boolean {
    // Cannot determine if the request can be retried
    if (!error.config) return false
    return isRetryableError(error) && IDEMPOTENT_HTTP_METHODS.indexOf(error.config.method) !== -1
}
/**
 * @param error - 错误类型
 * @return boolean
 */
export function isNetworkOrIdempotentRequestError(error: AxiosError): boolean {
    return isNetworkError(error) || isIdempotentRequestError(error)
}
/**
 * @param retryNumber - 默认：0
 * @return delay 毫秒
 */
export function exponentialDelay(retryNumber = 0) {
    const delay = Math.pow(2, retryNumber) * 1000
    const randomSum = delay * 0.5 * Math.random() // 0-50% of the delay
    return delay + randomSum
}
/**
 * @param error - 错误类型
 * @return boolean
 */
export function isRetryableError(error: AxiosError): boolean {
    return error.code !== 'ECONNABORTED' && (!error.response || (error.response.status >= 500 && error.response.status <= 599))
}

// export interface Instance {
//     waiting: Array<AxiosExtendObject> // 请求队列
//     maxConnections: number // 最大连接数，默认：0=不限制
//     orderly: boolean // 是否有序返回，默认：true
//     unique: boolean // 是否取消前面的相似请求，默认：false
//     retries: number // 重试次数，默认：0=不重试
//     // onCancel // 请求取消时的回调
//     // constructor(config: AxiosExtendConfig): AxiosExtend
//     init(defaultOptions: AxiosExtendConfig): void
//     create(options: AxiosExtendRequestOptions): Promise<any>
// }

/**
 * axios封装
 *
 * @return Promise
 */
class AxiosExtend {
    waiting: Array<AxiosExtendObject> = [] // 请求队列
    maxConnections: number // 最大连接数，默认：0=不限制
    orderly: boolean // 是否有序返回，默认：true
    unique: boolean // 是否取消前面的相似请求，默认：false
    retries: number // 重试次数，默认：0=不重试
    onCancel // 请求取消时的回调
    constructor({ maxConnections, orderly, unique, retries, onCancel, ...defaultOptions }: AxiosExtendConfig) {
        this.maxConnections = maxConnections ?? 0
        this.orderly = orderly ?? true
        this.unique = unique ?? false
        this.retries = retries ?? 0
        this.onCancel = onCancel ?? null
        // 初始化方法
        this.init(defaultOptions)
        return this
    }
    /**
     * 初始化
     */
    public init(defaultOptions: AxiosExtendConfig): void {
        const { setHeaders, onRequest, onRequestError, onResponse, onResponseError, onError } = defaultOptions
        // 设置请求头
        setHeaders && setHeaders(axios)
        // 添加一个请求拦截器
        onRequest &&
            axios.interceptors.request.use(
                config => {
                    const currentState = getCurrentState(config)
                    currentState.lastRequestTime = Date.now()
                    if (currentState.retryCount > 0) return config // retry重新请求接口不需要再次执行onRequest
                    return onRequest(config, (config as any).requestOptions)
                },
                (err: any) => {
                    onRequestError && onRequestError(err)
                    onError && onError(err)
                    return Promise.reject(err)
                }
            )
        // 添加一个响应拦截器
        onResponse &&
            axios.interceptors.response.use(
                res => {
                    return onResponse(res, (res.config as any).requestOptions)
                },
                (err: any): Promise<any> => {
                    const config: any = err.config
                    // 没有请求配置
                    if (!config) {
                        onResponseError && onResponseError(err)
                        onError && onError(err)
                        return Promise.reject(err)
                    }
                    const { retries = this.retries, retryCondition = isNetworkOrIdempotentRequestError, retryDelay = noRetryDelay, shouldResetTimeout = false } = getRequestOptions(config, defaultOptions)
                    const currentState = getCurrentState(config)
                    const shouldRetry = retryCondition(err) && currentState.retryCount < retries
                    if (shouldRetry) {
                        currentState.retryCount += 1
                        const delay = retryDelay(currentState.retryCount, err)

                        // 清理agent防止死循环
                        fixConfig(axios, config)

                        if (!shouldResetTimeout && config.timeout && currentState.lastRequestTime) {
                            const lastRequestDuration = Date.now() - currentState.lastRequestTime
                            // Minimum 1ms timeout (passing 0 or less to XHR means no timeout)
                            config.timeout = Math.max(config.timeout - lastRequestDuration - delay, 1)
                        }
                        // 初始化请求数据
                        config.transformRequest = [(data: any) => data]

                        return new Promise(resolve => setTimeout(() => resolve(axios(config)), delay))
                    }
                    onResponseError && onResponseError(err)
                    onError && onError(err)
                    return Promise.reject(err)
                }
            )
    }
    /**
     * 创建请求
     */
    public create(options: AxiosExtendRequestOptions): Promise<any> {
        const { unique = this.unique, orderly = this.orderly, url = '' } = options
        const promiseKey = getRandomStr(6) + '_' + Date.now()
        const source: CancelTokenSource = axios.CancelToken.source()
        options.requestOptions = extend(true, {}, options) as AxiosExtendRequestOptions
        options.cancelToken = source.token
        const promise = new Promise(async (resolve, reject) => {
            // 接口必须有序返回 或 需要取消url相同请求
            if (unique || orderly) {
                let len = this.waiting.length
                while (len > 0) {
                    len--
                    if (this.waiting[len].url === url) {
                        if (unique) this.waiting.splice(len, 1)[0].source.cancel('request canceled')
                        else {
                            try {
                                await this.waiting[len]
                                // await this.waiting.splice(len, 1)[0].promise
                            } catch {
                                this.waiting.splice(len, 1)
                                console.info('the task has been dropped')
                            }
                        }
                    }
                }
            }
            // 有最大连接数限制，超出了最多可同时请求的数量限制，至少等待执行一条任务
            if (this.maxConnections > 0 && this.waiting.length >= this.maxConnections) {
                try {
                    await (this.waiting[0] as AxiosExtendObject).promise
                    // await (this.waiting.shift() as AxiosExtendObject).promise
                } catch {
                    this.waiting.shift()
                    console.info('the task has been dropped')
                }
            }
            // 执行
            axios(options)
                .then((res: any) => {
                    // 成功回调
                    resolve(res)
                })
                .catch((err: any) => {
                    // 请求取消
                    if (axios.isCancel(err)) this.onCancel && this.onCancel(err)
                    // 失败回调
                    else reject(err)
                })
                .finally(() => {
                    let index = this.waiting.findIndex((el: any) => el.promiseKey === promiseKey)
                    index > -1 && this.waiting.splice(index, 1)
                })
        })
        this.waiting.push({
            promiseKey,
            url,
            promise,
            source
        })
        return promise
    }
}

export default AxiosExtend
