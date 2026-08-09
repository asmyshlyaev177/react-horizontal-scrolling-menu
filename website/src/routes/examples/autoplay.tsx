import { createFileRoute } from '@tanstack/react-router';
import { code, html } from 'virtual:example-code/autoplay';

import { AutoplayDemo } from '../../components/demos/AutoplayDemo';
import { ExamplePage } from '../../components/ExamplePage';
import { pageHead } from '../../lib/seo';

export const Route = createFileRoute('/examples/autoplay')({
  head: () =>
    pageHead({
      path: '/examples/autoplay',
      title: 'React carousel autoplay with accessible pause behavior',
      description:
        'Autoplay for a React scroll menu: useInterval calls scrollNext through apiRef, pausing on hover, focus, touch and reduced motion. Live demo and full source.',
    }),
  component: Page,
});

function Page() {
  return (
    <ExamplePage
      slug="autoplay"
      title="Autoplay with accessible pause behavior"
      lede={
        <>
          The advancing part is one line — a timer calling{' '}
          <code>scrollNext()</code> through <code>apiRef</code>, on top of the
          same infinite-loop core. The engineering is in when <em>not</em> to
          advance: hover, touch, keyboard focus, a Pause button, hidden tabs,
          offscreen rails and reduced-motion preferences all stop the timer,
          each for a different reason.
        </>
      }
      demo={<AutoplayDemo />}
      demoHint="Hover, touch, or tab into the rail and it pauses; the Pause button stops it until you press Play."
      code={{ code, html }}
      codeTitle="Autoplay.source.tsx"
      related={['infinite-loop', 'mouse-drag', 'mobile-swipe-only']}
    >
      <h2>How it works</h2>
      <p>
        <code>{'useInterval(cb, active ? interval : null)'}</code> is the whole
        scheduler. <code>active</code> folds four flags together — user-paused,
        hover-paused, focus-paused and <code>prefers-reduced-motion</code> — and
        passing <code>null</code> removes the timer entirely, so resuming starts
        a fresh, full interval instead of firing mid-cycle right after the
        pointer leaves.
      </p>
      <h2>Ticks that refuse to run</h2>
      <p>
        Even an active timer checks before scrolling: the tick reads{' '}
        <code>api.menuVisible.current</code> and{' '}
        <code>document.visibilityState</code>, and skips if either says no. A
        hidden tab freezes IntersectionObserver, so scrolling there means
        advancing blind and teleport bookkeeping drifting off; a rail scrolled
        off the page simply shouldn&rsquo;t move. Skipped ticks cost nothing —
        the next one re-checks.
      </p>
      <h2>The pause surface</h2>
      <p>
        Hover and touch pause via wrapper handlers, keyboard focus via{' '}
        <code>onFocusCapture</code>/<code>onBlurCapture</code>, and{' '}
        <code>prefers-reduced-motion</code> keeps autoplay off entirely. The
        explicit Pause button is what WCAG 2.2.2 actually requires for
        auto-advancing content — hover-pause alone doesn&rsquo;t count.
      </p>
      <h2>Notes</h2>
      <ul>
        <li>
          The Pause toggle sits outside the hover wrapper — inside it, clicking
          Pause would also hover-pause, and the button could never be observed
          doing anything.
        </li>
        <li>
          Looping comes from the same <code>useInfiniteLoop</code>{' '}
          clone-and-teleport hook as the infinite loop example; autoplay only
          adds the timer and the pause flags.
        </li>
        <li>
          The scroll animation is the browser&rsquo;s native smooth scroll —{' '}
          <code>transitionDuration</code> has no effect with the default{' '}
          <code>noPolyfill</code>.
        </li>
      </ul>
    </ExamplePage>
  );
}
