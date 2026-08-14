import { code, html } from 'virtual:example-code/mouse-drag';

import { MouseDragDemo } from '../../components/demos/MouseDragDemo';
import { ExamplePage } from '../../components/ExamplePage';
import type { ExampleCopy } from '../../content/types';
import { Inline, ProseSections } from '../../lib/prose';

/**
 * The mouse-drag example page, independent of which language it renders in.
 *
 * Two routes mount this: `/examples/mouse-drag` for English and
 * `/$locale/examples/mouse-drag` for the eight translations. The demo, the source
 * listing and the related-example slugs are the same in every language; only
 * `copy` differs, so it is the only thing that arrives as a prop.
 */
export function View({ copy, locale }: { copy: ExampleCopy; locale: string }) {
  return (
    <ExamplePage
      locale={locale}
      slug="mouse-drag"
      title={copy.title}
      lede={<Inline text={copy.lede} />}
      demo={<MouseDragDemo />}
      demoHint={copy.demoHint && <Inline text={copy.demoHint} />}
      code={{ code, html }}
      codeTitle="MouseDrag.source.tsx"
      related={['swipe-desktop', 'mobile-swipe-only', 'infinite-loop']}
    >
      <ProseSections sections={copy.prose} />
    </ExamplePage>
  );
}
