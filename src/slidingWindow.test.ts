/* eslint-disable radar/no-duplicate-string */
import slidingWindow from './slidingWindow';

describe('slidingWindow', () => {
  describe('next group', () => {
    const visibleItems = [
      'test0',
      'test0-separator',
      'test1',
      'test1-separator',
      'test2',
      'test2-separator',
      'test3',
      'test3-separator',
      'test4',
      'test4-separator',
    ];

    describe('should return next visible group', () => {
      test('5 items', () => {
        const group1 = slidingWindow(allItems, visibleItems).next();

        expect(group1).toEqual([
          'test5',
          'test5-separator',
          'test6',
          'test6-separator',
          'test7',
          'test7-separator',
          'test8',
          'test8-separator',
          'test9',
        ]);

        const group2 = slidingWindow(allItems, group1).next();

        expect(group2).toEqual([
          'test10',
          'test10-separator',
          'test11',
          'test11-separator',
          'test12',
          'test12-separator',
          'test13',
          'test13-separator',
          'test14',
        ]);

        const group3 = slidingWindow(allItems, group2).next();

        expect(group3).toEqual([
          'test15',
          'test15-separator',
          'test16',
          'test16-separator',
          'test17',
          'test17-separator',
          'test18',
          'test18-separator',
          'test19',
        ]);
      });

      test('1 item', () => {
        const visibleItems = ['test0', 'test0-separator'];

        const group1 = slidingWindow(allItems, visibleItems).next();
        expect(group1).toEqual(['test1']);

        const group2 = slidingWindow(allItems, group1).next();
        expect(group2).toEqual(['test2']);

        const group3 = slidingWindow(allItems, group2).next();
        expect(group3).toEqual(['test3']);
      });

      test('2 items', () => {
        const visibleItems = ['test0', 'test0-separator', 'test1'];

        const group1 = slidingWindow(allItems, visibleItems).next();
        expect(group1).toEqual(['test2', 'test2-separator', 'test3']);

        const group2 = slidingWindow(allItems, group1).next();
        expect(group2).toEqual(['test4', 'test4-separator', 'test5']);

        const group3 = slidingWindow(allItems, group2).next();
        expect(group3).toEqual(['test6', 'test6-separator', 'test7']);
      });
    });

    test('should return last group infinite times', () => {
      const group1 = slidingWindow(allItems, visibleItems).next();
      const group2 = slidingWindow(allItems, group1).next();

      expect(group2).toEqual([
        'test10',
        'test10-separator',
        'test11',
        'test11-separator',
        'test12',
        'test12-separator',
        'test13',
        'test13-separator',
        'test14',
      ]);

      const group3 = slidingWindow(allItems, group2).next();

      expect(group3).toEqual([
        'test15',
        'test15-separator',
        'test16',
        'test16-separator',
        'test17',
        'test17-separator',
        'test18',
        'test18-separator',
        'test19',
      ]);

      const group4 = slidingWindow(allItems, group3).next();

      expect(group4).toEqual([
        'test15',
        'test15-separator',
        'test16',
        'test16-separator',
        'test17',
        'test17-separator',
        'test18',
        'test18-separator',
        'test19',
      ]);

      const group5 = slidingWindow(allItems, group4).next();

      expect(group5).toEqual([
        'test15',
        'test15-separator',
        'test16',
        'test16-separator',
        'test17',
        'test17-separator',
        'test18',
        'test18-separator',
        'test19',
      ]);
      expect(group3).toEqual(group4);
      expect(group4).toEqual(group5);
    });

    test('invalid inputs', () => {
      const visibleItems = [
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

      expect(slidingWindow([], visibleItems).next()).toEqual([]);
      expect(slidingWindow([], []).next()).toEqual([]);
      expect(slidingWindow(allItems, []).next()).toEqual([]);
    });
  });

  describe('previous group', () => {
    describe('should return prev visible group', () => {
      test('5 items', () => {
        const visibleItems = [
          'test15',
          'test15-separator',
          'test16',
          'test16-separator',
          'test17',
          'test17-separator',
          'test18',
          'test18-separator',
          'test19',
        ];
        const group1 = slidingWindow(allItems, visibleItems).prev();

        expect(group1).toEqual([
          'test10',
          'test10-separator',
          'test11',
          'test11-separator',
          'test12',
          'test12-separator',
          'test13',
          'test13-separator',
          'test14',
        ]);

        const group2 = slidingWindow(allItems, group1).prev();

        expect(group2).toEqual([
          'test5',
          'test5-separator',
          'test6',
          'test6-separator',
          'test7',
          'test7-separator',
          'test8',
          'test8-separator',
          'test9',
        ]);

        const group3 = slidingWindow(allItems, group2).prev();

        expect(group3).toEqual([
          'test0',
          'test0-separator',
          'test1',
          'test1-separator',
          'test2',
          'test2-separator',
          'test3',
          'test3-separator',
          'test4',
        ]);
      });

      test('1 item', () => {
        const visibleItems = ['test17', 'test17-separator'];

        const group1 = slidingWindow(allItems, visibleItems).prev();
        expect(group1).toEqual(['test16']);

        const group2 = slidingWindow(allItems, group1).prev();
        expect(group2).toEqual(['test15']);

        const group3 = slidingWindow(allItems, group2).prev();
        expect(group3).toEqual(['test14']);
      });

      test('2 items', () => {
        const visibleItems = ['test17', 'test17-separator', 'test18'];

        const group1 = slidingWindow(allItems, visibleItems).prev();
        expect(group1).toEqual(['test15', 'test15-separator', 'test16']);

        const group2 = slidingWindow(allItems, group1).prev();
        expect(group2).toEqual(['test13', 'test13-separator', 'test14']);

        const group3 = slidingWindow(allItems, group2).prev();
        expect(group3).toEqual(['test11', 'test11-separator', 'test12']);
      });
    });

    test('should return first group infinite times', () => {
      const visibleItems = [
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

      const group1 = slidingWindow(allItems, visibleItems).prev();
      expect(group1).toEqual([
        'test0',
        'test0-separator',
        'test1',
        'test1-separator',
        'test2',
        'test2-separator',
        'test3',
        'test3-separator',
        'test4',
      ]);

      const group2 = slidingWindow(allItems, group1).prev();
      expect(group2).toEqual([
        'test0',
        'test0-separator',
        'test1',
        'test1-separator',
        'test2',
        'test2-separator',
        'test3',
        'test3-separator',
        'test4',
      ]);

      expect(group1).toEqual(group2);
    });

    test('invalid inputs', () => {
      const visibleItems = [
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

      expect(slidingWindow([], visibleItems).prev()).toEqual([]);
      expect(slidingWindow([], []).prev()).toEqual([]);
      expect(slidingWindow(allItems, []).prev()).toEqual([]);
    });
  });
});

const allItems = [
  'test0',
  'test0-separator',
  'test1',
  'test1-separator',
  'test2',
  'test2-separator',
  'test3',
  'test3-separator',
  'test4',
  'test4-separator',
  'test5',
  'test5-separator',
  'test6',
  'test6-separator',
  'test7',
  'test7-separator',
  'test8',
  'test8-separator',
  'test9',
  'test9-separator',
  'test10',
  'test10-separator',
  'test11',
  'test11-separator',
  'test12',
  'test12-separator',
  'test13',
  'test13-separator',
  'test14',
  'test14-separator',
  'test15',
  'test15-separator',
  'test16',
  'test16-separator',
  'test17',
  'test17-separator',
  'test18',
  'test18-separator',
  'test19',
];
