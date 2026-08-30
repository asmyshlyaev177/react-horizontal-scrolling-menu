import { createFileRoute } from '@tanstack/react-router';

import { copyFor } from '../../content';
import { localeFromParam } from '../../i18n';
import { pageHead } from '../../lib/seo';
import { View } from '../../views/compare-pair';

export const Route = createFileRoute(
  '/$locale/compare_/react-slick-alternatives',
)({
  head: ({ params }) => {
    const locale = localeFromParam(params.locale);
    const copy = copyFor(locale?.code ?? 'en').comparePairs
      .reactSlickAlternatives;
    return pageHead({
      path: `/${params.locale}/compare/react-slick-alternatives`,
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
  return (
    <View
      site={site}
      copy={site.comparePairs.reactSlickAlternatives}
      slug="react-slick-alternatives"
      locale={dir}
    />
  );
}
