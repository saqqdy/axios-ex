/*!
 * axios-ex v2.2.3
 * axios extend
 * (c) 2021-2021 saqqdy 
 * Released under the MIT License.
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('regenerator-runtime/runtime.js');
require('core-js/modules/es.array.concat.js');
require('core-js/modules/es.object.assign.js');
require('core-js/modules/es.array.index-of.js');
require('core-js/modules/es.date.now.js');
require('core-js/modules/es.date.to-string.js');
require('core-js/modules/es.object.to-string.js');
require('core-js/modules/es.promise.js');
require('core-js/modules/web.timers.js');
require('core-js/modules/es.array.splice.js');
require('core-js/modules/es.promise.finally.js');
require('core-js/modules/es.array.find-index.js');
var axios = require('axios');
var extend = require('js-cool/lib/extend');
var getRandomStr = require('js-cool/lib/getRandomStr');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var axios__default = /*#__PURE__*/_interopDefaultLegacy(axios);
var extend__default = /*#__PURE__*/_interopDefaultLegacy(extend);
var getRandomStr__default = /*#__PURE__*/_interopDefaultLegacy(getRandomStr);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

const denyList = new Set([
	'ENOTFOUND',
	'ENETUNREACH',

	// SSL errors from https://github.com/nodejs/node/blob/fc8e3e2cdc521978351de257030db0076d79e0ab/src/crypto/crypto_common.cc#L301-L328
	'UNABLE_TO_GET_ISSUER_CERT',
	'UNABLE_TO_GET_CRL',
	'UNABLE_TO_DECRYPT_CERT_SIGNATURE',
	'UNABLE_TO_DECRYPT_CRL_SIGNATURE',
	'UNABLE_TO_DECODE_ISSUER_PUBLIC_KEY',
	'CERT_SIGNATURE_FAILURE',
	'CRL_SIGNATURE_FAILURE',
	'CERT_NOT_YET_VALID',
	'CERT_HAS_EXPIRED',
	'CRL_NOT_YET_VALID',
	'CRL_HAS_EXPIRED',
	'ERROR_IN_CERT_NOT_BEFORE_FIELD',
	'ERROR_IN_CERT_NOT_AFTER_FIELD',
	'ERROR_IN_CRL_LAST_UPDATE_FIELD',
	'ERROR_IN_CRL_NEXT_UPDATE_FIELD',
	'OUT_OF_MEM',
	'DEPTH_ZERO_SELF_SIGNED_CERT',
	'SELF_SIGNED_CERT_IN_CHAIN',
	'UNABLE_TO_GET_ISSUER_CERT_LOCALLY',
	'UNABLE_TO_VERIFY_LEAF_SIGNATURE',
	'CERT_CHAIN_TOO_LONG',
	'CERT_REVOKED',
	'INVALID_CA',
	'PATH_LENGTH_EXCEEDED',
	'INVALID_PURPOSE',
	'CERT_UNTRUSTED',
	'CERT_REJECTED',
	'HOSTNAME_MISMATCH'
]);

// TODO: Use `error?.code` when targeting Node.js 14
function isRetryAllowed(error) {
	return !denyList.has(error && error.code);
}

var namespace = 'axios-extend';
var SAFE_HTTP_METHODS = ['get', 'head', 'options'];
var IDEMPOTENT_HTTP_METHODS = SAFE_HTTP_METHODS.concat(['put', 'delete']);
/**
 * 获取默认延迟时间 毫秒
 *
 * @private
 * @returns number - delay in milliseconds, always 0
 */

function noRetryDelay() {
  return 0;
}
/**
 * 初始化和返回用于retry的config
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
 * 获取请求数据
 *
 * @param  config - AxiosExtendRequestOptions
 * @param  defaultOptions - AxiosExtendConfig
 * @return options
 */


function getRequestOptions(config, defaultOptions) {
  return Object.assign({}, defaultOptions, config[namespace]);
}
/**
 * 清理agent防止死循环
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
 * @param error - 错误类型
 * @return boolean
 */


function isNetworkError(error) {
  return !error.response && Boolean(error.code) && // Prevents retrying cancelled requests
  error.code !== 'ECONNABORTED' && // Prevents retrying timed out requests
  isRetryAllowed(error); // Prevents retrying unsafe errors
}
/**
 * @param error - 错误类型
 * @return boolean
 */

