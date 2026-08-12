import { Link } from '@tanstack/react-router';

import {
  CHANGELOG,
  GITHUB,
  ISSUES,
  LLMS_TXT,
  NPM,
  STORYBOOK,
} from '../lib/links';
import { GitHub, Mark } from './Icons';
import { ThemeToggle } from './ThemeToggle';

export function SiteHeader() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <div className="site-container">
          <Link
            className="brand"
            to="/"
            aria-label="react-horizontal-scrolling-menu — home"
          >
            <Mark />
            <span>react-horizontal-scrolling-menu</span>
          </Link>
          <nav className="site-nav" aria-label="Site">
            <Link className="nav-link" to="/examples">
              Examples
            </Link>
            <Link className="nav-link" to="/compare">
              Compare
            </Link>
            <a className="nav-link" href={NPM}>
              npm
            </a>
            <a className="nav-link" href={GITHUB}>
              <GitHub />
              GitHub
            </a>
            <ThemeToggle />
          </nav>
        </div>
      </header>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-container">
        <Link to="/examples">Examples</Link>
        <Link to="/compare">Compare</Link>
        <a href={GITHUB}>GitHub</a>
        <a href={NPM}>npm</a>
        <a href={STORYBOOK}>Storybook</a>
        <a href={CHANGELOG}>Changelog</a>
        <a href={ISSUES}>Issues</a>
        <a href={LLMS_TXT}>llms.txt</a>
        <span className="license">MIT © Aleksandr Smyshliaev</span>
      </div>
    </footer>
  );
}
