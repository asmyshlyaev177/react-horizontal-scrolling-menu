import { createFileRoute } from '@tanstack/react-router';

import { en } from '../../content/en';
import { pageHead } from '../../lib/seo';
import { View } from '../../views/examples/center-on-click';

const copy = en.examples['center-on-click'];

export const Route = createFileRoute('/examples/center-on-click')({
  head: () =>
    pageHead({
      path: '/examples/center-on-click',
      title: copy.meta.title,
      description: copy.meta.description,
    }),
  component: () => <View copy={copy} locale="en" />,
});
