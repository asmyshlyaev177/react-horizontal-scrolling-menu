import { createFileRoute } from '@tanstack/react-router';

import { copyFor } from '../content';
import { en } from '../content/en';
import { pageHead } from '../lib/seo';
import { View } from '../views/compare-pair';

const copy = en.comparePairs.emblaVsSwiper;

export const Route = createFileRoute('/compare_/embla-vs-swiper')({
  head: () =>
    pageHead({
      path: '/compare/embla-vs-swiper',
      title: copy.meta.title,
      description: copy.meta.description,
    }),
  component: () => (
    <View site={copyFor('en')} copy={copy} slug="embla-vs-swiper" locale="en" />
  ),
});
