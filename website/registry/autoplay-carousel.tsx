'use client';

import { Pause, Play } from 'lucide-react';
import * as React from 'react';
import { type publicApiType } from 'react-horizontal-scrolling-menu';

import { Button } from '@/components/ui/button';
import { ScrollMenu } from '@/components/ui/scroll-menu';
import { cn } from '@/lib/utils';

/**
 * Autoplaying carousel: advances a group per tick, wraps at the end. Pauses
 * on hover, touch, focus, hidden tab, reduced motion and the play/pause
 * toggle (always rendered — WCAG 2.2.2). Slides need a unique `itemId` prop.
 */
function Carousel({
  interval = 4000,
  className,
  children,
  ...props
}: Omit<React.ComponentProps<typeof ScrollMenu>, 'apiRef'> & {
  /** Milliseconds between automatic steps. */
  interval?: number;
}) {
  const apiRef = React.useRef<publicApiType | null>(null);
  const lastWrapAt = React.useRef(0);
  const reducedMotion = useReducedMotion();
  const [userPaused, setUserPaused] = React.useState(false);
  const [pointerPaused, setPointerPaused] = React.useState(false);
  const [focusPaused, setFocusPaused] = React.useState(false);
  const active =
    !userPaused && !pointerPaused && !focusPaused && !reducedMotion;

  useInterval(
    () => {
      const api = apiRef.current;
      // A hidden tab freezes IntersectionObserver — skip, don't scroll blind.
      if (!api?.menuVisible.current || document.visibilityState !== 'visible') {
        return;
      }
      // items.last() is live on every release; api.isLastItemVisible was a
      // stale snapshot until 8.3.1.
      if (api.items.last()?.visible) {
        // Unguarded, the wrap restarts every tick and stalls mid-scroll.
        if (Date.now() - lastWrapAt.current < interval * 2) return;
        lastWrapAt.current = Date.now();
        const first = api.items.first();
        const el = first && api.getItemElementById(first.key);
        if (el) api.scrollToItem(el, 'smooth', 'start');
        return;
      }
      api.scrollNext();
    },
    active ? interval : null,
  );

  return (
    <div
      className={cn('group/carousel relative max-w-full', className)}
      onMouseEnter={() => setPointerPaused(true)}
      onMouseLeave={() => setPointerPaused(false)}
      onTouchStart={() => setPointerPaused(true)}
      onTouchEnd={() => setPointerPaused(false)}
      onFocusCapture={() => setFocusPaused(true)}
      onBlurCapture={() => setFocusPaused(false)}
    >
      <ScrollMenu apiRef={apiRef} {...props}>
        {children}
      </ScrollMenu>
      <Button
        type="button"
        variant="outline"
        size="icon"
        className="absolute right-1 bottom-1 z-10 size-7 rounded-full"
        aria-label={userPaused ? 'Play carousel' : 'Pause carousel'}
        aria-pressed={userPaused}
        onClick={() => setUserPaused((paused) => !paused)}
      >
        {userPaused ? (
          <Play className="size-3.5" />
        ) : (
          <Pause className="size-3.5" />
        )}
      </Button>
    </div>
  );
}

function useInterval(callback: () => void, delayMs: number | null) {
  const saved = React.useRef(callback);
  React.useEffect(() => {
    saved.current = callback;
  }, [callback]);

  // `null` removes the timer, so resuming starts a fresh, full interval.
  React.useEffect(() => {
    if (delayMs === null) return;
    const id = window.setInterval(() => saved.current(), delayMs);
    return () => window.clearInterval(id);
  }, [delayMs]);
}

const REDUCED_MOTION = '(prefers-reduced-motion: reduce)';

const subscribeReducedMotion = (onChange: () => void) => {
  const query = window.matchMedia(REDUCED_MOTION);
  query.addEventListener('change', onChange);
  return () => query.removeEventListener('change', onChange);
};

function useReducedMotion() {
  // Server snapshot false: assume motion is fine until the client says otherwise.
  return React.useSyncExternalStore(
    subscribeReducedMotion,
    () => window.matchMedia(REDUCED_MOTION).matches,
    () => false,
  );
}

export { Carousel };
