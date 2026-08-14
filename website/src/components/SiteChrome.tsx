import { useRouterState } from '@tanstack/react-router';

import { copyFor } from '../content';
import { codeOfDir } from '../i18n';
import {
  CHANGELOG,
  GITHUB,
  ISSUES,
  LLMS_TXT,
  NPM,
  STORYBOOK,
} from '../lib/links';
import { GitHub, Mark } from './Icons';
import { LanguagePicker } from './LanguagePicker';
import { ThemeToggle } from './ThemeToggle';

/**
 * `locale` is the content-directory name (`en`, `ja`, …). Every in-site link
 * below carries it, so following the nav keeps the reader in the language they
 * were reading.
 */
export function SiteHeader({ locale = 'en' }: { locale?: string }) {
  const copy = copyFor(codeOfDir(locale)).chrome;
  const prefix = locale === 'en' ? '' : `/${locale}`;
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <>
      <a className="skip-link" href="#main">
        {copy.skipToContent}
      </a>
      <header className="site-header">
        <div className="site-container">
          <a
            className="brand"
            href={prefix || '/'}
            aria-label={copy.brand.ariaLabel}
          >
            <Mark />
            <span>{copy.brand.name}</span>
          </a>
          <nav className="site-nav" aria-label={copy.nav.ariaLabel}>
            <a className="nav-link" href={`${prefix}/examples`}>
              {copy.nav.examples}
            </a>
            <a className="nav-link" href={`${prefix}/compare`}>
              {copy.nav.compare}
            </a>
            <a className="nav-link" href={NPM}>
              {copy.nav.npm}
            </a>
            <a className="nav-link" href={GITHUB}>
              <GitHub />
              {copy.nav.github}
            </a>
            {/* `path`, not the default: without it every language links to
                its homepage, so switching language on an example page loses
                the page. The pathname is the only thing here that knows. */}
            <LanguagePicker
              current={locale}
              path={pathname}
              label={copy.nav.languageLabel}
            />
            <ThemeToggle label={copy.nav.themeToggle} />
          </nav>
        </div>
      </header>
    </>
  );
}

export function SiteFooter({ locale = 'en' }: { locale?: string }) {
  const copy = copyFor(codeOfDir(locale)).chrome;
  const prefix = locale === 'en' ? '' : `/${locale}`;
  return (
    <footer className="site-footer">
      <div className="site-container">
        <a href={`${prefix}/examples`}>{copy.footer.examples}</a>
        <a href={`${prefix}/compare`}>{copy.footer.compare}</a>
        <a href={GITHUB}>{copy.footer.github}</a>
        <a href={NPM}>{copy.footer.npm}</a>
        <a href={STORYBOOK}>{copy.footer.storybook}</a>
        <a href={CHANGELOG}>{copy.footer.changelog}</a>
        <a href={ISSUES}>{copy.footer.issues}</a>
        <a href={LLMS_TXT}>{copy.footer.llmsTxt}</a>
        <span className="license">{copy.footer.license}</span>
      </div>
    </footer>
  );
}
