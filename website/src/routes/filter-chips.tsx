import { createFileRoute } from '@tanstack/react-router';

import { en } from '../content/en';
import { pageHead } from '../lib/seo';
import { View } from '../views/use-cases/filter-chips';

const copy = en.useCases.filterChips;

export const Route = createFileRoute('/filter-chips')({
  head: () =>
    pageHead({
      path: '/filter-chips',
      title: copy.meta.title,
      description: copy.meta.description,
    }),
  component: () => <View copy={copy} locale="en" />,
});
