// Locale code → that language's copy.
//
// Static imports, so this module is all nine languages at once: ~740 kB raw,
// ~237 kB gzipped, in one shared chunk that every page modulepreloads —
// including the English ones, which need one ninth of it. Splitting it means
// making the import dynamic, which means the locale's copy has to arrive
// through a route loader rather than a synchronous `copyFor` call, and that
// reaches `lib/seo.ts` (no hooks — it runs inside `head()`), `SiteChrome` and
// every route. Worth doing; not a one-line change.

import { en } from './en/index.ts';
import { es } from './es/index.ts';
import { fr } from './fr/index.ts';
import { ja } from './ja/index.ts';
import { ko } from './ko/index.ts';
import { ptBr } from './pt-br/index.ts';
import { ru } from './ru/index.ts';
import type { SiteCopy } from './types.ts';
import { vi } from './vi/index.ts';
import { zhCn } from './zh-cn/index.ts';

export type { SiteCopy };

const BY_CODE: Record<string, SiteCopy> = {
  en,
  'zh-CN': zhCn,
  ja,
  ko,
  ru,
  es,
  'pt-BR': ptBr,
  fr,
  vi,
};

/**
 * Falls back to English rather than throwing. The only way here with an
 * unknown code is a locale in the routing table with no content directory yet,
 * and an English page is a better answer to that than a blank one.
 */
export const copyFor = (code: string): SiteCopy => BY_CODE[code] ?? en;
