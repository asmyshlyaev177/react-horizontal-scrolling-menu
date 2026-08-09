import { createFileRoute } from '@tanstack/react-router';
import { code, html } from 'virtual:example-code/one-item';

import { OneItemDemo } from '../../components/demos/OneItemDemo';
import { ExamplePage } from '../../components/ExamplePage';
import { pageHead } from '../../lib/seo';

export const Route = createFileRoute('/examples/one-item')({
  head: () =>
    pageHead({
      path: '/examples/one-item',
      title: 'React one item per view slider: full-width scroll items',
      description:
        'Full-width items in a React horizontal scroll menu: min-width 100% on the item wrapper makes a one-item-per-view slider. Live demo and complete source.',
    }),
  component: Page,
});

function Page() {
  return (
    <ExamplePage
      slug="one-item"
      title="One item per view: a full-width slider from the same menu"
      lede={
        <>
          There&rsquo;s no slider mode to switch on. The menu lays out whatever
          your CSS says, so one rule — <code>min-width: 100%</code> on the
          library&rsquo;s item wrapper — turns the same component into a slider:
          every card fills the view, and the ordinary paging arrows advance
          exactly one item.
        </>
      }
      demo={<OneItemDemo />}
      demoHint="Page with the arrows — each slide is exactly one view wide, and each slide reports its own visibility."
      code={{ code, html }}
      codeTitle="OneItem.source.tsx"
      related={['one-item-scroll', 'simple', 'custom-transition']}
    >
      <h2>How it works</h2>
      <p>
        The story wraps the menu in a styled container targeting{' '}
        <code>.react-horizontal-scrolling-menu--item</code> — the div the
        library renders around every child — and gives it{' '}
        <code>minWidth: ’100%’</code> plus flex centering. Each wrapper now
        spans the whole scroll container, so a single card fits the view. The
        arrows are stock: <code>scrollPrev()</code> and{' '}
        <code>scrollNext()</code> page by the visible group, and when the
        visible group is one item, a page and an item are the same thing.
      </p>
      <h2>Arrows and the wheel</h2>
      <p>
        Arrow state comes from <code>useLeftArrowVisible()</code> and{' '}
        <code>useRightArrowVisible()</code> — each returns true once the row
        sits at that end, and the story feeds it into <code>disabled</code> and
        fades the button out. The <code>onWheel</code> prop receives the API
        object along with the event, so a vertical mouse wheel pages the row by
        the sign of <code>deltaY</code>. It first sniffs for touchpads: any
        horizontal delta, or a vertical one under 15, is assumed to be a
        touchpad gesture and left to native scrolling.
      </p>
      <h2>Notes</h2>
      <ul>
        <li>
          <code>itemId</code> on every child is the one hard requirement —
          it&rsquo;s how items are tracked and scrolled to.
        </li>
        <li>
          Cards still call <code>useIsVisible(itemId, true)</code>; with one
          item per view, every off-screen slide reports{' '}
          <code>visible: false</code>.
        </li>
        <li>
          The scrollbar is hidden with plain CSS on the scroll container (
          <code>scrollbar-width: none</code> plus the WebKit pseudo-element) —
          that choice is yours, not the library&rsquo;s.
        </li>
        <li>
          Width lives entirely in your stylesheet. Swap 100% for 50% and you
          have a two-per-view slider; the library measures nothing.
        </li>
      </ul>
    </ExamplePage>
  );
}
