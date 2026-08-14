import { code, html } from 'virtual:example-code/autoplay';

import { AutoplayDemo } from '../../components/demos/AutoplayDemo';
import { ExamplePage } from '../../components/ExamplePage';
import type { ExampleCopy } from '../../content/types';
import { Inline, ProseSections } from '../../lib/prose';

/**
 * The autoplay example page, independent of which language it renders in.
 *
 * Two routes mount this: `/examples/autoplay` for English and
 * `/$locale/examples/autoplay` for the eight translations. The demo, the source
 * listing and the related-example slugs are the same in every language; only
 * `copy` differs, so it is the only thing that arrives as a prop.
 */
export function View({ copy, locale }: { copy: ExampleCopy; locale: string }) {
  return (
    <ExamplePage
      locale={locale}
      slug="autoplay"
      title={copy.title}
      lede={<Inline text={copy.lede} />}
      demo={<AutoplayDemo />}
      demoHint={copy.demoHint && <Inline text={copy.demoHint} />}
      code={{ code, html }}
      codeTitle="Autoplay.source.tsx"
      related={['infinite-loop', 'mouse-drag', 'mobile-swipe-only']}
    >
      <ProseSections sections={copy.prose} />
    </ExamplePage>
  );
}
