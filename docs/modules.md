[index.md - v2.2.3](README.md) / Exports

# index.md - v2.2.3

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

• **namespace**: `"axios-extend"`

#### Defined in

[src/index.ts:6](https://github.com/saqqdy/axios-ex/blob/72d4d86/src/index.ts#L6)

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

[src/index.ts:139](https://github.com/saqqdy/axios-ex/blob/72d4d86/src/index.ts#L139)

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

[src/index.ts:123](https://github.com/saqqdy/axios-ex/blob/72d4d86/src/index.ts#L123)

---

### isNetworkError

▸ **isNetworkError**(`error`): `boolean`

#### Parameters

| Name    | Type                 | Description |
| :------ | :------------------- | :---------- |
| `error` | `AxiosError`<`any`\> | 错误类型    |

#### Returns

`boolean`

boolean

#### Defined in

[src/index.ts:102](https://github.com/saqqdy/axios-ex/blob/72d4d86/src/index.ts#L102)

---

### isNetworkOrIdempotentRequestError

▸ **isNetworkOrIdempotentRequestError**(`error`): `boolean`

#### Parameters

| Name    | Type                 | Description |
| :------ | :------------------- | :---------- |
| `error` | `AxiosError`<`any`\> | 错误类型    |

#### Returns

`boolean`

boolean

#### Defined in

[src/index.ts:132](https://github.com/saqqdy/axios-ex/blob/72d4d86/src/index.ts#L132)

---

### isRetryableError

▸ **isRetryableError**(`error`): `boolean`

#### Parameters

| Name    | Type                 | Description |
| :------ | :------------------- | :---------- |
| `error` | `AxiosError`<`any`\> | 错误类型    |

#### Returns

`boolean`

boolean

#### Defined in

[src/index.ts:148](https://github.com/saqqdy/axios-ex/blob/72d4d86/src/index.ts#L148)

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

[src/index.ts:114](https://github.com/saqqdy/axios-ex/blob/72d4d86/src/index.ts#L114)
