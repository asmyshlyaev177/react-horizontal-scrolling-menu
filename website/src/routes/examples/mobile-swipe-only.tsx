import { createFileRoute } from '@tanstack/react-router';
import { code, html } from 'virtual:example-code/mobile-swipe-only';

import { MobileSwipeOnlyDemo } from '../../components/demos/MobileSwipeOnlyDemo';
import { ExamplePage } from '../../components/ExamplePage';
import { pageHead } from '../../lib/seo';

export const Route = createFileRoute('/examples/mobile-swipe-only')({
  head: () =>
    pageHead({
      path: '/examples/mobile-swipe-only',
      title: 'Hide carousel arrows on mobile: touch-only React scroll',
      description:
        'Arrows on desktop, touch-only scrolling on mobile for a React horizontal menu: a pointer: coarse matchMedia check hides them. Live demo and full source.',
    }),
  component: Page,
});

function Page() {
  return (
    <ExamplePage
      slug="mobile-swipe-only"
      title="Hide the arrows on mobile — touch-only scrolling on small screens"
      lede={
        <>
          On a touch screen, arrow buttons are dead weight: swiping is native,
          thumbs cover the tap targets, and each arrow eats row width. The demo
          keeps arrows for mouse users and unmounts them when the pointer is a
          finger; the story goes further and replaces native panning with
          explicit swipe-to-page gestures.
        </>
      }
      demo={<MobileSwipeOnlyDemo />}
      demoHint="Open this on a phone, or flip on touch emulation in DevTools — the arrows disappear and swiping does all the work."
      code={{ code, html }}
      codeTitle="MobileSwipeOnly.source.tsx"
      related={['swipe-desktop', 'mouse-drag', 'bottom-arrows']}
    >
      <h2>How the demo hides the arrows</h2>
      <p>
        <code>LeftArrow</code> and <code>RightArrow</code> are optional props —
        pass <code>undefined</code> and the slot isn&rsquo;t rendered at all, so
        there&rsquo;s nothing to hide with CSS and no buttons left in the tab
        order. The switch is a <code>matchMedia(’(pointer: coarse)’)</code>{' '}
        check in an effect: the server can&rsquo;t know the pointer type, so the
        first paint is desktop-first with arrows in, and hydration removes them
        once a coarse pointer is confirmed. A <code>change</code> listener keeps
        it live — DevTools device emulation flips it without a reload.
      </p>
      <h2>What the story does on touch</h2>
      <p>
        The story&rsquo;s <code>useSwipe</code> hook turns free panning into
        paging. The curried <code>onTouchStart</code>, <code>onTouchMove</code>{' '}
        and <code>onTouchEnd</code> props each receive the API object; start
        resets the end coordinate and records{' '}
        <code>targetTouches[0].clientX</code>, move tracks it, and end measures
        the travelled distance. Past <code>minSwipeDistance</code> (20px) it
        calls <code>apiObj.scrollPrev()</code> or{' '}
        <code>apiObj.scrollNext()</code> — one smooth page per swipe, whatever
        the finger&rsquo;s speed.
      </p>
      <h2>Suppressing native touch scrolling</h2>
      <p>
        For paging to be the only motion, the browser&rsquo;s own panning has to
        stop, and React 18+ registers <code>touchmove</code> listeners as
        passive, where <code>preventDefault</code> is ignored. The story&rsquo;s
        effect reaches the real scroll element through <code>apiRef</code> (
        <code>ref.current.scrollContainer.current</code>) and attaches its own
        listener with <code>{'{ passive: false }'}</code>, where the call works.
      </p>
      <h2>Notes</h2>
      <ul>
        <li>
          Pick the SSR default deliberately: rendering arrows first favors
          crawlers and desktop users, and touch devices lose them right after
          hydration.
        </li>
        <li>
          <code>(pointer: coarse)</code> targets the input, not the screen size
          — a narrow desktop window keeps its arrows, a tablet doesn&rsquo;t.
        </li>
        <li>
          If you only want to hide arrows and keep native swiping (the
          demo&rsquo;s behavior), skip the story&rsquo;s <code>touchmove</code>{' '}
          effect — free panning and hidden arrows coexist fine.
        </li>
        <li>
          The touch threshold is 20px versus the 50px of the desktop flick — see
          the swipe-on-desktop example for the mouse variant.
        </li>
      </ul>
    </ExamplePage>
  );
}
