import React from 'react';
import type { Refs, Item } from './types';
import { observerOptions } from './settings';

export const getNodesFromRefs = (refs: Refs): HTMLElement[] => {
  const result = Object.values(refs)
    .map((el) => el.current)
    .filter(Boolean);

  return result as HTMLElement[];
};

export function observerEntriesToItems(
  entries: IntersectionObserverEntry[],
  options: typeof observerOptions
): Item[] {
  return [...entries].map((entry) => {
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
  item?: Element,
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

export function getElementOrConstructor(
  Elem: React.FC | React.ReactNode
): JSX.Element | null {
  return (
    (React.isValidElement(Elem) && Elem) ||
    (typeof Elem === 'function' && <Elem />) ||
    null
  );
}
