'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import * as React from 'react';

import { ScrollMenu, useScrollMenu } from '@/components/ui/scroll-menu';
import { cn } from '@/lib/utils';

/**
 * Netflix-style media rail: edge fade, full-height overlay arrows on hover.
 * Children are your cards — each needs a unique `itemId` prop.
 */
function MediaRow({
  className,
  scrollContainerClassName,
  children,
  ...props
}: Omit<React.ComponentProps<typeof ScrollMenu>, 'hideArrows'>) {
  return (
    <ScrollMenu
      hideArrows
      Header={<MediaRowArrows />}
      className={cn('group/media-row max-w-full', className)}
      scrollContainerClassName={cn(
        'gap-4 py-1',
        '[mask-image:linear-gradient(to_right,transparent,black_2.5rem,black_calc(100%-2.5rem),transparent)]',
        scrollContainerClassName,
      )}
      {...props}
    >
      {children}
    </ScrollMenu>
  );
}

/** Rendered as the menu Header so it sits inside VisibilityContext. */
function MediaRowArrows() {
  const api = useScrollMenu();
  const atStart = api.useLeftArrowVisible();
  const atEnd = api.useRightArrowVisible();

  return (
    <>
      <MediaRowArrow
        side="left"
        hidden={atStart}
        onClick={() => api.scrollPrev()}
      >
        <ChevronLeft className="size-6" />
      </MediaRowArrow>
      <MediaRowArrow
        side="right"
        hidden={atEnd}
        onClick={() => api.scrollNext()}
      >
        <ChevronRight className="size-6" />
      </MediaRowArrow>
    </>
  );
}

function MediaRowArrow({
  side,
  hidden,
  onClick,
  children,
}: {
  side: 'left' | 'right';
  hidden: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={side === 'left' ? 'Scroll left' : 'Scroll right'}
      aria-hidden={hidden}
      tabIndex={hidden ? -1 : 0}
      onClick={onClick}
      className={cn(
        'absolute inset-y-0 z-10 flex w-10 items-center justify-center',
        side === 'left' ? 'left-0' : 'right-0',
        'text-foreground opacity-0 transition-opacity',
        'from-background/80 to-transparent',
        side === 'left' ? 'bg-gradient-to-r' : 'bg-gradient-to-l',
        'focus-visible:ring-ring focus-visible:opacity-100 focus-visible:ring-2 focus-visible:outline-none',
        !hidden && 'group-hover/media-row:opacity-100',
        hidden && 'pointer-events-none',
      )}
    >
      {children}
    </button>
  );
}

export { MediaRow };
