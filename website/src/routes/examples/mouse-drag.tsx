import { createFileRoute } from '@tanstack/react-router';

import { en } from '../../content/en';
import { pageHead } from '../../lib/seo';
import { View } from '../../views/examples/mouse-drag';

const copy = en.examples['mouse-drag'];

export const Route = createFileRoute('/examples/mouse-drag')({
  head: () =>
    pageHead({
      path: '/examples/mouse-drag',
      title: copy.meta.title,
      description: copy.meta.description,
    }),
  component: () => <View copy={copy} locale="en" />,
});
