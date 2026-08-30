import { createFileRoute } from '@tanstack/react-router';

import { en } from '../../content/en';
import { pageHead } from '../../lib/seo';
import { View } from '../../views/examples/mui-scrollable-tabs';

const copy = en.examples['mui-scrollable-tabs'];

export const Route = createFileRoute('/examples/mui-scrollable-tabs')({
  head: () =>
    pageHead({
      path: '/examples/mui-scrollable-tabs',
      title: copy.meta.title,
      description: copy.meta.description,
    }),
  component: () => <View copy={copy} locale="en" />,
});
