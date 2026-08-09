import { createFileRoute } from '@tanstack/react-router';
import { code, html } from 'virtual:example-code/custom-transition';

import { CustomTransitionDemo } from '../../components/demos/CustomTransitionDemo';
import { ExamplePage } from '../../components/ExamplePage';
import { pageHead } from '../../lib/seo';

export const Route = createFileRoute('/examples/custom-transition')({
  head: () =>
    pageHead({
      path: '/examples/custom-transition',
      title: 'Custom scroll animation in React: easing and duration',
      description:
        'Custom easing and duration for programmatic scrolls in React: transitionBehavior hands you the target position and you animate scrollLeft. Live demo and source.',
    }),
  component: Page,
});

function Page() {
  return (
    <ExamplePage
      slug="custom-transition"
      title="Custom scroll animation: your own easing and duration"
      lede={
        <>
          Native smooth scrolling gives you one speed and one curve, chosen by
          the browser. When a programmatic scroll should match the rest of your
          motion design, <code>noPolyfill=&#123;false&#125;</code> lets you take
          over — the menu computes where the rail needs to go, and your code
          drives <code>scrollLeft</code> there.
        </>
      }
      demo={<CustomTransitionDemo />}
      demoHint="Click the arrows and switch the duration — at 2500 ms the ease-in-out-cubic curve is easy to see. A click mid-animation cancels the previous one."
      code={{ code, html }}
      codeTitle="CustomTransition.source.tsx"
      related={['one-item-scroll', 'center-on-click', 'autoplay']}
    >
      <h2>How it works</h2>
      <p>
        By default the menu scrolls with the native <code>scrollIntoView</code>{' '}
        and ignores both transition props. Setting{' '}
        <code>noPolyfill=&#123;false&#125;</code> routes programmatic scrolls
        through the scroll-into-view-if-needed polyfill instead, which computes
        the target and hands it to your <code>transitionBehavior</code> as
        instructions: one <code>&#123; el, top, left &#125;</code> action per
        scrollable ancestor that has to move — here always just the scroll
        container, because the menu passes it as the boundary. From there,{' '}
        <code>animateScroll</code> steps <code>el.scrollLeft</code> toward the
        target on every <code>requestAnimationFrame</code>, mapping progress
        through <code>easeInOutCubic</code> over the chosen duration.
      </p>
      <h2>Interrupting an animation in flight</h2>
      <p>
        A second arrow click can land mid-animation. The story keeps the pending
        frame per element in a <code>WeakMap</code>, so a new call cancels the
        old <code>requestAnimationFrame</code> loop instead of letting two of
        them fight over <code>scrollLeft</code>. And because each animation
        reads its starting point from the element&rsquo;s current{' '}
        <code>scrollLeft</code>, the new one picks up exactly where the
        interrupted one stopped.
      </p>
      <h2>Notes</h2>
      <ul>
        <li>
          Nothing here is tied to the easing function — any curve or animation
          library works once you have the target position.
        </li>
        <li>
          The typings describe <code>transitionBehavior</code> as a{' '}
          <code>ScrollBehavior</code> string, but the value goes straight to
          scroll-into-view-if-needed as its <code>behavior</code> callback —
          hence the cast in the source.
        </li>
        <li>
          The story wires the same duration state into{' '}
          <code>transitionDuration</code> and into the animation itself, so the
          two can&rsquo;t drift apart.
        </li>
      </ul>
    </ExamplePage>
  );
}
