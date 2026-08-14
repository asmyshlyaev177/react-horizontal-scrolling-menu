import { code, html } from 'virtual:example-code/items-animation';

import { ItemsAnimationDemo } from '../../components/demos/ItemsAnimationDemo';
import { ExamplePage } from '../../components/ExamplePage';
import type { ExampleCopy } from '../../content/types';
import { Inline, ProseSections } from '../../lib/prose';

/**
 * The items-animation example page, independent of which language it renders in.
 *
 * Two routes mount this: `/examples/items-animation` for English and
 * `/$locale/examples/items-animation` for the eight translations. The demo, the source
 * listing and the related-example slugs are the same in every language; only
 * `copy` differs, so it is the only thing that arrives as a prop.
 */
export function View({ copy, locale }: { copy: ExampleCopy; locale: string }) {
  return (
    <ExamplePage
      locale={locale}
      slug="items-animation"
      title={copy.title}
      lede={<Inline text={copy.lede} />}
      demo={<ItemsAnimationDemo />}
      demoHint={copy.demoHint && <Inline text={copy.demoHint} />}
      code={{ code, html }}
      codeTitle="Items_animation.source.tsx"
      related={['add-item-and-scroll-to-it', 'add-items', 'custom-transition']}
    >
      <ProseSections sections={copy.prose} />
    </ExamplePage>
  );
}
