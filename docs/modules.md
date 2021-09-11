[index.md - v2.2.0](README.md) / Exports

# index.md - v2.2.0

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

[src/index.ts:6](https://github.com/saqqdy/axios-ex/blob/0f7e2af/src/index.ts#L6)

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

[src/index.ts:130](https://github.com/saqqdy/axios-ex/blob/0f7e2af/src/index.ts#L130)

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

[src/index.ts:114](https://github.com/saqqdy/axios-ex/blob/0f7e2af/src/index.ts#L114)

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

[src/index.ts:93](https://github.com/saqqdy/axios-ex/blob/0f7e2af/src/index.ts#L93)

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

[src/index.ts:123](https://github.com/saqqdy/axios-ex/blob/0f7e2af/src/index.ts#L123)

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

[src/index.ts:139](https://github.com/saqqdy/axios-ex/blob/0f7e2af/src/index.ts#L139)

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

[src/index.ts:105](https://github.com/saqqdy/axios-ex/blob/0f7e2af/src/index.ts#L105)
