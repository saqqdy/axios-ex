[index.md - v2.2.1](README.md) / Exports

# index.md - v2.2.1

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
-   [isIdempotentRequestError](modules.md#isidempotentrequesterror)
-   [isNetworkError](modules.md#isnetworkerror)
-   [isNetworkOrIdempotentRequestError](modules.md#isnetworkoridempotentrequesterror)
-   [isRetryableError](modules.md#isretryableerror)
-   [isSafeRequestError](modules.md#issaferequesterror)

## Variables

### namespace

• `Const` **namespace**: `"axios-extend"`

#### Defined in

[src/index.ts:6](https://github.com/saqqdy/axios-ex/blob/0e16e16/src/index.ts#L6)

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

[src/index.ts:132](https://github.com/saqqdy/axios-ex/blob/0e16e16/src/index.ts#L132)

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

[src/index.ts:116](https://github.com/saqqdy/axios-ex/blob/0e16e16/src/index.ts#L116)

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

[src/index.ts:95](https://github.com/saqqdy/axios-ex/blob/0e16e16/src/index.ts#L95)

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

[src/index.ts:125](https://github.com/saqqdy/axios-ex/blob/0e16e16/src/index.ts#L125)

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

[src/index.ts:141](https://github.com/saqqdy/axios-ex/blob/0e16e16/src/index.ts#L141)

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

[src/index.ts:107](https://github.com/saqqdy/axios-ex/blob/0e16e16/src/index.ts#L107)
