import { createFileRoute } from '@tanstack/react-router';

import { en } from '../../content/en';
import { pageHead } from '../../lib/seo';
import { View } from '../../views/examples/add-items';

const copy = en.examples['add-items'];

export const Route = createFileRoute('/examples/add-items')({
  head: () =>
    pageHead({
      path: '/examples/add-items',
      title: copy.meta.title,
      description: copy.meta.description,
    }),
  component: () => <View copy={copy} locale="en" />,
});
