/* eslint-disable max-lines-per-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import throttle from 'lodash/throttle';
import { animate } from 'popmotion';
import React from 'react';
// NOTE: prevent scrolling on main page
import {
  ScrollMenu,
  VisibilityContext,
  publicApiType,
} from 'react-horizontal-scrolling-menu';
import Styler from 'stylefire';

import { DragManager } from './helpers/DragManager';
import usePreventBodyScroll from './helpers/usePreventBodyScroll';

// NOTE drag with mouse

// swipe for mobile
// import { useSwipe } from './helpers/useSwipe';

import 'react-horizontal-scrolling-menu/dist/styles.css';

type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

const elemPrefix = 'test';
const getId = (index: number) => `${elemPrefix}${index}`;

const ITEMS = 10;

const getItems = (count: number, start: number = 0) =>
  Array(count)
    .fill(0)
    .map((_, ind) => ({ id: getId(start + ind) }));

const App = () => {
  const [items] = React.useState(() => getItems(ITEMS));

  const [selected, setSelected] = React.useState<string[]>([]);
  const position = React.useRef(0);
  const [duration, setDuration] = React.useState(500);
  const [ease, setEase] =
    React.useState<keyof typeof easingFunctions>('noEasing');
  const [customAnimation, setCustomAnimation] = React.useState(false);

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
              transitionDuration={duration}
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              transitionBehavior={
                (customAnimation && scrollBehavior(ease, duration)) || undefined
              }
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

            <OptionsWrapper>
              <OptionItem label="Duration">
                <input
                  value={duration}
                  onChange={(ev) => setDuration(+ev.target.value)}
                />
              </OptionItem>
              <OptionItem label="Ease">
                <select
                  name="ease"
                  id="ease"
                  value={ease}
                  onChange={(ev: React.ChangeEvent<HTMLSelectElement>) =>
                    setEase(ev.target.value as keyof typeof easingFunctions)
                  }
                >
                  {Object.keys(easingFunctions).map((name: string) => (
                    <option value={name} key={name}>
                      {name}
                    </option>
                  ))}
                </select>
              </OptionItem>
              <OptionItem label="Custom animation">
                <input
                  checked={customAnimation}
                  onChange={(ev) => setCustomAnimation(ev.target.checked)}
                  type="checkbox"
                  style={{ width: '20px', height: '20px' }}
                />
              </OptionItem>
            </OptionsWrapper>
          </div>
        </div>
      </div>
    </div>
  );
};

const OptionsWrapper = ({ children }: { children: React.ReactNode }) => (
  <div style={{ marginTop: '10px', display: 'flex', columnGap: '10px' }}>
    {children}
  </div>
);

const OptionItem = ({
  children,
  label,
}: {
  children: React.ReactNode;
  label: string;
}) => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <label>{label}</label>
    {children}
  </div>
);

const scrollBehavior =
  (ease: keyof typeof easingFunctions, duration: number) =>
  (instructions: { el: HTMLElement; left: number }[]) => {
    const [{ el, left }] = instructions;
    const styler = Styler(el);

    animate({
      from: el.scrollLeft,
      to: left,
      ease: easingFunctions[ease],
      duration,
      onUpdate: (left) => styler.set('scrollLeft', left),
    });
  };

const easingFunctions = {
  noEasing: undefined as unknown as (t: number) => number,
  // no easing, no acceleration
  linear: (t: number) => t,
  // accelerating from zero velocity
  easeInQuad: (t: number) => t * t,
  // decelerating to zero velocity
  easeOutQuad: (t: number) => t * (2 - t),
  // acceleration until halfway, then deceleration
  easeInOutQuad: (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t),
  // accelerating from zero velocity
  easeInCubic: (t: number) => t * t * t,
  // decelerating to zero velocity
  easeOutCubic: (t: number) => --t * t * t + 1,
  // acceleration until halfway, then deceleration
  easeInOutCubic: (t: number) =>
    t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
  // accelerating from zero velocity
  easeInQuart: (t: number) => t * t * t * t,
  // decelerating to zero velocity
  easeOutQuart: (t: number) => 1 - --t * t * t * t,
  // acceleration until halfway, then deceleration
  easeInOutQuart: (t: number) =>
    t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t,
  // accelerating from zero velocity
  easeInQuint: (t: number) => t * t * t * t * t,
  // decelerating to zero velocity
  easeOutQuint: (t: number) => 1 + --t * t * t * t * t,
  // acceleration until halfway, then deceleration
  easeInOutQuint: (t: number) =>
    t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t,
  // Source https://gist.github.com/gre/1650294#file-easing-js
};

const LeftArrow = React.memo(() => {
  const visibility = React.useContext<publicApiType>(VisibilityContext);
  const isFirstItemVisible = visibility.useIsVisible('first', true);

  const [disabled, setDisabled] = React.useState(isFirstItemVisible);
  React.useEffect(() => {
    if (visibility.menuVisible.current) {
      setDisabled(isFirstItemVisible);
    }
  }, [isFirstItemVisible, visibility.menuVisible]);

  return (
    <Arrow
      disabled={disabled}
      onClick={() => visibility.scrollPrev()}
      className="left"
    >
      Left
    </Arrow>
  );
});

const RightArrow = React.memo(() => {
  const visibility = React.useContext<publicApiType>(VisibilityContext);
  const isLastItemVisible = visibility.useIsVisible('last', false);

  const [disabled, setDisabled] = React.useState(isLastItemVisible);
  React.useEffect(() => {
    if (visibility.menuVisible) {
      setDisabled(isLastItemVisible);
    }
  }, [isLastItemVisible, visibility.menuVisible]);

  return (
    <Arrow
      disabled={disabled}
      onClick={() => visibility.scrollNext()}
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
        data-visible={isVisible}
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
