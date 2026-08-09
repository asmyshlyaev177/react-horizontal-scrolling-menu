import { createFileRoute } from '@tanstack/react-router';
import { code, html } from 'virtual:example-code/scroll-to-item';

import { ScrollToItemDemo } from '../../components/demos/ScrollToItemDemo';
import { ExamplePage } from '../../components/ExamplePage';
import { pageHead } from '../../lib/seo';

export const Route = createFileRoute('/examples/scroll-to-item')({
  head: () =>
    pageHead({
      path: '/examples/scroll-to-item',
      title: 'React scroll to element in horizontal list: scrollToItem',
      description:
        'Scroll a horizontal React list to any item by id: onInit hands over the api and scrollToItem brings the target into view. Live demo and complete source.',
    }),
  component: Page,
});

function Page() {
  return (
    <ExamplePage
      slug="scroll-to-item"
      title="Scroll to a specific item in a horizontal list"
      lede={
        <>
          Deep-linking into a row: a chat opens on the active conversation, a
          gallery on the photo you shared. The scroll container lives inside the
          library, but you don&rsquo;t need a ref into its DOM —{' '}
          <code>onInit</code> hands you the api, and <code>scrollToItem</code>{' '}
          does the positioning.
        </>
      }
      demo={<ScrollToItemDemo />}
      demoHint="The rail doesn't mount at Tokyo — onInit jumps straight to quito. Drag somewhere else, then remount to watch it land there again."
      code={{ code, html }}
      codeTitle="ScrollToItem.source.tsx"
      related={[
        'center-on-click',
        'save-restore-position',
        'add-item-and-scroll-to-it',
      ]}
    >
      <h2>How it works</h2>
      <p>
        <code>ScrollMenu</code> takes an <code>onInit</code> callback and calls
        it once the menu has rendered and measured its items, passing the same
        api object that <code>VisibilityContext</code> provides inside. The
        handler looks the element up with <code>getItemElementById(id)</code>{' '}
        and hands it to <code>scrollToItem(item, ’auto’, ’start’)</code>.
        Because <code>onInit</code> only fires after measurement, the lookup
        can&rsquo;t come back empty on a rendered item — no{' '}
        <code>setTimeout</code>, no retry loop.
      </p>
      <h2>Behavior and alignment</h2>
      <p>
        The story passes <code>’auto’</code> and <code>’start’</code>:{' '}
        <code>’auto’</code> jumps without animation, which is what you want for
        an initial position — the user never sees the rail at item one.{' '}
        <code>’start’</code> lines the item&rsquo;s left edge up with the
        rail&rsquo;s. For click-driven scrolls the same call takes{' '}
        <code>’smooth’</code> and <code>’center’</code> — that&rsquo;s the
        center-on-click example below.
      </p>
      <h2>Notes</h2>
      <ul>
        <li>
          <code>getItemElementByIndex</code> is the positional alternative when
          you know the slot but not the id.
        </li>
        <li>
          The id you pass is the item&rsquo;s <code>itemId</code> — the same key
          the menu uses for visibility tracking.
        </li>
        <li>
          The demo replays the behavior by remounting the menu with a new{' '}
          <code>key</code>; every fresh mount runs <code>onInit</code> again.
        </li>
      </ul>
    </ExamplePage>
  );
}
