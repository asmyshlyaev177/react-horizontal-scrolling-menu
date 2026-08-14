import { createFileRoute } from '@tanstack/react-router';

import { copyFor } from '../../../content';
import { localeFromParam } from '../../../i18n';
import { pageHead } from '../../../lib/seo';
import { View } from '../../../views/examples/rtl';

export const Route = createFileRoute('/$locale/examples/rtl')({
  head: ({ params }) => {
    const locale = localeFromParam(params.locale);
    const copy = copyFor(locale?.code ?? 'en').examples['rtl'];
    return pageHead({
      path: `/${params.locale}/examples/rtl`,
      title: copy.meta.title,
      description: copy.meta.description,
    });
  },
  component: Page,
});

function Page() {
  const { locale: dir } = Route.useParams();
  const locale = localeFromParam(dir);
  const copy = copyFor(locale?.code ?? 'en').examples['rtl'];
  return <View copy={copy} locale={dir} />;
}
