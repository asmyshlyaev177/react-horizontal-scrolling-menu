import { createLiveEditStory } from 'storybook-addon-code-editor';
// @ts-expect-error raw import
import * as Types from './index.d.ts?raw';

type args = Parameters<
  // @ts-expect-error some error
  Parameters<typeof createLiveEditStory>[0]['modifyEditor']
>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
