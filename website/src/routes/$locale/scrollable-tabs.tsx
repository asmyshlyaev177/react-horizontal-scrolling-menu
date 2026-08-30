import { createFileRoute } from '@tanstack/react-router';

import { copyFor } from '../../content';
import { localeFromParam } from '../../i18n';
import { pageHead } from '../../lib/seo';
import { View } from '../../views/use-cases/scrollable-tabs';

export const Route = createFileRoute('/$locale/scrollable-tabs')({
  head: ({ params }) => {
    const locale = localeFromParam(params.locale);
    const copy = copyFor(locale?.code ?? 'en').useCases.scrollableTabs;
    return pageHead({
      path: `/${params.locale}/scrollable-tabs`,
      title: copy.meta.title,
      description: copy.meta.description,
    });
  },
  component: Page,
});

function Page() {
  const { locale: dir } = Route.useParams();
  const locale = localeFromParam(dir);
  return (
    <View
      copy={copyFor(locale?.code ?? 'en').useCases.scrollableTabs}
      locale={dir}
    />
  );
}
