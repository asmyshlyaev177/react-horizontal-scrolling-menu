import React from 'react';
import type {
  Refs,
  Item,
  IOItem,
  visibleItems as visibleItemsType,
} from './types';
import { separatorString } from './constants';
import { observerOptions } from './settings';
import { dataKeyAttribute, dataIndexAttribute } from './constants';

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
  // TODO: remove Element
  _item?: IOItem | Element,
  behavior: ScrollBehavior = 'smooth',
  inline: ScrollLogicalPosition = 'end',
  block: ScrollLogicalPosition = 'nearest'
) {
  const item = (_item as IOItem)?.entry?.target || _item;

  if (item) {
    window &&
      window.requestAnimationFrame(() =>
        item!.scrollIntoView({
          block,
          behavior,
          inline,
        })
      );
  }
}

export const getItemElementById = (id: string | number) =>
  document.querySelector(`[${dataKeyAttribute}='${id}']`);

export const getItemElementByIndex = (id: string | number) =>
  document.querySelector(`[${dataIndexAttribute}='${id}']`);

export function getElementOrConstructor(
  Elem: React.FC | React.ReactNode
): JSX.Element | null {
  return (
    (React.isValidElement(Elem) && Elem) ||
    (typeof Elem === 'function' && <Elem />) ||
    null
  );
}

export const filterSeparators = (items: visibleItemsType): visibleItemsType =>
  items.filter((item) => !new RegExp(`.*${separatorString}$`).test(item));
