import { createFileRoute } from '@tanstack/react-router';

import { copyFor } from '../../../content';
import { localeFromParam } from '../../../i18n';
import { pageHead } from '../../../lib/seo';
import { View } from '../../../views/examples/mui-scrollable-tabs';

export const Route = createFileRoute('/$locale/examples/mui-scrollable-tabs')({
  head: ({ params }) => {
    const locale = localeFromParam(params.locale);
    const copy = copyFor(locale?.code ?? 'en').examples['mui-scrollable-tabs'];
    return pageHead({
      path: `/${params.locale}/examples/mui-scrollable-tabs`,
      title: copy.meta.title,
      description: copy.meta.description,
    });
  },
  component: Page,
});

function Page() {
  const { locale: dir } = Route.useParams();
  const locale = localeFromParam(dir);
  const copy = copyFor(locale?.code ?? 'en').examples['mui-scrollable-tabs'];
  return <View copy={copy} locale={dir} />;
}
