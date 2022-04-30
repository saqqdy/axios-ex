[index.md - v2.2.4](README.md) / Exports

# index.md - v2.2.4

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

[src/index.ts:13](https://github.com/saqqdy/axios-ex/blob/e5622c7/src/index.ts#L13)

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

[src/index.ts:163](https://github.com/saqqdy/axios-ex/blob/e5622c7/src/index.ts#L163)

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

[src/index.ts:144](https://github.com/saqqdy/axios-ex/blob/e5622c7/src/index.ts#L144)

---

### isNetworkError

▸ **isNetworkError**(`error`): `boolean`

#### Parameters

| Name    | Type                        | Description |
| :------ | :-------------------------- | :---------- |
| `error` | `AxiosError`<`any`, `any`\> | 错误类型    |

#### Returns

`boolean`

boolean

#### Defined in

[src/index.ts:120](https://github.com/saqqdy/axios-ex/blob/e5622c7/src/index.ts#L120)

---

### isNetworkOrIdempotentRequestError

▸ **isNetworkOrIdempotentRequestError**(`error`): `boolean`

#### Parameters

| Name    | Type                        | Description |
| :------ | :-------------------------- | :---------- |
| `error` | `AxiosError`<`any`, `any`\> | 错误类型    |

#### Returns

`boolean`

boolean

#### Defined in

[src/index.ts:156](https://github.com/saqqdy/axios-ex/blob/e5622c7/src/index.ts#L156)

---

### isRetryableError

▸ **isRetryableError**(`error`): `boolean`

#### Parameters

| Name    | Type                        | Description |
| :------ | :-------------------------- | :---------- |
| `error` | `AxiosError`<`any`, `any`\> | 错误类型    |

#### Returns

`boolean`

boolean

#### Defined in

[src/index.ts:172](https://github.com/saqqdy/axios-ex/blob/e5622c7/src/index.ts#L172)

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

[src/index.ts:132](https://github.com/saqqdy/axios-ex/blob/e5622c7/src/index.ts#L132)
