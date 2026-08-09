import { createFileRoute } from '@tanstack/react-router';
import { code, html } from 'virtual:example-code/add-items';

import { InfiniteDemo } from '../../components/demos/InfiniteDemo';
import { ExamplePage } from '../../components/ExamplePage';
import { pageHead } from '../../lib/seo';

export const Route = createFileRoute('/examples/add-items')({
  head: () =>
    pageHead({
      path: '/examples/add-items',
      title: 'React horizontal infinite scroll: load more at the end',
      description:
        'Infinite horizontal scroll in React: onUpdate checks api.items.last().visible and appends the next batch with a loader item. Live demo and complete source.',
    }),
  component: Page,
});

function Page() {
  return (
    <ExamplePage
      slug="add-items"
      title="Load more items when the end scrolls into view"
      lede={
        <>
          Horizontal infinite scroll without a scroll listener: the menu already
          knows which items are visible, so &ldquo;the user reached the
          end&rdquo; is just a question — is the last item on screen?{' '}
          <code>onUpdate</code> asks it after every scroll and appends the next
          batch when the answer is yes.
        </>
      }
      demo={<InfiniteDemo />}
      demoHint="Scroll to the right end — a loader card appears and the next batch arrives. The demo stops at 30 items."
      code={{ code, html }}
      codeTitle="AddItems.source.tsx"
      related={['add-item-and-scroll-to-it', 'performance', 'infinite-loop']}
    >
      <h2>How it works</h2>
      <p>
        <code>onUpdate</code> fires whenever item visibility changes. The
        handler reads <code>api.items.last()?.visible</code> — the library
        tracks every item by its <code>itemId</code> and keeps a visibility flag
        per item, so detecting the end costs one lookup, no IntersectionObserver
        of your own and no scroll-position math. <code>pushNewItems</code> then
        simulates a fetch: a one-second timeout, five more items, done.
      </p>
      <h2>Guarding the fetch</h2>
      <p>
        Visibility updates arrive in bursts, so the handler must be safe to call
        repeatedly. A <code>loading</code> flag makes it idempotent: both{' '}
        <code>onUpdate</code> and <code>pushNewItems</code> check it, and only
        the first trigger starts a fetch. The same flag renders a{' '}
        <code>Loader</code> component as a real menu item (with its own{' '}
        <code>itemId</code>) that calls <code>scrollIntoView()</code> on mount,
        keeping the row&rsquo;s end in view while the batch loads.
      </p>
      <h2>Notes</h2>
      <ul>
        <li>
          The right arrow is passed as an element,{' '}
          <code>{'RightArrow={<RightArrow disabled={...} />}'}</code> — both
          component and element forms work, and the element form lets the parent
          pass props like the item cap.
        </li>
        <li>
          That arrow only disables when the cap is reached and the last item is
          visible — before the cap, reaching the end means more items are
          coming.
        </li>
        <li>
          <code>newItemsLimit</code> stops this demo at 24 items; in real code
          the equivalent signal is your API running out of pages.
        </li>
      </ul>
    </ExamplePage>
  );
}
