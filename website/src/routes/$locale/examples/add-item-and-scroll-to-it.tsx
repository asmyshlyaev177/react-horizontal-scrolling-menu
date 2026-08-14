import { createFileRoute } from '@tanstack/react-router';

import { copyFor } from '../../../content';
import { localeFromParam } from '../../../i18n';
import { pageHead } from '../../../lib/seo';
import { View } from '../../../views/examples/add-item-and-scroll-to-it';

export const Route = createFileRoute(
  '/$locale/examples/add-item-and-scroll-to-it',
)({
  head: ({ params }) => {
    const locale = localeFromParam(params.locale);
    const copy = copyFor(locale?.code ?? 'en').examples[
      'add-item-and-scroll-to-it'
    ];
    return pageHead({
      path: `/${params.locale}/examples/add-item-and-scroll-to-it`,
      title: copy.meta.title,
      description: copy.meta.description,
    });
  },
  component: Page,
});

function Page() {
  const { locale: dir } = Route.useParams();
  const locale = localeFromParam(dir);
  const copy = copyFor(locale?.code ?? 'en').examples[
    'add-item-and-scroll-to-it'
  ];
  return <View copy={copy} locale={dir} />;
}
