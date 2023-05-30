<div style="text-align: center;" align="center">

# axios-ex

A integration solution of axios for large enterprise projects. Support request concurrency control & cancel requests & automatic retry & requests times limit, etc.

[![NPM version][npm-image]][npm-url]
[![Codacy Badge][codacy-image]][codacy-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![npm download][download-image]][download-url]
[![gzip][gzip-image]][gzip-url]
[![License][license-image]][license-url]

[![Sonar][sonar-image]][sonar-url]

</div>

<div style="text-align: center;" align="center">

### **[Documentation](https://www.saqqdy.com/axios-ex)** • **[Change Log](./CHANGELOG.md)**

**Read this in other languages: English | [简体中文](./README-zh_CN.md)**

</div>

## Installation

> `axios-ex` comes with the latest version of axios, so you can install it without the `axios` package

```bash
# use pnpm
$ pnpm install axios-ex

# use npm
$ npm install axios-ex --save

# use yarn
$ yarn add axios-ex
```

## Usage

### General use

```js
// {app_root}/src/plugins/axios.js
import { getCookie, setCookie } from 'js-cool'
import AxiosExtend from 'axios-ex'

/**
 * Set the request header
 *
 * @param {object} instance AxiosInstance
 */
function setHeaders(instance) {
  instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
}
/**
 * Request Interceptor
 *
 * @param {object} config AxiosRequestConfig
 * @param {object} options request options AxiosExtendRequestOptions
 * @returns AxiosRequestConfig
 */
function onRequest(config, options = {}) {
  // some codes
  return config
}
/**
 * Execute on request error
 *
 * @param {object} err Error
 */
function onRequestError(err) {
  console.error(err)
}
/**
 * Response Interceptor
 *
 * @param {object} res AxiosResponse<any>
 * @param {object} options request options AxiosExtendRequestOptions
 * @returns Promise<unknown>
 */
function onResponse(res, options = {}) {
  if (res.data.success) return res.data
  return Promise.reject(res.data)
}
/**
 * Execute in response error
 *
 * @param {object} err Error
 */
function onResponseError(err) {
  console.error(err)
}
/**
 * Execute on request error & response error
 *
 * @param {object} err Error
 */
function onError(err) {
  console.error(err)
}
/**
 * Request Cancelled
 *
 * @param {object} err Error
 */
function onCancel(err) {
  console.error(err.message)
}

// Instantiation
const axiosEx = new AxiosExtend({
  maxConnections: 30, // Maximum number of connections, default: 0, no limit
  unique: true, // Whether to cancel the previous similar requests, default: false
  retries: 0, // Number of retries, default: 0, no retries
  orderly: false, // Whether to return in order, default: true
  setHeaders, // function for setting request headers
  onRequest, // Request Interceptor
  onRequestError, // Execute on request error
  onResponse, // Response Interceptor
  onResponseError, // Execute on response error
  onError, // Execute on request error & response error
  onCancel // Callback when request is cancelled
})

export default options => {
  // Here set the unique and orderly priority higher than the instantiation configuration
  options.unique = options.unique ?? false
  options.orderly = options.orderly ?? false
  // Here the unique has a higher priority
  return axiosEx.create(options)
}
```

### Define the delay function for failed retries

1. Customize the retry delay time

   ```js
   // Configuration when instantiating
   const axiosEx = new AxiosExtend({
     // ...
     retryDelay: retryCount => {
       return retryCount * 1000
     }
     // ...
   })
   ```

2. Or use `axios-ex` built-in function, exponentialDelay randomly incremented by 0%-50%

   ```js
   import AxiosExtend, { exponentialDelay } from 'axios-ex'
   // Configuration when instantiating
   const axiosEx = new AxiosExtend({
     // ...
     retryDelay: exponentialDelay
     // ...
   })
   ```

### Using with `vue2.0`

Sometimes we need to use `this` (vue instance) inside `onRequest` or `onResponse`, we can use it like this

```js
import AxiosExtend from 'axios-ex'

let axiosEx = null
// Request Interceptor
function onRequest(config, options = {}) {
  // this => vueInstance
  return config
}
// Response Interceptor
function onResponse(res, options = {}) {
  // hide loading
  if (this instanceof Vue) {
    this.$loader.hide()
  }
  if (res.data.success) return res.data
  return Promise.reject(res.data)
}

export default options => {
  // Only need to initialize once
  if (!axiosEx)
    axiosEx = new AxiosExtend({
      onRequest: onRequest.bind(this),
      onResponse: onResponse.bind(this)
    })

  // show loading
  if (this instanceof Vue) {
    this.$loader.show()
  }
  return axiosEx.create(options)
}
```

### Using unpkg CDN

```html
<script src="https://unpkg.com/axios-ex@2.4.0/dist/index.global.prod.js"></script>
```

## Support & Issues

Please open an issue [here](https://github.com/saqqdy/axios-ex/issues).

## License

[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/axios-ex.svg?style=flat-square
[npm-url]: https://npmjs.org/package/axios-ex
[codacy-image]: https://app.codacy.com/project/badge/Grade/f70d4880e4ad4f40aa970eb9ee9d0696
[codacy-url]: https://www.codacy.com/gh/saqqdy/axios-ex/dashboard?utm_source=github.com&utm_medium=referral&utm_content=saqqdy/axios-ex&utm_campaign=Badge_Grade
[travis-image]: https://travis-ci.com/saqqdy/axios-ex.svg?branch=master
[travis-url]: https://travis-ci.com/saqqdy/axios-ex
[codecov-image]: https://img.shields.io/codecov/c/github/saqqdy/axios-ex.svg?style=flat-square
[codecov-url]: https://codecov.io/github/saqqdy/axios-ex?branch=master
[download-image]: https://img.shields.io/npm/dm/axios-ex.svg?style=flat-square
[download-url]: https://npmjs.org/package/axios-ex
[gzip-image]: http://img.badgesize.io/https://unpkg.com/axios-ex/dist/index.global.prod.js?compression=gzip&label=gzip%20size:%20JS
[gzip-url]: http://img.badgesize.io/https://unpkg.com/axios-ex/dist/index.global.prod.js?compression=gzip&label=gzip%20size:%20JS
[license-image]: https://img.shields.io/badge/License-MIT-blue.svg
[license-url]: LICENSE
[sonar-image]: https://sonarcloud.io/api/project_badges/quality_gate?project=saqqdy_axios-ex
[sonar-url]: https://sonarcloud.io/dashboard?id=saqqdy_axios-ex
