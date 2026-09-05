import { createMiddleware, createStart } from '@tanstack/react-start';

// The published /llms.txt, inlined at build time. public/ is the single
// source of truth: the file is still served verbatim at its own URL and
// again as /index.md (the markdown-mirrors plugin in vite.config.ts copies
// it), and this import means the negotiated homepage response can never
// drift from any of them.
import llmsTxt from '../public/llms.txt?raw';
import { markdownHeaders, markdownPreference } from './lib/agent-request';

/**
 * Hand AI agents the Markdown reference when they ask the homepage for it.
 *
 * The whole site is prerendered and served by Workers Assets, so this only
 * ever runs because wrangler.jsonc routes `/` to the Worker first
 * (`assets.run_worker_first`). Everything that isn't asking for Markdown —
 * every browser, every HTML crawler — is handed the same prerendered
 * index.html it would have got anyway, straight from the asset store via
 * the ASSETS binding. Falling through to `next()` instead would quietly
 * turn the homepage into a per-request server render.
 */
const homepageMarkdown = createMiddleware({ type: 'request' }).server(
  async ({ request, pathname, next }) => {
    if (pathname !== '/' || request.method === 'POST') return next();

    // Two ways in: `Accept: text/markdown`, or a user-agent belonging to a
    // coding agent or plain HTTP client. See lib/agent-request.ts — including
    // why the response must stay `no-store`.
    const wantsMarkdown = markdownPreference(request);

    if (wantsMarkdown) {
      return new Response(llmsTxt, {
        status: 200,
        headers: markdownHeaders(wantsMarkdown),
      });
    }

    // Not asking for Markdown: replay the request against the prerendered
    // asset. Anything other than a hit falls through to a live render —
    // which is what happens during the build's own prerender pass, where
    // this lookup necessarily misses because the page being asked for is
    // the one the pass is about to produce.
    const assets = await getAssets();
    const prerendered = await assets?.fetch(request);
    if (!prerendered?.ok) return next();

    // `Vary: Accept` is the one thing the asset store can't know to send:
    // this path now has two representations. The `Link:` header pointing at
    // /llms.txt rides along from public/_headers.
    const headers = new Headers(prerendered.headers);
    headers.set('Vary', 'Accept');

    return new Response(prerendered.body, {
      status: prerendered.status,
      statusText: prerendered.statusText,
      headers,
    });
  },
);

/**
 * The ASSETS binding, or nothing when there isn't a Worker underneath —
 * `cloudflare:workers` only resolves inside workerd. Imported dynamically
 * so the specifier never enters the client module graph: this file is the
 * Start entry and is loaded on both sides.
 */
async function getAssets() {
  try {
    const { env } = await import('cloudflare:workers');
    return env.ASSETS;
  } catch {
    return undefined;
  }
}

/**
 * `410 Gone` for the router's own dynamic segment, spelled literally.
 *
 * A build once emitted the raw route id as an href on `/ja/*` and `/es/*`, and
 * Googlebot crawled four `/$locale/...` URLs off those pages. The links are
 * gone; the URLs are not, and `routes/$locale/route.tsx` answers them 404 like
 * any other unknown segment. 410 says "never coming back", which Search drops
 * faster than a 404 it has to keep rechecking.
 *
 * Both spellings: the edge percent-encodes `$` and redirects before the Worker
 * sees the request, so what arrives here is `/%24locale/...`.
 *
 * Narrow on purpose. `/jp` and `/nope/compare` are typos of a real path and
 * stay 404 — see the pair of tests in `e2e/locales.spec.ts`.
 */
const ROUTE_PATTERN_PATH = /^\/(?:\$|%24)locale(?:\/|$)/i;

const goneRoutePattern = createMiddleware({ type: 'request' }).server(
  ({ pathname, next }) =>
    ROUTE_PATTERN_PATH.test(pathname)
      ? new Response(null, { status: 410 })
      : next(),
);

export const startInstance = createStart(() => ({
  requestMiddleware: [goneRoutePattern, homepageMarkdown],
}));
