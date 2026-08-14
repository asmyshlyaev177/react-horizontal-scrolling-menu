import { code, html } from 'virtual:example-code/bottom-arrows';

import { BottomArrowsDemo } from '../../components/demos/BottomArrowsDemo';
import { ExamplePage } from '../../components/ExamplePage';
import type { ExampleCopy } from '../../content/types';
import { Inline, ProseSections } from '../../lib/prose';

/**
 * The bottom-arrows example page, independent of which language it renders in.
 *
 * Two routes mount this: `/examples/bottom-arrows` for English and
 * `/$locale/examples/bottom-arrows` for the eight translations. The demo, the source
 * listing and the related-example slugs are the same in every language; only
 * `copy` differs, so it is the only thing that arrives as a prop.
 */
export function View({ copy, locale }: { copy: ExampleCopy; locale: string }) {
  return (
    <ExamplePage
      locale={locale}
      slug="bottom-arrows"
      title={copy.title}
      lede={<Inline text={copy.lede} />}
      demo={<BottomArrowsDemo />}
      demoHint={copy.demoHint && <Inline text={copy.demoHint} />}
      code={{ code, html }}
      codeTitle="BottomArrows.source.tsx"
      related={['simple', 'mobile-swipe-only', 'progress']}
    >
      <ProseSections sections={copy.prose} />
    </ExamplePage>
  );
}
