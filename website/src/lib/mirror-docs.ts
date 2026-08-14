// Every `.md` mirror the build writes, from all three of its sources.
//
// Two are written here: the examples hub, and one document per example
// carrying its complete source — nine and 189 of them, one set per language.
// Everything visible in both is copy and comes from that locale's content
// module. `EXAMPLES` is the structural manifest and carries the *English*
// strings, so reading a name off it emits an English document under a
// translated canonical, which is what it used to do.
//
// The third is `convertedMirrors`, which turns every other prerendered page
// into Markdown from the HTML it actually shipped. `/index.md` is the fourth
// and has no code: it is public/llms.txt, copied in vite.config.ts.
//
// All of it lives outside vite.config.ts because the config has a 400-line
// budget and this is the half of it that is about documents rather than build
// wiring.

import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

import TurndownService from 'turndown';
import { gfm } from 'turndown-plugin-gfm';

import { ALL_LOCALES } from '../../../scripts/i18n/locales.mjs';
import { copyFor } from '../content/index.ts';
import type { ExampleEntry } from './examples-manifest.ts';
import { EXAMPLE_GROUPS, EXAMPLES } from './examples-manifest.ts';
import { GITHUB, SITE_URL, STORIES } from './links.ts';
import { frontmatter, metaOf } from './markdown-frontmatter.ts';

/**
 * The shared trailer. `prefix` keeps a locale mirror pointing at its own hub
 * rather than the English one; llms.txt has no locale, so it is the same link
 * for every language.
 */
const footer = (extra: string, prefix: string) =>
  [
    '---',
    '',
    `More examples: <${SITE_URL}${prefix}/examples.md> · Library summary for LLMs: <${SITE_URL}/llms.txt>`,
    extra,
    `Package: \`npm install react-horizontal-scrolling-menu\` · MIT · <${GITHUB}>`,
    '',
  ]
    .filter(Boolean)
    .join('\n');

/** `''` for English, `/ja` for the rest. */
export const prefixOf = (locale: { code: string; dir: string }) =>
  locale.code === 'en' ? '' : `/${locale.dir}`;

/** One `## group` section of the hub, or `null` if the group is empty. */
function group(name: string, code: string, prefix: string) {
  const copy = copyFor(code).manifest;
  const entries = EXAMPLES.filter((example) => example.group === name);
  if (entries.length === 0) return null;
  return [
    `## ${copy.groups[name] ?? name}`,
    '',
    ...entries.map((example) => {
      const { name: title, blurb } = copy.examples[example.slug];
      return `- [${title}](${SITE_URL}${prefix}/examples/${example.slug}.md) — ${blurb}`;
    }),
    '',
  ].join('\n');
}

/** `<prefix>/examples.md` — the hub, in one language. */
export function hubDocument(locale: { code: string; dir: string }) {
  const prefix = prefixOf(locale);
  const copy = copyFor(locale.code).examplesHub;
  return [
    frontmatter({
      title: copy.meta.title,
      description: copy.meta.description,
      canonical: `${SITE_URL}${prefix}/examples`,
    }),
    `# ${copy.title}`,
    '',
    `> ${copy.lede}`,
    '',
    // Not copy: an instruction to whatever fetched this file, and the same
    // one in every language.
    'Links below point at the Markdown of each example; drop the `.md` for the rendered page.',
    '',
    '---',
    '',
    ...EXAMPLE_GROUPS.map((name) => group(name, locale.code, prefix)).filter(
      Boolean,
    ),
    footer('', prefix),
  ].join('\n');
}

/**
 * `<prefix>/examples/<slug>.md` — the example's metadata and its whole source
 * file. The prose explaining it is on the page; this document says so rather
 * than pretending to replace it.
 */
