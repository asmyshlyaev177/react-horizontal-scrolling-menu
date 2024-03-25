/* eslint-disable jest/no-identical-title */
import { events } from '../constants';

import { ItemsMap } from './ItemsMap';

import type { IOItem, Item } from '../types';

let map: ItemsMap;

describe('ItemsMap', () => {
  const data: Item[] = [
    ['test1', { index: '0', key: 'test1' } as unknown as IOItem],
    ['test2', { index: '1', key: 'test2' } as unknown as IOItem],
    ['test3', { index: '2', key: 'test3' } as unknown as IOItem],
    ['test4', { index: '3', key: 'test4' } as unknown as IOItem],
  ];
  const updateDataIndex = (data: Item[]): Item[] =>
    data.map((el, ind) => [el[0], { ...el[1], index: String(ind) }]);

  beforeEach(() => {
    map = new ItemsMap();
  });

  describe('set and get', () => {
    test('set single value and get', () => {
      data.forEach(([key, value]) => {
        map.set(key, value);
      });
      data.forEach(([key, value]) => {
        expect(map.get(key)).toEqual(value);
      });

      data.forEach(([key, value]) => {
        map.set(key, value);
      });
      data.forEach(([key, value]) => {
        expect(map.get(key)).toEqual(value);
      });

      expect(map.toArr()).toEqual(data);
    });

    test('should convert key to string', () => {
      const data: Item[] = [
        [
          1 as unknown as string,
          { index: '0', key: 'test1' } as unknown as IOItem,
        ],
        ['2', { index: '1', key: 'test2' } as unknown as IOItem],
      ];

      data.forEach(([key, value]) => {
        map.set(key, value);
      });
      expect(map.toArr()).toEqual([
        ['1', { index: '0', key: 'test1' } as unknown as IOItem],
        ['2', { index: '1', key: 'test2' } as unknown as IOItem],
      ]);
    });

    describe('sort and set array of values and get via toArr', () => {
      test('sorted array', () => {
        map.setBatch(data);

        data.forEach(([key, value]) => {
          expect(map.get(key)).toEqual(value);
        });

        expect(map.toArr()).toEqual(data);
      });

      test('unsorted array', () => {
        map.setBatch(data);

        data.forEach(([key, value]) => {
          expect(map.get(key)).toEqual(value);
        });

        const arr = map.toArr();
        expect(arr).toEqual(data);
      });
    });

    describe('toItems', () => {
      test('should return keys of items', () => {
        map.setBatch(data);

        expect(map.toItems()).toEqual(data.map((el) => el[0]));
      });
    });
  });

  describe('first element', () => {
    test('should works', () => {
      map.setBatch(data);

      expect(map.first()).toEqual(data[0][1]);
    });

    test('after add element to an end', () => {
      map.setBatch(data);
      const newItem = [
        'test4',
        { index: '3', key: 'test4' } as unknown as IOItem,
      ] as Item;
      expect(map.first()).toEqual(data[0][1]);

      map.setBatch([...data, newItem]);
      expect(map.first()).toEqual(data[0][1]);
    });

    test('after add element to start', () => {
      expect(updateDataIndex(data)).toEqual(data);
      map.setBatch(data);
      const newData = updateDataIndex([
        ['test5', { index: '4', key: 'test5' } as unknown as IOItem],
        ...data,
      ]);
      expect(map.first()).toEqual(data[0][1]);

      map.setBatch(newData);
      expect(map.first()).toEqual(newData[0][1]);
    });
  });

  describe('last element', () => {
    test('should works', () => {
      map.setBatch(data);

      expect(map.last()).toEqual(data.slice(-1)[0][1]);
    });

    test('after add element to an end', () => {
      map.setBatch(data);
      const newItem = [
        'test4',
        { index: '3', key: 'test4' } as unknown as IOItem,
      ] as Item;
      expect(map.last()).toEqual(data.slice(-1)[0][1]);

      map.setBatch([...data, newItem]);
      expect(map.last()).toEqual(newItem[1]);
    });

    test('after add element to start', () => {
      expect(updateDataIndex(data)).toEqual(data);
      map.setBatch(data);
      const newItem = [
        'test4',
        { index: '3', key: 'test4' } as unknown as IOItem,
      ] as Item;
      const newData: Item[] = [newItem, ...data];
      expect(map.last()).toEqual(data.slice(-1)[0][1]);

      map.setBatch(newData);
      expect(map.last()).toEqual(newItem[1]);
    });
  });

  test('filter', () => {
    map.setBatch(data);

    expect(map.filter((el) => el[1] === data[0][1])).toEqual([data[0]]);
  });

  test('getVisible', () => {
    const dataWithVisible: Item[] = data.map((el, ind) => [
      el[0],
      { ...el[1], visible: ind < 2 } as unknown as IOItem,
    ]);
    map.setBatch(dataWithVisible);

    expect(map.getVisible()).toEqual(
      dataWithVisible.filter((el) => el[1].visible),
    );
  });

  test('findIndex', () => {
    map.setBatch(data);

    expect(map.findIndex((el) => el[0] === 'test1')).toEqual(0);
    expect(map.findIndex((el) => el[0] === 'test2')).toEqual(1);
  });

  test('find', () => {
    map.setBatch(data);

    expect(map.find((el) => el[1] === data[0][1])).toEqual(data[0]);
    expect(map.find((el) => el[0] === 'test1')).toEqual(data[0]);
  });

  describe('getItemPos', () => {
    test('should return all items', () => {
      map.setBatch(data);
      expect(map.getCurrentPos(data[0][0])).toEqual([data, 0]);

      expect(map.getCurrentPos(data[2][0])).toEqual([data, 2]);

      expect(map.getCurrentPos(data[3][0])).toEqual([data, 3]);
    });
  });

  describe('previous item', () => {
    describe('by key', () => {
      test('have previous item', () => {
        map.setBatch(data);

        expect(map.prev(data[2][0])).toEqual(data[1][1]);
        expect(map.prev(data[3][0])).toEqual(data[2][1]);
      });

      test('does not have prev item', () => {
        map.setBatch(data);

        expect(map.prev(data[0][0])).toEqual(undefined);
      });
    });

    test('invalid item', () => {
      map.setBatch(data);

      const item = 'aaa';

      expect(map.prev(item)).toEqual(undefined);
      expect(map.prev('')).toEqual(undefined);
    });

    describe('by value', () => {
      test('have previous item', () => {
        map.setBatch(data);

        expect(map.prev(data[2][1])).toEqual(data[1][1]);
        expect(map.prev(data[3][1])).toEqual(data[2][1]);
      });

      test('does not have prev item', () => {
        map.setBatch(data);

        expect(map.prev(data[0][1])).toEqual(undefined);
      });
    });
  });

  describe('next item', () => {
    describe('by key', () => {
      test('have next item', () => {
        map.setBatch(data);

        expect(map.next(data[0][0])).toEqual(data[1][1]);
        expect(map.next(data[1][0])).toEqual(data[2][1]);
      });

      test('does not have next item', () => {
        map.setBatch(data);

        const key = data.slice(-1)[0][1];

        expect(map.next(key)).toEqual(undefined);
      });
    });

    test('invalid item', () => {
      map.setBatch(data);

      const item = 'aaa';

      expect(map.next(item)).toEqual(undefined);
      expect(map.next('')).toEqual(undefined);
    });

    describe('by value', () => {
      test('have next item', () => {
        map.setBatch(data);

        expect(map.next(data[0][1])).toEqual(data[1][1]);
        expect(map.next(data[1][1])).toEqual(data[2][1]);
      });

      test('does not have next item', () => {
        map.setBatch(data);

        const item = data.slice(-1)[0][1];

        expect(map.next(item)).toEqual(undefined);
      });
    });
  });

  describe('Observer related', () => {
    it('should call subscribe', () => {
      const spy = jest.spyOn(map.observer, 'subscribe');
      const cb = jest.fn();
      map.subscribe('test', cb);
      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenNthCalledWith(1, 'test', cb);
    });

    it('should call unsubscribe', () => {
      const spy = jest.spyOn(map.observer, 'unsubscribe');
      const cb = jest.fn();
      map.unsubscribe('test', cb);
      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenNthCalledWith(1, 'test', cb);
    });

    describe('set', () => {
      it('should notify the Observer', () => {
        const spy = jest.spyOn(map.observer, 'updateBatch');
        const key = data[1][0];
        const value = data[1][1];
        map.set(key, value);
        expect(spy).toHaveBeenLastCalledWith([
          [key, value],
          ['first', value],
        ]);
        expect(spy).toHaveBeenCalledTimes(1);
      });

      describe('should check for first/last items', () => {
        it('first item', () => {
          map.setBatch(data);
          const spy = jest.spyOn(map.observer, 'updateBatch');
          const first = data[0];
          const key = first[0];
          const value = first[1];
          map.set(key, value);
          expect(spy.mock.calls).toStrictEqual([
            [
              [
                [key, value],
                ['first', value],
              ],
            ],
          ]);
        });

        it('last item', () => {
          map.setBatch(data);
          const spy = jest.spyOn(map.observer, 'updateBatch');
          const last = data.findLast(() => true)!;
          const key = last[0];
          const value = last[1];
          map.set(key, value);
          expect(spy.mock.calls).toStrictEqual([
            [
              [
                [key, value],
                ['last', value],
              ],
            ],
          ]);
        });
      });
    });

    describe('setBatch', () => {
      it('should notify the Observer', () => {
        const spy = jest.spyOn(map.observer, 'update');
        const spyBatch = jest.spyOn(map.observer, 'updateBatch');
        map.setBatch(data);
        expect(spy).toHaveBeenCalledTimes(1);
        expect(spy.mock.calls).toStrictEqual([[events.onInit]]);
        expect(spyBatch.mock.calls).toEqual([
          [
            [
              ...data,
              [events.first, { index: '0', key: 'test1' }],
              [events.last, { index: '3', key: 'test4' }],
            ],
            false,
          ],
        ]);
      });

      describe('should notify about first/last items', () => {
        it('first item', () => {
          const spy = jest.spyOn(map.observer, 'updateBatch');
          map.setBatch(data);

          expect(spy).toHaveBeenCalledTimes(1);
          expect(spy.mock.calls[0][0]).toContainEqual([
            events.first,
            data[0][1],
          ]);
        });

        it('last item', () => {
          const spy = jest.spyOn(map.observer, 'updateBatch');
          map.setBatch(data);

          expect(spy).toHaveBeenCalledTimes(1);
          expect(spy.mock.calls[0][0]).toContainEqual([
            events.last,
            data.slice(-1)[0][1],
          ]);
        });
      });

      describe('should fire onInit and onUpdate', () => {
        it('onInit', () => {
          const spy = jest.spyOn(map.observer, 'update');
          map.setBatch(data);

          expect(spy).toHaveBeenCalledTimes(1);
          expect(spy.mock.calls?.[0]).toStrictEqual([events.onInit]);
        });

        it('onUpdate', () => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const spy = jest.spyOn(map.observer as any, 'emitUpdates');
          map.setBatch(data);
          map.set(data[0][0], data[0][1]);

          expect(spy).toHaveBeenCalledTimes(data.length + 7);
          expect(spy.mock.calls).toContainEqual([events.onUpdate]);
        });
      });
    });
  });
});
