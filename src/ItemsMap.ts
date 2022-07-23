import type { IOItem, Item, visibleItems as itemsArr } from './types';
import { filterSeparators } from './helpers';

class ItemsMap extends Map<Item[0], Item[1]> {
  public toArr() {
    return this.sort([...this]);
  }

  public toItems(): itemsArr {
    return this.toArr().map(([key]) => key);
  }

  public toItemsWithoutSeparators(): itemsArr {
    return filterSeparators(this.toItems());
  }

  // NOTE: for backward compatibility, to remove
  public toItemsKeys(): itemsArr {
    return this.toItems();
  }

  public sort(arr: Item[]) {
    return arr.sort(
      ([, IOItemA], [, IOItemB]) => +IOItemA.index - +IOItemB.index
    );
  }

  set(key: Array<Item> | string, val?: IOItem): this {
    if (Array.isArray(key)) {
      this.sort(key).forEach(([itemId, ioitem]) => {
        super.set(String(itemId), ioitem);
      });
    } else {
      super.set(String(key), val!);
    }
    return this;
  }

  public first(): IOItem | undefined {
    return this.toArr()[0]?.[1];
  }
  public last(): IOItem | undefined {
    return this.toArr().slice(-1)?.[0]?.[1];
  }

  public filter(
    predicate: (value: Item, index: number, array: Item[]) => boolean
  ): Item[] {
    return this.toArr().filter(predicate);
  }
  public find(
    predicate: (value: Item, index: number, obj: Item[]) => boolean
  ): Item | undefined {
    return this.toArr().find(predicate);
  }

  public findIndex(
    predicate: (value: Item, index: number, obj: Item[]) => unknown
  ): number {
    return this.toArr().findIndex(predicate);
  }
  public prev(item: string | IOItem): IOItem | undefined {
    const arr = this.toArr();
    const current = arr.findIndex(
      ([itemId, ioitem]) => itemId === item || ioitem === item
    );
    return current !== -1 ? arr[current - 1]?.[1] : undefined;
  }
  public next(item: IOItem | string): IOItem | undefined {
    const arr = this.toArr();
    const current = arr.findIndex(
      ([itemId, ioitem]) => itemId === item || ioitem === item
    );
    return current !== -1 ? arr[current + 1]?.[1] : undefined;
  }

  public getVisible() {
    return this.filter((value: Item) => value[1].visible);
  }
}
export default ItemsMap;
