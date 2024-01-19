import React from 'react';
import {
  ScrollMenu,
  VisibilityContext,
  publicApiType,
} from 'react-horizontal-scrolling-menu';
import styled from 'styled-jss';

export function OneItemScroll() {
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

  return (
    <NoScrollbar>
      <ScrollMenu
        LeftArrow={LeftArrow}
        RightArrow={RightArrow}
        onWheel={onWheel}
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

export default OneItemScroll;

function LeftArrow() {
  const { initComplete, isFirstItemVisible, scrollToItem, getPrevElement } =
    React.useContext<publicApiType>(VisibilityContext);

  // NOTE: Look here
  const onClick = () => scrollToItem(getPrevElement(), 'smooth', 'start');

  return (
    <Arrow
      disabled={!initComplete || (initComplete && isFirstItemVisible)}
      onClick={onClick}
      testId="left-arrow"
    >
      Left
    </Arrow>
  );
}

function RightArrow() {
  const { initComplete, isLastItemVisible, scrollToItem, getNextElement } =
    React.useContext<publicApiType>(VisibilityContext);

  // NOTE: Look here
  const onClick = () => scrollToItem(getNextElement(), 'smooth', 'end');

  return (
    <Arrow
      disabled={initComplete && isLastItemVisible}
      onClick={onClick}
      testId="right-arrow"
    >
      Right
    </Arrow>
  );
}

const NoScrollbar = styled('div')({
  '& .react-horizontal-scrolling-menu--scroll-container::-webkit-scrollbar': {
    display: 'none',
  },
  '& .react-horizontal-scrolling-menu--scroll-container': {
    scrollbarWidth: 'none',
    '-ms-overflow-style': 'none',
  },
});

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
  } else if (ev.deltaY > 0) {
    apiObj.scrollPrev();
  }
}
