'use client';

import { Check } from 'lucide-react';
import * as React from 'react';

import { ScrollMenu } from '@/components/ui/scroll-menu';
import { cn } from '@/lib/utils';

interface ChipOption {
  value: string;
  label: React.ReactNode;
  disabled?: boolean;
  /** Extra classes for this one chip. */
  className?: string;
}

/** Multi-select filter chips in a drag-to-scroll row. Controlled. */
function ChipBar({
  options,
  selected,
  onSelectedChange,
  className,
  chipClassName,
  ...props
}: Omit<React.ComponentProps<typeof ScrollMenu>, 'children'> & {
  options: ChipOption[];
  selected: string[];
  onSelectedChange: (selected: string[]) => void;
  /** Extra classes for every chip — sizing, typography, radius. */
  chipClassName?: string;
}) {
  const toggle = (value: string) =>
    onSelectedChange(
      selected.includes(value)
        ? selected.filter((v) => v !== value)
        : [...selected, value],
    );

  return (
    <ScrollMenu className={cn('max-w-full', className)} {...props}>
      {options.map((option) => (
        <Chip
          key={option.value}
          itemId={option.value}
          option={option}
          pressed={selected.includes(option.value)}
          onToggle={toggle}
          className={chipClassName}
        />
      ))}
    </ScrollMenu>
  );
}

function Chip({
  option,
  pressed,
  onToggle,
  className,
}: {
  /** Read by the menu to track visibility; same as option.value. */
  itemId: string;
  option: ChipOption;
  pressed: boolean;
  onToggle: (value: string) => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      aria-pressed={pressed}
      disabled={option.disabled}
      onClick={() => onToggle(option.value)}
      className={cn(
        'inline-flex h-8 shrink-0 items-center gap-1.5 whitespace-nowrap',
        'rounded-full border px-3 text-sm transition-colors',
        'hover:bg-accent hover:text-accent-foreground',
        'focus-visible:ring-ring focus-visible:ring-2 focus-visible:outline-none',
        'disabled:pointer-events-none disabled:opacity-50',
        pressed
          ? 'border-primary bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground'
          : 'border-input bg-background',
        className,
        option.className,
      )}
    >
      {pressed && <Check className="size-3.5" aria-hidden />}
      {option.label}
    </button>
  );
}

export { ChipBar, type ChipOption };
