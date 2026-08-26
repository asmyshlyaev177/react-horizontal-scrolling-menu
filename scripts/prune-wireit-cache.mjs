#!/usr/bin/env node
/**
 * Keep only the newest `WIREIT_CACHE_KEEP` entries in each wireit cache folder.
 * Wireit stores a full copy of a script's `output` per fingerprint and deletes
 * none of them: https://github.com/google/wireit/issues/71
 *
 * Runs from `pre<script>` hooks, never inside the wireit graph: pruning there
 * would race sibling scripts restoring their own entries, and a pruner with no
 * `files`/`output` is not `fullyTracked`, which forces every dependent to
 * re-run. Dropping `output` is likewise never the fix — the script stays
 * `fullyTracked`, so a cache hit short-circuits the command restoring nothing.
 *
 * Ranked by mtime, which wireit does not touch on a cache hit: oldest-first,
 * not least-recently-used.
 */

import { readdir, rm, stat } from 'node:fs/promises';
import * as pathlib from 'node:path';

const KEEP = Number(process.env.WIREIT_CACHE_KEEP ?? 2);

if (!Number.isInteger(KEEP) || KEEP < 0) {
  console.error(
    `WIREIT_CACHE_KEEP must be a non-negative integer, got ${JSON.stringify(
      process.env.WIREIT_CACHE_KEEP,
    )}`,
  );
  process.exit(1);
}

const subdirectories = async (dir) => {
  try {
    const entries = await readdir(dir, { withFileTypes: true });
    return entries.filter((entry) => entry.isDirectory()).map((e) => e.name);
  } catch {
    return [];
  }
};

async function* cacheFolders(dir) {
  for (const name of await subdirectories(dir)) {
    if (name === '.wireit') {
      yield* scriptCacheFolders(pathlib.join(dir, name));
    } else if (name !== 'node_modules' && !name.startsWith('.')) {
      yield* cacheFolders(pathlib.join(dir, name));
    }
  }
}

async function* scriptCacheFolders(wireitDir) {
  for (const script of await subdirectories(wireitDir)) {
    yield pathlib.join(wireitDir, script, 'cache');
  }
}

async function prune(cacheFolder) {
  const stats = await Promise.all(
    (await subdirectories(cacheFolder)).map(async (name) => {
      const path = pathlib.join(cacheFolder, name);
      return { path, mtimeMs: (await stat(path)).mtimeMs };
    }),
  );
  const doomed = stats
    .sort((a, b) => b.mtimeMs - a.mtimeMs)
    .slice(KEEP)
    .map(({ path }) => path);
  await Promise.all(
    doomed.map((path) => rm(path, { recursive: true, force: true })),
  );
  return doomed.length;
}

let deleted = 0;
for await (const cacheFolder of cacheFolders(process.cwd())) {
  deleted += await prune(cacheFolder);
}
if (deleted > 0) {
  console.log(
    `Pruned ${deleted} wireit cache ${
      deleted === 1 ? 'entry' : 'entries'
    }, keeping the newest ${KEEP} per script.`,
  );
}
