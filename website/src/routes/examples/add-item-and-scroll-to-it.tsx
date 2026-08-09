import { createFileRoute } from '@tanstack/react-router';
import { code, html } from 'virtual:example-code/add-item-and-scroll-to-it';

import { ChipsDemo } from '../../components/demos/ChipsDemo';
import { ExamplePage } from '../../components/ExamplePage';
import { pageHead } from '../../lib/seo';

export const Route = createFileRoute('/examples/add-item-and-scroll-to-it')({
  head: () =>
    pageHead({
      path: '/examples/add-item-and-scroll-to-it',
      title: 'React filter chips: add an item and scroll to it',
      description:
        'Filter chips in a horizontal React scroller: append an item, then scroll to it with apiRef and scrollToItem after it renders. Live demo and full source.',
    }),
  component: Page,
});

function Page() {
  return (
    <ExamplePage
      slug="add-item-and-scroll-to-it"
      title="Add an item and scroll to it — the filter-chips pattern"
      lede={
        <>
          A chip bar grows when the user picks a filter, and the new chip should
          end up on screen, not hidden past the right edge. The catch: you
          can&rsquo;t scroll to an element that hasn&rsquo;t rendered yet. This
          example splits the work between a click handler and an effect.
        </>
      }
      demo={<ChipsDemo />}
      demoHint="Click Add filter — the chip appears at the end and the row scrolls to reveal it. The x removes a chip."
      code={{ code, html }}
      codeTitle="AddItemAndScrollToIt.source.tsx"
      related={['add-items', 'items-animation', 'scroll-to-item']}
    >
      <h2>How it works</h2>
      <p>
        The menu gets an <code>apiRef</code>, which exposes the full API outside
        the component tree. <code>addItem</code> does two things: stores the new
        id in a <code>lastAdded</code> ref, then appends the item to state. It
        deliberately does not scroll — at that moment the chip is only state,
        not DOM.
      </p>
      <h2>Why the scroll lives in an effect</h2>
      <p>
        <code>getItemElementById</code> looks the item up in the DOM, so the
        scroll can only happen after React has committed the new item. A{' '}
        <code>useEffect</code> keyed on <code>items</code> runs at exactly that
        point: it reads <code>lastAdded</code>, clears it, and calls{' '}
        <code>apiRef.current.scrollToItem(el, ’smooth’, ’end’)</code>. Clearing
        the ref matters — re-renders for any other reason (selection, arrows)
        hit the effect too, and must not scroll again.
      </p>
      <h2>Notes</h2>
      <ul>
        <li>
          <code>lastAdded</code> is a ref, not state: writing it must not itself
          cause a render, and its value is only meaningful to the very next
          effect run.
        </li>
        <li>
          <code>’end’</code> aligns the new chip with the row&rsquo;s right
          edge; <code>’center’</code> works the same way if you want it in the
          middle.
        </li>
        <li>
          The arrows here use the <code>useLeftArrowVisible()</code> and{' '}
          <code>useRightArrowVisible()</code> hooks — a shorter form of the{' '}
          <code>useIsVisible(’first’/’last’)</code> pair.
        </li>
        <li>
          The scrollbar is hidden with plain CSS on the library&rsquo;s{' '}
          <code>scroll-container</code> class; scrolling itself stays native.
        </li>
      </ul>
    </ExamplePage>
  );
}
