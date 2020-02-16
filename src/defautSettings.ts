import { CSSProperties } from 'react';
import { MenuProps } from './types';

/**
 * Default styles for ScrollMenu component
 */
const defaultMenuStyle: CSSProperties = {
  alignItems: 'center',
  display: 'flex',
  userSelect: 'none',
};

/**
 * Default styles for OuterWrapper component
 */
const defaultWrapperStyle: CSSProperties = {
  overflow: 'hidden',
  userSelect: 'none',
};

/**
 * Default styles for InnerWrapper component
 */
const defaultInnerWrapperStyle: CSSProperties = {
  textAlign: 'left',
};

/**
 * Default styles for item Wrapper component
 */
const defaultItemWrapperStyle: CSSProperties = {
  display: 'inline-block',
};

/**
 * Default props for ScrollMenu component
 */
const defaultProps: MenuProps = {
  /** align menu items to center, so in left and right will be empty space */
  alignCenter: true,
  /** align items after window resize */
  alignOnResize: true,
  /** class for Arrow component */
  arrowClass: 'scroll-menu-arrow',
  /** class for arrow when it's disabled */
  arrowDisabledClass: 'scroll-menu-arrow--disabled',
  /** Arrows components */
  arrowLeft: null,
  arrowRight: null,
  /** when drag item and mouse button mouseup choose menu item under cursor  */
  clickWhenDrag: false,
  /** enable/disable dragging with mouse */
  /** array of MenuItem elements */
  data: [],
  dragging: true,
  /** enable/disable inertia scrolling */
  /** add disabled class to arrows */
  hideArrows: false,
  /** hide left/right arrow on left/right edge */
  hideSingleArrow: false,
  /** class for ScrollMenu */
  inertiaScrolling: false,
  /** slow down factor for inertia scrolling */
  inertiaScrollingSlowdown: 0.25,
  /** class for InnerWrapper */
  innerWrapperClass: 'menu-wrapper--inner',
  /** styles for InnerWrapper */
  innerWrapperStyle: defaultInnerWrapperStyle,
  /** class for MenuItem */
  itemClass: 'menu-item-wrapper',
  /** class for selected MenuItem */
  itemClassActive: 'active',
  /** styles for menuItem */
  itemStyle: defaultItemWrapperStyle,
  menuClass: 'horizontal-menu',
  /** styles for ScrollMenu */
  menuStyle: defaultMenuStyle,
  /** cb for first item reached */
  onFirstItemVisible: () => false,
  /** cb for last item reached */
  onLastItemVisible: () => false,
  /** cb when item selected */
  onSelect: () => false,
  /** cb when position updated */
  onUpdate: () => false,
  /** how many items to scroll, 0 for all visible */
  scrollBy: 0,
  /** automatically scroll to selected item on initialization */
  scrollToSelected: false,
  /** selected menu item */
  selected: '',
  /** animation speed */
  transition: 0.4,
  /** position of elements */
  translate: 0.0,
  /** use button role for items */
  useButtonRole: true,
  /** class for wrapper */
  wrapperClass: 'menu-wrapper',
  /** styles for wrapper */
  wrapperStyle: defaultWrapperStyle,
  /** scroll with mouse wheel */
  // tslint:disable-next-line:object-literal-sort-keys
  wheel: true,
  /** this not used */
  xPoint: 0,
  /** for rtl languages */
  rtl: false,
};

export {defaultMenuStyle, defaultProps, defaultWrapperStyle};
