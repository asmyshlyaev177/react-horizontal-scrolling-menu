'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import * as React from 'react';
import {
  type publicApiType,
  ScrollMenu as ScrollMenuPrimitive,
  VisibilityContext,
} from 'react-horizontal-scrolling-menu';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

/** Imperative menu API; only valid inside ScrollMenu children and arrows. */
function useScrollMenu(): publicApiType {
  return React.useContext(VisibilityContext);
}

type PrimitiveProps = React.ComponentProps<typeof ScrollMenuPrimitive>;

interface ScrollMenuProps extends Omit<
  PrimitiveProps,
  'LeftArrow' | 'RightArrow' | 'onMouseDown' | 'onMouseUp' | 'onMouseMove'
> {
  className?: string;
  hideArrows?: boolean;
}

/**
 * Horizontal scrolling row: edge-aware arrows, drag-to-scroll, hidden
 * scrollbar. Every direct child needs a unique `itemId` prop.
 * Docs: https://react-horizontal-scrolling-menu.dev
 */
function ScrollMenu({
  className,
  wrapperClassName,
  scrollContainerClassName,
  itemClassName,
  hideArrows = false,
  children,
  ...props
}: ScrollMenuProps) {
  const drag = React.useRef({ position: 0, clicked: false, dragging: false });

  const dragStop = () =>
    window.requestAnimationFrame(() => {
      drag.current.clicked = false;
      drag.current.dragging = false;
    });

  const dragMove =
    ({ scrollContainer }: publicApiType) =>
    (ev: React.MouseEvent) => {
      if (!drag.current.clicked || !scrollContainer.current) return;
      const diff = drag.current.position - ev.clientX;
      drag.current.dragging = drag.current.dragging || Math.abs(diff) > 5;
      if (drag.current.dragging) {
        scrollContainer.current.scrollLeft += diff;
        drag.current.position = ev.clientX;
      }
    };

  return (
    <div
      // The library's 6-rule stylesheet as utilities — a CSS side-effect
      // import is a TS error in fresh TypeScript 6 projects.
      className={cn(
        'relative',
        '[&_.react-horizontal-scrolling-menu--inner-wrapper]:flex',
        '[&_.react-horizontal-scrolling-menu--inner-wrapper]:items-center',
        '[&_.react-horizontal-scrolling-menu--inner-wrapper]:gap-2',
        '[&_.react-horizontal-scrolling-menu--inner-wrapper]:overflow-y-hidden',
        '[&_.react-horizontal-scrolling-menu--scroll-container.rtl]:[direction:rtl]',
        className,
      )}
      onMouseLeave={dragStop}
      // Swallow the click that ends a drag.
      onClickCapture={(ev) => {
        if (drag.current.dragging) {
          ev.preventDefault();
          ev.stopPropagation();
        }
      }}
    >
      <ScrollMenuPrimitive
        LeftArrow={hideArrows ? undefined : ScrollMenuLeftArrow}
        RightArrow={hideArrows ? undefined : ScrollMenuRightArrow}
        onMouseDown={() => (ev) => {
          drag.current.position = ev.clientX;
          drag.current.clicked = true;
        }}
        onMouseUp={() => dragStop}
        onMouseMove={dragMove}
        wrapperClassName={cn('flex flex-col', wrapperClassName)}
        scrollContainerClassName={cn(
          'relative flex w-full overflow-y-hidden',
          'gap-2 cursor-grab active:cursor-grabbing',
          '[scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
          scrollContainerClassName,
        )}
        itemClassName={itemClassName}
        {...props}
      >
        {children}
      </ScrollMenuPrimitive>
    </div>
  );
}

function ScrollMenuLeftArrow() {
  const api = useScrollMenu();
  // useLeftArrowVisible() is true when the first item is visible = arrow disabled.
  const atStart = api.useLeftArrowVisible();

  return (
    <ScrollMenuArrowButton
      label="Scroll left"
      disabled={atStart}
      onClick={() => api.scrollPrev()}
    >
      <ChevronLeft />
    </ScrollMenuArrowButton>
  );
}

function ScrollMenuRightArrow() {
  const api = useScrollMenu();
  const atEnd = api.useRightArrowVisible();

  return (
    <ScrollMenuArrowButton
      label="Scroll right"
      disabled={atEnd}
      onClick={() => api.scrollNext()}
    >
      <ChevronRight />
    </ScrollMenuArrowButton>
  );
}

function ScrollMenuArrowButton({
  label,
  disabled,
  onClick,
  children,
}: {
  label: string;
  disabled: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      className="rounded-full disabled:opacity-30"
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}

export {
  type publicApiType,
  ScrollMenu,
  ScrollMenuLeftArrow,
  ScrollMenuRightArrow,
  useScrollMenu,
  VisibilityContext,
};
