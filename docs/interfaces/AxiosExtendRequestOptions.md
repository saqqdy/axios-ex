[index.md - v2.3.1](../README.md) / [Exports](../modules.md) / AxiosExtendRequestOptions

# Interface: AxiosExtendRequestOptions<D\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `D` | `any` |

## Hierarchy

- `AxiosRequestConfig`<`D`\>

  ↳ **`AxiosExtendRequestOptions`**

## Table of contents

### Properties

- [adapter](AxiosExtendRequestOptions.md#adapter)
- [auth](AxiosExtendRequestOptions.md#auth)
- [axios-extend](AxiosExtendRequestOptions.md#axios-extend)
- [baseURL](AxiosExtendRequestOptions.md#baseurl)
- [beforeRedirect](AxiosExtendRequestOptions.md#beforeredirect)
- [cancelToken](AxiosExtendRequestOptions.md#canceltoken)
- [data](AxiosExtendRequestOptions.md#data)
- [decompress](AxiosExtendRequestOptions.md#decompress)
- [env](AxiosExtendRequestOptions.md#env)
- [error](AxiosExtendRequestOptions.md#error)
- [headers](AxiosExtendRequestOptions.md#headers)
- [httpAgent](AxiosExtendRequestOptions.md#httpagent)
- [httpsAgent](AxiosExtendRequestOptions.md#httpsagent)
- [insecureHTTPParser](AxiosExtendRequestOptions.md#insecurehttpparser)
- [maxBodyLength](AxiosExtendRequestOptions.md#maxbodylength)
- [maxContentLength](AxiosExtendRequestOptions.md#maxcontentlength)
- [maxRedirects](AxiosExtendRequestOptions.md#maxredirects)
- [method](AxiosExtendRequestOptions.md#method)
- [onDownloadProgress](AxiosExtendRequestOptions.md#ondownloadprogress)
- [onUploadProgress](AxiosExtendRequestOptions.md#onuploadprogress)
- [orderly](AxiosExtendRequestOptions.md#orderly)
- [params](AxiosExtendRequestOptions.md#params)
- [paramsSerializer](AxiosExtendRequestOptions.md#paramsserializer)
- [proxy](AxiosExtendRequestOptions.md#proxy)
- [requestOptions](AxiosExtendRequestOptions.md#requestoptions)
- [responseEncoding](AxiosExtendRequestOptions.md#responseencoding)
- [responseType](AxiosExtendRequestOptions.md#responsetype)
- [signal](AxiosExtendRequestOptions.md#signal)
- [socketPath](AxiosExtendRequestOptions.md#socketpath)
- [timeout](AxiosExtendRequestOptions.md#timeout)
- [timeoutErrorMessage](AxiosExtendRequestOptions.md#timeouterrormessage)
- [transformRequest](AxiosExtendRequestOptions.md#transformrequest)
- [transformResponse](AxiosExtendRequestOptions.md#transformresponse)
- [transitional](AxiosExtendRequestOptions.md#transitional)
- [type](AxiosExtendRequestOptions.md#type)
- [unique](AxiosExtendRequestOptions.md#unique)
- [url](AxiosExtendRequestOptions.md#url)
- [validateStatus](AxiosExtendRequestOptions.md#validatestatus)
- [withCredentials](AxiosExtendRequestOptions.md#withcredentials)
- [xsrfCookieName](AxiosExtendRequestOptions.md#xsrfcookiename)
- [xsrfHeaderName](AxiosExtendRequestOptions.md#xsrfheadername)

## Properties

### adapter

• `Optional` **adapter**: `AxiosAdapter`

#### Inherited from

AxiosRequestConfig.adapter

#### Defined in

node_modules/.pnpm/axios@0.27.2/node_modules/axios/index.d.ts:88

___

### auth

• `Optional` **auth**: `AxiosBasicCredentials`

#### Inherited from

AxiosRequestConfig.auth

#### Defined in

node_modules/.pnpm/axios@0.27.2/node_modules/axios/index.d.ts:89

___

### axios-extend

• `Optional` **axios-extend**: `any`

#### Defined in

[src/index.ts:32](https://github.com/saqqdy/axios-ex/blob/5d9d522/src/index.ts#L32)

___

### baseURL

• `Optional` **baseURL**: `string`

#### Inherited from

AxiosRequestConfig.baseURL

#### Defined in

node_modules/.pnpm/axios@0.27.2/node_modules/axios/index.d.ts:78

___

### beforeRedirect

• `Optional` **beforeRedirect**: (`options`: `Record`<`string`, `any`\>, `responseDetails`: { `headers`: `Record`<`string`, `string`\>  }) => `void`

#### Type declaration

▸ (`options`, `responseDetails`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Record`<`string`, `any`\> |
| `responseDetails` | `Object` |
| `responseDetails.headers` | `Record`<`string`, `string`\> |

##### Returns

`void`

#### Inherited from

AxiosRequestConfig.beforeRedirect

#### Defined in

node_modules/.pnpm/axios@0.27.2/node_modules/axios/index.d.ts:100

___

### cancelToken

• `Optional` **cancelToken**: `CancelToken`

#### Overrides

AxiosRequestConfig.cancelToken

#### Defined in

[src/index.ts:36](https://github.com/saqqdy/axios-ex/blob/5d9d522/src/index.ts#L36)

___

### data

• `Optional` **data**: `D`

#### Inherited from

AxiosRequestConfig.data

#### Defined in

node_modules/.pnpm/axios@0.27.2/node_modules/axios/index.d.ts:84

___

### decompress

• `Optional` **decompress**: `boolean`

#### Inherited from

AxiosRequestConfig.decompress

#### Defined in

node_modules/.pnpm/axios@0.27.2/node_modules/axios/index.d.ts:106

___

### env

• `Optional` **env**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `FormData?` | (...`args`: `any`[]) => `object` |

#### Inherited from

AxiosRequestConfig.env

#### Defined in

node_modules/.pnpm/axios@0.27.2/node_modules/axios/index.d.ts:110

___

### error

• `Optional` **error**: `string`

#### Defined in

[src/index.ts:38](https://github.com/saqqdy/axios-ex/blob/5d9d522/src/index.ts#L38)

___

### headers

• `Optional` **headers**: `AxiosRequestHeaders`

#### Inherited from

AxiosRequestConfig.headers

#### Defined in

node_modules/.pnpm/axios@0.27.2/node_modules/axios/index.d.ts:81

___

### httpAgent

• `Optional` **httpAgent**: `any`

#### Inherited from

AxiosRequestConfig.httpAgent

#### Defined in

node_modules/.pnpm/axios@0.27.2/node_modules/axios/index.d.ts:102

___

### httpsAgent

• `Optional` **httpsAgent**: `any`

#### Inherited from

AxiosRequestConfig.httpsAgent

#### Defined in

node_modules/.pnpm/axios@0.27.2/node_modules/axios/index.d.ts:103

___

### insecureHTTPParser

• `Optional` **insecureHTTPParser**: `boolean`

#### Inherited from

AxiosRequestConfig.insecureHTTPParser

#### Defined in

node_modules/.pnpm/axios@0.27.2/node_modules/axios/index.d.ts:109

___

### maxBodyLength

• `Optional` **maxBodyLength**: `number`

#### Inherited from

AxiosRequestConfig.maxBodyLength

#### Defined in

node_modules/.pnpm/axios@0.27.2/node_modules/axios/index.d.ts:98

___

### maxContentLength

• `Optional` **maxContentLength**: `number`

#### Inherited from

AxiosRequestConfig.maxContentLength

#### Defined in

node_modules/.pnpm/axios@0.27.2/node_modules/axios/index.d.ts:96

___

### maxRedirects

• `Optional` **maxRedirects**: `number`

#### Inherited from

AxiosRequestConfig.maxRedirects

#### Defined in

node_modules/.pnpm/axios@0.27.2/node_modules/axios/index.d.ts:99

___

### method

• `Optional` **method**: `string`

#### Inherited from

AxiosRequestConfig.method

#### Defined in

node_modules/.pnpm/axios@0.27.2/node_modules/axios/index.d.ts:77

___

### onDownloadProgress

• `Optional` **onDownloadProgress**: (`progressEvent`: `any`) => `void`

#### Type declaration

▸ (`progressEvent`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `progressEvent` | `any` |

##### Returns

`void`

#### Inherited from

AxiosRequestConfig.onDownloadProgress

#### Defined in

node_modules/.pnpm/axios@0.27.2/node_modules/axios/index.d.ts:95

___

### onUploadProgress

• `Optional` **onUploadProgress**: (`progressEvent`: `any`) => `void`

#### Type declaration

▸ (`progressEvent`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `progressEvent` | `any` |

##### Returns

`void`

#### Inherited from

AxiosRequestConfig.onUploadProgress

#### Defined in

node_modules/.pnpm/axios@0.27.2/node_modules/axios/index.d.ts:94

___

### orderly

• `Optional` **orderly**: `boolean`

#### Defined in

[src/index.ts:34](https://github.com/saqqdy/axios-ex/blob/5d9d522/src/index.ts#L34)

___

### params

• `Optional` **params**: `any`

#### Inherited from

AxiosRequestConfig.params

#### Defined in

node_modules/.pnpm/axios@0.27.2/node_modules/axios/index.d.ts:82

___

### paramsSerializer

• `Optional` **paramsSerializer**: (`params`: `any`) => `string`

#### Type declaration

▸ (`params`): `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `any` |

##### Returns

`string`

#### Inherited from

AxiosRequestConfig.paramsSerializer

#### Defined in

node_modules/.pnpm/axios@0.27.2/node_modules/axios/index.d.ts:83

___

### proxy

• `Optional` **proxy**: ``false`` \| `AxiosProxyConfig`

#### Inherited from

AxiosRequestConfig.proxy

#### Defined in

node_modules/.pnpm/axios@0.27.2/node_modules/axios/index.d.ts:104

___

### requestOptions

• `Optional` **requestOptions**: [`AxiosExtendRequestOptions`](AxiosExtendRequestOptions.md)<`any`\>

#### Defined in

[src/index.ts:35](https://github.com/saqqdy/axios-ex/blob/5d9d522/src/index.ts#L35)

___

### responseEncoding

• `Optional` **responseEncoding**: `string`

#### Inherited from

AxiosRequestConfig.responseEncoding

#### Defined in

node_modules/.pnpm/axios@0.27.2/node_modules/axios/index.d.ts:91

___

### responseType

• `Optional` **responseType**: `ResponseType`

#### Inherited from

AxiosRequestConfig.responseType

#### Defined in

node_modules/.pnpm/axios@0.27.2/node_modules/axios/index.d.ts:90

___

### signal

• `Optional` **signal**: `AbortSignal`

#### Inherited from

AxiosRequestConfig.signal

#### Defined in

node_modules/.pnpm/axios@0.27.2/node_modules/axios/index.d.ts:108

___

### socketPath

• `Optional` **socketPath**: ``null`` \| `string`

#### Inherited from

AxiosRequestConfig.socketPath

#### Defined in

node_modules/.pnpm/axios@0.27.2/node_modules/axios/index.d.ts:101

___

### timeout

• `Optional` **timeout**: `number`

#### Inherited from

AxiosRequestConfig.timeout

#### Defined in

node_modules/.pnpm/axios@0.27.2/node_modules/axios/index.d.ts:85

___

### timeoutErrorMessage

• `Optional` **timeoutErrorMessage**: `string`

#### Inherited from

AxiosRequestConfig.timeoutErrorMessage

#### Defined in

node_modules/.pnpm/axios@0.27.2/node_modules/axios/index.d.ts:86

___

### transformRequest

• `Optional` **transformRequest**: `AxiosRequestTransformer` \| `AxiosRequestTransformer`[]

#### Inherited from

AxiosRequestConfig.transformRequest

#### Defined in

node_modules/.pnpm/axios@0.27.2/node_modules/axios/index.d.ts:79

___

### transformResponse

• `Optional` **transformResponse**: `AxiosResponseTransformer` \| `AxiosResponseTransformer`[]

#### Inherited from

AxiosRequestConfig.transformResponse

#### Defined in

node_modules/.pnpm/axios@0.27.2/node_modules/axios/index.d.ts:80

___

### transitional

• `Optional` **transitional**: `TransitionalOptions`

#### Inherited from

AxiosRequestConfig.transitional

#### Defined in

node_modules/.pnpm/axios@0.27.2/node_modules/axios/index.d.ts:107

___

### type

• `Optional` **type**: `string`

#### Defined in

[src/index.ts:37](https://github.com/saqqdy/axios-ex/blob/5d9d522/src/index.ts#L37)

___

### unique

• `Optional` **unique**: `boolean`

#### Defined in

[src/index.ts:33](https://github.com/saqqdy/axios-ex/blob/5d9d522/src/index.ts#L33)

___

### url

• `Optional` **url**: `string`

#### Inherited from

AxiosRequestConfig.url

#### Defined in

node_modules/.pnpm/axios@0.27.2/node_modules/axios/index.d.ts:76

___

### validateStatus

• `Optional` **validateStatus**: ``null`` \| (`status`: `number`) => `boolean`

#### Inherited from

AxiosRequestConfig.validateStatus

#### Defined in

node_modules/.pnpm/axios@0.27.2/node_modules/axios/index.d.ts:97

___

### withCredentials

• `Optional` **withCredentials**: `boolean`

#### Inherited from

AxiosRequestConfig.withCredentials

#### Defined in

node_modules/.pnpm/axios@0.27.2/node_modules/axios/index.d.ts:87

___

### xsrfCookieName

• `Optional` **xsrfCookieName**: `string`

#### Inherited from

AxiosRequestConfig.xsrfCookieName

#### Defined in

node_modules/.pnpm/axios@0.27.2/node_modules/axios/index.d.ts:92

___

### xsrfHeaderName

• `Optional` **xsrfHeaderName**: `string`

#### Inherited from

AxiosRequestConfig.xsrfHeaderName

#### Defined in

node_modules/.pnpm/axios@0.27.2/node_modules/axios/index.d.ts:93
