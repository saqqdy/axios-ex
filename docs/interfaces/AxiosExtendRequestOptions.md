[index.md - v2.3.1-beta.1](../README.md) / [Exports](../modules.md) / AxiosExtendRequestOptions

# Interface: AxiosExtendRequestOptions<D\>

## Type parameters

| Name | Type  |
| :--- | :---- |
| `D`  | `any` |

## Hierarchy

- `InternalAxiosRequestConfig`<`D`\>

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

InternalAxiosRequestConfig.adapter

#### Defined in

node_modules/.pnpm/axios@1.2.5/node_modules/axios/index.d.ts:315

---

### auth

• `Optional` **auth**: `AxiosBasicCredentials`

#### Inherited from

InternalAxiosRequestConfig.auth

#### Defined in

node_modules/.pnpm/axios@1.2.5/node_modules/axios/index.d.ts:316

---

### axios-extend

• `Optional` **axios-extend**: `any`

#### Defined in

[src/index.ts:32](https://github.com/saqqdy/axios-ex/blob/99f1fa6/src/index.ts#L32)

---

### baseURL

• `Optional` **baseURL**: `string`

#### Inherited from

InternalAxiosRequestConfig.baseURL

#### Defined in

node_modules/.pnpm/axios@1.2.5/node_modules/axios/index.d.ts:305

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

InternalAxiosRequestConfig.beforeRedirect

#### Defined in

node_modules/.pnpm/axios@1.2.5/node_modules/axios/index.d.ts:328

---

### cancelToken

• `Optional` **cancelToken**: `CancelToken`

#### Overrides

InternalAxiosRequestConfig.cancelToken

#### Defined in

[src/index.ts:36](https://github.com/saqqdy/axios-ex/blob/99f1fa6/src/index.ts#L36)

---

### data

• `Optional` **data**: `D`

#### Inherited from

InternalAxiosRequestConfig.data

#### Defined in

node_modules/.pnpm/axios@1.2.5/node_modules/axios/index.d.ts:311

---

### decompress

• `Optional` **decompress**: `boolean`

#### Inherited from

InternalAxiosRequestConfig.decompress

#### Defined in

node_modules/.pnpm/axios@1.2.5/node_modules/axios/index.d.ts:334

---

### env

• `Optional` **env**: `Object`

#### Type declaration

| Name        | Type                             |
| :---------- | :------------------------------- |
| `FormData?` | (...`args`: `any`[]) => `object` |

#### Inherited from

InternalAxiosRequestConfig.env

#### Defined in

node_modules/.pnpm/axios@1.2.5/node_modules/axios/index.d.ts:338

---

### error

• `Optional` **error**: `string`

#### Defined in

[src/index.ts:38](https://github.com/saqqdy/axios-ex/blob/99f1fa6/src/index.ts#L38)

---

### formSerializer

• `Optional` **formSerializer**: `FormSerializerOptions`

#### Inherited from

InternalAxiosRequestConfig.formSerializer

#### Defined in

node_modules/.pnpm/axios@1.2.5/node_modules/axios/index.d.ts:341

---

### headers

• **headers**: `AxiosRequestHeaders`

#### Inherited from

InternalAxiosRequestConfig.headers

#### Defined in

node_modules/.pnpm/axios@1.2.5/node_modules/axios/index.d.ts:348

---

### httpAgent

• `Optional` **httpAgent**: `any`

#### Inherited from

InternalAxiosRequestConfig.httpAgent

#### Defined in

node_modules/.pnpm/axios@1.2.5/node_modules/axios/index.d.ts:330

---

### httpsAgent

• `Optional` **httpsAgent**: `any`

#### Inherited from

InternalAxiosRequestConfig.httpsAgent

#### Defined in

node_modules/.pnpm/axios@1.2.5/node_modules/axios/index.d.ts:331

---

### insecureHTTPParser

• `Optional` **insecureHTTPParser**: `boolean`

#### Inherited from

InternalAxiosRequestConfig.insecureHTTPParser

#### Defined in

node_modules/.pnpm/axios@1.2.5/node_modules/axios/index.d.ts:337

---

### maxBodyLength

• `Optional` **maxBodyLength**: `number`

#### Inherited from

InternalAxiosRequestConfig.maxBodyLength

#### Defined in

node_modules/.pnpm/axios@1.2.5/node_modules/axios/index.d.ts:325

---

### maxContentLength

• `Optional` **maxContentLength**: `number`

#### Inherited from

InternalAxiosRequestConfig.maxContentLength

#### Defined in

node_modules/.pnpm/axios@1.2.5/node_modules/axios/index.d.ts:323

---

### maxRate

• `Optional` **maxRate**: `number` \| [`number`, `number`]

#### Inherited from

InternalAxiosRequestConfig.maxRate

#### Defined in

node_modules/.pnpm/axios@1.2.5/node_modules/axios/index.d.ts:327

---

### maxRedirects

• `Optional` **maxRedirects**: `number`

#### Inherited from

InternalAxiosRequestConfig.maxRedirects

#### Defined in

node_modules/.pnpm/axios@1.2.5/node_modules/axios/index.d.ts:326

---

### method

• `Optional` **method**: `string`

#### Inherited from

InternalAxiosRequestConfig.method

#### Defined in

node_modules/.pnpm/axios@1.2.5/node_modules/axios/index.d.ts:304

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

InternalAxiosRequestConfig.onDownloadProgress

#### Defined in

node_modules/.pnpm/axios@1.2.5/node_modules/axios/index.d.ts:322

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

InternalAxiosRequestConfig.onUploadProgress

#### Defined in

node_modules/.pnpm/axios@1.2.5/node_modules/axios/index.d.ts:321

---

### orderly

• `Optional` **orderly**: `boolean`

#### Defined in

[src/index.ts:34](https://github.com/saqqdy/axios-ex/blob/99f1fa6/src/index.ts#L34)

---

### params

• `Optional` **params**: `any`

#### Inherited from

InternalAxiosRequestConfig.params

#### Defined in

node_modules/.pnpm/axios@1.2.5/node_modules/axios/index.d.ts:309

---

### paramsSerializer

• `Optional` **paramsSerializer**: `ParamsSerializerOptions`

#### Inherited from

InternalAxiosRequestConfig.paramsSerializer

#### Defined in

node_modules/.pnpm/axios@1.2.5/node_modules/axios/index.d.ts:310

---

### proxy

• `Optional` **proxy**: `false` \| `AxiosProxyConfig`

#### Inherited from

InternalAxiosRequestConfig.proxy

#### Defined in

node_modules/.pnpm/axios@1.2.5/node_modules/axios/index.d.ts:332

---

### requestOptions

• `Optional` **requestOptions**: [`AxiosExtendRequestOptions`](AxiosExtendRequestOptions.md)<`any`\>

#### Defined in

[src/index.ts:35](https://github.com/saqqdy/axios-ex/blob/99f1fa6/src/index.ts#L35)

---

### responseEncoding

• `Optional` **responseEncoding**: `string`

#### Inherited from

InternalAxiosRequestConfig.responseEncoding

#### Defined in

node_modules/.pnpm/axios@1.2.5/node_modules/axios/index.d.ts:318

---

### responseType

• `Optional` **responseType**: `ResponseType`

#### Inherited from

InternalAxiosRequestConfig.responseType

#### Defined in

node_modules/.pnpm/axios@1.2.5/node_modules/axios/index.d.ts:317

---

### signal

• `Optional` **signal**: `GenericAbortSignal`

#### Inherited from

InternalAxiosRequestConfig.signal

#### Defined in

node_modules/.pnpm/axios@1.2.5/node_modules/axios/index.d.ts:336

---

### socketPath

• `Optional` **socketPath**: `null` \| `string`

#### Inherited from

InternalAxiosRequestConfig.socketPath

#### Defined in

node_modules/.pnpm/axios@1.2.5/node_modules/axios/index.d.ts:329

---

### timeout

• `Optional` **timeout**: `number`

#### Inherited from

InternalAxiosRequestConfig.timeout

#### Defined in

node_modules/.pnpm/axios@1.2.5/node_modules/axios/index.d.ts:312

---

### timeoutErrorMessage

• `Optional` **timeoutErrorMessage**: `string`

#### Inherited from

InternalAxiosRequestConfig.timeoutErrorMessage

#### Defined in

node_modules/.pnpm/axios@1.2.5/node_modules/axios/index.d.ts:313

---

### transformRequest

• `Optional` **transformRequest**: `AxiosRequestTransformer` \| `AxiosRequestTransformer`[]

#### Inherited from

InternalAxiosRequestConfig.transformRequest

#### Defined in

node_modules/.pnpm/axios@1.2.5/node_modules/axios/index.d.ts:306

---

### transformResponse

• `Optional` **transformResponse**: `AxiosResponseTransformer` \| `AxiosResponseTransformer`[]

#### Inherited from

InternalAxiosRequestConfig.transformResponse

#### Defined in

node_modules/.pnpm/axios@1.2.5/node_modules/axios/index.d.ts:307

---

### transitional

• `Optional` **transitional**: `TransitionalOptions`

#### Inherited from

InternalAxiosRequestConfig.transitional

#### Defined in

node_modules/.pnpm/axios@1.2.5/node_modules/axios/index.d.ts:335

---

### type

• `Optional` **type**: `string`

#### Defined in

[src/index.ts:37](https://github.com/saqqdy/axios-ex/blob/99f1fa6/src/index.ts#L37)

---

### unique

• `Optional` **unique**: `boolean`

#### Defined in

[src/index.ts:33](https://github.com/saqqdy/axios-ex/blob/99f1fa6/src/index.ts#L33)

---

### url

• `Optional` **url**: `string`

#### Inherited from

InternalAxiosRequestConfig.url

#### Defined in

node_modules/.pnpm/axios@1.2.5/node_modules/axios/index.d.ts:303

---

### validateStatus

• `Optional` **validateStatus**: `null` \| (`status`: `number`) => `boolean`

#### Inherited from

InternalAxiosRequestConfig.validateStatus

#### Defined in

node_modules/.pnpm/axios@1.2.5/node_modules/axios/index.d.ts:324

---

### withCredentials

• `Optional` **withCredentials**: `boolean`

#### Inherited from

InternalAxiosRequestConfig.withCredentials

#### Defined in

node_modules/.pnpm/axios@1.2.5/node_modules/axios/index.d.ts:314

---

### xsrfCookieName

• `Optional` **xsrfCookieName**: `string`

#### Inherited from

InternalAxiosRequestConfig.xsrfCookieName

#### Defined in

node_modules/.pnpm/axios@1.2.5/node_modules/axios/index.d.ts:319

---

### xsrfHeaderName

• `Optional` **xsrfHeaderName**: `string`

#### Inherited from

InternalAxiosRequestConfig.xsrfHeaderName

#### Defined in

node_modules/.pnpm/axios@1.2.5/node_modules/axios/index.d.ts:320
