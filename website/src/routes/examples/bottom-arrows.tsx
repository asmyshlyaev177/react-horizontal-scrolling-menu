import { createFileRoute } from '@tanstack/react-router';

import { en } from '../../content/en';
import { pageHead } from '../../lib/seo';
import { View } from '../../views/examples/bottom-arrows';

const copy = en.examples['bottom-arrows'];

export const Route = createFileRoute('/examples/bottom-arrows')({
  head: () =>
    pageHead({
      path: '/examples/bottom-arrows',
      title: copy.meta.title,
      description: copy.meta.description,
    }),
  component: () => <View copy={copy} locale="en" />,
});
