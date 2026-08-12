/**
 * turndown-plugin-gfm ships no types. Only `gfm` is used (vite.config.ts, to
 * convert the comparison table into a Markdown table rather than raw `<tr>`),
 * so this declares that one export against Turndown's own plugin type instead
 * of pulling in a `@types` package for a build-only dependency.
 */
declare module 'turndown-plugin-gfm' {
  import type TurndownService from 'turndown';

  export const gfm: TurndownService.Plugin;
  export const tables: TurndownService.Plugin;
  export const strikethrough: TurndownService.Plugin;
  export const taskListItems: TurndownService.Plugin;
}
