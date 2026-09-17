import { code, html } from 'virtual:example-code/scroll-snap';

import { ScrollSnapDemo } from '../../components/demos/ScrollSnapDemo';
import { ExamplePage } from '../../components/ExamplePage';
import type { ExampleCopy } from '../../content/types';
import { Inline, ProseSections } from '../../lib/prose';

/**
 * The scroll-snap recipe page: a snapping card carousel whose snap and fan
 * are CSS, on native scrolling.
 *
 * Two routes mount this: `/examples/scroll-snap` for English and
 * `/$locale/examples/scroll-snap` for the eight translations.
 */
export function View({ copy, locale }: { copy: ExampleCopy; locale: string }) {
  return (
    <ExamplePage
      locale={locale}
      slug="scroll-snap"
      title={copy.title}
      lede={<Inline text={copy.lede} />}
      demo={<ScrollSnapDemo />}
      demoHint={copy.demoHint ? <Inline text={copy.demoHint} /> : undefined}
      code={{ code, html }}
      codeTitle="ScrollSnap.source.tsx"
      related={['infinite-loop', 'autoplay', 'mouse-drag']}
    >
      <ProseSections sections={copy.prose} />
    </ExamplePage>
  );
}
