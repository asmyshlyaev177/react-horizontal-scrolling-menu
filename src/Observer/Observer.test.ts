import { IOItem } from '../types';
import { Observer } from './Observer';

const key = 'test';
const fn = jest.fn();
const item = {} as IOItem;

let observer: Observer;
describe('Observer', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    observer = new Observer();
  });

  it('should construct new instance', () => {
    expect(new Observer()).toBeTruthy();
  });

  describe('subscribe', () => {
    it('should add new subscriptions', () => {
      const key = 'test';
      const fn = jest.fn();
      observer.subscribe(key, fn);
      observer.subscribe('test2', fn);
      expect(observer.observers).toHaveLength(2);
      expect(observer.observers).toStrictEqual([
        { key, fn },
        { key: 'test2', fn },
      ]);
    });
  });

  describe('unsubscribe', () => {
    it('should remove subscription', () => {
      observer.subscribe(key, fn);
      observer.unsubscribe(fn);
      expect(observer.observers).toHaveLength(0);
    });

    it('should keep others subscriptions', () => {
      observer.subscribe(key, fn);
      observer.subscribe('test2', () => fn());
      observer.unsubscribe(fn);
      expect(observer.observers).toHaveLength(1);
    });
  });

  describe('tasks', () => {
    it('should put tasks to a queue', () => {
      observer.update('test', item);
      observer.update('test1', item);
      expect(observer.stack).toStrictEqual([
        ['test', item],
        ['test1', item],
      ]);
    });

    it('should emit updates to observers', async () => {
      observer.subscribe(key, fn);
      const fn2 = jest.fn();
      observer.subscribe('test2', fn2);

      observer.update(key, item);
      expect(observer.timer).not.toBeNull();
      await new Promise((res) => setTimeout(res, 100));
      expect(observer.timer).toBeNull();

      expect(fn).toHaveBeenCalledTimes(1);
      expect(fn).toHaveBeenNthCalledWith(1, item);
      expect(fn2).not.toHaveBeenCalled();
      expect(observer.stack).toHaveLength(0);
    });

    describe('flush', () => {
      it('should flush updates immediately', () => {
        observer.subscribe(key, fn);

        observer.update(key, item);
        observer.flush();

        expect(fn).toHaveBeenCalledTimes(1);
        expect(observer.stack).toHaveLength(0);
      });
    });
  });
});
