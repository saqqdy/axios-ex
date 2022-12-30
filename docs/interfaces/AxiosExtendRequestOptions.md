[index.md - v2.3.0-beta.5](../README.md) / [Exports](../modules.md) / AxiosExtendRequestOptions

# Interface: AxiosExtendRequestOptions

## Hierarchy

- `AxiosRequestConfig`

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
- [formSerializer](AxiosExtendRequestOptions.md#formserializer)
- [headers](AxiosExtendRequestOptions.md#headers)
- [httpAgent](AxiosExtendRequestOptions.md#httpagent)
- [httpsAgent](AxiosExtendRequestOptions.md#httpsagent)
- [insecureHTTPParser](AxiosExtendRequestOptions.md#insecurehttpparser)
- [maxBodyLength](AxiosExtendRequestOptions.md#maxbodylength)
- [maxContentLength](AxiosExtendRequestOptions.md#maxcontentlength)
- [maxRate](AxiosExtendRequestOptions.md#maxrate)
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

• `Optional` **adapter**: `AxiosAdapterConfig` \| `AxiosAdapterConfig`[]

#### Inherited from

AxiosRequestConfig.adapter

#### Defined in

node_modules/.pnpm/axios@1.2.2_debug@4.3.4/node_modules/axios/index.d.ts:299

---

### auth

• `Optional` **auth**: `AxiosBasicCredentials`

#### Inherited from

AxiosRequestConfig.auth

#### Defined in

node_modules/.pnpm/axios@1.2.2_debug@4.3.4/node_modules/axios/index.d.ts:300

---

### axios-extend

• `Optional` **axios-extend**: `any`

#### Defined in

[src/index.ts:32](https://github.com/saqqdy/axios-ex/blob/c4edae2/src/index.ts#L32)

---

### baseURL

• `Optional` **baseURL**: `string`

#### Inherited from

AxiosRequestConfig.baseURL

#### Defined in

node_modules/.pnpm/axios@1.2.2_debug@4.3.4/node_modules/axios/index.d.ts:289

---

### beforeRedirect

• `Optional` **beforeRedirect**: (`options`: `Record`<`string`, `any`\>, `responseDetails`: { `headers`: `Record`<`string`, `string`\> }) => `void`

#### Type declaration

▸ (`options`, `responseDetails`): `void`

##### Parameters

| Name                      | Type                          |
| :------------------------ | :---------------------------- |
| `options`                 | `Record`<`string`, `any`\>    |
| `responseDetails`         | `Object`                      |
| `responseDetails.headers` | `Record`<`string`, `string`\> |

##### Returns

`void`

#### Inherited from

AxiosRequestConfig.beforeRedirect

#### Defined in

node_modules/.pnpm/axios@1.2.2_debug@4.3.4/node_modules/axios/index.d.ts:312

---

### cancelToken

• `Optional` **cancelToken**: `CancelToken`

#### Overrides

AxiosRequestConfig.cancelToken

#### Defined in

[src/index.ts:36](https://github.com/saqqdy/axios-ex/blob/c4edae2/src/index.ts#L36)

---

### data

• `Optional` **data**: `any`

#### Inherited from

AxiosRequestConfig.data

#### Defined in

node_modules/.pnpm/axios@1.2.2_debug@4.3.4/node_modules/axios/index.d.ts:295

---

### decompress

• `Optional` **decompress**: `boolean`

#### Inherited from

AxiosRequestConfig.decompress

#### Defined in

node_modules/.pnpm/axios@1.2.2_debug@4.3.4/node_modules/axios/index.d.ts:318

---

### env

• `Optional` **env**: `Object`

#### Type declaration

| Name        | Type                             |
| :---------- | :------------------------------- |
| `FormData?` | (...`args`: `any`[]) => `object` |

#### Inherited from

AxiosRequestConfig.env

#### Defined in

node_modules/.pnpm/axios@1.2.2_debug@4.3.4/node_modules/axios/index.d.ts:322

---

### error

• `Optional` **error**: `string`

#### Defined in

[src/index.ts:38](https://github.com/saqqdy/axios-ex/blob/c4edae2/src/index.ts#L38)

---

### formSerializer

• `Optional` **formSerializer**: `FormSerializerOptions`

#### Inherited from

AxiosRequestConfig.formSerializer

#### Defined in

node_modules/.pnpm/axios@1.2.2_debug@4.3.4/node_modules/axios/index.d.ts:325

---

### headers

• `Optional` **headers**: `AxiosHeaders` \| `Partial`<`RawAxiosHeaders` & `MethodsHeaders` & `CommonHeaders`\>

#### Inherited from

AxiosRequestConfig.headers

#### Defined in

node_modules/.pnpm/axios@1.2.2_debug@4.3.4/node_modules/axios/index.d.ts:292

---

### httpAgent

• `Optional` **httpAgent**: `any`

#### Inherited from

AxiosRequestConfig.httpAgent

#### Defined in

node_modules/.pnpm/axios@1.2.2_debug@4.3.4/node_modules/axios/index.d.ts:314

---

### httpsAgent

• `Optional` **httpsAgent**: `any`

#### Inherited from

AxiosRequestConfig.httpsAgent

#### Defined in

node_modules/.pnpm/axios@1.2.2_debug@4.3.4/node_modules/axios/index.d.ts:315

---

### insecureHTTPParser

• `Optional` **insecureHTTPParser**: `boolean`

#### Inherited from

AxiosRequestConfig.insecureHTTPParser

#### Defined in

node_modules/.pnpm/axios@1.2.2_debug@4.3.4/node_modules/axios/index.d.ts:321

---

### maxBodyLength

• `Optional` **maxBodyLength**: `number`

#### Inherited from

AxiosRequestConfig.maxBodyLength

#### Defined in

node_modules/.pnpm/axios@1.2.2_debug@4.3.4/node_modules/axios/index.d.ts:309

---

### maxContentLength

• `Optional` **maxContentLength**: `number`

#### Inherited from

AxiosRequestConfig.maxContentLength

#### Defined in

node_modules/.pnpm/axios@1.2.2_debug@4.3.4/node_modules/axios/index.d.ts:307

---

### maxRate

• `Optional` **maxRate**: `number` \| [`number`, `number`]

#### Inherited from

AxiosRequestConfig.maxRate

#### Defined in

node_modules/.pnpm/axios@1.2.2_debug@4.3.4/node_modules/axios/index.d.ts:311

---

### maxRedirects

• `Optional` **maxRedirects**: `number`

#### Inherited from

AxiosRequestConfig.maxRedirects

#### Defined in

node_modules/.pnpm/axios@1.2.2_debug@4.3.4/node_modules/axios/index.d.ts:310

---

### method

• `Optional` **method**: `string`

#### Inherited from

AxiosRequestConfig.method

#### Defined in

node_modules/.pnpm/axios@1.2.2_debug@4.3.4/node_modules/axios/index.d.ts:288

---

### onDownloadProgress

• `Optional` **onDownloadProgress**: (`progressEvent`: `AxiosProgressEvent`) => `void`

#### Type declaration

▸ (`progressEvent`): `void`

##### Parameters

| Name            | Type                 |
| :-------------- | :------------------- |
| `progressEvent` | `AxiosProgressEvent` |

##### Returns

`void`

#### Inherited from

AxiosRequestConfig.onDownloadProgress

#### Defined in

node_modules/.pnpm/axios@1.2.2_debug@4.3.4/node_modules/axios/index.d.ts:306

---

### onUploadProgress

• `Optional` **onUploadProgress**: (`progressEvent`: `AxiosProgressEvent`) => `void`

#### Type declaration

▸ (`progressEvent`): `void`

##### Parameters

| Name            | Type                 |
| :-------------- | :------------------- |
| `progressEvent` | `AxiosProgressEvent` |

##### Returns

`void`

#### Inherited from

AxiosRequestConfig.onUploadProgress

#### Defined in

node_modules/.pnpm/axios@1.2.2_debug@4.3.4/node_modules/axios/index.d.ts:305

---

### orderly

• `Optional` **orderly**: `boolean`

#### Defined in

[src/index.ts:34](https://github.com/saqqdy/axios-ex/blob/c4edae2/src/index.ts#L34)

---

### params

• `Optional` **params**: `any`

#### Inherited from

AxiosRequestConfig.params

#### Defined in

node_modules/.pnpm/axios@1.2.2_debug@4.3.4/node_modules/axios/index.d.ts:293

---

### paramsSerializer

• `Optional` **paramsSerializer**: `ParamsSerializerOptions`

#### Inherited from

AxiosRequestConfig.paramsSerializer

#### Defined in

node_modules/.pnpm/axios@1.2.2_debug@4.3.4/node_modules/axios/index.d.ts:294

---

### proxy

• `Optional` **proxy**: `false` \| `AxiosProxyConfig`

#### Inherited from

AxiosRequestConfig.proxy

#### Defined in

node_modules/.pnpm/axios@1.2.2_debug@4.3.4/node_modules/axios/index.d.ts:316

---

### requestOptions

• `Optional` **requestOptions**: [`AxiosExtendRequestOptions`](AxiosExtendRequestOptions.md)

#### Defined in

[src/index.ts:35](https://github.com/saqqdy/axios-ex/blob/c4edae2/src/index.ts#L35)

---

### responseEncoding

• `Optional` **responseEncoding**: `string`

#### Inherited from

AxiosRequestConfig.responseEncoding

#### Defined in

node_modules/.pnpm/axios@1.2.2_debug@4.3.4/node_modules/axios/index.d.ts:302

---

### responseType

• `Optional` **responseType**: `ResponseType`

#### Inherited from

AxiosRequestConfig.responseType

#### Defined in

node_modules/.pnpm/axios@1.2.2_debug@4.3.4/node_modules/axios/index.d.ts:301

---

### signal

• `Optional` **signal**: `GenericAbortSignal`

#### Inherited from

AxiosRequestConfig.signal

#### Defined in

node_modules/.pnpm/axios@1.2.2_debug@4.3.4/node_modules/axios/index.d.ts:320

---

### socketPath

• `Optional` **socketPath**: `null` \| `string`

#### Inherited from

AxiosRequestConfig.socketPath

#### Defined in

node_modules/.pnpm/axios@1.2.2_debug@4.3.4/node_modules/axios/index.d.ts:313

---

### timeout

• `Optional` **timeout**: `number`

#### Inherited from

AxiosRequestConfig.timeout

#### Defined in

node_modules/.pnpm/axios@1.2.2_debug@4.3.4/node_modules/axios/index.d.ts:296

---

### timeoutErrorMessage

• `Optional` **timeoutErrorMessage**: `string`

#### Inherited from

AxiosRequestConfig.timeoutErrorMessage

#### Defined in

node_modules/.pnpm/axios@1.2.2_debug@4.3.4/node_modules/axios/index.d.ts:297

---

### transformRequest

• `Optional` **transformRequest**: `AxiosRequestTransformer` \| `AxiosRequestTransformer`[]

#### Inherited from

AxiosRequestConfig.transformRequest

#### Defined in

node_modules/.pnpm/axios@1.2.2_debug@4.3.4/node_modules/axios/index.d.ts:290

---

### transformResponse

• `Optional` **transformResponse**: `AxiosResponseTransformer` \| `AxiosResponseTransformer`[]

#### Inherited from

AxiosRequestConfig.transformResponse

#### Defined in

node_modules/.pnpm/axios@1.2.2_debug@4.3.4/node_modules/axios/index.d.ts:291

---

### transitional

• `Optional` **transitional**: `TransitionalOptions`

#### Inherited from

AxiosRequestConfig.transitional

#### Defined in

node_modules/.pnpm/axios@1.2.2_debug@4.3.4/node_modules/axios/index.d.ts:319

---

### type

• `Optional` **type**: `string`

#### Defined in

[src/index.ts:37](https://github.com/saqqdy/axios-ex/blob/c4edae2/src/index.ts#L37)

---

### unique

• `Optional` **unique**: `boolean`

#### Defined in

[src/index.ts:33](https://github.com/saqqdy/axios-ex/blob/c4edae2/src/index.ts#L33)

---

### url

• `Optional` **url**: `string`

#### Inherited from

AxiosRequestConfig.url

#### Defined in

node_modules/.pnpm/axios@1.2.2_debug@4.3.4/node_modules/axios/index.d.ts:287

---

### validateStatus

• `Optional` **validateStatus**: `null` \| (`status`: `number`) => `boolean`

#### Inherited from

AxiosRequestConfig.validateStatus

#### Defined in

node_modules/.pnpm/axios@1.2.2_debug@4.3.4/node_modules/axios/index.d.ts:308

---

### withCredentials

• `Optional` **withCredentials**: `boolean`

#### Inherited from

AxiosRequestConfig.withCredentials

#### Defined in

node_modules/.pnpm/axios@1.2.2_debug@4.3.4/node_modules/axios/index.d.ts:298

---

### xsrfCookieName

• `Optional` **xsrfCookieName**: `string`

#### Inherited from

AxiosRequestConfig.xsrfCookieName

#### Defined in

node_modules/.pnpm/axios@1.2.2_debug@4.3.4/node_modules/axios/index.d.ts:303

---

### xsrfHeaderName

• `Optional` **xsrfHeaderName**: `string`

#### Inherited from

AxiosRequestConfig.xsrfHeaderName

#### Defined in

node_modules/.pnpm/axios@1.2.2_debug@4.3.4/node_modules/axios/index.d.ts:304
