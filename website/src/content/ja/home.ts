// Japanese (ja) — translation of en/home.ts.
//
// Values only: every key, its order and its type come from the English
// module, and a missing or renamed one is a type error rather than a
// silently English page.
// i18n:meta locale=ja source=en/home.ts source-blob=1da4a2b83ec7a4e233dae7ab5c335622de7edad4 status=translated
import { INTENT, REACT_STATUS, STORIES } from '../../lib/links.ts';
import type { HomeCopy } from '../types.ts';

const OWID = 'https://github.com/owid/owid-grapher';

export const home: HomeCopy = {
  jsonLdDescription:
    'ブラウザネイティブのスクロール上に構築された、項目ごとの可視性追跡付き React 横スクロールメニューコンポーネント。',

  hero: {
    titleLead: 'その横メニューは、',
    titleHighlight: '何が見えているかを知っている',
    sub: 'ブラウザ自身のスクロール上に構築された React スクロールメニュー——項目ごとの可視性追跡、矢印、ドラッグ、そして完全な命令型 API。gzip で `5.7 kB`。',
    primaryCta: 'はじめる',
    secondaryCta: '例を見る',
    storybookCta: 'Storybook を開く',
  },

  install: {
    ariaLabel: 'インストール',
    copyLabel: 'インストールコマンドをコピー',
    facts: [
      '**347k** ダウンロード/月',
      '**5.7 kB** min+gzip',
      'React **16.8 – 19**',
      '**MIT**',
    ],
  },

  autoplay: {
    heading: 'カルーセルエンジンなしの自動再生',
    lede: '`autoplay` プロパティはありません。このレールは公開 API 上のレシピです。行を両端にクローンし、継ぎ目で 1 回 `scrollLeft` をジャンプさせ、`scrollNext()` を呼ぶタイマーを回します。ホバー、フォーカス、非表示タブで一時停止し、動きを減らす設定下では静止します。継ぎ目をまたいで、逆向きにさえドラッグできます。',
    recipeLink: '完全なレシピを読む',
    storybookLink: 'Storybook でライブ編集',
  },

  positioning: {
    heading: '*メニュー*であり、カルーセルではない',
    scope: [
      'Embla、Swiper、keen-slider は、画像スライダーを作るために JavaScript でスクロールを再実装しています——スナップポイント、スプリング物理、レンダーループ。このライブラリはそのどれも同梱しません。ブラウザネイティブのスクロールに乗り、ブラウザが与えない 1 つ——どの項目が画面上にあるかの把握を加えます。',
      '全画面画像スライダーにとっては **間違った道具**——そこでは Embla か Swiper を。カテゴリー行、タブストリップ、チップフィルター、そしてアプリが把握する必要のあるあらゆる行にとっては、**正しい道具**。',
    ],
    pillars: [
      {
        title: 'ネイティブスクロール',
        body: '慣性、スクロールバー、タッチ、ホイール、アクセシビリティは、物理エンジンではなくブラウザから得られます。JavaScript がハイドレートする前からこの行はスクロールできます——このページのすべてのデモはサーバーレンダリングされます。',
      },
      {
        title: '可視性追跡',
        body: 'IntersectionObserver がどの項目が画面上にあるかを報告します。`useIsVisible(itemId)` は 1 つのコンポーネントを 1 つの項目に購読させます——スクロール位置の計算は不要で、影響を受けた項目だけが再レンダリングされます。',
      },
      {
        title: '必要なときは命令型',
        body: '`scrollToItem`、`scrollNext`、`scrollPrev`、id やインデックスでの検索——メニュー内のコンテキストを通じて、あるいは外部から `apiRef` で。',
      },
      {
        title: 'あなたのコンポーネント、あなたの CSS',
        body: '矢印、ヘッダー、フッター、そしてすべての項目はあなたが書くコンポーネントです。項目の幅はあなたの CSS。ライブラリが同梱するのは 210 バイトのレイアウトスタイルだけで、邪魔をしません。',
      },
    ],
  },

  quickStart: {
    heading: 'クイックスタート',
    lede: '1 ファイル、設定不要：`itemId` を持つ項目、`VisibilityContext` を読む 2 つの矢印、そしてスタイルシートのインポート。',
    notes: [
      '`itemId` はすべての項目に必須です——追跡はこれで動きます。React の `key` はフォールバックとして機能します。',
      '`styles.css` は別途インポートします。JS バンドルが CSS を注入することはありません。',
      '項目の幅はあなた自身の CSS で決まります——メニューが計測することはありません。',
    ],
    link: '完全な入門例を読む',
  },

  aiSkills: {
    heading: 'またはコーディングエージェントに任せる',
    body: `古いリリースで学習したモデルは、\`visibleElements\`、\`Separator\` 項目、\`Arrows\` プロパティ——すべて何年も前に削除済み——に今も手を伸ばし、存在したことのない \`autoplay\` プロパティをでっち上げます。このパッケージにはそれを止めるための 8 つの \`SKILL.md\` ファイルが同梱されています。タスクスコープのガイダンスで、エージェントが [TanStack Intent](${INTENT}) を通じてオンデマンドで読み込み、このページではなくライブラリとともにバージョン管理されます。`,
    copyLabel: 'Intent コマンドをコピー',
    note: 'パッケージが既にインストールされているプロジェクトで一度実行します。その後エージェントは `node_modules/react-horizontal-scrolling-menu/skills/` からスキルを発見します。',
    // The SKILL.md files published inside the package, and the one line each
    // that tells an agent — or a reader deciding whether this is worth a
    // command — when it is the one to load. Kept in the same order as
    // public/llms.txt, which is the machine-readable version of this table.
    skills: [
      {
        id: 'menu-setup',
        when: '最初の動作するメニュー、矢印、必要な CSS インポート',
      },
      {
        id: 'menu-visibility',
        when: '画面上の内容と、端での矢印の状態',
      },
      {
        id: 'menu-scrolling',
        when: 'scrollToItem、apiRef、1 ページずつのページング',
      },
      {
        id: 'menu-interactions',
        when: 'ドラッグ、ホイール、タッチ——とそれらのハンドラーファクトリー',
      },
      {
        id: 'menu-recipes',
        when: '自動再生、無限ループ、追加読み込み：プロパティではなくレシピ',
      },
      {
        id: 'menu-transitions-rtl',
        when: 'アニメーションのタイミング、カスタムイージング、右から左',
      },
      {
        id: 'menu-testing-ssr',
        when: 'Next.js と RSC、Jest モック、Playwright',
      },
      {
        id: 'menu-migration',
        when: 'v8 以前のコードのアップグレードと、モデルが今もでっち上げる API',
      },
    ],
    skillsLink: 'GitHub でスキルを読む',
    llmsLink: 'llms.txt——同じ事実を凝縮',
  },

  gallery: {
    heading: '実際に出荷するレシピ',
    lede: '4 つの一般的なパターンを、重要な行とともにライブで。',
    tabs: {
      title: 'アクティブなタブを中央に揃えるタブストリップ',
      body: "タブをクリック：`scrollToItem` に `inline: 'center'` を渡すと、行の中央に持ってきます。同じ呼び出しで `start`、`end`、ページングも扱えます。",
      link: '完全な例を見る',
    },
    chips: {
      title: 'チップを追加してスクロール',
      body: '状態はメニューの外に置き、`apiRef` が内部に手を伸ばします。フィルターを追加すると、行がそれに追従します。',
      link: '完全な例を見る',
    },
    infinite: {
      title: '末尾が見えたらさらに読み込む',
      body: '`onUpdate` が最後の項目が可視になったことを教えてくれます——その場で次のページを追加します。スクロールリスナーも、調整すべきピクセル閾値も不要です。',
      link: '完全な例を見る',
    },
    rtl: {
      title: '右から左、1 つのプロパティ',
      body: '`RTL` がスクロールコンテナの方向を反転し、矢印とページングのロジックがそれに従います。',
      link: '完全な例を見る',
    },
  },

  features: {
    heading: '箱の中身',
    included: [
      '項目ごとの可視性フック——`useIsVisible(itemId)`',
      '矢印状態のための `first` / `last` ヘルパー',
      '`scrollToItem` · `scrollNext` · `scrollPrev`',
      'メニューの外から制御する `apiRef`',
      'ドラッグ、ホイール、タッチ、スクロールバーの入力',
      '動的な追加/削除の検出',
      'Header と Footer のスロット',
      '`slidingWindow` + `getItemsPos` のページングヘルパー',
      '右から左のサポート',
      'カスタムトランジション関数',
      'SSR セーフ——このページが証明',
      'TypeScript ファースト——`publicApiType` をエクスポート',
      'React 16.8 – 19 で 1 つの安定した API',
    ],
    notIncludedHeading: '箱の中身にないもの',
    notIncluded: [
      'スナップとスプリング物理',
      '全画面画像スライダー',
      'ライトボックス',
    ],
    note: `それは画像スライダーの領域です——Embla と Swiper が上手にこなします。[無限ループ](${STORIES.infiniteLoop}) と [自動再生](${STORIES.autoplay}) もプロパティではありません——レシピです。それぞれ公開 API の約 60 行で、Storybook でライブ編集できます。このページ上部のレールは、まさにそのレシピが動いているものです。これはメニューのままです。`,
  },

  proof: {
    statement:
      '先月 **347,516 回**、約 **20,000 のリポジトリ**にダウンロードされました——**2018 年**から保守。',
    notes: [
      'GitHub で 788 スター',
      `[React Status #257](${REACT_STATUS}) で紹介`,
      `[Our World in Data](${OWID}) で本番利用`,
    ],
  },

  storybook: {
    heading: 'すべての例をブラウザーで編集できる',
    body: 'Storybook はプレイグラウンドを兼ねます。各ストーリーにはライブラリの実際の型定義を読み込んだ Monaco エディターが付属します。コードを変えて、再レンダリングを眺める——サンドボックスアカウントもローカルセットアップも不要です。',
    primaryCta: 'Storybook を開く',
    secondaryCta: 'API リファレンス',
  },

  author: {
    heading: 'Aleksandr Smyshliaev が構築・保守',
    body: '2018 年に初公開。React 16.8 から 19 まで同じ公開 API。Aleksandr はフロントエンドエンジニア（React、Next.js、TypeScript）で、現在、契約および正社員の仕事を募集中です。',
    siteLink: 'asmyshlyaev177.dev',
    githubLink: 'GitHub',
    linkedinLink: 'LinkedIn',
  },
};
