[index.md - v2.2.3](../README.md) / [Exports](../modules.md) / AxiosExtendConfig

# Interface: AxiosExtendConfig

## Table of contents

### Properties

-   [maxConnections](AxiosExtendConfig.md#maxconnections)
-   [orderly](AxiosExtendConfig.md#orderly)
-   [retries](AxiosExtendConfig.md#retries)
-   [shouldResetTimeout](AxiosExtendConfig.md#shouldresettimeout)
-   [unique](AxiosExtendConfig.md#unique)

### Methods

-   [onCancel](AxiosExtendConfig.md#oncancel)
-   [onError](AxiosExtendConfig.md#onerror)
-   [onRequest](AxiosExtendConfig.md#onrequest)
-   [onRequestError](AxiosExtendConfig.md#onrequesterror)
-   [onResponse](AxiosExtendConfig.md#onresponse)
-   [onResponseError](AxiosExtendConfig.md#onresponseerror)
-   [retryCondition](AxiosExtendConfig.md#retrycondition)
-   [retryDelay](AxiosExtendConfig.md#retrydelay)
-   [setHeaders](AxiosExtendConfig.md#setheaders)

## Properties

### maxConnections

• `Optional` **maxConnections**: `number`

#### Defined in

[src/index.ts:34](https://github.com/saqqdy/axios-ex/blob/72d4d86/src/index.ts#L34)

---

### orderly

• `Optional` **orderly**: `boolean`

#### Defined in

[src/index.ts:37](https://github.com/saqqdy/axios-ex/blob/72d4d86/src/index.ts#L37)

---

### retries

• `Optional` **retries**: `number`

#### Defined in

[src/index.ts:36](https://github.com/saqqdy/axios-ex/blob/72d4d86/src/index.ts#L36)

---

### shouldResetTimeout

• `Optional` **shouldResetTimeout**: `boolean`

#### Defined in

[src/index.ts:38](https://github.com/saqqdy/axios-ex/blob/72d4d86/src/index.ts#L38)

---

### unique

• `Optional` **unique**: `boolean`

#### Defined in

[src/index.ts:35](https://github.com/saqqdy/axios-ex/blob/72d4d86/src/index.ts#L35)

## Methods

### onCancel

▸ `Optional` **onCancel**(`error`): `void`

#### Parameters

| Name    | Type  |
| :------ | :---- |
| `error` | `any` |

#### Returns

`void`

#### Defined in

[src/index.ts:47](https://github.com/saqqdy/axios-ex/blob/72d4d86/src/index.ts#L47)

---

### onError

▸ `Optional` **onError**(`error`): `void`

#### Parameters

| Name    | Type  |
| :------ | :---- |
| `error` | `any` |

#### Returns

`void`

#### Defined in

[src/index.ts:46](https://github.com/saqqdy/axios-ex/blob/72d4d86/src/index.ts#L46)

---

### onRequest

▸ `Optional` **onRequest**(`config`, `requestOptions`): `AxiosRequestConfig` \| `Promise`<`AxiosRequestConfig`\>

#### Parameters

| Name             | Type                                                        |
| :--------------- | :---------------------------------------------------------- |
| `config`         | `AxiosRequestConfig`                                        |
| `requestOptions` | [`AxiosExtendRequestOptions`](AxiosExtendRequestOptions.md) |

#### Returns

`AxiosRequestConfig` \| `Promise`<`AxiosRequestConfig`\>

#### Defined in

[src/index.ts:42](https://github.com/saqqdy/axios-ex/blob/72d4d86/src/index.ts#L42)

---

### onRequestError

▸ `Optional` **onRequestError**(`error`): `void`

#### Parameters

| Name    | Type  |
| :------ | :---- |
| `error` | `any` |

#### Returns

`void`

#### Defined in

[src/index.ts:43](https://github.com/saqqdy/axios-ex/blob/72d4d86/src/index.ts#L43)

---

### onResponse

▸ `Optional` **onResponse**(`res`, `requestOptions`): `AxiosResponse`<`any`\> \| `Promise`<`AxiosResponse`<`any`\>\>

#### Parameters

| Name             | Type                                                        |
| :--------------- | :---------------------------------------------------------- |
| `res`            | `AxiosResponse`<`any`\>                                     |
| `requestOptions` | [`AxiosExtendRequestOptions`](AxiosExtendRequestOptions.md) |

#### Returns

`AxiosResponse`<`any`\> \| `Promise`<`AxiosResponse`<`any`\>\>

#### Defined in

[src/index.ts:44](https://github.com/saqqdy/axios-ex/blob/72d4d86/src/index.ts#L44)

---

### onResponseError

▸ `Optional` **onResponseError**(`error`): `void`

#### Parameters

| Name    | Type  |
| :------ | :---- |
| `error` | `any` |

#### Returns

`void`

#### Defined in

[src/index.ts:45](https://github.com/saqqdy/axios-ex/blob/72d4d86/src/index.ts#L45)

---

### retryCondition

▸ `Optional` **retryCondition**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/index.ts:39](https://github.com/saqqdy/axios-ex/blob/72d4d86/src/index.ts#L39)

---

### retryDelay

▸ `Optional` **retryDelay**(`retryNumber`, `error`): `number`

#### Parameters

| Name          | Type     |
| :------------ | :------- |
| `retryNumber` | `number` |
| `error`       | `any`    |

#### Returns

`number`

#### Defined in

[src/index.ts:40](https://github.com/saqqdy/axios-ex/blob/72d4d86/src/index.ts#L40)

---

### setHeaders

▸ `Optional` **setHeaders**(`instance`): `void`

#### Parameters

| Name       | Type            |
| :--------- | :-------------- |
| `instance` | `AxiosInstance` |

#### Returns

`void`

#### Defined in

[src/index.ts:41](https://github.com/saqqdy/axios-ex/blob/72d4d86/src/index.ts#L41)
