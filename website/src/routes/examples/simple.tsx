import { createFileRoute } from '@tanstack/react-router';

import { en } from '../../content/en';
import { pageHead } from '../../lib/seo';
import { View } from '../../views/examples/simple';

const copy = en.examples['simple'];

export const Route = createFileRoute('/examples/simple')({
  head: () =>
    pageHead({
      path: '/examples/simple',
      title: copy.meta.title,
      description: copy.meta.description,
    }),
  component: () => <View copy={copy} locale="en" />,
});
