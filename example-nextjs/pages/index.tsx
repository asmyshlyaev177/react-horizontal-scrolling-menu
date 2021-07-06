import React from 'react';

import throttle from 'lodash/throttle';

// NOTE: prevent scrolling on main page
import useHideBodyScroll from './useHideBodyScroll';

import useDrag from './useDrag';

import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

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

  React.useEffect(() => {
    if (items.length < 25) {
      setTimeout(() => {
        const newItems = items.concat(
          Array(5)
            .fill(0)
            .map((_, ind) => ({ id: getId(items.length + ind) }))
        );
        console.log('push new items');
        setItems(newItems);
      }, 3000);
    }
  }, [items]);

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
    (id: string) =>
    ({ getItemById, scrollToItem }: scrollVisibilityApiType) => {
      if (dragging) {
        return false;
      }
      const itemSelected = isItemSelected(id);

      setSelected((currentSelected: string[]) =>
        itemSelected
          ? currentSelected.filter((el) => el !== id)
          : currentSelected.concat(id)
      );

      if (!itemSelected) {
        // NOTE: center item on select
        scrollToItem(
          getItemById(id)?.entry?.target,
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
        <ScrollMenu
          LeftArrow={LeftArrow}
          RightArrow={RightArrow}
          onInit={onInit}
          onScroll={savePosition}
          onWheel={onWheel}
          onMouseDown={() => (ev) => dragStart(ev)}
          onMouseUp={() => () => dragStop()}
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
  );
}

function LeftArrow() {
  const { isFirstItemVisible, scrollPrev } =
    React.useContext(VisibilityContext);

  return (
    <Arrow disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
      Left
    </Arrow>
  );
}

function RightArrow() {
  const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);

  return (
    <Arrow disabled={isLastItemVisible} onClick={() => scrollNext()}>
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
      onKeyDown={() => onClick(visibility)}
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

export default App;
