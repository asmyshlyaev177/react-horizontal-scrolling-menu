// Reading, stamping and validating a translated Markdown document against the
// English one it came from.
//
// The load-bearing idea is the stamp: every translated file records the git
// blob hash of the English file it was translated from. That single line turns
// "is this translation current?" from a judgement call into `git hash-object`
// and a string compare — and, because the recorded hash is a real object in
// the repo, `git diff <old-blob> <new-blob>` prints exactly what changed since,
// so a stale file can be patched instead of retranslated.
//
// This repo already had the failure this prevents: two translations sat a
// whole feature section behind their source with nothing to say so.

import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';

import {
  ALL_LOCALES,
  localizedName,
  SOURCE_LOCALE,
  switcherLine,
} from './locales.mjs';
import {
  codeFingerprint,
  headings,
  links,
  Slugger,
  splitFences,
} from './markdown.mjs';

export const BLOCK_START = '<!-- i18n:start -->';
export const BLOCK_END = '<!-- i18n:end -->';
/** Left in a skeleton so an untranslated file is greppable and un-shippable. */
export const TODO_MARKER = '<!-- i18n:todo -->';

/**
 * Git's own hash for the file's current bytes. `--no-filters` keeps the answer
 * identical whether or not the checkout applies CRLF or clean/smudge filters,
 * which is what makes the stamp comparable between a laptop and CI.
 */
export function blobHash(repoRoot, file) {
  return execFileSync('git', ['hash-object', '--no-filters', '--', file], {
    cwd: repoRoot,
    encoding: 'utf8',
  }).trim();
}

