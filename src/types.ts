export type visibleItems = string[];

export interface IOItem {
  index: string;
  key: string;
  entry: IntersectionObserverEntry;
  visible: boolean;
}
export type Item = [string, IOItem];

export interface Refs {
  [key: string]: React.MutableRefObject<HTMLElement | null>;
}

// export interface IOEntry extends Omit<IntersectionObserverEntry, 'target'> {
//     readonly target: any;
// }
