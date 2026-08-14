// Japanese (ja) — translation of en/manifest.ts.
//
// Values only: every key, its order and its type come from the English
// module, and a missing or renamed one is a type error rather than a
// silently English page.
// i18n:meta locale=ja source=en/manifest.ts source-blob=269945541172d5f4f06823bd0d6393dfc44a3fb2 status=translated
import type { ManifestCopy } from '../types.ts';

/**
 * 例ページのハブカード用コピー。スラッグとグループ id は構造です——
 * `lib/examples-manifest.ts` にあり、ここではコピーではなくキーです。
 */
export const manifest: ManifestCopy = {
  groups: {
    Basics: '基本',
    'Position & scrolling': '位置とスクロール',
    'Input & gestures': '入力とジェスチャー',
    'Dynamic items': '動的な項目',
    Layout: 'レイアウト',
    Recipes: 'レシピ',
  },
  examples: {
    simple: {
      name: 'はじめに',
      blurb: '最小のメニュー：項目、2 つの矢印、すぐ使える可視性。',
    },
    'one-item': {
      name: '1 画面に 1 項目',
      blurb: '1 項目幅のメニュー——1 枚のカードが行を埋めます。',
    },
    'one-item-scroll': {
      name: '一度に 1 項目スクロール',
      blurb: '矢印がページではなく 1 項目ずつ進めます。',
    },
    'bottom-arrows': {
      name: 'メニューの下の矢印',
      blurb: '矢印はあなたのコンポーネント——どこにでも置けます。',
    },
    'center-on-click': {
      name: 'クリックした項目を中央に',
      blurb: 'scrollToItem に inline: center——スクロール可能なタブのパターン。',
    },
    'scroll-to-item': {
      name: 'id で項目へスクロール',
      blurb: 'apiRef でメニューの外から内部に手を伸ばします。',
    },
    'save-restore-position': {
      name: 'スクロール位置の保存と復元',
      blurb:
        'アンマウントやページ再読み込みをまたいでスクロールオフセットを保持。',
    },
    'custom-transition': {
      name: 'カスタムスクロールアニメーション',
      blurb:
        'プログラムによるスクロールに、独自のイージングと時間を持ち込みます。',
    },
    progress: {
      name: 'スクロール進捗インジケーター',
      blurb: 'どの項目が見えているかで動く進捗バー。',
    },
    'mouse-drag': {
      name: 'マウスでドラッグしてスクロール',
      blurb: '項目のクリックを壊さないマウスドラッグ。',
    },
    'swipe-desktop': {
      name: 'デスクトップでスワイプ',
      blurb: 'マウスユーザー向けの慣性スワイプ。',
    },
    'mobile-swipe-only': {
      name: 'モバイルで矢印を隠す',
      blurb: '小画面ではタッチのみのスクロール、デスクトップでは矢印。',
    },
    'prevent-body-scroll': {
      name: '本体のスクロールを防ぐ',
      blurb: 'メニュー上のホイールはページではなくメニューをスクロール。',
    },
    'add-items': {
      name: '末尾が見えたらさらに読み込む',
      blurb: '最後の項目の可視性で動く無限追加。',
    },
    'add-item-and-scroll-to-it': {
      name: '項目を追加してスクロール',
      blurb: 'フィルターチップのパターン：追加して、ビューに引き込みます。',
    },
    'items-animation': {
      name: '項目の出入りをアニメーション',
      blurb: '@formkit/auto-animate による追加/削除アニメーション。',
    },
    performance: {
      name: '5000 項目でも高速',
      blurb: 'ネイティブスクロールはスケールする——仮想化は不要です。',
    },
    vertical: {
      name: '縦メニュー',
      blurb: '同じメニューを、上から下へスクロール。',
    },
    rtl: {
      name: '右から左',
      blurb: 'RTL が方向を反転し、矢印とページングもそれに従います。',
    },
    'infinite-loop': {
      name: '無限ループ',
      blurb: '公開 API からのシームレスなループ——ライブラリの変更は不要。',
    },
    autoplay: {
      name: '自動再生',
      blurb: 'アクセシブルな一時停止を備えた自動進行ループ。',
    },
  },
};
