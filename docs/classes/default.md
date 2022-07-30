[index.md - v2.3.0-beta.1](../README.md) / [Exports](../modules.md) / default

# Class: default

axios 封装

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

[src/index.ts:205](https://github.com/saqqdy/axios-ex/blob/41c4f04/src/index.ts#L205)

## Properties

### maxConnections

• **maxConnections**: `number`

#### Defined in

[src/index.ts:200](https://github.com/saqqdy/axios-ex/blob/41c4f04/src/index.ts#L200)

---

### onCancel

• **onCancel**: `null` \| (`error`: `any`) => `void`

#### Defined in

[src/index.ts:204](https://github.com/saqqdy/axios-ex/blob/41c4f04/src/index.ts#L204)

---

### orderly

• **orderly**: `boolean`

#### Defined in

[src/index.ts:201](https://github.com/saqqdy/axios-ex/blob/41c4f04/src/index.ts#L201)

---

### retries

• **retries**: `number`

#### Defined in

[src/index.ts:203](https://github.com/saqqdy/axios-ex/blob/41c4f04/src/index.ts#L203)

---

### unique

• **unique**: `boolean`

#### Defined in

[src/index.ts:202](https://github.com/saqqdy/axios-ex/blob/41c4f04/src/index.ts#L202)

---

### waiting

• **waiting**: [`AxiosExtendObject`](../interfaces/AxiosExtendObject.md)[] = `[]`

#### Defined in

[src/index.ts:199](https://github.com/saqqdy/axios-ex/blob/41c4f04/src/index.ts#L199)

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

[src/index.ts:312](https://github.com/saqqdy/axios-ex/blob/41c4f04/src/index.ts#L312)

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

[src/index.ts:226](https://github.com/saqqdy/axios-ex/blob/41c4f04/src/index.ts#L226)
