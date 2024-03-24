import { slidingWindow } from '.';

describe('slidingWindow', () => {
  describe('previous group', () => {
    describe('should return prev visible group', () => {
      test('when there is less items in prev group', () => {
        const visibleElements = ['test2', 'test3', 'test4'];

        const group1 = slidingWindow(allItems, visibleElements).prev();

        expect(group1).toEqual(['test0', 'test1', 'test2']);
      });

      test('5 items', () => {
        const visibleElements = [
          'test15',
          'test16',
          'test17',
          'test18',
          'test19',
        ];
        const group1 = slidingWindow(allItems, visibleElements).prev();

        expect(group1).toEqual([
          'test10',
          'test11',
          'test12',
          'test13',
          'test14',
        ]);

        const group2 = slidingWindow(allItems, group1).prev();

        expect(group2).toEqual(['test5', 'test6', 'test7', 'test8', 'test9']);

        const group3 = slidingWindow(allItems, group2).prev();

        expect(group3).toEqual(['test0', 'test1', 'test2', 'test3', 'test4']);
      });

      test('1 item', () => {
        const visibleElements = ['test17'];

        const group1 = slidingWindow(allItems, visibleElements).prev();
        expect(group1).toEqual(['test16']);

        const group2 = slidingWindow(allItems, group1).prev();
        expect(group2).toEqual(['test15']);

        const group3 = slidingWindow(allItems, group2).prev();
        expect(group3).toEqual(['test14']);
      });

      test('2 items', () => {
        const visibleElements = ['test17', 'test18'];

        const group1 = slidingWindow(allItems, visibleElements).prev();
        expect(group1).toEqual(['test15', 'test16']);

        const group2 = slidingWindow(allItems, group1).prev();
        expect(group2).toEqual(['test13', 'test14']);

        const group3 = slidingWindow(allItems, group2).prev();
        expect(group3).toEqual(['test11', 'test12']);
      });
    });

    test('should return first group infinite times', () => {
      const visibleElements = ['test5', 'test6', 'test7', 'test8', 'test9'];

      const group1 = slidingWindow(allItems, visibleElements).prev();
      expect(group1).toEqual(['test0', 'test1', 'test2', 'test3', 'test4']);

      const group2 = slidingWindow(allItems, group1).prev();
      expect(group2).toEqual(['test0', 'test1', 'test2', 'test3', 'test4']);

      expect(group1).toEqual(group2);
    });

    test('invalid inputs', () => {
      const visibleElements = ['test5', 'test6', 'test7', 'test8', 'test9'];

      expect(slidingWindow([], visibleElements).prev()).toEqual([]);
      expect(slidingWindow([], []).prev()).toEqual([]);
      expect(slidingWindow(allItems, []).prev()).toEqual([]);
    });
  });

  describe('next group', () => {
    const visibleElements = ['test0', 'test1', 'test2', 'test3', 'test4'];

    describe('should return next visible group', () => {
      test('when there is less items in next group', () => {
        const visibleElements = ['test16', 'test17', 'test18'];

        const group1 = slidingWindow(allItems, visibleElements).next();

        expect(group1).toEqual(['test17', 'test18', 'test19']);
      });

      test('5 items', () => {
        const group1 = slidingWindow(allItems, visibleElements).next();

        expect(group1).toEqual(['test5', 'test6', 'test7', 'test8', 'test9']);

        const group2 = slidingWindow(allItems, group1).next();

        expect(group2).toEqual([
          'test10',
          'test11',
          'test12',
          'test13',
          'test14',
        ]);

        const group3 = slidingWindow(allItems, group2).next();

        expect(group3).toEqual([
          'test15',
          'test16',
          'test17',
          'test18',
          'test19',
        ]);
      });

      test('1 item', () => {
        const visibleElements = ['test0'];

        const group1 = slidingWindow(allItems, visibleElements).next();
        expect(group1).toEqual(['test1']);

        const group2 = slidingWindow(allItems, group1).next();
        expect(group2).toEqual(['test2']);

        const group3 = slidingWindow(allItems, group2).next();
        expect(group3).toEqual(['test3']);
      });

      test('2 items', () => {
        const visibleElements = ['test0', 'test1'];

        const group1 = slidingWindow(allItems, visibleElements).next();
        expect(group1).toEqual(['test2', 'test3']);

        const group2 = slidingWindow(allItems, group1).next();
        expect(group2).toEqual(['test4', 'test5']);

        const group3 = slidingWindow(allItems, group2).next();
        expect(group3).toEqual(['test6', 'test7']);
      });
    });

    test('should return last group infinite times', () => {
      const group1 = slidingWindow(allItems, visibleElements).next();
      const group2 = slidingWindow(allItems, group1).next();

      expect(group2).toEqual([
        'test10',
        'test11',
        'test12',
        'test13',
        'test14',
      ]);

      const group3 = slidingWindow(allItems, group2).next();

      expect(group3).toEqual([
        'test15',
        'test16',
        'test17',
        'test18',
        'test19',
      ]);

      const group4 = slidingWindow(allItems, group3).next();

      expect(group4).toEqual([
        'test15',
        'test16',
        'test17',
        'test18',
        'test19',
      ]);

      const group5 = slidingWindow(allItems, group4).next();

      expect(group5).toEqual([
        'test15',
        'test16',
        'test17',
        'test18',
        'test19',
      ]);
      expect(group3).toEqual(group4);
      expect(group4).toEqual(group5);
    });

    test('invalid inputs', () => {
      const visibleElements = ['test5', 'test6', 'test7', 'test8', 'test9'];

      expect(slidingWindow([], visibleElements).next()).toEqual([]);
      expect(slidingWindow([], []).next()).toEqual([]);
      expect(slidingWindow(allItems, []).next()).toEqual([]);
    });
  });
});

const allItems = [
  'test0',
  'test1',
  'test2',
  'test3',
  'test4',
  'test5',
  'test6',
  'test7',
  'test8',
  'test9',
  'test10',
  'test11',
  'test12',
  'test13',
  'test14',
  'test15',
  'test16',
  'test17',
  'test18',
  'test19',
];