export function exampleDocument(
  locale: { code: string; dir: string },
  example: ExampleEntry,
  code: string,
) {
  const prefix = prefixOf(locale);
  const { name, blurb } = copyFor(locale.code).manifest.examples[example.slug];
  const fileName = example.sourceFile.split('/').pop() ?? 'source.tsx';

  return [
    frontmatter({
      title: name,
      description: blurb,
      canonical: `${SITE_URL}${prefix}/examples/${example.slug}`,
      source: fileName,
    }),
    `# ${name}`,
    '',
    `> ${blurb}`,
    '',
    `Live demo, and the prose explaining how it works: the page above.`,
    `Editable in the browser: <${STORIES[example.storyKey]}>`,
    '',
    '---',
    '',
    `Full source — \`${fileName}\`:`,
    '',
    '```tsx',
    code.trimEnd(),
    '```',
    '',
    footer(
      `Working on this with an AI agent? The package ships SKILL.md files: \`npx @tanstack/intent@latest install\`, then load \`react-horizontal-scrolling-menu#menu-setup\`.`,
      prefix,
    ),
  ].join('\n');
}

/**
 * Whether the mirror for this page is one of the two written above, rather
 * than converted from the page's own HTML.
 *
 * The locale prefix comes off first: `/ja/examples/simple` is still an example
 * page and still deserves the mirror that carries its source, not an HTML
 * conversion that links to the page for it.
 */
const HAS_BESPOKE_MIRROR = (path: string) => {
  const first = path.split('/').filter(Boolean)[0];
  const bare = ALL_LOCALES.some((l) => l.dir === first && l.code !== 'en')
    ? path.slice(first.length + 1) || '/'
    : path;
  return bare === '/' || bare === '/examples' || bare.startsWith('/examples/');
};

const turndown = new TurndownService({
  headingStyle: 'atx',
  codeBlockStyle: 'fenced',
  bulletListMarker: '-',
}).use(gfm); // tables, strikethrough — a comparison matrix without gfm is a wall of <tr>

/**
 * Site-relative links mean nothing to a client holding this file over HTTP,
 * so they become absolute — and point at the other page's Markdown, since
 * every route on this site has a mirror. An agent following a link out of a
 * Markdown document should land in another one, not back in HTML.
 *
 * Two things are left alone: the root, whose mirror is `/index.md` rather
 * than the `/.md` this would otherwise produce, and anything that already
 * has a file extension (`/llms.txt`, `/og.png`) and so is not a page.
 */
const absolutise = (markdown: string) =>
  markdown.replace(
    // The trailing group keeps any link title — `](/x "title")`.
    /\]\((\/[^)\s]*)([^)]*)\)/g,
    (_whole, href: string, title: string) => {
      const target =
        href === '/'
          ? '/index.md'
          : /\.[a-z0-9]+$/i.test(href)
            ? href
            : `${href}.md`;
      return `](${SITE_URL}${target}${title})`;
    },
  );

/**
 * Links rendered side by side in a flex row carry no whitespace between them
 * in the markup, so they convert to `[a](…)[b](…)` — valid Markdown, and
 * unreadable. A separator is what the visual gap meant.
 */
const separateAdjacentLinks = (markdown: string) =>
  markdown.replace(/\)\[/g, ') · [');

/**
 * Converts each remaining prerendered page to `<path>.md`, from the HTML it
 * actually shipped.
 *
 * The alternative was keeping a second, hand-written copy of pages like
 * /compare in sync with the JSX by hand. Converting what rendered means the
 * mirror cannot drift from the page by construction — the page is the source,
 * in whatever language it rendered. Only `<main>` is converted: the header,
 * footer and JSON-LD are chrome, and an agent reading this wants the argument,
 * not the navigation.
 */
export function convertedMirrors(outputDir: URL) {
  return ({ page, html }: { page: { path: string }; html: string }) => {
    if (HAS_BESPOKE_MIRROR(page.path)) return;

    const main = html.match(/<main[^>]*>([\s\S]*?)<\/main>/)?.[1];
    if (!main) return;

    const body = separateAdjacentLinks(absolutise(turndown.turndown(main)));
    const { title, description, image } = metaOf(html);
    const document = [
      frontmatter({
        title,
        description,
        canonical: `${SITE_URL}${page.path}`,
        image,
      }),
      body.trim(),
      '',
      '---',
      '',
      `More examples: <${SITE_URL}/examples.md>`,
      `Library summary for LLMs: <${SITE_URL}/llms.txt>`,
      '',
    ].join('\n');

    const file = fileURLToPath(new URL(`.${page.path}.md`, outputDir));
    mkdirSync(dirname(file), { recursive: true });
    writeFileSync(file, document, 'utf8');
  };
}
