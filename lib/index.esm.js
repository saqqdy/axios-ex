/*!
 * axios-ex v2.3.0
 * axios extend
 * (c) 2021-2022 saqqdy 
 * Released under the MIT License.
 */
import 'core-js/modules/es.array.concat.js';
import 'core-js/modules/es.object.assign.js';
import 'core-js/modules/es.array.includes.js';
import 'core-js/modules/es.string.includes.js';
import 'core-js/modules/es.date.now.js';
import 'core-js/modules/es.date.to-string.js';
import 'core-js/modules/es.object.to-string.js';
import 'core-js/modules/es.promise.js';
import 'core-js/modules/web.timers.js';
import 'core-js/modules/es.array.splice.js';
import 'core-js/modules/es.promise.finally.js';
import 'core-js/modules/es.array.find-index.js';
import axios from 'axios';
import extend from 'js-cool/lib/extend';
import getRandomStr from 'js-cool/lib/getRandomStr';

function _regeneratorRuntime() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */

  _regeneratorRuntime = function () {
    return exports;
  };

  var exports = {},
      Op = Object.prototype,
      hasOwn = Op.hasOwnProperty,
      $Symbol = "function" == typeof Symbol ? Symbol : {},
      iteratorSymbol = $Symbol.iterator || "@@iterator",
      asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
      toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }

  try {
    define({}, "");
  } catch (err) {
    define = function (obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
        generator = Object.create(protoGenerator.prototype),
        context = new Context(tryLocsList || []);
    return generator._invoke = function (innerFn, self, context) {
      var state = "suspendedStart";
      return function (method, arg) {
        if ("executing" === state) throw new Error("Generator is already running");

        if ("completed" === state) {
          if ("throw" === method) throw arg;
          return doneResult();
        }

        for (context.method = method, context.arg = arg;;) {
          var delegate = context.delegate;

          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);

            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }

          if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
            if ("suspendedStart" === state) throw state = "completed", context.arg;
            context.dispatchException(context.arg);
          } else "return" === context.method && context.abrupt("return", context.arg);
          state = "executing";
          var record = tryCatch(innerFn, self, context);

          if ("normal" === record.type) {
            if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
            return {
              value: record.arg,
              done: context.done
            };
          }

          "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
        }
      };
    }(innerFn, self, context), generator;
  }

  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  exports.wrap = wrap;
  var ContinueSentinel = {};

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {}

  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
      NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if ("throw" !== record.type) {
        var result = record.arg,
            value = result.value;
        return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }

      reject(record.arg);
    }

    var previousPromise;

    this._invoke = function (method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    };
  }

  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (undefined === method) {
      if (context.delegate = null, "throw" === context.method) {
        if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel;
        context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }

  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;

          return next.value = undefined, next.done = !0, next;
        };

        return next.next = next;
      }
    }

    return {
      next: doneResult
    };
  }

  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }

  return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (object) {
    var keys = [];

    for (var key in object) keys.push(key);

    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }

      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function (skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
    },
    stop: function () {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function (exception) {
      if (this.done) throw exception;
      var context = this;

      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
            record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
              hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function (type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function (record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function (finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    catch: function (tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      }

      throw new Error("illegal catch attempt");
    },
    delegateYield: function (iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}

/******************************************************************************
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
  return isRetryableError(error) && SAFE_HTTP_METHODS.includes(error.config.method);
}
/**
 * @param error - 错误类型
 * @return boolean
 */

function isIdempotentRequestError(error) {
  // Cannot determine if the request can be retried
  if (!error.config) return false;
  return isRetryableError(error) && IDEMPOTENT_HTTP_METHODS.includes(error.config.method);
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
} // export interface Instance {
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
    return this;
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

    setHeaders && setHeaders(axios); // 添加一个请求拦截器

    onRequest && axios.interceptors.request.use(function (config) {
      var currentState = getCurrentState(config);
      currentState.lastRequestTime = Date.now();
      if (currentState.retryCount > 0) return config; // retry重新请求接口不需要再次执行onRequest

      return onRequest(config, config.requestOptions);
    }, function (err) {
      onRequestError && onRequestError(err);
      onError && onError(err);
      return Promise.reject(err);
    }); // 添加一个响应拦截器

    onResponse && axios.interceptors.response.use(function (res) {
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

        fixConfig(axios, config);

        if (!shouldResetTimeout && config.timeout && currentState.lastRequestTime) {
          var lastRequestDuration = Date.now() - currentState.lastRequestTime; // Minimum 1ms timeout (passing 0 or less to XHR means no timeout)

          config.timeout = Math.max(config.timeout - lastRequestDuration - delay, 1);
        } // 初始化请求数据


        config.transformRequest = [function (data) {
          return data;
        }];
        return new Promise(function (resolve) {
          return setTimeout(function () {
            return resolve(axios(config));
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
    var promiseKey = getRandomStr(6) + '_' + Date.now();
    var source = axios.CancelToken.source();
    options.requestOptions = extend(true, {}, options);
    options.cancelToken = source.token;
    var promise = new Promise(function (resolve, reject) {
      return __awaiter(_this2, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _this3 = this;

        var len;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
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
                axios(options).then(function (res) {
                  // 成功回调
                  resolve(res);
                })["catch"](function (err) {
                  // 请求取消
                  if (axios.isCancel(err)) _this3.onCancel && _this3.onCancel(err); // 失败回调
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

export { AxiosExtend as default, exponentialDelay, isIdempotentRequestError, isNetworkError, isNetworkOrIdempotentRequestError, isRetryableError, isSafeRequestError, namespace };
