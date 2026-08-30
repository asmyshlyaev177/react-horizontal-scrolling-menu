import { ChipsDemo } from '../../components/demos/ChipsDemo';
import { UseCasePage } from '../../components/UseCasePage';
import type { UseCaseCopy } from '../../content/types';

export function View({ copy, locale }: { copy: UseCaseCopy; locale: string }) {
  return (
    <UseCasePage
      locale={locale}
      path="/filter-chips"
      copy={copy}
      demo={<ChipsDemo />}
      snippet="filterChips"
      snippetTitle="ChipBar.tsx"
      shadcnSnippet="shadcnChipBar"
      storyKey="addItemScrollTo"
      related={[
        'add-item-and-scroll-to-it',
        'add-items',
        'prevent-body-scroll',
      ]}
    />
  );
}
