import { createFileRoute } from '@tanstack/react-router';
import { code, html } from 'virtual:example-code/performance';

import { PerformanceDemo } from '../../components/demos/PerformanceDemo';
import { ExamplePage } from '../../components/ExamplePage';
import { pageHead } from '../../lib/seo';

export const Route = createFileRoute('/examples/performance')({
  head: () =>
    pageHead({
      path: '/examples/performance',
      title: 'React horizontal list performance: 5,000 items',
      description:
        'A React horizontal menu rendering 5,000 items with native scrolling: memoized cards, one IntersectionObserver, no virtualization. Live demo and full source.',
    }),
  component: Page,
});

function Page() {
  return (
    <ExamplePage
      slug="performance"
      title="5,000 items in one row — no virtualization needed"
      lede={
        <>
          The usual advice at a few hundred items is to reach for
          virtualization. This example renders 5,000 real DOM nodes into one{' '}
          <code>ScrollMenu</code> and stays responsive — native overflow scroll
          does the moving, an IntersectionObserver does the watching, and React
          mostly does nothing.
        </>
      }
      demo={<PerformanceDemo />}
      demoHint="Drag the rail or page with the arrows — every one of the 5,000 cards is a real DOM node; nothing is windowed."
      code={{ code, html }}
      codeTitle="Performance.source.tsx"
      related={['add-items', 'simple', 'mouse-drag']}
    >
      <h2>Where the work doesn&rsquo;t happen</h2>
      <p>
        Scrolling never enters React. The rail is a genuine overflow container:
        wheel and touch scroll it natively, and the drag wiring only assigns to{' '}
        <code>scrollContainer.current.scrollLeft</code> — no state, no
        re-renders per frame. Visibility is a single IntersectionObserver
        instance watching all 5,000 item elements; callbacks arrive in batches,
        and only components that subscribed with <code>useIsVisible</code>{' '}
        update when their own item flips. There is no per-item scroll math
        anywhere.
      </p>
      <h2>What the story tunes</h2>
      <p>
        <code>Card</code> is wrapped in <code>React.memo</code> with a
        comparator over <code>selected</code> and <code>title</code>, so
        selecting one card doesn&rsquo;t reconcile the other 4,999. The
        visibility readout goes through <code>useDeferredValue</code>: after a
        page jump, hundreds of items flip state at once, and deferring keeps
        that burst off the critical path of the interaction that caused it.{' '}
        <code>noPolyfill={'{true}'}</code> makes programmatic scrolls use the
        browser&rsquo;s own <code>scrollIntoView</code> instead of the
        smooth-scroll ponyfill. Drag is the same <code>DragDealer</code> pattern
        as the mouse-drag example.
      </p>
      <h2>The trade this page admits to</h2>
      <p>
        The demo rail above is not server-rendered: 5,000 cards serialize to
        roughly a megabyte of HTML, so the rail mounts client-only behind a
        height-matched placeholder and there&rsquo;s no layout shift. That is
        the real bill at this size — the browser handles 5,000 live nodes
        comfortably, but shipping them as SSR payload is a separate decision.
        Somewhere in the tens of thousands of nodes, memory and initial render
        cost catch up too; that&rsquo;s where windowing stops being optional.
      </p>
      <h2>Notes</h2>
      <ul>
        <li>
          The DOM for the 5,000 cards is built once, on mount —{' '}
          <code>React.memo</code> turns later parent renders into no-ops for
          every card.
        </li>
        <li>
          Arrows page roughly a viewport at a time, so crossing the whole rail
          by arrow is slow by design — drag flicks or <code>scrollToItem</code>{' '}
          jumps fit this scale better.
        </li>
        <li>
          The arrows still run on <code>useIsVisible(&apos;first&apos;)</code>{' '}
          and <code>useIsVisible(&apos;last&apos;)</code> — the same observer
          mechanism as a ten-item menu, at 500x the item count.
        </li>
      </ul>
    </ExamplePage>
  );
}
