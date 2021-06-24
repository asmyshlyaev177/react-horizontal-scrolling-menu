import { Refs, Item } from './types';
import { observerOptions } from './settings';

export const getNodesFromRefs = (refs: Refs) =>
  Object.values(refs)
    .map((el) => el.current)
    .filter(Boolean);

export function observerEntriesToItems(
  entries: IntersectionObserverEntry[],
  options: typeof observerOptions
): Item[] {
  return [...entries].map((entry) => {
    // console.log(entry)

    const target = entry.target as HTMLElement;
    const key: string = target?.dataset?.key || '';
    const index = String(target?.dataset?.index || '');

    return [
      key,
      {
        index,
        key,
        entry,
        visible: entry.intersectionRatio >= options.ratio,
      },
    ];
  });
}
export function scrollToItem(
  item: Element,
  behavior: ScrollBehavior = 'smooth',
  inline: ScrollLogicalPosition = 'end',
  block: ScrollLogicalPosition = 'nearest'
) {
  if (item) {
    window &&
      window.requestAnimationFrame(() =>
        item.scrollIntoView({
          block,
          behavior,
          inline,
        })
      );
  }
}
