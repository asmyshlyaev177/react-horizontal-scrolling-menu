import { createFileRoute } from '@tanstack/react-router';

import { en } from '../../content/en';
import { pageHead } from '../../lib/seo';
import { View } from '../../views/examples/performance';

const copy = en.examples['performance'];

export const Route = createFileRoute('/examples/performance')({
  head: () =>
    pageHead({
      path: '/examples/performance',
      title: copy.meta.title,
      description: copy.meta.description,
    }),
  component: () => <View copy={copy} locale="en" />,
});
