import { code, html } from 'virtual:example-code/add-item-and-scroll-to-it';

import { ChipsDemo } from '../../components/demos/ChipsDemo';
import { ExamplePage } from '../../components/ExamplePage';
import type { ExampleCopy } from '../../content/types';
import { Inline, ProseSections } from '../../lib/prose';

/**
 * The add-item-and-scroll-to-it example page, independent of which language it renders in.
 *
 * Two routes mount this: `/examples/add-item-and-scroll-to-it` for English and
 * `/$locale/examples/add-item-and-scroll-to-it` for the eight translations. The demo, the source
 * listing and the related-example slugs are the same in every language; only
 * `copy` differs, so it is the only thing that arrives as a prop.
 */
export function View({ copy, locale }: { copy: ExampleCopy; locale: string }) {
  return (
    <ExamplePage
      locale={locale}
      slug="add-item-and-scroll-to-it"
      title={copy.title}
      lede={<Inline text={copy.lede} />}
      demo={<ChipsDemo />}
      demoHint={copy.demoHint && <Inline text={copy.demoHint} />}
      code={{ code, html }}
      codeTitle="AddItemAndScrollToIt.source.tsx"
      related={['add-items', 'items-animation', 'scroll-to-item']}
    >
      <ProseSections sections={copy.prose} />
    </ExamplePage>
  );
}