function isSafeRequestError(error) {
  // Cannot determine if the request can be retried
  if (!error.config) return false;
  return isRetryableError(error) && SAFE_HTTP_METHODS.indexOf(error.config.method) !== -1;
}
/**
 * @param error - 错误类型
 * @return boolean
 */

function isIdempotentRequestError(error) {
  // Cannot determine if the request can be retried
  if (!error.config) return false;
  return isRetryableError(error) && IDEMPOTENT_HTTP_METHODS.indexOf(error.config.method) !== -1;
}
/**
 * @param error - 错误类型
 * @return boolean
 */

function isNetworkOrIdempotentRequestError(error) {
  return isNetworkError(error) || isIdempotentRequestError(error);
}
/**
 * @param retryNumber - 默认：0
 * @return delay 毫秒
 */

function exponentialDelay(retryNumber) {
  if (retryNumber === void 0) {
    retryNumber = 0;
  }

  var delay = Math.pow(2, retryNumber) * 1000;
  var randomSum = delay * 0.5 * Math.random(); // 0-50% of the delay

  return delay + randomSum;
}
/**
 * @param error - 错误类型
 * @return boolean
 */

function isRetryableError(error) {
  return error.code !== 'ECONNABORTED' && (!error.response || error.response.status >= 500 && error.response.status <= 599);
}
/**
 * axios封装
 *
 * @return Promise
 */

