import type { IOItem, Item, visibleElements } from './types';
import { filterSeparators } from './helpers';
import { separatorString } from './constants';

class ItemsMap extends Map<Item[0], Item[1]> {
  public toArr() {
    return this.sort([...this]);
  }

  public toItems(): visibleElements {
    return this.toArr().map(([key]) => key);
  }

  public toItemsWithoutSeparators(): visibleElements {
    return filterSeparators(this.toItems());
  }

  // NOTE: for backward compatibility, to remove
  public toItemsKeys(): visibleElements {
    return this.toItems();
  }

  public sort(arr: Item[]) {
    return arr.sort(
      ([, IOItemA], [, IOItemB]) => +IOItemA.index - +IOItemB.index,
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
    predicate: (value: Item, index: number, array: Item[]) => boolean,
  ): Item[] {
    return this.toArr().filter(predicate);
  }
  public find(
    predicate: (value: Item, index: number, obj: Item[]) => boolean,
  ): Item | undefined {
    return this.toArr().find(predicate);
  }

  public findIndex(
    predicate: (value: Item, index: number, obj: Item[]) => unknown,
  ): number {
    return this.toArr().findIndex(predicate);
  }

  public getCurrentPos(
    item: string | IOItem,
    onlyItems: boolean,
  ): [Item[], number] {
    const arr = this.toArr().filter((el) =>
      onlyItems ? !el?.[0]?.includes(separatorString) : el,
    );
    const current = arr.findIndex(
      ([itemId, ioitem]) => itemId === item || ioitem === item,
    );
    return [arr, current];
  }
  public prev(item: string | IOItem, onlyItems?: boolean): IOItem | undefined {
    const [arr, current] = this.getCurrentPos(item, !!onlyItems);
    return current !== -1 ? arr[current - 1]?.[1] : undefined;
  }

  public next(item: IOItem | string, onlyItems?: boolean): IOItem | undefined {
    const [arr, current] = this.getCurrentPos(item, !!onlyItems);
    return current !== -1 ? arr[current + 1]?.[1] : undefined;
  }

  public getVisible() {
    return this.filter((value: Item) => value[1].visible);
  }

  public getVisibleElements() {
    return this.filter(
      (value: Item) => !value[0].includes(separatorString) && value[1].visible,
    );
  }
}
export default ItemsMap;
