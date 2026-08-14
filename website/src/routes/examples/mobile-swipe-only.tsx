import { createFileRoute } from '@tanstack/react-router';

import { en } from '../../content/en';
import { pageHead } from '../../lib/seo';
import { View } from '../../views/examples/mobile-swipe-only';

const copy = en.examples['mobile-swipe-only'];

export const Route = createFileRoute('/examples/mobile-swipe-only')({
  head: () =>
    pageHead({
      path: '/examples/mobile-swipe-only',
      title: copy.meta.title,
      description: copy.meta.description,
    }),
  component: () => <View copy={copy} locale="en" />,
});
