import React from 'react';

import throttle from 'lodash/throttle';
import Styler from 'stylefire';
import { animate } from 'popmotion/dist/popmotion';

// NOTE: prevent scrolling on main page
import usePreventBodyScroll from '../helpers/usePreventBodyScroll';

// NOTE drag with mouse
import useDrag from '../helpers/useDrag';

// NOTE hide scrollbar in _app.js

import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

const isTest = process?.env?.NEXT_PUBLIC_IS_TEST;

type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

const elemPrefix = 'test';
const getId = (index: number) => `${elemPrefix}${index}`;

const getItems = () =>
  Array(10)
    .fill(0)
    .map((_, ind) => ({ id: getId(ind) }));

const onWheel = (
  apiObj: scrollVisibilityApiType,
  ev: React.WheelEvent
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
  } else if (ev.deltaY > 0) {
    apiObj.scrollPrev();
  }
};

// eslint-disable-next-line radar/cognitive-complexity
function App() {
  const [items, setItems] = React.useState(getItems);
  const [selected, setSelected] = React.useState<string[]>([]);
  const [position, setPosition] = React.useState(0);
  const [duration, setDuration] = React.useState(500);
  const [ease, setEase] = React.useState('noEasing');
  const [customAnimation, setCustomAnimation] = React.useState(false);

  const isItemSelected = (id: string): boolean =>
    !!selected.find((el) => el === id);

  const { dragStart, dragStop, dragMove, dragging } = useDrag();

  const handleDrag =
    ({ scrollContainer }: scrollVisibilityApiType) =>
    (ev: React.MouseEvent) =>
      dragMove(ev, (posDiff) => {
        if (scrollContainer.current) {
          scrollContainer.current.scrollLeft += posDiff;
        }
      });

  const handleItemClick =
    (itemId: string) =>
    ({ getItemById, scrollToItem }: scrollVisibilityApiType) => {
      if (dragging) {
        return false;
      }
      const itemSelected = isItemSelected(itemId);

      setSelected((currentSelected: string[]) =>
        itemSelected
          ? currentSelected.filter((el) => el !== itemId)
          : currentSelected.concat(itemId)
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
    [position]
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const savePosition = React.useCallback(
    throttle(({ scrollContainer }: scrollVisibilityApiType) => {
      !!scrollContainer.current &&
        setPosition(scrollContainer.current.scrollLeft);
    }, 500),
    []
  );

  const { disableScroll, enableScroll } = usePreventBodyScroll();

  const handleRemoveLast = React.useCallback(() => {
    setItems((prev) => prev.slice(0, prev.length - 1));
  }, []);

  return (
    <div>
      <div className="example" style={{ height: '200vh', paddingTop: '200px' }}>
        <div onMouseEnter={disableScroll} onMouseLeave={enableScroll}>
          <div onMouseLeave={dragStop}>
            <ScrollMenu
              // ARROWS WITH ADDITIONAL CONTENT
              // Arrows={Arrows}
              // <>
              //   <LeftArrow />
              //   <RightArrow />
              // </>
              // }
              // STANDART ARROWS
              Header={<div>Header</div>}
              Footer={() => <div>Footer</div>}
              LeftArrow={LeftArrow}
              RightArrow={RightArrow}
              onInit={restorePosition}
              onScroll={savePosition}
              onWheel={onWheel}
              onMouseDown={() => dragStart}
              onMouseUp={() => dragStop}
              onMouseMove={handleDrag}
              transitionDuration={duration}
              transitionEase={easingFunctions[ease]}
              transitionBehavior={customAnimation ? scrollBehavior : undefined}
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
                  onChange={(ev) => setEase(ev.target.value)}
                >
                  {Object.entries(easingFunctions).map(([name, fn]) => (
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

            <button onClick={handleRemoveLast}>Remove last</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Arrows() {
  return (
    <div className="arrows-container">
      <div className="content">Additional content</div>
      <div className="arrows">
        <LeftArrow />
        <RightArrow />
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
      onClick={() => scrollPrev(isTest ? 'auto' : undefined)}
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
      onClick={() => scrollNext(isTest ? 'auto' : undefined)}
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
  className?: String;
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
  disabled?: boolean;
  onClick: Function;
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
      onKeyDown={(ev) => {
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

const Wrapper = () => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return mounted ? <App /> : null;
};

// eslint-disable-next-line react/prop-types
export const OptionsWrapper = ({ children }) => (
  <div style={{ marginTop: '10px', display: 'flex', columnGap: '10px' }}>
    {children}
  </div>
);

// eslint-disable-next-line react/prop-types
export const OptionItem = ({ children, label }) => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <label>{label}</label>
    {children}
  </div>
);

const scrollBehavior = (instructions) => {
  const [{ el, left }] = instructions;
  const styler = Styler(el);

  animate({
    from: el.scrollLeft,
    to: left,
    type: 'spring',
    onUpdate: (left) => styler.set('scrollLeft', left),
  });
};

const easingFunctions = {
  noEasing: undefined,
  // no easing, no acceleration
  linear: (t) => t,
  // accelerating from zero velocity
  easeInQuad: (t) => t * t,
  // decelerating to zero velocity
  easeOutQuad: (t) => t * (2 - t),
  // acceleration until halfway, then deceleration
  easeInOutQuad: (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t),
  // accelerating from zero velocity
  easeInCubic: (t) => t * t * t,
  // decelerating to zero velocity
  easeOutCubic: (t) => --t * t * t + 1,
  // acceleration until halfway, then deceleration
  easeInOutCubic: (t) =>
    t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
  // accelerating from zero velocity
  easeInQuart: (t) => t * t * t * t,
  // decelerating to zero velocity
  easeOutQuart: (t) => 1 - --t * t * t * t,
  // acceleration until halfway, then deceleration
  easeInOutQuart: (t) =>
    t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t,
  // accelerating from zero velocity
  easeInQuint: (t) => t * t * t * t * t,
  // decelerating to zero velocity
  easeOutQuint: (t) => 1 + --t * t * t * t * t,
  // acceleration until halfway, then deceleration
  easeInOutQuint: (t) =>
    t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t,
  // Source https://gist.github.com/gre/1650294#file-easing-js
};

export default Wrapper;
