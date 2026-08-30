import { createFileRoute } from '@tanstack/react-router';

import { copyFor } from '../content';
import { en } from '../content/en';
import { pageHead } from '../lib/seo';
import { View } from '../views/compare-pair';

const copy = en.comparePairs.swiperAlternatives;

export const Route = createFileRoute('/compare_/swiper-alternatives')({
  head: () =>
    pageHead({
      path: '/compare/swiper-alternatives',
      title: copy.meta.title,
      description: copy.meta.description,
    }),
  component: () => (
    <View
      site={copyFor('en')}
      copy={copy}
      slug="swiper-alternatives"
      locale="en"
    />
  ),
});
