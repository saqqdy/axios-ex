var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import axios from 'axios';
import isRetryAllowed from 'is-retry-allowed';
import { extend, getRandomStr } from 'js-cool';
export var namespace = 'axios-extend';
var SAFE_HTTP_METHODS = ['get', 'head', 'options'];
var IDEMPOTENT_HTTP_METHODS = SAFE_HTTP_METHODS.concat(['put', 'delete']);
/**
 * Get the default delay time in milliseconds
 *
 * @private
 * @returns number - delay in milliseconds, always 0
 */
function noRetryDelay() {
    return 0;
}
/**
 * the config for retry when initialize and return
 *
 * @param  config - AxiosExtendRequestOptions
 * @return currentState
 */
function getCurrentState(config) {
    var currentState = config[namespace] || {};
    currentState.retryCount = currentState.retryCount || 0;
    config[namespace] = currentState;
    return currentState;
}
/**
 * Get the request data
 *
 * @param  config - AxiosExtendRequestOptions
 * @param  defaultOptions - AxiosExtendConfig
 * @return options
 */
function getRequestOptions(config, defaultOptions) {
    return Object.assign({}, defaultOptions, config[namespace]);
}
/**
 * Clean up agent to prevent dead loops
 *
 * @param  axios - any
 * @param  config - any
 */
function fixConfig(axios, config) {
    if (axios.defaults.agent === config.agent) {
        delete config.agent;
    }
    if (axios.defaults.httpAgent === config.httpAgent) {
        delete config.httpAgent;
    }
    if (axios.defaults.httpsAgent === config.httpsAgent) {
        delete config.httpsAgent;
    }
}
/**
 * @param error - Error
 * @return boolean
 */
export function isNetworkError(error) {
    return (!error.response &&
        Boolean(error.code) && // Prevents retrying cancelled requests
        error.code !== 'ECONNABORTED' && // Prevents retrying timed out requests
        isRetryAllowed(error)); // Prevents retrying unsafe errors
}
/**
 * @param error - Error
 * @return boolean
 */
export function isSafeRequestError(error) {
    // Cannot determine if the request can be retried
    if (!error.config)
        return false;
    return isRetryableError(error) && SAFE_HTTP_METHODS.includes(error.config.method);
}
/**
 * @param error - Error
 * @return boolean
 */
export function isIdempotentRequestError(error) {
    // Cannot determine if the request can be retried
    if (!error.config)
        return false;
    return isRetryableError(error) && IDEMPOTENT_HTTP_METHODS.includes(error.config.method);
}
/**
 * @param error - Error
 * @return boolean
 */
export function isNetworkOrIdempotentRequestError(error) {
    return isNetworkError(error) || isIdempotentRequestError(error);
}
/**
 * @param retryNumber - default: 0
 * @return delay milliseconds
 */
export function exponentialDelay(retryNumber) {
    if (retryNumber === void 0) { retryNumber = 0; }
    var delay = Math.pow(2, retryNumber) * 1000;
    var randomSum = delay * 0.5 * Math.random(); // 0-50% of the delay
    return delay + randomSum;
}
/**
 * @param error - Error
 * @return boolean
 */
export function isRetryableError(error) {
    return (error.code !== 'ECONNABORTED' &&
        (!error.response || (error.response.status >= 500 && error.response.status <= 599)));
}
/**
 * AxiosExtend class
 *
 * @return Promise
 */
