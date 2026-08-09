import { SITE_URL } from './links';

// Per-route head: title/description/OG override the root defaults by
// name/property; canonical is a link and must come from here (the root
// deliberately sets none).
export const pageHead = ({
  path,
  title,
  description,
}: {
  path: string;
  title: string;
  description: string;
}) => ({
  meta: [
    { title },
    { name: 'description', content: description },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:url', content: `${SITE_URL}${path}` },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
  ],
  links: [{ rel: 'canonical', href: `${SITE_URL}${path}` }],
});
