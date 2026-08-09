import { createFileRoute } from '@tanstack/react-router';
import { code, html } from 'virtual:example-code/progress';

import { ProgressDemo } from '../../components/demos/ProgressDemo';
import { ExamplePage } from '../../components/ExamplePage';
import { pageHead } from '../../lib/seo';

export const Route = createFileRoute('/examples/progress')({
  head: () =>
    pageHead({
      path: '/examples/progress',
      title: 'React horizontal scroll progress indicator for a carousel',
      description:
        'A progress bar for a horizontal React menu: subscribe to onUpdate, count visible items, derive the current page. Live demo and complete story source.',
    }),
  component: Page,
});

function Page() {
  return (
    <ExamplePage
      slug="progress"
      title="Add a scroll progress indicator to a horizontal menu"
      lede={
        <>
          A carousel that hides its scrollbar still owes the user an answer to
          &ldquo;how much is left?&rdquo;. The menu already knows: it tracks
          every item&rsquo;s visibility, so position is a matter of counting.
          The story renders numbered page buttons plus items-left/right counts
          from that data; this demo distills the same math into a progress bar.
        </>
      }
      demo={<ProgressDemo />}
      demoHint="Scroll the row, drag it, or use the arrows — the bar fills page by page and the counter shows where you are."
      code={{ code, html }}
      codeTitle="Progress.source.tsx"
      related={['bottom-arrows', 'simple', 'add-items']}
    >
      <h2>How it works</h2>
      <p>
        The indicator is passed as the <code>Footer</code> prop, so{' '}
        <code>ScrollMenu</code> renders it inside the menu where{' '}
        <code>VisibilityContext</code> is available. From the context it takes{' '}
        <code>items</code> — the map behind visibility tracking — and subscribes
        with <code>items.subscribe(’onUpdate’, cb)</code>. That event fires on
        every IntersectionObserver callback, so the story debounces it (a
        timeout plus <code>requestAnimationFrame</code>) before reading{' '}
        <code>items.getVisible()</code>.
      </p>
      <h2>From visible items to a page number</h2>
      <p>
        The count of visible items is the page size. Total pages is{' '}
        <code>Math.ceil(items.size / visibleItemsLen)</code>; the current page
        comes from the last visible entry&rsquo;s <code>index</code>. The story
        turns those into clickable page buttons — each one calls{' '}
        <code>scrollToItem(getItemByIndex(itemInd))</code>, addressing an item
        by position without knowing its id — and derives items-on-the-left and
        items-on-the-right counts from the same numbers. The demo&rsquo;s bar is
        just <code>currentPage / totalPages</code> as a width percentage.
      </p>
      <h2>Notes</h2>
      <ul>
        <li>
          Nothing is measured in pixels — the math runs entirely on visibility
          data, so it keeps working when item widths differ.
        </li>
        <li>
          Resize the viewport and the page size follows: more items fit,{' '}
          <code>getVisible()</code> returns more entries, and the page count
          recomputes on the next update.
        </li>
        <li>
          The effect returns a cleanup that calls <code>items.unsubscribe</code>{' '}
          and clears the pending timer — skip it and an unmounted footer keeps
          getting called.
        </li>
        <li>
          Before the first observer report <code>getVisible()</code> is empty;
          the story returns <code>null</code> until then, and the demo paints an
          empty track.
        </li>
      </ul>
    </ExamplePage>
  );
}
