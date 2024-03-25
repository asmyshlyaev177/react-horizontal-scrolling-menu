import { events } from '../constants';

import type { EventKey, IOItem } from '../types';

export type ObsFn = (val?: IOItem) => void;

export type EventPayload = [key: EventKey, value?: IOItem];

export class Observer {
  observers: Map<EventKey, ObsFn[]>;

  constructor() {
    this.observers = new Map();
  }

  public subscribe = (key: EventKey, fn: ObsFn) => {
    this.observers.set(key, (this.observers.get(key) || []).concat(fn));
  };

  public unsubscribe = (key: EventKey, fn: ObsFn) => {
    const newArr = (this.observers.get(key) || []).filter((el) => el !== fn);
    if (newArr.length) {
      this.observers.set(key, newArr);
    } else {
      this.observers.delete(key);
    }
  };

  private emitUpdates = (key: EventPayload[0], value?: EventPayload[1]) => {
    const cbs = this.observers.get(key) || [];
    cbs?.forEach((cb) => cb(value));
  };

  public updateBatch = (entries: EventPayload[], onUpdate = true) => {
    if (entries.length) {
      entries.forEach(([key, value]) => this.emitUpdates(key, value));
      onUpdate && this.emitUpdates(events.onUpdate);
    }
  };

  public update = (key: EventPayload[0], value?: EventPayload[1]) => {
    this.emitUpdates(key, value);
    this.emitUpdates(events.onUpdate);
  };
}
