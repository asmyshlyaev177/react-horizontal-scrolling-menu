import React from 'react';
import PropTypes from 'prop-types';
import { defaultSetting } from './defautSettings';

export const ArrowWrapper = ({ className: clsName, onClick, children, isDisabled, hideArrows, disabledClass, forwardClick }) => {
  const disabledClassName = isDisabled ? disabledClass || `${clsName}--disabled` : '';
  const className = `${clsName} ${hideArrows ? disabledClassName : ''}`;
  const childProps = {
    ...children.props,
    onClick: () => (forwardClick ? onClick() : null)
  };

  return (
    <div
      className={className}
      onClick={forwardClick ? null : onClick}
    >
      {React.cloneElement(children, childProps)}
    </div>
  );
};
ArrowWrapper.propTypes = {
  children: PropTypes.object.isRequired,
  className: PropTypes.string,
  disabledClass: PropTypes.string,
  forwardClick: PropTypes.bool,
  hideArrows: PropTypes.bool,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

export const innerStyle = ({ translate, dragging, mounted, transition }) => {
  return {
    width: '9900px',
    transform: `translate3d(${translate}px, 0px, 0px)`,
    transition: `transform ${dragging || !mounted ? '0' : transition}s`,
    whiteSpace: 'nowrap',
    textAlign: 'left',
    userSelect: 'none'
  };
};

export class InnerWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.ref = {};
  }

  setRef = (key, value) => {
    const { setRef } = this.props;
    this.ref[key] = value;
    setRef(this.ref);
  }

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
      forwardClick
    } = this.props;
    const isActive = (itemId, selected) => String(itemId) === String(selected);
    const items = data
      .map(el => {
        const props = {
          selected: isActive(el.key, selected),
          onClick: () => (forwardClick ? onClick(el.key) : null)
        };
        return React.cloneElement(el, props);
      });

    return (
      <div
        className={innerWrapperClass}
        style={ innerStyle({ translate, dragging, mounted, transition }) }
        ref={inst => this.setRef('menuInner', inst)}
      >
        {items.map((Item, i) => (
          <div
            ref={inst => this.setRef(`menuitem-${i}`, inst)}
            className={`${itemClass} ${isActive(Item.key, selected) ? itemClassActive : ''}`}
            key={'menuItem-' + Item.key} 
            style={{
              display: 'inline-block'
            }}
            onClick={() => forwardClick ? null : onClick(Item.key)}
          >
            {Item}
          </div>
        ))}
      </div>
    );
  }
}
InnerWrapper.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  setRef: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  translate: PropTypes.number,
  dragging: PropTypes.bool,
  mounted: PropTypes.bool,
  transition: PropTypes.number,
  selected: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  innerWrapperClass: PropTypes.string,
  itemClass: PropTypes.string,
  itemClassActive: PropTypes.string,
  forwardClick: PropTypes.bool
};

InnerWrapper.defaultProps = {
  data: [],
  translate: defaultSetting.translate,
  dragging: true,
  mounted: false,
  transition: defaultSetting.transition,
  selected: defaultSetting.selected
};
