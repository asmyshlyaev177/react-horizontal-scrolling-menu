import { createFileRoute } from '@tanstack/react-router';

import { en } from '../../content/en';
import { pageHead } from '../../lib/seo';
import { View } from '../../views/examples/add-item-and-scroll-to-it';

const copy = en.examples['add-item-and-scroll-to-it'];

export const Route = createFileRoute('/examples/add-item-and-scroll-to-it')({
  head: () =>
    pageHead({
      path: '/examples/add-item-and-scroll-to-it',
      title: copy.meta.title,
      description: copy.meta.description,
    }),
  component: () => <View copy={copy} locale="en" />,
});
