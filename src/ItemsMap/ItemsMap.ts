import type { IOItem, Item, ItemId, visibleElements, EventKey } from '../types';
import { events } from '../constants';
import { Observer, type ObsFn } from '../Observer';

export class ItemsMap extends Map<Item[0], Item[1]> {
  observer: Observer;
  firstRun: boolean;

  constructor() {
    super();
    this.observer = new Observer();
    this.firstRun = true;
  }

  public subscribe = (key: EventKey, value: ObsFn) => {
    return this.observer.subscribe(key, value);
  };

  public unsubscribe = (key: EventKey, fn: ObsFn) => {
    return this.observer.unsubscribe(key, fn);
  };

  private isEdgeItem = ({
    key,
    value,
    first = this.first(),
    last = this.last(),
  }: {
    key: EventKey;
    value: IOItem;
    first?: IOItem;
    last?: IOItem;
  }) => {
    const result: [EventKey, IOItem][] = [];
    if (key === first?.key) {
      result.push([events.first, value]);
    } else if (key === last?.key) {
      result.push([events.last, value]);
    }
    return result;
  };

  private edgeItemsCheck = (items: Item[]) => {
    const first = this.first();
    const last = this.last();
    const firstItem = items.find(([key]) => key === first?.key);
    const result: [EventKey, IOItem][] = [];
    if (firstItem) {
      result.push([events.first, firstItem[1]]);
    }
    const lastItem = items.find(([key]) => key === last?.key);
    if (lastItem) {
      result.push([events.last, lastItem[1]]);
    }
    return result;
  };

  public toArr = () => this.sort([...this]);

  public toItems = (): visibleElements => this.toArr().map(([key]) => key);

  public sort = (arr: Item[]) =>
    arr.sort(([, IOItemA], [, IOItemB]) => +IOItemA.index - +IOItemB.index);

  set = (_key: ItemId, value: IOItem): this => {
    const key = String(_key) as ItemId;
    const payload: [EventKey, IOItem][] = [[key, value]];

    super.set(key, value);

    payload.push(
      ...this.isEdgeItem({
        key,
        value,
        first: this.first(),
        last: this.last(),
      }),
    );
    this.observer.updateBatch(payload);

    return this;
  };

  // NOTE: Intersection Observer will fire first batch with all items
  public setBatch = (_entries: Array<Item>) => {
    if (this.firstRun) {
      this.observer.update(events.onInit);
    }
    const entries = [..._entries];

    this.sort(entries).forEach(([itemId, ioitem]) => {
      super.set(String(itemId), ioitem);
    });
    entries.push(...this.edgeItemsCheck(entries));

    this.observer.updateBatch(entries, !this.firstRun);

    this.firstRun = false;
    return this;
  };

  public first = (): IOItem | undefined => this.toArr()[0]?.[1];

  public last = (): IOItem | undefined => this.toArr().slice(-1)?.[0]?.[1];

  public filter = (
    predicate: (value: Item, index: number, array: Item[]) => boolean,
  ): Item[] => this.toArr().filter(predicate);

  public find = (
    predicate: (value: Item, index: number, obj: Item[]) => boolean,
  ): Item | undefined => this.toArr().find(predicate);

  public findIndex = (
    predicate: (value: Item, index: number, obj: Item[]) => unknown,
  ): number => this.toArr().findIndex(predicate);

  public getCurrentPos = (item: ItemId | IOItem): [Item[], number] => {
    const arr = this.toArr();
    const current = arr.findIndex(
      ([itemId, ioitem]) => itemId === item || ioitem === item,
    );
    return [arr, current];
  };

  public prev = (item: ItemId | IOItem): IOItem | undefined => {
    const [arr, current] = this.getCurrentPos(item);
    return current !== -1 ? arr[current - 1]?.[1] : undefined;
  };

  public next = (item: ItemId | IOItem): IOItem | undefined => {
    const [arr, current] = this.getCurrentPos(item);
    return current !== -1 ? arr[current + 1]?.[1] : undefined;
  };

  public getVisible = () => this.filter((value: Item) => value[1].visible);
}
