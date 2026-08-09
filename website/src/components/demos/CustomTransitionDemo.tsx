import * as React from 'react';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';

import { cities } from '../../lib/demo-data';
import { LeftArrow, RightArrow } from '../Arrows';
import { useDragToScroll } from '../useDragToScroll';
import { CityCard } from './LoopParts';

// Ports CustomTransition.source: with noPolyfill={false} programmatic
// scrolls go through transitionBehavior, which gets the computed target
// positions and drives scrollLeft with its own easing and duration.

/** One action per scrollable ancestor that has to move — here always
 * just the scroll container. */
type ScrollAction = { el: Element; top: number; left: number };

const DURATIONS = [500, 1200, 2500];
const DEFAULT_DURATION = 1200;

const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

// A second arrow click can land mid-animation; remembering the pending
// frame per element lets the new animation cancel the old one.
const pendingFrames = new WeakMap<Element, number>();

function animateScroll(el: Element, target: number, duration: number) {
  const prevFrame = pendingFrames.get(el);
  if (prevFrame !== undefined) cancelAnimationFrame(prevFrame);

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

export function CustomTransitionDemo() {
  const { dragProps } = useDragToScroll();
  const [duration, setDuration] = React.useState(DEFAULT_DURATION);

  const transition = (instructions: ScrollAction[]) => {
    instructions.forEach(({ el, left }) => animateScroll(el, left, duration));
  };

  return (
    <div className="example-demo">
      <label className="flex items-center gap-2 px-2 pb-4 text-sm text-muted">
        Duration
        <select
          value={duration}
          onChange={(ev) => setDuration(Number(ev.target.value))}
          className="rounded-md border border-border-strong bg-surface px-2 py-1 font-mono text-sm text-ink"
        >
          {DURATIONS.map((ms) => (
            <option value={ms} key={ms}>
              {ms} ms
            </option>
          ))}
        </select>
      </label>
      <ScrollMenu
        LeftArrow={LeftArrow}
        RightArrow={RightArrow}
        noPolyfill={false}
        transitionDuration={duration}
        // The menu passes this straight to scroll-into-view-if-needed as
        // its `behavior` callback; the typings only describe the string form.
        transitionBehavior={transition as unknown as ScrollBehavior}
        {...dragProps}
      >
        {cities.map((city) => (
          <CityCard itemId={city.id} key={city.id} city={city} />
        ))}
      </ScrollMenu>
    </div>
  );
}
