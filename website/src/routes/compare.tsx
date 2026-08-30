import { createFileRoute } from '@tanstack/react-router';

import { en } from '../content/en';
import { pageHead } from '../lib/seo';
import { View } from '../views/compare';

export const Route = createFileRoute('/compare')({
  head: () =>
    pageHead({
      path: '/compare',
      title: en.compare.meta.title,
      description: en.compare.meta.description,
    }),
  component: () => (
    <View copy={en.compare} pairs={en.comparePairs} locale="en" />
  ),
});
