import{i as e}from"./preload-helper-BdFrVu1K.js";var t;e((()=>{t=`import { ItemsMap } from '../ItemsMap';
import { observerOptions } from '../settings';
import type { Refs } from '../types';
interface Props {
    items: ItemsMap;
    itemsChanged: string;
    options: typeof observerOptions;
    refs: {
        current: Refs;
    };
    root: {
        current: Element | null;
    };
}
declare function useIntersectionObserver({ items, itemsChanged, refs, options, root, }: Props): void;
export default useIntersectionObserver;
`}))();export{t as default};