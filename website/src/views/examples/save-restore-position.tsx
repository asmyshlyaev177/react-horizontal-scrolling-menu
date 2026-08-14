import { code, html } from 'virtual:example-code/save-restore-position';

import { SaveRestoreDemo } from '../../components/demos/SaveRestoreDemo';
import { ExamplePage } from '../../components/ExamplePage';
import type { ExampleCopy } from '../../content/types';
import { Inline, ProseSections } from '../../lib/prose';

/**
 * The save-restore-position example page, independent of which language it renders in.
 *
 * Two routes mount this: `/examples/save-restore-position` for English and
 * `/$locale/examples/save-restore-position` for the eight translations. The demo, the source
 * listing and the related-example slugs are the same in every language; only
 * `copy` differs, so it is the only thing that arrives as a prop.
 */
export function View({ copy, locale }: { copy: ExampleCopy; locale: string }) {
  return (
    <ExamplePage
      locale={locale}
      slug="save-restore-position"
      title={copy.title}
      lede={<Inline text={copy.lede} />}
      demo={<SaveRestoreDemo />}
      demoHint={copy.demoHint && <Inline text={copy.demoHint} />}
      code={{ code, html }}
      codeTitle="Position.source.tsx"
      related={['scroll-to-item', 'simple', 'performance']}
    >
      <ProseSections sections={copy.prose} />
    </ExamplePage>
  );
}
