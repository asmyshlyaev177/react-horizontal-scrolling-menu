import { createFileRoute } from '@tanstack/react-router';

import { en } from '../../content/en';
import { pageHead } from '../../lib/seo';
import { View } from '../../views/examples/autoplay';

const copy = en.examples['autoplay'];

export const Route = createFileRoute('/examples/autoplay')({
  head: () =>
    pageHead({
      path: '/examples/autoplay',
      title: copy.meta.title,
      description: copy.meta.description,
    }),
  component: () => <View copy={copy} locale="en" />,
});
