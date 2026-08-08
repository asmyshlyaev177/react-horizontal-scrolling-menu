import 'react-horizontal-scrolling-menu/dist/styles.css';

import styled from '@emotion/styled';
import React from 'react';
import {
  type publicApiType,
  ScrollMenu,
  VisibilityContext,
} from 'react-horizontal-scrolling-menu';

/**
 * What scroll-into-view-if-needed hands to a custom `transitionBehavior`:
 * one action per scrollable ancestor that has to move — here always just the
 * scroll container, because the menu passes it as `boundary`.
 */
type ScrollAction = { el: Element; top: number; left: number };

const durations = [500, 1200, 2500];
const defaultDuration = 1200;

export function CustomTransitionExample() {
  const [items] = React.useState(() => getItems());
  const [selected, setSelected] = React.useState<string[]>([]);
  const [duration, setDuration] = React.useState(defaultDuration);

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

  // Instead of letting the browser scroll, receive the computed target
  // positions and drive `scrollLeft` there manually — any curve or animation
  // library works from here.
  const transition = (instructions: ScrollAction[]) => {
    instructions.forEach(({ el, left }) => animateScroll(el, left, duration));
  };

  return (
    <div>
      <DurationSelect value={duration} onChange={setDuration} />
      {/* NOTE: transitionDuration and transitionBehavior only take effect
          with noPolyfill={false} — the default noPolyfill={true} scrolls with
          native scrollIntoView and ignores both. */}
      <ScrollMenu
        LeftArrow={LeftArrow}
        RightArrow={RightArrow}
        onWheel={onWheel}
        noPolyfill={false}
        transitionDuration={duration}
        // The typings describe the options-object form, but the menu passes
        // this value straight to scroll-into-view-if-needed as its `behavior`
        // callback — hence the cast.
        transitionBehavior={transition as unknown as ScrollBehavior}
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
    </div>
  );
}

export default CustomTransitionExample;

const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

/**
 * A second arrow click can land mid-animation; remembering the pending frame
 * per element lets the new animation cancel the old one instead of both
 * fighting over `scrollLeft`.
 */
const pendingFrames = new WeakMap<Element, number>();

function animateScroll(el: Element, target: number, duration: number) {
  const prevFrame = pendingFrames.get(el);
  if (prevFrame !== undefined) {
    cancelAnimationFrame(prevFrame);
  }

  const from = el.scrollLeft;
  const distance = target - from;
  const startTime = performance.now();

  const step = (now: number) => {
    const progress = Math.min((now - startTime) / duration, 1);
    el.scrollLeft = from + distance * easeInOutCubic(progress);

    if (progress < 1) {
      pendingFrames.set(el, requestAnimationFrame(step));
    } else {
      pendingFrames.delete(el);
    }
  };

  pendingFrames.set(el, requestAnimationFrame(step));
}

function DurationSelect({
  value,
  onChange,
}: {
  value: number;
  onChange: (val: number) => void;
}) {
  return (
    <SelectWrapper>
      <label htmlFor="duration">Duration</label>
      <select
        id="duration"
        data-testid="duration-select"
        value={value}
        onChange={(ev: React.ChangeEvent<HTMLSelectElement>) =>
          onChange(Number(ev.target.value))
        }
      >
        {durations.map((ms) => (
          <option value={ms} key={ms}>
            {ms} ms
          </option>
        ))}
      </select>
    </SelectWrapper>
  );
}
const SelectWrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  margin: '16px',
  '& *:first-child': {
    marginRight: '4px',
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
const ArrowButton = styled('button')((props) => ({
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  marginBottom: '2px',
  opacity: props.disabled ? '0' : '1',
  userSelect: 'none',
  borderRadius: '6px',
  borderWidth: '1px',
}));

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
const CardBody = styled('div')<{ selected?: boolean; visible?: boolean }>(
  (props) => ({
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
      backgroundColor: props.visible ? 'transparent' : 'gray',
    },

    '& .background': {
      backgroundColor: props.selected ? 'green' : 'bisque',
      height: '200px',
    },
  }),
);

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
