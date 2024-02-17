/* eslint-disable jest/no-identical-title */
import { ItemsMap } from './ItemsMap';
import type { IOItem, Item } from '../types';
import { events, separatorString } from '../constants';

let map: ItemsMap;

describe('ItemsMap', () => {
  const data: Item[] = [
    ['test1', { index: '0', key: 'test1' } as unknown as IOItem],
    ['test2', { index: '1', key: 'test2' } as unknown as IOItem],
    ['test3', { index: '2', key: 'test3' } as unknown as IOItem],
  ];
  const updateDataIndex = (data: Item[]): Item[] =>
    data.map((el, ind) => [el[0], { ...el[1], index: String(ind) }]);

  const dataWithSeparators: Item[] = [
    ['test1', { index: '0', key: 'test1' } as unknown as IOItem],
    [
      `test1${separatorString}`,
      { index: '0.1', key: 'test2' } as unknown as IOItem,
    ],
    ['test2', { index: '1', key: 'test3' } as unknown as IOItem],
    [
      `test2${separatorString}`,
      { index: '1.1', key: 'test4' } as unknown as IOItem,
    ],
    ['test3', { index: '2', key: 'test5' } as unknown as IOItem],
  ];

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
        map.setBatch(dataWithSeparators);

        expect(map.toItems()).toEqual(dataWithSeparators.map((el) => el[0]));
      });
    });

    describe('toItemsWithoutSeparators', () => {
      test('should return keys of items', () => {
        map.setBatch(dataWithSeparators);

        expect(map.toItemsWithoutSeparators()).toEqual(data.map((el) => el[0]));
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
        ['test4', { index: '0', key: 'test4' } as unknown as IOItem],
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

  // without separators
  test('getVisibleElements', () => {
    map.setBatch(
      dataWithSeparators.map((el) => [
        el[0],
        { ...el[1], visible: true } as unknown as IOItem,
      ]),
    );

    const result = map.getVisibleElements();
    expect(result).toHaveLength(3);
    expect(result).toEqual([
      ['test1', { index: '0', key: 'test1', visible: true }],
      ['test2', { index: '1', key: 'test3', visible: true }],
      ['test3', { index: '2', key: 'test5', visible: true }],
    ]);
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
      const onlyItems = false;

      map.setBatch(dataWithSeparators);
      expect(map.getCurrentPos(dataWithSeparators[0][0], onlyItems)).toEqual([
        dataWithSeparators,
        0,
      ]);

      expect(map.getCurrentPos(dataWithSeparators[2][0], onlyItems)).toEqual([
        dataWithSeparators,
        2,
      ]);

      expect(map.getCurrentPos(dataWithSeparators[4][0], onlyItems)).toEqual([
        dataWithSeparators,
        4,
      ]);
    });

    test('onlyItems=true should return all items without separators', () => {
      const onlyItems = true;

      map.setBatch(dataWithSeparators);
      const withoutSeparators = dataWithSeparators.filter(
        (el) => !el[0].includes(separatorString),
      );
      expect(map.getCurrentPos(dataWithSeparators[0][0], onlyItems)).toEqual([
        withoutSeparators,
        0,
      ]);
      expect(map.getCurrentPos(dataWithSeparators[2][0], onlyItems)).toEqual([
        withoutSeparators,
        1,
      ]);
      expect(map.getCurrentPos(dataWithSeparators[4][0], onlyItems)).toEqual([
        withoutSeparators,
        2,
      ]);
    });
  });

  describe('prev"ious item', () => {
    describe('by key', () => {
      describe('with separators', () => {
        test('have previous item', () => {
          map.setBatch(data);

          expect(map.prev(data[1][0])).toEqual(data[0][1]);
          expect(map.prev(data[2][0])).toEqual(data[1][1]);
        });

        test('does not have prev item', () => {
          map.setBatch(data);

          const key = data[0][0];

          expect(map.prev(key)).toEqual(undefined);
        });
      });

      describe('without separators', () => {
        const onlyItems = true;

        test('have previous item', () => {
          map.setBatch(dataWithSeparators);

          expect(map.prev(dataWithSeparators[2][0], onlyItems)).toEqual(
            dataWithSeparators[0][1],
          );
          expect(map.prev(dataWithSeparators[4][0], onlyItems)).toEqual(
            dataWithSeparators[2][1],
          );
        });

        test('does not have prev item', () => {
          map.setBatch(dataWithSeparators);

          expect(map.prev(dataWithSeparators[0][0], onlyItems)).toEqual(
            undefined,
          );
        });
      });
    });

    test('invalid item', () => {
      map.setBatch(data);

      const item = 'aaa';

      expect(map.prev(item)).toEqual(undefined);
      expect(map.prev('')).toEqual(undefined);
    });

    describe('by value', () => {
      describe('with separators', () => {
        test('have previous item', () => {
          map.setBatch(data);

          expect(map.prev(data[1][1])).toEqual(data[0][1]);
          expect(map.prev(data[2][1])).toEqual(data[1][1]);
        });

        test('does not have prev item', () => {
          map.setBatch(data);

          const item = data[0][1];

          expect(map.prev(item)).toEqual(undefined);
        });
      });

      describe('without separators', () => {
        const onlyItems = true;

        test('have previous item', () => {
          map.setBatch(dataWithSeparators);

          expect(map.prev(dataWithSeparators[2][1], onlyItems)).toEqual(
            dataWithSeparators[0][1],
          );
          expect(map.prev(dataWithSeparators[4][1], onlyItems)).toEqual(
            dataWithSeparators[2][1],
          );
        });

        test('does not have prev item', () => {
          map.setBatch(dataWithSeparators);

          expect(map.prev(dataWithSeparators[0][1], onlyItems)).toEqual(
            undefined,
          );
        });
      });
    });
  });

  describe('next item', () => {
    describe('by key', () => {
      describe('with separators', () => {
        test('have next item', () => {
          map.setBatch(data);

          expect(map.next(data[0][0])).toEqual(data[1][1]);
          expect(map.next(data[1][0])).toEqual(data[2][1]);
        });

        test('does not have next item', () => {
          map.setBatch(data);

          const key = data[2][0];

          expect(map.next(key)).toEqual(undefined);
        });
      });

      describe('without separators', () => {
        const onlyItems = true;

        test('have next item', () => {
          map.setBatch(dataWithSeparators);

          expect(map.next(dataWithSeparators[0][0], onlyItems)).toEqual(
            dataWithSeparators[2][1],
          );
          expect(map.next(dataWithSeparators[2][0], onlyItems)).toEqual(
            dataWithSeparators[4][1],
          );
        });

        test('does not have next item', () => {
          map.setBatch(dataWithSeparators);

          expect(map.next(dataWithSeparators[4][0], onlyItems)).toEqual(
            undefined,
          );
        });
      });
    });

    test('invalid item', () => {
      map.setBatch(data);

      const item = 'aaa';

      expect(map.next(item)).toEqual(undefined);
      expect(map.next('')).toEqual(undefined);
    });

    describe('by value', () => {
      describe('without separators', () => {
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

      describe('without separators', () => {
        const onlyItems = true;

        test('have next item', () => {
          map.setBatch(dataWithSeparators);

          expect(map.next(dataWithSeparators[0][1], onlyItems)).toEqual(
            dataWithSeparators[2][1],
          );
          expect(map.next(dataWithSeparators[2][1], onlyItems)).toEqual(
            dataWithSeparators[4][1],
          );
        });

        test('does not have next item', () => {
          map.setBatch(dataWithSeparators);

          const item = dataWithSeparators.slice(-1)[0][1];

          expect(map.next(item, onlyItems)).toEqual(undefined);
        });
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
      map.unsubscribe(cb);
      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenNthCalledWith(1, cb);
    });

    describe('set', () => {
      it('should notify the Observer', () => {
        const spy = jest.spyOn(map.observer, 'update');
        const key = data[0][0];
        const value = data[0][1];
        map.set(key, value);
        expect(spy).toHaveBeenLastCalledWith(key, value);
        expect(spy).toHaveBeenCalledTimes(1);
      });

      describe('should check for first/last items', () => {
        it('first item', () => {
          map.setBatch(data);
          const spy = jest.spyOn(map.observer, 'update');
          const first = data[0];
          const key = first[0];
          const value = first[1];
          map.set(key, value);
          expect(spy.mock.calls).toContainEqual([events.first, value]);
        });

        it('last item', () => {
          map.setBatch(data);
          const spy = jest.spyOn(map.observer, 'update');
          const last = data.findLast(() => true)!;
          const key = last[0];
          const value = last[1];
          map.set(key, value);
          expect(spy.mock.calls).toContainEqual([events.last, value]);
        });
      });
    });

    describe('setBatch', () => {
      it('should notify the Observer', () => {
        const spy = jest.spyOn(map.observer, 'update');
        map.setBatch(data);
        expect(spy).toHaveBeenCalledTimes(data.length + 3);
        expect(spy.mock.calls).toEqual([
          [events.onInit],
          ...data,
          [events.first, { index: '0', key: 'test1' }],
          [events.last, { index: '2', key: 'test3' }],
        ]);
      });

      it('should dedupe items', () => {
        const spy = jest.spyOn(map.observer, 'update');
        map.setBatch(data.concat(data));
        expect(spy).toHaveBeenCalledTimes(data.length + 3);
        expect(spy.mock.calls).toEqual([
          [events.onInit],
          ...data,
          [events.first, { index: '0', key: 'test1' }],
          [events.last, { index: '2', key: 'test3' }],
        ]);
      });

      it('should flush first batch immediately', () => {
        const spy = jest.spyOn(map.observer, 'flush');
        map.setBatch(data);
        expect(spy).toHaveBeenCalledTimes(1);
      });

      describe('should notify about first/last items', () => {
        it('first item', () => {
          const spy = jest.spyOn(map.observer, 'update');
          map.setBatch(data);

          expect(spy).toHaveBeenCalledTimes(data.length + 3);
          expect(spy.mock.calls).toContainEqual([
            events.first,
            { index: '0', key: 'test1' },
          ]);
        });

        it('last item', () => {
          const spy = jest.spyOn(map.observer, 'update');
          map.setBatch(data);

          expect(spy).toHaveBeenCalledTimes(data.length + 3);
          expect(spy.mock.calls).toContainEqual([
            events.last,
            { index: '2', key: 'test3' },
          ]);
        });
      });

      describe('should fire onInit and onUpdate', () => {
        it('onInit', () => {
          const spy = jest.spyOn(map.observer, 'update');
          map.setBatch(data);

          expect(spy).toHaveBeenCalledTimes(data.length + 3);
          expect(spy.mock.calls?.[0]).toStrictEqual([events.onInit]);
        });

        it('onUpdate', async () => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const spy = jest.spyOn(map.observer as any, 'emitUpdates');
          map.setBatch(data);
          map.set(data[0][0], data[0][1]);

          await new Promise((res) => setTimeout(res, 300));
          expect(spy).toHaveBeenCalledTimes(data.length + 7);
          expect(spy.mock.calls).toContainEqual([events.onUpdate]);
        });
      });
    });
  });
});
