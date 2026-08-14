import { code, html } from 'virtual:example-code/scroll-to-item';

import { ScrollToItemDemo } from '../../components/demos/ScrollToItemDemo';
import { ExamplePage } from '../../components/ExamplePage';
import type { ExampleCopy } from '../../content/types';
import { Inline, ProseSections } from '../../lib/prose';

/**
 * The scroll-to-item example page, independent of which language it renders in.
 *
 * Two routes mount this: `/examples/scroll-to-item` for English and
 * `/$locale/examples/scroll-to-item` for the eight translations. The demo, the source
 * listing and the related-example slugs are the same in every language; only
 * `copy` differs, so it is the only thing that arrives as a prop.
 */
export function View({ copy, locale }: { copy: ExampleCopy; locale: string }) {
  return (
    <ExamplePage
      locale={locale}
      slug="scroll-to-item"
      title={copy.title}
      lede={<Inline text={copy.lede} />}
      demo={<ScrollToItemDemo />}
      demoHint={copy.demoHint}
      code={{ code, html }}
      codeTitle="ScrollToItem.source.tsx"
      related={[
        'center-on-click',
        'save-restore-position',
        'add-item-and-scroll-to-it',
      ]}
    >
      <ProseSections sections={copy.prose} />
    </ExamplePage>
  );
}
