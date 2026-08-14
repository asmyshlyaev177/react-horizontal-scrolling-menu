// Everything the site needs to render a route in a language.
//
// The locale table comes from scripts/i18n/locales.mjs at the repo root — the
// same file the README tooling reads — so the site and the docs cannot
// disagree about which languages exist or how they are spelled.

import {
  ALL_LOCALES,
  type Locale,
  LOCALES,
  SOURCE,
  SOURCE_LOCALE,
} from '../../scripts/i18n/locales.mjs';
import { SITE_URL } from './lib/links';

export { ALL_LOCALES, LOCALES, SOURCE, SOURCE_LOCALE };
export type { Locale };

/** `''` for English, `/ja` for the rest. English is served unprefixed. */
export const localePrefix = (code: string) => {
  const locale = ALL_LOCALES.find((l) => l.code === code);
  return !locale || locale.code === SOURCE_LOCALE ? '' : `/${locale.dir}`;
};

/**
 * Content-directory name → BCP 47 code (`zh-cn` → `zh-CN`), English for
 * anything unknown. Components take the directory name as their `locale` prop
 * because that is what the route param carries; `copyFor` wants the code.
 */
export const codeOfDir = (dir: string) =>
  ALL_LOCALES.find((l) => l.dir === dir)?.code ?? SOURCE_LOCALE;

/** The locale a pathname is in; English for anything unprefixed. */
export function localeFromPath(pathname: string): Locale {
  const first = pathname.split('/').filter(Boolean)[0];
  return LOCALES.find((l) => l.dir === first) ?? SOURCE;
}

/** Resolve a `$locale` route param; `undefined` for anything unknown. */
export const localeFromParam = (dir: string | undefined) =>
  dir === undefined ? SOURCE : LOCALES.find((l) => l.dir === dir);

/**
 * Strip a leading locale segment, giving the locale-independent path.
 * `/ja/examples/simple` → `/examples/simple`; `/ja` → `/`.
 */
export function stripLocale(pathname: string): string {
  const first = pathname.split('/').filter(Boolean)[0];
  const locale = LOCALES.find((l) => l.dir === first);
  if (!locale) return pathname;
  const rest = pathname.slice(`/${locale.dir}`.length);
  return rest === '' ? '/' : rest;
}

/**
 * The reciprocal hreflang cluster for one page, as `<link>` descriptors.
 *
 * Every locale of a page lists every other one *and* itself, plus `x-default`
 * pointing at English — a cluster whose members disagree about who is in it is
 * discarded wholesale rather than partially honoured.
 */
export function alternateLinks(pathWithoutLocale: string) {
  // Trailing slash trimmed so the homepage's cluster spells `/ja`, not `/ja/`
  // — the same URLs the canonical and the sitemap use. A cluster that lists a
  // URL the page does not claim as canonical is a cluster Google discards.
  const href = (code: string) =>
    `${SITE_URL}${localePrefix(code)}${pathWithoutLocale}`.replace(/\/$/, '');
  return [
    ...ALL_LOCALES.map((l) => ({
      rel: 'alternate',
      hrefLang: l.code,
      href: href(l.code),
    })),
    { rel: 'alternate', hrefLang: 'x-default', href: href(SOURCE_LOCALE) },
  ];
}

/**
 * Fonts here are latin-only by construction: __root.tsx re-declares Schibsted
 * Grotesk and JetBrains Mono last with an explicit `unicode-range` and
 * `font-display: optional`, and only the latin subsets are preloaded.
 *
 * For zh/ja/ko/ru that is clean — every glyph falls outside the range, so the
 * whole run renders in one system font. Vietnamese is the case that is
 * neither: its base letters sit inside the latin range and its diacritics do
 * not, so a single word renders in two faces. These locales opt out of the
 * webfont entirely and take a consistent system stack instead.
 */
export const LATIN_ONLY_FONTS = new Set(['en', 'es', 'fr', 'pt-BR']);

export const usesWebfont = (code: string) => LATIN_ONLY_FONTS.has(code);
