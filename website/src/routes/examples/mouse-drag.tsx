import { createFileRoute } from '@tanstack/react-router';
import { code, html } from 'virtual:example-code/mouse-drag';

import { MouseDragDemo } from '../../components/demos/MouseDragDemo';
import { ExamplePage } from '../../components/ExamplePage';
import { pageHead } from '../../lib/seo';

export const Route = createFileRoute('/examples/mouse-drag')({
  head: () =>
    pageHead({
      path: '/examples/mouse-drag',
      title: 'React drag to scroll: horizontal menu without breaking clicks',
      description:
        'Mouse drag-to-scroll for a horizontal React list: a 5px threshold separates drags from clicks, so items stay clickable. Live demo and complete source.',
    }),
  component: Page,
});

function Page() {
  return (
    <ExamplePage
      slug="mouse-drag"
      title="Drag to scroll with the mouse — without breaking clicks"
      lede={
        <>
          Touch users scroll a horizontal list natively, but mouse users need
          wiring: hold, drag, release. The hard part isn&rsquo;t moving the row
          — it&rsquo;s that a naive implementation turns every released drag
          into an accidental item click. This example separates the two with a
          small <code>DragDealer</code> class and three mouse props.
        </>
      }
      demo={<MouseDragDemo />}
      demoHint="Grab anywhere on the row and drag. Items are still clickable — a click after a drag is suppressed."
      code={{ code, html }}
      codeTitle="MouseDrag.source.tsx"
      related={['swipe-desktop', 'mobile-swipe-only', 'infinite-loop']}
    >
      <h2>How it works</h2>
      <p>
        <code>ScrollMenu</code> exposes curried mouse handlers —{' '}
        <code>onMouseDown</code>, <code>onMouseUp</code> and{' '}
        <code>onMouseMove</code> each receive the API object and return a
        regular event handler. The <code>DragDealer</code> instance tracks one
        anchor coordinate: on every move it applies the delta straight to{' '}
        <code>scrollContainer.current.scrollLeft</code>. Native scrolling does
        the rest — no transforms, no physics, and the scrollbar stays real.
      </p>
      <h2>Why clicks keep working</h2>
      <p>
        A drag only starts after the pointer moves more than 5px, so a plain
        click never scrolls. The other direction is the classic bug: item{' '}
        <code>onClick</code> fires after <code>mouseup</code>, so releasing a
        drag on top of a card would select it. <code>dragStop</code> clears the
        applying flag immediately but keeps <code>dragging</code> set for one
        more animation frame — click handlers check it and bail.
      </p>
      <h2>Details worth stealing</h2>
      <ul>
        <li>
          <code>dragStart</code> cancels the pending reset from the previous
          gesture — without it, a fast second drag can apply a stale delta.
        </li>
        <li>
          <code>onMouseLeave</code> on the wrapper also calls{' '}
          <code>dragStop</code>, so leaving the row mid-drag can&rsquo;t leave
          it stuck in the dragging state.
        </li>
        <li>
          Touch needs none of this — the container is a real scroll container,
          so swiping already works.
        </li>
      </ul>
    </ExamplePage>
  );
}
