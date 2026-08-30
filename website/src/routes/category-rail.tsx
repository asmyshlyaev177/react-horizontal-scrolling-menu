import { createFileRoute } from '@tanstack/react-router';

import { en } from '../content/en';
import { pageHead } from '../lib/seo';
import { View } from '../views/use-cases/category-rail';

const copy = en.useCases.categoryRail;

export const Route = createFileRoute('/category-rail')({
  head: () =>
    pageHead({
      path: '/category-rail',
      title: copy.meta.title,
      description: copy.meta.description,
    }),
  component: () => <View copy={copy} locale="en" />,
});
