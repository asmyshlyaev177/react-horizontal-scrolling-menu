import { CSSProperties } from "react";
type Data = JSX.Element[];

interface MenuProps {
  alignCenter: boolean,
  arrowClass: string,
  arrowDisabledClass: string,
  arrowLeft: JSX.Element|null,
  arrowRight: JSX.Element|null,
  clickWhenDrag: boolean,
  dragging: boolean,
  data: Data,
  forwardClick: boolean,
  innerWrapperClass: string,
  itemClass: string,
  itemClassActive: string,
  hideArrows: boolean,
  hideSingleArrow: boolean,
  menuStyle: CSSProperties,
  menuClass: string,
  onSelect: ((selectedItemKey: string) => void),
  onUpdate: (({translate: number})  => void),
  scrollToSelected: boolean,
  selected: string,
  translate: number,
  transition: number,
  wrapperClass: string,
  wrapperStyle: CSSProperties,
  wheel: boolean,
  xPoint: number,
};

type Ref = HTMLDivElement|HTMLElement|null;

type RefObject = { [key: string]: Ref };

type Void = void|false;

type MenuItem = [string, Ref];
type MenuItems = MenuItem[];

export { MenuProps, Ref, RefObject, Data, Void, MenuItem, MenuItems }
