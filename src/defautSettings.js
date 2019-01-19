const defaultSetting = {
  alignCenter: true,
  arrowClass: 'scroll-menu-arrow',
  clickWhenDrag: false,
  dragging: true,
  data: [],
  firstPageOffset: 0,
  innerWrapperClass: 'menu-wrapper--inner',
  itemClass: 'menu-item-wrapper',
  itemClassActive: 'active',
  hideArrows: false,
  hideSingleArrow: false,
  lastPageOffset: 0,
  menuItems: [],
  menuPos: 0,
  menuWidth: 0,
  menuClass: 'horizontal-menu',
  scrollToSelected: false,
  selected: 0,
  startDragTranslate: null,
  translate: 0.000,
  transition: 0.4,
  wrapperClass: 'menu-wrapper',
  wheel: true,
  xPoint: 0,
  xDraggedDistance: null
};

const defaultProps = {
  alignCenter: defaultSetting.alignCenter,
  arrowClass: defaultSetting.arrowClass,
  innerWrapperClass: defaultSetting.innerWrapperClass,
  itemClass: defaultSetting.itemClass,
  itemClassActive: defaultSetting.itemClassActive,
  hideArrows: defaultSetting.hideArrows,
  hideSingleArrow: defaultSetting.hideSingleArrow,
  clickWhenDrag: defaultSetting.clickWhenDrag,
  data: defaultSetting.data,
  dragging: defaultSetting.dragging,
  scrollToSelected: defaultSetting.scrollToSelected,
  selected: defaultSetting.selected,
  transition: defaultSetting.transition,
  translate: defaultSetting.translate,
  menuClass: defaultSetting.menuClass,
  wheel: defaultSetting.wheel,
  wrapperClass: defaultSetting.wrapperClass
};

const defaultMenuStyle = {
  display: 'flex',
  alignItems: 'center',
  userSelect: 'none'
};

const defaultWrapperStyle = {
  overflow: 'hidden',
  userSelect: 'none' 
};

export { defaultSetting, defaultProps, defaultMenuStyle, defaultWrapperStyle };
