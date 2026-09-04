// Types for locales.mjs, so the site's TypeScript and .astro files can import
// the same locale table the build scripts use instead of restating it.
//
// The table stays JavaScript because astro.config.mjs and the Node CLIs load
// it directly, and neither can strip types on every supported Node version.

export interface Locale {
  /** BCP 47 tag — `<html lang>`, `hreflang`, Starlight's `lang`. */
  code: string;
  /** Lowercase filesystem and URL spelling. Differs from `code` for zh-CN and pt-BR. */
  dir: string;
  /** Endonym, for the language switcher. */
  label: string;
  /** English name, for reports and prompts. */
  english: string;
  /** Told to crawlers, or `noindex` and out of every hreflang cluster and the sitemap. */
  indexed: boolean;
}

export const SOURCE_LOCALE: 'en';
export const SOURCE: Locale;
export const LOCALES: readonly Locale[];
export const ALL_LOCALES: readonly Locale[];
/** The locales a crawler is told about — `ALL_LOCALES` with `indexed`. */
export const INDEXED_LOCALES: readonly Locale[];
export const CODES: readonly string[];
export function findLocale(input: string): Locale | undefined;
export function localizedName(baseName: string, code: string): string;
export function switcherLine(baseName: string, current: string): string;
