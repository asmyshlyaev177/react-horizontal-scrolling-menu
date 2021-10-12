import ItemsMap from './ItemsMap';
import type { IOItem, Item } from './types';
import { separatorString } from './constants';

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

  describe('set and get', () => {
    test('set single value and get', () => {
      const map = new ItemsMap();

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

    describe('sort and set array of values and get via toArr', () => {
      test('sorted array', () => {
        const map = new ItemsMap();

        map.set(data);

        data.forEach(([key, value]) => {
          expect(map.get(key)).toEqual(value);
        });

        expect(map.toArr()).toEqual(data);
      });

      test('unsorted array', () => {
        const map = new ItemsMap();

        map.set(data.reverse());

        data.forEach(([key, value]) => {
          expect(map.get(key)).toEqual(value);
        });

        expect(map.toArr()).toEqual(data);
      });
    });

    describe('toItems', () => {
      test('should return keys of items', () => {
        const map = new ItemsMap();

        map.set(dataWithSeparators);

        expect(map.toItems()).toEqual(dataWithSeparators.map((el) => el[0]));
      });
    });

    describe('toItemsWithoutSeparators', () => {
      test('should return keys of items', () => {
        const map = new ItemsMap();

        map.set(dataWithSeparators);

        expect(map.toItemsWithoutSeparators()).toEqual(data.map((el) => el[0]));
      });
    });
  });

  describe('first element', () => {
    test('should works', () => {
      const map = new ItemsMap();

      map.set(data);

      expect(map.first()).toEqual(data[0][1]);
    });

    test('after add element to an end', () => {
      const map = new ItemsMap();

      map.set(data);
      const newItem = [
        'test4',
        { index: '3', key: 'test4' } as unknown as IOItem,
      ] as Item;
      expect(map.first()).toEqual(data[0][1]);

      map.set([...data, newItem]);
      expect(map.first()).toEqual(data[0][1]);
    });

    test('after add element to start', () => {
      const map = new ItemsMap();

      expect(updateDataIndex(data)).toEqual(data);
      map.set(data);
      const newData = updateDataIndex([
        ['test4', { index: '0', key: 'test4' } as unknown as IOItem],
        ...data,
      ]);
      expect(map.first()).toEqual(data[0][1]);

      map.set(newData);
      expect(map.first()).toEqual(newData[0][1]);
    });
  });

  describe('last element', () => {
    test('should works', () => {
      const map = new ItemsMap();

      map.set(data);

      expect(map.last()).toEqual(data.slice(-1)[0][1]);
    });

    test('after add element to an end', () => {
      const map = new ItemsMap();

      map.set(data);
      const newItem = [
        'test4',
        { index: '3', key: 'test4' } as unknown as IOItem,
      ] as Item;
      expect(map.last()).toEqual(data.slice(-1)[0][1]);

      map.set([...data, newItem]);
      expect(map.last()).toEqual(newItem[1]);
    });

    test('after add element to start', () => {
      const map = new ItemsMap();

      expect(updateDataIndex(data)).toEqual(data);
      map.set(data);
      const newItem = [
        'test4',
        { index: '3', key: 'test4' } as unknown as IOItem,
      ] as Item;
      const newData: Item[] = [newItem, ...data];
      expect(map.last()).toEqual(data.slice(-1)[0][1]);

      map.set(newData);
      expect(map.last()).toEqual(newItem[1]);
    });
  });

  test('filter', () => {
    const map = new ItemsMap();

    map.set(data);

    expect(map.filter((el) => el[1] === data[0][1])).toEqual([data[0]]);
  });

  test('getVisible', () => {
    const map = new ItemsMap();

    const dataWithVisible: Item[] = data.map((el, ind) => [
      el[0],
      { ...el[1], visible: ind < 2 } as unknown as IOItem,
    ]);
    map.set(dataWithVisible);

    expect(map.getVisible()).toEqual(
      dataWithVisible.filter((el) => el[1].visible)
    );
  });

  test('findIndex', () => {
    const map = new ItemsMap();

    map.set(data);

    expect(map.findIndex((el) => el[0] === 'test1')).toEqual(0);
    expect(map.findIndex((el) => el[0] === 'test2')).toEqual(1);
  });

  test('find', () => {
    const map = new ItemsMap();

    map.set(data);

    expect(map.find((el) => el[1] === data[0][1])).toEqual(data[0]);
    expect(map.find((el) => el[0] === 'test1')).toEqual(data[0]);
  });

  describe('prev"ious item', () => {
    describe('by key', () => {
      // eslint-disable-next-line radar/no-duplicate-string
      test('have previous item', () => {
        const map = new ItemsMap();

        map.set(data);

        const key = data[1][0];

        expect(map.prev(key)).toEqual(data[0][1]);
      });

      test('does not have prev item', () => {
        const map = new ItemsMap();

        map.set(data);

        const key = data[0][0];

        expect(map.prev(key)).toEqual(undefined);
      });
    });

    test('invalid item', () => {
      const map = new ItemsMap();

      map.set(data);

      const item = 'aaa';

      expect(map.prev(item)).toEqual(undefined);
      expect(map.prev('')).toEqual(undefined);
    });

    describe('by value', () => {
      test('have previous item', () => {
        const map = new ItemsMap();

        map.set(data);

        const item = data[1][1];

        expect(map.prev(item)).toEqual(data[0][1]);
      });

      test('does not have prev item', () => {
        const map = new ItemsMap();

        map.set(data);

        const item = data[0][1];

        expect(map.prev(item)).toEqual(undefined);
      });
    });
  });

  describe('next item', () => {
    describe('by key', () => {
      test('have previous item', () => {
        const map = new ItemsMap();

        map.set(data);

        const key = data[1][0];

        expect(map.next(key)).toEqual(data[2][1]);
      });

      test('does not have next item', () => {
        const map = new ItemsMap();

        map.set(data);

        const key = data[2][0];

        expect(map.next(key)).toEqual(undefined);
      });
    });

    test('invalid item', () => {
      const map = new ItemsMap();

      map.set(data);

      const item = 'aaa';

      expect(map.next(item)).toEqual(undefined);
      expect(map.next('')).toEqual(undefined);
    });

    describe('by value', () => {
      test('have next item', () => {
        const map = new ItemsMap();

        map.set(data);

        const item = data[1][1];

        expect(map.next(item)).toEqual(data[2][1]);
      });

      test('does not have next item', () => {
        const map = new ItemsMap();

        map.set(data);

        const item = data.slice(-1)[0][1];

        expect(map.next(item)).toEqual(undefined);
      });
    });
  });
});
