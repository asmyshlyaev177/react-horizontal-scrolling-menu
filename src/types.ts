export type visibleItems = string[];

export interface IOItem {
  index: string;
  key: string;
  entry: IntersectionObserverEntry;
  visible: boolean;
}
export type Item = [itemId: string, observerEntry: IOItem];

export interface Refs {
  [key: string]: React.MutableRefObject<HTMLElement | null>;
}

type ItemProps = {
  itemId: string;
};
export type ItemType = React.ReactElement<ItemProps>;

// export interface IOEntry extends Omit<IntersectionObserverEntry, 'target'> {
//     readonly target: any;
// }
