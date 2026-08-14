import { createFileRoute } from '@tanstack/react-router';

import { en } from '../../content/en';
import { pageHead } from '../../lib/seo';
import { View } from '../../views/examples/save-restore-position';

const copy = en.examples['save-restore-position'];

export const Route = createFileRoute('/examples/save-restore-position')({
  head: () =>
    pageHead({
      path: '/examples/save-restore-position',
      title: copy.meta.title,
      description: copy.meta.description,
    }),
  component: () => <View copy={copy} locale="en" />,
});
