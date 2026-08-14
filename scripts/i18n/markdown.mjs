// Markdown primitives shared by the sync and check commands. Deliberately
// dependency-free: this runs in CI, in a git hook and from a one-off `node`
// invocation, and none of those should need an install first.

/**
 * GitHub's heading-anchor algorithm, reimplemented.
 *
 * Lowercase, drop inline HTML and everything that isn't a letter, number,
 * combining mark, connector or hyphen, then turn spaces into hyphens.
 * Duplicates get `-1`, `-2`, … in document order, which is why this needs a
 * fresh `Slugger` per document rather than a bare function.
 *
 * The Unicode classes matter more than they look: they are what makes CJK,
 * Cyrillic and Vietnamese headings slug the way GitHub slugs them, so a
 * translated table of contents links to its own translated headings instead
 * of to nothing.
 */
export class Slugger {
  #seen = new Map();

  slug(text) {
    const base = text
      .replace(/<[^>]*>/g, '')
      .replace(/!\[([^\]]*)\]\([^)]*\)/g, '$1')
      .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
      .replace(/[`*_~]/g, '')
      .toLowerCase()
      .trim()
      .replace(/[^\p{L}\p{N}\p{M}\p{Pc}\- ]/gu, '')
      .replace(/ /g, '-');

    const count = this.#seen.get(base) ?? 0;
    this.#seen.set(base, count + 1);
    return count === 0 ? base : `${base}-${count}`;
  }
}

/**
 * Split a document into fenced-code and non-code regions.
 *
 * Everything downstream — headings, links, prose — has to ignore code, or a
 * `# comment` inside a bash block is read as an H1 and a URL in a snippet is
 * read as a link the translator moved. Both happen in these READMEs.
 */
export function splitFences(source) {
  const lines = source.split('\n');
  /** @type {{lang: string, code: string, start: number}[]} */
  const fences = [];
  const prose = [];
  let open = null;

  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i];
    const marker = line.match(/^(\s*)(`{3,}|~{3,})(.*)$/);

    if (open) {
      // A closing fence is the same character, at least as long, and carries
      // no info string — anything else is content, including nested markers.
      if (
        marker &&
        marker[2][0] === open.char &&
        marker[2].length >= open.length &&
        !marker[3].trim()
      ) {
        fences.push({
          lang: open.lang,
          code: open.body.join('\n'),
          start: open.start,
        });
        open = null;
      } else {
        open.body.push(line);
      }
      prose.push('');
      continue;
    }

    if (marker) {
      open = {
        char: marker[2][0],
        length: marker[2].length,
        lang: marker[3].trim().split(/\s+/)[0] ?? '',
        body: [],
        start: i + 1,
      };
      prose.push('');
      continue;
    }

    prose.push(line);
  }

  // An unterminated fence is a syntax error in the making; report it as one
  // rather than silently treating the rest of the file as code.
  if (open) {
    return { fences, prose: prose.join('\n'), unterminated: open.start };
  }
  return { fences, prose: prose.join('\n'), unterminated: null };
}

/**
 * Which comment syntax a fence's language uses.
 *
 * Split by family rather than handled together, because the two markers are
 * each other's false positives: `#` is a private field in TypeScript, and an
 * unquoted `https://` in a plain-text block is not the start of a comment.
 * Anything unrecognised — including the very common bare fence — is treated as
 * text, where `#` is the convention these docs use.
 */
const SLASH_LANGS = new Set([
  'ts',
  'tsx',
  'typescript',
  'js',
  'jsx',
  'javascript',
  'mjs',
  'cjs',
  'java',
  'c',
  'cpp',
  'cs',
  'go',
  'rust',
  'rs',
  'swift',
  'kotlin',
  'php',
  'scala',
  'json5',
]);

/**
 * Drop a trailing line comment, respecting string literals so a `#` or `//`
 * inside quotes stays put.
 */
function stripTrailingComment(line, lang) {
  const marker = SLASH_LANGS.has(lang) ? '//' : '#';
  let quote = null;
  for (let i = 0; i < line.length; i += 1) {
    const ch = line[i];
    if (quote) {
      if (ch === '\\') i += 1;
      else if (ch === quote) quote = null;
      continue;
    }
    if (ch === '"' || ch === "'" || ch === '`') {
      quote = ch;
      continue;
    }
    if (marker === '//' && ch === '/' && line[i + 1] === '/')
      return line.slice(0, i);
    if (marker === '#' && ch === '#') {
      // `#!` on the first line is a shebang, not a comment about the code.
      if (i === 0 && line[1] === '!') return line;
      return line.slice(0, i);
    }
  }
  return line;
}

/**
 * What a code block has to keep across languages.
 *
 * Comments are stripped before hashing — whole-line and trailing both — so a
 * translator may localise `// the user's name` or `pnpm dev # start it` and
 * still pass, while renaming a variable, reordering two lines or dropping one
 * fails. Blank lines go too; they survive no round trip reliably.
 *
 * The deliberate blind spot: a real code change hidden after a `#` in a
 * text-family block is invisible here. Closing it would mean cutting nothing,
 * which flags every translated comment instead — and translated comments are
 * the norm in these docs.
 */
export function codeFingerprint(fence) {
  const stripped = fence.code
    .split('\n')
    .map((l) => stripTrailingComment(l, fence.lang).trim())
    .filter((l) => l && !/^(\/\/|#|\*|\/\*|<!--)/.test(l))
    .join('\n');
  return `${fence.lang}\u0000${stripped}`;
}

/**
 * Headings, from the prose regions only. `depth` is the `#` count.
 *
 * Up to three leading spaces still make a heading in CommonMark, and these
 * READMEs rely on it — the title inside the centred `<div>` is indented to
 * match the HTML around it. Missing those shifts every duplicate-slug suffix
 * after them.
 */
export function headings(prose) {
  const out = [];
  const lines = prose.split('\n');
  for (let i = 0; i < lines.length; i += 1) {
    const m = lines[i].match(/^ {0,3}(#{1,6})\s+(.*?)\s*#*\s*$/);
    if (m) out.push({ depth: m[1].length, text: m[2], line: i + 1 });
  }
  return out;
}

/** Every link and image target in the prose, plus bare autolinks. */
export function links(prose) {
  const out = [];
  const inline =
    /(!)?\[(?:[^\]\\]|\\.)*\]\(\s*<?([^)\s>]*)>?(?:\s+"[^"]*")?\s*\)/g;
  for (const m of prose.matchAll(inline)) {
    out.push({ url: m[2], image: Boolean(m[1]) });
  }
  const reference = /^\s{0,3}\[[^\]]+\]:\s*<?(\S+)>?/gm;
  for (const m of prose.matchAll(reference))
    out.push({ url: m[1], image: false });
  const html = /<(?:a\s[^>]*href|img\s[^>]*src)\s*=\s*["']([^"']+)["']/gi;
  for (const m of prose.matchAll(html)) out.push({ url: m[1], image: false });
  const autolink = /<((?:https?|mailto):[^>\s]+)>/g;
  for (const m of prose.matchAll(autolink))
    out.push({ url: m[1], image: false });
  return out;
}

/**
 * Render a nested bullet list of links to every heading, the way the hand-
 * written tables of contents in these repos are shaped.
 *
 * `min`/`max` bound which levels appear. Indentation follows the shallowest
 * heading present rather than `#` count, so a document whose top level is `##`
 * doesn't come out indented one step.
 */
export function tableOfContents(source, { min = 2, max = 4 } = {}) {
  const { prose } = splitFences(source);
  const slugger = new Slugger();
  const all = headings(prose);
  // Every heading is slugged, including ones outside the range: GitHub's
  // duplicate counter runs over the whole document, so skipping any would
  // shift the `-1` suffixes of the ones that remain.
  const slugged = all.map((h) => ({ ...h, slug: slugger.slug(h.text) }));
  const shown = slugged.filter((h) => h.depth >= min && h.depth <= max);
  if (shown.length === 0) return '';
  const base = Math.min(...shown.map((h) => h.depth));

  return shown
    .map((h) => {
      const text = h.text.replace(/^\[(.*)\]\([^)]*\)$/, '$1');
      return `${'  '.repeat(h.depth - base)}- [${text}](#${h.slug})`;
    })
    .join('\n');
}

/** Replace the block between `<!-- toc:start -->` and `<!-- toc:end -->`. */
export const TOC_START = '<!-- toc:start -->';
export const TOC_END = '<!-- toc:end -->';

export function replaceToc(source, toc) {
  const start = source.indexOf(TOC_START);
  const end = source.indexOf(TOC_END);
  if (start === -1 || end === -1 || end < start) return null;
  return (
    source.slice(0, start + TOC_START.length) +
    `\n\n${toc}\n\n` +
    source.slice(end)
  );
}
