import { IOItem, Item } from './types';

class ItemsMap extends Map {
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

  public set(key: Array<Item> | string, val?: Item) {
    if (Array.isArray(key)) {
      this.sort(key).forEach((el) => {
        super.set(el[0], el[1]);
      });
    } else {
      super.set(key, val);
    }
    return this;
  }
  public first(): IOItem | undefined {
    return this.toArr()[0]?.[1];
  }
  public last(): IOItem | undefined {
    return this.toArr().slice(-1)?.[0]?.[1];
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public filter(fn: any) {
    return this.toArr().filter(fn);
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public find(fn: any): Item | undefined {
    return this.toArr().find(fn);
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public findIndex(fn: any) {
    return this.toArr().findIndex(fn);
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
    return this.filter((el: Item) => el[1].visible);
  }
}
export default ItemsMap;
