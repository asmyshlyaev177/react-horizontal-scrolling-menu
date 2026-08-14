#!/usr/bin/env node
// The i18n command line. Everything a translation pass needs, and the check
// CI runs so a stale or structurally broken translation can't land quietly.
//
//   node scripts/i18n/cli.mjs init            create missing locale files
//   node scripts/i18n/cli.mjs status          what is translated, what drifted
//   node scripts/i18n/cli.mjs check           validate; non-zero exit on problems
//   node scripts/i18n/cli.mjs toc             rebuild every table of contents
//   node scripts/i18n/cli.mjs diff <locale>   what changed in English since
//   node scripts/i18n/cli.mjs stamp <locale>  mark a translation current

import { execFileSync } from 'node:child_process';
import {
  existsSync,
  readdirSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { documents, repoRoot } from './config.mjs';
import {
  blobHash,
  parseDocument,
  skeletonBody,
  stampDocument,
  targetsFor,
  TODO_MARKER,
  validate,
} from './documents.mjs';
import { ALL_LOCALES, findLocale, LOCALES, SOURCE_LOCALE } from './locales.mjs';
import { replaceToc, tableOfContents, TOC_START } from './markdown.mjs';

const args = process.argv.slice(2);
const command = args[0] ?? 'status';
const flags = new Set(args.filter((a) => a.startsWith('--')));
const positional = args.slice(1).filter((a) => !a.startsWith('--'));

const c = process.stdout.isTTY
  ? {
      dim: '\x1b[2m',
      red: '\x1b[31m',
      green: '\x1b[32m',
      yellow: '\x1b[33m',
      bold: '\x1b[1m',
      off: '\x1b[0m',
    }
  : { dim: '', red: '', green: '', yellow: '', bold: '', off: '' };

const abs = (rel) => path.join(repoRoot, rel);

function docsToRun() {
  if (positional.length < 2) return documents;
  const want = positional[1];
  const found = documents.filter(
    (d) => d.source === want || path.basename(d.source) === want,
  );
  if (found.length === 0) {
    console.error(`${c.red}No document named ${want}${c.off}`);
    process.exit(2);
  }
  return found;
}

/**
 * Rebuild one file's table of contents in place. Returns whether it changed.
 */
function regenerateToc(doc, file) {
  if (!doc.toc || !existsSync(file)) return false;
  const text = readFileSync(file, 'utf8');
  if (!text.includes(TOC_START)) return false;
  const next = replaceToc(text, tableOfContents(text, doc.toc));
  if (!next || next === text) return false;
  writeFileSync(file, next, 'utf8');
  return true;
}

// ------------------------------------------------------------------- init

function init() {
  let created = 0;
  for (const doc of documents) {
    const sourceAbs = abs(doc.source);
    if (!existsSync(sourceAbs)) {
      console.error(`${c.red}missing source ${doc.source}${c.off}`);
      process.exitCode = 1;
      continue;
    }

    // Bring the English table of contents up to date before anything reads
    // the file's hash. Doing it afterwards would change the very bytes the
    // skeletons were just stamped against, and every one of them would report
    // itself stale the moment it was created.
    regenerateToc(doc, sourceAbs);

    // Stamp the source next: its own switcher line has to list the same
    // languages the skeletons will link back to.
    stampDocument({
      baseName: path.basename(doc.source),
      locale: SOURCE_LOCALE,
      file: sourceAbs,
      sourceBlob: blobHash(repoRoot, doc.source),
    });
    const sourceBlob = blobHash(repoRoot, doc.source);
    const sourceText = readFileSync(sourceAbs, 'utf8');

    for (const target of targetsFor(repoRoot, doc.source)) {
      if (target.exists) {
        // Never overwrite a body someone translated. Only the managed header
        // is refreshed, and the recorded source blob is left alone so `check`
        // can still tell that this file is behind.
        stampDocument({
          baseName: path.basename(doc.source),
          locale: target.locale.code,
          file: target.abs,
          sourceBlob:
            parseDocument(readFileSync(target.abs, 'utf8')).meta?.[
              'source-blob'
            ] ?? sourceBlob,
        });
        continue;
      }
      writeFileSync(
        target.abs,
        `${TODO_MARKER}\n\n${skeletonBody(sourceText)}`,
        'utf8',
      );
      stampDocument({
        baseName: path.basename(doc.source),
        locale: target.locale.code,
        file: target.abs,
        sourceBlob,
        status: 'pending',
      });
      created += 1;
      console.log(`${c.green}+${c.off} ${target.rel}`);
    }
  }
  console.log(
    created ? `\n${created} file(s) created.` : '\nNothing to create.',
  );
}

// ------------------------------------------------------------------- toc

function toc() {
  let changed = 0;
  for (const doc of documents) {
    if (!doc.toc) continue;
    for (const locale of ALL_LOCALES) {
      const rel =
        locale.code === SOURCE_LOCALE
          ? doc.source
          : targetsFor(repoRoot, doc.source).find(
              (t) => t.locale.code === locale.code,
            ).rel;
      const file = abs(rel);
      if (!existsSync(file)) continue;
      if (!readFileSync(file, 'utf8').includes(TOC_START)) {
        console.log(
          `${c.dim}·${c.off} ${rel} ${c.dim}(no ${TOC_START} marker)${c.off}`,
        );
        continue;
      }
      if (regenerateToc(doc, file)) {
        changed += 1;
        console.log(`${c.green}~${c.off} ${rel}`);
      }
    }
  }
  console.log(
    changed
      ? `\n${changed} table(s) of contents rebuilt.`
      : '\nAll tables of contents current.',
  );
  if (changed) {
    console.log(
      `${c.dim}Sources changed — re-run \`i18n stamp\` for any locale you brought up to date.${c.off}`,
    );
  }
}

// ---------------------------------------------------------------- status

/**
 * Two files whose names differ only in case cannot both exist on a
 * case-insensitive filesystem, and git checks out whichever it reaches last —
 * so a repo that carries both is broken on macOS and Windows without ever
 * failing on Linux. `README.ko.md` beside a leftover `README.KO.md` is exactly
 * that, and is easy to reintroduce when leaving redirect stubs behind at
 * renamed paths.
 */
function caseCollisions() {
  const byLower = new Map();
  for (const doc of documents) {
    const dir = path.dirname(doc.source);
    const names = [
      doc.source,
      ...targetsFor(repoRoot, doc.source).map((t) => t.rel),
    ];
    for (const rel of names) {
      if (!existsSync(abs(rel))) continue;
      const key = rel.toLowerCase();
      byLower.set(key, [...(byLower.get(key) ?? []), rel]);
    }
    // Anything else in the directory that collides with a managed name.
    for (const entry of readdirSync(abs(dir))) {
      const rel = path.join(dir, entry);
      const key = rel.toLowerCase();
      if (byLower.has(key) && !byLower.get(key).includes(rel)) {
        byLower.set(key, [...byLower.get(key), rel]);
      }
    }
  }
  return [...byLower.values()].filter((group) => group.length > 1);
}

function report({ failOnPending }) {
  let problemCount = 0;
  let pendingCount = 0;

  for (const group of caseCollisions()) {
    console.log(
      `${c.red}case collision${c.off}: ${group.join(' vs ')} — cannot coexist on macOS or Windows`,
    );
    problemCount += 1;
  }

  for (const doc of documents) {
    const sourceAbs = abs(doc.source);
    if (!existsSync(sourceAbs)) continue;
    const sourceText = readFileSync(sourceAbs, 'utf8');
    const currentBlob = blobHash(repoRoot, doc.source);
    const baseName = path.basename(doc.source);

    console.log(
      `\n${c.bold}${doc.source}${c.off} ${c.dim}@${currentBlob.slice(0, 8)}${c.off}`,
    );

    for (const target of targetsFor(repoRoot, doc.source)) {
      const label = `  ${target.locale.code.padEnd(6)} ${target.locale.english.padEnd(22)}`;
      if (!target.exists) {
        console.log(
          `${label} ${c.red}missing${c.off} ${c.dim}${target.rel}${c.off}`,
        );
        problemCount += 1;
        continue;
      }
      const problems = validate({
        sourceText,
        targetText: readFileSync(target.abs, 'utf8'),
        baseName,
        locale: target.locale.code,
        currentBlob,
      });
      const pending = problems.filter(
        (p) => p.kind === 'pending' || p.kind === 'todo',
      );
      const hard = problems.filter(
        (p) => p.kind !== 'pending' && p.kind !== 'todo',
      );

      if (problems.length === 0) {
        console.log(`${label} ${c.green}ok${c.off}`);
        continue;
      }
      if (hard.length === 0) {
        pendingCount += 1;
        console.log(`${label} ${c.yellow}not translated yet${c.off}`);
        continue;
      }
      problemCount += hard.length;
      console.log(
        `${label} ${c.red}${hard.length} problem(s)${c.off}${pending.length ? ` ${c.yellow}(untranslated)${c.off}` : ''}`,
      );
      for (const p of hard)
        console.log(`         ${c.red}·${c.off} ${p.kind}: ${p.detail}`);
    }
  }

  const failing = problemCount + (failOnPending ? pendingCount : 0);
  console.log(
    `\n${problemCount ? c.red : c.green}${problemCount} problem(s)${c.off}, ${c.yellow}${pendingCount} awaiting translation${c.off}.`,
  );
  return failing;
}

// ------------------------------------------------------------- diff / stamp

function resolveTarget(localeArg) {
  const locale = findLocale(localeArg);
  if (!locale || locale.code === SOURCE_LOCALE) {
    console.error(
      `${c.red}Unknown locale "${localeArg}". One of: ${LOCALES.map((l) => l.code).join(', ')}${c.off}`,
    );
    process.exit(2);
  }
  return locale;
}

function diff() {
  const locale = resolveTarget(positional[0]);
  for (const doc of docsToRun()) {
    const target = targetsFor(repoRoot, doc.source).find(
      (t) => t.locale.code === locale.code,
    );
    if (!target.exists) {
      console.log(
        `${c.yellow}${target.rel} does not exist yet — run \`init\`.${c.off}`,
      );
      continue;
    }
    const recorded = parseDocument(readFileSync(target.abs, 'utf8')).meta?.[
      'source-blob'
    ];
    const current = blobHash(repoRoot, doc.source);
    if (!recorded) {
      console.log(`${c.yellow}${target.rel} has no source stamp.${c.off}`);
      continue;
    }
    if (recorded === current) {
      console.log(
        `${c.green}${target.rel} is up to date with ${doc.source}.${c.off}`,
      );
      continue;
    }
    console.log(
      `${c.bold}${doc.source}: ${recorded.slice(0, 8)} → ${current.slice(0, 8)}${c.off}\n`,
    );

    // The recorded side is a real blob; the current side is the working tree,
    // which usually has no object yet because the English edit that caused the
    // drift is the one still uncommitted. So recover the old text and diff it
    // against the file on disk rather than blob-to-blob.
    let previous;
    try {
      previous = execFileSync('git', ['cat-file', 'blob', recorded], {
        cwd: repoRoot,
        encoding: 'utf8',
        maxBuffer: 64 * 1024 * 1024,
      });
    } catch {
      console.log(
        `${c.yellow}Blob ${recorded.slice(0, 8)} is not in this repo (shallow clone, or the stamp was hand-edited).${c.off}`,
      );
      continue;
    }

    const scratch = path.join(
      repoRoot,
      `.i18n-diff-${recorded.slice(0, 8)}.tmp`,
    );
    writeFileSync(scratch, previous, 'utf8');
    try {
      // --no-index always exits 1 when the files differ, which they do by
      // definition here; the diff is on stdout either way.
      execFileSync(
        'git',
        [
          'diff',
          '--no-color',
          '--no-index',
          '--src-prefix=was/',
          '--dst-prefix=now/',
          scratch,
          abs(doc.source),
        ],
        {
          cwd: repoRoot,
          encoding: 'utf8',
          stdio: ['ignore', 'inherit', 'inherit'],
        },
      );
    } catch (err) {
      if (err.status !== 1) throw err;
    } finally {
      rmSync(scratch, { force: true });
    }
  }
}

function stamp() {
  const locale = resolveTarget(positional[0]);
  for (const doc of docsToRun()) {
    const target = targetsFor(repoRoot, doc.source).find(
      (t) => t.locale.code === locale.code,
    );
    if (!target.exists) continue;
    stampDocument({
      baseName: path.basename(doc.source),
      locale: locale.code,
      file: target.abs,
      sourceBlob: blobHash(repoRoot, doc.source),
      status: 'translated',
    });
    console.log(
      `${c.green}✓${c.off} ${target.rel} marked translated against ${doc.source}`,
    );
  }
}

switch (command) {
  case 'init':
    init();
    break;
  case 'toc':
    toc();
    break;
  case 'status':
    report({ failOnPending: false });
    break;
  case 'check':
    process.exitCode =
      report({ failOnPending: flags.has('--strict') }) > 0 ? 1 : 0;
    break;
  case 'diff':
    diff();
    break;
  case 'stamp':
    stamp();
    break;
  default:
    console.error(
      `Unknown command "${command}". See the header of ${fileURLToPath(import.meta.url)}.`,
    );
    process.exit(2);
}
