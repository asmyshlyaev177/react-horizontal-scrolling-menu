import { createFileRoute } from '@tanstack/react-router';

import { copyFor } from '../content';
import { en } from '../content/en';
import { pageHead } from '../lib/seo';
import { View } from '../views/compare-pair';

const copy = en.comparePairs.reactSlickAlternatives;

export const Route = createFileRoute('/compare_/react-slick-alternatives')({
  head: () =>
    pageHead({
      path: '/compare/react-slick-alternatives',
      title: copy.meta.title,
      description: copy.meta.description,
    }),
  component: () => (
    <View
      site={copyFor('en')}
      copy={copy}
      slug="react-slick-alternatives"
      locale="en"
    />
  ),
});
