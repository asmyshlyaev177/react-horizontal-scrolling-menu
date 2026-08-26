<!-- i18n:start -->

[English](./README.md) · [简体中文](./README.zh-CN.md) · 日本語 · [한국어](./README.ko.md) · [Русский](./README.ru.md) · [Español](./README.es.md) · [Português (BR)](./README.pt-BR.md) · [Français](./README.fr.md) · [Tiếng Việt](./README.vi.md)
<!-- i18n:meta locale=ja source=README.md source-blob=8958730422d74e17cb64c668f1e52d7eeee19c63 status=translated -->
<!-- i18n:end -->

# React horizontal scrolling menu

[![npm](https://img.shields.io/npm/v/react-horizontal-scrolling-menu.svg)](https://www.npmjs.com/package/react-horizontal-scrolling-menu)
![NPM ダウンロード数](https://img.shields.io/npm/dm/react-horizontal-scrolling-menu)
![npm バンドルサイズ（minified + gzip）](https://img.shields.io/bundlephobia/minzip/react-horizontal-scrolling-menu.svg)
[![CI](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/actions/workflows/main.yml/badge.svg)](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/actions/workflows/main.yml)
[![募集中](https://img.shields.io/badge/available%20for%20hire-senior%20react%20engineer-2ea44f?style=flat-square)](https://asmyshlyaev177.dev)

ブラウザネイティブのスクロールと項目ごとの可視性追跡の上に構築された、React
用の横スクロールメニューコンポーネントです。カテゴリー行、タブストリップ、
チップフィルター、ギャラリーなど、アプリが把握する必要のあるあらゆる行に
適しています。項目はあなた自身のコンポーネントと CSS で作成でき、メニューは
親の幅に応答し、スクロールバー、タッチ、マウスホイール、ドラッグ、あるいは
提供する矢印コンポーネントでナビゲーションできます。min+gzip で 5.7 kB。

![例](/sample.gif)

### [ランディングページ](https://react-horizontal-scrolling-menu.dev) · [ライブ例（Storybook、ブラウザーで編集可能）](https://asmyshlyaev177.github.io/react-horizontal-scrolling-menu) · [API](#プロパティとコールバック) · [AI エージェントスキル](#ai-コーディングエージェントと併用)

### 利用実績

2 万以上のリポジトリがこのライブラリに依存しています。実際に読める 5 つを紹介
します。各リンクは `package.json` ではなく、それを使っているコンポーネント内の
`import` 行を指し、コミットに固定されています。

- [Our World in Data](https://github.com/owid/owid-grapher/blob/4a60a2fb4532a2d287a1ef5660339dcc32bcd483/site/gdocs/components/KeyInsights.tsx#L3) — 記事レンダラーのキーインサイト・スライダー。[トピックファセット](https://github.com/owid/owid-grapher/blob/4a60a2fb4532a2d287a1ef5660339dcc32bcd483/site/latest/LatestTopicFacets.tsx#L10) では react-aria の `ToggleButton` をラップしています。`^8.2.0`
- [Precious Plastic / ONE ARMY](https://github.com/ONEARMY/community-platform/blob/90c1be6be0ad450a92d9483577433fdc8b09f477/packages/components/src/VerticalList/VerticalList.client.tsx#L6-L7) — 共有コンポーネントパッケージの `VerticalList`。本ライブラリのドキュメントをそのまま参考に実装されています。`^8.2.0`
- [erxes](https://github.com/erxes/erxes/blob/efef0252d390f4072e21c0a188d289f01866b188/apps/posclient-front/components/ui/horizontalScrollMenu.tsx#L6) — POS クライアントのカテゴリメニュー。`^4.0.4`
- [Reapit](https://github.com/reapit/foundations/blob/9edda57691befd398547bcdf4013916b85face52/packages/app-builder/src/components/ui/viewport/tab-bar.tsx#L4) — アプリビルダーのビューポート・タブバー。`^3.2.5`
- [AWS Performance Dashboard](https://github.com/aws-solutions/performance-dashboard-on-aws/blob/cffa9c822ac8288a44d13a9394a2255e574c7592/frontend/src/components/Tabs.tsx#L8) — ダッシュボードの `Tabs` コンポーネント。[`Arrows`](https://github.com/aws-solutions/performance-dashboard-on-aws/blob/cffa9c822ac8288a44d13a9394a2255e574c7592/frontend/src/components/Arrows.tsx#L9) は `VisibilityContext` を直接使っています。2024 年にアーカイブ済み、`^2.1.1` を固定。

また [React Status #257](https://react.statuscode.com/issues/257) でも紹介されました。

## クイックスタート

```bash
npm install react-horizontal-scrolling-menu
```

```tsx
import React from 'react';
import {
  ScrollMenu,
  VisibilityContext,
  type publicApiType,
} from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';

const items = Array.from({ length: 10 }, (_, i) => `item-${i + 1}`);

export function App() {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {items.map((id) => (
        <Card itemId={id} key={id} title={id} />
      ))}
    </ScrollMenu>
  );
}

function LeftArrow() {
  const visibility = React.useContext<publicApiType>(VisibilityContext);
  const isFirstVisible = visibility.useIsVisible('first', true);
  return (
    <button disabled={isFirstVisible} onClick={() => visibility.scrollPrev()}>
      ←
    </button>
  );
}

function RightArrow() {
  const visibility = React.useContext<publicApiType>(VisibilityContext);
  const isLastVisible = visibility.useIsVisible('last', false);
  return (
    <button disabled={isLastVisible} onClick={() => visibility.scrollNext()}>
      →
    </button>
  );
}

function Card({ itemId, title }: { itemId: string; title: string }) {
  const visibility = React.useContext<publicApiType>(VisibilityContext);
  const isVisible = visibility.useIsVisible(itemId);
  return (
    <div style={{ width: '160px' }} data-visible={isVisible}>
      {title}
    </div>
  );
}
```

この例が前提とする 3 つのこと：

- 各項目には一意の `itemId` プロパティが必要です。可視性追跡はこれを頼りに
  動作します。React の `key` はフォールバックとして機能します。
- `styles.css` は別途インポートします。JS バンドルが CSS を注入することは
  ありません。
- 項目の幅はあなた自身の CSS で決まります。メニューが計測を行うことは
  ありません。

素の JavaScript で書きますか？型のインポートを省いて、いつもどおり
`React.useContext(VisibilityContext)` を使ってください。

## AI コーディングエージェントと併用

古いリリースで学習したモデルは、いずれも削除済みの `visibleElements`、
`Separator` 項目、`Arrows` プロパティを未だに使おうとし、存在したことのない
`autoplay` プロパティをでっち上げます。このパッケージにはそれを止めるための
8 つの `SKILL.md` ファイルが同梱されています。これは
[TanStack Intent](https://tanstack.com/intent/latest/docs/overview) を通じて
オンデマンドで読み込まれるタスクスコープのガイダンスで、ウェブページではなく
ライブラリとともにバージョン管理されます。

```bash
npm install react-horizontal-scrolling-menu
npx @tanstack/intent@latest install   # プロジェクトごとに一度
```

`install` はスキル発見機能をエージェントの設定（`CLAUDE.md`、`.cursorrules`
など）に追加します。その後エージェントは
`node_modules/react-horizontal-scrolling-menu/skills/` から必要に応じてスキルを
読み込みます。`npx @tanstack/intent@latest list` と
`npx @tanstack/intent@latest load react-horizontal-scrolling-menu#menu-setup`
で直接一覧表示や読み込みもできます。

| スキル                 | 読み込まれるタイミング                                          |
| ---------------------- | --------------------------------------------------------------- |
| `menu-setup`           | 最初の動作するメニュー、矢印、必要な CSS インポート             |
| `menu-visibility`      | 画面上の内容と、端での矢印の状態                                |
| `menu-scrolling`       | `scrollToItem`、`apiRef`、1 ページずつのページング              |
| `menu-interactions`    | ドラッグ、ホイール、タッチ——とそれらのハンドラーファクトリー    |
| `menu-recipes`         | 自動再生、無限ループ、追加読み込み：プロパティではなくレシピ    |
| `menu-transitions-rtl` | アニメーションのタイミング、カスタムイージング、右から左        |
| `menu-testing-ssr`     | Next.js と RSC、Jest モック、Playwright                         |
| `menu-migration`       | v8 以前のコードのアップグレードと、モデルが今もでっち上げる API |

ソースは [`skills/`](skills/) にあります。Intent スキルを読み込めないエージェントは、
代わりに [llms.txt](https://react-horizontal-scrolling-menu.dev/llms.txt) を読む
べきです——同じ事実を 1 ファイルに凝縮したものです。

## できることとできないこと

ブラウザネイティブのスクロールの上に構築されています。慣性、スクロールバー、
タッチ、ホイール、アクセシビリティは、物理演算の再実装ではなくブラウザから
得られます。その上に、IntersectionObserver による項目ごとの可視性、
`scrollToItem` / `scrollNext` / `scrollPrev`、外部から制御するための `apiRef`、
Header と Footer スロット、RTL、動的な追加・削除の検出、そして全体にわたる
TypeScript の型があります。SSR セーフで、[ランディングページ](https://react-horizontal-scrolling-menu.dev)
はすべてのデモをサーバーレンダリングします。

カルーセルエンジンはありません。スナップやスプリング物理もありません。全画面の
画像スライダーが欲しいなら Embla か Swiper を使ってください。自動再生と無限
ループもプロパティではありません。公開 API の上にそれぞれ約 60 行で書ける
レシピで、Storybook でライブ編集できます
（[無限ループ](https://asmyshlyaev177.github.io/react-horizontal-scrolling-menu/?path=/story/examples-infiniteloop--infinite-loop)、
[自動再生](https://asmyshlyaev177.github.io/react-horizontal-scrolling-menu/?path=/story/examples-autoplay--autoplay)）。
何が見えているかを知っている行が必要なら、これがそれです。

## 例

すべての例は
[Storybook](https://asmyshlyaev177.github.io/react-horizontal-scrolling-menu)
でライブ編集できます。各ストーリーには、ライブラリの実際の型定義を読み込んだ
Monaco エディターが付属します。カバー範囲：基本的な使い方、1 項目ずつの
スクロール、マウスドラッグ、マウント時に項目へスクロール、クリックで中央へ、
項目の動的追加、位置の保存/復元、項目アニメーション、進捗ドット、本体
スクロールの防止、カスタムトランジション、無限ループ、自動再生、縦レイアウト、
フッターの矢印、モバイルスワイプ、RTL、5000 項目のストレステスト。

<!-- DOCS_START -->

### ヘルパーと API

ScrollMenu メインコンポーネントの子要素（矢印、ヘッダー、フッター、項目）は
**VisibilityContext** を使って状態とコールバックにアクセスできます。関数
コールバックにもコンテキストが渡されます（例：`onWheel`、`onScroll`）。

## プロパティとコールバック

| プロパティ               | シグネチャ                                                                                 |
| ------------------------ | ------------------------------------------------------------------------------------------ |
| LeftArrow                | 左矢印の React コンポーネント                                                              |
| RightArrow               | 右矢印の React コンポーネント                                                              |
| Header                   | Header の React コンポーネント                                                             |
| Footer                   | Footer の React コンポーネント                                                             |
| onWheel                  | (VisibilityContext, event) => void                                                         |
| onScroll                 | (VisibilityContext, event) => void。スクロールが*安定する前に*発火                         |
| onInit                   | (VisibilityContext) => void                                                                |
| onUpdate                 | (VisibilityContext) => void                                                                |
| apiRef                   | React.RefObject \| React.RefCallback                                                       |
| options                  | IntersectionObserver のオプション——要素を可視とみなす `rootMargin`、`threshold`、`ratio`   |
| containerRef             | スクロールコンテナの React.RefObject \| React.RefCallback                                  |
| onMouseDown              | (VisibilityContext) => (React.MouseEventHandler) => void                                   |
| onMouseLeave             | (VisibilityContext) => (React.MouseEventHandler) => void                                   |
| onMouseUp                | (VisibilityContext) => (React.MouseEventHandler) => void                                   |
| onMouseMove              | (VisibilityContext) => (React.MouseEventHandler) => void                                   |
| onTouchMove              | (VisibilityContext) => (React.TouchEventHandler) => void                                   |
| onTouchStart             | (VisibilityContext) => (React.TouchEventHandler) => void                                   |
| onTouchEnd               | (VisibilityContext) => (React.TouchEventHandler) => void                                   |
| itemClassName            | Item の ClassName                                                                          |
| scrollContainerClassName | scrollContainer の ClassName                                                               |
| wrapperClassName         | 最も外側の div の ClassName                                                                |
| transitionDuration       | トランジションの長さ（ミリ秒）、デフォルト `500`、`noPolyfill={false}` が必要              |
| transitionBehavior       | 'smooth' \| 'auto' \| カスタム関数、`noPolyfill={false}` が必要                            |
| RTL                      | 右から左の方向を有効化                                                                     |
| noPolyfill               | デフォルト `true`（ネイティブ scrollIntoView）。`false` でトランジションプロパティを有効化 |

2 種類のコールバックの形に注意してください。`onWheel` と `onScroll` は単純な
`(context, event) => void` ですが、マウスとタッチのプロパティはハンドラー
ファクトリー、つまり `(context) => (event) => void` です。ファクトリーパターンの
実例は
[MouseDrag ストーリー](https://asmyshlyaev177.github.io/react-horizontal-scrolling-menu/?path=/story/examples-mousedrag--mouse-drag)
を参照してください。

### VisibilityContext

フック（フックのルールに従い、ScrollMenu 配下でレンダリングされるコンポーネント
内でのみ呼び出せます）：

| フック               | シグネチャ                                                               |
| -------------------- | ------------------------------------------------------------------------ |
| useIsVisible         | (itemId: string \| 'first' \| 'last', defaultValue?: boolean) => boolean |
| useLeftArrowVisible  | () => boolean                                                            |
| useRightArrowVisible | () => boolean                                                            |

値と関数：

| プロパティ            | シグネチャ                                             |
| --------------------- | ------------------------------------------------------ |
| getItemById           | itemId => IOItem \| undefined                          |
| getItemElementById    | itemId => DOM Element \| null                          |
| getItemByIndex        | index => IOItem \| undefined                           |
| getItemElementByIndex | index => DOM Element \| null                           |
| getNextElement        | () => IOItem \| undefined                              |
| getPrevElement        | () => IOItem \| undefined                              |
| isFirstItemVisible    | boolean                                                |
| isItemVisible         | itemId => boolean                                      |
| isLastItem            | boolean                                                |
| isLastItemVisible     | boolean                                                |
| menuVisible           | { current: boolean }                                   |
| scrollNext            | (behavior, inline, block, ScrollOptions) => void       |
| scrollPrev            | (behavior, inline, block, ScrollOptions) => void       |
| scrollToItem          | (item, behavior, inline, block, ScrollOptions) => void |
| items                 | ItemsMap クラスインスタンス                            |
| scrollContainer       | Ref<OuterContainer>                                    |

### items クラスインスタンス

ItemsMap は全項目の情報を保持し、現在可視の項目や前後項目を取得するメソッドを
提供します。更新を購読することもできます。

| プロパティ/メソッド | 説明                                                                                                                                       |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| subscribe           | `itemId` または `first`、`last`、`onInit`、`onUpdate` のイベントを購読。例：`items.subscribe('item5', (item) => setVisible(item.visible))` |
| unsubscribe         | useEffect でクリーンアップに使用。同じコールバックインスタンスを渡す                                                                       |
| getVisible          | 可視の項目のみ返す                                                                                                                         |
| toItems             | 全項目の id を返す                                                                                                                         |
| toArr               | 全項目を返す                                                                                                                               |
| first               | 最初の項目を返す                                                                                                                           |
| last                | 最後の項目を返す                                                                                                                           |
| prev                | (itemId \| Item) => 前の項目 \| undefined                                                                                                  |
| next                | (itemId \| Item) => 次の項目 \| undefined                                                                                                  |

### トランジションとアニメーション

`transitionDuration` と `transitionBehavior`（`'smooth'`、`'auto'`、または
カスタム関数）は、`scrollToItem` とスクロールヘルパーのアニメーション方法を
制御します。どちらも `noPolyfill={false}` が必要です。デフォルトのネイティブ
スクロールはこれらを無視します。`RTL` プロパティとは併用できません。

カスタムイージング関数については
[CustomTransition ストーリー](https://asmyshlyaev177.github.io/react-horizontal-scrolling-menu/?path=/story/examples-customtransition--custom-transition)
を参照してください。

#### ScrollOptions

`scrollToItem`、`scrollPrev`、`scrollNext` の最後の引数は、その 1 回の呼び出しの
トランジションプロパティを上書きします：

```tsx
scrollToItem(getItemElementById('item-5'), 'smooth', 'center', 'nearest', {
  duration: 800, // ミリ秒
});
```

### その他のヘルパー

#### slidingWindow

前後の可視項目グループを取得します：

```tsx
slidingWindow(allItems, visibleItems).prev();
// または .next()
```

#### getItemsPos

グループの最初・中央・最後の項目を取得します。例：前のページの中央へスクロール：

```tsx
const prevGroup = slidingWindow(allItems, visibleItems).prev();
const { center } = getItemsPos(prevGroup);
scrollToItem(getItemById(center), 'smooth', 'center');
```

### apiRef

ref を ScrollMenu に渡すと、完全な VisibilityContext 値が割り当てられます。
`scrollToItem` などの関数をメニューの外から発火するのに便利です。ref 上の
データ値は古くなることがあるため、関数を呼び出すことをお勧めします：

```tsx
apiRef.current.scrollToItem(apiRef.current.getItemElementById('item-3'));
```

項目の DOM 要素には ``document.querySelector(`[data-key='${itemId}']`)`` で直接
アクセスすることもできます。
[ScrollToItem ストーリー](https://asmyshlyaev177.github.io/react-horizontal-scrolling-menu/?path=/story/examples-scrolltoitem--scroll-to-item)
と
[AddItemAndScrollToIt ストーリー](https://asmyshlyaev177.github.io/react-horizontal-scrolling-menu/?path=/story/examples-additemandscrolltoit--add-item-and-scroll-to-it)
を参照してください。

<!-- DOCS_END -->

## SSR

このライブラリは SSR セーフです。初回レンダリングはプレーンなマークアップを
出力し、IntersectionObserver はクライアント側でのみ接続されます。`useIsVisible`
の `defaultValue` 引数がサーバーレンダリングされた状態を制御します。標準的な
矢印パターン（`('first', true)` / `('last', false)`）は、左矢印を無効、右矢印を
有効でレンダリングし、開始位置までスクロールした行と一致します。

### Next.js での注意点

このパッケージは ESM ファーストです。古い Next.js 構成では
[“Cannot use import statement outside a module”](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/issues/240)
に遭遇することがあります。パッケージを
[`transpilePackages`](https://nextjs.org/docs/app/api-reference/config/next-config-js/transpilePackages)
に追加すると解決します。

## ブラウザーサポート

**IntersectionObserver** と **requestAnimationFrame** が必要です。すべての
モダンブラウザーで利用できます。IE は対象外です。

## 開発

```bash
git clone https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu
cd react-horizontal-scrolling-menu
pnpm run setup
pnpm run demo        # サンプルアプリ（Next.js、ポート 3003）、ライブラリをウォッチモードで実行
pnpm run demo-tanstack  # サンプルアプリ（TanStack Start SSR、ポート 3004）
pnpm run storybook   # 例
pnpm test            # ユニット + e2e + storybook テスト
```

リポジトリには 2 つの統合サンプルアプリ（`example-nextjs` と
`example-tanstack`、後者は workerd でサーバーレンダリングされる TanStack Start）
があります。どちらも同じデモ（マウスドラッグ、本体スクロールロック、コントロール
パネル付きカスタムアニメーション）をレンダリングするため、`e2e/` の 1 つの
e2e スイートが両方のフレームワークでライブラリに対して実行され、サーバー
レンダリングされた HTML にメニューが既に存在することの検証も含まれます。

貢献と修正は歓迎します。フォークし、コミットし、PR を開き、テストをお忘れなく。
[CONTRIBUTING](./CONTRIBUTING.md) と [CHANGELOG](./CHANGELOG.md) を参照してください。

旧 [v1 API](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/tree/v1) のドキュメント。

## このライブラリについて

2018 年から **Aleksandr Smyshliaev** が構築・保守しています。私にとって初めての
npm パッケージであり、React 16.8 から 19 まで同じ公開 API を保ち続けています。
私はフロントエンドエンジニア（React / Next.js / TypeScript）で、**契約および
正社員の仕事を募集中です**。

- **連絡先** —— [asmyshlyaev177.dev](https://asmyshlyaev177.dev) ·
  [asmyshlyaev177@gmail.com](mailto:asmyshlyaev177@gmail.com) ·
  [LinkedIn](https://linkedin.com/in/asmyshlyaev177) · Telegram @asmyshlyaev177
- **他のプロジェクト** —— [state-in-url](https://github.com/asmyshlyaev177/state-in-url)
  （型付き URL 状態）、
  [test-proxy-recorder](https://github.com/asmyshlyaev177/test-proxy-recorder)
  （Playwright 用の記録/再生）

リポジトリに ⭐️ を付けると、より多くの人にこのライブラリが見つかります。
