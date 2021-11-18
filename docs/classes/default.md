[index.md - v2.2.4](../README.md) / [Exports](../modules.md) / default

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

[src/index.ts:192](https://github.com/saqqdy/axios-ex/blob/e5622c7/src/index.ts#L192)

## Properties

### maxConnections

• **maxConnections**: `number`

#### Defined in

[src/index.ts:187](https://github.com/saqqdy/axios-ex/blob/e5622c7/src/index.ts#L187)

---

### onCancel

• **onCancel**: `null` \| (`error`: `any`) => `void`

#### Defined in

[src/index.ts:191](https://github.com/saqqdy/axios-ex/blob/e5622c7/src/index.ts#L191)

---

### orderly

• **orderly**: `boolean`

#### Defined in

[src/index.ts:188](https://github.com/saqqdy/axios-ex/blob/e5622c7/src/index.ts#L188)

---

### retries

• **retries**: `number`

#### Defined in

[src/index.ts:190](https://github.com/saqqdy/axios-ex/blob/e5622c7/src/index.ts#L190)

---

### unique

• **unique**: `boolean`

#### Defined in

[src/index.ts:189](https://github.com/saqqdy/axios-ex/blob/e5622c7/src/index.ts#L189)

---

### waiting

• **waiting**: [`AxiosExtendObject`](../interfaces/AxiosExtendObject.md)[] = `[]`

#### Defined in

[src/index.ts:186](https://github.com/saqqdy/axios-ex/blob/e5622c7/src/index.ts#L186)

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

[src/index.ts:296](https://github.com/saqqdy/axios-ex/blob/e5622c7/src/index.ts#L296)

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

[src/index.ts:211](https://github.com/saqqdy/axios-ex/blob/e5622c7/src/index.ts#L211)
