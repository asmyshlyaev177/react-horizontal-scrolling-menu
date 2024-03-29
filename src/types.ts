import { Options } from 'scroll-into-view-if-needed';

import { events } from './constants';

export type ItemId = string;

export interface IOItem {
  index: string;
  key: ItemId;
  entry: IntersectionObserverEntry;
  visible: boolean;
}

export type Event = (typeof events)[keyof typeof events];

export type EventKey = Event | ItemId;

export type Item = [itemId: ItemId, observerEntry: IOItem];

export type visibleElements = ItemId[];

export type RefType<T> =
  | React.MutableRefObject<T | null>
  | React.RefCallback<T>;

export interface Refs {
  [key: ItemId]: React.MutableRefObject<HTMLElement | null>;
}

export type ItemType = React.ReactElement<{
  /**
    Required. id for every item, should be unique
   */
  itemId: ItemId;
}>;

export type CustomScrollBehavior = Options;

export type ScrollBehaviorArg = ScrollBehavior | CustomScrollBehavior;

export interface scrollToItemOptions {
  boundary?: HTMLElement | null;
  duration?: number;
  behavior: ScrollBehaviorArg;
}

export type ItemOrElement = IOItem | Element | undefined;
