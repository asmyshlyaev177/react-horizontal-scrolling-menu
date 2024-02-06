import type { CustomEasing } from 'smooth-scroll-into-view-if-needed';
import { Options } from 'scroll-into-view-if-needed';

export type visibleElements = string[];

export interface IOItem {
  index: string;
  key: string;
  entry: IntersectionObserverEntry;
  visible: boolean;
}

// export type Item = [itemId: string, observerEntry: IOItem];
// TODO: for support TS < 4
export type Item = [string, IOItem];

export interface Refs {
  [key: string]: React.MutableRefObject<HTMLElement | null>;
}

export type ItemType = React.ReactElement<{
  /**
    Required. id for every item, should be unique
   */
  itemId: string;
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
