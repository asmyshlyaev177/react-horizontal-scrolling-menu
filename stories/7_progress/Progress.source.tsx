import React from 'react';
import styled from 'styled-jss';
import { useIntersectionObserver } from 'usehooks-ts';

import {
  ScrollMenu,
  VisibilityContext,
  type publicApiType,
} from 'react-horizontal-scrolling-menu';

import 'react-horizontal-scrolling-menu/dist/styles.css';

const OnScreenContext = React.createContext(true);

export function Progress() {
  // NOTE: to show/hide arrows only when main component is on screen and visible
  const { isIntersecting: isVisible, ref } = useIntersectionObserver({
    threshold: 1,
  });

  const [items] = React.useState(() => getItems(30));
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

  return (
    <div ref={ref}>
      <NoScrollbar>
        <OnScreenContext.Provider value={isVisible}>
          <ScrollMenu
            LeftArrow={LeftArrow}
            RightArrow={RightArrow}
            onWheel={onWheel}
            Footer={Footer}
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
        </OnScreenContext.Provider>
      </NoScrollbar>
    </div>
  );
}

const Footer = () => {
  const visibility = React.useContext<publicApiType>(VisibilityContext);
  const { items } = visibility;
  const [visible, setVisible] = React.useState<[string, { index: string }][]>(
    [],
  );

  // Need to update this component
  // listening to 'onUpdate' event with some debounce
  React.useEffect(() => {
    if (items) {
      let timer: NodeJS.Timeout;
      const cb = () => {
        clearTimeout(timer);
        timer = setTimeout(
          () => requestAnimationFrame(() => setVisible(items.getVisible())),
          200,
        );
      };
      items.subscribe('onUpdate', cb);

      return () => {
        clearTimeout(timer);
        items.unsubscribe('onUpdate', cb);
      };
    }
  }, [items]);

  if (!visible.length) {
    return null;
  }

  const total = items?.size;
  const visibleItemsLen = visible.length;
  const totalPages = Math.ceil(total / visibleItemsLen);
  const lastVisibleInd = +visible.slice(-1)[0][1].index;
  const currentPage = Math.ceil(lastVisibleInd / visibleItemsLen);
  const pages = Array(totalPages)
    .fill(1)
    .map((_, ind) => ind + 1);
  const itemsLeft = (currentPage - 1) * visibleItemsLen;
  const itemsRight = total - visibleItemsLen * currentPage;

  const scrollToPage = (page: number) => {
    const itemInd = page * visibleItemsLen - 1;
    visibility.scrollToItem(visibility.getItemByIndex(itemInd));
  };

  return (
    <>
      <FooterContainer>
        {pages.map((page) => (
          <button
            key={page}
            data-testid={`page-${page}`}
            onClick={() => scrollToPage(page)}
            onKeyDown={(ev) => {
              if (ev.code === 'Space') {
                scrollToPage(page);
              }
            }}
            className={`page-btn ${page === currentPage ? 'active' : ''}`}
          >
            {page}
          </button>
        ))}
      </FooterContainer>
      <FooterContainer>
        <div>
          <div>
            Items on the left: <span data-testid="items-left">{itemsLeft}</span>
          </div>
          <div>
            Items on the right:{' '}
            <span data-testid="items-right">{itemsRight}</span>
          </div>
        </div>
      </FooterContainer>
    </>
  );
};

const FooterContainer = styled('div')({
  '&': {
    display: 'flex',
    justifyContent: 'center',
    gap: '5px',
    margin: '10px',
  },
  '& button.active': {
    color: 'red',
  },
});

export default Progress;

const NoScrollbar = styled('div')({
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
  const isFirstItemVisible = visibility.useIsVisible('first', true);

  const isOnScreen = React.useContext(OnScreenContext);
  const [disabled, setDisabled] = React.useState(isFirstItemVisible);
  React.useEffect(() => {
    if (isOnScreen) {
      setDisabled(isFirstItemVisible);
    }
  }, [isOnScreen, isFirstItemVisible]);

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
  const isLastItemVisible = visibility.useIsVisible('last', false);

  const isOnScreen = React.useContext(OnScreenContext);
  const [disabled, setDisabled] = React.useState(isLastItemVisible);
  React.useEffect(() => {
    if (isOnScreen) {
      setDisabled(isLastItemVisible);
    }
  }, [isOnScreen, isLastItemVisible]);

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

const getItems = (count: number = 10) =>
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
