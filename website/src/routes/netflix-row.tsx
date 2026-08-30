import { createFileRoute } from '@tanstack/react-router';

import { en } from '../content/en';
import { pageHead } from '../lib/seo';
import { View } from '../views/use-cases/netflix-row';

const copy = en.useCases.netflixRow;

export const Route = createFileRoute('/netflix-row')({
  head: () =>
    pageHead({
      path: '/netflix-row',
      title: copy.meta.title,
      description: copy.meta.description,
    }),
  component: () => <View copy={copy} locale="en" />,
});
