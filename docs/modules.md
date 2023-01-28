[index.md - v2.3.1](README.md) / Exports

# index.md - v2.3.1

## Table of contents

### References

- [default](modules.md#default)

### Classes

- [AxiosExtend](classes/AxiosExtend.md)

### Interfaces

- [AxiosExtendConfig](interfaces/AxiosExtendConfig.md)
- [AxiosExtendCurrentStateType](interfaces/AxiosExtendCurrentStateType.md)
- [AxiosExtendObject](interfaces/AxiosExtendObject.md)
- [AxiosExtendRequestOptions](interfaces/AxiosExtendRequestOptions.md)

### Variables

- [namespace](modules.md#namespace)

### Functions

- [exponentialDelay](modules.md#exponentialdelay)
- [isIdempotentRequestError](modules.md#isidempotentrequesterror)
- [isNetworkError](modules.md#isnetworkerror)
- [isNetworkOrIdempotentRequestError](modules.md#isnetworkoridempotentrequesterror)
- [isRetryableError](modules.md#isretryableerror)
- [isSafeRequestError](modules.md#issaferequesterror)

## References

### default

Renames and re-exports [AxiosExtend](classes/AxiosExtend.md)

## Variables

### namespace

• `Const` **namespace**: ``"axios-extend"``

#### Defined in

[src/index.ts:14](https://github.com/saqqdy/axios-ex/blob/5d9d522/src/index.ts#L14)

## Functions

### exponentialDelay

▸ **exponentialDelay**(`retryNumber?`): `number`

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `retryNumber` | `number` | `0` | default: 0 |

#### Returns

`number`

delay milliseconds

#### Defined in

[src/index.ts:156](https://github.com/saqqdy/axios-ex/blob/5d9d522/src/index.ts#L156)

___

### isIdempotentRequestError

▸ **isIdempotentRequestError**(`error`): `boolean`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `error` | `any` | Error |

#### Returns

`boolean`

boolean

#### Defined in

[src/index.ts:140](https://github.com/saqqdy/axios-ex/blob/5d9d522/src/index.ts#L140)

___

### isNetworkError

▸ **isNetworkError**(`error`): `boolean`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `error` | `AxiosError`<`unknown`, `any`\> | Error |

#### Returns

`boolean`

boolean

#### Defined in

[src/index.ts:119](https://github.com/saqqdy/axios-ex/blob/5d9d522/src/index.ts#L119)

___

### isNetworkOrIdempotentRequestError

▸ **isNetworkOrIdempotentRequestError**(`error`): `boolean`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `error` | `AxiosError`<`unknown`, `any`\> | Error |

#### Returns

`boolean`

boolean

#### Defined in

[src/index.ts:149](https://github.com/saqqdy/axios-ex/blob/5d9d522/src/index.ts#L149)

___

### isRetryableError

▸ **isRetryableError**(`error`): `boolean`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `error` | `AxiosError`<`unknown`, `any`\> | Error |

#### Returns

`boolean`

boolean

#### Defined in

[src/index.ts:165](https://github.com/saqqdy/axios-ex/blob/5d9d522/src/index.ts#L165)

___

### isSafeRequestError

▸ **isSafeRequestError**(`error`): `boolean`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `error` | `any` | Error |

#### Returns

`boolean`

boolean

#### Defined in

[src/index.ts:131](https://github.com/saqqdy/axios-ex/blob/5d9d522/src/index.ts#L131)
