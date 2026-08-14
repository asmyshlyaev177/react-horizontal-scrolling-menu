import { createFileRoute } from '@tanstack/react-router';

import { en } from '../../content/en';
import { pageHead } from '../../lib/seo';
import { View } from '../../views/examples/scroll-to-item';

const copy = en.examples['scroll-to-item'];

export const Route = createFileRoute('/examples/scroll-to-item')({
  head: () =>
    pageHead({
      path: '/examples/scroll-to-item',
      title: copy.meta.title,
      description: copy.meta.description,
    }),
  component: () => <View copy={copy} locale="en" />,
});
