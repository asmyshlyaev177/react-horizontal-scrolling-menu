import { Link, type LinkProps, useRouterState } from '@tanstack/react-router';
import { Fragment, type ReactNode } from 'react';

import type { ProseSection } from '../content/types';
import { localeFromPath, localePrefix } from '../i18n';

/**
 * The tiny Markdown renderer the content modules are authored against.
 *
 * Copy lives in `src/content/` as Markdown strings rather than JSX so a
 * translator (human or model) never has to touch React. This turns one of
 * those strings back into the exact element structure the pages used to
 * write by hand — `<p>`, `<ul>`/`<li>`, `<code>`, `<a>`, `<strong>`,
 * `<em>` — and nothing else. No dependency, no `dangerouslySetInnerHTML`:
 * it builds a React element tree.
 *
 * The supported subset is deliberately the whole list:
 *
 *   `code`   **strong**   *emphasis*   [text](url)
 *   blank line between paragraphs, "- " lines for a list.
 *
 * The content is authored in this repo, not submitted by users, so nothing
 * is escaped and unknown syntax is passed through as literal text.
 */

// Alternation order matters: `**` must be tried before `*`, or every strong
// span would parse as an emphasis containing a stray asterisk.
const INLINE_PATTERN =
  '`([^`]+)`|\\*\\*([\\s\\S]+?)\\*\\*|\\*([\\s\\S]+?)\\*|\\[([^\\]]+)\\]\\(([^)\\s]+)\\)';

/**
 * Internal hrefs render through the router's `Link` so they stay client-side
 * navigations, exactly as the hand-written JSX did; anything else is a plain
 * anchor. `to` is a union of the generated route paths, and a string read
 * from content can't be narrowed to it at compile time — a bad path shows up
 * as a dev-time router warning, the same as any other typo'd link.
 *
 * Content modules spell in-site links locale-independently (`/examples/x`) —
 * a translation is a translation of the English module and copies its hrefs —
 * so `prefix` is prepended here. Without it every in-prose link on a
 * translated page drops the reader back into English.
 */
function anchor(
  text: string,
  href: string,
  key: number,
  prefix: string,
): ReactNode {
  const children = renderInline(text, prefix);
  return href.startsWith('/') ? (
    <Link key={key} to={`${prefix}${href}` as LinkProps['to']}>
      {children}
    </Link>
  ) : (
    <a key={key} href={href}>
      {children}
    </a>
  );
}

/**
 * The one span a match represents. Exactly one capture group is ever set —
 * the alternation in INLINE_PATTERN guarantees it — so this is a lookup, not
 * a decision, and keeping it out of the loop keeps the loop about scanning.
 */
function inlineNode(
  match: RegExpExecArray,
  key: number,
  prefix: string,
): ReactNode {
  const [, code, strong, em, linkText, href] = match;
  if (code !== undefined) return <code key={key}>{code}</code>;
  if (strong !== undefined)
    return <strong key={key}>{renderInline(strong, prefix)}</strong>;
  if (em !== undefined) return <em key={key}>{renderInline(em, prefix)}</em>;
  if (linkText !== undefined && href !== undefined)
    return anchor(linkText, href, key, prefix);
  return null;
}

/** Markdown inline spans → React nodes. No block handling. */
function renderInline(text: string, prefix: string): ReactNode[] {
  // A fresh regex per call: the recursive calls below share the source but
  // must not share `lastIndex` with the loop that spawned them.
  const pattern = new RegExp(INLINE_PATTERN, 'g');
  const nodes: ReactNode[] = [];
  let last = 0;
  let key = 0;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > last) nodes.push(text.slice(last, match.index));
    const node = inlineNode(match, key, prefix);
    if (node !== null) {
      nodes.push(node);
      key += 1;
    }
    last = match.index + match[0].length;
  }

  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

type Block =
  { type: 'paragraph'; lines: string[] } | { type: 'list'; items: string[] };

/**
 * Add one line to the block being built, opening a new block when the line's
 * kind differs from the open one. Returns the block now open.
 */
function append(blocks: Block[], current: Block | null, line: string): Block {
  if (line.startsWith('- ')) {
    const item = line.slice(2).trim();
    if (current?.type === 'list') {
      current.items.push(item);
      return current;
    }
    const list: Block = { type: 'list', items: [item] };
    blocks.push(list);
    return list;
  }

  if (current?.type === 'paragraph') {
    current.lines.push(line);
    return current;
  }
  const paragraph: Block = { type: 'paragraph', lines: [line] };
  blocks.push(paragraph);
  return paragraph;
}

/** Blank-line separated paragraphs, plus runs of "- " lines as one list. */
function parseBlocks(text: string): Block[] {
  const blocks: Block[] = [];
  let current: Block | null = null;

  for (const raw of text.split('\n')) {
    const line = raw.trim();

    if (line === '') {
      current = null;
      continue;
    }

    // A soft wrap inside a paragraph is a space, as in Markdown; consecutive
    // "- " lines are one list.
    current = append(blocks, current, line);
  }

  return blocks;
}

/**
 * Inline-only: use inside an element that already exists in the markup.
 *
 * Every path through this module lands here — `Prose` and `ProseSections` both
 * delegate — so it is the one place that has to know which language it is
 * rendering, and it learns it the way `__root.tsx` learns `<html lang>`: from
 * the matched pathname. Passing a `locale` prop instead would mean threading
 * one through twenty-one views and every `<Inline>` inside them.
 */
export function Inline({ text }: { text: string }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return <>{renderInline(text, localePrefix(localeFromPath(pathname).code))}</>;
}

/** Block-level: paragraphs and lists for a whole Markdown body. */
export function Prose({ text }: { text: string }) {
  return (
    <>
      {parseBlocks(text).map((block, i) =>
        block.type === 'list' ? (
          <ul key={i}>
            {block.items.map((item, j) => (
              <li key={j}>
                <Inline text={item} />
              </li>
            ))}
          </ul>
        ) : (
          <p key={i}>
            <Inline text={block.lines.join(' ')} />
          </p>
        ),
      )}
    </>
  );
}

/** A page's prose: each section's `<h2>` followed by its body. */
export function ProseSections({
  sections,
}: {
  sections: readonly ProseSection[];
}) {
  return (
    <>
      {sections.map((section, i) => (
        <Fragment key={i}>
          <h2>
            <Inline text={section.heading} />
          </h2>
          <Prose text={section.body} />
        </Fragment>
      ))}
    </>
  );
}
