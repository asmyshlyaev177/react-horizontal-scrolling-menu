import { code, html } from 'virtual:example-code/custom-transition';

import { CustomTransitionDemo } from '../../components/demos/CustomTransitionDemo';
import { ExamplePage } from '../../components/ExamplePage';
import type { ExampleCopy } from '../../content/types';
import { Inline, ProseSections } from '../../lib/prose';

/**
 * The custom-transition example page, independent of which language it renders in.
 *
 * Two routes mount this: `/examples/custom-transition` for English and
 * `/$locale/examples/custom-transition` for the eight translations. The demo, the source
 * listing and the related-example slugs are the same in every language; only
 * `copy` differs, so it is the only thing that arrives as a prop.
 */
export function View({ copy, locale }: { copy: ExampleCopy; locale: string }) {
  return (
    <ExamplePage
      locale={locale}
      slug="custom-transition"
      title={copy.title}
      lede={<Inline text={copy.lede} />}
      demo={<CustomTransitionDemo />}
      demoHint={copy.demoHint && <Inline text={copy.demoHint} />}
      code={{ code, html }}
      codeTitle="CustomTransition.source.tsx"
      related={['one-item-scroll', 'center-on-click', 'autoplay']}
    >
      <ProseSections sections={copy.prose} />
    </ExamplePage>
  );
}
