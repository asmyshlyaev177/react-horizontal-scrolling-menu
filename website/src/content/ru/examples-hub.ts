// Russian (ru) — translation of en/examples-hub.ts.
//
// Values only: every key, its order and its type come from the English
// module, and a missing or renamed one is a type error rather than a
// silently English page.
// i18n:meta locale=ru source=en/examples-hub.ts source-blob=8127bcad7814c2b0afd352822f229d8a3c1783ff status=translated
import type { ExamplePageCopy, ExamplesHubCopy } from '../types.ts';

/** Страница-список /examples. */
export const examplesHub: ExamplesHubCopy = {
  meta: {
    title: 'Примеры горизонтального меню прокрутки для React — живьём, с кодом',
    description:
      'Примеры react-horizontal-scrolling-menu: стрелки, прокрутка перетаскиванием, прокручиваемые вкладки, RTL, вертикаль, бесконечный цикл, автовоспроизведение — каждый с копируемым исходником.',
  },
  title: 'Примеры: каждый паттерн живьём, с полным исходником',
  lede: 'Каждый пример — это работающая демонстрация опубликованного npm-пакета плюс полный файл за ней: готово к копированию и редактируется вживую в Storybook. Рендерится на сервере, как и всё остальное на этом сайте.',
  storybookCta: 'Предпочитаете песочницу? Откройте Storybook',
};

/** Общие элементы всех двадцати одного примера. */
export const examplePage: ExamplePageCopy = {
  breadcrumbLabel: 'Хлебные крошки',
  breadcrumbExamples: 'Примеры',
  storybookCta: 'Редактировать этот пример вживую в Storybook',
  fullSource: 'Полный исходник',
  fullSourceLede:
    'Полный и готовый к копированию — это точный файл, стоящий за',
  fullSourceLedeLink: 'редактируемой вживую версией Storybook',
  copyFullSource: 'Скопировать полный исходник',
  relatedExamples: 'Похожие примеры',
  allExamples: 'Все примеры ({count})',
};
