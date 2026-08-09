import '@fontsource-variable/schibsted-grotesk';
import '@fontsource-variable/jetbrains-mono';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import '../styles/app.css';
import '../styles/tw.css';

import jetbrainsWoff2 from '@fontsource-variable/jetbrains-mono/files/jetbrains-mono-latin-wght-normal.woff2?url';
import schibstedWoff2 from '@fontsource-variable/schibsted-grotesk/files/schibsted-grotesk-latin-wght-normal.woff2?url';
import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
} from '@tanstack/react-router';
import type { ReactNode } from 'react';

import { SITE_URL } from '../lib/links';

/**
 * Kill the hero font swap. Fontsource declares everything font-display:
 * swap, so the headline painted in the fallback font and visibly jumped
 * when the webfont landed. Re-declaring the two latin faces LAST (this
 * style renders after the bundled CSS) wins the @font-face cascade and
 * switches them to `optional`: with the preloads in head() the real font
 * is all but always ready before first paint, and on a connection where
 * it isn't, the page simply keeps the fallback — no mid-view swap either
 * way. Non-latin subsets keep fontsource's swap behavior; the page is
 * latin. The unicode-ranges are copied verbatim from fontsource.
 */
const LATIN_RANGE =
  'U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD';

const FONT_FACES = `
@font-face {
  font-family: 'Schibsted Grotesk Variable';
  font-style: normal;
  font-display: optional;
  font-weight: 400 900;
  src: url(${schibstedWoff2}) format('woff2-variations');
  unicode-range: ${LATIN_RANGE};
}
@font-face {
  font-family: 'JetBrains Mono Variable';
  font-style: normal;
  font-display: optional;
  font-weight: 100 800;
  src: url(${jetbrainsWoff2}) format('woff2-variations');
  unicode-range: ${LATIN_RANGE};
}
`;

// ≤60 chars, package name first — the SERP truncates around 60.
const TITLE = 'react-horizontal-scrolling-menu — horizontal menu for React';
// ~155 chars — the SERP snippet cuts around 160.
const DESCRIPTION =
  'Horizontal scrolling menu for React on native browser scrolling, with per-item visibility tracking. 5.7 kB gzipped, TypeScript-first, 347k downloads/month.';

const CONTRACT = `<!--
THESIS: the component sells itself — every demo on this page IS the library
running live, and the hero dramatizes its one mechanism (per-item visibility
tracking) by dimming off-screen tiles while you drag. Refused: the generic
gradient-hero SaaS template and stat-tile proof walls.
OWN-WORLD: pure white / near-black grounds (prefers-color-scheme), one
scarlet primary (oklch hue 15), flat playful color confined to demo card
content, Schibsted Grotesk display+body, JetBrains Mono only for code/data.
STORY: a React dev arrives from npm/GitHub, drags the hero, understands the
visibility mechanism, copies the quick start, and leaves for Storybook or
npm install; a hiring manager leaves knowing who maintains it.
FIRST VIEWPORT: nav; H1 with scarlet key phrase; one-line sub; Get started +
Browse examples CTAs; full-bleed draggable category rail with live
getVisible() readout beneath.
FORM: user-pinned direction ("Product + Deno + a bit of engineering") — no
concept roll; seed key n/a (brief-pinned).
FINISH: unreviewed and undocumented is unfinished; this build ends with the
finish review, the verdict, and DESIGN.md.
-->`;

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: TITLE },
      { name: 'description', content: DESCRIPTION },
      {
        name: 'theme-color',
        media: '(prefers-color-scheme: light)',
        content: '#ffffff',
      },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: TITLE },
      { property: 'og:description', content: DESCRIPTION },
      { property: 'og:url', content: SITE_URL },
      { property: 'og:image', content: `${SITE_URL}/og.png` },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: TITLE },
      { name: 'twitter:description', content: DESCRIPTION },
      { name: 'twitter:image', content: `${SITE_URL}/og.png` },
    ],
    links: [
      // Fonts must be fetched before the stylesheet discovers them, or the
      // hero paints in the fallback font first. crossOrigin is required:
      // font requests are CORS-mode even same-origin, and a preload with
      // mismatched mode is simply thrown away (double download).
      {
        rel: 'preload',
        as: 'font',
        type: 'font/woff2',
        href: schibstedWoff2,
        crossOrigin: 'anonymous',
      },
      {
        rel: 'preload',
        as: 'font',
        type: 'font/woff2',
        href: jetbrainsWoff2,
        crossOrigin: 'anonymous',
      },
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      // Canonical is per-route (lib/seo.ts pageHead) — a root-level one
      // would duplicate on every child page.
    ],
  }),
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

/**
 * Applies a stored theme override before first paint — no flash of the wrong
 * theme. Sets ONLY the html attribute: touching the theme-color metas here
 * would edit React-owned nodes before hydration, and React answers a meta it
 * can't match by inserting a duplicate. ThemeToggle retints the metas in a
 * mount effect instead.
 */
const THEME_INIT = `try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark')document.documentElement.dataset.theme=t}catch(e){}`;

function RootDocument({ children }: { children: ReactNode }) {
  return (
    // suppressHydrationWarning: THEME_INIT sets data-theme on <html> before
    // React hydrates, which the server render can't know about.
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
        {/* Rendered outside head() because TanStack's meta merging dedupes
            by name and would drop one of the two theme-color entries. */}
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="#0a0a0a"
        />
        {/* After HeadContent so it follows the bundled CSS — see FONT_FACES. */}
        <style dangerouslySetInnerHTML={{ __html: FONT_FACES }} />
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT }} />
      </head>
      <body>
        <div
          hidden
          aria-hidden
          dangerouslySetInnerHTML={{ __html: CONTRACT }}
        />
        {children}
        <Scripts />
      </body>
    </html>
  );
}
