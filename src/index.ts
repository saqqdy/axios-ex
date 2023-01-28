import type {
	AxiosError,
	AxiosInstance,
	AxiosResponse,
	CancelToken,
	CancelTokenSource,
	InternalAxiosRequestConfig
} from 'axios'
import axios from 'axios'
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

export interface AxiosExtendRequestOptions<D = any> extends InternalAxiosRequestConfig<D> {
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
	onRequest?(
		config: InternalAxiosRequestConfig,
		requestOptions: AxiosExtendRequestOptions
	): InternalAxiosRequestConfig | Promise<InternalAxiosRequestConfig>
	onRequestError?(error: any): void
	onResponse?(
		res: AxiosResponse<any>,
		requestOptions: AxiosExtendRequestOptions
	): AxiosResponse<any> | Promise<AxiosResponse<any>>
	onResponseError?(error: any): void
	onError?(error: any): void
	onCancel?(error: any): void
}

/**
 * Get the default delay time in milliseconds
 *
 * @private
 * @returns number - delay in milliseconds, always 0
 */
function noRetryDelay() {
	return 0
}
/**
 * the config for retry when initialize and return
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
 * Get the request data
 *
 * @param  config - AxiosExtendRequestOptions
 * @param  defaultOptions - AxiosExtendConfig
 * @return options
 */
function getRequestOptions(
	config: AxiosExtendRequestOptions,
	defaultOptions: AxiosExtendConfig
): AxiosExtendConfig {
	return Object.assign({}, defaultOptions, config[namespace])
}
/**
 * Clean up agent to prevent dead loops
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
 * @param error - Error
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
 * @param error - Error
 * @return boolean
 */
export function isSafeRequestError(error: any): boolean {
	// Cannot determine if the request can be retried
	if (!error.config) return false
	return isRetryableError(error) && SAFE_HTTP_METHODS.includes(error.config.method)
}
/**
 * @param error - Error
 * @return boolean
 */
export function isIdempotentRequestError(error: any): boolean {
	// Cannot determine if the request can be retried
	if (!error.config) return false
	return isRetryableError(error) && IDEMPOTENT_HTTP_METHODS.includes(error.config.method)
}
/**
 * @param error - Error
 * @return boolean
 */
export function isNetworkOrIdempotentRequestError(error: AxiosError): boolean {
	return isNetworkError(error) || isIdempotentRequestError(error)
}
/**
 * @param retryNumber - default: 0
 * @return delay milliseconds
 */
export function exponentialDelay(retryNumber = 0) {
	const delay = Math.pow(2, retryNumber) * 1000
	const randomSum = delay * 0.5 * Math.random() // 0-50% of the delay
	return delay + randomSum
}
/**
 * @param error - Error
 * @return boolean
 */
export function isRetryableError(error: AxiosError): boolean {
	return (
		error.code !== 'ECONNABORTED' &&
		(!error.response || (error.response.status >= 500 && error.response.status <= 599))
	)
}

/**
 * AxiosExtend class
 *
 * @return Promise
 */
export class AxiosExtend {
	waiting: Array<AxiosExtendObject> = [] // Request Queue
	maxConnections: number // Maximum number of connections, default: 0, no limit
	orderly: boolean // Whether to return in order, default: true
	unique: boolean // Whether to cancel the previous similar requests, default: false
	retries: number // Number of retries, default: 0, no retries
	onCancel // Callback when request is cancelled
	constructor({
		maxConnections,
		orderly,
		unique,
		retries,
		onCancel,
		...defaultOptions
	}: AxiosExtendConfig) {
		this.maxConnections = maxConnections ?? 0
		this.orderly = orderly ?? true
		this.unique = unique ?? false
		this.retries = retries ?? 0
		this.onCancel = onCancel ?? null
		// Initialization method
		this.init(defaultOptions)
		return this
	}

	/**
	 * Initialization
	 */
	public init(defaultOptions: AxiosExtendConfig): void {
		const { setHeaders, onRequest, onRequestError, onResponse, onResponseError, onError } =
			defaultOptions
		// Set request headers
		setHeaders && setHeaders(axios)
		// Adding a request interceptor
		onRequest &&
			axios.interceptors.request.use(
				(config: InternalAxiosRequestConfig) => {
					const currentState = getCurrentState(config)
					currentState.lastRequestTime = Date.now()
					if (currentState.retryCount > 0) return config // retry re-requests the interface without executing onRequest again
					return onRequest(config, (config as any).requestOptions)
				},
				(err: any) => {
					onRequestError && onRequestError(err)
					onError && onError(err)
					return Promise.reject(err)
				}
			)
		// Adding a response interceptor
		onResponse &&
			axios.interceptors.response.use(
				res => {
					return onResponse(res, (res.config as any).requestOptions)
				},
				(err: any): Promise<any> => {
					const config: any = err.config
					// No request config
					if (!config) {
						onResponseError && onResponseError(err)
						onError && onError(err)
						return Promise.reject(err)
					}
					const {
						retries = this.retries,
						retryCondition = isNetworkOrIdempotentRequestError,
						retryDelay = noRetryDelay,
						shouldResetTimeout = false
					} = getRequestOptions(config, defaultOptions)
					const currentState = getCurrentState(config)
					const shouldRetry = retryCondition(err) && currentState.retryCount < retries
					if (shouldRetry) {
						currentState.retryCount += 1
						const delay = retryDelay(currentState.retryCount, err)

						// Clean up agent to prevent dead loops
						fixConfig(axios, config)

						if (!shouldResetTimeout && config.timeout && currentState.lastRequestTime) {
							const lastRequestDuration = Date.now() - currentState.lastRequestTime
							// Minimum 1ms timeout (passing 0 or less to XHR means no timeout)
							config.timeout = Math.max(
								config.timeout - lastRequestDuration - delay,
								1
							)
						}
						// Initialize request data
						config.transformRequest = [(data: any) => data]

						return new Promise(resolve =>
							setTimeout(() => resolve(axios(config)), delay)
						)
					}
					onResponseError && onResponseError(err)
					onError && onError(err)
					return Promise.reject(err)
				}
			)
	}

	/**
	 * Create request
	 */
	public create(options: AxiosExtendRequestOptions): Promise<any> {
		const { unique = this.unique, orderly = this.orderly, url = '' } = options
		const promiseKey = getRandomStr(6) + '_' + Date.now()
		const source: CancelTokenSource = axios.CancelToken.source()
		options.requestOptions = extend(true, {}, options) as unknown as AxiosExtendRequestOptions
		options.cancelToken = source.token
		// eslint-disable-next-line no-async-promise-executor
		const promise = new Promise(async (resolve, reject) => {
			// Interface must return in order or need to cancel url same request
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
			// There is a limit to the maximum number of connections, beyond which the maximum number of simultaneous requests can wait for at least one task to be executed
			if (this.maxConnections > 0 && this.waiting.length >= this.maxConnections) {
				try {
					await (this.waiting[0] as AxiosExtendObject).promise
					// await (this.waiting.shift() as AxiosExtendObject).promise
				} catch {
					this.waiting.shift()
					console.info('the task has been dropped')
				}
			}
			// running
			axios(options)
				.then((res: any) => {
					// Request success
					resolve(res)
				})
				.catch((err: any) => {
					// Request cancelled
					if (axios.isCancel(err)) this.onCancel && this.onCancel(err)
					// Request error
					else reject(err)
				})
				.finally(() => {
					const index = this.waiting.findIndex((el: any) => el.promiseKey === promiseKey)
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

export { AxiosExtend as default }
