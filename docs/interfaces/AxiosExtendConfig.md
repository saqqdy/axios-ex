[index.md - v2.3.1](../README.md) / [Exports](../modules.md) / AxiosExtendConfig

# Interface: AxiosExtendConfig

## Table of contents

### Properties

- [maxConnections](AxiosExtendConfig.md#maxconnections)
- [orderly](AxiosExtendConfig.md#orderly)
- [retries](AxiosExtendConfig.md#retries)
- [shouldResetTimeout](AxiosExtendConfig.md#shouldresettimeout)
- [unique](AxiosExtendConfig.md#unique)

### Methods

- [onCancel](AxiosExtendConfig.md#oncancel)
- [onError](AxiosExtendConfig.md#onerror)
- [onRequest](AxiosExtendConfig.md#onrequest)
- [onRequestError](AxiosExtendConfig.md#onrequesterror)
- [onResponse](AxiosExtendConfig.md#onresponse)
- [onResponseError](AxiosExtendConfig.md#onresponseerror)
- [retryCondition](AxiosExtendConfig.md#retrycondition)
- [retryDelay](AxiosExtendConfig.md#retrydelay)
- [setHeaders](AxiosExtendConfig.md#setheaders)

## Properties

### maxConnections

• `Optional` **maxConnections**: `number`

#### Defined in

[src/index.ts:42](https://github.com/saqqdy/axios-ex/blob/5d9d522/src/index.ts#L42)

___

### orderly

• `Optional` **orderly**: `boolean`

#### Defined in

[src/index.ts:45](https://github.com/saqqdy/axios-ex/blob/5d9d522/src/index.ts#L45)

___

### retries

• `Optional` **retries**: `number`

#### Defined in

[src/index.ts:44](https://github.com/saqqdy/axios-ex/blob/5d9d522/src/index.ts#L44)

___

### shouldResetTimeout

• `Optional` **shouldResetTimeout**: `boolean`

#### Defined in

[src/index.ts:46](https://github.com/saqqdy/axios-ex/blob/5d9d522/src/index.ts#L46)

___

### unique

• `Optional` **unique**: `boolean`

#### Defined in

[src/index.ts:43](https://github.com/saqqdy/axios-ex/blob/5d9d522/src/index.ts#L43)

## Methods

### onCancel

▸ `Optional` **onCancel**(`error`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `any` |

#### Returns

`void`

#### Defined in

[src/index.ts:61](https://github.com/saqqdy/axios-ex/blob/5d9d522/src/index.ts#L61)

___

### onError

▸ `Optional` **onError**(`error`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `any` |

#### Returns

`void`

#### Defined in

[src/index.ts:60](https://github.com/saqqdy/axios-ex/blob/5d9d522/src/index.ts#L60)

___

### onRequest

▸ `Optional` **onRequest**(`config`, `requestOptions`): `AxiosRequestConfig`<`any`\> \| `Promise`<`AxiosRequestConfig`<`any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `AxiosRequestConfig`<`any`\> |
| `requestOptions` | [`AxiosExtendRequestOptions`](AxiosExtendRequestOptions.md)<`any`\> |

#### Returns

`AxiosRequestConfig`<`any`\> \| `Promise`<`AxiosRequestConfig`<`any`\>\>

#### Defined in

[src/index.ts:50](https://github.com/saqqdy/axios-ex/blob/5d9d522/src/index.ts#L50)

___

### onRequestError

▸ `Optional` **onRequestError**(`error`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `any` |

#### Returns

`void`

#### Defined in

[src/index.ts:54](https://github.com/saqqdy/axios-ex/blob/5d9d522/src/index.ts#L54)

___

### onResponse

▸ `Optional` **onResponse**(`res`, `requestOptions`): `AxiosResponse`<`any`, `any`\> \| `Promise`<`AxiosResponse`<`any`, `any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `res` | `AxiosResponse`<`any`, `any`\> |
| `requestOptions` | [`AxiosExtendRequestOptions`](AxiosExtendRequestOptions.md)<`any`\> |

#### Returns

`AxiosResponse`<`any`, `any`\> \| `Promise`<`AxiosResponse`<`any`, `any`\>\>

#### Defined in

[src/index.ts:55](https://github.com/saqqdy/axios-ex/blob/5d9d522/src/index.ts#L55)

___

### onResponseError

▸ `Optional` **onResponseError**(`error`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `any` |

#### Returns

`void`

#### Defined in

[src/index.ts:59](https://github.com/saqqdy/axios-ex/blob/5d9d522/src/index.ts#L59)

___

### retryCondition

▸ `Optional` **retryCondition**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/index.ts:47](https://github.com/saqqdy/axios-ex/blob/5d9d522/src/index.ts#L47)

___

### retryDelay

▸ `Optional` **retryDelay**(`retryNumber`, `error`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `retryNumber` | `number` |
| `error` | `any` |

#### Returns

`number`

#### Defined in

[src/index.ts:48](https://github.com/saqqdy/axios-ex/blob/5d9d522/src/index.ts#L48)

___

### setHeaders

▸ `Optional` **setHeaders**(`instance`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `instance` | `AxiosInstance` |

#### Returns

`void`

#### Defined in

[src/index.ts:49](https://github.com/saqqdy/axios-ex/blob/5d9d522/src/index.ts#L49)
