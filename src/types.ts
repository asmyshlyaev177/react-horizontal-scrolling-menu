import { CSSProperties } from "react";
type Data = JSX.Element[];

interface MenuProps {
  alignCenter: boolean,
  alignOnResize: boolean,
  arrowClass: string,
  arrowDisabledClass: string,
  arrowLeft: JSX.Element|null,
  arrowRight: JSX.Element|null,
  clickWhenDrag: boolean,
  dragging: boolean,
  data: Data,
  innerWrapperClass: string,
  itemClass: string,
  itemClassActive: string,
  hideArrows: boolean,
  hideSingleArrow: boolean,
  menuStyle: CSSProperties,
  menuClass: string,
  onSelect: ((selectedItemKey: string) => void),
  onUpdate: (
    ({translate, firstItemVisible, lastItemVisible}
      : {translate: number, firstItemVisible?: boolean, lastItemVisible?: boolean}) => void),
  scrollToSelected: boolean,
  scrollBy: number,
  selected: string,
  translate: number,
  transition: number,
  wrapperClass: string,
  wrapperStyle: CSSProperties,
  wheel: boolean,
  xPoint: number,
};

type Ref = HTMLDivElement|HTMLElement|null;

type Item = {key: string, index: number, elem: Ref };

type RefObject = { [key: string]: Item };

type Void = void|false;

type MenuItem = [string, Item];
type MenuItems = MenuItem[];

export { MenuProps, Ref, RefObject, Data, Void, MenuItem, MenuItems }
