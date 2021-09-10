[index.md - v2.0.0](../README.md) / [Exports](../modules.md) / default

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

[src/index.ts:156](https://github.com/saqqdy/axios-ex/blob/ac7db21/src/index.ts#L156)

## Properties

### maxConnections

• **maxConnections**: `number` = `0`

#### Defined in

[src/index.ts:151](https://github.com/saqqdy/axios-ex/blob/ac7db21/src/index.ts#L151)

---

### onCancel

• **onCancel**: `null` \| (`error`: `any`) => `void`

#### Defined in

[src/index.ts:155](https://github.com/saqqdy/axios-ex/blob/ac7db21/src/index.ts#L155)

---

### orderly

• **orderly**: `boolean` = `true`

#### Defined in

[src/index.ts:152](https://github.com/saqqdy/axios-ex/blob/ac7db21/src/index.ts#L152)

---

### retries

• **retries**: `number` = `3`

#### Defined in

[src/index.ts:154](https://github.com/saqqdy/axios-ex/blob/ac7db21/src/index.ts#L154)

---

### unique

• **unique**: `boolean` = `false`

#### Defined in

[src/index.ts:153](https://github.com/saqqdy/axios-ex/blob/ac7db21/src/index.ts#L153)

---

### waiting

• **waiting**: [`AxiosExtendObject`](../interfaces/AxiosExtendObject.md)[] = `[]`

#### Defined in

[src/index.ts:150](https://github.com/saqqdy/axios-ex/blob/ac7db21/src/index.ts#L150)

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

[src/index.ts:231](https://github.com/saqqdy/axios-ex/blob/ac7db21/src/index.ts#L231)

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

[src/index.ts:168](https://github.com/saqqdy/axios-ex/blob/ac7db21/src/index.ts#L168)
