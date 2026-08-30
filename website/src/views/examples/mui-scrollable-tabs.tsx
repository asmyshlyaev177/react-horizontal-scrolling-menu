import { code, html } from 'virtual:example-code/mui-scrollable-tabs';

import { MuiTabsDemo } from '../../components/demos/MuiTabsDemo';
import { ExamplePage } from '../../components/ExamplePage';
import type { ExampleCopy } from '../../content/types';
import { Inline, ProseSections } from '../../lib/prose';

/**
 * The MUI-flank recipe page: a tab strip that keeps Material's
 * value/onChange contract while scrolling natively.
 *
 * Two routes mount this: `/examples/mui-scrollable-tabs` for English and
 * `/$locale/examples/mui-scrollable-tabs` for the eight translations.
 */
export function View({ copy, locale }: { copy: ExampleCopy; locale: string }) {
  return (
    <ExamplePage
      locale={locale}
      slug="mui-scrollable-tabs"
      title={copy.title}
      lede={<Inline text={copy.lede} />}
      demo={<MuiTabsDemo />}
      demoHint={copy.demoHint ? <Inline text={copy.demoHint} /> : undefined}
      code={{ code, html }}
      codeTitle="MuiTabs.source.tsx"
      related={['center-on-click', 'mouse-drag', 'save-restore-position']}
    >
      <ProseSections sections={copy.prose} />
    </ExamplePage>
  );
}
