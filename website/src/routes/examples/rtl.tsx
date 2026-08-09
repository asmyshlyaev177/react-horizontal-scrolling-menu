import { createFileRoute } from '@tanstack/react-router';
import { code, html } from 'virtual:example-code/rtl';

import { RTLDemo } from '../../components/demos/RTLDemo';
import { ExamplePage } from '../../components/ExamplePage';
import { pageHead } from '../../lib/seo';

export const Route = createFileRoute('/examples/rtl')({
  head: () =>
    pageHead({
      path: '/examples/rtl',
      title: 'React horizontal scroll RTL: a right-to-left menu',
      description:
        'A right-to-left horizontal scrolling menu in React: the RTL prop flips the scroll direction and paging, and the arrows swap sides. Live demo and full source.',
    }),
  component: Page,
});

function Page() {
  return (
    <ExamplePage
      slug="rtl"
      title="A right-to-left horizontal menu"
      lede={
        <>
          For Arabic or Hebrew interfaces the row has to start at the right edge
          and grow leftward. One boolean prop flips the scroll container; the
          only real work left for you is deciding what the arrows mean when
          &ldquo;next&rdquo; points left.
        </>
      }
      demo={<RTLDemo />}
      demoHint="Flip the switch — the row restarts from the opposite edge and the arrows trade roles."
      code={{ code, html }}
      codeTitle="RTL.source.tsx"
      related={['vertical', 'simple', 'bottom-arrows']}
    >
      <h2>How it works</h2>
      <p>
        <code>{'RTL={true}'}</code> puts the scroll container into right-to-left
        mode: the first item sits at the right edge and scrolling advances
        leftward. Everything logical stays logical —{' '}
        <code>useIsVisible(’first’)</code> still means the first item in your
        data, <code>scrollNext()</code> still moves toward the last — only the
        on-screen direction flips.
      </p>
      <h2>Arrows swap slots, not logic</h2>
      <p>
        The <code>LeftArrow</code> prop always renders on the left side of the
        screen. In RTL that side is where &ldquo;next&rdquo; lives, so the story
        feeds the slots swapped elements:{' '}
        <code>{'LeftArrow={RTL ? <RightArrow /> : <LeftArrow />}'}</code>. The
        components themselves keep their logic — the one wired to{' '}
        <code>scrollPrev</code> still disables via{' '}
        <code>useIsVisible(’first’)</code> — only their screen position and
        label change.
      </p>
      <h2>Notes</h2>
      <ul>
        <li>
          The story passes <code>{'noPolyfill={true}'}</code>, so programmatic
          scrolls use the browser&rsquo;s native smooth scrolling instead of the
          bundled polyfill.
        </li>
        <li>
          <code>scrollPrev(’smooth’, ’end’)</code> and{' '}
          <code>scrollNext(’smooth’, ’start’)</code> pass an explicit alignment
          — the second argument is the same <code>start/center/end</code> set
          that <code>scrollToItem</code> takes.
        </li>
        <li>
          The story toggles <code>RTL</code> live from a checkbox — the prop is
          just state, nothing about the menu is configured at build time.
        </li>
      </ul>
    </ExamplePage>
  );
}
