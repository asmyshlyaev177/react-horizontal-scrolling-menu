import { createFileRoute } from '@tanstack/react-router';

import { copyFor } from '../../content';
import { localeFromParam } from '../../i18n';
import { pageHead } from '../../lib/seo';
import { View } from '../../views/compare';

export const Route = createFileRoute('/$locale/compare')({
  head: ({ params }) => {
    const locale = localeFromParam(params.locale);
    const copy = copyFor(locale?.code ?? 'en').compare;
    return pageHead({
      path: `/${params.locale}/compare`,
      title: copy.meta.title,
      description: copy.meta.description,
    });
  },
  component: Page,
});

function Page() {
  const { locale: dir } = Route.useParams();
  const locale = localeFromParam(dir);
  const site = copyFor(locale?.code ?? 'en');
  return <View copy={site.compare} pairs={site.comparePairs} locale={dir} />;
}
