import { code, html } from 'virtual:example-code/progress';

import { ProgressDemo } from '../../components/demos/ProgressDemo';
import { ExamplePage } from '../../components/ExamplePage';
import type { ExampleCopy } from '../../content/types';
import { Inline, ProseSections } from '../../lib/prose';

/**
 * The progress example page, independent of which language it renders in.
 *
 * Two routes mount this: `/examples/progress` for English and
 * `/$locale/examples/progress` for the eight translations. The demo, the source
 * listing and the related-example slugs are the same in every language; only
 * `copy` differs, so it is the only thing that arrives as a prop.
 */
export function View({ copy, locale }: { copy: ExampleCopy; locale: string }) {
  return (
    <ExamplePage
      locale={locale}
      slug="progress"
      title={copy.title}
      lede={<Inline text={copy.lede} />}
      demo={<ProgressDemo />}
      demoHint={copy.demoHint}
      code={{ code, html }}
      codeTitle="Progress.source.tsx"
      related={['bottom-arrows', 'simple', 'add-items']}
    >
      <ProseSections sections={copy.prose} />
    </ExamplePage>
  );
}
