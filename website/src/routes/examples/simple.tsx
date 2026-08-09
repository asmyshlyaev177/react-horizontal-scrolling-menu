import { createFileRoute } from '@tanstack/react-router';
import { code, html } from 'virtual:example-code/simple';

import { QuickStartDemo } from '../../components/demos/QuickStartDemo';
import { ExamplePage } from '../../components/ExamplePage';
import { pageHead } from '../../lib/seo';

export const Route = createFileRoute('/examples/simple')({
  head: () =>
    pageHead({
      path: '/examples/simple',
      title: 'React horizontal scrolling menu: getting-started example',
      description:
        'The minimal react-horizontal-scrolling-menu setup: items with an itemId, two arrows reading VisibilityContext, and per-item visibility tracking. Full source.',
    }),
  component: Page,
});

function Page() {
  return (
    <ExamplePage
      slug="simple"
      title="Getting started: a horizontal scrolling menu in React"
      lede={
        <>
          The smallest useful setup: a row of cards, two arrow buttons, and the
          thing this library is actually about — every card knows whether
          it&rsquo;s on screen. One component, one required prop, one stylesheet
          import.
        </>
      }
      demo={<QuickStartDemo />}
      demoHint="Scroll the row — arrows disable at the ends, and each card tracks its own visibility."
      code={{ code, html }}
      codeTitle="Simple.source.tsx"
      related={['one-item-scroll', 'center-on-click', 'mouse-drag']}
    >
      <h2>How it works</h2>
      <p>
        <code>ScrollMenu</code> renders your children inside a native scroll
        container and watches each one with an IntersectionObserver. The only
        contract is <code>itemId</code> — a unique prop on every child, which is
        how items are tracked, found and scrolled to. Inside any child or arrow,{' '}
        <code>VisibilityContext</code> hands you the full API.
      </p>
      <h2>The visibility hook</h2>
      <p>
        Cards call <code>useIsVisible(itemId)</code> to subscribe to their own
        on-screen state — no scroll listeners, no position math, and only the
        affected cards re-render when visibility changes. Arrows use the{' '}
        <code>first</code> and <code>last</code> shorthands to disable
        themselves at the ends of the row.
      </p>
      <h2>Notes</h2>
      <ul>
        <li>
          <code>styles.css</code> is a separate import — the JS bundle never
          injects CSS.
        </li>
        <li>
          Item width is your own CSS; the menu measures nothing and ships 210
          bytes of layout styles.
        </li>
        <li>
          The second argument of <code>useIsVisible(itemId, true)</code> is the
          value used before the observer reports — and the value your server
          renders, if you server-render the menu.
        </li>
      </ul>
    </ExamplePage>
  );
}
