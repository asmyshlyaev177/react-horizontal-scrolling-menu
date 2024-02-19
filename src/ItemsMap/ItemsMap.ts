import type { IOItem, Item, ItemId, visibleElements, EventKey } from '../types';
import { filterSeparators } from '../helpers';
import { events, separatorString } from '../constants';
import { Observer, type ObsFn } from '../Observer';

const dedupePreferLast = <T>(arr: T[], key: keyof T) =>
  arr.filter(
    (v, i, a) => a.findLastIndex((v2) => v2?.[key] === v?.[key]) === i,
  );

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

  public unsubscribe = (fn: ObsFn) => {
    return this.observer.unsubscribe(fn);
  };

  private notify = (key: EventKey, value: IOItem) => {
    this.observer.update(key, value);
    if (!this.firstRun) {
      this.observer.update(events.onUpdate);
    }
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
    if (key === first?.key) {
      this.notify(events.first, value);
    }
    if (key === last?.key) {
      this.notify(events.last, value);
    }
  };

  private edgeItemsCheck = (items: Item[]) => {
    const first = this.first();
    const last = this.last();
    const firstItem = items.find(([key]) => key === first?.key);
    if (firstItem) {
      this.notify(events.first, firstItem[1]);
    }
    const lastItem = items.find(([key]) => key === last?.key);
    if (lastItem) {
      this.notify(events.last, lastItem[1]);
    }
  };

  public toArr = () => this.sort([...this]);

  public toItems = (): visibleElements => this.toArr().map(([key]) => key);

  public toItemsWithoutSeparators = (): visibleElements =>
    filterSeparators(this.toItems());

  public sort = (arr: Item[]) =>
    arr.sort(([, IOItemA], [, IOItemB]) => +IOItemA.index - +IOItemB.index);

  set = (key: ItemId, value: IOItem): this => {
    super.set(String(key), value);
    this.notify(key, value);

    if (!this.firstRun) {
      this.isEdgeItem({ key, value, first: this.first(), last: this.last() });
    }

    return this;
  };

  public setBatch = (entries: Array<Item>) => {
    if (this.firstRun) {
      this.observer.update(events.onInit);
    }

    // TODO: it eats too much resources
    const deduped = dedupePreferLast(entries, 0);
    this.sort(deduped).forEach(([itemId, ioitem]) => {
      super.set(String(itemId), ioitem);
      // TODO: Observer.updateBatch
      this.notify(itemId, ioitem);
    });

    this.edgeItemsCheck(deduped);

    this.runFirstBatch();
    return this;
  };

  // NOTE: Intersection Observer will fire first batch with all items
  private runFirstBatch = () => {
    if (this.firstRun) {
      this.firstRun = false;
      this.observer.flush();
    }
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

  public getCurrentPos = (
    item: ItemId | IOItem,
    onlyItems: boolean,
  ): [Item[], number] => {
    const arr = this.toArr().filter((el) =>
      onlyItems ? !el?.[0]?.includes(separatorString) : el,
    );
    const current = arr.findIndex(
      ([itemId, ioitem]) => itemId === item || ioitem === item,
    );
    return [arr, current];
  };

  public prev = (
    item: ItemId | IOItem,
    onlyItems?: boolean,
  ): IOItem | undefined => {
    const [arr, current] = this.getCurrentPos(item, !!onlyItems);
    return current !== -1 ? arr[current - 1]?.[1] : undefined;
  };

  public next = (
    item: ItemId | IOItem,
    onlyItems?: boolean,
  ): IOItem | undefined => {
    const [arr, current] = this.getCurrentPos(item, !!onlyItems);
    return current !== -1 ? arr[current + 1]?.[1] : undefined;
  };

  public getVisible = () => this.filter((value: Item) => value[1].visible);

  public getVisibleElements = () =>
    this.filter(
      (value: Item) => !value[0].includes(separatorString) && value[1].visible,
    );
}
