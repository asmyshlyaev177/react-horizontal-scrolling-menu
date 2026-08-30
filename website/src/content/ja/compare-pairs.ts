// Japanese (ja) — translation of en/compare-pairs.ts.
//
// Values only: every key, its order and its type come from the English
// module, and a missing or renamed one is a type error rather than a
// silently English page.
// i18n:meta locale=ja source=en/compare-pairs.ts source-blob=0fb5673892e901be3f7c39eba5eb45e00488b9a5 status=translated
import type { ComparePairsCopy } from '../types.ts';

// Neutral-pair comparison pages. The voice is a referee's, not a vendor's:
// each page recommends the right carousel for carousel jobs and claims only
// the menu-shaped slice. Overselling here burns the credibility the pages
// exist to earn.
export const comparePairs: ComparePairsCopy = {
  hub: {
    heading: 'その他の比較',
    lede: '実際に人々が比較検討している具体的な選択肢を深掘りしたページ。',
  },

  emblaVsSwiper: {
    meta: {
      title: 'Embla vs Swiper：React でどちらのカルーセルを選ぶか',
      description:
        'Embla と Swiper を公平に比較：バンドルサイズ、機能、ヘッドレス対フル装備 — そしてカルーセルが実はメニューだった場合の第三の選択肢。',
    },
    jsonLdHeadline:
      'React 向け Embla vs Swiper：公平な比較、そしてどちらも不要なケース',
    name: 'Embla vs Swiper',
    blurb: 'ヘッドレスエンジンかフル装備か — そしてどちらも不要なケース。',
    title: 'Embla vs Swiper：作るものに合わせて選ぶ',
    lede: 'どちらも優れた、活発にメンテナンスされているカルーセルエンジンで、両者の選択は本当に僅差です。結局は 1 つの軸に集約されます：Swiper はあらゆる機能を最初から搭載し、Embla はその上に自分で組み立てる小さなヘッドレスエンジンを提供します。このページは、どちらとも競合しないライブラリのメンテナーが書いています — それは、実はカルーセルではなかったと判明したビルド向けの、下部にある第三の答えでもあります。',
    table: {
      headers: ['', 'Embla', 'Swiper'],
      rows: [
        [
          'それは何か',
          'ヘッドレスカルーセルエンジン',
          'フル装備のスライダー/カルーセルフレームワーク',
        ],
        [
          'バンドルサイズ（コア、min+gzip）',
          '≈8 kB',
          '≈40 kB（モジュールに応じて増加）',
        ],
        [
          'スタイリングとマークアップ',
          '完全にあなた次第 — 何も同梱されません',
          '独自の DOM 構造と CSS、テーマ対応',
        ],
        [
          'エフェクト（フェード、キューブ、カバーフローなど）',
          'コミュニティプラグイン、または自作',
          '組み込み済み、成熟',
        ],
        [
          'オートプレイ、ページネーション、サムネイル',
          '公式プラグイン',
          '組み込みモジュール',
        ],
        [
          'React との統合',
          'ファーストクラスのフック（useEmblaCarousel）',
          'バニラコアをラップしたコンポーネント',
        ],
        [
          'エコシステムに関する補足',
          'shadcn/ui のカルーセルの内部エンジン',
          'ウェブで最も使われているスライダー',
        ],
        [
          '向いている用途',
          'カスタムデザインのカルーセル、デザインシステム',
          '画像中心のスライダー、機能豊富なギャラリー',
        ],
      ],
      note: 'バンドルサイズはおおよそのコアサイズです — 最新の数値は bundlephobia で確認してください。Swiper はインポートするモジュールに応じて増加します。',
    },
    prose: [
      {
        heading: 'デザインの制御が重要なら Embla を選ぶ',
        body: `Embla が提供するのはスナップの物理演算、ドラッグ処理、スライドモデルだけ — マークアップも CSS も矢印もありません。それこそが強みです：デザインシステムの中では、見えるものすべてがあなたのもので、エンジンがあなたのスタイルと衝突することはありません。shadcn/ui がカルーセルの土台に使っているのも Embla で、そこから最適な使いどころが見えてきます：カルーセルライブラリではなく*自分たちの*プロダクトのように見せたいチームです。

その代償は、スライド以外のあらゆる機能がアドオンか自作になることです：オートプレイとクラス名は公式プラグインで、ページネーションのドット、サムネイル、エフェクトは自分で書く必要があります。`,
      },
      {
        heading: '機能がそろった状態が欲しいなら Swiper を選ぶ',
        body: `Swiper はフル装備の答えです：フェード、キューブ、カバーフローのエフェクト、仮想スライド、ズーム、パララックス、サムネイルギャラリー、a11y モジュール、複数スタイルのページネーション — すべて自分で作るのではなく設定するだけです。今四半期にそのうち 3 つが必要なら、Swiper のサイズはそれだけの価値を何度も生みます。

その代償は Embla の逆です：Swiper の DOM、テーマ対応が必要な CSS、React 用にラップされたバニラ JS のコアを引き継ぐことになります — キロバイトの面でも表面積の面でも重くなります。`,
      },
      {
        heading: 'どちらを選ぶ前にも問うべきこと',
        body: `どちらのライブラリも、あなたが*スライド*を見せていることを前提としています — 一度に 1 つ、あるいは 1 ページ分のものを、スナップと位置感覚とともに。実際の「カルーセル」の多くはそれとはまったく違います：カテゴリー行、ロゴの帯、タブバー、チップフィルター — ユーザーが眺めて選ぶ、クリック可能なアイテムの行です。それらが欲しいのはネイティブスクロール（慣性、スクロールバー、ホイール、アクセシビリティが無料で手に入る）と、どのアイテムが画面内にあるかを知ることであり、Embla も Swiper もアイテムごとの可視性はモデル化していません — スライドはアイテムではないからです。

この形には第三の選択肢があります：[react-horizontal-scrolling-menu](/)（≈5.7 kB）はネイティブスクロールに乗り、\`useIsVisible\`、\`scrollToItem\`、そしてエッジ対応の矢印を提供します。[Netflix 風の行](/netflix-row)、[タブの帯](/scrollable-tabs)、[チップバー](/filter-chips) として見てみるか、両者との [完全な比較表](/compare) をご覧ください。`,
      },
    ],
  },

  reactSlickAlternatives: {
    meta: {
      title: '2026年の react-slick 代替ライブラリ',
      description:
        'react-slick からの移行：本物のカルーセルには Embla と Swiper、centerMode をナビゲーションとして使っていた行には react-horizontal-scrolling-menu。公平な移行ガイド。',
    },
    jsonLdHeadline:
      'react-slick の代替：本物のカルーセルはどこへ移行すべきか、centerMode の行はどこへ行くべきか',
    name: 'react-slick の代替',
    blurb:
      '本物のカルーセルはどこへ移行すべきか — そして centerMode の行はどこへ行くべきか。',
    title: 'react-slick の代替：何を作ったかで移行先を決める',
    lede: 'react-slick は jQuery 時代の slick カルーセルを React に移植したものです。今も動作しますが、アーキテクチャはフック以前のもので、リリースはまばらで、ビルドのたびに別の CSS ファイルを引きずり込みます。適切な代替は機能よりも、あなたの使い方が 2 つの陣営のどちらに属するかで決まります。',
    table: {
      headers: [
        '',
        'react-slick',
        'Embla',
        'Swiper',
        'react-horizontal-scrolling-menu',
      ],
      rows: [
        [
          'それは何か',
          'jQuery slick の React 移植版',
          'ヘッドレスカルーセルエンジン',
          'フル装備のスライダーフレームワーク',
          'スクロールメニュー、ネイティブスクロール',
        ],
        ['メンテナンス状況', 'まばら', '活発', '活発', '2018 年から活発'],
        [
          'バンドルサイズ（min+gzip）',
          '≈15 kB + slick CSS',
          '≈8 kB',
          '≈40 kB',
          '≈5.7 kB',
        ],
        [
          '追加の CSS ファイルが必要か',
          'はい（2 つ）',
          'いいえ',
          'はい（コア）',
          '1 つ、または shadcn アイテム経由の Tailwind',
        ],
        [
          'スライドのセマンティクス（スナップ、ドット、フェード）',
          'あり',
          'あり',
          'あり',
          'なし — 意図的に',
        ],
        [
          'クリック可能なアイテムの行',
          'centerMode で無理やり実現',
          'エンジンの上に自作',
          '本来の用途に逆らって設定',
          '中心となるユースケース',
        ],
      ],
      note: 'サイズはおおよそのコアサイズです。最後の列はこのサイト自身のライブラリです — 表はそれを隠さずそのまま示しています。',
    },
    prose: [
      {
        heading: '陣営 1：本物のカルーセルだった場合',
        body: `ヒーロースライダー、画像ギャラリー、証言のローテーション — slick のドット、フェード、オートプレイがデザインを支えていたものすべて。本物のカルーセルエンジンへ移行しましょう：

- すべてを自分でスタイリングし、小さなヘッドレスコアが欲しいなら **[Embla](/compare/embla-vs-swiper)** — 精神的には「モダン化された slick」に最も近い存在です。
- slick の機能リストを多用していたなら **Swiper** — slick のすべての機能には Swiper の対応物があり、たいてい優れています。

\`slidesToShow\`/\`slidesToScroll\` を Embla の \`slidesInView\`/\`slidesToScroll\` や Swiper の \`slidesPerView\`/\`slidesPerGroup\` にマッピングし、矢印位置調整用の CSS 上書きは削除することになるでしょう — どちらの後継ライブラリも、自分のボタンをレンダリングできます。`,
      },
      {
        heading: '陣営 2：centerMode をまとったナビゲーションだった場合',
        body: `もう一つの slick の使われ方は、目立たない方です：カテゴリー、ロゴ、日付、フィルターの行を、slick がすでにバンドルに入っていたという理由だけで \`centerMode\`、\`focusOnSelect\`、\`variableWidth\` を使ってカルーセルに無理やり押し込んだものです。その兆候は、あなたが何と格闘してきたかに表れます：ドラッグの後にクリックが発火する、矢印が変なタイミングで出る、計測できないアイテム、望んでいなかったスナップ。

その行はメニューだったのです。[react-horizontal-scrolling-menu](/) は、centerMode が偽装していた 3 つのこと — [クリックされたアイテムを中央に置く](/examples/center-on-click)、[ドラッグ対応](/examples/mouse-drag) でネイティブにスクロールする、[どのアイテムが見えているかを報告する](/examples/simple) — を、スライダーエンジンなしの ≈5.7 kB で行います。この 2 つの最も一般的な形については [スクロール可能なタブ](/scrollable-tabs) と [カテゴリーレール](/category-rail) のページをご覧ください。`,
      },
      {
        heading: 'どちらの陣営でも：移行は見た目より小さい',
        body: 'slick の API 表面積は大きく見えますが、実際の設定を監査するとすぐに小さくなります：ほとんどのプロジェクトは一握りの props しか使っていません。実際に設定しているものを書き出し、それぞれの使い方がどちらの陣営に属するかを判断し、インスタンスごとに移行しましょう — 2 つの陣営が同じコードベースに共存することはよくあり、両方が同じライブラリに着地しなければならない決まりはありません。',
      },
    ],
  },

  swiperAlternatives: {
    meta: {
      title: 'React 向けの軽量な Swiper 代替',
      description:
        'React でもっと軽い Swiper の代替を探していますか？本物のカルーセルには Embla と keen-slider、メニュー形の行には react-horizontal-scrolling-menu。サイズも比較。',
    },
    jsonLdHeadline:
      'React 向け Swiper 代替：より軽いカルーセル、そしてメニュー形の逃げ道',
    name: 'Swiper の代替',
    blurb: '不満が ≈40 kB であるとき：より軽いエンジンと、メニュー形の逃げ道。',
    title: 'React 向け Swiper 代替：本当に避けたいものは何かで選ぶ',
    lede: '誰も Swiper が悪いから離れるわけではありません — Swiper は現存する最も完成度の高いスライダーです。人々が離れるのは重さ（モジュール込みでない状態でも ≈40 kB）のため、その DOM と CSS を引き継ぐことになるため、あるいは自分たちの「スライダー」が実はスライドではなかったためです。それぞれの不満には、それぞれ最適な答えがあります。',
    table: {
      headers: [
        '',
        'Swiper',
        'Embla',
        'keen-slider',
        'react-horizontal-scrolling-menu',
      ],
      rows: [
        [
          'バンドルサイズ（コア、min+gzip）',
          '≈40 kB',
          '≈8 kB',
          '≈7 kB',
          '≈5.7 kB',
        ],
        [
          'モデル',
          'スライド、フル装備',
          'スライド、ヘッドレス',
          'スライド、最小限のエンジン',
          'ネイティブスクロール行の中のアイテム',
        ],
        [
          'エフェクトとモジュール',
          '最も豊富',
          'プラグイン／自作',
          '一部組み込み',
          'なし — 代わりにレシピを用意',
        ],
        [
          'ジェスチャー層を独占するか',
          'はい（transform）',
          'はい（transform）',
          'はい（transform）',
          'いいえ — ブラウザがスクロール',
        ],
        [
          'アイテムごとの可視性',
          'スライドインデックスのイベント',
          'スライドインデックスのイベント',
          'スライドインデックスのイベント',
          '組み込み（useIsVisible）',
        ],
        [
          '乗り換えに向いているとき',
          '—',
          'どうせ全部自分でスタイリングする',
          '最小限のスライダー、React に縛られたくない',
          '「スライド」がクリック可能なアイテムである',
        ],
      ],
      note: 'サイズはおおよそのコアサイズです — Swiper はインポートしたモジュールに応じて増加します。つまり削ぎ落とした Swiper のビルドは評判より小さいということでもあります。',
    },
    prose: [
      {
        heading: 'キロバイトから逃れる：Embla か keen-slider',
        body: `プロダクトが本物のカルーセル — スナップし、一度に 1 ページ分のスライドを見せる — であれば、軽量エンジンはほぼそのまま置き換えられます：

- **[Embla](/compare/embla-vs-swiper)**（≈8 kB）：ヘッドレスで、物理演算が優れており、ファーストクラスの React フックを持ち、shadcn/ui のカルーセルの内部エンジンでもあります。マークアップと CSS はすべて自分で用意します — それがポイントです。
- **keen-slider**（≈7 kB）：フレームワークに依存しない最小限のエンジンで、同じスライダーを React と非 React の両方の画面に出す必要がある場合に向いています。

どちらも transform ベースのスライドモデルを維持しているので、フェードやカバーフローのようなエフェクトは自作のままです — それらに頼っているなら、削ぎ落とした Swiper のビルドの方が、それらを再実装するより正直なところ良い答えです。`,
      },
      {
        heading: 'スライドモデルから逃れる：メニュー形のケース',
        body: `もう一つの出口は、Swiper のスライドのセマンティクスがそもそも構造を支えていなかったビルド向けです：カテゴリー行、ロゴウォール、タブの帯、チップバー、商品レール。兆候は \`slidesPerView: 'auto'\` に \`freeMode: true\` を組み合わせたような設定です — その組み合わせは、Swiper にネイティブスクロールのふりをさせているということです。

[react-horizontal-scrolling-menu](/)（≈5.7 kB）は、そのネイティブスクロールに加えて、ブラウザが提供しない部分を備えています：[アイテムごとの可視性](/examples/simple)、[scroll-to-item](/examples/scroll-to-item)、エッジ対応の矢印、そして [クリックを壊さないドラッグ](/examples/mouse-drag)。エフェクトなし、スナップなし、ジェスチャーエミュレーションなし — [Netflix 風の行](/netflix-row)、[タブ](/scrollable-tabs)、[チップバー](/filter-chips) の各ページ、または [完全な比較表](/compare) をご覧ください。`,
      },
      {
        heading: '両方向への公平な注意',
        body: '重さを減らすために Swiper から移行し、その後オートプレイ、ページネーション、a11y アナウンス、エフェクトを手作りすることになれば、40 kB の問題が人月単位の問題に変わってしまいます。自分の使い方が本当にその一部分でしかないなら軽量エンジンに乗り換え、スライドのセマンティクスがそもそも偽物だった場合にのみスクロールメニューに乗り換えましょう。Swiper の奥深さを使っているなら、Swiper を使い続けてください。',
      },
    ],
  },
};
