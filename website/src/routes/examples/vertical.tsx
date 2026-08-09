import { createFileRoute } from '@tanstack/react-router';
import { code, html } from 'virtual:example-code/vertical';

import { VerticalDemo } from '../../components/demos/VerticalDemo';
import { ExamplePage } from '../../components/ExamplePage';
import { pageHead } from '../../lib/seo';

export const Route = createFileRoute('/examples/vertical')({
  head: () =>
    pageHead({
      path: '/examples/vertical',
      title: 'React vertical scrolling menu with arrows',
      description:
        'Make react-horizontal-scrolling-menu vertical: flex-column scroll container, bounded height, arrows above and below via Header/Footer. Live demo and source.',
    }),
  component: Page,
});

function Page() {
  return (
    <ExamplePage
      slug="vertical"
      title="A vertical scrolling menu — the same component, turned by CSS"
      lede={
        <>
          There is no <code>vertical</code> prop, and none is needed: the menu
          is a flex row inside a native scroll container, so pointing it
          downward is a couple of CSS overrides. Visibility tracking, the arrow
          hooks and <code>scrollPrev</code>/<code>scrollNext</code> all keep
          working on the new axis.
        </>
      }
      demo={<VerticalDemo />}
      demoHint="Wheel over the column or use the arrows — Up and Down are ScrollMenu's Header and Footer. Rows dim as they leave the view."
      code={{ code, html }}
      codeTitle="Vertical.source.tsx"
      related={['rtl', 'simple', 'bottom-arrows']}
    >
      <h2>Two overrides and one height bound</h2>
      <p>
        The story restyles two library class names. The scroll container gets{' '}
        <code>flex-direction: column</code>, <code>overflow-y: auto</code> and{' '}
        <code>height: initial</code> in place of the default{' '}
        <code>max-content</code>; the wrapper gets <code>height: 100%</code>, so
        whatever fixed height the parent has becomes the scrolling bound.
        That&rsquo;s the entire vertical mode. The story applies the overrides
        with emotion; the demo on this page passes Tailwind utilities through
        the <code>wrapperClassName</code> and{' '}
        <code>scrollContainerClassName</code> props instead — any styling route
        works, the class names are stable.
      </p>
      <h2>Arrows become Header and Footer</h2>
      <p>
        The <code>LeftArrow</code>/<code>RightArrow</code> slots render beside
        the rail — the wrong place for a column. <code>ScrollMenu</code> also
        accepts <code>Header</code> and <code>Footer</code> components rendered
        above and below, and the story mounts its Up and Down buttons there.
        They&rsquo;re ordinary <code>VisibilityContext</code> consumers:{' '}
        <code>useIsVisible(&apos;first&apos;, true)</code> disables Up at the
        top, <code>useIsVisible(&apos;last&apos;, false)</code> disables Down at
        the bottom. The clicks pass a third argument —{' '}
        <code>scrollPrev(undefined, undefined, &apos;end&apos;)</code> and{' '}
        <code>scrollNext(undefined, undefined, &apos;start&apos;)</code> — the{' '}
        <code>block</code> position for <code>scrollIntoView</code>.{' '}
        <code>&apos;end&apos;</code> drops the previous item at the bottom edge
        (a full page up); <code>&apos;start&apos;</code> puts the next item at
        the top (a full page down). With the default{' '}
        <code>&apos;nearest&apos;</code>, each click would only nudge the next
        row into view.
      </p>
      <h2>Visibility has no axis</h2>
      <p>
        <code>useIsVisible</code> is IntersectionObserver-backed, and
        intersection is measured in both dimensions — rows report their state as
        they cross the top and bottom edges exactly the way horizontal items do
        at the sides. The demo dims out-of-view rows to show it, with the first
        four server-painted visible via the hook&rsquo;s{' '}
        <code>defaultValue</code> argument.
      </p>
      <h2>Notes</h2>
      <ul>
        <li>
          The only fixed dimension is the panel&rsquo;s inline height; the
          wrapper&rsquo;s <code>height: 100%</code> carries it down to the
          scroll container.
        </li>
        <li>
          Wheel and touch scroll the column natively —{' '}
          <code>overflow-y: auto</code> makes it a real scroll container; the
          arrows are convenience, not mechanism.
        </li>
        <li>
          The second argument of <code>scrollPrev</code>/<code>scrollNext</code>{' '}
          is the <code>inline</code> (horizontal) position — vertical menus care
          about <code>block</code>, which is why the story passes it explicitly.
        </li>
      </ul>
    </ExamplePage>
  );
}
