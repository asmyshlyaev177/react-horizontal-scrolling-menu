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

const getItems = (count: number) =>
  Array(count)
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

const App = () => {
  const [items] = React.useState(() => getItems(10));
  const [selected, setSelected] = React.useState<string[]>([]);
  const position = React.useRef(0);

  const isItemSelected = (id: string): boolean =>
    !!selected.find((el) => el === id);

  const dragState = React.useRef(new DragManager());
  const onMouseDown = React.useCallback(
    () => dragState.current.dragStart,
    [dragState],
  );
  const onMouseUp = React.useCallback(
    () => dragState.current.dragStop,
    [dragState],
  );

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

      // if (!itemSelected) {
      //   // NOTE: center item on select
      //   scrollToItem(getItemById(itemId), 'smooth', 'center', 'nearest');
      // }
    };

  const restorePosition = React.useCallback(
    ({ scrollContainer }: scrollVisibilityApiType) => {
      // NOTE: scroll to item, auto/smooth for animation
      // scrollToItem(getItemById('test7'), 'auto');
      // NOTE: or restore exact position by pixels
      if (scrollContainer.current) {
        scrollContainer.current.scrollLeft = 150;
      }
    },
    [],
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const savePosition = React.useCallback(
    throttle(({ scrollContainer }: scrollVisibilityApiType) => {
      if (scrollContainer.current) {
        position.current = scrollContainer.current.scrollLeft;
      }
    }, 500),
    [],
  );

  const { disableScroll, enableScroll } = usePreventBodyScroll();

  // TODO: firefox restoring scroll position on reload, investigate
  return (
    <div className="main">
      <div className="example" style={{ height: '200vh', paddingTop: '200px' }}>
        <div onMouseEnter={disableScroll} onMouseLeave={enableScroll}>
          <div onMouseLeave={dragState.current.dragStop}>
            <ScrollMenu
              LeftArrow={LeftArrow}
              RightArrow={RightArrow}
              // onInit={restorePosition}
              // onScroll={savePosition}
              onWheel={onWheel}
              onMouseDown={onMouseDown}
              onMouseUp={onMouseUp}
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
};

const LeftArrow = React.memo(() => {
  const visibility = React.useContext<publicApiType>(VisibilityContext);
  const isFirstItemVisible = visibility.useIsVisible('first', true);
  return (
    <Arrow
      disabled={isFirstItemVisible}
      onClick={visibility.scrollPrev}
      className="left"
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
      onClick={visibility.scrollNext}
      className="right"
    >
      Right
    </Arrow>
  );
});

const Arrow = ({
  children,
  disabled,
  onClick,
  className,
}: {
  children: React.ReactNode;
  disabled: boolean;
  onClick: VoidFunction;
  className?: string;
}) => {
  const [_isPending, startTransition] = React.useTransition();

  return (
    <button
      disabled={disabled}
      onClick={() => startTransition(onClick)}
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
};

const Card = React.memo(
  ({
    onClick,
    selected,
    title,
    itemId,
  }: {
    onClick: (api: publicApiType) => void;
    selected: boolean;
    title: string;
    itemId: string;
  }) => {
    const visibility = React.useContext<publicApiType>(VisibilityContext);
    const visible = visibility.useIsVisible(itemId, true);
    const isVisible = React.useDeferredValue(visible);

    const [, startTransition] = React.useTransition();
    const _onClick = React.useCallback(
      (visibility: publicApiType) => {
        startTransition(() => onClick(visibility));
      },
      [onClick],
    );

    return (
      <div
        data-cy={itemId}
        onClick={() => _onClick(visibility)}
        onKeyDown={(ev) => {
          ev.code === 'Enter' && _onClick(visibility);
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
          <div style={{ backgroundColor: isVisible ? 'transparent' : 'gray' }}>
            visible: {JSON.stringify(isVisible)}
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
  },
);

export default App;
