import{i as e}from"./preload-helper-BdFrVu1K.js";var t;e((()=>{t=`import { Observer, type ObsFn } from '../Observer';
import type { EventKey, IOItem, Item, ItemId, visibleElements } from '../types';
export declare class ItemsMap extends Map<Item[0], Item[1]> {
    observer: Observer;
    firstRun: boolean;
    constructor();
    subscribe: (key: EventKey, value: ObsFn) => void;
    unsubscribe: (key: EventKey, fn: ObsFn) => void;
    private isEdgeItem;
    private edgeItemsCheck;
    toArr: () => Item[];
    toItems: () => visibleElements;
    sort: (arr: Item[]) => Item[];
    set: (_key: ItemId, value: IOItem) => this;
    setBatch: (_entries: Array<Item>) => this;
    first: () => IOItem | undefined;
    last: () => IOItem | undefined;
    filter: (predicate: (value: Item, index: number, array: Item[]) => boolean) => Item[];
    find: (predicate: (value: Item, index: number, obj: Item[]) => boolean) => Item | undefined;
    findIndex: (predicate: (value: Item, index: number, obj: Item[]) => unknown) => number;
    getCurrentPos: (item: ItemId | IOItem) => [Item[], number];
    prev: (item: ItemId | IOItem) => IOItem | undefined;
    next: (item: ItemId | IOItem) => IOItem | undefined;
    getVisible: () => Item[];
}
`}))();export{t as default};