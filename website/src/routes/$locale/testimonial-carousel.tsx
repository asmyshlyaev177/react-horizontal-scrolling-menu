import { createFileRoute } from '@tanstack/react-router';

import { copyFor } from '../../content';
import { localeFromParam } from '../../i18n';
import { pageHead } from '../../lib/seo';
import { View } from '../../views/use-cases/testimonial-carousel';

export const Route = createFileRoute('/$locale/testimonial-carousel')({
  head: ({ params }) => {
    const locale = localeFromParam(params.locale);
    const copy = copyFor(locale?.code ?? 'en').useCases.testimonialCarousel;
    return pageHead({
      path: `/${params.locale}/testimonial-carousel`,
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
      copy={copyFor(locale?.code ?? 'en').useCases.testimonialCarousel}
      locale={dir}
    />
  );
}
