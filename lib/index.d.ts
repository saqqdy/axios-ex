import type { AxiosError } from 'axios';
import type { AxiosInstance } from 'axios';
import type { AxiosRequestConfig } from 'axios';
import type { AxiosResponse } from 'axios';
import type { CancelToken } from 'axios';
import type { CancelTokenSource } from 'axios';

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
    onResponse?(res: AxiosResponse<any>, requestOptions: AxiosExtendRequestOptions): AxiosResponse<any> | Promise<AxiosResponse<any>>;
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
    type?: string;
    error?: string;
}

/**
 * @param retryNumber - 默认：0
 * @return delay 毫秒
 */
export declare function exponentialDelay(retryNumber?: number): number;

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

export { }
