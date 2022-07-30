[index.md - v2.3.0-beta.1](README.md) / Exports

# index.md - v2.3.0-beta.1

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

[src/index.ts:14](https://github.com/saqqdy/axios-ex/blob/41c4f04/src/index.ts#L14)

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

[src/index.ts:164](https://github.com/saqqdy/axios-ex/blob/41c4f04/src/index.ts#L164)

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

[src/index.ts:145](https://github.com/saqqdy/axios-ex/blob/41c4f04/src/index.ts#L145)

---

### isNetworkError

▸ **isNetworkError**(`error`): `boolean`

#### Parameters

| Name    | Type                            | Description |
| :------ | :------------------------------ | :---------- |
| `error` | `AxiosError`<`unknown`, `any`\> | 错误类型    |

#### Returns

`boolean`

boolean

#### Defined in

[src/index.ts:121](https://github.com/saqqdy/axios-ex/blob/41c4f04/src/index.ts#L121)

---

### isNetworkOrIdempotentRequestError

▸ **isNetworkOrIdempotentRequestError**(`error`): `boolean`

#### Parameters

| Name    | Type                            | Description |
| :------ | :------------------------------ | :---------- |
| `error` | `AxiosError`<`unknown`, `any`\> | 错误类型    |

#### Returns

`boolean`

boolean

#### Defined in

[src/index.ts:157](https://github.com/saqqdy/axios-ex/blob/41c4f04/src/index.ts#L157)

---

### isRetryableError

▸ **isRetryableError**(`error`): `boolean`

#### Parameters

| Name    | Type                            | Description |
| :------ | :------------------------------ | :---------- |
| `error` | `AxiosError`<`unknown`, `any`\> | 错误类型    |

#### Returns

`boolean`

boolean

#### Defined in

[src/index.ts:173](https://github.com/saqqdy/axios-ex/blob/41c4f04/src/index.ts#L173)

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

[src/index.ts:133](https://github.com/saqqdy/axios-ex/blob/41c4f04/src/index.ts#L133)