var AxiosExtend = /*#__PURE__*/function () {
  function AxiosExtend(_a) {
    var maxConnections = _a.maxConnections,
        orderly = _a.orderly,
        unique = _a.unique,
        retries = _a.retries,
        onCancel = _a.onCancel,
        defaultOptions = __rest(_a, ["maxConnections", "orderly", "unique", "retries", "onCancel"]);

    this.waiting = []; // 请求队列

    this.maxConnections = maxConnections !== null && maxConnections !== void 0 ? maxConnections : 0;
    this.orderly = orderly !== null && orderly !== void 0 ? orderly : true;
    this.unique = unique !== null && unique !== void 0 ? unique : false;
    this.retries = retries !== null && retries !== void 0 ? retries : 0;
    this.onCancel = onCancel !== null && onCancel !== void 0 ? onCancel : null; // 初始化方法

    this.init(defaultOptions);
  }
  /**
   * 初始化
   */


  var _proto = AxiosExtend.prototype;

  _proto.init = function init(defaultOptions) {
    var _this = this;

    var setHeaders = defaultOptions.setHeaders,
        onRequest = defaultOptions.onRequest,
        onRequestError = defaultOptions.onRequestError,
        onResponse = defaultOptions.onResponse,
        onResponseError = defaultOptions.onResponseError,
        onError = defaultOptions.onError; // 设置请求头

    setHeaders && setHeaders(axios__default['default']); // 添加一个请求拦截器

    onRequest && axios__default['default'].interceptors.request.use(function (config) {
      var currentState = getCurrentState(config);
      currentState.lastRequestTime = Date.now();
      if (currentState.retryCount > 0) return config; // retry重新请求接口不需要再次执行onRequest

      return onRequest(config, config.requestOptions);
    }, function (err) {
      onRequestError && onRequestError(err);
      onError && onError(err);
      return Promise.reject(err);
    }); // 添加一个响应拦截器

    onResponse && axios__default['default'].interceptors.response.use(function (res) {
      return onResponse(res, res.config.requestOptions);
    }, function (err) {
      var config = err.config; // 没有请求配置

      if (!config) {
        onResponseError && onResponseError(err);
        onError && onError(err);
        return Promise.reject(err);
      }

      var _getRequestOptions = getRequestOptions(config, defaultOptions),
          _getRequestOptions$re = _getRequestOptions.retries,
          retries = _getRequestOptions$re === void 0 ? _this.retries : _getRequestOptions$re,
          _getRequestOptions$re2 = _getRequestOptions.retryCondition,
          retryCondition = _getRequestOptions$re2 === void 0 ? isNetworkOrIdempotentRequestError : _getRequestOptions$re2,
          _getRequestOptions$re3 = _getRequestOptions.retryDelay,
          retryDelay = _getRequestOptions$re3 === void 0 ? noRetryDelay : _getRequestOptions$re3,
          _getRequestOptions$sh = _getRequestOptions.shouldResetTimeout,
          shouldResetTimeout = _getRequestOptions$sh === void 0 ? false : _getRequestOptions$sh;

      var currentState = getCurrentState(config);
      var shouldRetry = retryCondition(err) && currentState.retryCount < retries;

      if (shouldRetry) {
        currentState.retryCount += 1;
        var delay = retryDelay(currentState.retryCount, err); // 清理agent防止死循环

        fixConfig(axios__default['default'], config);

        if (!shouldResetTimeout && config.timeout && currentState.lastRequestTime) {
          var lastRequestDuration = Date.now() - currentState.lastRequestTime; // Minimum 1ms timeout (passing 0 or less to XHR means no timeout)

          config.timeout = Math.max(config.timeout - lastRequestDuration - delay, 1);
        } // 初始化请求数据


        config.transformRequest = [function (data) {
          return data;
        }];
        return new Promise(function (resolve) {
          return setTimeout(function () {
            return resolve(axios__default['default'](config));
          }, delay);
        });
      }

      onResponseError && onResponseError(err);
      onError && onError(err);
      return Promise.reject(err);
    });
  }
  /**
   * 创建请求
   */
  ;

  _proto.create = function create(options) {
    var _this2 = this;

    var _options$unique = options.unique,
        unique = _options$unique === void 0 ? this.unique : _options$unique,
        _options$orderly = options.orderly,
        orderly = _options$orderly === void 0 ? this.orderly : _options$orderly,
        _options$url = options.url,
        url = _options$url === void 0 ? '' : _options$url;
    var promiseKey = getRandomStr__default['default'](6) + '_' + Date.now();
    var source = axios__default['default'].CancelToken.source();
    options.requestOptions = extend__default['default'](true, {}, options);
    options.cancelToken = source.token;
    var promise = new Promise(function (resolve, reject) {
      return __awaiter(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _this3 = this;

        var len;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(unique || orderly)) {
                  _context.next = 20;
                  break;
                }

                len = this.waiting.length;

              case 2:
                if (!(len > 0)) {
                  _context.next = 20;
                  break;
                }

                len--;

                if (!(this.waiting[len].url === url)) {
                  _context.next = 18;
                  break;
                }

                if (!unique) {
                  _context.next = 9;
                  break;
                }

                this.waiting.splice(len, 1)[0].source.cancel('request canceled');
                _context.next = 18;
                break;

              case 9:
                _context.prev = 9;
                _context.next = 12;
                return this.waiting[len];

              case 12:
                _context.next = 18;
                break;

              case 14:
                _context.prev = 14;
                _context.t0 = _context["catch"](9);
                this.waiting.splice(len, 1);
                console.info('the task has been dropped');

              case 18:
                _context.next = 2;
                break;

              case 20:
                if (!(this.maxConnections > 0 && this.waiting.length >= this.maxConnections)) {
                  _context.next = 30;
                  break;
                }

                _context.prev = 21;
                _context.next = 24;
                return this.waiting[0].promise;

              case 24:
                _context.next = 30;
                break;

              case 26:
                _context.prev = 26;
                _context.t1 = _context["catch"](21);
                this.waiting.shift();
                console.info('the task has been dropped');

              case 30:
                // 执行
                axios__default['default'](options).then(function (res) {
                  // 成功回调
                  resolve(res);
                })["catch"](function (err) {
                  // 请求取消
                  if (axios__default['default'].isCancel(err)) _this3.onCancel && _this3.onCancel(err); // 失败回调
                  else reject(err);
                })["finally"](function () {
                  var index = _this3.waiting.findIndex(function (el) {
                    return el.promiseKey === promiseKey;
                  });

                  index > -1 && _this3.waiting.splice(index, 1);
                });

              case 31:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[9, 14], [21, 26]]);
      }));
    });
    this.waiting.push({
      promiseKey: promiseKey,
      url: url,
      promise: promise,
      source: source
    });
    return promise;
  };

  return AxiosExtend;
}();

exports['default'] = AxiosExtend;
exports.exponentialDelay = exponentialDelay;
exports.isIdempotentRequestError = isIdempotentRequestError;
exports.isNetworkError = isNetworkError;
exports.isNetworkOrIdempotentRequestError = isNetworkOrIdempotentRequestError;
exports.isRetryableError = isRetryableError;
exports.isSafeRequestError = isSafeRequestError;
exports.namespace = namespace;
