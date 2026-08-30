'use client';

import { Pause, Play } from 'lucide-react';
import * as React from 'react';
import { type publicApiType } from 'react-horizontal-scrolling-menu';

import { Button } from '@/components/ui/button';
import { ScrollMenu } from '@/components/ui/scroll-menu';
import { cn } from '@/lib/utils';

/**
 * Autoplaying carousel on the scroll-menu row: a timer advances one group at
 * a time and wraps back to the start after the last item. Autoplay pauses on
 * hover, touch, focus within the row, hidden tabs, `prefers-reduced-motion`
 * and the play/pause toggle (always rendered — WCAG 2.2.2 wants moving
 * content stoppable). Children are your slides — each needs a unique
 * `itemId` prop; arrows and drag-to-scroll come from scroll-menu.
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
      // Not api.isLastItemVisible: that snapshot is taken when the api object
      // is created and goes stale. The ItemsMap entries are updated in place
      // by the observer, so reading it at tick time is always current.
      if (api.items.last()?.visible) {
        // The last item stays visible while the wrap animates, so an
        // unguarded wrap restarts every tick and the scroll stalls mid-way.
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
  // Server snapshot false: autoplay assumes motion is fine until the client
  // media query says otherwise.
  return React.useSyncExternalStore(
    subscribeReducedMotion,
    () => window.matchMedia(REDUCED_MOTION).matches,
    () => false,
  );
}

export { Carousel };
