import type { IOItem } from '../types';
import { rafTimeout } from '../helpers';

export type ObsFn = (val?: IOItem) => void;

type EventPayload = [key: string, value?: IOItem];
export class Observer {
  // TODO: use Map for speed?
  observers: { key: string; fn: ObsFn }[];
  stack: EventPayload[];
  timer: NodeJS.Timeout | null;

  constructor() {
    this.observers = [];
    this.stack = [];
    this.timer = null;
  }

  public subscribe = (key: string, fn: ObsFn) => {
    this.observers.push({ key, fn });
  };

  public unsubscribe = (fn: ObsFn) => {
    this.observers = this.observers.filter((el) => el.fn !== fn);
  };

  private emitUpdates = (key: EventPayload[0], value?: EventPayload[1]) => {
    this.observers
      .filter((obs) => obs.key === key)
      .forEach((ob) => ob?.fn?.(value));
  };

  // TODO: try to just update directly without flush or stack
  public flush = () => {
    const stack = [...this.stack];
    this.stack = [];

    stack.forEach(([key, value]) => this.emitUpdates(key, value));
    this.timer = null;
  };

  private scheduleFlush = () => {
    // TODO: delay?
    if (this.timer === null) {
      this.timer = rafTimeout(this.flush, 100);
    }
  };

  public updateBatch = (enties: EventPayload[]) => {
    this.stack.push(...enties);

    this.scheduleFlush();
  };

  public update = (key: EventPayload[0], value?: EventPayload[1]) => {
    this.stack.push([key, value]);

    this.scheduleFlush();
  };
}
