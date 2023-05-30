import type { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, CancelToken, CancelTokenSource } from 'axios';
export declare const namespace = "axios-extend";
export interface AxiosExtendObject {
    promiseKey: string;
    url: string;
    promise: Promise<any>;
    source: CancelTokenSource;
}
export interface AxiosExtendCurrentStateType {
    lastRequestTime: number;
    retryCount: number;
}
export interface AxiosExtendRequestOptions<D = any> extends AxiosRequestConfig<D> {
    [namespace]?: any;
    unique?: boolean;
    orderly?: boolean;
    requestOptions?: AxiosExtendRequestOptions;
    cancelToken?: CancelToken;
    type?: string;
    error?: boolean;
}
export interface AxiosExtendConfig {
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
/**
 * @param error - Error
 * @return boolean
 */
export declare function isNetworkError(error: AxiosError): boolean;
/**
 * @param error - Error
 * @return boolean
 */
export declare function isSafeRequestError(error: any): boolean;
/**
 * @param error - Error
 * @return boolean
 */
export declare function isIdempotentRequestError(error: any): boolean;
/**
 * @param error - Error
 * @return boolean
 */
export declare function isNetworkOrIdempotentRequestError(error: AxiosError): boolean;
/**
 * @param retryNumber - default: 0
 * @return delay milliseconds
 */
export declare function exponentialDelay(retryNumber?: number): number;
/**
 * @param error - Error
 * @return boolean
 */
export declare function isRetryableError(error: AxiosError): boolean;
/**
 * AxiosExtend class
 *
 * @return Promise
 */
export declare class AxiosExtend {
    waiting: Array<AxiosExtendObject>;
    maxConnections: number;
    orderly: boolean;
    unique: boolean;
    retries: number;
    onCancel: ((error: any) => void) | null;
    constructor({ maxConnections, orderly, unique, retries, onCancel, ...defaultOptions }: AxiosExtendConfig);
    /**
     * Initialization
     */
    init(defaultOptions: AxiosExtendConfig): void;
    /**
     * Create request
     */
    create(options: AxiosExtendRequestOptions): Promise<any>;
}
export { AxiosExtend as default };
