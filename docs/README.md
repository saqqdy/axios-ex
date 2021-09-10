index.md - v1.1.2 / [Exports](modules.md)

# axios-ex

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

## Install

```bash
# use npm
$ npm i axios-ex --save

# use yarn
$ yarn add axios-ex
```

## Usage

#### Global configuration

```js
// {app_root}/src/plugins/axios.js
import AxiosExtend from 'axios-ex'

export default options => {
    return new Promise((resolve, reject) => {
        AxiosExtend.create(options, {
            // retry times
            retry: 3,
            // max connections
            maxConnections: 10,
            // cancel request
            unique: true,
            setHeaders(instance) {
                instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
            },
            // request
            onRequest(config) {
                //
                return config
            },
            // requestError
            onRequestError(err) {},
            // response
            onResponse(res) {
                if (res.data.success) return res.data
                return Promise.reject(res.data)
            },
            // responseError
            onResponseError(err) {},
            // error
            onError(err) {},
            // canceled
            onCancel(err) {}
        })
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err)
            })
    })
}
```

## Configuration

```
...
```

## Questions & Suggestions

Please open an issue [here](https://github.com/saqqdy/axios-ex/issues).

## License

[MIT](LICENSE)
