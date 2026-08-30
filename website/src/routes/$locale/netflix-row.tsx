import { createFileRoute } from '@tanstack/react-router';

import { copyFor } from '../../content';
import { localeFromParam } from '../../i18n';
import { pageHead } from '../../lib/seo';
import { View } from '../../views/use-cases/netflix-row';

export const Route = createFileRoute('/$locale/netflix-row')({
  head: ({ params }) => {
    const locale = localeFromParam(params.locale);
    const copy = copyFor(locale?.code ?? 'en').useCases.netflixRow;
    return pageHead({
      path: `/${params.locale}/netflix-row`,
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
      copy={copyFor(locale?.code ?? 'en').useCases.netflixRow}
      locale={dir}
    />
  );
}
