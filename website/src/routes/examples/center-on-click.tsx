import { createFileRoute } from '@tanstack/react-router';
import { code, html } from 'virtual:example-code/center-on-click';

import { TabsDemo } from '../../components/demos/TabsDemo';
import { ExamplePage } from '../../components/ExamplePage';
import { pageHead } from '../../lib/seo';

export const Route = createFileRoute('/examples/center-on-click')({
  head: () =>
    pageHead({
      path: '/examples/center-on-click',
      title: 'React scrollable tabs: center the active tab on click',
      description:
        'Scrollable tabs in React without Material UI: clicking a tab centers it with scrollToItem(el, "smooth", "center"). Live demo and full story source.',
    }),
  component: Page,
});

function Page() {
  return (
    <ExamplePage
      slug="center-on-click"
      title="Center the clicked item — the scrollable-tabs pattern"
      lede={
        <>
          The behavior every tab strip needs and no scroll container gives you
          for free: click a tab near the edge and it glides to the middle,
          revealing its neighbors on both sides. Here it&rsquo;s one API call —
          no Material UI, no measuring, no scroll math.
        </>
      }
      demo={<TabsDemo />}
      demoHint="Click a tab near either edge — it activates and centers itself in the row."
      code={{ code, html }}
      codeTitle="CenterOnClick.source.tsx"
      related={['scroll-to-item', 'custom-transition', 'simple']}
    >
      <h2>How it works</h2>
      <p>
        <code>handleItemClick</code> is curried: it takes the{' '}
        <code>itemId</code> and returns a function expecting the API object. The
        click first stores the id in <code>selected</code> state, then calls{' '}
        <code>api.getItemElementById(itemId)</code> to find the real DOM element
        and hands it to <code>api.scrollToItem(item, ’smooth’, ’center’)</code>.
        One click, two effects: the tab is selected and centered.
      </p>
      <h2>Where the API comes from</h2>
      <p>
        The parent component never holds an API ref. Each <code>Card</code>{' '}
        reads the full API from <code>VisibilityContext</code> — available to
        any child of <code>ScrollMenu</code> — and passes it into the click
        handler: <code>onClick(visibility)</code>. If you need to scroll from
        outside the menu instead, that&rsquo;s the <code>apiRef</code> pattern
        in the scroll-to-item example.
      </p>
      <h2>Notes</h2>
      <ul>
        <li>
          The third argument of <code>scrollToItem</code> takes the same values
          as <code>scrollIntoView</code>&rsquo;s <code>inline</code> option —{' '}
          <code>’start’</code>, <code>’center’</code> or <code>’end’</code>.
        </li>
        <li>
          Cards are focusable (<code>role=&quot;button&quot;</code>,{' '}
          <code>tabIndex=0</code>) and handle Enter in <code>onKeyDown</code>,
          so keyboard users get the same select-and-center.
        </li>
        <li>
          The <code>onWheel</code> handler maps mouse-wheel deltas to{' '}
          <code>scrollNext</code>/<code>scrollPrev</code>, but bails for
          touchpads — a horizontal delta or a tiny vertical one is assumed to be
          a gesture and left native.
        </li>
        <li>
          Arrows disable themselves with the <code>useIsVisible(’first’)</code>{' '}
          and <code>useIsVisible(’last’)</code> shorthands.
        </li>
      </ul>
    </ExamplePage>
  );
}
