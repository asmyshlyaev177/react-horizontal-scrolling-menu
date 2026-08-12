/**
 * Who gets Markdown instead of HTML.
 *
 * Two signals, because one is not enough in practice. `Accept: text/markdown`
 * is the correct mechanism and the one to prefer — but most coding agents
 * don't send it. They arrive as a plain HTTP client with a recognisable
 * user-agent and take whatever comes back, which is why the docs sites that
 * measured this (Next.js among them) pair content negotiation with user-agent
 * matching rather than relying on Accept alone.
 *
 * Kept identical in shape to the same file on the sibling sites
 * (test-proxy-recorder's landing, asmyshlyaev177.dev) so all of them negotiate
 * alike. The token lists are cross-checked against
 * github.com/apideck-libraries/agent-analytics, which classifies the same
 * traffic for analytics rather than for serving.
 */

/**
 * Always HTML, whatever else matches.
 *
 * Search indexes belong here because a crawler and a reader must be served the
 * same representation of a page — that is the line between a Markdown variant
 * and cloaking. The link unfurlers are here for a duller reason: they scrape
 * OpenGraph tags out of the markup, and Markdown has none, so every shared
 * link would lose its preview card. Headless Chrome is here so Lighthouse runs
 * keep measuring the page people actually get.
 *
 * Checked first, so a token in the agent list below can never claim one of
 * these by accident — `ClaudeBot` would otherwise match `claude`. The bulk
 * crawlers have to be named individually for that reason, even though an
 * unlisted one already falls through to HTML by default: `Claude-Web` and
 * `anthropic-ai` were reaching `claude` and `anthropic` in the agent list and
 * being handed Markdown, which is the one thing this list exists to prevent.
 */
const HTML_ONLY =
  /googlebot|google-inspectiontool|google-extended|google-cloudvertexbot|bingbot|yandex|baiduspider|duckduckbot|applebot|petalbot|slurp|sogou|bravebot|searchbot|perplexitybot|youbot|linkupbot|claudebot|claude-web|anthropic-ai|gptbot|ccbot|bytespider|amazonbot|novaact|meta-external|meta-webindexer|facebookbot|ai2bot|diffbot|omgili|webzio|timpibot|pangubot|cohere|deepseek|grok|quillbot|facebookexternalhit|twitterbot|linkedinbot|slackbot|discordbot|telegrambot|whatsapp|embedly|iframely|pinterest|redditbot|mastodon|bluesky|skypeuripreview|vkshare|headlesschrome|lighthouse/i;

/**
 * Clients that are reading rather than rendering: coding agents, the
 * assistants' user-initiated fetchers (a person is waiting on an answer right
 * now), and the plain HTTP clients an agent shells out to.
 *
 * Deliberately not the training and search crawlers — those are on the list
 * above. This list is the audience the evidence actually shows fetching
 * Markdown: coding agents are the largest single category of AI traffic to
 * llms.txt-style files, well ahead of retrieval bots.
 *
 * The vendor names in the first half are mostly aspirational: the coding
 * agents do not send them. What they actually send is the user-agent of
 * whatever HTTP library they shell out to — Claude Code arrives as `axios/`,
 * Cline as `curl/`, Cursor as `got`, Windsurf as `colly` — so the second half
 * is what does the work. `got` and `colly` are bounded rather than plain
 * substrings; unbounded they would match inside ordinary words.
 *
 * `Electron/` identifies the same class of client and is deliberately absent:
 * an Electron window is a real renderer, and handing it Markdown would show
 * someone a wall of text instead of the page.
 */
const READS_MARKDOWN =
  /claude|anthropic|codex|opencode|cursor|windsurf|devin|aider|chatgpt-user|perplexity-user|duckassistbot|mistralai-user|gemini-deep-research|manus-user|curl\/|wget|httpie|python-requests|httpx|aiohttp|go-http-client|node-fetch|undici|axios|okhttp|libwww-perl|deno\/|(?:^|[\s(])got(?:\/|[\s(])|\bcolly\b/i;

/** Which representation to serve, and as what content type. */
export type MarkdownPreference = false | 'text/markdown' | 'text/plain';

/**
 * Two different questions, because the two media types carry different
 * information.
 *
 * `text/markdown` named at all is decisive: no browser has ever sent it, so
 * anything that does is asking on purpose and its position in the list is
 * noise. `text/plain` is not — browsers do list it, so it only counts when it
 * outranks `text/html`. And a trailing catch-all must never read as "prefers
 * Markdown", which is why presence of a wildcard is not considered here.
 */
function acceptPrefersMarkdown(accept: string): MarkdownPreference {
  if (accept.includes('text/markdown')) return 'text/markdown';

  const plain = accept.indexOf('text/plain');
  if (plain === -1) return false;

  const html = accept.indexOf('text/html');
  return html === -1 || plain < html ? 'text/plain' : false;
}

export function markdownPreference(request: Request): MarkdownPreference {
  const fromAccept = acceptPrefersMarkdown(request.headers.get('accept') ?? '');
  if (fromAccept) return fromAccept;

  const ua = request.headers.get('user-agent') ?? '';
  if (!ua || HTML_ONLY.test(ua)) return false;
  return READS_MARKDOWN.test(ua) ? 'text/markdown' : false;
}

/**
 * Headers for a negotiated Markdown response.
 *
 * `no-store` is the whole safety of the scheme, not a caching opinion. Shared
 * caches key on the URL: Cloudflare's edge honours `Vary` for nothing but
 * Accept-Encoding, and Vercel's ISR store ignores it outright. Served as
 * `public, max-age=3600`, the first agent to ask for Markdown after a deploy
 * pins this blob into the cache entry for the page and every human visitor
 * after it gets a wall of plain text until the entry expires — a 200
 * throughout, so nothing alerts. That happened on a sibling site. Varying on
 * user-agent as well as Accept only widens the blast radius, since a UA-keyed
 * cache is unbounded.
 *
 * The `.md` mirror URLs are a different case and are cached as ordinary
 * assets: they have one representation, so there is no second variant behind
 * them to hand to the wrong caller.
 *
 * `Content-Signal` restates what public/robots.txt already grants
 * (contentsignals.org), on the one response an agent is guaranteed to read.
 * A crawler that skipped robots.txt has no other way to learn the terms, and
 * Cloudflare preserves the header through its own Markdown conversion.
 */
export function markdownHeaders(contentType: MarkdownPreference) {
  return {
    'Content-Type': `${contentType || 'text/markdown'}; charset=utf-8`,
    'Cache-Control': 'no-store',
    'Content-Signal': 'search=yes, ai-input=yes, ai-train=yes',
    Vary: 'Accept, User-Agent',
  };
}
