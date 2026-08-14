import { createFileRoute } from '@tanstack/react-router';

import { en } from '../../content/en';
import { pageHead } from '../../lib/seo';
import { View } from '../../views/examples/one-item';

const copy = en.examples['one-item'];

export const Route = createFileRoute('/examples/one-item')({
  head: () =>
    pageHead({
      path: '/examples/one-item',
      title: copy.meta.title,
      description: copy.meta.description,
    }),
  component: () => <View copy={copy} locale="en" />,
});
