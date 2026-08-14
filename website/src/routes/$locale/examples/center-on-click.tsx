import { createFileRoute } from '@tanstack/react-router';

import { copyFor } from '../../../content';
import { localeFromParam } from '../../../i18n';
import { pageHead } from '../../../lib/seo';
import { View } from '../../../views/examples/center-on-click';

export const Route = createFileRoute('/$locale/examples/center-on-click')({
  head: ({ params }) => {
    const locale = localeFromParam(params.locale);
    const copy = copyFor(locale?.code ?? 'en').examples['center-on-click'];
    return pageHead({
      path: `/${params.locale}/examples/center-on-click`,
      title: copy.meta.title,
      description: copy.meta.description,
    });
  },
  component: Page,
});

function Page() {
  const { locale: dir } = Route.useParams();
  const locale = localeFromParam(dir);
  const copy = copyFor(locale?.code ?? 'en').examples['center-on-click'];
  return <View copy={copy} locale={dir} />;
}
