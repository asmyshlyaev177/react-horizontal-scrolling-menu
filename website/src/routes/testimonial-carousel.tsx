import { createFileRoute } from '@tanstack/react-router';

import { en } from '../content/en';
import { pageHead } from '../lib/seo';
import { View } from '../views/use-cases/testimonial-carousel';

const copy = en.useCases.testimonialCarousel;

export const Route = createFileRoute('/testimonial-carousel')({
  head: () =>
    pageHead({
      path: '/testimonial-carousel',
      title: copy.meta.title,
      description: copy.meta.description,
    }),
  component: () => <View copy={copy} locale="en" />,
});
