import React, { CSSProperties } from 'react';
import { defaultProps } from './defautSettings';
import { Data, Void } from './types';

interface ArrowWrapperProps {
  className: string;
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
  static defaultProps = ArrowDefaultProps;
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

interface innerStyleProps {
  translate: number;
  dragging: boolean;
  mounted: boolean;
  transition: number;
}

/** function to get default styles for innerWrapper */
export const innerStyle = ({
  translate,
  dragging,
  mounted,
  transition,
}: innerStyleProps): CSSProperties => {
  return {
    width: '9900px',
    transform: `translate3d(${translate}px, 0px, 0px)`,
    transition: `transform ${dragging || !mounted ? '0' : transition}s`,
    whiteSpace: 'nowrap',
    textAlign: 'left',
    userSelect: 'none',
  };
};

interface InnerWrapperProps {
  data: Data;
  setRef: Function;
  setMenuInnerRef: Function;
  onClick: Function;
  translate: number;
  dragging: boolean;
  mounted: boolean;
  transition: number;
  selected: string | number;
  innerWrapperClass: string;
  itemClass: string;
  itemClassActive: string;
}

//** innerWrapper component, menuItems will be children */
export class InnerWrapper extends React.PureComponent<InnerWrapperProps, {}> {
  static defaultProps = {
    data: [],
    translate: defaultProps.translate,
    dragging: true,
    mounted: false,
    transition: defaultProps.transition,
    selected: defaultProps.selected,
  };

  /** set ref of this component */
  setMenuInnerRef = (value: HTMLDivElement | null): Void => {
    const { setMenuInnerRef } = this.props;
    setMenuInnerRef({ menuInner: { key: 'menuInner', elem: value } });
  };

  /** set ref for menuItems */
  setRef = (
    key: string,
    elKey: string,
    index: number,
    value: HTMLDivElement | null
  ): Void => {
    const { setRef } = this.props;
    setRef({ [key]: { index, key: elKey, elem: value } });
  };

  /** check if menuItem active */
  isElementActive = (
    itemId: string | number | null,
    selected: string | number
  ): boolean => String(itemId) === String(selected);

  /** make array of menuItems */
  setItems = (arr: JSX.Element[], selected: React.ReactText): JSX.Element[] => {
    const items = arr.map(el => {
      const { onClick = () => false } = el.props;
      const props = {
        selected: this.isElementActive(el.key, selected),
        onClick: () => this.forwardClickHandler(el.key, onClick),
      };
      return React.cloneElement(el, props);
    });
    return items;
  };

  forwardClickHandler = (key: any, onClick: Function = () => false) => (): Void => {
    const { onClick: selectItem } = this.props;
    onClick();
    selectItem(key);
  };

  render() {
    const {
      translate,
      dragging,
      mounted,
      transition,
      innerWrapperClass,
      itemClass,
      itemClassActive,
      data,
      selected,
    } = this.props;

    const items = this.setItems(data, selected);

    const style: CSSProperties = innerStyle({
      translate,
      dragging,
      mounted,
      transition,
    });

    return (
      <div
        className={innerWrapperClass}
        style={style}
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
            style={{
              display: 'inline-block',
            }}
            onClick={Item.props.onClick()}
            tabIndex={1}
            role="button"
          >
            {Item}
          </div>
        ))}
      </div>
    );
  }
}
