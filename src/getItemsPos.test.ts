import getItemsPos, { omitEdgeSeparators } from './getItemsPos';

describe('getItemsPos', () => {
  describe('should return first, center and last items', () => {
    test('5 items', () => {
      const items = [
        'test5',
        'test5-separator',
        'test6',
        'test6-separator',
        'test7',
        'test7-separator',
        'test8',
        'test8-separator',
        'test9',
      ];

      expect(getItemsPos(items)).toEqual({
        first: 'test5',
        center: 'test7',
        last: 'test9',
      });

      expect(getItemsPos(['test4-separator', ...items])).toEqual({
        first: 'test5',
        center: 'test7',
        last: 'test9',
      });

      expect(
        getItemsPos(['test4-separator', ...items, 'test9-separator'])
      ).toEqual({ first: 'test5', center: 'test7', last: 'test9' });
    });

    test('4 items', () => {
      const items = [
        'test5',
        'test5-separator',
        'test6',
        'test6-separator',
        'test7',
        'test7-separator',
        'test8',
      ];

      expect(getItemsPos(items)).toEqual({
        first: 'test5',
        center: 'test6-separator',
        last: 'test8',
      });

      expect(getItemsPos(['test4-separator', ...items])).toEqual({
        first: 'test5',
        center: 'test6-separator',
        last: 'test8',
      });

      expect(
        getItemsPos(['test4-separator', ...items, 'test8-separator'])
      ).toEqual({ first: 'test5', center: 'test6-separator', last: 'test8' });
    });

    test('1 item', () => {
      const items = ['test5'];

      expect(getItemsPos(items)).toEqual({
        first: 'test5',
        center: 'test5',
        last: 'test5',
      });

      expect(getItemsPos(['item4-separator', ...items])).toEqual({
        first: 'test5',
        center: 'test5',
        last: 'test5',
      });

      expect(getItemsPos([...items, 'item5-separator'])).toEqual({
        first: 'test5',
        center: 'test5',
        last: 'test5',
      });

      expect(
        getItemsPos(['item4-separator', ...items, 'item5-separator'])
      ).toEqual({
        first: 'test5',
        center: 'test5',
        last: 'test5',
      });
    });
  });

  test('should return empty items array if there is no items', () => {
    expect(getItemsPos([])).toEqual({});
  });
});

describe('omiseEdgeSeparators', () => {
  test('should omit first and last separators', () => {
    expect(
      omitEdgeSeparators([
        'test5-separator',
        'test6',
        'test6-separator',
        'test7',
      ])
    ).toEqual(['test6', 'test6-separator', 'test7']);

    expect(
      omitEdgeSeparators([
        'test6',
        'test6-separator',
        'test7',
        'test7-separator',
      ])
    ).toEqual(['test6', 'test6-separator', 'test7']);

    expect(
      omitEdgeSeparators([
        'test5-separator',
        'test6',
        'test6-separator',
        'test7',
        'test7-separator',
      ])
    ).toEqual(['test6', 'test6-separator', 'test7']);
  });

  test('should return empty array if there is no items', () => {
    expect(omitEdgeSeparators([])).toEqual([]);
  });
});
