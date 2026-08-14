import { code, html } from 'virtual:example-code/performance';

import { PerformanceDemo } from '../../components/demos/PerformanceDemo';
import { ExamplePage } from '../../components/ExamplePage';
import type { ExampleCopy } from '../../content/types';
import { Inline, ProseSections } from '../../lib/prose';

/**
 * The performance example page, independent of which language it renders in.
 *
 * Two routes mount this: `/examples/performance` for English and
 * `/$locale/examples/performance` for the eight translations. The demo, the source
 * listing and the related-example slugs are the same in every language; only
 * `copy` differs, so it is the only thing that arrives as a prop.
 */
export function View({ copy, locale }: { copy: ExampleCopy; locale: string }) {
  return (
    <ExamplePage
      locale={locale}
      slug="performance"
      title={copy.title}
      lede={<Inline text={copy.lede} />}
      demo={<PerformanceDemo />}
      demoHint={copy.demoHint}
      code={{ code, html }}
      codeTitle="Performance.source.tsx"
      related={['add-items', 'simple', 'mouse-drag']}
    >
      <ProseSections sections={copy.prose} />
    </ExamplePage>
  );
}
