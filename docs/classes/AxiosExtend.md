[index.md - v2.3.0-beta.5](../README.md) / [Exports](../modules.md) / AxiosExtend

# Class: AxiosExtend

axios 封装

## Table of contents

### Constructors

- [constructor](AxiosExtend.md#constructor)

### Properties

- [maxConnections](AxiosExtend.md#maxconnections)
- [onCancel](AxiosExtend.md#oncancel)
- [orderly](AxiosExtend.md#orderly)
- [retries](AxiosExtend.md#retries)
- [unique](AxiosExtend.md#unique)
- [waiting](AxiosExtend.md#waiting)

### Methods

- [create](AxiosExtend.md#create)
- [init](AxiosExtend.md#init)

## Constructors

### constructor

• **new AxiosExtend**(`«destructured»`)

#### Parameters

| Name             | Type                                                      |
| :--------------- | :-------------------------------------------------------- |
| `«destructured»` | [`AxiosExtendConfig`](../interfaces/AxiosExtendConfig.md) |

#### Defined in

[src/index.ts:196](https://github.com/saqqdy/axios-ex/blob/c4edae2/src/index.ts#L196)

## Properties

### maxConnections

• **maxConnections**: `number`

#### Defined in

[src/index.ts:191](https://github.com/saqqdy/axios-ex/blob/c4edae2/src/index.ts#L191)

---

### onCancel

• **onCancel**: `null` \| (`error`: `any`) => `void`

#### Defined in

[src/index.ts:195](https://github.com/saqqdy/axios-ex/blob/c4edae2/src/index.ts#L195)

---

### orderly

• **orderly**: `boolean`

#### Defined in

[src/index.ts:192](https://github.com/saqqdy/axios-ex/blob/c4edae2/src/index.ts#L192)

---

### retries

• **retries**: `number`

#### Defined in

[src/index.ts:194](https://github.com/saqqdy/axios-ex/blob/c4edae2/src/index.ts#L194)

---

### unique

• **unique**: `boolean`

#### Defined in

[src/index.ts:193](https://github.com/saqqdy/axios-ex/blob/c4edae2/src/index.ts#L193)

---

### waiting

• **waiting**: [`AxiosExtendObject`](../interfaces/AxiosExtendObject.md)[] = `[]`

#### Defined in

[src/index.ts:190](https://github.com/saqqdy/axios-ex/blob/c4edae2/src/index.ts#L190)

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

[src/index.ts:291](https://github.com/saqqdy/axios-ex/blob/c4edae2/src/index.ts#L291)

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

[src/index.ts:217](https://github.com/saqqdy/axios-ex/blob/c4edae2/src/index.ts#L217)
