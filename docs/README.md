index.md - v2.1.0 / [Exports](modules.md)

# axios-ex

企业级项目`axios`集成方案

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/axios-ex.svg?style=flat-square
[npm-url]: https://npmjs.org/package/axios-ex
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

# **完整文档请查阅： [API 完整文档](./docs/modules.md)**

# 安装

> `axios-ex`自带了最新版的 axios，可以不用安装`axios`包

```bash
# 使用npm
$ npm install axios-ex --save

# 使用yarn
$ yarn add axios-ex
```

# 使用

## 常规用法

```js
// {app_root}/src/plugins/axios.js
import { getCookie, setCookie } from 'js-cool'
import axiosExtend from 'axios-ex'

// 设置请求头
function setHeaders(instance) {
    instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
}
// 请求拦截器
function onRequest(config, options = {}) {
    // some codes
    return config
}
// 响应拦截器
function onResponse(res, options = {}) {
    if (res.data.success) return res.data
    return Promise.reject(res.data)
}
// 请求取消
function onCancel(err) {
    console.error(err.message)
}

// 实例化
const axiosEx = new axiosExtend({
    maxConnections: 30, // 最大同时请求数，默认：0=不限制
    unique: true, // 是否取消前面的相似请求，默认：false
    retries: 0, // 重试次数，默认：0=不重试
    orderly: false, // 是否有序返回，默认：true
    delay: 0, // 延迟返回值，毫秒，默认：0=不延迟
    setHeaders, // 设置请求头的方法
    onRequest, // 请求拦截器
    onResponse, // 响应拦截器
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

## 其他用法

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

## 问题和支持

Please open an issue [here](https://github.com/saqqdy/axios-ex/issues).

## License

[MIT](LICENSE)
