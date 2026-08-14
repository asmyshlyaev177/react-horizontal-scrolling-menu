// The one place the locale set is written down. Everything else — README
// suffixes, content directory names, `hreflang` attributes, the language
// switcher line at the top of each translated document — is derived from this
// table, so adding a language is a single edit here plus a `pnpm i18n:init`.
//
// `code` is BCP 47 and is what goes in `<html lang>` and `hreflang`. `dir` is
// the lowercase filesystem spelling, because Astro/Starlight content
// collections and URL paths are case-sensitive in ways that bite on
// case-insensitive filesystems. They differ only for the two regional locales.

/** The locale the content is authored in. Never a target; never suffixed. */
export const SOURCE_LOCALE = 'en';

export const SOURCE = {
  code: 'en',
  dir: 'en',
  /** Endonym — how the language names itself, which is what a reader scanning a switcher looks for. */
  label: 'English',
  /** Exonym, for prompts and reports written in English. */
  english: 'English',
};

/** @type {ReadonlyArray<{code: string, dir: string, label: string, english: string}>} */
export const LOCALES = [
  {
    code: 'zh-CN',
    dir: 'zh-cn',
    label: '简体中文',
    english: 'Chinese (Simplified)',
  },
  { code: 'ja', dir: 'ja', label: '日本語', english: 'Japanese' },
  { code: 'ko', dir: 'ko', label: '한국어', english: 'Korean' },
  { code: 'ru', dir: 'ru', label: 'Русский', english: 'Russian' },
  { code: 'es', dir: 'es', label: 'Español', english: 'Spanish' },
  {
    code: 'pt-BR',
    dir: 'pt-br',
    label: 'Português (BR)',
    english: 'Portuguese (Brazil)',
  },
  { code: 'fr', dir: 'fr', label: 'Français', english: 'French' },
  { code: 'vi', dir: 'vi', label: 'Tiếng Việt', english: 'Vietnamese' },
];

export const ALL_LOCALES = [SOURCE, ...LOCALES];

export const CODES = LOCALES.map((l) => l.code);

/** Lookup accepting either spelling, so CLI args can be `pt-BR` or `pt-br`. */
export function findLocale(input) {
  const needle = String(input).toLowerCase();
  return ALL_LOCALES.find(
    (l) => l.code.toLowerCase() === needle || l.dir === needle,
  );
}

/**
 * `README.md` → `README.ja.md`. The source locale keeps the bare name: it is
 * what GitHub and npm render by default, and renaming it would break every
 * inbound link that has ever been written to this repo.
 */
export function localizedName(baseName, code) {
  if (code === SOURCE_LOCALE) return baseName;
  const dot = baseName.lastIndexOf('.');
  return dot === -1
    ? `${baseName}.${code}`
    : `${baseName.slice(0, dot)}.${code}${baseName.slice(dot)}`;
}

/**
 * The switcher line that opens every translated document: the current language
 * as plain text, every other one as a relative link. Plain text for self —
 * a link to the page you are already on is noise, and its absence is how a
 * reader sees which language they got.
 */
export function switcherLine(baseName, current) {
  return ALL_LOCALES.map((l) =>
    l.code === current
      ? l.label
      : `[${l.label}](./${localizedName(baseName, l.code)})`,
  ).join(' · ');
}
