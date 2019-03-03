import React, { CSSProperties } from 'react';
import {defaultProps} from './defautSettings';
import { Data, RefObject } from './types';

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

export const ArrowWrapper = ({
  className: clsName,
  onClick,
  children,
  isDisabled,
  hideArrows,
  disabledClass,
  forwardClick
} : ArrowWrapperProps) => {
  const disabledClassName = isDisabled
    ? disabledClass || `${clsName}--disabled`
    : '';
  const className = `${clsName} ${hideArrows ? disabledClassName : ''}`;
  const childProps = {
    ...children.props,
    onClick: () => (forwardClick ? onClick() : null),
  };
  const clickHandler = (): void => {
    onClick();
  };

  return (<div
    className={className}
    onClick={clickHandler}
    >
      {React.cloneElement(children, childProps)}
    </div>);
};

ArrowWrapper.defaultProps = ArrowDefaultProps;

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

export class InnerWrapper extends React.Component<InnerWrapperProps, {}> {
  static defaultProps = {
    data: [],
    translate: defaultProps.translate,
    dragging: true,
    mounted: false,
    transition: defaultProps.transition,
    selected: defaultProps.selected,
  };
  private ref: RefObject;
  constructor(props: InnerWrapperProps) {
    super(props);
    this.ref = {};
  }

  setRef = (key: string, value: HTMLDivElement | null): void => {
    const {setRef} = this.props;
    this.ref[key] = value;
    setRef(this.ref);
  };

  render() {
    const {
      data,
      translate,
      dragging,
      mounted,
      transition,
      selected,
      innerWrapperClass,
      itemClass,
      onClick,
      itemClassActive,
      forwardClick,
    } = this.props;
    const isActive = (itemId: string|number|null, selected: string|number): boolean => String(itemId) === String(selected);
    const items = data.map(el => {
      const props = {
        selected: isActive(el.key, selected),
        onClick: () => (forwardClick ? onClick(el.key) : null),
      };
      return React.cloneElement(el, props);
    });

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
              isActive(Item.key, selected) ? itemClassActive : ''
            }`}
            key={'menuItem-' + Item.key}
            style={{
              display: 'inline-block',
            }}
            onClick={() => (forwardClick ? null : onClick(Item.key))}>
            {Item}
          </div>
        ))}
      </div>
    );
  }
}



