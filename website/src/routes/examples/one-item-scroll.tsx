import { createFileRoute } from '@tanstack/react-router';
import { code, html } from 'virtual:example-code/one-item-scroll';

import { OneItemScrollDemo } from '../../components/demos/OneItemScrollDemo';
import { ExamplePage } from '../../components/ExamplePage';
import { pageHead } from '../../lib/seo';

export const Route = createFileRoute('/examples/one-item-scroll')({
  head: () =>
    pageHead({
      path: '/examples/one-item-scroll',
      title: 'React scroll one item at a time: precise carousel arrows',
      description:
        'Advance a React carousel a single item per arrow click: scrollToItem with getNextElement steps one card instead of a full page. Live demo and full source.',
    }),
  component: Page,
});

function Page() {
  return (
    <ExamplePage
      slug="one-item-scroll"
      title="Scroll one item at a time instead of a full page"
      lede={
        <>
          By default the arrows page: everything visible slides out and the next
          group slides in. This example rewires them to step — one card per
          click — and the entire change is what the arrow&rsquo;s{' '}
          <code>onClick</code> calls. Same menu, same items, different scroll
          target.
        </>
      }
      demo={<OneItemScrollDemo />}
      demoHint="Click an arrow — the row advances one card, not a page. Arrows disable at the ends."
      code={{ code, html }}
      codeTitle="OneItemScroll.source.tsx"
      related={['one-item', 'custom-transition', 'center-on-click']}
    >
      <h2>How it works</h2>
      <p>
        <code>getNextElement()</code> returns the first item past the visible
        group; <code>getPrevElement()</code> the one just before it. The right
        arrow calls{' '}
        <code>scrollToItem(visibility.getNextElement(), ’smooth’, ’end’)</code>{' '}
        — aligning that item to the container&rsquo;s end edge scrolls just far
        enough to bring it into view, which moves the row by exactly one card.
        The left arrow mirrors it: previous element, aligned to{' '}
        <code>’start’</code>.
      </p>
      <h2>The alignment is the whole trick</h2>
      <p>
        The stock <code>scrollNext()</code> resolves the same next element
        internally, but aligns it to the start edge — the view scrolls past the
        entire visible group to put that item first. One{' '}
        <code>ScrollLogicalPosition</code> argument is the difference between
        paging and stepping. The third parameter of <code>scrollToItem</code> is
        the standard scroll-into-view <code>inline</code> alignment; the second
        is the behavior, <code>’smooth’</code> here.
      </p>
      <h2>Notes</h2>
      <ul>
        <li>
          Arrow state uses the <code>’first’</code> and <code>’last’</code>{' '}
          shorthands: <code>useIsVisible(’first’, true)</code> disables the left
          arrow at the start, <code>useIsVisible(’last’, false)</code> the right
          one at the end.
        </li>
        <li>
          At the ends <code>getNextElement()</code> returns undefined and{' '}
          <code>scrollToItem</code> quietly no-ops, so an enabled arrow still
          can&rsquo;t overscroll.
        </li>
        <li>
          The story&rsquo;s <code>onWheel</code> handler still pages a full view
          per wheel notch — stepping is the arrows&rsquo; behavior, not a global
          mode.
        </li>
        <li>
          Item clicks are untouched: cards toggle selection through their own{' '}
          <code>onClick</code>, independent of how the arrows scroll.
        </li>
      </ul>
    </ExamplePage>
  );
}
