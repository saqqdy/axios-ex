[index.md - v2.0.0](../README.md) / [Exports](../modules.md) / default

# Class: default

axios 封装

**`returns`** Promise

## Table of contents

### Constructors

-   [constructor](default.md#constructor)

### Properties

-   [delay](default.md#delay)
-   [maxConnections](default.md#maxconnections)
-   [onCancel](default.md#oncancel)
-   [orderly](default.md#orderly)
-   [retries](default.md#retries)
-   [unique](default.md#unique)
-   [waiting](default.md#waiting)

### Methods

-   [create](default.md#create)
-   [init](default.md#init)
-   [sleep](default.md#sleep)

## Constructors

### constructor

• **new default**(`__namedParameters`)

#### Parameters

| Name                | Type                                                      |
| :------------------ | :-------------------------------------------------------- |
| `__namedParameters` | [`AxiosExtendConfig`](../interfaces/AxiosExtendConfig.md) |

#### Defined in

[src/index.ts:157](https://github.com/saqqdy/axios-ex/blob/7279e48/src/index.ts#L157)

## Properties

### delay

• **delay**: `number`

#### Defined in

[src/index.ts:155](https://github.com/saqqdy/axios-ex/blob/7279e48/src/index.ts#L155)

---

### maxConnections

• **maxConnections**: `number`

#### Defined in

[src/index.ts:151](https://github.com/saqqdy/axios-ex/blob/7279e48/src/index.ts#L151)

---

### onCancel

• **onCancel**: `null` \| (`error`: `any`) => `void`

#### Defined in

[src/index.ts:156](https://github.com/saqqdy/axios-ex/blob/7279e48/src/index.ts#L156)

---

### orderly

• **orderly**: `boolean`

#### Defined in

[src/index.ts:152](https://github.com/saqqdy/axios-ex/blob/7279e48/src/index.ts#L152)

---

### retries

• **retries**: `number`

#### Defined in

[src/index.ts:154](https://github.com/saqqdy/axios-ex/blob/7279e48/src/index.ts#L154)

---

### unique

• **unique**: `boolean`

#### Defined in

[src/index.ts:153](https://github.com/saqqdy/axios-ex/blob/7279e48/src/index.ts#L153)

---

### waiting

• **waiting**: [`AxiosExtendObject`](../interfaces/AxiosExtendObject.md)[] = `[]`

#### Defined in

[src/index.ts:150](https://github.com/saqqdy/axios-ex/blob/7279e48/src/index.ts#L150)

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

[src/index.ts:233](https://github.com/saqqdy/axios-ex/blob/7279e48/src/index.ts#L233)

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

[src/index.ts:170](https://github.com/saqqdy/axios-ex/blob/7279e48/src/index.ts#L170)

---

### sleep

▸ `Private` **sleep**(`ms`): `Promise`<`unknown`\>

延迟时间 ms

#### Parameters

| Name | Type     | Description |
| :--- | :------- | :---------- |
| `ms` | `number` | 毫秒        |

#### Returns

`Promise`<`unknown`\>

Promise<Delay>

#### Defined in

[src/index.ts:301](https://github.com/saqqdy/axios-ex/blob/7279e48/src/index.ts#L301)
