import { createFileRoute } from '@tanstack/react-router';

import { en } from '../../content/en';
import { pageHead } from '../../lib/seo';
import { View } from '../../views/examples/vertical';

const copy = en.examples['vertical'];

export const Route = createFileRoute('/examples/vertical')({
  head: () =>
    pageHead({
      path: '/examples/vertical',
      title: copy.meta.title,
      description: copy.meta.description,
    }),
  component: () => <View copy={copy} locale="en" />,
});
