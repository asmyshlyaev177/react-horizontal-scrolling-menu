import { createFileRoute } from '@tanstack/react-router';

import { copyFor } from '../../../content';
import { localeFromParam } from '../../../i18n';
import { pageHead } from '../../../lib/seo';
import { View } from '../../../views/examples-hub';

export const Route = createFileRoute('/$locale/examples/')({
  head: ({ params }) => {
    const locale = localeFromParam(params.locale);
    const copy = copyFor(locale?.code ?? 'en').examplesHub;
    return pageHead({
      path: `/${params.locale}/examples`,
      title: copy.meta.title,
      description: copy.meta.description,
    });
  },
  component: Page,
});

function Page() {
  const { locale: dir } = Route.useParams();
  const locale = localeFromParam(dir);
  return <View copy={copyFor(locale?.code ?? 'en')} locale={dir} />;
}
