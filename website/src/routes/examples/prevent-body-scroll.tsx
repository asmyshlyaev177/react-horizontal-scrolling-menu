import { createFileRoute } from '@tanstack/react-router';
import { code, html } from 'virtual:example-code/prevent-body-scroll';

import { PreventBodyScrollDemo } from '../../components/demos/PreventBodyScrollDemo';
import { ExamplePage } from '../../components/ExamplePage';
import { pageHead } from '../../lib/seo';

export const Route = createFileRoute('/examples/prevent-body-scroll')({
  head: () =>
    pageHead({
      path: '/examples/prevent-body-scroll',
      title: 'Prevent page scroll on wheel: React horizontal menu',
      description:
        'Scroll a horizontal React menu with the mouse wheel while the page stays put: a native non-passive wheel listener toggled on hover. Live demo and full source.',
    }),
  component: Page,
});

function Page() {
  return (
    <ExamplePage
      slug="prevent-body-scroll"
      title="Scroll the menu with the wheel — without scrolling the page"
      lede={
        <>
          A horizontal menu under a mouse wheel is awkward: the wheel scrolls
          the page and the row stays put. The fix has two halves — an{' '}
          <code>onWheel</code> handler that turns wheel ticks into paging, and a
          native non-passive listener that keeps the page from moving
          underneath. The second half can&rsquo;t be done from React alone.
        </>
      }
      demo={<PreventBodyScrollDemo />}
      demoHint="Park the pointer over the row and spin the wheel: the row pages, the page stays still. Move off the row and the wheel scrolls the page again."
      code={{ code, html }}
      codeTitle="PreventBodyScroll.source.tsx"
      related={['mouse-drag', 'swipe-desktop', 'simple']}
    >
      <h2>Turning the wheel into paging</h2>
      <p>
        <code>ScrollMenu</code>&rsquo;s <code>onWheel</code> prop is called with
        the API object and the wheel event. A real mouse wheel reports Y-only
        deltas in coarse steps, so the handler calls <code>scrollNext</code>{' '}
        when <code>deltaY</code> is negative and <code>scrollPrev</code>{' '}
        otherwise — each tick pages the row. Before any of that it checks
        whether the event looks like a touchpad gesture: any <code>deltaX</code>{' '}
        at all, or a <code>deltaY</code> under 15.
      </p>
      <h2>Why the page lock needs a native listener</h2>
      <p>
        Calling <code>preventDefault</code> inside the React handler would be
        the obvious way to stop the page — and it silently does nothing, because
        React registers wheel listeners as passive, and a passive listener is
        forbidden from cancelling the event. So{' '}
        <code>usePreventBodyScroll</code> goes around React: on{' '}
        <code>mouseenter</code> it runs{' '}
        <code>
          document.addEventListener(&apos;wheel&apos;, preventDefault,{' '}
          {'{ passive: false }'})
        </code>
        , on <code>mouseleave</code> it removes the listener again. While the
        pointer is over the menu, every wheel event bubbles up to{' '}
        <code>document</code> and has its default action — scrolling the page —
        cancelled there. A <code>useEffect</code> cleanup calls{' '}
        <code>enableScroll</code> on unmount, so the page can never be left
        locked.
      </p>
      <h2>The touchpad escape hatch</h2>
      <p>
        Two-finger panning arrives as wheel events too, and the container
        scrolls natively from them — the document listener would kill that. For
        events matching the touchpad heuristic the handler calls{' '}
        <code>stopPropagation</code> and returns: the event never reaches the
        document listener, so native panning survives. There&rsquo;s no reliable
        way to detect a touchpad; the delta heuristic is the story&rsquo;s
        honest guess, and it holds up in practice.
      </p>
      <h2>Notes</h2>
      <ul>
        <li>
          Browsers made document-level wheel listeners passive by default
          precisely so pages can&rsquo;t jank scrolling —{' '}
          <code>passive: false</code> is the explicit opt-out that makes{' '}
          <code>preventDefault</code> legal again.
        </li>
        <li>
          Wheel-up pages forward and wheel-down pages back — that&rsquo;s the
          story&rsquo;s mapping; swap the <code>scrollNext</code> /{' '}
          <code>scrollPrev</code> branches for the reverse.
        </li>
        <li>
          Touch devices never run any of this: there&rsquo;s no{' '}
          <code>mouseenter</code>, and swiping the row is native scrolling from
          the start.
        </li>
        <li>
          The lock exists only between <code>mouseenter</code> and{' '}
          <code>mouseleave</code>, so the rest of the page scrolls normally the
          moment the pointer leaves the rail.
        </li>
      </ul>
    </ExamplePage>
  );
}
