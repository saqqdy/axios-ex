[index.md - v2.2.1](../README.md) / [Exports](../modules.md) / default

# Class: default

axios 封装

**`returns`** Promise

## Table of contents

### Constructors

-   [constructor](default.md#constructor)

### Properties

-   [maxConnections](default.md#maxconnections)
-   [onCancel](default.md#oncancel)
-   [orderly](default.md#orderly)
-   [retries](default.md#retries)
-   [unique](default.md#unique)
-   [waiting](default.md#waiting)

### Methods

-   [create](default.md#create)
-   [init](default.md#init)

## Constructors

### constructor

• **new default**(`__namedParameters`)

#### Parameters

| Name                | Type                                                      |
| :------------------ | :-------------------------------------------------------- |
| `__namedParameters` | [`AxiosExtendConfig`](../interfaces/AxiosExtendConfig.md) |

#### Defined in

[src/index.ts:157](https://github.com/saqqdy/axios-ex/blob/0e16e16/src/index.ts#L157)

## Properties

### maxConnections

• **maxConnections**: `number`

#### Defined in

[src/index.ts:152](https://github.com/saqqdy/axios-ex/blob/0e16e16/src/index.ts#L152)

---

### onCancel

• **onCancel**: `null` \| (`error`: `any`) => `void`

#### Defined in

[src/index.ts:156](https://github.com/saqqdy/axios-ex/blob/0e16e16/src/index.ts#L156)

---

### orderly

• **orderly**: `boolean`

#### Defined in

[src/index.ts:153](https://github.com/saqqdy/axios-ex/blob/0e16e16/src/index.ts#L153)

---

### retries

• **retries**: `number`

#### Defined in

[src/index.ts:155](https://github.com/saqqdy/axios-ex/blob/0e16e16/src/index.ts#L155)

---

### unique

• **unique**: `boolean`

#### Defined in

[src/index.ts:154](https://github.com/saqqdy/axios-ex/blob/0e16e16/src/index.ts#L154)

---

### waiting

• **waiting**: [`AxiosExtendObject`](../interfaces/AxiosExtendObject.md)[] = `[]`

#### Defined in

[src/index.ts:151](https://github.com/saqqdy/axios-ex/blob/0e16e16/src/index.ts#L151)

## Methods

### create

▸ **create**(`options`): `Promise`<`any`\>

创建请求

#### Parameters

| Name      | Type                                                                      |
| :-------- | :------------------------------------------------------------------------ |
| `options` | [`AxiosExtendRequestOptions`](../interfaces/AxiosExtendRequestOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/index.ts:232](https://github.com/saqqdy/axios-ex/blob/0e16e16/src/index.ts#L232)

---

### init

▸ **init**(`defaultOptions`): `void`

初始化

#### Parameters

| Name             | Type                                                      |
| :--------------- | :-------------------------------------------------------- |
| `defaultOptions` | [`AxiosExtendConfig`](../interfaces/AxiosExtendConfig.md) |

#### Returns

`void`

#### Defined in

[src/index.ts:169](https://github.com/saqqdy/axios-ex/blob/0e16e16/src/index.ts#L169)
