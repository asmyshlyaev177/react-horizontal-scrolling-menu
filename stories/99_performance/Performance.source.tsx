import React from 'react';
import styled from 'styled-jss';

import {
  ScrollMenu,
  VisibilityContext,
  type publicApiType,
} from 'react-horizontal-scrolling-menu';

import 'react-horizontal-scrolling-menu/dist/styles.css';

const ITEMS = 5000;

export function Performance() {
  const [items] = React.useState(() => getItems(ITEMS));
  const [selected, setSelected] = React.useState<string[]>([]);

  // NOTE: for drag by mouse
  const dragState = React.useRef(new DragDealer());

  const handleDrag = React.useCallback(
    ({ scrollContainer }: typeof VisibilityContext) =>
      (ev: React.MouseEvent) =>
        dragState.current.dragMove(ev, (posDiff) => {
          if (scrollContainer.current) {
            scrollContainer.current.scrollLeft += posDiff;
          }
        }),
    [],
  );

  const onMouseDown = React.useCallback(
    () => dragState.current.dragStart,
    [dragState],
  );
  const onMouseUp = React.useCallback(
    () => dragState.current.dragStop,
    [dragState],
  );

  const handleItemClick = React.useCallback((itemId: string) => {
    if (dragState.current.dragging) {
      return false;
    }

    setSelected((currentSelected: string[]) =>
      currentSelected.includes(itemId)
        ? currentSelected.filter((el) => el !== itemId)
        : currentSelected.concat(itemId),
    );
  }, []);

  return (
    <>
      <div style={{ marginBottom: '50px' }}>{ITEMS} items and still fast!</div>
      <div onMouseLeave={dragState.current.dragStop}>
        <ScrollMenu
          LeftArrow={LeftArrow}
          RightArrow={RightArrow}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onMouseMove={handleDrag}
          onWheel={onWheel}
          // better for performance
          noPolyfill={true}
        >
          {items.map(({ id }) => (
            <Card
              title={id}
              itemId={id} // NOTE: itemId is required for track items
              key={id}
              onClick={handleItemClick}
              selected={selected.includes(id)}
            />
          ))}
        </ScrollMenu>
      </div>
    </>
  );
}
export default Performance;

class DragDealer {
  clicked: boolean;
  dragging: boolean;
  position: number;

  constructor() {
    this.clicked = false;
    this.dragging = false;
    this.position = 0;
  }

  public dragStart = (ev: React.MouseEvent) => {
    this.position = ev.clientX;
    this.clicked = true;
  };

  public dragStop = () => {
    window.requestAnimationFrame(() => {
      this.dragging = false;
      this.clicked = false;
    });
  };

  public dragMove = (ev: React.MouseEvent, cb: (posDiff: number) => void) => {
    const newDiff = this.position - ev.clientX;

    const movedEnough = Math.abs(newDiff) > 5;

    if (this.clicked && movedEnough) {
      this.dragging = true;
    }

    if (this.dragging && movedEnough) {
      this.position = ev.clientX;
      cb(newDiff);
    }
  };
}

const LeftArrow = React.memo(() => {
  const visibility = React.useContext<publicApiType>(VisibilityContext);
  const isFirstItemVisible = visibility.useIsVisible('first', true);

  return (
    <Arrow
      disabled={isFirstItemVisible}
      onClick={() => visibility.scrollPrev()}
      testId="left-arrow"
    >
      Left
    </Arrow>
  );
});

const RightArrow = React.memo(() => {
  const visibility = React.useContext<publicApiType>(VisibilityContext);
  const isLastItemVisible = visibility.useIsVisible('last', false);

  return (
    <Arrow
      disabled={isLastItemVisible}
      onClick={() => visibility.scrollNext()}
      testId="right-arrow"
    >
      Right
    </Arrow>
  );
});

function Arrow({
  children,
  disabled,
  onClick,
  testId,
}: {
  children: React.ReactNode;
  disabled: boolean;
  onClick: VoidFunction;
  testId: string;
}) {
  return (
    <ArrowButton disabled={disabled} onClick={onClick} data-testid={testId}>
      {children}
    </ArrowButton>
  );
}
const ArrowButton = styled('button')({
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  marginBottom: '2px',
  opacity: (props) => (props.disabled ? '0' : '1'),
  userSelect: 'none',
  borderRadius: '6px',
  borderWidth: '1px',
});

const Card = React.memo(
  ({
    onClick,
    selected,
    title,
    itemId,
  }: {
    onClick: (context: publicApiType) => void;
    selected: boolean;
    title: string;
    itemId: string;
  }) => {
    const visibility = React.useContext<publicApiType>(VisibilityContext);
    const isVisible = visibility.useIsVisible(itemId, true);
    const isVisibleDeffered = React.useDeferredValue(isVisible);
    const handleClick = React.useCallback(
      () => onClick(itemId),
      [itemId, onClick],
    );
    const onKeyDown = React.useCallback(
      (ev: React.KeyboardEvent) => {
        ev.code === 'Enter' && handleClick();
      },
      [handleClick],
    );

    return (
      <CardBody
        data-cy={itemId}
        onClick={handleClick}
        onKeyDown={onKeyDown}
        data-testid="card"
        role="button"
        tabIndex={0}
        className="card"
        visible={isVisibleDeffered}
        selected={selected}
      >
        <div className="header">
          <div>{title}</div>
          <div className="visible">
            visible: {JSON.stringify(isVisibleDeffered)}
          </div>
          <div className="selected">selected: {JSON.stringify(!!selected)}</div>
        </div>
        <div className="background" />
      </CardBody>
    );
  },
  (prevProps, nextProps) =>
    prevProps.selected === nextProps.selected &&
    prevProps.title === nextProps.title,
);

const CardBody = styled('div')({
  border: '1px solid',
  display: 'inline-block',
  margin: '0 10px',
  width: '160px',
  userSelect: 'none',
  borderRadius: '8px',
  overflow: 'hidden',

  '& .header': {
    backgroundColor: 'white',
  },

  '& .visible': {
    backgroundColor: (props) => (props.visible ? 'transparent' : 'gray'),
  },

  '& .background': {
    backgroundColor: (props) => (props.selected ? 'green' : 'bisque'),
    height: '200px',
  },
});

const getId = (index: number) => `${'test'}${index}`;

const getItems = (count: number) =>
  Array(count)
    .fill(0)
    .map((_, ind) => ({ id: getId(ind) }));

function onWheel(apiObj: publicApiType, ev: React.WheelEvent): void {
  // NOTE: no good standart way to distinguish touchpad scrolling gestures
  // but can assume that gesture will affect X axis, mouse scroll only Y axis
  // of if deltaY too small probably is it touchpad
  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

  if (isThouchpad) {
    ev.stopPropagation();
    return;
  }

  if (ev.deltaY < 0) {
    apiObj.scrollNext();
  } else {
    apiObj.scrollPrev();
  }
}
