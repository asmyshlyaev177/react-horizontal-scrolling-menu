import { createFileRoute } from '@tanstack/react-router';

import { en } from '../../content/en';
import { pageHead } from '../../lib/seo';
import { View } from '../../views/examples-hub';

export const Route = createFileRoute('/examples/')({
  head: () =>
    pageHead({
      path: '/examples',
      title: en.examplesHub.meta.title,
      description: en.examplesHub.meta.description,
    }),
  component: () => <View copy={en} locale="en" />,
});
