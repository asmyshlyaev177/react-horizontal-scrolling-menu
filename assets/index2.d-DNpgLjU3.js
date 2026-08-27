import{n as e}from"./rolldown-runtime-DkW27tQK.js";var t;function n(){return(n=e((()=>{t=`import './styles.css';
import React from 'react';
import * as constants from './constants';
import { VisibilityContext } from './context';
import { type publicApiType } from './createApi';
import getItemsPos from './getItemsPos';
import { observerOptions as defaultObserverOptions } from './settings';
import { slidingWindow } from './slidingWindow';
import type { ItemChild, ItemId, RefType, ScrollBehaviorArg } from './types';
type ComponentType = React.ReactNode | React.JSX.Element | React.FC;
export interface Props {
    /**
     Header component on top, can contain Arrows
     */
    Header?: ComponentType;
    /**
     Footer component on bottom, can contain Arrows
     */
    Footer?: ComponentType;
    /**
     Component for left arrow
  
     e.g. LeftArrow={Arrow}
  
     or LeftArrow={<Arrow {...props />}}
     */
    LeftArrow?: ComponentType;
    /**
     Component for right arrow
  
     e.g. RightArrow={Arrow}
  
     or RightArrow={<Arrow {...props />}}
     */
    RightArrow?: ComponentType;
    /**
      Every child should has unique \`itemId\` prop
     */
    children: ItemChild | ItemChild[];
    /**
      Duration of transition
     */
    transitionDuration?: number;
    /**
      Transition behavior can be 'smooth', 'auto' or custom function
  
      Example:
  
      (instructions) => {
        const [{ el, left }] = instructions;
        const styler = Styler(el);
  
        animate({
          from: el.scrollLeft,
          to: left,
          ease: easingFunctions.easeInOutCubic,
          duration: 500,
          onUpdate: (left) => styler.set('scrollLeft', left),
        });
      }
     */
    transitionBehavior?: ScrollBehaviorArg;
    /**
     Callback that fire once on init
     */
    onInit?: (api: publicApiType) => void;
    /**
     Callback that fire every time when visibility of items change
     */
    onUpdate?: (api: publicApiType) => void;
    /**
     Callback that fire on scroll event
     */
    onScroll?: (api: publicApiType, ev: React.UIEvent) => void;
    /**
     Handler for mouse wheel
     */
    onWheel?: (api: publicApiType, ev: React.WheelEvent) => void;
    /**
      Options for intersection observer
     */
    options?: Partial<typeof defaultObserverOptions>;
    onMouseDown?: (arg0: publicApiType) => React.MouseEventHandler;
    onMouseLeave?: (arg0: publicApiType) => React.MouseEventHandler;
    onMouseUp?: (arg0: publicApiType) => React.MouseEventHandler;
    onMouseMove?: (arg0: publicApiType) => React.MouseEventHandler;
    onTouchMove?: (arg0: publicApiType) => React.TouchEventHandler;
    onTouchStart?: (arg0: publicApiType) => React.TouchEventHandler;
    onTouchEnd?: (arg0: publicApiType) => React.TouchEventHandler;
    /**
      Ref object that will be passed to ScrollContainer, immediate parent of items
  
      It receives the scroll container element itself, so it can also read or
      set scrollLeft before paint (see the InfiniteLoop example)
  
      Usable for animations with formkit/auto-animate
     */
    containerRef?: RefType<Element | null>;
    /**
      For add custom className for item
     */
    itemClassName?: string;
    /**
      For add custom className for scroll container
     */
    scrollContainerClassName?: string;
    /**
      Accessible name for the scroll container.
  
      The container always carries a tab stop, so a keyboard can scroll it with
      no item focusable. A label additionally makes it a \`region\` a screen reader
      announces by name ("Categories, region") — use your visible heading's
      wording, in your own language.
     */
    scrollContainerLabel?: string;
    /**
      For add custom className for wrapper
     */
    wrapperClassName?: string;
    /**
      Ref object for access VisibilityContextApi outside of context
  
      e.g. apiRef.current?.scrollToItem(...)
     */
    apiRef?: React.MutableRefObject<publicApiType> | React.RefObject<publicApiType | null> | React.RefCallback<publicApiType>;
    RTL?: boolean;
    /**
      Disable scrollIntoView polyfill
     */
    noPolyfill?: boolean;
}
/**
  See docs and examples at

  https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu
 */
declare function ScrollMenu({ LeftArrow: _LeftArrow, RightArrow: _RightArrow, children, Header: _Header, Footer: _Footer, transitionDuration, transitionBehavior, onInit, onUpdate, onMouseDown, onMouseLeave, onMouseUp, onMouseMove, onScroll, onTouchMove, onTouchStart, onTouchEnd, onWheel, options, scrollContainerClassName, scrollContainerLabel, containerRef, itemClassName, wrapperClassName, apiRef, RTL, noPolyfill, }: Props): React.JSX.Element;
export { constants, getItemsPos, ScrollMenu, slidingWindow, VisibilityContext };
export type { ItemId, publicApiType };
`})))()}n();export{t as default};