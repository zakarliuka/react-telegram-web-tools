@zakarliuka/react-telegram-web-tools

# @zakarliuka/react-telegram-web-tools

## Table of contents

### Variables

- [webAppContext](README.md#webappcontext)

### Functions

- [BackButton](README.md#backbutton)
- [MainButton](README.md#mainbutton)
- [WebAppProvider](README.md#webappprovider)
- [getWebApp](README.md#getwebapp)
- [useClose](README.md#useclose)
- [useClosingConfirmation](README.md#useclosingconfirmation)
- [useCloudItem](README.md#useclouditem)
- [useCloudStorage](README.md#usecloudstorage)
- [useExpand](README.md#useexpand)
- [useHapticFeedback](README.md#usehapticfeedback)
- [useInitData](README.md#useinitdata)
- [useOnEvent](README.md#useonevent)
- [useOpenInvoice](README.md#useopeninvoice)
- [useReadTextFromClipboard](README.md#usereadtextfromclipboard)
- [useRequestContact](README.md#userequestcontact)
- [useRequestWriteAccess](README.md#userequestwriteaccess)
- [useScanQrPopup](README.md#usescanqrpopup)
- [useSendData](README.md#usesenddata)
- [useShowAlert](README.md#useshowalert)
- [useShowConfirm](README.md#useshowconfirm)
- [useShowPopup](README.md#useshowpopup)
- [useSwitchInlineQuery](README.md#useswitchinlinequery)
- [useThemeParams](README.md#usethemeparams)
- [useWaInfo](README.md#usewainfo)
- [useWebApp](README.md#usewebapp)

## Variables

### webAppContext

• `Const` **webAppContext**: `Context`\<``null`` \| `WebApp`\>

## Functions

### BackButton

▸ **BackButton**(`props`, `context?`): `ReactNode`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `Object` |
| `props.onClick?` | () => `void` |
| `context?` | `any` |

#### Returns

`ReactNode`

___

### MainButton

▸ **MainButton**(`props`, `context?`): `ReactNode`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `Object` |
| `props.color?` | `string` |
| `props.isActive?` | `boolean` |
| `props.isProgressVisible?` | `boolean` |
| `props.onClick?` | () => `void` |
| `props.text` | `string` |
| `props.textColor?` | `string` |
| `context?` | `any` |

#### Returns

`ReactNode`

___

### WebAppProvider

▸ **WebAppProvider**(`props`, `context?`): `ReactNode`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `Object` |
| `props.children?` | `ReactNode` |
| `context?` | `any` |

#### Returns

`ReactNode`

___

### getWebApp

▸ **getWebApp**(): ``null`` \| `WebApp`

#### Returns

``null`` \| `WebApp`

___

### useClose

▸ **useClose**(): () => `undefined` \| `void`

#### Returns

`fn`

▸ (): `undefined` \| `void`

##### Returns

`undefined` \| `void`

___

### useClosingConfirmation

▸ **useClosingConfirmation**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `disableClosingConfirmation` | () => `void` |
| `enableClosingConfirmation` | () => `void` |
| `isClosingConfirmationEnabled` | `boolean` |

___

### useCloudItem

▸ **useCloudItem**(`key`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` \| `string`[] |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `data` | ``null`` \| `Record`\<`string`, `string`\> |
| `error` | ``null`` \| `Error` |
| `loading` | `boolean` |

___

### useCloudStorage

▸ **useCloudStorage**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `getItem` | (`key`: `string`) => `Promise`\<`string`\> |
| `getItems` | (`key`: `string`[]) => `Promise`\<`Record`\<`string`, `string`\>\> |
| `getKeys` | () => `Promise`\<`string`[]\> |
| `removeItem` | (`key`: `string`) => `Promise`\<`void`\> |
| `removeItems` | (`key`: `string`[]) => `Promise`\<`void`\> |
| `setItem` | (`key`: `string`, `value`: `string`) => `Promise`\<`void`\> |

___

### useExpand

▸ **useExpand**(): readonly [`undefined` \| `boolean`, () => `undefined` \| `void`]

#### Returns

readonly [`undefined` \| `boolean`, () => `undefined` \| `void`]

___

### useHapticFeedback

▸ **useHapticFeedback**(): readonly [(...`args`: [style: "light" \| "medium" \| "heavy" \| "rigid" \| "soft"]) => `undefined` \| `HapticFeedback`, (...`args`: [type: "error" \| "success" \| "warning"]) => `undefined` \| `HapticFeedback`, () => `undefined` \| `HapticFeedback`]

#### Returns

readonly [(...`args`: [style: "light" \| "medium" \| "heavy" \| "rigid" \| "soft"]) => `undefined` \| `HapticFeedback`, (...`args`: [type: "error" \| "success" \| "warning"]) => `undefined` \| `HapticFeedback`, () => `undefined` \| `HapticFeedback`]

___

### useInitData

▸ **useInitData**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `initData` | `undefined` \| `string` |
| `initDataUnsafe` | `undefined` \| `WebAppInitData` |

___

### useOnEvent

▸ **useOnEvent**\<`EventType`\>(`event`, `cb`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `EventType` | extends keyof `EventDataMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `EventType` |
| `cb` | (`val`: `EventDataMap`[`EventType`]) => `void` |

#### Returns

`void`

___

### useOpenInvoice

▸ **useOpenInvoice**(): (`url`: `string`) => `Promise`\<`unknown`\>

#### Returns

`fn`

▸ (`url`): `Promise`\<`unknown`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

##### Returns

`Promise`\<`unknown`\>

___

### useReadTextFromClipboard

▸ **useReadTextFromClipboard**(): () => `Promise`\<`unknown`\>

#### Returns

`fn`

▸ (): `Promise`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

___

### useRequestContact

▸ **useRequestContact**(): () => `Promise`\<`unknown`\>

#### Returns

`fn`

▸ (): `Promise`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

___

### useRequestWriteAccess

▸ **useRequestWriteAccess**(): () => `Promise`\<`unknown`\>

#### Returns

`fn`

▸ (): `Promise`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

___

### useScanQrPopup

▸ **useScanQrPopup**(): readonly [(`params`: `ScanQrPopupParams`, `callback?`: (`text`: `string`) => `void`) => `undefined` \| `void`, () => `undefined` \| `void`]

#### Returns

readonly [(`params`: `ScanQrPopupParams`, `callback?`: (`text`: `string`) => `void`) => `undefined` \| `void`, () => `undefined` \| `void`]

___

### useSendData

▸ **useSendData**(): (`data`: `string`) => `undefined` \| `void`

#### Returns

`fn`

▸ (`data`): `undefined` \| `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |

##### Returns

`undefined` \| `void`

___

### useShowAlert

▸ **useShowAlert**(): (`message`: `string`) => `Promise`\<`unknown`\>

#### Returns

`fn`

▸ (`message`): `Promise`\<`unknown`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

##### Returns

`Promise`\<`unknown`\>

___

### useShowConfirm

▸ **useShowConfirm**(): (`message`: `string`) => `Promise`\<`unknown`\>

#### Returns

`fn`

▸ (`message`): `Promise`\<`unknown`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

##### Returns

`Promise`\<`unknown`\>

___

### useShowPopup

▸ **useShowPopup**(): (`params`: `PopupParams`) => `Promise`\<`unknown`\>

#### Returns

`fn`

▸ (`params`): `Promise`\<`unknown`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `PopupParams` |

##### Returns

`Promise`\<`unknown`\>

___

### useSwitchInlineQuery

▸ **useSwitchInlineQuery**(): (...`args`: [query: string, choose\_chat\_types?: string[]]) => `undefined` \| `void`

#### Returns

`fn`

▸ (`...args`): `undefined` \| `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [query: string, choose\_chat\_types?: string[]] |

##### Returns

`undefined` \| `void`

___

### useThemeParams

▸ **useThemeParams**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `colorScheme` | ``null`` \| `string` |
| `setBackgroundColor` | (`color`: `string`) => `void` |
| `setHeaderColor` | (`color`: `string`) => `void` |
| `theme` | ``null`` \| `ThemeParams` |

___

### useWaInfo

▸ **useWaInfo**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `isVersionAtLeast` | (`version`: `string`) => `undefined` \| `boolean` |
| `platform` | ``null`` \| `string` |
| `version` | ``null`` \| `string` |

___

### useWebApp

▸ **useWebApp**(): ``null`` \| `WebApp`

#### Returns

``null`` \| `WebApp`
