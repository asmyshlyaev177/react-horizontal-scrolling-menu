import { createFileRoute } from '@tanstack/react-router';

import { en } from '../../content/en';
import { pageHead } from '../../lib/seo';
import { View } from '../../views/examples/custom-transition';

const copy = en.examples['custom-transition'];

export const Route = createFileRoute('/examples/custom-transition')({
  head: () =>
    pageHead({
      path: '/examples/custom-transition',
      title: copy.meta.title,
      description: copy.meta.description,
    }),
  component: () => <View copy={copy} locale="en" />,
});
