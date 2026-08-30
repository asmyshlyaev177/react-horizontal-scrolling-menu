import { NetflixRowDemo } from '../../components/demos/NetflixRowDemo';
import { UseCasePage } from '../../components/UseCasePage';
import type { UseCaseCopy } from '../../content/types';

export function View({ copy, locale }: { copy: UseCaseCopy; locale: string }) {
  return (
    <UseCasePage
      locale={locale}
      path="/netflix-row"
      copy={copy}
      demo={<NetflixRowDemo />}
      snippet="netflixRow"
      snippetTitle="MediaRow.tsx"
      shadcnSnippet="shadcnMediaRow"
      storyKey="mouseDrag"
      related={['mouse-drag', 'infinite-loop', 'performance']}
    />
  );
}
