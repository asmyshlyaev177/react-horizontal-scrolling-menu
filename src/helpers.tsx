import React from 'react';
import scrollIntoView from 'smooth-scroll-into-view-if-needed';
import type {
  IOItem,
  Item,
  ItemOrElement,
  ItemId,
  Refs,
  ScrollBehaviorArg,
  scrollToItemOptions,
  visibleElements,
} from './types';
import { separatorString, id as itemId, emptyStr } from './constants';
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
  options: typeof observerOptions,
): Item[] {
  return [...entries].map((entry) => {
    const target = entry.target as HTMLElement;
    const key = String(target?.dataset?.key ?? emptyStr);
    const index = String(target?.dataset?.index ?? emptyStr);

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

// eslint-disable-next-line max-params
function scrollToItem(
  item: ItemOrElement,
  behavior?: ScrollBehaviorArg,
  inline?: ScrollLogicalPosition,
  block?: ScrollLogicalPosition,
  rest?: Omit<scrollToItemOptions, 'behavior'>,
  noPolyfill?: boolean,
): void {
  const _item = (item as IOItem)?.entry?.target || item;
  const _behavior = behavior || 'smooth';

  if (!_item) {
    return void 0;
  }

  const params = {
    behavior: _behavior as unknown as ScrollBehavior,
    inline: inline || 'end',
    block: block || 'nearest',
  };

  return noPolyfill
    ? _item.scrollIntoView(params)
    : scrollIntoView(_item, {
        ...rest,
        ...params,
      });
}

export { scrollToItem };

export const getItemElementById = (id: ItemId) =>
  document.querySelector(`[${dataKeyAttribute}='${id}']`);

export const getItemElementByIndex = (id: ItemId) =>
  document.querySelector(`[${dataIndexAttribute}='${id}']`);

export function getElementOrConstructor(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Elem: React.FC | React.ReactNode | React.MemoExoticComponent<any>,
): React.JSX.Element | null {
  return (
    (React.isValidElement(Elem) && Elem) ||
    (typeof Elem === 'function' && <Elem />) ||
    // @ts-expect-error temporary solution for React.memo
    (!!Elem && typeof Elem === 'object' && <Elem />) ||
    null
  );
}

export const filterSeparators = (items: visibleElements): visibleElements =>
  items.filter((item) => !new RegExp(`.*${separatorString}$`).test(item));

export const getItemId = (item: React.ReactNode) =>
  String(
    (item as React.JSX.Element)?.props?.[itemId] ||
      String((item as React.JSX.Element)?.key || emptyStr).replace(
        /^\.\$/,
        emptyStr,
      ),
  );

export const rafTimeout = (func: () => void, delay: number = 0) =>
  setTimeout(() => {
    requestAnimationFrame(func);
  }, delay);

export function isMutableRef<T>(
  elem: React.MutableRefObject<T> | React.RefCallback<T> | React.LegacyRef<T>,
): elem is React.MutableRefObject<T> {
  return !!elem && Object.prototype.hasOwnProperty.call(elem, 'current');
}
