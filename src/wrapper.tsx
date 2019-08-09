import React, { CSSProperties } from 'react';
import { defaultProps } from './defautSettings';
import { Data, RefObject, Void } from './types';

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
  rtl: boolean;
}

/** function to get default styles for innerWrapper */
export const innerStyle = ({
  translate,
  dragging,
  mounted,
  transition,
  inertiaScrolling,
  rtl,
}: InnerStyleProps): CSSProperties => {
  return {
    transform: `translate3d(${rtl ? -translate : translate}px, 0, 0)`,
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
  rtl: boolean;
}

interface InnerWrapperState {
  items: JSX.Element[];
  data: Data;
  selected: string | number;
}

// ** innerWrapper component, menuItems will be children */
// tslint:disable-next-line:max-classes-per-file
export class InnerWrapper extends React.PureComponent<
  InnerWrapperProps,
  InnerWrapperState
> {
  constructor(props: InnerWrapperProps) {
    super(props);

    this.state = {
      data: [],
      items: [],
      selected: '',
    };
  }

  public static defaultProps = {
    data: [],
    dragging: true,
    mounted: false,
    selected: defaultProps.selected,
    transition: defaultProps.transition,
    translate: defaultProps.translate,
  };

  public static getDerivedStateFromProps(
    props: InnerWrapperProps,
    state: InnerWrapperState,
  ) {
    if (state.data !== props.data || state.selected !== props.selected) {
      return {
        data: props.data,
        items: InnerWrapper.setItems(props.data, props.selected, props.onClick),
        selected: props.selected,
      };
    }

    return null;
  }

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
  public static isElementActive = (
    itemId: string | number | null,
    selected: string | number,
  ): boolean => String(itemId) === String(selected)

  /** make array of menuItems */
  public static setItems = (
    arr: JSX.Element[],
    selected: React.ReactText,
    // tslint:disable-next-line: ban-types
    selectItem: Function,
  ): JSX.Element[] => {
    const items = arr.map(el => {
      const { onClick = () => false } = el.props;
      const props = {
        onClick: () =>
          InnerWrapper.forwardClickHandler(el.key, onClick, selectItem),
        selected: InnerWrapper.isElementActive(el.key, selected),
      };
      return React.cloneElement(el, props);
    });
    return items;
  }

  public static forwardClickHandler = (
    key: any,
    // tslint:disable-next-line:ban-types
    onClick: Function = () => false,
    // tslint:disable-next-line:ban-types
    selectItem: Function,
  ) => (): Void => {
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
      inertiaScrolling,
      useButtonRole,
      rtl,
    } = this.props;

    const style: CSSProperties = innerStyle({
      dragging,
      inertiaScrolling,
      mounted,
      rtl,
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
        {this.state.items.map((Item, i) => (
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
            tabIndex={0}
            role={useButtonRole ? 'button' : ''}
          >
            {Item}
          </div>
        ))}
      </div>
    );
  }
}
