import { createFileRoute } from '@tanstack/react-router';
import { code, html } from 'virtual:example-code/swipe-desktop';

import { SwipeDesktopDemo } from '../../components/demos/SwipeDesktopDemo';
import { ExamplePage } from '../../components/ExamplePage';
import { pageHead } from '../../lib/seo';

export const Route = createFileRoute('/examples/swipe-desktop')({
  head: () =>
    pageHead({
      path: '/examples/swipe-desktop',
      title: 'Swipe with mouse on desktop: React carousel flick gesture',
      description:
        'Desktop swipe for a React horizontal menu: track mouse down/up, and a release past 50px flicks to the next page with a smooth glide. Demo and full source.',
    }),
  component: Page,
});

function Page() {
  return (
    <ExamplePage
      slug="swipe-desktop"
      title="Swipe on desktop: a mouse flick that pages the menu"
      lede={
        <>
          Drag-to-scroll moves the row 1:1 with the cursor. This is the other
          mouse gesture: a flick. Press, move at least 50px, release — and the
          menu glides a page in that direction via <code>scrollNext</code> or{' '}
          <code>scrollPrev</code>. The row doesn&rsquo;t follow the pointer at
          all; the glide is the library&rsquo;s smooth programmatic scroll,
          which is what gives the release its momentum feel.
        </>
      }
      demo={<SwipeDesktopDemo />}
      demoHint="Press anywhere on the row, move left or right at least 50px, and release — the menu glides one page. Shorter moves do nothing."
      code={{ code, html }}
      codeTitle="SwipeDesktop.source.tsx"
      related={['mouse-drag', 'mobile-swipe-only', 'infinite-loop']}
    >
      <h2>How it works</h2>
      <p>
        A <code>useSwipe</code> hook returns the three curried mouse props{' '}
        <code>ScrollMenu</code> expects — each receives the API object and
        returns a plain event handler. <code>onMouseDown</code> anchors the
        pointer&rsquo;s <code>clientX</code> in a ref, <code>onMouseMove</code>{' '}
        keeps overwriting the end coordinate, and <code>onMouseUp</code>{' '}
        compares the two: a horizontal difference past{' '}
        <code>minSwipeDistance</code> (50px) calls{' '}
        <code>apiObj.scrollNext()</code> for a leftward flick or{' '}
        <code>apiObj.scrollPrev()</code> for a rightward one.
      </p>
      <h2>Why clicks need no special handling</h2>
      <p>
        In the drag-to-scroll example, releasing a drag over a card would click
        it, so a <code>dragging</code> flag has to outlive the gesture by a
        frame. A flick sidesteps the whole problem: below the 50px threshold{' '}
        <code>onMouseUp</code> does nothing, so a click is just a click — and
        past it the pointer has left the card it pressed on anyway. No flags, no
        suppressed handlers.
      </p>
      <h2>What the story adds for touch and wheel</h2>
      <p>
        The story also pins down native touch panning: React 18+ registers{' '}
        <code>touchmove</code> listeners as passive, so{' '}
        <code>preventDefault</code> only works from a non-passive listener. An
        effect reaches the scroll container through <code>apiRef</code> (
        <code>ref.current.scrollContainer.current</code>) and attaches one with{' '}
        <code>{'{ passive: false }'}</code>. Its <code>onWheel</code> handler
        pages the menu too, with a heuristic — nonzero <code>deltaX</code> or a
        small <code>deltaY</code> is assumed to be a touchpad and left alone.
      </p>
      <h2>Notes</h2>
      <ul>
        <li>
          The coordinates live in a ref, not state — tracking{' '}
          <code>mousemove</code> in state would re-render on every pixel.
        </li>
        <li>
          The demo re-anchors the end coordinate on <code>mousedown</code>, so a
          leftover position from the previous gesture can never count toward a
          new swipe.
        </li>
        <li>
          Tune <code>minSwipeDistance</code> to taste: lower is snappier, higher
          tolerates sloppier clicks. The touch variant of this recipe uses 20px.
        </li>
      </ul>
    </ExamplePage>
  );
}
