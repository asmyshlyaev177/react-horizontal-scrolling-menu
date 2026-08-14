import { code, html } from 'virtual:example-code/add-items';

import { InfiniteDemo } from '../../components/demos/InfiniteDemo';
import { ExamplePage } from '../../components/ExamplePage';
import type { ExampleCopy } from '../../content/types';
import { Inline, ProseSections } from '../../lib/prose';

/**
 * The add-items example page, independent of which language it renders in.
 *
 * Two routes mount this: `/examples/add-items` for English and
 * `/$locale/examples/add-items` for the eight translations. The demo, the source
 * listing and the related-example slugs are the same in every language; only
 * `copy` differs, so it is the only thing that arrives as a prop.
 */
export function View({ copy, locale }: { copy: ExampleCopy; locale: string }) {
  return (
    <ExamplePage
      locale={locale}
      slug="add-items"
      title={copy.title}
      lede={<Inline text={copy.lede} />}
      demo={<InfiniteDemo />}
      demoHint={copy.demoHint ? <Inline text={copy.demoHint} /> : undefined}
      code={{ code, html }}
      codeTitle="AddItems.source.tsx"
      related={['add-item-and-scroll-to-it', 'performance', 'infinite-loop']}
    >
      <ProseSections sections={copy.prose} />
    </ExamplePage>
  );
}
