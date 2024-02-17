import type { IOItem } from '../types';
import { rafTimeout } from '../helpers';

export type ObsFn = (val?: IOItem) => void;

export class Observer {
  observers: { key: string; fn: ObsFn }[];
  stack: [string, IOItem | undefined][];
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

  private emitUpdates = (key: string, value?: IOItem) => {
    this.observers
      .filter((obs) => obs.key === key)
      .forEach((ob) => ob?.fn?.(value));
  };

  public flush = () => {
    const stack = [...this.stack];
    this.stack = [];

    stack.forEach(([key, value]) => this.emitUpdates(key, value));
    this.timer = null;
  };

  public update = (key: string, value?: IOItem) => {
    this.stack.push([key, value]);

    if (this.timer === null) {
      this.timer = rafTimeout(this.flush);
    }
  };
}
