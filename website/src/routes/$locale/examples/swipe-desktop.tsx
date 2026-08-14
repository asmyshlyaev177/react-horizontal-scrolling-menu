import { createFileRoute } from '@tanstack/react-router';

import { copyFor } from '../../../content';
import { localeFromParam } from '../../../i18n';
import { pageHead } from '../../../lib/seo';
import { View } from '../../../views/examples/swipe-desktop';

export const Route = createFileRoute('/$locale/examples/swipe-desktop')({
  head: ({ params }) => {
    const locale = localeFromParam(params.locale);
    const copy = copyFor(locale?.code ?? 'en').examples['swipe-desktop'];
    return pageHead({
      path: `/${params.locale}/examples/swipe-desktop`,
      title: copy.meta.title,
      description: copy.meta.description,
    });
  },
  component: Page,
});

function Page() {
  const { locale: dir } = Route.useParams();
  const locale = localeFromParam(dir);
  const copy = copyFor(locale?.code ?? 'en').examples['swipe-desktop'];
  return <View copy={copy} locale={dir} />;
}
