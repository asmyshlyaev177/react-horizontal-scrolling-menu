import React from 'react';

import { Moon, Sun } from './Icons';

type Theme = 'light' | 'dark';

/** Must match --bg in app.css and the theme-color metas in __root.tsx. */
const THEME_COLOR: Record<Theme, string> = {
  light: '#ffffff',
  dark: '#0a0a0a',
};

/**
 * The two theme-color metas pick by media query, which a data-theme override
 * can't reach — retint them by hand while an override is active, restore
 * them when back on system so the media queries decide again. Only ever
 * called after hydration: mutating these React-owned nodes any earlier makes
 * hydration fail to match them and insert duplicates.
 */
function syncMetaThemeColor(override: Theme | null) {
  for (const meta of document.querySelectorAll('meta[name="theme-color"]')) {
    const media = meta.getAttribute('media') ?? '';
    const theme =
      override ??
      (media.includes('dark') ? ('dark' as const) : ('light' as const));
    meta.setAttribute('content', THEME_COLOR[theme]);
  }
}

/**
 * Two visible states over a three-state model: no stored override means
 * "follow the OS". A click flips the effective theme; if that lands on what
 * the OS prefers anyway, the override is dropped instead of stored, so the
 * page goes back to tracking system changes for anyone who toggled home.
 */
function flipTheme() {
  const root = document.documentElement;
  const systemTheme: Theme = window.matchMedia('(prefers-color-scheme: dark)')
    .matches
    ? 'dark'
    : 'light';
  const current = (root.dataset.theme as Theme | undefined) ?? systemTheme;
  const next: Theme = current === 'dark' ? 'light' : 'dark';
  const isSystem = next === systemTheme;

  if (isSystem) {
    delete root.dataset.theme;
  } else {
    root.dataset.theme = next;
  }

  try {
    if (isSystem) {
      localStorage.removeItem('theme');
    } else {
      localStorage.setItem('theme', next);
    }
  } catch {
    // Storage unavailable (private mode) — the attribute still themes the
    // page for this visit, it just won't survive a reload.
  }

  syncMetaThemeColor(isSystem ? null : next);
}

/** `label` is the button's only text; SiteChrome passes the reader's language. */
export function ThemeToggle({ label }: { label: string }) {
  // THEME_INIT in __root.tsx applied a stored override before paint but left
  // the metas alone (see syncMetaThemeColor) — catch them up on mount.
  React.useEffect(() => {
    const override = document.documentElement.dataset.theme;
    if (override === 'light' || override === 'dark') {
      syncMetaThemeColor(override);
    }
  }, []);

  return (
    <button
      type="button"
      className="nav-link theme-toggle"
      aria-label={label}
      onClick={flipTheme}
    >
      <Sun className="icon-sun" />
      <Moon className="icon-moon" />
    </button>
  );
}
