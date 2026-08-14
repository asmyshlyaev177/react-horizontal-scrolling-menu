import { code, html } from 'virtual:example-code/one-item-scroll';

import { OneItemScrollDemo } from '../../components/demos/OneItemScrollDemo';
import { ExamplePage } from '../../components/ExamplePage';
import type { ExampleCopy } from '../../content/types';
import { Inline, ProseSections } from '../../lib/prose';

/**
 * The one-item-scroll example page, independent of which language it renders in.
 *
 * Two routes mount this: `/examples/one-item-scroll` for English and
 * `/$locale/examples/one-item-scroll` for the eight translations. The demo, the source
 * listing and the related-example slugs are the same in every language; only
 * `copy` differs, so it is the only thing that arrives as a prop.
 */
export function View({ copy, locale }: { copy: ExampleCopy; locale: string }) {
  return (
    <ExamplePage
      locale={locale}
      slug="one-item-scroll"
      title={copy.title}
      lede={<Inline text={copy.lede} />}
      demo={<OneItemScrollDemo />}
      demoHint={copy.demoHint && <Inline text={copy.demoHint} />}
      code={{ code, html }}
      codeTitle="OneItemScroll.source.tsx"
      related={['one-item', 'custom-transition', 'center-on-click']}
    >
      <ProseSections sections={copy.prose} />
    </ExamplePage>
  );
}
