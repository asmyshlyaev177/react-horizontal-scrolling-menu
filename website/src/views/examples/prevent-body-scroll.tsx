import { code, html } from 'virtual:example-code/prevent-body-scroll';

import { PreventBodyScrollDemo } from '../../components/demos/PreventBodyScrollDemo';
import { ExamplePage } from '../../components/ExamplePage';
import type { ExampleCopy } from '../../content/types';
import { Inline, ProseSections } from '../../lib/prose';

/**
 * The prevent-body-scroll example page, independent of which language it renders in.
 *
 * Two routes mount this: `/examples/prevent-body-scroll` for English and
 * `/$locale/examples/prevent-body-scroll` for the eight translations. The demo, the source
 * listing and the related-example slugs are the same in every language; only
 * `copy` differs, so it is the only thing that arrives as a prop.
 */
export function View({ copy, locale }: { copy: ExampleCopy; locale: string }) {
  return (
    <ExamplePage
      locale={locale}
      slug="prevent-body-scroll"
      title={copy.title}
      lede={<Inline text={copy.lede} />}
      demo={<PreventBodyScrollDemo />}
      demoHint={copy.demoHint && <Inline text={copy.demoHint} />}
      code={{ code, html }}
      codeTitle="PreventBodyScroll.source.tsx"
      related={['mouse-drag', 'swipe-desktop', 'simple']}
    >
      <ProseSections sections={copy.prose} />
    </ExamplePage>
  );
}
