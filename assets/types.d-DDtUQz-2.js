import{n as e}from"./rolldown-runtime-DkW27tQK.js";var t;function n(){return(n=e((()=>{t=`import { Options } from 'scroll-into-view-if-needed';
import { events } from './constants';
export type ItemId = string;
export interface IOItem {
    index: string;
    key: ItemId;
    entry: IntersectionObserverEntry;
    visible: boolean;
}
export type Event = (typeof events)[keyof typeof events];
export type EventKey = Event | ItemId;
export type Item = [itemId: ItemId, observerEntry: IOItem];
export type visibleElements = ItemId[];
export type RefType<T> = React.RefObject<T | null> | React.RefCallback<T>;
export interface Refs {
    [key: ItemId]: React.RefObject<HTMLElement | null>;
}
/**
 * Publishes an item's DOM node into the menu's ref registry. Items receive this
 * instead of the registry itself: the registry belongs to \`ScrollMenu\`, and only
 * its owner may mutate it.
 */
export type RegisterRef = (index: number, node: HTMLElement | null) => void;
export type ItemType = React.ReactElement<{
    /**
      Required. id for every item, should be unique
     */
    itemId: ItemId;
}>;
/**
 * A single slot in \`ScrollMenu\`'s children. Items are usually produced by a
 * \`.map()\` and mixed with conditional ones (\`{loading && <Loader itemId=... />}\`),
 * which is why a slot may also be a nested array or a falsy value — React
 * flattens both away before the menu sees them.
 */
export type ItemChild = ItemType | ItemType[] | false | null | undefined;
export type CustomScrollBehavior = Options;
export type ScrollBehaviorArg = ScrollBehavior | CustomScrollBehavior;
export interface scrollToItemOptions {
    boundary?: HTMLElement | null;
    duration?: number;
    behavior: ScrollBehaviorArg;
}
export type ItemOrElement = IOItem | Element | undefined;
`})))()}n();export{t as default};