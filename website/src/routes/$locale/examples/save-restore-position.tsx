import { createFileRoute } from '@tanstack/react-router';

import { copyFor } from '../../../content';
import { localeFromParam } from '../../../i18n';
import { pageHead } from '../../../lib/seo';
import { View } from '../../../views/examples/save-restore-position';

export const Route = createFileRoute('/$locale/examples/save-restore-position')(
  {
    head: ({ params }) => {
      const locale = localeFromParam(params.locale);
      const copy = copyFor(locale?.code ?? 'en').examples[
        'save-restore-position'
      ];
      return pageHead({
        path: `/${params.locale}/examples/save-restore-position`,
        title: copy.meta.title,
        description: copy.meta.description,
      });
    },
    component: Page,
  },
);

function Page() {
  const { locale: dir } = Route.useParams();
  const locale = localeFromParam(dir);
  const copy = copyFor(locale?.code ?? 'en').examples['save-restore-position'];
  return <View copy={copy} locale={dir} />;
}
