import React from 'react';

import throttle from 'lodash/throttle';

// NOTE: prevent scrolling on main page
import useHideBodyScroll from '../helpers/useHideBodyScroll';

// NOTE drag with mouse
import useDrag from '../helpers/useDrag';

import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

const isTest = process?.env?.NEXT_PUBLIC_IS_TEST;

type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

const elemPrefix = 'test';
const getId = (index: number) => `${elemPrefix}${index}`;

const getItems = () =>
  Array(20)
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

function App() {
  const [items, setItems] = React.useState(getItems);
  const [selected, setSelected] = React.useState<string[]>([]);
  const [position, setPosition] = React.useState(0);

  // React.useEffect(() => {
  //   if (items.length < 25) {
  //     setTimeout(() => {
  //       const newItems = items.concat(
  //         Array(5)
  //           .fill(0)
  //           .map((_, ind) => ({ id: getId(items.length + ind) }))
  //       );
  //       console.log('push new items');
  //       setItems(newItems);
  //     }, 3000);
  //   }
  // }, [items]);

  const isItemSelected = (id: string): boolean =>
    !!selected.find((el) => el === id);

  const { dragStart, dragStop, dragMove, dragging } = useDrag();

  const handleDrag =
    ({ scrollContainer }: scrollVisibilityApiType) =>
    (ev: React.MouseEvent) =>
      dragMove(ev, (newPos) => {
        if (scrollContainer.current) {
          const currentScroll = scrollContainer.current.scrollLeft;
          scrollContainer.current.scrollLeft = currentScroll + newPos;
        }
      });

  const handleClick =
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
        scrollToItem(
          getItemById(itemId)?.entry?.target,
          'smooth',
          'center',
          'nearest'
        );
      }
    };

  const onInit = React.useCallback(
    ({ scrollContainer }: scrollVisibilityApiType) => {
      if (scrollContainer.current) {
        scrollContainer.current.scrollLeft = position;
      }
    },
    [position]
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const savePosition = React.useCallback(
    throttle(
      ({ scrollContainer }: scrollVisibilityApiType) =>
        !!scrollContainer.current &&
        setPosition(scrollContainer.current.scrollLeft),
      500
    ),
    []
  );

  const { hideScroll, showScroll } = useHideBodyScroll();

  return (
    <div className="example" style={{ height: '200vh', paddingTop: '200px' }}>
      <div onMouseEnter={hideScroll} onMouseLeave={showScroll}>
        <div onMouseLeave={dragStop}>
          <ScrollMenu
            LeftArrow={LeftArrow}
            RightArrow={RightArrow}
            onInit={onInit}
            onScroll={savePosition}
            onWheel={onWheel}
            onMouseDown={() => (ev) => dragStart(ev)}
            onMouseUp={() => dragStop}
            onMouseMove={handleDrag}
          >
            {items.map(({ id }) => (
              <Card
                title={id}
                itemId={id} // NOTE: itemId is required for track items
                key={id}
                onClick={handleClick(id)}
                selected={isItemSelected(id)}
              />
            ))}
          </ScrollMenu>
        </div>
      </div>
    </div>
  );
}

function LeftArrow() {
  const { isFirstItemVisible, scrollPrev, visibleItemsWithoutSeparators } =
    React.useContext(VisibilityContext);

  const [disabled, setDisabled] = React.useState(
    !visibleItemsWithoutSeparators.length && isFirstItemVisible
  );
  React.useEffect(() => {
    // NOTE: detect if whole component visible
    if (visibleItemsWithoutSeparators.length) {
      setDisabled(isFirstItemVisible);
    }
  }, [isFirstItemVisible, visibleItemsWithoutSeparators]);

  return (
    <Arrow
      disabled={disabled}
      onClick={() => scrollPrev(isTest ? 'auto' : 'smooth')}
    >
      Left
    </Arrow>
  );
}

function RightArrow() {
  const { isLastItemVisible, scrollNext, visibleItemsWithoutSeparators } =
    React.useContext(VisibilityContext);

  const [disabled, setDisabled] = React.useState(
    !visibleItemsWithoutSeparators.length && isLastItemVisible
  );
  React.useEffect(() => {
    if (visibleItemsWithoutSeparators.length) {
      setDisabled(isLastItemVisible);
    }
  }, [isLastItemVisible, visibleItemsWithoutSeparators]);

  return (
    <Arrow
      disabled={disabled}
      onClick={() => scrollNext(isTest ? 'auto' : 'smooth')}
    >
      Right
    </Arrow>
  );
}

function Arrow({
  children,
  disabled,
  onClick,
}: {
  children: React.ReactNode;
  disabled: boolean;
  onClick: VoidFunction;
}) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
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

  const visible = visibility.isItemVisible(itemId);

  return (
    <div
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
    >
      <div className="card">
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

// TODO: nextjs complains about useLayoutEffect
const Wrapper = () => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return mounted ? <App /> : null;
};

export default Wrapper;
