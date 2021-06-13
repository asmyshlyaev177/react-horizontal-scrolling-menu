import { IOItem, Item } from './types';

class ItemsMap extends Map<string, IOItem> {
  public toArr(): Item[] {
    return [...this];
  }
  onlyDigits(value: string | number): string {
    return String(value).replace(/[^0-9.]/g, '');
  }
  public sort(arr: Item[]) {
    return arr.sort(
      (a: Item, b: Item) =>
        +this.onlyDigits(a[1].index) - +this.onlyDigits(b[1].index)
    );
  }

  set(key: Array<Item> | string, val?: IOItem): this {
    if (Array.isArray(key)) {
      this.sort(key).forEach((el) => {
        super.set(el[0], el[1]);
      });
    } else {
      super.set(key, val!);
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
    const current = arr.findIndex((el) => el[0] === item || el[1] === item);
    return current !== -1 ? arr[current - 1]?.[1] : undefined;
  }
  public next(item: IOItem | string): IOItem | undefined {
    const arr = this.toArr();
    const current = arr.findIndex((el) => el[0] === item || el[1] === item);
    return current !== -1 ? arr[current + 1]?.[1] : undefined;
  }
  // TODO: .map(el => el[1])
  public getVisible() {
    return this.filter((value: Item) => value[1].visible);
  }
}
export default ItemsMap;
