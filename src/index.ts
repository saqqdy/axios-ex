import type {
	AxiosError,
	AxiosInstance,
	AxiosRequestConfig,
	AxiosResponse,
	CancelToken,
	CancelTokenSource,
	InternalAxiosRequestConfig
} from 'axios'
import axios from 'axios'
import isRetryAllowed from 'is-retry-allowed'
import { extend } from 'js-cool'

const SAFE_HTTP_METHODS = ['get', 'head', 'options']
const IDEMPOTENT_HTTP_METHODS = SAFE_HTTP_METHODS.concat(['put', 'delete'])

export interface AxiosExtendCurrentStateType {
	lastRequestTime: number
	retryCount: number
}

export interface AxiosExtendRequestOptions<D = any> extends AxiosRequestConfig<D> {
	['axios-extend']?: any
	unique?: boolean
	orderly?: boolean
	requestOptions?: AxiosExtendRequestOptions
	cancelToken?: CancelToken
	type?: string
	error?: boolean
}

export interface AxiosExtendConfig<D = any> extends InternalAxiosRequestConfig<D> {
	unique?: boolean
	retries?: number
	orderly?: boolean
	shouldResetTimeout?: boolean
	retryCondition?(): boolean
	retryDelay?(retryNumber: number, error: any): number
	setHeaders?(instance: AxiosInstance): void
	onRequest?(
		config: AxiosRequestConfig,
		requestOptions: AxiosExtendRequestOptions
	): AxiosRequestConfig | Promise<AxiosRequestConfig>
	onRequestError?(error: any): void
	onResponse?(
		res: AxiosResponse<any>,
		requestOptions: AxiosExtendRequestOptions
	): AxiosResponse<any> | Promise<AxiosResponse<any>>
	onResponseError?(error: any): void
	onError?(error: any): void
	onCancel?(error: any): void
}

export interface WaitingItem {
	promiseKey: symbol
	url: string
	promise: Promise<any>
	source: CancelTokenSource
	abortController: AbortController
}

export type WaitingList = Record<string, WaitingItem[]>

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
	const currentState = config['axios-extend'] || {}
	currentState.retryCount = currentState.retryCount || 0
	config['axios-extend'] = currentState
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
	return Object.assign({}, defaultOptions, config['axios-extend'])
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
	axiosInstance: AxiosInstance = null as unknown as AxiosInstance
	waiting: WaitingList = {} // Request Queue
	retries: number // Number of retries, default: 0, no retries
	unique: AxiosExtendConfig['unique'] = false // Whether to cancel the previous similar requests, default: false
	orderly: AxiosExtendConfig['orderly'] = true // Whether to return in order, default: true
	onCancel: AxiosExtendConfig['onCancel'] | null = null // Callback when request is cancelled
	constructor({ orderly, unique, retries, onCancel, ...defaultOptions }: AxiosExtendConfig) {
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
		const {
			setHeaders,
			onRequest,
			onRequestError,
			onResponse,
			onResponseError,
			onError,
			...options
		} = defaultOptions
		if (!this.axiosInstance) this.axiosInstance = axios.create(options)
		// Set request headers
		setHeaders && setHeaders(axios)
		// Adding a request interceptor
		onRequest &&
			axios.interceptors.request.use(
				(config: AxiosRequestConfig) => {
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
	public create<T = any, R = AxiosResponse<T>, D = any>(
		// url: string | AxiosExtendRequestOptions<D>,
		config: AxiosExtendRequestOptions<D>
	): Promise<R> {
		const { unique = this.unique, orderly = this.orderly, url = '' } = config
		const promiseKey = Symbol('promiseKey')
		const abortController = new AbortController()
		const source: CancelTokenSource = axios.CancelToken.source()
		config.requestOptions = extend(true, {}, config) as unknown as AxiosExtendRequestOptions
		config.cancelToken = source.token
		config.signal = abortController.signal

		// Interface must return in order or need to cancel url same request
		unique && this.clear(url)

		const promise = new Promise((resolve, reject) => {
			axios(config)
				.then(res => {
					if (!orderly) resolve(res)
					else
						this.wait(url, promiseKey).then(() => {
							resolve(res)
						})
				})
				.catch((err: any) => {
					// Request cancelled
					if (axios.isCancel(err)) this.onCancel && this.onCancel(err)
					// Request error
					else reject(err)
				})
				.finally(() => {
					const index = this.waiting[url].findIndex(el => el.promiseKey === promiseKey)
					index > -1 && this.waiting[url].splice(index, 1)
				})
		})
		this.add(url, {
			promiseKey,
			url,
			promise,
			source,
			abortController
		})
		return promise as Promise<R>
	}

	/**
	 * Drop all un-need requests
	 *
	 * @param key - the key of waiting line, usually to be the request url
	 */
	public clear(key?: string) {
		for (const url in this.waiting) {
			// no key => clean all
			if (!key || url === key) {
				const waitingList = this.waiting[url] || []

				for (const item of waitingList) {
					item.source.cancel('request canceled')
					item.abortController.abort()
				}
				this.waiting[url] = []
			}
		}
	}

	/**
	 * Waiting to resolve the item before this request
	 *
	 * @param key - the key of waiting line, usually to be the request url
	 * @param promiseKey - the unique promise key
	 * @returns - Promise<void>
	 */
	private async wait(key: string, promiseKey: symbol) {
		if (!this.orderly) return Promise.resolve()

		const waitingList = this.waiting[key] || []
		let index = waitingList.findIndex(item => item.promiseKey === promiseKey)

		while (index > 0) {
			index--
			// do not waiting self
			if (waitingList[index] && waitingList[index].promiseKey !== promiseKey) {
				try {
					await waitingList[index].promise
					// await waitingList.splice(index, 1)[0].promise
				} catch {
					console.info('The task has been dropped')
				}
				waitingList.splice(index, 1)
			}
		}
	}

	/**
	 * set item to waiting list
	 *
	 * @param key - the key of waiting line, usually to be the request url
	 * @param item - waiting object
	 */
	private add(key: string, item: WaitingItem) {
		if (!(key in this.waiting)) this.waiting[key] = []

		this.waiting[key].push(item)
	}
}

export { AxiosExtend as default }
