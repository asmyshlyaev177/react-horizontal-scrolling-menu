import { createFileRoute } from '@tanstack/react-router';

import { en } from '../content/en';
import { alternateLinks } from '../i18n';
import { SITE_URL } from '../lib/links';
import { llmsTxtLink } from '../lib/seo';
import { View } from '../views/home';

export const Route = createFileRoute('/')({
  head: () => ({
    links: [
      { rel: 'canonical', href: SITE_URL },
      // The homepage builds its own head rather than going through
      // `pageHead` — its mirror is `/index.md`, not the `/.md` that rule
      // would produce — so the hreflang cluster has to be spelled here too.
      ...alternateLinks('/'),
      // The homepage's Markdown mirror, under the name an agent guesses when
      // it appends `.md` to a site root. Same document as /llms.txt and as
      // what `Accept: text/markdown` gets here (src/start.ts) — three ways
      // in, because agents disagree about which one to try.
      {
        rel: 'alternate',
        type: 'text/markdown',
        href: `${SITE_URL}/index.md`,
        title: en.chrome.links.markdownAlternate,
      },
      llmsTxtLink,
    ],
  }),
  component: () => <View copy={en.home} locale="en" />,
});
