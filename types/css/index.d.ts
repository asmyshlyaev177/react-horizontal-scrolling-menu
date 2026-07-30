/**
 * Ambient stylesheet declaration.
 *
 * `src/index.tsx` imports `./styles.css` for its side effect and
 * rollup-plugin-postcss extracts it to `dist/styles.css`. TypeScript 6 reports
 * TS2882 for side-effect imports it cannot resolve.
 *
 * This lives in a local `typeRoots` package rather than a `.d.ts` under `src/`
 * because it has to reach two different programs:
 *
 *  - dts-bundle-generator builds its program from the entry file alone and
 *    ignores `files`/`include`, so a declaration under `src/` never reaches it —
 *    but `compilerOptions.types` does.
 *  - It must stay *ambient*. Resolving the import to a declaration file instead
 *    (`styles.d.css.ts` via `allowArbitraryExtensions`) makes TypeScript elide
 *    the import from the emitted JS, and rollup then stops producing
 *    `dist/styles.css`.
 */
declare module '*.css';
