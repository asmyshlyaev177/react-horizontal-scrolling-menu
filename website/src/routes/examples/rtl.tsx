import { createFileRoute } from '@tanstack/react-router';

import { en } from '../../content/en';
import { pageHead } from '../../lib/seo';
import { View } from '../../views/examples/rtl';

const copy = en.examples['rtl'];

export const Route = createFileRoute('/examples/rtl')({
  head: () =>
    pageHead({
      path: '/examples/rtl',
      title: copy.meta.title,
      description: copy.meta.description,
    }),
  component: () => <View copy={copy} locale="en" />,
});
