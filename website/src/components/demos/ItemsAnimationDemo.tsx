import { useAutoAnimate } from '@formkit/auto-animate/react';
import * as React from 'react';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';

import { LeftArrow, RightArrow } from '../Arrows';

// auto-animate wants a ref to the items' direct parent; ScrollMenu exposes
// exactly that element as containerRef. The story backfills id gaps after
// removals — here a monotonic counter keeps ids unique the simple way.

const CHIP_COLORS = [
  { color: 'var(--demo-red)' },
  { color: 'var(--demo-amber)', darkText: true },
  { color: 'var(--demo-green)', darkText: true },
  { color: 'var(--demo-cyan)', darkText: true },
  { color: 'var(--demo-blue)' },
  { color: 'var(--demo-violet)' },
];

export function ItemsAnimationDemo() {
  const [parent] = useAutoAnimate();
  const nextId = React.useRef(6);
  const [items, setItems] = React.useState(() =>
    Array.from({ length: 6 }, (_, index) => index),
  );

  const addItem = () => {
    const id = nextId.current++;
    setItems((current) => [...current, id]);
  };

  const removeItem = () => setItems((current) => current.slice(0, -1));

  const shuffle = () =>
    setItems((current) => {
      const shuffled = [...current];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    });

  return (
    <div className="example-demo">
      <ScrollMenu
        containerRef={parent}
        LeftArrow={LeftArrow}
        RightArrow={RightArrow}
      >
        {items.map((id) => (
          <ChipItem itemId={`chip-${id}`} key={`chip-${id}`} id={id} />
        ))}
      </ScrollMenu>
      <div className="chips-controls">
        <button type="button" className="btn btn-ghost" onClick={addItem}>
          Add item
        </button>
        <button type="button" className="btn btn-ghost" onClick={removeItem}>
          Remove item
        </button>
        <button type="button" className="btn btn-ghost" onClick={shuffle}>
          Shuffle
        </button>
      </div>
    </div>
  );
}

function ChipItem({ id }: { itemId: string; id: number }) {
  const { color, darkText } = CHIP_COLORS[id % CHIP_COLORS.length];
  return (
    <span
      className="chip"
      style={{
        background: color,
        color: darkText ? 'oklch(0.22 0.02 60)' : 'oklch(0.99 0.005 15)',
      }}
    >
      item {id + 1}
    </span>
  );
}
