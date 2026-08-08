import * as React from 'react';
import {
  type publicApiType,
  ScrollMenu,
} from 'react-horizontal-scrolling-menu';

import { chipPool, initialChips } from '../../lib/demo-data';
import { Close, Plus } from '../Icons';
import { useDragToScroll } from '../useDragToScroll';

interface Chip {
  id: string;
  color: string;
  darkText?: boolean;
}

const poolColors = [
  { color: 'var(--demo-red)' },
  { color: 'var(--demo-amber)', darkText: true },
  { color: 'var(--demo-green)', darkText: true },
  { color: 'var(--demo-cyan)', darkText: true },
  { color: 'var(--demo-blue)' },
  { color: 'var(--demo-violet)' },
];

// Filter chips managed from OUTSIDE the menu through apiRef: add a chip,
// then scroll to it once it has rendered.

export function ChipsDemo() {
  const { dragProps, dragManager } = useDragToScroll();
  const apiRef = React.useRef<publicApiType>(null);
  const lastAdded = React.useRef<string | null>(null);
  const [chips, setChips] = React.useState<Chip[]>(initialChips);
  const poolIndex = React.useRef(0);

  const addChip = () => {
    const available = chipPool.filter(
      (id) => !chips.some((chip) => chip.id === id),
    );
    const id = available[0];
    if (!id) return;
    lastAdded.current = id;
    setChips((current) => [
      ...current,
      { id, ...poolColors[poolIndex.current++ % poolColors.length] },
    ]);
  };

  React.useEffect(() => {
    const id = lastAdded.current;
    if (!id) return;
    const el = apiRef.current?.getItemElementById(id);
    if (el) apiRef.current?.scrollToItem(el, 'smooth', 'end');
    lastAdded.current = null;
  }, [chips]);

  return (
    <div className="gallery-demo">
      <ScrollMenu apiRef={apiRef} {...dragProps}>
        {chips.map((chip) => (
          <ChipItem
            itemId={chip.id}
            key={chip.id}
            chip={chip}
            onRemove={() => {
              // A drag released over the ✕ still fires its click.
              if (dragManager.dragging) return;
              setChips((current) => current.filter((c) => c.id !== chip.id));
            }}
          />
        ))}
      </ScrollMenu>
      <div className="chips-controls">
        <button type="button" className="btn btn-ghost" onClick={addChip}>
          <Plus /> Add filter
        </button>
      </div>
    </div>
  );
}

function ChipItem({
  chip,
  onRemove,
}: {
  itemId: string;
  chip: Chip;
  onRemove: () => void;
}) {
  return (
    <span
      className="chip"
      style={{
        background: chip.color,
        color: chip.darkText ? 'oklch(0.22 0.02 60)' : 'oklch(0.99 0.005 15)',
      }}
    >
      {chip.id}
      <button type="button" onClick={onRemove} aria-label={`Remove ${chip.id}`}>
        <Close />
      </button>
    </span>
  );
}
