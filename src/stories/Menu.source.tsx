import React from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

export default function SimpleExample() {
  const [items] = React.useState(getItems);

  return (
    <div
      style={{
        maxWidth: '650px',
        maxHeight: '400px',
      }}
    >
      <ScrollMenu
        LeftArrow={() => '<'}
        RightArrow={() => '>'}
        onWheel={onWheel}
      >
        {items.map(({ id }) => (
          <Card
            title={id}
            itemId={id} // NOTE: itemId is required for track items
            key={id}
            onClick={() => false}
            selected={false}
          />
        ))}
      </ScrollMenu>
    </div>
  );
}

type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

const elemPrefix = 'test';

const getId = (index: number) => `${elemPrefix}${index}`;

const getItems = () =>
  Array(10)
    .fill(0)
    .map((_, ind) => ({ id: getId(ind) }));

function onWheel(apiObj: scrollVisibilityApiType, ev: React.WheelEvent): void {
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
