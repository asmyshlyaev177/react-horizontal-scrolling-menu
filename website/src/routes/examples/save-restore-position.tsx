import { createFileRoute } from '@tanstack/react-router';
import { code, html } from 'virtual:example-code/save-restore-position';

import { SaveRestoreDemo } from '../../components/demos/SaveRestoreDemo';
import { ExamplePage } from '../../components/ExamplePage';
import { pageHead } from '../../lib/seo';

export const Route = createFileRoute('/examples/save-restore-position')({
  head: () =>
    pageHead({
      path: '/examples/save-restore-position',
      title: 'React preserve scroll position: restore on remount or back',
      description:
        'Save the scroll offset to sessionStorage on every onUpdate and restore it in onInit, so the position survives remounts and reloads. Live demo and full source.',
    }),
  component: Page,
});

function Page() {
  return (
    <ExamplePage
      slug="save-restore-position"
      title="Save and restore the scroll position"
      lede={
        <>
          A horizontal rail forgets its offset every time it unmounts: route
          away and back, collapse a section, and it snaps to the start. This
          example saves the offset as the user scrolls and writes it back on
          mount, so the menu reappears exactly where they left it.
        </>
      }
      demo={<SaveRestoreDemo />}
      demoHint="Scroll the row somewhere, unmount the menu, then mount it again — the rail comes back at the same offset."
      code={{ code, html }}
      codeTitle="Position.source.tsx"
      related={['scroll-to-item', 'simple', 'performance']}
    >
      <h2>How it works</h2>
      <p>
        Two callbacks carry the whole feature. <code>onUpdate</code> fires as
        the menu&rsquo;s visibility state changes while the user scrolls;{' '}
        <code>savePos</code> reads{' '}
        <code>api.scrollContainer.current.scrollLeft</code> and writes it to{' '}
        <code>sessionStorage</code>. On the next mount, <code>onInit</code>{' '}
        assigns the saved value straight back to <code>scrollLeft</code> — a
        plain property write, so the restore is instant rather than an animation
        replaying in front of the user.
      </p>
      <h2>Surviving remounts, reloads and back navigation</h2>
      <p>
        <code>sessionStorage</code> outlives the component: client-side route
        changes, conditional renders and full page reloads all come back to the
        saved offset, and the value is per-tab, so two tabs don&rsquo;t
        overwrite each other. For history navigation the story also sets{' '}
        <code>window.history.scrollRestoration = ’manual’</code>, keeping the
        browser&rsquo;s own scroll restoration from fighting the manual one on
        back and forward.
      </p>
      <h2>Notes</h2>
      <ul>
        <li>
          Restoring by raw <code>scrollLeft</code> is pixel-exact and
          doesn&rsquo;t care which items exist — no ids to remember, nothing to
          look up.
        </li>
        <li>
          The story&rsquo;s Reload button swaps the menu&rsquo;s{' '}
          <code>key</code> to force a remount; the demo&rsquo;s unmount/remount
          toggle is the same test made explicit.
        </li>
        <li>
          Reset just removes the storage key — the next mount starts from zero
          like a first visit.
        </li>
      </ul>
    </ExamplePage>
  );
}
