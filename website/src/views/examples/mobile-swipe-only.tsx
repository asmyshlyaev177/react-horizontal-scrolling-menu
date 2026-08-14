import { code, html } from 'virtual:example-code/mobile-swipe-only';

import { MobileSwipeOnlyDemo } from '../../components/demos/MobileSwipeOnlyDemo';
import { ExamplePage } from '../../components/ExamplePage';
import type { ExampleCopy } from '../../content/types';
import { Inline, ProseSections } from '../../lib/prose';

/**
 * The mobile-swipe-only example page, independent of which language it renders in.
 *
 * Two routes mount this: `/examples/mobile-swipe-only` for English and
 * `/$locale/examples/mobile-swipe-only` for the eight translations. The demo, the source
 * listing and the related-example slugs are the same in every language; only
 * `copy` differs, so it is the only thing that arrives as a prop.
 */
export function View({ copy, locale }: { copy: ExampleCopy; locale: string }) {
  return (
    <ExamplePage
      locale={locale}
      slug="mobile-swipe-only"
      title={copy.title}
      lede={<Inline text={copy.lede} />}
      demo={<MobileSwipeOnlyDemo />}
      demoHint={copy.demoHint ? <Inline text={copy.demoHint} /> : undefined}
      code={{ code, html }}
      codeTitle="MobileSwipeOnly.source.tsx"
      related={['swipe-desktop', 'mouse-drag', 'bottom-arrows']}
    >
      <ProseSections sections={copy.prose} />
    </ExamplePage>
  );
}
