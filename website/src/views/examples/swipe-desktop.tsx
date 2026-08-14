import { code, html } from 'virtual:example-code/swipe-desktop';

import { SwipeDesktopDemo } from '../../components/demos/SwipeDesktopDemo';
import { ExamplePage } from '../../components/ExamplePage';
import type { ExampleCopy } from '../../content/types';
import { Inline, ProseSections } from '../../lib/prose';

/**
 * The swipe-desktop example page, independent of which language it renders in.
 *
 * Two routes mount this: `/examples/swipe-desktop` for English and
 * `/$locale/examples/swipe-desktop` for the eight translations. The demo, the source
 * listing and the related-example slugs are the same in every language; only
 * `copy` differs, so it is the only thing that arrives as a prop.
 */
export function View({ copy, locale }: { copy: ExampleCopy; locale: string }) {
  return (
    <ExamplePage
      locale={locale}
      slug="swipe-desktop"
      title={copy.title}
      lede={<Inline text={copy.lede} />}
      demo={<SwipeDesktopDemo />}
      demoHint={copy.demoHint ? <Inline text={copy.demoHint} /> : undefined}
      code={{ code, html }}
      codeTitle="SwipeDesktop.source.tsx"
      related={['mouse-drag', 'mobile-swipe-only', 'infinite-loop']}
    >
      <ProseSections sections={copy.prose} />
    </ExamplePage>
  );
}
