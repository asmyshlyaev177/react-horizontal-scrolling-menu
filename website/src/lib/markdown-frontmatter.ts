/**
 * YAML frontmatter for the Markdown mirrors, and the page metadata it is
 * built from.
 *
 * Frontmatter is the one part of a mirror written for a parser rather than a
 * reader. An agent choosing which page to open, or citing one it has already
 * read, needs the title and canonical URL and nothing else — it can stop after
 * five lines instead of loading the document underneath.
 *
 * Build-time only: imported by vite.config.ts, never by anything that ships to
 * the browser.
 */

/**
 * Every value quoted and escaped unconditionally. These are page titles and
 * meta descriptions, so colons, quotes and em dashes are the norm, and
 * guessing which strings are safe bare is how generated YAML breaks.
 */
const yamlString = (value: string) =>
  `"${value.replace(/\s+/g, ' ').trim().replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`;

export const frontmatter = (fields: Record<string, string | undefined>) =>
  [
    '---',
    ...Object.entries(fields)
      .filter((entry): entry is [string, string] => Boolean(entry[1]))
      .map(([key, value]) => `${key}: ${yamlString(value)}`),
    '---',
    '',
  ].join('\n');

/**
 * A page's own metadata, read back out of the markup it shipped — the same
 * principle as converting `<main>` rather than re-authoring it. The head is
 * already the single source of these strings, so a mirror that reads them
 * from there cannot claim a different title than the page does.
 */
export function metaOf(html: string) {
  const head = html.slice(0, html.indexOf('</head>'));

  // Attribute order and quoting both vary once the build minifies the markup,
  // so each tag is read by attribute rather than matched as a fixed shape.
  const meta: Record<string, string> = {};
  for (const tag of head.match(/<meta[^>]*>/gi) ?? []) {
    const attrs = Object.fromEntries(
      [...tag.matchAll(/([a-z:-]+)=("([^"]*)"|'([^']*)'|([^\s>]*))/gi)].map(
        (m) => [m[1].toLowerCase(), m[3] ?? m[4] ?? m[5] ?? ''],
      ),
    );
    const key = attrs.name ?? attrs.property;
    if (key && attrs.content) meta[key.toLowerCase()] ??= attrs.content;
  }

  return {
    title:
      /<title[^>]*>([\s\S]*?)<\/title>/i.exec(head)?.[1] ?? meta['og:title'],
    description: meta.description ?? meta['og:description'],
    image: meta['og:image'],
  };
}
