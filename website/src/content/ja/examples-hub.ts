// Japanese (ja) — translation of en/examples-hub.ts.
//
// Values only: every key, its order and its type come from the English
// module, and a missing or renamed one is a type error rather than a
// silently English page.
// i18n:meta locale=ja source=en/examples-hub.ts source-blob=8127bcad7814c2b0afd352822f229d8a3c1783ff status=translated
import type { ExamplePageCopy, ExamplesHubCopy } from '../types.ts';

/** /examples の一覧ページ。 */
export const examplesHub: ExamplesHubCopy = {
  meta: {
    title: 'React 横スクロールメニューの例——ライブ、コード付き',
    description:
      'react-horizontal-scrolling-menu の例：矢印、ドラッグスクロール、スクロール可能なタブ、RTL、縦、無限ループ、自動再生——それぞれコピー＆ペースト可能なソース付き。',
  },
  title: '例：すべてのパターンをライブで、完全なソース付き',
  lede: '各例は公開済み npm パッケージの動作するデモと、その背後にある完全なファイルです。コピー＆ペースト可能で、Storybook でライブ編集できます。このサイトの他のものと同様、サーバーレンダリングされます。',
  storybookCta: 'プレイグラウンドがお好みですか？Storybook を開く',
};

/** 21 の例ページすべてが共有する家具。 */
export const examplePage: ExamplePageCopy = {
  breadcrumbLabel: 'パンくず',
  breadcrumbExamples: '例',
  storybookCta: 'この例を Storybook でライブ編集',
  fullSource: '完全なソース',
  fullSourceLede:
    '完全でコピー＆ペースト可能——これは、まさにそのファイルです。出所は、この',
  fullSourceLedeLink: 'ライブ編集可能な Storybook 版',
  copyFullSource: '完全なソースをコピー',
  relatedExamples: '関連する例',
  allExamples: 'すべての例（{count} 件）',
};
