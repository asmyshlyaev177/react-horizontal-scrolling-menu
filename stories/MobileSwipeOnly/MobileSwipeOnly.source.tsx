import React from 'react';
import {
  ScrollMenu,
  VisibilityContext,
  publicApiType,
} from 'react-horizontal-scrolling-menu';
import styled from 'styled-jss';

export function MobileSwipeOnly() {
  const [items] = React.useState(() => getItems());
  const [selected, setSelected] = React.useState<string[]>([]);

  const isItemSelected = (id: string): boolean =>
    !!selected.find((el) => el === id);

  const handleItemClick = (itemId: string) => {
    const itemSelected = isItemSelected(itemId);

    setSelected((currentSelected: string[]) =>
      itemSelected
        ? currentSelected.filter((el) => el !== itemId)
        : currentSelected.concat(itemId)
    );
  };

  const { onTouchEnd, onTouchMove, onTouchStart } = useSwipe();

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
        onTouchEnd={onTouchEnd}
        onTouchMove={onTouchMove}
        onTouchStart={onTouchStart}
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

export default MobileSwipeOnly;

export const useSwipe = () => {
  const [touchStart, setTouchStart] = React.useState(0);
  const [touchEnd, setTouchEnd] = React.useState(0);

  // the required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 20;

  const onTouchStart = () => (ev: React.TouchEvent) => {
    setTouchEnd(0);
    setTouchStart(ev.targetTouches[0].clientX);
  };

  const onTouchMove = () => (ev: React.TouchEvent) => {
    console.log({ ev });
    setTouchEnd(ev.targetTouches[0].clientX);
  };

  const onTouchEnd = (apiObj: publicApiType) => () => {
    if (!touchStart || !touchEnd) return false;
    const distance = touchStart - touchEnd;
    const isSwipe = Math.abs(distance) > minSwipeDistance;
    const isLeftSwipe = distance < minSwipeDistance;
    if (isSwipe) {
      if (isLeftSwipe) {
        apiObj.scrollPrev();
      } else {
        apiObj.scrollNext();
      }
    }
  };

  return { onTouchStart, onTouchEnd, onTouchMove };
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
  const { initComplete, isFirstItemVisible, scrollPrev } =
    React.useContext<publicApiType>(VisibilityContext);
  // NOTE initComplete is a hack for  prevent blinking on init
  // Can get visibility of item only after it's rendered

  return (
    <Arrow
      disabled={!initComplete || (initComplete && isFirstItemVisible)}
      onClick={() => scrollPrev()}
      testId="left-arrow"
    >
      Left
    </Arrow>
  );
}

function RightArrow() {
  const { initComplete, isLastItemVisible, scrollNext } =
    React.useContext<publicApiType>(VisibilityContext);

  return (
    <Arrow
      disabled={initComplete && isLastItemVisible}
      onClick={() => scrollNext()}
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
  className?: String;
  testId: String;
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
  disabled?: boolean;
  onClick: Function;
  selected: boolean;
  title: string;
  itemId: string;
}) {
  const visibility = React.useContext<publicApiType>(VisibilityContext);

  const visible =
    !visibility.initComplete ||
    (visibility.initComplete && visibility.isItemVisible(itemId));

  return (
    <CardBody
      data-cy={itemId}
      onClick={() => onClick(visibility)}
      onKeyDown={(ev) => {
        ev.code === 'Enter' && onClick(visibility);
      }}
      data-testid="card"
      role="button"
      tabIndex={0}
      className="card"
      visible={visible}
      selected={selected}
    >
      <div className="header">
        <div>{title}</div>
        <div className="visible">visible: {JSON.stringify(visible)}</div>
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
  Array(10)
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
