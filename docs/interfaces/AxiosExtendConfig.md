[index.md - v1.1.2](../README.md) / [Exports](../modules.md) / AxiosExtendConfig

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

src/index.ts:31

---

### orderly

• `Optional` **orderly**: `boolean`

#### Defined in

src/index.ts:34

---

### retries

• `Optional` **retries**: `number`

#### Defined in

src/index.ts:33

---

### shouldResetTimeout

• `Optional` **shouldResetTimeout**: `boolean`

#### Defined in

src/index.ts:35

---

### unique

• `Optional` **unique**: `boolean`

#### Defined in

src/index.ts:32

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

src/index.ts:44

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

src/index.ts:43

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

src/index.ts:39

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

src/index.ts:40

---

### onResponse

▸ `Optional` **onResponse**(`res`): `AxiosResponse`<`any`\> \| `Promise`<`AxiosResponse`<`any`\>\>

#### Parameters

| Name  | Type                    |
| :---- | :---------------------- |
| `res` | `AxiosResponse`<`any`\> |

#### Returns

`AxiosResponse`<`any`\> \| `Promise`<`AxiosResponse`<`any`\>\>

#### Defined in

src/index.ts:41

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

src/index.ts:42

---

### retryCondition

▸ `Optional` **retryCondition**(): `boolean`

#### Returns

`boolean`

#### Defined in

src/index.ts:36

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

src/index.ts:37

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

src/index.ts:38
