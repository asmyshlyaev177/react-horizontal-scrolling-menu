import { code, html } from 'virtual:example-code/simple';

import { QuickStartDemo } from '../../components/demos/QuickStartDemo';
import { ExamplePage } from '../../components/ExamplePage';
import type { ExampleCopy } from '../../content/types';
import { Inline, ProseSections } from '../../lib/prose';

/**
 * The simple example page, independent of which language it renders in.
 *
 * Two routes mount this: `/examples/simple` for English and
 * `/$locale/examples/simple` for the eight translations. The demo, the source
 * listing and the related-example slugs are the same in every language; only
 * `copy` differs, so it is the only thing that arrives as a prop.
 */
export function View({ copy, locale }: { copy: ExampleCopy; locale: string }) {
  return (
    <ExamplePage
      locale={locale}
      slug="simple"
      title={copy.title}
      lede={<Inline text={copy.lede} />}
      demo={<QuickStartDemo />}
      demoHint={copy.demoHint ? <Inline text={copy.demoHint} /> : undefined}
      code={{ code, html }}
      codeTitle="Simple.source.tsx"
      related={['one-item-scroll', 'center-on-click', 'mouse-drag']}
    >
      <ProseSections sections={copy.prose} />
    </ExamplePage>
  );
}
