[index.md - v2.0.0](README.md) / Exports

# index.md - v2.0.0

## Table of contents

### Classes

-   [default](classes/default.md)

### Interfaces

-   [AxiosExtendConfig](interfaces/AxiosExtendConfig.md)
-   [AxiosExtendCurrentStateType](interfaces/AxiosExtendCurrentStateType.md)
-   [AxiosExtendObject](interfaces/AxiosExtendObject.md)
-   [AxiosExtendRequestOptions](interfaces/AxiosExtendRequestOptions.md)

### Variables

-   [namespace](modules.md#namespace)

### Functions

-   [exponentialDelay](modules.md#exponentialdelay)
-   [fixConfig](modules.md#fixconfig)
-   [getCurrentState](modules.md#getcurrentstate)
-   [getRequestOptions](modules.md#getrequestoptions)
-   [isIdempotentRequestError](modules.md#isidempotentrequesterror)
-   [isNetworkError](modules.md#isnetworkerror)
-   [isNetworkOrIdempotentRequestError](modules.md#isnetworkoridempotentrequesterror)
-   [isRetryableError](modules.md#isretryableerror)
-   [isSafeRequestError](modules.md#issaferequesterror)
-   [noDelay](modules.md#nodelay)

## Variables

### namespace

• `Const` **namespace**: `"axios-extend"`

#### Defined in

[src/index.ts:6](https://github.com/saqqdy/axios-ex/blob/5e23005/src/index.ts#L6)

## Functions

### exponentialDelay

▸ **exponentialDelay**(`retryNumber?`): `number`

#### Parameters

| Name          | Type     | Default value | Description |
| :------------ | :------- | :------------ | :---------- |
| `retryNumber` | `number` | `0`           | 默认：0     |

#### Returns

`number`

delay 毫秒

#### Defined in

[src/index.ts:130](https://github.com/saqqdy/axios-ex/blob/5e23005/src/index.ts#L130)

---

### fixConfig

▸ **fixConfig**(`axios`, `config`): `void`

#### Parameters

| Name     | Type  | Description |
| :------- | :---- | :---------- |
| `axios`  | `any` | any         |
| `config` | `any` | any         |

#### Returns

`void`

#### Defined in

[src/index.ts:78](https://github.com/saqqdy/axios-ex/blob/5e23005/src/index.ts#L78)

---

### getCurrentState

▸ **getCurrentState**(`config`): [`AxiosExtendCurrentStateType`](interfaces/AxiosExtendCurrentStateType.md)

Initializes and returns the retry state for the given request/config

#### Parameters

| Name     | Type                                                                   | Description               |
| :------- | :--------------------------------------------------------------------- | :------------------------ |
| `config` | [`AxiosExtendRequestOptions`](interfaces/AxiosExtendRequestOptions.md) | AxiosExtendRequestOptions |

#### Returns

[`AxiosExtendCurrentStateType`](interfaces/AxiosExtendCurrentStateType.md)

currentState

#### Defined in

[src/index.ts:59](https://github.com/saqqdy/axios-ex/blob/5e23005/src/index.ts#L59)

---

### getRequestOptions

▸ **getRequestOptions**(`config`, `defaultOptions`): [`AxiosExtendConfig`](interfaces/AxiosExtendConfig.md)

Returns the axios-retry options for the current request

#### Parameters

| Name             | Type                                                                   | Description               |
| :--------------- | :--------------------------------------------------------------------- | :------------------------ |
| `config`         | [`AxiosExtendRequestOptions`](interfaces/AxiosExtendRequestOptions.md) | AxiosExtendRequestOptions |
| `defaultOptions` | [`AxiosExtendConfig`](interfaces/AxiosExtendConfig.md)                 | AxiosExtendConfig         |

#### Returns

[`AxiosExtendConfig`](interfaces/AxiosExtendConfig.md)

options

#### Defined in

[src/index.ts:71](https://github.com/saqqdy/axios-ex/blob/5e23005/src/index.ts#L71)

---

### isIdempotentRequestError

▸ **isIdempotentRequestError**(`error`): `boolean`

#### Parameters

| Name    | Type  | Description |
| :------ | :---- | :---------- |
| `error` | `any` | 错误类型    |

#### Returns

`boolean`

boolean

#### Defined in

[src/index.ts:114](https://github.com/saqqdy/axios-ex/blob/5e23005/src/index.ts#L114)

---

### isNetworkError

▸ **isNetworkError**(`error`): `boolean`

#### Parameters

| Name    | Type         | Description |
| :------ | :----------- | :---------- |
| `error` | `AxiosError` | 错误类型    |

#### Returns

`boolean`

boolean

#### Defined in

[src/index.ts:93](https://github.com/saqqdy/axios-ex/blob/5e23005/src/index.ts#L93)

---

### isNetworkOrIdempotentRequestError

▸ **isNetworkOrIdempotentRequestError**(`error`): `boolean`

#### Parameters

| Name    | Type         | Description |
| :------ | :----------- | :---------- |
| `error` | `AxiosError` | 错误类型    |

#### Returns

`boolean`

boolean

#### Defined in

[src/index.ts:123](https://github.com/saqqdy/axios-ex/blob/5e23005/src/index.ts#L123)

---

### isRetryableError

▸ **isRetryableError**(`error`): `boolean`

#### Parameters

| Name    | Type         | Description |
| :------ | :----------- | :---------- |
| `error` | `AxiosError` | 错误类型    |

#### Returns

`boolean`

boolean

#### Defined in

[src/index.ts:139](https://github.com/saqqdy/axios-ex/blob/5e23005/src/index.ts#L139)

---

### isSafeRequestError

▸ **isSafeRequestError**(`error`): `boolean`

#### Parameters

| Name    | Type  | Description |
| :------ | :---- | :---------- |
| `error` | `any` | 错误类型    |

#### Returns

`boolean`

boolean

#### Defined in

[src/index.ts:105](https://github.com/saqqdy/axios-ex/blob/5e23005/src/index.ts#L105)

---

### noDelay

▸ **noDelay**(): `number`

获取默认延迟时间 毫秒

#### Returns

`number`

number - delay in milliseconds, always 0

#### Defined in

[src/index.ts:51](https://github.com/saqqdy/axios-ex/blob/5e23005/src/index.ts#L51)
