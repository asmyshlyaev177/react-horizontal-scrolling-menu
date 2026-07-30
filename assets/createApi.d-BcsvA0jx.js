import{i as e}from"./preload-helper-BdFrVu1K.js";var t;e((()=>{t=`import React from 'react';
import { ItemsMap } from './ItemsMap';
import type { IOItem, ItemId, ItemOrElement, ScrollBehaviorArg, scrollToItemOptions } from './types';
type ScrollOptions = Omit<scrollToItemOptions, 'behavior'>;
export default function createApi(items: ItemsMap, menuVisible: {
    current: boolean;
}, transitionOptions?: {
    duration?: scrollToItemOptions['duration'];
    behavior?: scrollToItemOptions['behavior'];
    boundary?: React.MutableRefObject<scrollToItemOptions['boundary']>;
}, noPolyfill?: boolean): {
    /**
     * Get an item by id
     *
     * * example:
     * \`\`\`
     *  const item = getItemById('test1')
     *  // { index: '1', key: 'test1', entry: IntersectionObserverEntry, visible: true }
     * \`\`\`
     */
    getItemById: (id: ItemId) => IOItem | undefined;
    /**
     * Get an item node by id
     *
     * * example:
     * \`\`\`
     *  const item = getItemElementById('test1')
     *  // DomNode
     * \`\`\`
     */
    getItemElementById: (id: ItemId) => Element | null;
    /**
     * Get an item by index
     *
     * * example:
     * \`\`\`
     *  const item = getItemByIndex('1')
     *  // { index: '1', key: 'test1', entry: IntersectionObserverEntry, visible: true }
     * \`\`\`
     */
    getItemByIndex: (index: number | string) => IOItem | undefined;
    /**
     * Get an item node by index
     *
     * * example:
     * \`\`\`
     *  const item = getItemElementById('1')
     *  // DomNode
     * \`\`\`
     */
    getItemElementByIndex: (id: ItemId) => Element | null;
    /**
     * Get a next item after last currently visible
     *
     * * example:
     * \`\`\`
     *  const next = getNextElement()
     *  // { index: '5', key: 'test1', entry: IntersectionObserverEntry, visible: true }
     * \`\`\`
     */
    getNextElement: () => IOItem | undefined;
    /**
     * Get an item before first currently visible
     *
     * * example:
     * \`\`\`
     *  const prev = getPrevElement()
     *  // { index: '1', key: 'test1', entry: IntersectionObserverEntry, visible: true }
     * \`\`\`
     */
    getPrevElement: () => IOItem | undefined;
    isFirstItemVisible: boolean;
    /**
     * Return item visibility
     *
     * * example:
     * \`\`\`
     *  const visible = isItemVisible('item1')
     *  // true || false
     * \`\`\`
     */
    isItemVisible: (id: ItemId) => boolean;
    /**
     * Return if item is a last item
     *
     * * example:
     * \`\`\`
     *  const isLast = isLastItem('item100')
     *  // true || false
     * \`\`\`
     */
    isLastItem: (id: ItemId) => boolean;
    isLastItemVisible: boolean;
    /**
     * Scroll to next group of items
     *
     * * example:
     * \`\`\`
     *  scrollNext(
     *   'auto' | 'instant' | 'smooth',
     *   'center' | 'end' | 'nearest' | 'start',
     *   'center' | 'end' | 'nearest' | 'start'
     * )
     * \`\`\`
     */
    scrollNext: (behavior?: ScrollBehaviorArg, inline?: ScrollLogicalPosition, block?: ScrollLogicalPosition, { duration, boundary }?: ScrollOptions) => void;
    /**
     * Scroll to previous group of items
     *
     * * example:
     * \`\`\`
     *  scrollPrev(
     *   'auto' | 'instant' | 'smooth',
     *   'center' | 'end' | 'nearest' | 'start',
     *   'center' | 'end' | 'nearest' | 'start'
     * )
     * \`\`\`
     */
    scrollPrev: (behavior?: ScrollBehaviorArg, inline?: ScrollLogicalPosition, block?: ScrollLogicalPosition, { duration, boundary }?: ScrollOptions) => void;
    /**
     * Hook to subscribe to visibility updates
     *
     * * example:
     * \`\`\`
     *  const visible = useIsVisible('first' | 'last' | 'itemId1' )
     *  // true | false
     * \`\`\`
     */
    useIsVisible: (itemId: ItemId, defaultValue?: boolean) => boolean;
    /**
     * Hook that return visibility of Left Arrow
     *
     * * example:
     * \`\`\`
     *  const visible = useLeftArrowVisible()
     *  // true | false
     * \`\`\`
     */
    useLeftArrowVisible: () => boolean;
    /**
     * Hook that return visibility of Right Arrow
     *
     * * example:
     * \`\`\`
     *  const visible = useRightArrowVisible()
     *  // true | false
     * \`\`\`
     */
    useRightArrowVisible: () => boolean;
    /**
     * Scroll to some item
     *
     * * example:
     * \`\`\`
     *  scrollToItem(
     *   itemInstance || 'itemId',
     *   'auto' | 'instant' | 'smooth',
     *   'center' | 'end' | 'nearest' | 'start',
     *   'center' | 'end' | 'nearest' | 'start'
     * )
     * \`\`\`
     */
    scrollToItem: (target?: ItemOrElement, behavior?: ScrollBehaviorArg, inline?: ScrollLogicalPosition, block?: ScrollLogicalPosition, options?: scrollToItemOptions) => void;
};
export interface publicApiType extends ReturnType<typeof createApi> {
    items: ItemsMap;
    scrollContainer: React.RefObject<HTMLElement | null>;
    menuVisible: {
        current: boolean;
    };
}
export {};
`}))();export{t as default};