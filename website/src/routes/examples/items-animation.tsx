import { createFileRoute } from '@tanstack/react-router';
import { code, html } from 'virtual:example-code/items-animation';

import { ItemsAnimationDemo } from '../../components/demos/ItemsAnimationDemo';
import { ExamplePage } from '../../components/ExamplePage';
import { pageHead } from '../../lib/seo';

export const Route = createFileRoute('/examples/items-animation')({
  head: () =>
    pageHead({
      path: '/examples/items-animation',
      title: 'Animate adding and removing list items in React',
      description:
        'Add, remove and shuffle items in a horizontal React list, animated by @formkit/auto-animate through the ScrollMenu containerRef prop. Live demo and complete source.',
    }),
  component: Page,
});

function Page() {
  return (
    <ExamplePage
      slug="items-animation"
      title="Animate items in, out and into place with auto-animate"
      lede={
        <>
          Appending to a horizontal list makes the new item pop into place;
          removing one snaps its neighbors together.{' '}
          <code>@formkit/auto-animate</code> fixes both with a single parent ref
          — and <code>ScrollMenu</code>&rsquo;s <code>containerRef</code> prop
          hands it exactly the element it needs.
        </>
      }
      demo={<ItemsAnimationDemo />}
      demoHint="Add, remove and shuffle — every entry, exit and reorder is animated. The menu itself has no animation code."
      code={{ code, html }}
      codeTitle="Items_animation.source.tsx"
      related={['add-item-and-scroll-to-it', 'add-items', 'custom-transition']}
    >
      <h2>How it works</h2>
      <p>
        <code>useAutoAnimate()</code> returns a ref that must land on the direct
        parent of the elements it should animate. Inside <code>ScrollMenu</code>{' '}
        that parent is the scroll container: each child you pass is wrapped in
        an item div, and those item divs are the container&rsquo;s immediate
        children. The story passes the ref straight through —{' '}
        <code>{'<ScrollMenu containerRef={parent}>'}</code> — and auto-animate
        takes it from there: added items ease in, removed items animate out, and
        reordered items slide to their new slot. The menu itself never knows
        it&rsquo;s being animated.
      </p>
      <h2>Add, remove, shuffle</h2>
      <p>
        All three controls are plain <code>setState</code> calls on the items
        array — <code>addItems</code> appends one, <code>removeItems</code>{' '}
        drops the last, <code>shuffle</code> is a Fisher&ndash;Yates pass over a
        copy. The animations come entirely from the DOM mutations those updates
        cause. One rule is worth keeping: <code>itemId</code> doubles as the
        React key and as the item&rsquo;s handle in the menu&rsquo;s tracking
        map, so ids must stay unique — the story even backfills numbering gaps
        left by removals rather than risk minting a duplicate.
      </p>
      <h2>Scrolling and tracking keep working</h2>
      <p>
        The menu re-observes its children whenever they change, so a freshly
        added item&rsquo;s <code>useIsVisible</code> reports correctly right
        away and the arrows keep paging. A new item usually lands offscreen,
        though — if the entrance should actually be seen, pair this with{' '}
        <code>scrollToItem</code> the way the add-item-and-scroll-to-it example
        does.
      </p>
      <h2>Notes</h2>
      <ul>
        <li>
          <code>containerRef</code> accepts a ref object or a callback ref —{' '}
          <code>useAutoAnimate</code>&rsquo;s callback plugs in directly.
        </li>
        <li>
          auto-animate is zero-config and framework-agnostic; the React binding
          is the one <code>useAutoAnimate</code> hook.
        </li>
        <li>
          The demo above simplifies id management to a monotonic counter; the
          code panel shows the story&rsquo;s gap-filling version.
        </li>
      </ul>
    </ExamplePage>
  );
}
