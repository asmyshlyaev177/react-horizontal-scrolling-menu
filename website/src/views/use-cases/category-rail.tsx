import { CategoryRailDemo } from '../../components/demos/CategoryRailDemo';
import { UseCasePage } from '../../components/UseCasePage';
import type { UseCaseCopy } from '../../content/types';

export function View({ copy, locale }: { copy: UseCaseCopy; locale: string }) {
  return (
    <UseCasePage
      locale={locale}
      path="/category-rail"
      copy={copy}
      demo={<CategoryRailDemo />}
      snippet="categoryRail"
      snippetTitle="CategoryRail.tsx"
      shadcnSnippet="shadcnScrollMenu"
      storyKey="simple"
      related={['simple', 'one-item-scroll', 'progress']}
    />
  );
}
