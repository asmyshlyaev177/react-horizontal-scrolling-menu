# Translating this repo

Instructions for the model — or person — producing the non-English content.
Read this and [GLOSSARY.md](./GLOSSARY.md) before touching a file.

You are translating developer documentation for a working open-source library.
The reader is a professional engineer who will copy commands out of it. They
are reading in their own language because it is easier, not because they cannot
read English — so a translation that is fluent but technically loose is worse
than useless. Precision first, then fluency.

## The languages

| Tag     | Language             | Files / directories    |
| ------- | -------------------- | ---------------------- |
| `zh-CN` | Chinese (Simplified) | `*.zh-CN.md`, `zh-cn/` |
| `ja`    | Japanese             | `*.ja.md`, `ja/`       |
| `ko`    | Korean               | `*.ko.md`, `ko/`       |
| `ru`    | Russian              | `*.ru.md`, `ru/`       |
| `es`    | Spanish              | `*.es.md`, `es/`       |
| `pt-BR` | Portuguese (Brazil)  | `*.pt-BR.md`, `pt-br/` |
| `fr`    | French               | `*.fr.md`, `fr/`       |
| `vi`    | Vietnamese           | `*.vi.md`, `vi/`       |

English is the source. It is never a target, and it is never edited to make a
translation work. If the English is wrong, say so in your report and translate
it faithfully anyway.

## What you are given

Every target file already exists, pre-filled with the English text and stamped
with the revision it came from. **You are editing files in place, not creating
them.** Do not create, rename or delete any file.

Two kinds of file:

- **A skeleton** — byte-identical English body. Translate the whole thing.
- **A stale translation** — already in your language, but behind the English.
  Do not retranslate it. Ask the tooling what changed and patch just that:

  ```bash
  pnpm i18n diff <locale>        # e.g. pnpm i18n diff ja
  ```

  That prints the English diff between the revision the file was translated
  from and the English text as it stands now. Apply the equivalent change.

## The files

| File                             | What it is                                              |
| -------------------------------- | ------------------------------------------------------- |
| `README.md`                      | English source. Never edit.                             |
| `README.<tag>.md`                | Your README target, one per language, at the repo root. |
| `website/src/content/en/*.ts`    | English site copy, 6 modules. Never edit.               |
| `website/src/content/<dir>/*.ts` | Your site-copy target.                                  |

### The website copy is TypeScript, not Markdown

`website/src/content/<dir>/` is the English directory with its values
translated. Directory names are lowercase: `zh-cn`, `pt-br`, `ja`, `ko`, `ru`,
`es`, `fr`, `vi`.

- **Replace string values only.** Never add, remove, rename or reorder a key —
  the modules are typed, so a dropped key fails the build.
- **Leave the `// i18n:meta` line alone** except `status=pending` →
  `status=translated`. Never edit `index.ts`; it is generated.
- **`prose` bodies are Markdown**, and the subset is small: paragraphs, `- `
  lists, `` `code` ``, `[text](url)`, `**bold**`, `*italic*`. Nothing else
  renders. Keep every backtick pair — they are what protect the API names.
- `meta.title` is a `<title>`: under about 60 characters. `meta.description` is
  a search snippet: 150–160.
- Escaping is TypeScript's. Most values are single-quoted, so an apostrophe
  inside needs `\'` — or switch that value to double quotes. Do not introduce
  template literals; some existing bodies use arrays joined with `'\n'`, and
  that style is fine to follow.

Verify with `cd website && npx tsc --noEmit && npm run build`.

All eight are skeletons — nothing here has been translated before.

This README has no table of contents, but it does have in-page anchors in the
link row under the title (`#properties-and-callbacks`,
`#using-with-ai-coding-agents`). Regenerate those two by hand from your
translated headings, following the anchor rule above.

This README is also what npmjs.com renders for the package.

## Hard rules

These are checked mechanically. A file that breaks one of them is rejected.

### Never change

1. **Fenced code blocks.** Same number of blocks, same order, same language
   tag, same code. You **may** translate comments inside them — both whole-line
   (`// like this`) and trailing (`pnpm dev  # like this`). Nothing else in a
   block moves: not an identifier, not a string literal, not a URL, not a blank
   line, not the order of two lines.
2. **Link targets.** Same set of URLs as the English file, unchanged. Translate
   link _text_; never the address. Do not add links. Do not remove links.
3. **The heading tree.** Same number of headings, same levels, same order.
   Translate the text of each; never merge, split, add or drop one.
4. **Anything in the glossary's section 1.**
5. **Badges, shields.io URLs, HTML attributes** other than `alt` and `title`.
6. **The `<!-- i18n:start -->…<!-- i18n:end -->` block** at the top of a
   Markdown file, and the `i18nSource` / `i18nSourceBlob` frontmatter lines —
   except for the one field named in "Finishing" below. Tooling owns these.
7. **Numbers, versions, file sizes, file paths, environment variable names.**

### Always change

Prose, headings, list items, table cell text, blockquotes, image `alt` text,
button and link labels, and frontmatter `title` / `description` **values**
(never their keys).

### Anchors are generated, never written

Translating a heading changes the anchor GitHub derives from it, so every
in-page `](#…)` link that pointed at it breaks.

**Do not write anchors by hand and do not copy an English anchor.** Translate
the heading text, leave the table of contents alone, and run the TOC command in
"Finishing". It regenerates every anchor from your translated headings using
GitHub's own algorithm.

If a link points at a heading and there is no table of contents to regenerate,
derive the anchor the same way: lowercase, drop punctuation except `-` and `_`,
spaces to `-`, keep the Unicode as-is, and add `-1`, `-2` for duplicates.

## Style

- **Register**: the register of good technical documentation in your language.
  Chinese and Japanese docs are plainer than English marketing prose — do not
  import English enthusiasm. Russian, French and Spanish technical writing
  tolerates longer sentences than English; use them if they read better.
- **Second person**: use whatever developer docs in your language normally use
  (Japanese です/ます, Russian «вы», French _vous_, Spanish _tú_ or the
  impersonal, Vietnamese _bạn_).
- **Spacing**: put a space between CJK text and adjacent Latin words or
  `inline code`. It is the convention in every major Chinese and Japanese
  technical style guide and the text is unreadable without it.
- **Punctuation**: use your language's own. Chinese and Japanese take full-width
  `，。（）`; French takes its narrow no-break spaces before `: ; ! ?`; Spanish
  takes `¿` and `¡`.
- **Headings**: keep them short. A heading that wraps to three lines in the
  sidebar is a bad heading no matter how accurate.
- **Untranslatable jokes and idioms**: replace with the plainest accurate
  statement of what the sentence means. Do not attempt an equivalent joke.
- **First occurrence of a term of art**: if your language has no settled word,
  give your translation and put the English in parentheses once, then use your
  translation from then on.

## Finishing

For each file you finish:

1. In the `<!-- i18n:meta … -->` line, change `status=pending` to
   `status=translated`. That is the only part of the managed block you touch.
   (Files under a locale _directory_ have no such line — skip this step.)
2. Run the repo's check command below and fix anything it reports.

```bash
pnpm i18n:check    # structural validation of every translated file
pnpm i18n status   # progress overview
```

A clean run means the structure survived. It says nothing about whether the
translation is good — that is on you.

## Reporting

When you are done, report:

- Which files you translated, and which you patched rather than retranslated.
- Every place the English was ambiguous, wrong, or impossible to render
  faithfully, and what you did about it.
- Every term you had to invent because your language has no settled equivalent.

Do not silently smooth over a problem in the source. Flag it.
