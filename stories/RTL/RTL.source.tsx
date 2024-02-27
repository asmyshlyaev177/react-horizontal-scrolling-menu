import React from 'react';
import {
  ScrollMenu,
  VisibilityContext,
  type publicApiType,
} from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import styled from 'styled-jss';

export function RTL() {
  const [RTL, setRTL] = React.useState(true);
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

  const onWheelHandler = React.useCallback(
    (apiObj: publicApiType, ev: React.WheelEvent) => onWheel(apiObj, ev, RTL),
    [RTL],
  );

  return (
    <>
      <NoScrollbar>
        <ScrollMenu
          LeftArrow={RTL ? <RightArrow RTL={RTL} /> : <LeftArrow RTL={RTL} />}
          RightArrow={RTL ? <LeftArrow RTL={RTL} /> : <RightArrow RTL={RTL} />}
          onWheel={onWheelHandler}
          RTL={RTL}
          noPolyfill={true}
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

      <Checkbox label="RTL" value={RTL} onClick={setRTL} />
    </>
  );
}

export default RTL;

export const isFirefox =
  navigator?.userAgent?.toLowerCase?.()?.indexOf('firefox') > -1;

function LeftArrow({ RTL }: { RTL: boolean }) {
  const visibility = React.useContext<publicApiType>(VisibilityContext);
  const isFirstItemVisible = visibility.useIsVisible('first', true);

  return (
    <Arrow
      disabled={isFirstItemVisible}
      onClick={() =>
        visibility.scrollPrev('smooth', RTL && isFirefox ? 'start' : 'end')
      }
      testId={RTL ? 'right-arrow' : 'left-arrow'}
    >
      {RTL ? 'Right' : 'Left'}
    </Arrow>
  );
}

function RightArrow({ RTL }: { RTL: boolean }) {
  const visibility = React.useContext<publicApiType>(VisibilityContext);
  const isLastItemVisible = visibility.useIsVisible('last', false);

  return (
    <Arrow
      disabled={isLastItemVisible}
      onClick={() =>
        visibility.scrollNext('smooth', RTL && isFirefox ? 'end' : 'start')
      }
      testId={RTL ? 'left-arrow' : 'right-arrow'}
    >
      {RTL ? 'Left' : 'Right'}
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

const Checkbox = ({
  onClick,
  value,
  label,
}: {
  value: boolean;
  label: string;
  onClick: (val: boolean) => void;
}) => {
  return (
    <CheckboxWrapper>
      <BigCheckbox
        type="checkbox"
        id={label}
        onChange={(ev: React.ChangeEvent<HTMLInputElement>) =>
          onClick(ev?.target?.checked)
        }
        checked={value}
        defaultChecked={value}
      />
      <label htmlFor={label}>{label}</label>
    </CheckboxWrapper>
  );
};
const CheckboxWrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  margin: '16px',
  '& *:first-child': {
    marginRight: '4px',
  },
});
const BigCheckbox = styled('input')({
  height: '24px',
  width: '24px',
  cursor: 'pointer',
});

function Card({
  onClick,
  selected,
  title,
  itemId,
}: {
  onClick: (visibility: publicApiType) => void;
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

const NoScrollbar = styled('div')({
  '& .react-horizontal-scrolling-menu--scroll-container::-webkit-scrollbar': {
    display: 'none',
  },
  '& .react-horizontal-scrolling-menu--scroll-container': {
    scrollbarWidth: 'none',
    '-ms-overflow-style': 'none',
  },
});

const getId = (index: number) => `${'test'}${index}`;

const getItems = () =>
  Array(10)
    .fill(0)
    .map((_, ind) => ({ id: getId(ind) }));

function onWheel(
  apiObj: publicApiType,
  ev: React.WheelEvent,
  RTL: boolean,
): void {
  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

  if (isThouchpad) {
    ev.stopPropagation();
    return;
  }

  if (ev.deltaY < 0) {
    apiObj.scrollPrev('smooth', RTL && isFirefox ? 'start' : 'end');
  } else {
    apiObj.scrollNext('smooth', RTL && isFirefox ? 'end' : 'start');
  }
}
