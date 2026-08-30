import { createFileRoute } from '@tanstack/react-router';

import { copyFor } from '../../content';
import { localeFromParam } from '../../i18n';
import { pageHead } from '../../lib/seo';
import { View } from '../../views/compare-pair';

export const Route = createFileRoute('/$locale/compare_/embla-vs-swiper')({
  head: ({ params }) => {
    const locale = localeFromParam(params.locale);
    const copy = copyFor(locale?.code ?? 'en').comparePairs.emblaVsSwiper;
    return pageHead({
      path: `/${params.locale}/compare/embla-vs-swiper`,
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
      copy={site.comparePairs.emblaVsSwiper}
      slug="embla-vs-swiper"
      locale={dir}
    />
  );
}
