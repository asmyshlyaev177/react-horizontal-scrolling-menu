import { CSSProperties } from "react";
declare type Data = JSX.Element[];
interface MenuProps {
    alignCenter: boolean;
    arrowClass: string;
    arrowDisabledClass: string;
    arrowLeft: React.ReactElement | null;
    arrowRight: React.ReactElement | null;
    clickWhenDrag: boolean;
    dragging: boolean;
    data: Data;
    forwardClick: boolean;
    innerWrapperClass: string;
    itemClass: string;
    itemClassActive: string;
    hideArrows: boolean;
    hideSingleArrow: boolean;
    menuStyle: CSSProperties;
    menuClass: string;
    onSelect: ((selectedItemKey: string) => void);
    onUpdate: (({ translate: number }: {
        translate: any;
    }) => void);
    scrollToSelected: boolean;
    selected: string;
    translate: number;
    transition: number;
    wrapperClass: string;
    wrapperStyle: CSSProperties;
    wheel: boolean;
    xPoint: number;
}
declare type Ref = HTMLDivElement | HTMLElement | null;
declare type RefObject = {
    [key: string]: Ref;
};
declare type Void = void | false;
declare type MenuItem = [string, Ref];
declare type MenuItems = MenuItem[];
export { MenuProps, Ref, RefObject, Data, Void, MenuItem, MenuItems };
//# sourceMappingURL=types.d.ts.map