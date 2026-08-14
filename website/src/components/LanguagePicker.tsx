import { ALL_LOCALES, codeOfDir, localePrefix, stripLocale } from '../i18n';
import { Globe } from './Icons';

/**
 * The language switcher: a native `<select>`, plus the same nine links again
 * inside `<noscript>`.
 *
 * A `<select>` because nine endonyms laid out inline is a wall of text in the
 * header, and because on a phone this opens the OS picker rather than a
 * bespoke menu nobody has used before.
 *
 * The `<noscript>` block is not belt-and-braces. Two things read this markup
 * and neither runs the change handler: a reader without JS, and a crawler
 * looking for the other language versions of a page. Prerendering used to be
 * the third — `crawlLinks` in vite.config.ts discovers pages by following
 * hrefs — but the prerenderer is given the page list explicitly now, so a
 * switcher that ships no anchors can no longer leave 192 pages unbuilt.
 *
 * Uncontrolled (`defaultValue`, not `value`): the selection is never state
 * this component owns, because choosing one navigates away.
 */
export function LanguagePicker({
  current,
  path = '/',
  label,
}: {
  /** Content-directory name of the language being rendered. */
  current: string;
  /** Locale-independent path of the current page. */
  path?: string;
  label: string;
}) {
  const here = stripLocale(path);
  const hrefFor = (code: string) =>
    `${localePrefix(code)}${here}`.replace(/\/$/, '') || '/';

  return (
    <span className="lang-picker">
      <Globe />
      <select
        className="lang-select"
        aria-label={label}
        defaultValue={codeOfDir(current)}
        onChange={(event) => {
          window.location.assign(hrefFor(event.target.value));
        }}
      >
        {ALL_LOCALES.map((locale) => (
          // Valued by BCP 47 code, not directory name, so `hrefFor` gets what
          // `localePrefix` expects — the two differ for zh-CN and pt-BR.
          <option key={locale.code} value={locale.code} lang={locale.code}>
            {locale.label}
          </option>
        ))}
      </select>
      <noscript>
        <nav className="lang-links" aria-label={label}>
          {ALL_LOCALES.map((locale) =>
            locale.dir === current ? (
              <span key={locale.code} aria-current="true">
                {locale.label}
              </span>
            ) : (
              <a
                key={locale.code}
                href={hrefFor(locale.code)}
                hrefLang={locale.code}
              >
                {locale.label}
              </a>
            ),
          )}
        </nav>
      </noscript>
    </span>
  );
}
