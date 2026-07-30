import { makeLiveEditStory } from 'storybook-addon-code-editor';

// @ts-expect-error raw import
import * as Types from './index.d.ts?raw';

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
    target: monaco.languages.typescript.ScriptTarget.ES2016,
    allowNonTsExtensions: true,
    moduleResolution: monaco.languages.typescript.ModuleResolutionKind.NodeJs, // NodeJs
    module: monaco.languages.typescript.ModuleKind.AMD,
    allowSyntheticDefaultImports: true,
    jsx: 2,
    esModuleInterop: true,
  });

  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `declare module "react-horizontal-scrolling-menu" { ${Types.default} }`,
  );

  monaco.editor.setTheme('vs-dark');
}