function parseMeta(line) {
  const meta = {};
  for (const m of line.matchAll(/([\w-]+)=("[^"]*"|\S+)/g)) {
    meta[m[1]] = m[2].replace(/^"|"$/g, '');
  }
  return meta;
}

/** Split a document into its managed header block and the body below it. */
export function parseDocument(text) {
  const start = text.indexOf(BLOCK_START);
  const end = text.indexOf(BLOCK_END);
  if (start === -1 || end === -1 || end < start) {
    return { meta: null, header: null, body: text };
  }
  const header = text.slice(start, end + BLOCK_END.length);
  const metaLine = header.match(/<!--\s*i18n:meta\s+([^>]*?)-->/);
  return {
    meta: metaLine ? parseMeta(metaLine[1]) : {},
    header,
    body: text.slice(end + BLOCK_END.length).replace(/^\n+/, ''),
  };
}

function renderHeader(baseName, locale, meta) {
  const fields = Object.entries(meta)
    .map(([k, v]) => `${k}=${/\s/.test(String(v)) ? `"${v}"` : v}`)
    .join(' ');
  return [
    BLOCK_START,
    // Blank line, because Prettier insists on one: a comment with prose butted
    // straight against it parses as a single raw-HTML node, and `--write`
    // separates them. Every commit runs Prettier over `*.md` through
    // lint-staged, so a header it wants to reformat means the English README's
    // blob changes on commit — and every translation's stamp goes stale the
    // moment it is written.
    '',
    switcherLine(baseName, locale),
    `<!-- i18n:meta ${fields} -->`,
    BLOCK_END,
  ].join('\n');
}

/**
 * Rewrite a document's managed header, leaving the body untouched.
 *
 * Called for the English source too, so the switcher line stays correct
 * everywhere when a language is added to the table — the whole reason the
 * block is delimited rather than "the first line, probably".
 */
export function stampDocument({ baseName, locale, file, sourceBlob, status }) {
  const raw = readFileSync(file, 'utf8');
  const { meta, body } = parseDocument(raw);
  // The English file carries no hash of its own: it is the thing others are
  // measured against, and any self-stamp would be wrong the instant this
  // write lands.
  const next =
    locale === SOURCE_LOCALE
      ? { locale }
      : {
          locale,
          source: baseName,
          'source-blob': sourceBlob,
          status: status ?? meta?.status ?? 'pending',
        };
  writeFileSync(
    file,
    `${renderHeader(baseName, locale, next)}\n\n${stripLegacySwitcher(body)}`,
    'utf8',
  );
  return next;
}

/**
 * Strip a leading hand-written language switcher from a body.
 *
 * state-in-url's README opened with one before any of this existed. Left in
 * place it would sit directly under the generated block saying a different,
 * shorter list of languages.
 */
function stripLegacySwitcher(body) {
  const lines = body.split('\n');
  const first = lines.findIndex((l) => l.trim() !== '');
  if (first === -1) return body;
  const line = lines[first];
  const looksLikeSwitcher =
    /(\||·)/.test(line) &&
    /README\.[\w-]+\.md/.test(line) &&
    line.trim().length < 400 &&
    !line.startsWith('#');
  if (!looksLikeSwitcher) return body;
  return lines
    .slice(first + 1)
    .join('\n')
    .replace(/^\n+/, '');
}

/** The English body every skeleton starts from. */
export function skeletonBody(sourceText) {
  const { body } = parseDocument(sourceText);
  return stripLegacySwitcher(body);
}

// ---------------------------------------------------------------- validation

/**
 * Structural invariants a translation has to keep.
 *
 * Every check here answers "did the translator change something that isn't
 * language?" — dropped sections, invented links, code edited into something
 * that no longer runs. Prose itself is unverifiable by a script and is not
 * attempted.
 */
export function validate({
  sourceText,
  targetText,
  baseName,
  locale,
  currentBlob,
  linkPrefix,
}) {
  const problems = [];
  const add = (kind, detail) => problems.push({ kind, detail });

  const { meta, header } = parseDocument(targetText);
  if (!header) {
    add('no-header', `missing the ${BLOCK_START} … ${BLOCK_END} block`);
  } else {
    if (meta['source-blob'] !== currentBlob) {
      add(
        'stale',
        `translated from ${baseName}@${(meta['source-blob'] ?? '?').slice(0, 8)}, which is now ${currentBlob.slice(0, 8)}`,
      );
    }
    if (meta.status !== 'translated')
      add('pending', `status=${meta.status ?? 'unset'}`);
    const expected = switcherLine(baseName, locale);
    if (!header.includes(expected))
      add('switcher', 'language switcher line is out of date');
  }

  if (targetText.includes(TODO_MARKER))
    add('todo', `${TODO_MARKER} still present`);

  const src = splitFences(sourceText);
  const tgt = splitFences(targetText);
  if (tgt.unterminated !== null)
    add('fence-unterminated', `line ${tgt.unterminated}`);

  if (src.fences.length !== tgt.fences.length) {
    add(
      'fence-count',
      `${src.fences.length} code blocks in English, ${tgt.fences.length} here`,
    );
  } else {
    src.fences.forEach((fence, i) => {
      if (codeFingerprint(fence) !== codeFingerprint(tgt.fences[i])) {
        add(
          'fence-changed',
          `code block ${i + 1} (\`${fence.lang || 'no lang'}\`) differs beyond its comments`,
        );
      }
    });
  }

  const srcHeadings = headings(src.prose);
  const tgtHeadings = headings(tgt.prose);
  if (srcHeadings.length !== tgtHeadings.length) {
    add(
      'heading-count',
      `${srcHeadings.length} headings in English, ${tgtHeadings.length} here`,
    );
  } else {
    const shape = (hs) => hs.map((h) => h.depth).join(',');
    if (shape(srcHeadings) !== shape(tgtHeadings))
      add('heading-shape', 'heading levels are in a different order');
  }

  // The H1 is the product's name, and a name does not translate. Every one of
  // these READMEs opens with it, and every one of the eight translations of
  // this one had rendered it in its own language — "Menú de desplazamiento
  // horizontal para React" — which is a description, not what the package is
  // called. The paragraph underneath is where the description belongs, and it
  // is already translated.
  const h1 = (hs) => hs.find((h) => h.depth === 1)?.text;
  if (h1(srcHeadings) && h1(tgtHeadings) !== h1(srcHeadings)) {
    add(
      'h1-translated',
      `H1 is "${h1(tgtHeadings)}"; it is the product name and stays "${h1(srcHeadings)}"`,
    );
  }

  // Links: same external targets, same count, and every in-document anchor
  // resolves against this file's own translated headings.
  // A translated page links to its own locale's siblings — `/fr/docs/x/` where
  // English says `/docs/x/`. That is the correct behaviour, not a rewritten
  // link, so the prefix comes off before the two sets are compared. Anything
  // still different after that is a link the translation really did change.
  const unprefix = (url) =>
    linkPrefix && url.startsWith(`/${linkPrefix}/`)
      ? url.slice(linkPrefix.length + 1)
      : url;
  const external = (list, strip) =>
    list
      .map((l) => (strip ? unprefix(l.url) : l.url))
      .filter((u) => u && !u.startsWith('#'))
      .sort();
  const srcLinks = external(links(src.prose), false);
  const tgtLinks = external(links(tgt.prose), true);
  // A translated document links to its own language's siblings: the switcher
  // at the top points at every other locale of itself, and a link to
  // `useUrlState/README.md` should become `useUrlState/README.ja.md`. Both are
  // correct, and both look like a rewritten link unless the locale infix comes
  // off first.
  const codes = ALL_LOCALES.map((l) => l.code).filter(
    (c) => c !== SOURCE_LOCALE,
  );
  const delocalize = (url) => {
    for (const code of codes) {
      const infix = `.${code}.`;
      if (url.includes(infix)) return url.replace(infix, '.');
    }
    return url;
  };
  const switcherTargets = new Set(
    ALL_LOCALES.map((l) => `./${localizedName(baseName, l.code)}`),
  );
  const normalizedTgt = tgtLinks.map(delocalize);
  const missing = srcLinks.filter((u) => !normalizedTgt.includes(u));
  const added = normalizedTgt.filter((u) => !srcLinks.includes(u));
  const realMissing = missing.filter((u) => !switcherTargets.has(u));
  const realAdded = added.filter((u) => !switcherTargets.has(u));
  if (realMissing.length)
    add(
      'link-missing',
      `${realMissing.length} link(s) dropped, e.g. ${realMissing[0]}`,
    );
  if (realAdded.length)
    add(
      'link-added',
      `${realAdded.length} link(s) not in English, e.g. ${realAdded[0]}`,
    );

  const slugger = new Slugger();
  const slugs = new Set(tgtHeadings.map((h) => slugger.slug(h.text)));
  const anchors = links(tgt.prose)
    .map((l) => l.url)
    .filter((u) => u.startsWith('#') && u.length > 1)
    .map((u) => decodeURIComponent(u.slice(1)));
  const broken = [...new Set(anchors.filter((a) => !slugs.has(a)))];
  if (broken.length) {
    add(
      'anchor-broken',
      `${broken.length} anchor(s) point at no heading: ${broken.slice(0, 4).join(', ')}`,
    );
  }

  return problems;
}

/** Every locale file a document expects, present or not. */
export function targetsFor(repoRoot, sourceRelPath) {
  const dir = path.dirname(sourceRelPath);
  const baseName = path.basename(sourceRelPath);
  return ALL_LOCALES.filter((l) => l.code !== SOURCE_LOCALE).map((l) => {
    const rel = path.join(dir, localizedName(baseName, l.code));
    return {
      locale: l,
      rel,
      abs: path.join(repoRoot, rel),
      exists: existsSync(path.join(repoRoot, rel)),
    };
  });
}
