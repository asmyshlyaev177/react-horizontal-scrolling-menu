import React, { CSSProperties } from 'react';
import {defaultProps} from './defautSettings';
import { Data, RefObject, Void } from './types';

interface ArrowWrapperProps {
  className: string,
  onClick: Function,
  children: JSX.Element,
  isDisabled: boolean,
  hideArrows: boolean,
  disabledClass: string,
  forwardClick: boolean
};

const ArrowDefaultProps = {
  disabledClass: defaultProps.arrowDisabledClass,
};

export class ArrowWrapper extends React.PureComponent<ArrowWrapperProps> {
  static defaultProps = ArrowDefaultProps;
  public render(): React.ReactNode {
    const {
      isDisabled,
      className: clsName,
      disabledClass,
      hideArrows,
      forwardClick,
      onClick,
      children
    } = this.props;
    const disabledClassName = isDisabled
      ? disabledClass || `${clsName}--disabled`
      : '';
    const className = `${clsName} ${hideArrows ? disabledClassName : ''}`;
    const childProps = {
      ...children.props,
      onClick: () => (forwardClick ? onClick() : null),
    };
    const clickHandler = (): Void => {
      onClick();
    };

    return (<div
      className={className}
      onClick={clickHandler}
      >
        {React.cloneElement(children, childProps)}
      </div>);
  };

};

interface innerStyleProps {
  translate: number,
  dragging: boolean,
  mounted: boolean,
  transition: number,
};

export const innerStyle = ({translate, dragging, mounted, transition} : innerStyleProps): CSSProperties => {
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
  data: Data,
  setRef: Function,
  onClick: Function,
  translate: number,
  dragging: boolean,
  mounted: boolean,
  transition: number,
  selected: string|number,
  innerWrapperClass: string,
  itemClass: string,
  itemClassActive: string,
  forwardClick: boolean,
};

export class InnerWrapper extends React.PureComponent<InnerWrapperProps, {}> {
  static defaultProps = {
    data: [],
    translate: defaultProps.translate,
    dragging: true,
    mounted: false,
    transition: defaultProps.transition,
    selected: defaultProps.selected,
  };
  private ref: RefObject;
  private items: JSX.Element[]|null;
  constructor(props: InnerWrapperProps) {
    super(props);
    this.ref = {};
    this.items = null;
  }

  setRef = (key: string, value: HTMLDivElement | null): Void => {
    const {setRef} = this.props;
    this.ref[key] = value;
    setRef(this.ref);
  };

  isElementActive = (itemId: string|number|null, selected: string|number): boolean => String(itemId) === String(selected);

  setItems = (arr: JSX.Element[], selected: React.ReactText, forwardClick: boolean, onClick: Function): JSX.Element[] => {
    const items = arr.map(el => {
      const props = {
        selected: this.isElementActive(el.key, selected),
        onClick: this.forwardClickHandler(el.key),
      };
      return React.cloneElement(el, props);
    });
    return items;
  };

  forwardClickHandler = (key: any, reverse: boolean = false) => (): Void => {
    const { forwardClick, onClick } = this.props;
    if (reverse ? !forwardClick : forwardClick) onClick(key);
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
      forwardClick,
      onClick,
    } = this.props;

    const items = this.setItems(data, selected, forwardClick, onClick);

    const style: CSSProperties = innerStyle({ translate, dragging, mounted, transition });

    return (
      <div
        className={innerWrapperClass}
        style={style}
        ref={inst => this.setRef('menuInner', inst)}>
        {items.map((Item, i) => (
          <div
            ref={inst => this.setRef(`menuitem-${i}`, inst)}
            className={`${itemClass} ${
              Item.props.selected ? itemClassActive : ''
            }`}
            key={'menuItem-' + Item.key}
            style={{
              display: 'inline-block',
            }}
            onClick={this.forwardClickHandler(Item.key, true)}
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