var AxiosExtend = /** @class */ (function () {
    function AxiosExtend(_a) {
        var maxConnections = _a.maxConnections, orderly = _a.orderly, unique = _a.unique, retries = _a.retries, onCancel = _a.onCancel, defaultOptions = __rest(_a, ["maxConnections", "orderly", "unique", "retries", "onCancel"]);
        this.waiting = []; // Request Queue
        this.maxConnections = maxConnections !== null && maxConnections !== void 0 ? maxConnections : 0;
        this.orderly = orderly !== null && orderly !== void 0 ? orderly : true;
        this.unique = unique !== null && unique !== void 0 ? unique : false;
        this.retries = retries !== null && retries !== void 0 ? retries : 0;
        this.onCancel = onCancel !== null && onCancel !== void 0 ? onCancel : null;
        // Initialization method
        this.init(defaultOptions);
        return this;
    }
    /**
     * Initialization
     */
    AxiosExtend.prototype.init = function (defaultOptions) {
        var _this = this;
        var setHeaders = defaultOptions.setHeaders, onRequest = defaultOptions.onRequest, onRequestError = defaultOptions.onRequestError, onResponse = defaultOptions.onResponse, onResponseError = defaultOptions.onResponseError, onError = defaultOptions.onError;
        // Set request headers
        setHeaders && setHeaders(axios);
        // Adding a request interceptor
        onRequest &&
            axios.interceptors.request.use(function (config) {
                var currentState = getCurrentState(config);
                currentState.lastRequestTime = Date.now();
                if (currentState.retryCount > 0)
                    return config; // retry re-requests the interface without executing onRequest again
                return onRequest(config, config.requestOptions);
            }, function (err) {
                onRequestError && onRequestError(err);
                onError && onError(err);
                return Promise.reject(err);
            });
        // Adding a response interceptor
        onResponse &&
            axios.interceptors.response.use(function (res) {
                return onResponse(res, res.config.requestOptions);
            }, function (err) {
                var config = err.config;
                // No request config
                if (!config) {
                    onResponseError && onResponseError(err);
                    onError && onError(err);
                    return Promise.reject(err);
                }
                var _a = getRequestOptions(config, defaultOptions), _b = _a.retries, retries = _b === void 0 ? _this.retries : _b, _c = _a.retryCondition, retryCondition = _c === void 0 ? isNetworkOrIdempotentRequestError : _c, _d = _a.retryDelay, retryDelay = _d === void 0 ? noRetryDelay : _d, _e = _a.shouldResetTimeout, shouldResetTimeout = _e === void 0 ? false : _e;
                var currentState = getCurrentState(config);
                var shouldRetry = retryCondition(err) && currentState.retryCount < retries;
                if (shouldRetry) {
                    currentState.retryCount += 1;
                    var delay_1 = retryDelay(currentState.retryCount, err);
                    // Clean up agent to prevent dead loops
                    fixConfig(axios, config);
                    if (!shouldResetTimeout && config.timeout && currentState.lastRequestTime) {
                        var lastRequestDuration = Date.now() - currentState.lastRequestTime;
                        // Minimum 1ms timeout (passing 0 or less to XHR means no timeout)
                        config.timeout = Math.max(config.timeout - lastRequestDuration - delay_1, 1);
                    }
                    // Initialize request data
                    config.transformRequest = [function (data) { return data; }];
                    return new Promise(function (resolve) {
                        return setTimeout(function () { return resolve(axios(config)); }, delay_1);
                    });
                }
                onResponseError && onResponseError(err);
                onError && onError(err);
                return Promise.reject(err);
            });
    };
    /**
     * Create request
     */
    AxiosExtend.prototype.create = function (options) {
        var _this = this;
        var _a = options.unique, unique = _a === void 0 ? this.unique : _a, _b = options.orderly, orderly = _b === void 0 ? this.orderly : _b, _c = options.url, url = _c === void 0 ? '' : _c;
        var promiseKey = getRandomStr(6) + '_' + Date.now();
        var source = axios.CancelToken.source();
        options.requestOptions = extend(true, {}, options);
        options.cancelToken = source.token;
        // eslint-disable-next-line no-async-promise-executor
        var promise = new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var len, _a, _b;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!(unique || orderly)) return [3 /*break*/, 6];
                        len = this.waiting.length;
                        _c.label = 1;
                    case 1:
                        if (!(len > 0)) return [3 /*break*/, 6];
                        len--;
                        if (!(this.waiting[len].url === url)) return [3 /*break*/, 5];
                        if (!unique) return [3 /*break*/, 2];
                        this.waiting.splice(len, 1)[0].source.cancel('request canceled');
                        return [3 /*break*/, 5];
                    case 2:
                        _c.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, this.waiting[len]
                            // await this.waiting.splice(len, 1)[0].promise
                        ];
                    case 3:
                        _c.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        _a = _c.sent();
                        this.waiting.splice(len, 1);
                        console.info('the task has been dropped');
                        return [3 /*break*/, 5];
                    case 5: return [3 /*break*/, 1];
                    case 6:
                        if (!(this.maxConnections > 0 && this.waiting.length >= this.maxConnections)) return [3 /*break*/, 10];
                        _c.label = 7;
                    case 7:
                        _c.trys.push([7, 9, , 10]);
                        return [4 /*yield*/, this.waiting[0].promise
                            // await (this.waiting.shift() as AxiosExtendObject).promise
                        ];
                    case 8:
                        _c.sent();
                        return [3 /*break*/, 10];
                    case 9:
                        _b = _c.sent();
                        this.waiting.shift();
                        console.info('the task has been dropped');
                        return [3 /*break*/, 10];
                    case 10:
                        // running
                        axios(options)
                            .then(function (res) {
                            // Request success
                            resolve(res);
                        })
                            .catch(function (err) {
                            // Request cancelled
                            if (axios.isCancel(err))
                                _this.onCancel && _this.onCancel(err);
                            // Request error
                            else
                                reject(err);
                        })
                            .finally(function () {
                            var index = _this.waiting.findIndex(function (el) { return el.promiseKey === promiseKey; });
                            index > -1 && _this.waiting.splice(index, 1);
                        });
                        return [2 /*return*/];
                }
            });
        }); });
        this.waiting.push({
            promiseKey: promiseKey,
            url: url,
            promise: promise,
            source: source
        });
        return promise;
    };
    return AxiosExtend;
}());
export { AxiosExtend };
export { AxiosExtend as default };
//# sourceMappingURL=index.js.map