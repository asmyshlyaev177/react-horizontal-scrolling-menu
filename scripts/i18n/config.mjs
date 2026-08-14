// What this repo translates. The locale set itself lives in locales.mjs and is
// identical across the three repos that share this toolkit; only this file
// differs between them.

import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const repoRoot = path.resolve(
  fileURLToPath(new URL('../..', import.meta.url)),
);

/**
 * `source` is the English file, relative to the repo root. Its translations
 * are `<name>.<locale>.<ext>` beside it.
 *
 * `toc: null` because this README has no table of contents — it navigates by
 * the link row under the title instead. Add a `<!-- toc:start -->` /
 * `<!-- toc:end -->` pair and a `toc` range here if that ever changes.
 *
 * README.md is also the npm README: the root package.json is the published
 * `react-horizontal-scrolling-menu` package. npm force-includes every
 * `README*` in the tarball regardless of the `files` array, so the
 * translations ship with it.
 */
export const documents = [
  { source: 'README.md', toc: null },

  // Deliberately not translated, and each for its own reason:
  //
  // - skills/*/SKILL.md ships inside the npm tarball and is loaded by name by
  //   @tanstack/intent, whose format has no locale dimension — there is
  //   nowhere supported to put a translated one.
  // - ROADMAP.md, CONTRIBUTING.md, CODE_OF_CONDUCT.md are contributor-facing,
  //   and contributions arrive in English.
  // - example-nextjs/README.md is untouched create-next-app boilerplate.
];
