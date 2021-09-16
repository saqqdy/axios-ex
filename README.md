# axios-ex

企业级项目`axios`集成方案

[![NPM version][npm-image]][npm-url]
[![Codacy Badge][codacy-image]][codacy-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]
[![gzip][gzip-image]][gzip-url]
[![License][license-image]][license-url]

[![Sonar][sonar-image]][sonar-url]

[npm-image]: https://img.shields.io/npm/v/axios-ex.svg?style=flat-square
[npm-url]: https://npmjs.org/package/axios-ex
[codacy-image]: https://app.codacy.com/project/badge/Grade/f70d4880e4ad4f40aa970eb9ee9d0696
[codacy-url]: https://www.codacy.com/gh/saqqdy/axios-ex/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=saqqdy/axios-ex&amp;utm_campaign=Badge_Grade
[travis-image]: https://travis-ci.com/saqqdy/axios-ex.svg?branch=master
[travis-url]: https://travis-ci.com/saqqdy/axios-ex
[codecov-image]: https://img.shields.io/codecov/c/github/saqqdy/axios-ex.svg?style=flat-square
[codecov-url]: https://codecov.io/github/saqqdy/axios-ex?branch=master
[david-image]: https://img.shields.io/david/saqqdy/axios-ex.svg?style=flat-square
[david-url]: https://david-dm.org/saqqdy/axios-ex
[snyk-image]: https://snyk.io/test/npm/axios-ex/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/axios-ex
[download-image]: https://img.shields.io/npm/dm/axios-ex.svg?style=flat-square
[download-url]: https://npmjs.org/package/axios-ex
[gzip-image]: http://img.badgesize.io/https://unpkg.com/axios-ex/lib/index.js?compression=gzip&label=gzip%20size:%20JS
[gzip-url]: http://img.badgesize.io/https://unpkg.com/axios-ex/lib/index.js?compression=gzip&label=gzip%20size:%20JS
[license-image]: https://img.shields.io/badge/License-MIT-yellow.svg
[license-url]: LICENSE
[sonar-image]: https://sonarcloud.io/api/project_badges/quality_gate?project=saqqdy_axios-ex
[sonar-url]: https://sonarcloud.io/dashboard?id=saqqdy_axios-ex

## **完整文档请查阅： [API 完整文档](./docs/modules.md)**

## 安装

> `axios-ex`自带了最新版的 axios，可以不用安装`axios`包

```bash
# 使用npm
$ npm install axios-ex --save

# 使用yarn
$ yarn add axios-ex
```

## 使用

### 常规用法

```js
// {app_root}/src/plugins/axios.js
import { getCookie, setCookie } from 'js-cool'
import axiosExtend from 'axios-ex'

/**
 * 设置请求头
 *
 * @param {object} instance AxiosInstance
 */
function setHeaders(instance) {
    instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
}
/**
 * 请求拦截器
 *
 * @param {object} config AxiosRequestConfig
 * @param {object} options 请求参数AxiosExtendRequestOptions
 * @returns AxiosRequestConfig
 */
function onRequest(config, options = {}) {
    // some codes
    return config
}
/**
 * 请求错误时执行
 *
 * @param {object} err Error
 */
function onRequestError(err) {
    // handler request error
}
/**
 * 响应拦截器
 *
 * @param {object} res AxiosResponse<any>
 * @param {object} options 请求参数AxiosExtendRequestOptions
 * @returns Promise<unknown>
 */
function onResponse(res, options = {}) {
    if (res.data.success) return res.data
    return Promise.reject(res.data)
}
/**
 * 响应错误时执行
 *
 * @param {object} err Error
 */
function onResponseError(err) {
    // handler response error
}
/**
 * 请求错误或响应错误都执行
 *
 * @param {object} err Error
 */
function onError(err) {
    // handler request & response error
}
/**
 * 请求取消
 *
 * @param {object} err Error
 */
function onCancel(err) {
    console.error(err.message)
}

// 实例化
const axiosEx = new axiosExtend({
    maxConnections: 30, // 最大同时请求数，默认：0=不限制
    unique: true, // 是否取消前面的相似请求，默认：false
    retries: 0, // 重试次数，默认：0=不重试
    orderly: false, // 是否有序返回，默认：true
    setHeaders, // 设置请求头的方法
    onRequest, // 请求拦截器
    onRequestError, // 请求错误时执行
    onResponse, // 响应拦截器
    onResponseError, // 响应错误时执行
    onError, // 请求错误或响应错误都执行
    onCancel // 请求取消时的回调
})

export default options => {
    // 这里设置 unique 和 orderly 优先级高于实例化时候的配置
    options.unique = options.unique ?? false
    options.orderly = options.orderly ?? false
    // 这里的unique优先级更高
    return axiosEx.create(options)
}
```

### 定义失败重试的延时方法

1. 自定义重试延迟的时长

    ```js
    // 实例化的时候配置
    const axiosEx = new axiosExtend({
        // ...
        retryDelay: retryCount => {
            return retryCount * 1000
        }
        // ...
    })
    ```

2. 或者使用`axios-ex`内置的方法，exponentialDelay 随机递增 0%-50%

    ```js
    import axiosExtend, { exponentialDelay } from 'axios-ex'
    // 实例化的时候配置
    const axiosEx = new axiosExtend({
        // ...
        retryDelay: exponentialDelay
        // ...
    })
    ```

### 在 vue2.x 里面使用

有时候我们需要在`onRequest`或`onResponse`里面使用`this`（vue 实例），可以这样写

```js
import axiosExtend from 'axios-ex'

let axiosEx = null
// 请求拦截器
function onRequest(config, options = {}) {
    // this => vueInstance
    return config
}
// 响应拦截器
function onResponse(res, options = {}) {
    // 隐藏loading动画
    if (this instanceof Vue) {
        this.$loader.hide()
    }
    if (res.data.success) return res.data
    return Promise.reject(res.data)
}

export default options => {
    // 只需要初始化一次
    if (!axiosEx)
        axiosEx = new axiosExtend({
            onRequest: onRequest.bind(this),
            onResponse: onResponse.bind(this)
            //...
        })

    // 显示loading动画
    if (this instanceof Vue) {
        this.$loader.show()
    }
    return axiosEx.create(options)
}
```

## 问题和支持

Please open an issue [here](https://github.com/saqqdy/axios-ex/issues).

## License

[MIT](LICENSE)
