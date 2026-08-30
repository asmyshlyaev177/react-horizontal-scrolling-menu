import { createFileRoute } from '@tanstack/react-router';

import { en } from '../content/en';
import { pageHead } from '../lib/seo';
import { View } from '../views/use-cases/scrollable-tabs';

const copy = en.useCases.scrollableTabs;

export const Route = createFileRoute('/scrollable-tabs')({
  head: () =>
    pageHead({
      path: '/scrollable-tabs',
      title: copy.meta.title,
      description: copy.meta.description,
    }),
  component: () => <View copy={copy} locale="en" />,
});
