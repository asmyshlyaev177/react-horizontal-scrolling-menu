import type { CustomEasing } from 'smooth-scroll-into-view-if-needed';
import { Options } from 'scroll-into-view-if-needed';

import { events } from './constants';
export interface IOItem {
  index: string;
  key: string;
  entry: IntersectionObserverEntry;
  visible: boolean;
}

export type ItemId = string;

export type Event = (typeof events)[keyof typeof events];

export type EventKey = Event | ItemId;

export type Item = [itemId: ItemId, observerEntry: IOItem];

export type visibleElements = ItemId[];

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

export interface scrollToItemOptions {
  boundary?: HTMLElement | null;
  duration?: number;
  ease?: CustomEasing;
  behavior: CustomScrollBehavior;
}

export type ItemOrElement = IOItem | Element | undefined;

export type ScrollBehaviorArg = ScrollBehavior | CustomScrollBehavior;
