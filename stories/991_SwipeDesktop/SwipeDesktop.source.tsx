import React from 'react';
import styled from 'styled-jss';

import {
  ScrollMenu,
  VisibilityContext,
  type publicApiType,
} from 'react-horizontal-scrolling-menu';

import 'react-horizontal-scrolling-menu/dist/styles.css';

export function SwipeDesktop() {
  const [items] = React.useState(() => getItems());
  const [selected, setSelected] = React.useState<string[]>([]);

  const isItemSelected = (id: string): boolean =>
    !!selected.find((el) => el === id);

  const handleItemClick = (itemId: string) => {
    const itemSelected = isItemSelected(itemId);

    setSelected((currentSelected: string[]) =>
      itemSelected
        ? currentSelected.filter((el) => el !== itemId)
        : currentSelected.concat(itemId),
    );
  };

  const { onMouseDown, onMouseMove, onMouseUp } = useSwipe();

  const ref = React.useRef<publicApiType>(null);

  // NOTE: that ugly hack needed cause React v18 changed how it handle events
  React.useEffect(() => {
    const onTouchMove = (ev: TouchEvent) => {
      ev.preventDefault();
    };
    const node = ref.current.scrollContainer.current;
    node?.addEventListener('touchmove', onTouchMove, { passive: false });

    return () => node?.removeEventListener('touchmove', onTouchMove);
  }, [ref]);

  return (
    <NoScrollbar>
      <ScrollMenu
        LeftArrow={LeftArrow}
        RightArrow={RightArrow}
        onWheel={onWheel}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        apiRef={ref}
      >
        {items.map(({ id }) => (
          <Card
            title={id}
            itemId={id} // NOTE: itemId is required for track items
            key={id}
            onClick={() => handleItemClick(id)}
            selected={isItemSelected(id)}
          />
        ))}
      </ScrollMenu>
    </NoScrollbar>
  );
}

export default SwipeDesktop;

export const useSwipe = () => {
  const pos = React.useRef({ start: { x: 0, y: 0 }, end: { x: 0, y: 0 } });

  // the required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 50;

  const onMouseDown = () => (ev: React.MouseEvent) => {
    pos.current.start = { x: ev.clientX, y: ev.clientY };
  };

  const onMouseMove = () => (ev: React.MouseEvent) => {
    pos.current.end = { x: ev.clientX, y: ev.clientY };
  };

  const onMouseUp = (apiObj: publicApiType) => () => {
    // disable it for native touch screen devices
    // if ('ontouchstart' in window) { return false }

    const horDiff = pos.current.end.x - pos.current.start.x;
    // const vertDiff = pos.current.end.y - pos.current.start.y;
    const toLeft = horDiff < 0 && Math.abs(horDiff) > minSwipeDistance;
    const toRight = horDiff > 0 && Math.abs(horDiff) > minSwipeDistance;

    // for vertical menu
    // const toTop =  vertDiff < 0 && Math.abs(vertDiff) > minSwipeDistance;
    // const toBottom = vertDiff > 0 && Math.abs(vertDiff) > minSwipeDistance;

    if (toLeft) {
      apiObj.scrollNext();
    }
    if (toRight) {
      apiObj.scrollPrev();
    }
  };

  return { onMouseDown, onMouseMove, onMouseUp };
};

const NoScrollbar = styled('div')({
  '&': {
    position: 'relative',
  },
  '& .react-horizontal-scrolling-menu--scroll-container::-webkit-scrollbar': {
    display: 'none',
  },
  '& .react-horizontal-scrolling-menu--scroll-container': {
    scrollbarWidth: 'none',
    '-ms-overflow-style': 'none',
  },
});

function LeftArrow() {
  const visibility = React.useContext<publicApiType>(VisibilityContext);

  const disabled = visibility.useLeftArrowVisible();

  return (
    <Arrow
      disabled={disabled}
      onClick={() => visibility.scrollPrev()}
      testId="left-arrow"
    >
      Left
    </Arrow>
  );
}

function RightArrow() {
  const visibility = React.useContext<publicApiType>(VisibilityContext);

  const disabled = visibility.useRightArrowVisible();

  return (
    <Arrow
      disabled={disabled}
      onClick={() => visibility.scrollNext()}
      testId="right-arrow"
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
  testId,
}: {
  children: React.ReactNode;
  disabled: boolean;
  onClick: VoidFunction;
  className?: string;
  testId: string;
}) {
  return (
    <ArrowButton
      disabled={disabled}
      onClick={onClick}
      className={'arrow' + `-${className}`}
      data-testid={testId}
    >
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
  const visibility = React.useContext<publicApiType>(VisibilityContext);
  const isVisible = visibility.useIsVisible(itemId, true);

  return (
    <CardBody
      data-cy={itemId}
      onClick={() => onClick(visibility)}
      onKeyDown={(ev: React.KeyboardEvent) => {
        ev.code === 'Enter' && onClick(visibility);
      }}
      data-testid="card"
      role="button"
      tabIndex={0}
      className="card"
      visible={isVisible}
      selected={selected}
    >
      <div className="header">
        <div>{title}</div>
        <div className="visible">visible: {JSON.stringify(isVisible)}</div>
        <div className="selected">selected: {JSON.stringify(!!selected)}</div>
      </div>
      <div className="background" />
    </CardBody>
  );
}
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

const getItems = () =>
  Array(20)
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
