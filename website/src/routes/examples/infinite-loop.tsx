import { createFileRoute } from '@tanstack/react-router';
import { code, html } from 'virtual:example-code/infinite-loop';

import { InfiniteLoopDemo } from '../../components/demos/InfiniteLoopDemo';
import { ExamplePage } from '../../components/ExamplePage';
import { pageHead } from '../../lib/seo';

export const Route = createFileRoute('/examples/infinite-loop')({
  head: () =>
    pageHead({
      path: '/examples/infinite-loop',
      title: 'React infinite loop scroll menu: a seamless carousel',
      description:
        'A seamless looping carousel in React without a carousel library: clones on both ends and one scrollLeft teleport when scrolling settles. Demo and full source.',
    }),
  component: Page,
});

function Page() {
  return (
    <ExamplePage
      slug="infinite-loop"
      title="An infinite looping menu, built on the public API"
      lede={
        <>
          The classic clone-and-teleport carousel trick, implemented with zero
          library changes: the row is cloned onto both ends, and when scrolling
          settles inside a clone zone, <code>scrollLeft</code> jumps by exactly
          one loop length. The frames on both sides of the jump are identical,
          so nothing appears to move. Arrows, wheel, touch and mouse drag all
          cross the seam.
        </>
      }
      demo={<InfiniteLoopDemo />}
      demoHint="Keep going in either direction — by arrow, wheel, touch or drag — and the row never ends."
      code={{ code, html }}
      codeTitle="InfiniteLoop.source.tsx"
      related={['autoplay', 'mouse-drag', 'add-items']}
    >
      <h2>How it works</h2>
      <p>
        <code>getSlides</code> copies items onto both ends of the row. Since{' '}
        <code>itemId</code> must be unique, clones get a suffix —{' '}
        <code>-lc</code> on the left, <code>-rc</code> on the right — while
        keeping the real id as <code>realId</code> for titles, selection and
        clicks. <code>useInfiniteLoop</code> packages the rest:{' '}
        <code>normalize()</code> measures the loop length from the{' '}
        <code>offsetLeft</code> of the first real item and its right clone, and
        shifts <code>scrollLeft</code> by exactly that distance whenever the
        position lands inside a clone zone. Pure geometry, and idempotent —
        calling it when nothing needs fixing does nothing.
      </p>
      <h2>When the teleport fires</h2>
      <p>
        Jumping mid-scroll would visibly fight the browser, so{' '}
        <code>normalize</code> runs when scrolling settles: a native{' '}
        <code>scrollend</code> listener on the container (reached through the{' '}
        <code>containerRef</code> prop), with a 150ms-debounced{' '}
        <code>onScroll</code> fallback for Safari, which doesn&rsquo;t fire{' '}
        <code>scrollend</code>. One more jump happens before anyone sees
        anything: a layout effect sets the initial <code>scrollLeft</code> to
        the first real item pre-paint, so the page never opens on the left
        clones.
      </p>
      <h2>Crossing the seam mid-drag</h2>
      <p>
        The mouse-drag callback adds each delta to <code>scrollLeft</code> and
        calls <code>loop.normalize()</code> right there, inside the gesture.
        Without that, dragging into a clone zone would wait for the drag to end
        before teleporting — with it, you can drag through the seam indefinitely
        and never notice it.
      </p>
      <h2>Notes</h2>
      <ul>
        <li>
          The arrows are custom and always enabled: the stock <code>first</code>
          /<code>last</code> hooks track the outermost items, which here are
          clones — they&rsquo;d flash disabled at the seam.
        </li>
        <li>
          Cards display a twin-union visibility — an item counts as visible when
          it or either clone is — because the per-element flag goes stale for a
          frame after a teleport and would blink the header.
        </li>
        <li>
          Two pages of clones per side: the zone must cover a full viewport
          (identical frames around a jump) with room to spare, so a Next click
          from the page straddling the seam never clamps at the row&rsquo;s end.
        </li>
        <li>
          Everything used here — <code>containerRef</code>,{' '}
          <code>onScroll</code>, <code>itemId</code>, the curried mouse props —
          is public API.
        </li>
      </ul>
    </ExamplePage>
  );
}
