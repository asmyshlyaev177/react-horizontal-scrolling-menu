import { IOItem } from '../types';
import { EventPayload, Observer } from './Observer';
import { events } from '../constants';

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
      const fn2 = jest.fn();
      observer.subscribe(key, fn);
      observer.subscribe('test2', fn);
      observer.subscribe('test2', fn2);
      expect(observer.observers.size).toEqual(2);
      expect([...observer.observers.entries()]).toStrictEqual([
        [key, [fn]],
        ['test2', [fn, fn2]],
      ]);
    });
  });

  describe('unsubscribe', () => {
    it('should remove subscription', () => {
      observer.subscribe(key, fn);
      expect(observer.observers.size).toEqual(1);
      observer.unsubscribe(key, fn);
      expect(observer.observers.size).toEqual(0);
    });

    it('should keep others subscriptions', () => {
      observer.subscribe(key, fn);
      observer.subscribe('test2', () => fn());
      observer.unsubscribe(key, fn);
      expect(observer.observers.size).toEqual(1);
    });
  });

  describe('update', () => {
    it('should emit single update to observers', () => {
      observer.subscribe(key, fn);
      const fn2 = jest.fn();
      observer.subscribe('test2', fn2);

      observer.update(key, item);

      expect(fn).toHaveBeenCalledTimes(1);
      expect(fn).toHaveBeenNthCalledWith(1, item);
      expect(fn2).not.toHaveBeenCalled();
    });

    it('should emit onUpdate event', () => {
      observer.subscribe(key, fn);
      const onUpdate = jest.fn();
      observer.subscribe(events.onUpdate, onUpdate);

      observer.update(key, item);

      expect(onUpdate).toHaveBeenCalledTimes(1);
    });
  });

  describe('updateBatch', () => {
    it('should emit batch of updates to observers', () => {
      observer.subscribe(key, fn);
      const fn2 = jest.fn();
      observer.subscribe('test2', fn2);

      const updates = [
        [key, item],
        [key, { test: true }],
        ['test3', item],
      ] as EventPayload[];
      observer.updateBatch(updates);

      expect(fn).toHaveBeenCalledTimes(2);
      expect(fn).toHaveBeenNthCalledWith(1, item);
      expect(fn).toHaveBeenNthCalledWith(2, { test: true });
      expect(fn2).not.toHaveBeenCalled();
    });

    it('should emit onUpdate event', () => {
      observer.subscribe(key, fn);
      const fn2 = jest.fn();
      observer.subscribe(events.onUpdate, fn2);

      const updates = [
        [key, item],
        [key, { test: true }],
        ['test3', item],
      ] as EventPayload[];
      observer.updateBatch(updates);

      expect(fn).toHaveBeenCalledTimes(2);
      expect(fn2).toHaveBeenCalledTimes(1);
    });
  });
});
