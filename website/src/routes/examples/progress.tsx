import { createFileRoute } from '@tanstack/react-router';

import { en } from '../../content/en';
import { pageHead } from '../../lib/seo';
import { View } from '../../views/examples/progress';

const copy = en.examples['progress'];

export const Route = createFileRoute('/examples/progress')({
  head: () =>
    pageHead({
      path: '/examples/progress',
      title: copy.meta.title,
      description: copy.meta.description,
    }),
  component: () => <View copy={copy} locale="en" />,
});
