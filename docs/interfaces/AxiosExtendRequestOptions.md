[index.md - v2.2.4](../README.md) / [Exports](../modules.md) / AxiosExtendRequestOptions

# Interface: AxiosExtendRequestOptions

## Hierarchy

-   `AxiosRequestConfig`

    ↳ **`AxiosExtendRequestOptions`**

## Table of contents

### Properties

-   [adapter](AxiosExtendRequestOptions.md#adapter)
-   [auth](AxiosExtendRequestOptions.md#auth)
-   [axios-extend](AxiosExtendRequestOptions.md#axios-extend)
-   [baseURL](AxiosExtendRequestOptions.md#baseurl)
-   [cancelToken](AxiosExtendRequestOptions.md#canceltoken)
-   [data](AxiosExtendRequestOptions.md#data)
-   [decompress](AxiosExtendRequestOptions.md#decompress)
-   [error](AxiosExtendRequestOptions.md#error)
-   [headers](AxiosExtendRequestOptions.md#headers)
-   [httpAgent](AxiosExtendRequestOptions.md#httpagent)
-   [httpsAgent](AxiosExtendRequestOptions.md#httpsagent)
-   [insecureHTTPParser](AxiosExtendRequestOptions.md#insecurehttpparser)
-   [maxBodyLength](AxiosExtendRequestOptions.md#maxbodylength)
-   [maxContentLength](AxiosExtendRequestOptions.md#maxcontentlength)
-   [maxRedirects](AxiosExtendRequestOptions.md#maxredirects)
-   [method](AxiosExtendRequestOptions.md#method)
-   [orderly](AxiosExtendRequestOptions.md#orderly)
-   [params](AxiosExtendRequestOptions.md#params)
-   [proxy](AxiosExtendRequestOptions.md#proxy)
-   [requestOptions](AxiosExtendRequestOptions.md#requestoptions)
-   [responseType](AxiosExtendRequestOptions.md#responsetype)
-   [signal](AxiosExtendRequestOptions.md#signal)
-   [socketPath](AxiosExtendRequestOptions.md#socketpath)
-   [timeout](AxiosExtendRequestOptions.md#timeout)
-   [timeoutErrorMessage](AxiosExtendRequestOptions.md#timeouterrormessage)
-   [transformRequest](AxiosExtendRequestOptions.md#transformrequest)
-   [transformResponse](AxiosExtendRequestOptions.md#transformresponse)
-   [transitional](AxiosExtendRequestOptions.md#transitional)
-   [type](AxiosExtendRequestOptions.md#type)
-   [unique](AxiosExtendRequestOptions.md#unique)
-   [url](AxiosExtendRequestOptions.md#url)
-   [validateStatus](AxiosExtendRequestOptions.md#validatestatus)
-   [withCredentials](AxiosExtendRequestOptions.md#withcredentials)
-   [xsrfCookieName](AxiosExtendRequestOptions.md#xsrfcookiename)
-   [xsrfHeaderName](AxiosExtendRequestOptions.md#xsrfheadername)

### Methods

-   [onDownloadProgress](AxiosExtendRequestOptions.md#ondownloadprogress)
-   [onUploadProgress](AxiosExtendRequestOptions.md#onuploadprogress)
-   [paramsSerializer](AxiosExtendRequestOptions.md#paramsserializer)

## Properties

### adapter

• `Optional` **adapter**: `AxiosAdapter`

#### Inherited from

AxiosRequestConfig.adapter

#### Defined in

node_modules/axios/index.d.ts:75

---

### auth

• `Optional` **auth**: `AxiosBasicCredentials`

#### Inherited from

AxiosRequestConfig.auth

#### Defined in

node_modules/axios/index.d.ts:76

---

### axios-extend

• `Optional` **axios-extend**: `any`

#### Defined in

[src/index.ts:31](https://github.com/saqqdy/axios-ex/blob/e5622c7/src/index.ts#L31)

---

### baseURL

• `Optional` **baseURL**: `string`

#### Inherited from

AxiosRequestConfig.baseURL

#### Defined in

node_modules/axios/index.d.ts:65

---

### cancelToken

• `Optional` **cancelToken**: `CancelToken`

#### Overrides

AxiosRequestConfig.cancelToken

#### Defined in

[src/index.ts:35](https://github.com/saqqdy/axios-ex/blob/e5622c7/src/index.ts#L35)

---

### data

• `Optional` **data**: `any`

#### Inherited from

AxiosRequestConfig.data

#### Defined in

node_modules/axios/index.d.ts:71

---

### decompress

• `Optional` **decompress**: `boolean`

#### Inherited from

AxiosRequestConfig.decompress

#### Defined in

node_modules/axios/index.d.ts:91

---

### error

• `Optional` **error**: `string`

#### Defined in

[src/index.ts:37](https://github.com/saqqdy/axios-ex/blob/e5622c7/src/index.ts#L37)

---

### headers

• `Optional` **headers**: `AxiosRequestHeaders`

#### Inherited from

AxiosRequestConfig.headers

#### Defined in

node_modules/axios/index.d.ts:68

---

### httpAgent

• `Optional` **httpAgent**: `any`

#### Inherited from

AxiosRequestConfig.httpAgent

#### Defined in

node_modules/axios/index.d.ts:87

---

### httpsAgent

• `Optional` **httpsAgent**: `any`

#### Inherited from

AxiosRequestConfig.httpsAgent

#### Defined in

node_modules/axios/index.d.ts:88

---

### insecureHTTPParser

• `Optional` **insecureHTTPParser**: `boolean`

#### Inherited from

AxiosRequestConfig.insecureHTTPParser

#### Defined in

node_modules/axios/index.d.ts:94

---

### maxBodyLength

• `Optional` **maxBodyLength**: `number`

#### Inherited from

AxiosRequestConfig.maxBodyLength

#### Defined in

node_modules/axios/index.d.ts:84

---

### maxContentLength

• `Optional` **maxContentLength**: `number`

#### Inherited from

AxiosRequestConfig.maxContentLength

#### Defined in

node_modules/axios/index.d.ts:82

---

### maxRedirects

• `Optional` **maxRedirects**: `number`

#### Inherited from

AxiosRequestConfig.maxRedirects

#### Defined in

node_modules/axios/index.d.ts:85

---

### method

• `Optional` **method**: `Method`

#### Inherited from

AxiosRequestConfig.method

#### Defined in

node_modules/axios/index.d.ts:64

---

### orderly

• `Optional` **orderly**: `boolean`

#### Defined in

[src/index.ts:33](https://github.com/saqqdy/axios-ex/blob/e5622c7/src/index.ts#L33)

---

### params

• `Optional` **params**: `any`

#### Inherited from

AxiosRequestConfig.params

#### Defined in

node_modules/axios/index.d.ts:69

---

### proxy

• `Optional` **proxy**: `false` \| `AxiosProxyConfig`

#### Inherited from

AxiosRequestConfig.proxy

#### Defined in

node_modules/axios/index.d.ts:89

---

### requestOptions

• `Optional` **requestOptions**: [`AxiosExtendRequestOptions`](AxiosExtendRequestOptions.md)

#### Defined in

[src/index.ts:34](https://github.com/saqqdy/axios-ex/blob/e5622c7/src/index.ts#L34)

---

### responseType

• `Optional` **responseType**: `ResponseType`

#### Inherited from

AxiosRequestConfig.responseType

#### Defined in

node_modules/axios/index.d.ts:77

---

### signal

• `Optional` **signal**: `AbortSignal`

#### Inherited from

AxiosRequestConfig.signal

#### Defined in

node_modules/axios/index.d.ts:93

---

### socketPath

• `Optional` **socketPath**: `null` \| `string`

#### Inherited from

AxiosRequestConfig.socketPath

#### Defined in

node_modules/axios/index.d.ts:86

---

### timeout

• `Optional` **timeout**: `number`

#### Inherited from

AxiosRequestConfig.timeout

#### Defined in

node_modules/axios/index.d.ts:72

---

### timeoutErrorMessage

• `Optional` **timeoutErrorMessage**: `string`

#### Inherited from

AxiosRequestConfig.timeoutErrorMessage

#### Defined in

node_modules/axios/index.d.ts:73

---

### transformRequest

• `Optional` **transformRequest**: `AxiosRequestTransformer` \| `AxiosRequestTransformer`[]

#### Inherited from

AxiosRequestConfig.transformRequest

#### Defined in

node_modules/axios/index.d.ts:66

---

### transformResponse

• `Optional` **transformResponse**: `AxiosResponseTransformer` \| `AxiosResponseTransformer`[]

#### Inherited from

AxiosRequestConfig.transformResponse

#### Defined in

node_modules/axios/index.d.ts:67

---

### transitional

• `Optional` **transitional**: `TransitionalOptions`

#### Inherited from

AxiosRequestConfig.transitional

#### Defined in

node_modules/axios/index.d.ts:92

---

### type

• `Optional` **type**: `string`

#### Defined in

[src/index.ts:36](https://github.com/saqqdy/axios-ex/blob/e5622c7/src/index.ts#L36)

---

### unique

• `Optional` **unique**: `boolean`

#### Defined in

[src/index.ts:32](https://github.com/saqqdy/axios-ex/blob/e5622c7/src/index.ts#L32)

---

### url

• `Optional` **url**: `string`

#### Inherited from

AxiosRequestConfig.url

#### Defined in

node_modules/axios/index.d.ts:63

---

### validateStatus

• `Optional` **validateStatus**: `null` \| (`status`: `number`) => `boolean`

#### Inherited from

AxiosRequestConfig.validateStatus

#### Defined in

node_modules/axios/index.d.ts:83

---

### withCredentials

• `Optional` **withCredentials**: `boolean`

#### Inherited from

AxiosRequestConfig.withCredentials

#### Defined in

node_modules/axios/index.d.ts:74

---

### xsrfCookieName

• `Optional` **xsrfCookieName**: `string`

#### Inherited from

AxiosRequestConfig.xsrfCookieName

#### Defined in

node_modules/axios/index.d.ts:78

---

### xsrfHeaderName

• `Optional` **xsrfHeaderName**: `string`

#### Inherited from

AxiosRequestConfig.xsrfHeaderName

#### Defined in

node_modules/axios/index.d.ts:79

## Methods

### onDownloadProgress

▸ `Optional` **onDownloadProgress**(`progressEvent`): `void`

#### Parameters

| Name            | Type  |
| :-------------- | :---- |
| `progressEvent` | `any` |

#### Returns

`void`

#### Inherited from

AxiosRequestConfig.onDownloadProgress

#### Defined in

node_modules/axios/index.d.ts:81

---

### onUploadProgress

▸ `Optional` **onUploadProgress**(`progressEvent`): `void`

#### Parameters

| Name            | Type  |
| :-------------- | :---- |
| `progressEvent` | `any` |

#### Returns

`void`

#### Inherited from

AxiosRequestConfig.onUploadProgress

#### Defined in

node_modules/axios/index.d.ts:80

---

### paramsSerializer

▸ `Optional` **paramsSerializer**(`params`): `string`

#### Parameters

| Name     | Type  |
| :------- | :---- |
| `params` | `any` |

#### Returns

`string`

#### Inherited from

AxiosRequestConfig.paramsSerializer

#### Defined in

node_modules/axios/index.d.ts:70
