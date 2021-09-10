import { AxiosError } from 'axios';
import { AxiosInstance } from 'axios';
import { AxiosRequestConfig } from 'axios';
import { AxiosResponse } from 'axios';
import { CancelToken } from 'axios';
import { CancelTokenSource } from 'axios';

/**
 * axios封装
 *
 * @return Promise
 */
declare class AxiosExtend {
    waiting: Array<AxiosExtendObject>;
    maxConnections: number;
    orderly: boolean;
    unique: boolean;
    retries: number;
    onCancel: ((error: any) => void) | null;
    constructor({ maxConnections, orderly, unique, retries, onCancel, ...defaultOptions }: AxiosExtendConfig);
    /**
     * 初始化
     */
    init(defaultOptions: AxiosExtendConfig): void;
    /**
     * 创建请求
     */
    create(options: AxiosExtendRequestOptions): Promise<any>;
}
export default AxiosExtend;

export declare interface AxiosExtendConfig {
    maxConnections?: number;
    unique?: boolean;
    retries?: number;
    orderly?: boolean;
    shouldResetTimeout?: boolean;
    retryCondition?(): boolean;
    retryDelay?(retryNumber: number, error: any): number;
    setHeaders?(instance: AxiosInstance): void;
    onRequest?(config: AxiosRequestConfig, requestOptions: AxiosExtendRequestOptions): AxiosRequestConfig | Promise<AxiosRequestConfig>;
    onRequestError?(error: any): void;
    onResponse?(res: AxiosResponse<any>): AxiosResponse<any> | Promise<AxiosResponse<any>>;
    onResponseError?(error: any): void;
    onError?(error: any): void;
    onCancel?(error: any): void;
}

export declare interface AxiosExtendCurrentStateType {
    lastRequestTime: number;
    retryCount: number;
}

export declare interface AxiosExtendObject {
    promiseKey: string;
    url: string;
    promise: Promise<any>;
    source: CancelTokenSource;
}

export declare interface AxiosExtendRequestOptions extends AxiosRequestConfig {
    [namespace]?: any;
    unique?: boolean;
    orderly?: boolean;
    requestOptions?: AxiosExtendRequestOptions;
    cancelToken?: CancelToken;
}

/**
 * @param retryNumber - 默认：0
 * @return delay 毫秒
 */
export declare function exponentialDelay(retryNumber?: number): number;

/**
 * @param  axios - any
 * @param  config - any
 */
export declare function fixConfig(axios: any, config: any): void;

/**
 * Initializes and returns the retry state for the given request/config
 * @param  config - AxiosExtendRequestOptions
 * @return currentState
 */
export declare function getCurrentState(config: AxiosExtendRequestOptions): AxiosExtendCurrentStateType;

/**
 * Returns the axios-retry options for the current request
 * @param  config - AxiosExtendRequestOptions
 * @param  defaultOptions - AxiosExtendConfig
 * @return options
 */
export declare function getRequestOptions(config: AxiosExtendRequestOptions, defaultOptions: AxiosExtendConfig): AxiosExtendConfig;

/**
 * @param error - 错误类型
 * @return boolean
 */
export declare function isIdempotentRequestError(error: any): boolean;

/**
 * @param error - 错误类型
 * @return boolean
 */
export declare function isNetworkError(error: AxiosError): boolean;

/**
 * @param error - 错误类型
 * @return boolean
 */
export declare function isNetworkOrIdempotentRequestError(error: AxiosError): boolean;

/**
 * @param error - 错误类型
 * @return boolean
 */
export declare function isRetryableError(error: AxiosError): boolean;

/**
 * @param error - 错误类型
 * @return boolean
 */
export declare function isSafeRequestError(error: any): boolean;

export declare const namespace = "axios-extend";

/**
 * 获取默认延迟时间 毫秒
 * @returns number - delay in milliseconds, always 0
 */
export declare function noDelay(): number;

export { }
