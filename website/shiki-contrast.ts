/**
 * Lifts each syntax token off the code panel until it clears both floors, hue
 * and chroma untouched. The ground is `--surface` — `.code-panel pre` is
 * transparent — and both themes ship as per-span custom properties, so each
 * half is scored against its own.
 */
import {
  contrast,
  hexToRgb,
  lc,
  oklchToRgb,
  parseOklch,
  parseTokens,
  readHues,
  resolve,
  type Rgb,
  rgbToOklch,
  toHex,
  tokensCss,
} from '@asmyshlyaev177/design-tokens';
import type { ShikiTransformer } from 'shiki';

/** What `tests/a11y.spec.ts` holds body-size text to. */
const LC_FLOOR = 60;
const WCAG_FLOOR = 4.5;

const STEP = 0.005;

/** The custom property each theme's colour is emitted as. */
const THEME_VAR = { light: '--shiki-light', dark: '--shiki-dark' } as const;

function panelBackgrounds(stylesheet: string): Record<string, Rgb> {
  // Read, not assumed: the hues are the one thing this project changes about
  // the shared ramp, so a hardcoded pair could vouch for a palette it left.
  const hues = readHues([stylesheet]);
  const scopes = parseTokens(tokensCss, {
    ...(hues.brand !== undefined && { '--brand-hue': hues.brand }),
    ...(hues.accent !== undefined && { '--accent-hue': hues.accent }),
    ...(hues.neutral !== undefined && { '--neutral-hue': hues.neutral }),
  });
  return Object.fromEntries(
    (['light', 'dark'] as const).map((theme) => {
      const scope = scopes[theme];
      const surface = parseOklch(resolve(scope.get('--surface') ?? '', scope));
      if (!surface) throw new Error(`--surface is not oklch() in ${theme}`);
      return [THEME_VAR[theme], oklchToRgb(surface)];
    }),
  );
}

const clears = (rgb: Rgb, background: Rgb) =>
  lc(rgb, background) >= LC_FLOOR && contrast(rgb, background) >= WCAG_FLOOR;

/** Away from the ground: darker on a light panel, lighter on a dark one. */
function lift(hex: string, background: Rgb): string {
  const { L, C, h } = rgbToOklch(hexToRgb(hex));
  const direction = L > rgbToOklch(background).L ? STEP : -STEP;

  let lightness = L;
  let rgb = oklchToRgb({ L: lightness, C, h });
  while (!clears(rgb, background) && lightness > 0 && lightness < 1) {
    lightness = Math.min(1, Math.max(0, lightness + direction));
    rgb = oklchToRgb({ L: lightness, C, h });
  }
  return lightness === L ? hex : toHex(rgb);
}

/** `tokens` runs before the hast is built, where colours are still plain
 *  fields on `htmlStyle`. */
export function shikiContrast(stylesheet: string): ShikiTransformer {
  const backgrounds = panelBackgrounds(stylesheet);
  const cache = new Map<string, string>();

  const liftStyle = (style: Record<string, string>) => {
    for (const [property, background] of Object.entries(backgrounds)) {
      const colour = style[property];
      if (typeof colour !== 'string') continue;
      const key = `${property}:${colour}`;
      const lifted = cache.get(key) ?? lift(colour, background);
      cache.set(key, lifted);
      style[property] = lifted;
    }
  };

  return {
    name: 'design-tokens-contrast',
    tokens(lines) {
      for (const line of lines) {
        for (const token of line) {
          if (typeof token.htmlStyle === 'object') liftStyle(token.htmlStyle);
        }
      }
    },
  };
}
