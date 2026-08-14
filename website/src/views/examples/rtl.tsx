import { code, html } from 'virtual:example-code/rtl';

import { RTLDemo } from '../../components/demos/RTLDemo';
import { ExamplePage } from '../../components/ExamplePage';
import type { ExampleCopy } from '../../content/types';
import { Inline, ProseSections } from '../../lib/prose';

/**
 * The rtl example page, independent of which language it renders in.
 *
 * Two routes mount this: `/examples/rtl` for English and
 * `/$locale/examples/rtl` for the eight translations. The demo, the source
 * listing and the related-example slugs are the same in every language; only
 * `copy` differs, so it is the only thing that arrives as a prop.
 */
export function View({ copy, locale }: { copy: ExampleCopy; locale: string }) {
  return (
    <ExamplePage
      locale={locale}
      slug="rtl"
      title={copy.title}
      lede={<Inline text={copy.lede} />}
      demo={<RTLDemo />}
      demoHint={copy.demoHint ? <Inline text={copy.demoHint} /> : undefined}
      code={{ code, html }}
      codeTitle="RTL.source.tsx"
      related={['vertical', 'simple', 'bottom-arrows']}
    >
      <ProseSections sections={copy.prose} />
    </ExamplePage>
  );
}
