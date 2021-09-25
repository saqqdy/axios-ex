[index.md - v2.2.3](../README.md) / [Exports](../modules.md) / default

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

[src/index.ts:164](https://github.com/saqqdy/axios-ex/blob/72d4d86/src/index.ts#L164)

## Properties

### maxConnections

• **maxConnections**: `number`

#### Defined in

[src/index.ts:159](https://github.com/saqqdy/axios-ex/blob/72d4d86/src/index.ts#L159)

---

### onCancel

• **onCancel**: `null` \| (`error`: `any`) => `void`

#### Defined in

[src/index.ts:163](https://github.com/saqqdy/axios-ex/blob/72d4d86/src/index.ts#L163)

---

### orderly

• **orderly**: `boolean`

#### Defined in

[src/index.ts:160](https://github.com/saqqdy/axios-ex/blob/72d4d86/src/index.ts#L160)

---

### retries

• **retries**: `number`

#### Defined in

[src/index.ts:162](https://github.com/saqqdy/axios-ex/blob/72d4d86/src/index.ts#L162)

---

### unique

• **unique**: `boolean`

#### Defined in

[src/index.ts:161](https://github.com/saqqdy/axios-ex/blob/72d4d86/src/index.ts#L161)

---

### waiting

• **waiting**: [`AxiosExtendObject`](../interfaces/AxiosExtendObject.md)[] = `[]`

#### Defined in

[src/index.ts:158](https://github.com/saqqdy/axios-ex/blob/72d4d86/src/index.ts#L158)

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

[src/index.ts:238](https://github.com/saqqdy/axios-ex/blob/72d4d86/src/index.ts#L238)

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

[src/index.ts:176](https://github.com/saqqdy/axios-ex/blob/72d4d86/src/index.ts#L176)
