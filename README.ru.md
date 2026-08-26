<!-- i18n:start -->

[English](./README.md) · [简体中文](./README.zh-CN.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · Русский · [Español](./README.es.md) · [Português (BR)](./README.pt-BR.md) · [Français](./README.fr.md) · [Tiếng Việt](./README.vi.md)
<!-- i18n:meta locale=ru source=README.md source-blob=8958730422d74e17cb64c668f1e52d7eeee19c63 status=translated -->
<!-- i18n:end -->

# React horizontal scrolling menu

[![npm](https://img.shields.io/npm/v/react-horizontal-scrolling-menu.svg)](https://www.npmjs.com/package/react-horizontal-scrolling-menu)
![Загрузки из npm](https://img.shields.io/npm/dm/react-horizontal-scrolling-menu)
![Размер npm-бандла (minified + gzip)](https://img.shields.io/bundlephobia/minzip/react-horizontal-scrolling-menu.svg)
[![CI](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/actions/workflows/main.yml/badge.svg)](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/actions/workflows/main.yml)
[![Открыт к предложениям](https://img.shields.io/badge/available%20for%20hire-senior%20react%20engineer-2ea44f?style=flat-square)](https://asmyshlyaev177.dev)

Горизонтальное меню прокрутки для React, построенное на нативной прокрутке
браузера с отслеживанием видимости каждого элемента. Подходит для строк
категорий, вкладок, чип-фильтров, галерей — любых рядов элементов, которые
вашему приложению нужно отслеживать. Элементы — это ваши собственные
компоненты с вашим CSS; меню адаптируется к ширине родителя; навигация работает
через полосу прокрутки, касание, колесо мыши, перетаскивание или предоставленные
вами компоненты стрелок. 5,7 КБ min+gzip.

![пример](/sample.gif)

### [Лендинг](https://react-horizontal-scrolling-menu.dev) · [Живые примеры (Storybook, редактируются в браузере)](https://asmyshlyaev177.github.io/react-horizontal-scrolling-menu) · [API](#свойства-и-колбэки) · [Навыки для AI-агентов](#использование-с-ai-агентами)

### Кто использует

Более 20 000 репозиториев зависят от этой библиотеки. Пять из них можно
изучить — каждая ссылка ведёт на строку `import` в компоненте, который её
использует, и закреплена за коммитом, а не на `package.json`:

- [Our World in Data](https://github.com/owid/owid-grapher/blob/4a60a2fb4532a2d287a1ef5660339dcc32bcd483/site/gdocs/components/KeyInsights.tsx#L3) — слайдер ключевых выводов в их рендерере статей; а также [фасеты тем](https://github.com/owid/owid-grapher/blob/4a60a2fb4532a2d287a1ef5660339dcc32bcd483/site/latest/LatestTopicFacets.tsx#L10), оборачивающие `ToggleButton` из react-aria. `^8.2.0`
- [Precious Plastic / ONE ARMY](https://github.com/ONEARMY/community-platform/blob/90c1be6be0ad450a92d9483577433fdc8b09f477/packages/components/src/VerticalList/VerticalList.client.tsx#L6-L7) — `VerticalList` в их общем пакете компонентов, собранный прямо по документации этой библиотеки. `^8.2.0`
- [erxes](https://github.com/erxes/erxes/blob/efef0252d390f4072e21c0a188d289f01866b188/apps/posclient-front/components/ui/horizontalScrollMenu.tsx#L6) — меню категорий в их POS-клиенте. `^4.0.4`
- [Reapit](https://github.com/reapit/foundations/blob/9edda57691befd398547bcdf4013916b85face52/packages/app-builder/src/components/ui/viewport/tab-bar.tsx#L4) — панель вкладок вьюпорта в их конструкторе приложений. `^3.2.5`
- [AWS Performance Dashboard](https://github.com/aws-solutions/performance-dashboard-on-aws/blob/cffa9c822ac8288a44d13a9394a2255e574c7592/frontend/src/components/Tabs.tsx#L8) — компонент `Tabs` дашборда; их [`Arrows`](https://github.com/aws-solutions/performance-dashboard-on-aws/blob/cffa9c822ac8288a44d13a9394a2255e574c7592/frontend/src/components/Arrows.tsx#L9) используют `VisibilityContext` напрямую. Архивирован в 2024, закреплена `^2.1.1`.

Также упомянута в [React Status #257](https://react.statuscode.com/issues/257).

## Быстрый старт

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

Три вещи, на которые опирается пример:

- Каждому элементу нужен уникальный проп `itemId` — именно на нём работает
  отслеживание видимости. React `key` работает как запасной вариант.
- `styles.css` — это отдельный импорт; JS-бандл никогда не внедряет CSS.
- Ширина элемента задаётся вашим CSS — меню ничего не измеряет.

Пишете на чистом JavaScript? Уберите импорты типов и используйте
`React.useContext(VisibilityContext)` как обычно.

## Использование с AI-агентами

Модели, обученные на старых версиях, всё ещё пытаются использовать
`visibleElements`, элементы `Separator` и проп `Arrows` — всё это удалено — и
придумывают несуществующий проп `autoplay`. Чтобы это прекратить, пакет
поставляет восемь файлов `SKILL.md`: руководства по конкретным задачам, которые
загружаются по требованию через
[TanStack Intent](https://tanstack.com/intent/latest/docs/overview) и
версионируются вместе с библиотекой, а не с какой-либо веб-страницей.

```bash
npm install react-horizontal-scrolling-menu
npx @tanstack/intent@latest install   # один раз на проект
```

`install` добавляет обнаружение навыков в конфигурацию вашего агента
(`CLAUDE.md`, `.cursorrules`, …); затем агент загружает навык по требованию из
`node_modules/react-horizontal-scrolling-menu/skills/`. Их можно вывести списком
или загрузить напрямую с помощью `npx @tanstack/intent@latest list` и
`npx @tanstack/intent@latest load react-horizontal-scrolling-menu#menu-setup`.

| Навык                  | Когда он загружается                                                   |
| ---------------------- | ---------------------------------------------------------------------- |
| `menu-setup`           | Первое рабочее меню, стрелки, обязательный импорт CSS                  |
| `menu-visibility`      | Что на экране и состояние стрелок у краёв                              |
| `menu-scrolling`       | `scrollToItem`, `apiRef`, постраничная прокрутка                       |
| `menu-interactions`    | Перетаскивание, колесо и касание — и их фабрики обработчиков           |
| `menu-recipes`         | Автовоспроизведение, бесконечный цикл, подгрузка: рецепты, а не пропсы |
| `menu-transitions-rtl` | Тайминги анимации, кастомный easing, справа налево                     |
| `menu-testing-ssr`     | Next.js и RSC, моки Jest, Playwright                                   |
| `menu-migration`       | Обновление кода до v8 и API, которые модели всё ещё выдумывают         |

Исходники лежат в [`skills/`](skills/). Агенты, которые не могут загрузить навыки
Intent, должны вместо этого прочитать
[llms.txt](https://react-horizontal-scrolling-menu.dev/llms.txt) — те же факты,
сжатые в один файл.

## Что он делает — и чего не делает

Построено на нативной прокрутке браузера: инерция, полоса прокрутки, касание,
колесо и доступность берутся из браузера, а не из переписанной физики. Поверх
этого: видимость каждого элемента через IntersectionObserver, `scrollToItem` /
`scrollNext` / `scrollPrev`, `apiRef` для управления извне, слоты Header и
Footer, RTL, определение динамического добавления/удаления и типы TypeScript
повсюду. Безопасно для SSR — [лендинг](https://react-horizontal-scrolling-menu.dev)
рендерит каждую демонстрацию на сервере.

Никакого движка карусели: ни снапа, ни пружинной физики — если нужен
полноэкранный слайдер изображений, используйте Embla или Swiper.
Автовоспроизведение и бесконечный цикл — тоже не пропсы; это рецепты примерно по
шестьдесят строк на публичном API, редактируемые вживую в Storybook
([бесконечный цикл](https://asmyshlyaev177.github.io/react-horizontal-scrolling-menu/?path=/story/examples-infiniteloop--infinite-loop),
[автовоспроизведение](https://asmyshlyaev177.github.io/react-horizontal-scrolling-menu/?path=/story/examples-autoplay--autoplay)).
Если вам нужен ряд, который знает, что видно, — это он.

## Примеры

Каждый пример можно редактировать вживую в
[Storybook](https://asmyshlyaev177.github.io/react-horizontal-scrolling-menu) —
каждая история поставляется с редактором Monaco, загруженным реальными
определениями типов библиотеки. Охватывает: базовое использование, прокрутку по
одному элементу, перетаскивание мышью, прокрутку к элементу при монтировании,
центрирование по клику, динамическое добавление элементов,
сохранение/восстановление позиции, анимацию элементов, точки прогресса,
блокировку прокрутки страницы, кастомные переходы, бесконечный цикл,
автовоспроизведение, вертикальную раскладку, стрелки в футере, свайп на
мобильных, RTL и стресс-тест на 5000 элементов.

<!-- DOCS_START -->

### Хелперы и API

Дети основного компонента ScrollMenu (стрелки, заголовок, футер, элементы) могут
использовать **VisibilityContext** для доступа к состоянию и колбэкам.
Колбэки-функции тоже получают контекст, например `onWheel`, `onScroll`.

## Свойства и колбэки

| Проп                     | Сигнатура                                                                                               |
| ------------------------ | ------------------------------------------------------------------------------------------------------- |
| LeftArrow                | React-компонент для левой стрелки                                                                       |
| RightArrow               | React-компонент для правой стрелки                                                                      |
| Header                   | React-компонент Header                                                                                  |
| Footer                   | React-компонент Footer                                                                                  |
| onWheel                  | (VisibilityContext, event) => void                                                                      |
| onScroll                 | (VisibilityContext, event) => void, срабатывает _до_ того, как прокрутка установится                    |
| onInit                   | (VisibilityContext) => void                                                                             |
| onUpdate                 | (VisibilityContext) => void                                                                             |
| apiRef                   | React.RefObject \| React.RefCallback                                                                    |
| options                  | опции для IntersectionObserver — `rootMargin`, `threshold` и `ratio` для определения видимости элемента |
| containerRef             | React.RefObject \| React.RefCallback для контейнера прокрутки                                           |
| onMouseDown              | (VisibilityContext) => (React.MouseEventHandler) => void                                                |
| onMouseLeave             | (VisibilityContext) => (React.MouseEventHandler) => void                                                |
| onMouseUp                | (VisibilityContext) => (React.MouseEventHandler) => void                                                |
| onMouseMove              | (VisibilityContext) => (React.MouseEventHandler) => void                                                |
| onTouchMove              | (VisibilityContext) => (React.TouchEventHandler) => void                                                |
| onTouchStart             | (VisibilityContext) => (React.TouchEventHandler) => void                                                |
| onTouchEnd               | (VisibilityContext) => (React.TouchEventHandler) => void                                                |
| itemClassName            | ClassName элемента (Item)                                                                               |
| scrollContainerClassName | ClassName scrollContainer                                                                               |
| wrapperClassName         | ClassName самого внешнего div                                                                           |
| transitionDuration       | Длительность переходов в мс, по умолчанию `500`, нужен `noPolyfill={false}`                             |
| transitionBehavior       | 'smooth' \| 'auto' \| кастомная функция, нужен `noPolyfill={false}`                                     |
| RTL                      | Включить направление справа налево                                                                      |
| noPolyfill               | `true` по умолчанию (нативный scrollIntoView); задайте `false`, чтобы включить пропы переходов          |

Обратите внимание на две формы колбэков: `onWheel` и `onScroll` — это простые
`(context, event) => void`, а пропы мыши и касания — это фабрики обработчиков —
`(context) => (event) => void`. См.
[историю MouseDrag](https://asmyshlyaev177.github.io/react-horizontal-scrolling-menu/?path=/story/examples-mousedrag--mouse-drag)
с примером использования фабрики.

### VisibilityContext

Хуки (вызывайте их только внутри компонентов, отрендеренных внутри ScrollMenu,
следуя правилам хуков):

| Хук                  | Сигнатура                                                                |
| -------------------- | ------------------------------------------------------------------------ |
| useIsVisible         | (itemId: string \| 'first' \| 'last', defaultValue?: boolean) => boolean |
| useLeftArrowVisible  | () => boolean                                                            |
| useRightArrowVisible | () => boolean                                                            |

Значения и функции:

| Проп                  | Сигнатура                                              |
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
| items                 | экземпляр класса ItemsMap                              |
| scrollContainer       | Ref<OuterContainer>                                    |

### экземпляр класса items

ItemsMap хранит информацию обо всех элементах, с методами для получения текущих
видимых элементов, предыдущего или следующего элемента. Также можно подписаться
на обновления.

| Проп/метод  | Описание                                                                                                                                            |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| subscribe   | подписаться на события для `itemId` или `first`, `last`, `onInit`, `onUpdate`, напр. `items.subscribe('item5', (item) => setVisible(item.visible))` |
| unsubscribe | используйте в useEffect для очистки, передавайте тот же экземпляр колбэка                                                                           |
| getVisible  | возвращает только видимые элементы                                                                                                                  |
| toItems     | возвращает id всех элементов                                                                                                                        |
| toArr       | возвращает все элементы                                                                                                                             |
| first       | возвращает первый элемент                                                                                                                           |
| last        | возвращает последний элемент                                                                                                                        |
| prev        | (itemId \| Item) => предыдущий элемент \| undefined                                                                                                 |
| next        | (itemId \| Item) => следующий элемент \| undefined                                                                                                  |

### Переходы и анимация

`transitionDuration` и `transitionBehavior` (`'smooth'`, `'auto'` или кастомная
функция) управляют тем, как анимируются `scrollToItem` и хелперы прокрутки. Оба
требуют `noPolyfill={false}` — нативная прокрутка по умолчанию игнорирует их.
Они не сочетаются с пропом `RTL`.

См.
[историю CustomTransition](https://asmyshlyaev177.github.io/react-horizontal-scrolling-menu/?path=/story/examples-customtransition--custom-transition)
с примером кастомной функции easing.

#### ScrollOptions

Последний аргумент `scrollToItem`, `scrollPrev` и `scrollNext` переопределяет
пропы переходов для этого одного вызова:

```tsx
scrollToItem(getItemElementById('item-5'), 'smooth', 'center', 'nearest', {
  duration: 800, // миллисекунды
});
```

### Другие хелперы

#### slidingWindow

Получить предыдущую или следующую группу видимых элементов:

```tsx
slidingWindow(allItems, visibleItems).prev();
// или .next()
```

#### getItemsPos

Получить первый, центральный и последний элемент группы — например, чтобы
прокрутить к центру предыдущей страницы:

```tsx
const prevGroup = slidingWindow(allItems, visibleItems).prev();
const { center } = getItemsPos(prevGroup);
scrollToItem(getItemById(center), 'smooth', 'center');
```

### apiRef

Передайте ref в ScrollMenu, и полное значение VisibilityContext будет присвоено
ему — удобно для вызова функций вроде `scrollToItem` извне меню. Значения данных
в ref могут устаревать, поэтому лучше вызывать функции:

```tsx
apiRef.current.scrollToItem(apiRef.current.getItemElementById('item-3'));
```

До DOM-элемента элемента также можно добраться напрямую через
``document.querySelector(`[data-key='${itemId}']`)``. См.
[историю ScrollToItem](https://asmyshlyaev177.github.io/react-horizontal-scrolling-menu/?path=/story/examples-scrolltoitem--scroll-to-item)
и
[историю AddItemAndScrollToIt](https://asmyshlyaev177.github.io/react-horizontal-scrolling-menu/?path=/story/examples-additemandscrolltoit--add-item-and-scroll-to-it).

<!-- DOCS_END -->

## SSR

Библиотека безопасна для SSR: первый рендер выдаёт обычную разметку, а
IntersectionObserver подключается только на клиенте. Аргумент `defaultValue` у
`useIsVisible` управляет состоянием, отрендеренным на сервере — канонический
паттерн стрелок (`('first', true)` / `('last', false)`) рендерит отключённую
левую стрелку и включённую правую, что соответствует ряду, прокрученному к
началу.

### Замечание о Next.js

Пакет ориентирован на ESM. На старых конфигурациях Next.js вы можете столкнуться
с [“Cannot use import statement outside a module”](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/issues/240) —
добавление пакета в
[`transpilePackages`](https://nextjs.org/docs/app/api-reference/config/next-config-js/transpilePackages)
решает это.

## Поддержка браузеров

Требуются **IntersectionObserver** и **requestAnimationFrame** — есть во всех
современных браузерах. Без IE.

## Разработка

```bash
git clone https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu
cd react-horizontal-scrolling-menu
pnpm run setup
pnpm run demo        # пример приложения (Next.js, порт 3003) с библиотекой в режиме watch
pnpm run demo-tanstack  # пример приложения (TanStack Start SSR, порт 3004)
pnpm run storybook   # примеры
pnpm test            # юнит + e2e + storybook тесты
```

В репозитории живут два интеграционных примера — `example-nextjs` и
`example-tanstack` (TanStack Start, рендерится на сервере в workerd) — оба
рендерят одну и ту же демонстрацию (перетаскивание мышью, блокировка прокрутки
страницы, кастомная анимация с панелью управления), так что один e2e-набор в
`e2e/` запускается против библиотеки в обоих фреймворках, включая проверку того,
что меню уже присутствует в серверном HTML.

Вклады и исправления приветствуются — сделайте форк, коммит, откройте PR и не
забудьте про тесты. См. [CONTRIBUTING](./CONTRIBUTING.md) и
[CHANGELOG](./CHANGELOG.md).

Документация по устаревшему [v1 API](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/tree/v1).

## О проекте

Создаётся и поддерживается **Aleksandr Smyshliaev** с 2018 года — мой первый
пакет для npm, и по-прежнему тот же публичный API от React 16.8 до 19. Я
фронтенд-инженер (React / Next.js / TypeScript) и **открыт для контрактной и
постоянной работы**.

- **Связаться со мной** — [asmyshlyaev177.dev](https://asmyshlyaev177.dev) ·
  [asmyshlyaev177@gmail.com](mailto:asmyshlyaev177@gmail.com) ·
  [LinkedIn](https://linkedin.com/in/asmyshlyaev177) · Telegram @asmyshlyaev177
- **Ещё мои проекты** — [state-in-url](https://github.com/asmyshlyaev177/state-in-url)
  (типизированное состояние в URL),
  [test-proxy-recorder](https://github.com/asmyshlyaev177/test-proxy-recorder)
  (запись/воспроизведение для Playwright)

Звёздочка ⭐️ у репозитория помогает большему числу людей найти эту библиотеку.
