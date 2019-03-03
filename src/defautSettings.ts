import { CSSProperties } from "react";
import { MenuProps } from './types';

const defaultMenuStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  userSelect: 'none',
};

const defaultWrapperStyle: CSSProperties = {
  overflow: 'hidden',
  userSelect: 'none',
};

const defaultProps: MenuProps = {
  alignCenter: true,
  arrowClass: 'scroll-menu-arrow',
  arrowLeft: null,
  arrowRight: null,
  arrowDisabledClass: 'scroll-menu-arrow--disabled',
  clickWhenDrag: false,
  dragging: true,
  data: [],
  forwardClick: false,
  innerWrapperClass: 'menu-wrapper--inner',
  itemClass: 'menu-item-wrapper',
  itemClassActive: 'active',
  hideArrows: false,
  hideSingleArrow: false,
  menuClass: 'horizontal-menu',
  menuStyle: defaultMenuStyle,
  onSelect: () => false,
  onUpdate: () => false,
  scrollToSelected: false,
  selected: '',
  translate: 0.0,
  transition: 0.4,
  wrapperClass: 'menu-wrapper',
  wrapperStyle: defaultWrapperStyle,
  wheel: true,
  xPoint: 0,
};

export {defaultProps, defaultMenuStyle, defaultWrapperStyle};
