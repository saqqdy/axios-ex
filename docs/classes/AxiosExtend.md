[index.md - v2.3.1](../README.md) / [Exports](../modules.md) / AxiosExtend

# Class: AxiosExtend

AxiosExtend class

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

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`AxiosExtendConfig`](../interfaces/AxiosExtendConfig.md) |

#### Defined in

[src/index.ts:184](https://github.com/saqqdy/axios-ex/blob/5d9d522/src/index.ts#L184)

## Properties

### maxConnections

• **maxConnections**: `number`

#### Defined in

[src/index.ts:179](https://github.com/saqqdy/axios-ex/blob/5d9d522/src/index.ts#L179)

___

### onCancel

• **onCancel**: ``null`` \| (`error`: `any`) => `void`

#### Defined in

[src/index.ts:183](https://github.com/saqqdy/axios-ex/blob/5d9d522/src/index.ts#L183)

___

### orderly

• **orderly**: `boolean`

#### Defined in

[src/index.ts:180](https://github.com/saqqdy/axios-ex/blob/5d9d522/src/index.ts#L180)

___

### retries

• **retries**: `number`

#### Defined in

[src/index.ts:182](https://github.com/saqqdy/axios-ex/blob/5d9d522/src/index.ts#L182)

___

### unique

• **unique**: `boolean`

#### Defined in

[src/index.ts:181](https://github.com/saqqdy/axios-ex/blob/5d9d522/src/index.ts#L181)

___

### waiting

• **waiting**: [`AxiosExtendObject`](../interfaces/AxiosExtendObject.md)[] = `[]`

#### Defined in

[src/index.ts:178](https://github.com/saqqdy/axios-ex/blob/5d9d522/src/index.ts#L178)

## Methods

### create

▸ **create**(`options`): `Promise`<`any`\>

Create request

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`AxiosExtendRequestOptions`](../interfaces/AxiosExtendRequestOptions.md)<`any`\> |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/index.ts:279](https://github.com/saqqdy/axios-ex/blob/5d9d522/src/index.ts#L279)

___

### init

▸ **init**(`defaultOptions`): `void`

Initialization

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaultOptions` | [`AxiosExtendConfig`](../interfaces/AxiosExtendConfig.md) |

#### Returns

`void`

#### Defined in

[src/index.ts:205](https://github.com/saqqdy/axios-ex/blob/5d9d522/src/index.ts#L205)
