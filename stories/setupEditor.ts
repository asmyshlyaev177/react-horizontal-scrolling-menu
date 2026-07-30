/// <reference types="vite/client" />
import { makeLiveEditStory } from 'storybook-addon-code-editor';

/** Name the examples import the library under, and its folder in the fake `node_modules`. */
const libName = 'react-horizontal-scrolling-menu';

/**
 * The library's own published typings, straight out of `dist/types` — the exact
 * files an npm consumer's editor reads. Feeding Monaco these rather than a
 * flattened single-file bundle is what keeps hovers readable: a bundler has to
 * rename colliding symbols, so `publicApiType.scrollContainer` showed up as
 * `React$1.RefObject<HTMLElement>` and `ScrollOptions` as `ScrollOptions$1`.
 *
 * `package.json` comes along because that is what points at `dist/types`.
 */
const libTypes = import.meta.glob<string>(
  ['/package.json', '/dist/types/**/*.d.ts'],
  { query: '?raw', import: 'default' },
);

/**
 * The `.d.ts` files — and the `package.json` files pointing at them — of the
 * other packages `availableImports` exposes to the editor. The addon only ships
 * `@types/react`, so without these the editor reports "Cannot find module
 * '@emotion/styled'" and friends.
 *
 * `scroll-into-view-if-needed` is not imported by any example, but the library's
 * own types re-export its `Options` as `CustomScrollBehavior`; without it the
 * `behavior` parameter of `scrollNext`/`scrollPrev`/`scrollToItem` degrades to
 * `any`.
 */
const packageTypes = import.meta.glob<string>(
  [
    '/node_modules/@emotion/*/package.json',
    '/node_modules/@emotion/**/*.d.ts',
    '/node_modules/@formkit/auto-animate/**/package.json',
    '/node_modules/@formkit/auto-animate/**/*.d.ts',
    '/node_modules/usehooks-ts/package.json',
    '/node_modules/usehooks-ts/dist/*.d.ts',
    '/node_modules/scroll-into-view-if-needed/package.json',
    '/node_modules/scroll-into-view-if-needed/dist/*.d.ts',
  ],
  { query: '?raw', import: 'default' },
);

/**
 * Monaco's TypeScript worker resolves modules against the same virtual file
 * system its extra libs live in, so mirroring the real `node_modules` layout is
 * enough for classic node resolution to walk `package.json` -> entry `.d.ts` ->
 * that file's own relative imports.
 *
 * Glob keys are repo-root relative: the library's files move under its package
 * folder, everything else already starts with `/node_modules/`.
 */
const typeFiles = [
  ...Object.entries(libTypes).map(
    ([path, load]) => [`file:///node_modules/${libName}${path}`, load] as const,
  ),
  ...Object.entries(packageTypes).map(
    ([path, load]) => [`file://${path}`, load] as const,
  ),
];

let loaded: Promise<unknown> | undefined;

/**
 * Loading is lazy — each file is its own chunk, fetched when the editor panel
 * first opens instead of riding along in the manager bundle — and happens once
 * for every editor, since extra libs are global to the TypeScript worker.
 */
function loadTypes(monaco: args[0]) {
  return (loaded ||= Promise.all(
    typeFiles.map(async ([path, load]) =>
      monaco.languages.typescript.typescriptDefaults.addExtraLib(
        await load(),
        path,
      ),
    ),
  ));
}

// `makeLiveEditStory(story, options)` takes the options as its *second*
// parameter; `createLiveEditStory` took them as the first.
type args = Parameters<
  NonNullable<Parameters<typeof makeLiveEditStory>[1]['modifyEditor']>
>;

export function setupEditor(monaco: args[0], _editor: args[1]) {
  monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
    noSemanticValidation: false,
    noSyntaxValidation: false,
  });
  monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
    // ES2020 rather than the library's own ES2016 target: this only picks the
    // lib the editor typechecks against, and examples use `Promise.finally`
    // (ES2018) and optional chaining.
    target: monaco.languages.typescript.ScriptTarget.ES2020,
    allowNonTsExtensions: true,
    moduleResolution: monaco.languages.typescript.ModuleResolutionKind.NodeJs,
    module: monaco.languages.typescript.ModuleKind.ESNext,
    allowSyntheticDefaultImports: true,
    jsx: monaco.languages.typescript.JsxEmit.React,
    esModuleInterop: true,
    // Matches how the library is authored, and how a consumer's project is set
    // up. Without it TypeScript erases the nullability of every type it shows:
    // `getItemById` hovered as `(id: string) => IOItem` rather than
    // `IOItem | undefined`, `scrollContainer` as `RefObject<HTMLElement>`
    // rather than `RefObject<HTMLElement | null>`.
    strict: true,
    // `dist/types/types.d.ts` reaches for `React` as a UMD global rather than
    // importing it; without this its `RefType` collapses to an error type and
    // `containerRef` hovers as `any`.
    allowUmdGlobalAccess: true,
  });

  // The examples import the stylesheet for its side effect. There is no `.css`
  // in the virtual file system, and the addon resolves it through
  // `availableImports` at runtime rather than through TypeScript.
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    "declare module '*.css';",
    'file:///css.d.ts',
  );

  void loadTypes(monaco);

  monaco.editor.setTheme('vs-dark');
}
