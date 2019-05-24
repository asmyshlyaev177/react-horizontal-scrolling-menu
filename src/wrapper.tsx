import React, { CSSProperties } from 'react';
import { defaultProps } from './defautSettings';
import { Data, Ref, RefObject, Void } from './types';

interface ArrowWrapperProps {
  className: string;
  // tslint:disable-next-line:ban-types
  onClick: Function;
  children: JSX.Element;
  isDisabled: boolean;
  disabledClass?: string;
}

const ArrowDefaultProps = {
  disabledClass: defaultProps.arrowDisabledClass,
};

/** Wrapper component for arrows */
export class ArrowWrapper extends React.PureComponent<ArrowWrapperProps> {
  public static defaultProps = ArrowDefaultProps;
  public render(): React.ReactNode {
    const {
      isDisabled,
      className: clsName,
      disabledClass,
      onClick,
      children,
    } = this.props;
    const className = `${clsName} ${isDisabled ? disabledClass : ''}`;
    const clickHandler = (): Void => {
      return onClick();
    };

    return (
      <div className={className} onClick={clickHandler}>
        {React.cloneElement(children, children.props)}
      </div>
    );
  }
}

interface InnerStyleProps {
  translate: number;
  dragging: boolean;
  mounted: boolean;
  transition: number;
  inertiaScrolling: boolean;
}

/** function to get default styles for innerWrapper */
export const innerStyle = ({
  translate,
  dragging,
  mounted,
  transition,
  inertiaScrolling,
}: InnerStyleProps): CSSProperties => {
  return {
    transform: `translate3d(${translate}px, 0px, 0px)`,
    transition:
      `transform ${dragging || !mounted ? '0' : transition}s` +
      (inertiaScrolling ? ' ease-out' : ''),
    width: '9900px',
  };
};

interface InnerWrapperProps {
  data: Data;
  // setRef: Function;
  setRef: (ref: RefObject) => Void;
  setMenuInnerRef: (arg0: any) => Void;
  // tslint:disable-next-line:ban-types
  onClick: Function;
  translate: number;
  dragging: boolean;
  mounted: boolean;
  transition: number;
  selected: string | number;
  innerWrapperStyle: object;
  innerWrapperClass: string;
  itemStyle: object;
  itemClass: string;
  itemClassActive: string;
  inertiaScrolling: boolean;
  useButtonRole: boolean;
}

// ** innerWrapper component, menuItems will be children */
// tslint:disable-next-line:max-classes-per-file
export class InnerWrapper extends React.PureComponent<InnerWrapperProps, {}> {
  public static defaultProps = {
    data: [],
    dragging: true,
    mounted: false,
    selected: defaultProps.selected,
    transition: defaultProps.transition,
    translate: defaultProps.translate,
  };

  /** set ref of this component */
  public setMenuInnerRef = (value: HTMLDivElement | null): Void => {
    const { setMenuInnerRef } = this.props;
    setMenuInnerRef({ menuInner: { key: 'menuInner', elem: value } });
  }

  /** set ref for menuItems */
  public setRef = (
    key: string,
    elKey: string,
    index: number,
    value: HTMLDivElement | null,
  ): Void => {
    const { setRef } = this.props;
    setRef({ [key]: { index, key: elKey, elem: value } });
  }

  /** check if menuItem active */
  public isElementActive = (
    itemId: string | number | null,
    selected: string | number,
  ): boolean => String(itemId) === String(selected)

  /** make array of menuItems */
  public setItems = (
    arr: JSX.Element[],
    selected: React.ReactText,
  ): JSX.Element[] => {
    const items = arr.map(el => {
      const { onClick = () => false } = el.props;
      const props = {
        onClick: () => this.forwardClickHandler(el.key, onClick),
        selected: this.isElementActive(el.key, selected),
      };
      return React.cloneElement(el, props);
    });
    return items;
  }

  public forwardClickHandler = (
    key: any,
    // tslint:disable-next-line:ban-types
    onClick: Function = () => false,
  ) => (): Void => {
    const { onClick: selectItem } = this.props;
    onClick();
    selectItem(key);
  }

  public render() {
    const {
      translate,
      dragging,
      mounted,
      transition,
      innerWrapperStyle,
      innerWrapperClass,
      itemStyle,
      itemClass,
      itemClassActive,
      data,
      selected,
      inertiaScrolling,
      useButtonRole,
    } = this.props;

    const items = this.setItems(data, selected);

    const style: CSSProperties = innerStyle({
      dragging,
      inertiaScrolling,
      mounted,
      transition,
      translate,
    });

    const wrapperStyles = { ...style, ...innerWrapperStyle };

    return (
      <div
        className={innerWrapperClass}
        style={wrapperStyles}
        ref={inst => this.setMenuInnerRef(inst)}
      >
        {items.map((Item, i) => (
          <div
            ref={inst =>
              this.setRef(`menuitem-${i}`, String(Item.key || ''), i, inst)
            }
            className={`${itemClass} ${
              Item.props.selected ? itemClassActive : ''
            }`}
            key={'menuItem-' + Item.key}
            style={itemStyle}
            onClick={Item.props.onClick()}
            tabIndex={1}
            role={useButtonRole?'button':''}
          >
            {Item}
          </div>
        ))}
      </div>
    );
  }
}
