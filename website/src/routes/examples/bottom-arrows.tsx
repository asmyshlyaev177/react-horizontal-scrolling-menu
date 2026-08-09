import { createFileRoute } from '@tanstack/react-router';
import { code, html } from 'virtual:example-code/bottom-arrows';

import { BottomArrowsDemo } from '../../components/demos/BottomArrowsDemo';
import { ExamplePage } from '../../components/ExamplePage';
import { pageHead } from '../../lib/seo';

export const Route = createFileRoute('/examples/bottom-arrows')({
  head: () =>
    pageHead({
      path: '/examples/bottom-arrows',
      title: 'Carousel arrows below the menu: custom placement in React',
      description:
        'Place carousel arrows below the row in React: the ScrollMenu Footer prop renders any layout under the menu, arrows included. Live demo and full source.',
    }),
  component: Page,
});

function Page() {
  return (
    <ExamplePage
      slug="bottom-arrows"
      title="Put the arrows below the menu — or anywhere in your layout"
      lede={
        <>
          Arrows aren&rsquo;t built-in chrome — they&rsquo;re components you
          pass in, so placement is a layout decision, not a library setting.
          This example passes no <code>LeftArrow</code> or{' '}
          <code>RightArrow</code> at all and renders both buttons in the{' '}
          <code>Footer</code> slot under the row, next to ordinary content.
        </>
      }
      demo={<BottomArrowsDemo />}
      demoHint="The arrows sit under the row — they read the same VisibilityContext, so they still disable at the ends."
      code={{ code, html }}
      codeTitle="BottomArrows.source.tsx"
      related={['simple', 'mobile-swipe-only', 'progress']}
    >
      <h2>How it works</h2>
      <p>
        <code>ScrollMenu</code> accepts a <code>Footer</code> component and
        renders it below the scroll container, inside the same{' '}
        <code>VisibilityContext.Provider</code> as the items. The story&rsquo;s
        footer is a plain flex div holding some text and the two arrow buttons.
        Because context reaches it, each button calls{' '}
        <code>React.useContext(VisibilityContext)</code> and gets exactly the
        API it would get in the side slots — nothing about the arrows themselves
        changes.
      </p>
      <h2>Arrow state, same as ever</h2>
      <p>
        <code>useLeftArrowVisible()</code> and{' '}
        <code>useRightArrowVisible()</code> report whether the row already sits
        at that end; the story maps the result to <code>disabled</code> and
        fades the button out. Clicks call <code>scrollPrev()</code> and{' '}
        <code>scrollNext()</code>. None of this knows or cares where the button
        is mounted.
      </p>
      <h2>Notes</h2>
      <ul>
        <li>
          <code>Header</code> is the mirror slot above the row, with the same
          contract.
        </li>
        <li>
          The side <code>LeftArrow</code>/<code>RightArrow</code> props are just
          the pre-positioned variants — the same arrow components work in either
          spot.
        </li>
        <li>
          The footer isn&rsquo;t arrows-only: any component that reads{' '}
          <code>VisibilityContext</code> has the full API there.
        </li>
        <li>
          The story&rsquo;s <code>onWheel</code> handler pages by mouse wheel
          and leaves touchpad gestures to native scrolling.
        </li>
      </ul>
    </ExamplePage>
  );
}
