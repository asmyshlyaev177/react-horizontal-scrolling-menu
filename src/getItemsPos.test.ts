import getItemsPos from './getItemsPos';

describe('getItemsPos', () => {
  describe('should return first, center and last items', () => {
    test('5 items', () => {
      const items = ['test5', 'test6', 'test7', 'test8', 'test9'];

      expect(getItemsPos(items)).toEqual({
        first: 'test5',
        center: 'test7',
        last: 'test9',
      });
    });

    test('4 items', () => {
      const items = ['test5', 'test6', 'test7', 'test8'];

      expect(getItemsPos(items)).toEqual({
        first: 'test5',
        center: 'test7',
        last: 'test8',
      });

      expect(getItemsPos(items)).toEqual({
        first: 'test5',
        center: 'test7',
        last: 'test8',
      });
    });

    test('1 item', () => {
      const items = ['test5'];

      expect(getItemsPos(items)).toEqual({
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
