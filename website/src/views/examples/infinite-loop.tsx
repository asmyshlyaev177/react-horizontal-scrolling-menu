import { code, html } from 'virtual:example-code/infinite-loop';

import { InfiniteLoopDemo } from '../../components/demos/InfiniteLoopDemo';
import { ExamplePage } from '../../components/ExamplePage';
import type { ExampleCopy } from '../../content/types';
import { Inline, ProseSections } from '../../lib/prose';

/**
 * The infinite-loop example page, independent of which language it renders in.
 *
 * Two routes mount this: `/examples/infinite-loop` for English and
 * `/$locale/examples/infinite-loop` for the eight translations. The demo, the source
 * listing and the related-example slugs are the same in every language; only
 * `copy` differs, so it is the only thing that arrives as a prop.
 */
export function View({ copy, locale }: { copy: ExampleCopy; locale: string }) {
  return (
    <ExamplePage
      locale={locale}
      slug="infinite-loop"
      title={copy.title}
      lede={<Inline text={copy.lede} />}
      demo={<InfiniteLoopDemo />}
      demoHint={copy.demoHint ? <Inline text={copy.demoHint} /> : undefined}
      code={{ code, html }}
      codeTitle="InfiniteLoop.source.tsx"
      related={['autoplay', 'mouse-drag', 'add-items']}
    >
      <ProseSections sections={copy.prose} />
    </ExamplePage>
  );
}
