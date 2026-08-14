import { createFileRoute } from '@tanstack/react-router';

import { copyFor } from '../../../content';
import { localeFromParam } from '../../../i18n';
import { pageHead } from '../../../lib/seo';
import { View } from '../../../views/examples/mobile-swipe-only';

export const Route = createFileRoute('/$locale/examples/mobile-swipe-only')({
  head: ({ params }) => {
    const locale = localeFromParam(params.locale);
    const copy = copyFor(locale?.code ?? 'en').examples['mobile-swipe-only'];
    return pageHead({
      path: `/${params.locale}/examples/mobile-swipe-only`,
      title: copy.meta.title,
      description: copy.meta.description,
    });
  },
  component: Page,
});

function Page() {
  const { locale: dir } = Route.useParams();
  const locale = localeFromParam(dir);
  const copy = copyFor(locale?.code ?? 'en').examples['mobile-swipe-only'];
  return <View copy={copy} locale={dir} />;
}
