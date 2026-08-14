import { createFileRoute } from '@tanstack/react-router';

import { en } from '../../content/en';
import { pageHead } from '../../lib/seo';
import { View } from '../../views/examples/infinite-loop';

const copy = en.examples['infinite-loop'];

export const Route = createFileRoute('/examples/infinite-loop')({
  head: () =>
    pageHead({
      path: '/examples/infinite-loop',
      title: copy.meta.title,
      description: copy.meta.description,
    }),
  component: () => <View copy={copy} locale="en" />,
});
