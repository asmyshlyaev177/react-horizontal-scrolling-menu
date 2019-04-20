import { CSSProperties } from "react";
import { MenuProps } from './types';

/**
 * Default styles for ScrollMenu component
 */
const defaultMenuStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  userSelect: 'none',
};

/**
 * Default styles for InnerWrapper component
 */
const defaultWrapperStyle: CSSProperties = {
  overflow: 'hidden',
  userSelect: 'none',
};

/**
 * Default props for ScrollMenu component
 */
const defaultProps: MenuProps = {
  /** align menu items to center, so in left and right will be empty space */
  alignCenter: true,
  /** align items after window resize*/
  alignOnResize: true,
  /** class for Arrow component */
  arrowClass: 'scroll-menu-arrow',
  /** Arrows components */
  arrowLeft: null,
  arrowRight: null,
  /** class for arrow when it's disabled */
  arrowDisabledClass: 'scroll-menu-arrow--disabled',
  /** when drag item and mouse button mouseup choose menu item under cursor  */
  clickWhenDrag: false,
  /** enable/disable dragging with mouse */
  dragging: true,
  /** array of MenuItem elements */
  data: [],
  /** class for InnerWrapper */
  innerWrapperClass: 'menu-wrapper--inner',
  /** class for MenuItem */
  itemClass: 'menu-item-wrapper',
  /** class for selected MenuItem */
  itemClassActive: 'active',
  /** add disabled class to arrows */
  hideArrows: false,
  /** hide left/right arrow on left/right edge */
  hideSingleArrow: false,
  /** class for ScrollMenu */
  menuClass: 'horizontal-menu',
  /** styles for ScrollMenu */
  menuStyle: defaultMenuStyle,
  /** cb when item selected */
  onSelect: () => false,
  /** cb when position updated */
  onUpdate: () => false,
  /** automatically scroll to selected item on initialization */
  scrollToSelected: false,
  /** how many items to scroll, 0 for all visible */
  scrollBy: 0,
  /** selected menu item */
  selected: '',
  /** position of elements */
  translate: 0.0,
  /** animation speed */
  transition: 0.4,
  /** class for wrapper */
  wrapperClass: 'menu-wrapper',
  /** styles for wrapper */
  wrapperStyle: defaultWrapperStyle,
  /** scroll with mouse wheel */
  wheel: true,
  /** this not used */
  xPoint: 0,
};

export {defaultProps, defaultMenuStyle, defaultWrapperStyle};
