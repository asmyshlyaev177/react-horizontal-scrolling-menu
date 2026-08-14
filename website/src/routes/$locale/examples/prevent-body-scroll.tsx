import { createFileRoute } from '@tanstack/react-router';

import { copyFor } from '../../../content';
import { localeFromParam } from '../../../i18n';
import { pageHead } from '../../../lib/seo';
import { View } from '../../../views/examples/prevent-body-scroll';

export const Route = createFileRoute('/$locale/examples/prevent-body-scroll')({
  head: ({ params }) => {
    const locale = localeFromParam(params.locale);
    const copy = copyFor(locale?.code ?? 'en').examples['prevent-body-scroll'];
    return pageHead({
      path: `/${params.locale}/examples/prevent-body-scroll`,
      title: copy.meta.title,
      description: copy.meta.description,
    });
  },
  component: Page,
});

function Page() {
  const { locale: dir } = Route.useParams();
  const locale = localeFromParam(dir);
  const copy = copyFor(locale?.code ?? 'en').examples['prevent-body-scroll'];
  return <View copy={copy} locale={dir} />;
}
