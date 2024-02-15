/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import React from 'react';

import throttle from 'lodash/throttle';

// NOTE: prevent scrolling on main page
import usePreventBodyScroll from './helpers/usePreventBodyScroll';

// NOTE drag with mouse
import { DragManager } from './helpers/DragManager';

// swipe for mobile
// import { useSwipe } from './helpers/useSwipe';

import {
  ScrollMenu,
  VisibilityContext,
  publicApiType,
} from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';

type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

const elemPrefix = 'test';
const getId = (index: number) => `${elemPrefix}${index}`;

const getItems = () =>
  Array(10)
    .fill(0)
    .map((_, ind) => ({ id: getId(ind) }));

const onWheel = (
  apiObj: scrollVisibilityApiType,
  ev: React.WheelEvent,
): void => {
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
};

function App() {
  const [items] = React.useState(getItems);
  const [selected, setSelected] = React.useState<string[]>([]);
  const [position, setPosition] = React.useState(0);

  const isItemSelected = (id: string): boolean =>
    !!selected.find((el) => el === id);

  const dragState = React.useRef(new DragManager());

  const handleDrag =
    ({ scrollContainer }: scrollVisibilityApiType) =>
    (ev: React.MouseEvent) =>
      dragState.current.dragMove(ev, (posDiff: number) => {
        if (scrollContainer.current) {
          scrollContainer.current.scrollLeft += posDiff;
        }
      });

  const handleItemClick =
    (itemId: string) =>
    ({ getItemById, scrollToItem }: scrollVisibilityApiType) => {
      if (dragState.current.dragging) {
        return false;
      }
      const itemSelected = isItemSelected(itemId);

      setSelected((currentSelected: string[]) =>
        itemSelected
          ? currentSelected.filter((el) => el !== itemId)
          : currentSelected.concat(itemId),
      );

      if (!itemSelected) {
        // NOTE: center item on select
        scrollToItem(getItemById(itemId), 'smooth', 'center', 'nearest');
      }
    };

  const restorePosition = React.useCallback(
    ({
      scrollContainer,
      getItemById,
      scrollToItem,
    }: scrollVisibilityApiType) => {
      // NOTE: scroll to item, auto/smooth for animation
      // scrollToItem(getItemById('test7'), 'auto');
      // NOTE: or restore exact position by pixels
      // scrollContainer.current.scrollLeft = position;
    },
    [],
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const savePosition = React.useCallback(
    throttle(({ scrollContainer }: scrollVisibilityApiType) => {
      !!scrollContainer.current &&
        setPosition(scrollContainer.current.scrollLeft);
    }, 500),
    [],
  );

  const { disableScroll, enableScroll } = usePreventBodyScroll();

  return (
    <div className="main">
      <div className="example" style={{ height: '200vh', paddingTop: '200px' }}>
        <div onMouseEnter={disableScroll} onMouseLeave={enableScroll}>
          <div onMouseLeave={dragState.current.dragStop}>
            <ScrollMenu
              Header={<div>Header</div>}
              Footer={() => <div>Footer</div>}
              LeftArrow={LeftArrow}
              RightArrow={RightArrow}
              onInit={restorePosition}
              onScroll={savePosition}
              onWheel={onWheel}
              onMouseDown={() => dragState.current.dragStart}
              onMouseUp={() => dragState.current.dragStop}
              onMouseMove={handleDrag}
            >
              {items.map(({ id }) => (
                <Card
                  title={id}
                  itemId={id} // NOTE: itemId is required for track items
                  key={id}
                  onClick={handleItemClick(id)}
                  selected={isItemSelected(id)}
                />
              ))}
            </ScrollMenu>
          </div>
        </div>
      </div>
    </div>
  );
}

function LeftArrow() {
  const { initComplete, isFirstItemVisible, scrollPrev } =
    React.useContext(VisibilityContext);
  // NOTE initComplete is a hack for  prevent blinking on init
  // Can get visibility of item only after it's rendered

  return (
    <Arrow
      disabled={!initComplete || (initComplete && isFirstItemVisible)}
      onClick={() => scrollPrev()}
      className="left"
    >
      Left
    </Arrow>
  );
}

function RightArrow() {
  const { initComplete, isLastItemVisible, scrollNext } =
    React.useContext(VisibilityContext);

  return (
    <Arrow
      disabled={initComplete && isLastItemVisible}
      onClick={() => scrollNext()}
      className="right"
    >
      Right
    </Arrow>
  );
}

function Arrow({
  children,
  disabled,
  onClick,
  className,
}: {
  children: React.ReactNode;
  disabled: boolean;
  onClick: VoidFunction;
  className?: string;
}) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={'arrow' + `-${className}`}
      style={{
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        right: '1%',
        opacity: disabled ? '0' : '1',
        userSelect: 'none',
      }}
    >
      {children}
    </button>
  );
}

function Card({
  onClick,
  selected,
  title,
  itemId,
}: {
  onClick: (context: publicApiType) => void;
  selected: boolean;
  title: string;
  itemId: string;
}) {
  const visibility = React.useContext(VisibilityContext);

  const visible =
    !visibility.initComplete ||
    (visibility.initComplete && visibility.isItemVisible(itemId));

  return (
    <div
      data-cy={itemId}
      onClick={() => onClick(visibility)}
      onKeyDown={(ev: React.KeyboardEvent) => {
        ev.code === 'Enter' && onClick(visibility);
      }}
      role="button"
      style={{
        border: '1px solid',
        display: 'inline-block',
        margin: '0 10px',
        width: '160px',
        userSelect: 'none',
      }}
      tabIndex={0}
      className="card"
    >
      <div className="card-header">
        <div>{title}</div>
        <div style={{ backgroundColor: visible ? 'transparent' : 'gray' }}>
          visible: {JSON.stringify(visible)}
        </div>
        <div>selected: {JSON.stringify(!!selected)}</div>
      </div>
      <div
        style={{
          backgroundColor: selected ? 'green' : 'bisque',
          height: '200px',
        }}
      />
    </div>
  );
}

export default App;
