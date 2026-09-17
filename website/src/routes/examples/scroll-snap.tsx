import { createFileRoute } from '@tanstack/react-router';

import { en } from '../../content/en';
import { pageHead } from '../../lib/seo';
import { View } from '../../views/examples/scroll-snap';

const copy = en.examples['scroll-snap'];

export const Route = createFileRoute('/examples/scroll-snap')({
  head: () =>
    pageHead({
      path: '/examples/scroll-snap',
      title: copy.meta.title,
      description: copy.meta.description,
    }),
  component: () => <View copy={copy} locale="en" />,
});
