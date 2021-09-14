[index.md - v2.2.1](../README.md) / [Exports](../modules.md) / AxiosExtendRequestOptions

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
-   [maxBodyLength](AxiosExtendRequestOptions.md#maxbodylength)
-   [maxContentLength](AxiosExtendRequestOptions.md#maxcontentlength)
-   [maxRedirects](AxiosExtendRequestOptions.md#maxredirects)
-   [method](AxiosExtendRequestOptions.md#method)
-   [orderly](AxiosExtendRequestOptions.md#orderly)
-   [params](AxiosExtendRequestOptions.md#params)
-   [proxy](AxiosExtendRequestOptions.md#proxy)
-   [requestOptions](AxiosExtendRequestOptions.md#requestoptions)
-   [responseType](AxiosExtendRequestOptions.md#responsetype)
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

node_modules/axios/index.d.ts:63

---

### auth

• `Optional` **auth**: `AxiosBasicCredentials`

#### Inherited from

AxiosRequestConfig.auth

#### Defined in

node_modules/axios/index.d.ts:64

---

### axios-extend

• `Optional` **axios-extend**: `any`

#### Defined in

[src/index.ts:23](https://github.com/saqqdy/axios-ex/blob/0e16e16/src/index.ts#L23)

---

### baseURL

• `Optional` **baseURL**: `string`

#### Inherited from

AxiosRequestConfig.baseURL

#### Defined in

node_modules/axios/index.d.ts:53

---

### cancelToken

• `Optional` **cancelToken**: `CancelToken`

#### Overrides

AxiosRequestConfig.cancelToken

#### Defined in

[src/index.ts:27](https://github.com/saqqdy/axios-ex/blob/0e16e16/src/index.ts#L27)

---

### data

• `Optional` **data**: `any`

#### Inherited from

AxiosRequestConfig.data

#### Defined in

node_modules/axios/index.d.ts:59

---

### decompress

• `Optional` **decompress**: `boolean`

#### Inherited from

AxiosRequestConfig.decompress

#### Defined in

node_modules/axios/index.d.ts:79

---

### error

• `Optional` **error**: `string`

#### Defined in

[src/index.ts:29](https://github.com/saqqdy/axios-ex/blob/0e16e16/src/index.ts#L29)

---

### headers

• `Optional` **headers**: `any`

#### Inherited from

AxiosRequestConfig.headers

#### Defined in

node_modules/axios/index.d.ts:56

---

### httpAgent

• `Optional` **httpAgent**: `any`

#### Inherited from

AxiosRequestConfig.httpAgent

#### Defined in

node_modules/axios/index.d.ts:75

---

### httpsAgent

• `Optional` **httpsAgent**: `any`

#### Inherited from

AxiosRequestConfig.httpsAgent

#### Defined in

node_modules/axios/index.d.ts:76

---

### maxBodyLength

• `Optional` **maxBodyLength**: `number`

#### Inherited from

AxiosRequestConfig.maxBodyLength

#### Defined in

node_modules/axios/index.d.ts:72

---

### maxContentLength

• `Optional` **maxContentLength**: `number`

#### Inherited from

AxiosRequestConfig.maxContentLength

#### Defined in

node_modules/axios/index.d.ts:70

---

### maxRedirects

• `Optional` **maxRedirects**: `number`

#### Inherited from

AxiosRequestConfig.maxRedirects

#### Defined in

node_modules/axios/index.d.ts:73

---

### method

• `Optional` **method**: `Method`

#### Inherited from

AxiosRequestConfig.method

#### Defined in

node_modules/axios/index.d.ts:52

---

### orderly

• `Optional` **orderly**: `boolean`

#### Defined in

[src/index.ts:25](https://github.com/saqqdy/axios-ex/blob/0e16e16/src/index.ts#L25)

---

### params

• `Optional` **params**: `any`

#### Inherited from

AxiosRequestConfig.params

#### Defined in

node_modules/axios/index.d.ts:57

---

### proxy

• `Optional` **proxy**: `false` \| `AxiosProxyConfig`

#### Inherited from

AxiosRequestConfig.proxy

#### Defined in

node_modules/axios/index.d.ts:77

---

### requestOptions

• `Optional` **requestOptions**: [`AxiosExtendRequestOptions`](AxiosExtendRequestOptions.md)

#### Defined in

[src/index.ts:26](https://github.com/saqqdy/axios-ex/blob/0e16e16/src/index.ts#L26)

---

### responseType

• `Optional` **responseType**: `ResponseType`

#### Inherited from

AxiosRequestConfig.responseType

#### Defined in

node_modules/axios/index.d.ts:65

---

### socketPath

• `Optional` **socketPath**: `null` \| `string`

#### Inherited from

AxiosRequestConfig.socketPath

#### Defined in

node_modules/axios/index.d.ts:74

---

### timeout

• `Optional` **timeout**: `number`

#### Inherited from

AxiosRequestConfig.timeout

#### Defined in

node_modules/axios/index.d.ts:60

---

### timeoutErrorMessage

• `Optional` **timeoutErrorMessage**: `string`

#### Inherited from

AxiosRequestConfig.timeoutErrorMessage

#### Defined in

node_modules/axios/index.d.ts:61

---

### transformRequest

• `Optional` **transformRequest**: `AxiosTransformer` \| `AxiosTransformer`[]

#### Inherited from

AxiosRequestConfig.transformRequest

#### Defined in

node_modules/axios/index.d.ts:54

---

### transformResponse

• `Optional` **transformResponse**: `AxiosTransformer` \| `AxiosTransformer`[]

#### Inherited from

AxiosRequestConfig.transformResponse

#### Defined in

node_modules/axios/index.d.ts:55

---

### transitional

• `Optional` **transitional**: `TransitionalOptions`

#### Inherited from

AxiosRequestConfig.transitional

#### Defined in

node_modules/axios/index.d.ts:80

---

### type

• `Optional` **type**: `string`

#### Defined in

[src/index.ts:28](https://github.com/saqqdy/axios-ex/blob/0e16e16/src/index.ts#L28)

---

### unique

• `Optional` **unique**: `boolean`

#### Defined in

[src/index.ts:24](https://github.com/saqqdy/axios-ex/blob/0e16e16/src/index.ts#L24)

---

### url

• `Optional` **url**: `string`

#### Inherited from

AxiosRequestConfig.url

#### Defined in

node_modules/axios/index.d.ts:51

---

### validateStatus

• `Optional` **validateStatus**: `null` \| (`status`: `number`) => `boolean`

#### Inherited from

AxiosRequestConfig.validateStatus

#### Defined in

node_modules/axios/index.d.ts:71

---

### withCredentials

• `Optional` **withCredentials**: `boolean`

#### Inherited from

AxiosRequestConfig.withCredentials

#### Defined in

node_modules/axios/index.d.ts:62

---

### xsrfCookieName

• `Optional` **xsrfCookieName**: `string`

#### Inherited from

AxiosRequestConfig.xsrfCookieName

#### Defined in

node_modules/axios/index.d.ts:66

---

### xsrfHeaderName

• `Optional` **xsrfHeaderName**: `string`

#### Inherited from

AxiosRequestConfig.xsrfHeaderName

#### Defined in

node_modules/axios/index.d.ts:67

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

node_modules/axios/index.d.ts:69

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

node_modules/axios/index.d.ts:68

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

node_modules/axios/index.d.ts:58
