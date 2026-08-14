import { code, html } from 'virtual:example-code/one-item';

import { OneItemDemo } from '../../components/demos/OneItemDemo';
import { ExamplePage } from '../../components/ExamplePage';
import type { ExampleCopy } from '../../content/types';
import { Inline, ProseSections } from '../../lib/prose';

/**
 * The one-item example page, independent of which language it renders in.
 *
 * Two routes mount this: `/examples/one-item` for English and
 * `/$locale/examples/one-item` for the eight translations. The demo, the source
 * listing and the related-example slugs are the same in every language; only
 * `copy` differs, so it is the only thing that arrives as a prop.
 */
export function View({ copy, locale }: { copy: ExampleCopy; locale: string }) {
  return (
    <ExamplePage
      locale={locale}
      slug="one-item"
      title={copy.title}
      lede={<Inline text={copy.lede} />}
      demo={<OneItemDemo />}
      demoHint={copy.demoHint}
      code={{ code, html }}
      codeTitle="OneItem.source.tsx"
      related={['one-item-scroll', 'simple', 'custom-transition']}
    >
      <ProseSections sections={copy.prose} />
    </ExamplePage>
  );
}
