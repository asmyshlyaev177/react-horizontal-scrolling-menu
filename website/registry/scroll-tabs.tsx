'use client';

import * as React from 'react';

import { ScrollMenu, useScrollMenu } from '@/components/ui/scroll-menu';
import { cn } from '@/lib/utils';

interface ScrollTab {
  value: string;
  label: React.ReactNode;
  disabled?: boolean;
  /** Extra classes for this one trigger. */
  className?: string;
}

/**
 * Scrollable tab strip; the active tab centers itself on click and first
 * paint. Plain buttons with `aria-current`, not `role="tab"` — a tablist
 * demands roving focus and tabpanel wiring this row does not own.
 */
function ScrollTabs({
  tabs,
  value,
  onValueChange,
  className,
  tabClassName,
  ...props
}: Omit<React.ComponentProps<typeof ScrollMenu>, 'children' | 'onInit'> & {
  tabs: ScrollTab[];
  value: string;
  onValueChange: (value: string) => void;
  /** Extra classes for every trigger — sizing, typography, radius. */
  tabClassName?: string;
}) {
  return (
    <ScrollMenu
      className={cn('max-w-full', className)}
      onInit={(api) => {
        const active = api.getItemElementById(value);
        if (active) api.scrollToItem(active, 'auto', 'center');
      }}
      {...props}
    >
      {tabs.map((tab) => (
        <ScrollTabsTrigger
          key={tab.value}
          itemId={tab.value}
          tab={tab}
          active={tab.value === value}
          onSelect={onValueChange}
          className={tabClassName}
        />
      ))}
    </ScrollMenu>
  );
}

function ScrollTabsTrigger({
  tab,
  active,
  onSelect,
  className,
}: {
  /** Read by the menu to track visibility; same as tab.value. */
  itemId: string;
  tab: ScrollTab;
  active: boolean;
  onSelect: (value: string) => void;
  className?: string;
}) {
  const api = useScrollMenu();

  return (
    <button
      type="button"
      aria-current={active || undefined}
      disabled={tab.disabled}
      onClick={() => {
        onSelect(tab.value);
        const el = api.getItemElementById(tab.value);
        if (el) api.scrollToItem(el, 'smooth', 'center');
      }}
      className={cn(
        'inline-flex h-9 shrink-0 items-center justify-center whitespace-nowrap',
        'rounded-md px-3 text-sm font-medium transition-colors',
        'text-muted-foreground hover:text-foreground',
        'focus-visible:ring-ring focus-visible:ring-2 focus-visible:outline-none',
        'disabled:pointer-events-none disabled:opacity-50',
        active && 'bg-muted text-foreground',
        className,
        tab.className,
      )}
    >
      {tab.label}
    </button>
  );
}

export { type ScrollTab, ScrollTabs };
