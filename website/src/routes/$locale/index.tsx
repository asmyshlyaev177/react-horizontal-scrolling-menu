import { createFileRoute } from '@tanstack/react-router';

import { copyFor } from '../../content';
import { indexHead, localeFromParam, SOURCE } from '../../i18n';
import { SITE_URL } from '../../lib/links';
import { llmsTxtLink } from '../../lib/seo';
import { View } from '../../views/home';

export const Route = createFileRoute('/$locale/')({
  // The English homepage takes its title and description from the root
  // defaults in __root.tsx. A translated one cannot: the root route sits above
  // the `$locale` segment and has no way to read it, so each locale homepage
  // states its own — the same strings, from its own chrome module.
  head: ({ params }) => {
    const locale = localeFromParam(params.locale);
    const copy = copyFor(locale?.code ?? 'en');
    const canonical = `${SITE_URL}/${params.locale}`;
    const index = indexHead(locale ?? SOURCE, '/');
    return {
      meta: [
        ...index.meta,
        { title: copy.chrome.meta.title },
        { name: 'description', content: copy.chrome.meta.description },
        { property: 'og:title', content: copy.chrome.meta.title },
        { property: 'og:description', content: copy.chrome.meta.description },
        { property: 'og:url', content: canonical },
        // The root's Twitter card and image alt are English too, and unlike
        // the OG pair nothing else overrides them — a translated page would
        // otherwise share as English.
        { name: 'twitter:title', content: copy.chrome.meta.title },
        {
          name: 'twitter:description',
          content: copy.chrome.meta.description,
        },
        { property: 'og:image:alt', content: copy.chrome.ogImageAlt },
        { name: 'twitter:image:alt', content: copy.chrome.ogImageAlt },
      ],
      links: [
        { rel: 'canonical', href: canonical },
        ...index.links,
        // Every locale homepage advertises the same English Markdown mirror:
        // /index.md is the published llms.txt, one document by design.
        {
          rel: 'alternate',
          type: 'text/markdown',
          href: `${SITE_URL}/index.md`,
          title: copy.chrome.links.markdownAlternate,
        },
        llmsTxtLink,
      ],
    };
  },
  component: Page,
});

function Page() {
  const { locale: dir } = Route.useParams();
  const locale = localeFromParam(dir);
  return <View copy={copyFor(locale?.code ?? 'en').home} locale={dir} />;
}
