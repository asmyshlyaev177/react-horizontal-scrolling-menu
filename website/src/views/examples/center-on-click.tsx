import { code, html } from 'virtual:example-code/center-on-click';

import { TabsDemo } from '../../components/demos/TabsDemo';
import { ExamplePage } from '../../components/ExamplePage';
import type { ExampleCopy } from '../../content/types';
import { Inline, ProseSections } from '../../lib/prose';

/**
 * The center-on-click example page, independent of which language it renders in.
 *
 * Two routes mount this: `/examples/center-on-click` for English and
 * `/$locale/examples/center-on-click` for the eight translations. The demo, the source
 * listing and the related-example slugs are the same in every language; only
 * `copy` differs, so it is the only thing that arrives as a prop.
 */
export function View({ copy, locale }: { copy: ExampleCopy; locale: string }) {
  return (
    <ExamplePage
      locale={locale}
      slug="center-on-click"
      title={copy.title}
      lede={<Inline text={copy.lede} />}
      demo={<TabsDemo />}
      demoHint={copy.demoHint ? <Inline text={copy.demoHint} /> : undefined}
      code={{ code, html }}
      codeTitle="CenterOnClick.source.tsx"
      related={['scroll-to-item', 'custom-transition', 'simple']}
    >
      <ProseSections sections={copy.prose} />
    </ExamplePage>
  );
}
