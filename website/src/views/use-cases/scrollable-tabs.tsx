import { TabsDemo } from '../../components/demos/TabsDemo';
import { UseCasePage } from '../../components/UseCasePage';
import type { UseCaseCopy } from '../../content/types';

export function View({ copy, locale }: { copy: UseCaseCopy; locale: string }) {
  return (
    <UseCasePage
      locale={locale}
      path="/scrollable-tabs"
      copy={copy}
      demo={<TabsDemo />}
      snippet="scrollableTabs"
      snippetTitle="ScrollTabs.tsx"
      shadcnSnippet="shadcnScrollTabs"
      storyKey="centerOnClick"
      related={['center-on-click', 'save-restore-position', 'mouse-drag']}
    />
  );
}
