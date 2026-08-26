<!-- i18n:start -->

[English](./README.md) · [简体中文](./README.zh-CN.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [Русский](./README.ru.md) · [Español](./README.es.md) · Português (BR) · [Français](./README.fr.md) · [Tiếng Việt](./README.vi.md)
<!-- i18n:meta locale=pt-BR source=README.md source-blob=8958730422d74e17cb64c668f1e52d7eeee19c63 status=translated -->
<!-- i18n:end -->

# React horizontal scrolling menu

[![npm](https://img.shields.io/npm/v/react-horizontal-scrolling-menu.svg)](https://www.npmjs.com/package/react-horizontal-scrolling-menu)
![Downloads do npm](https://img.shields.io/npm/dm/react-horizontal-scrolling-menu)
![Tamanho do bundle npm (minified + gzip)](https://img.shields.io/bundlephobia/minzip/react-horizontal-scrolling-menu.svg)
[![CI](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/actions/workflows/main.yml/badge.svg)](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/actions/workflows/main.yml)
[![Disponível para contratação](https://img.shields.io/badge/available%20for%20hire-senior%20react%20engineer-2ea44f?style=flat-square)](https://asmyshlyaev177.dev)

Um componente de menu com rolagem horizontal para React, construído sobre a
rolagem nativa do navegador com rastreamento de visibilidade por item. Bom para
linhas de categorias, faixas de abas, filtros de chips, galerias — qualquer
linha de coisas sobre a qual seu app precise raciocinar. Os itens são seus
próprios componentes com seu próprio CSS; o menu é responsivo à largura do pai;
a navegação funciona por barra de rolagem, toque, roda do mouse, arraste ou
pelos componentes de seta que você fornecer. 5,7 kB min+gzip.

![exemplo](/sample.gif)

### [Página inicial](https://react-horizontal-scrolling-menu.dev) · [Exemplos ao vivo (Storybook, editáveis no navegador)](https://asmyshlyaev177.github.io/react-horizontal-scrolling-menu) · [API](#propriedades-e-callbacks) · [Habilidades para agentes de IA](#uso-com-agentes-de-ia)

### Usado por

Mais de 20.000 repositórios dependem desta biblioteca. Cinco que você pode
ler — cada link leva ao `import` no componente que a usa, fixado em um commit,
não a um `package.json`:

- [Our World in Data](https://github.com/owid/owid-grapher/blob/4a60a2fb4532a2d287a1ef5660339dcc32bcd483/site/gdocs/components/KeyInsights.tsx#L3) — o carrossel de principais insights no renderizador de artigos; também as [facetas de tópicos](https://github.com/owid/owid-grapher/blob/4a60a2fb4532a2d287a1ef5660339dcc32bcd483/site/latest/LatestTopicFacets.tsx#L10), que envolvem um `ToggleButton` do react-aria. `^8.2.0`
- [Precious Plastic / ONE ARMY](https://github.com/ONEARMY/community-platform/blob/90c1be6be0ad450a92d9483577433fdc8b09f477/packages/components/src/VerticalList/VerticalList.client.tsx#L6-L7) — o `VerticalList` do pacote de componentes compartilhados, construído a partir da própria documentação desta biblioteca. `^8.2.0`
- [erxes](https://github.com/erxes/erxes/blob/efef0252d390f4072e21c0a188d289f01866b188/apps/posclient-front/components/ui/horizontalScrollMenu.tsx#L6) — o menu de categorias no cliente de ponto de venda. `^4.0.4`
- [Reapit](https://github.com/reapit/foundations/blob/9edda57691befd398547bcdf4013916b85face52/packages/app-builder/src/components/ui/viewport/tab-bar.tsx#L4) — a barra de abas da viewport no construtor de aplicativos. `^3.2.5`
- [AWS Performance Dashboard](https://github.com/aws-solutions/performance-dashboard-on-aws/blob/cffa9c822ac8288a44d13a9394a2255e574c7592/frontend/src/components/Tabs.tsx#L8) — o componente `Tabs` do painel; suas [`Arrows`](https://github.com/aws-solutions/performance-dashboard-on-aws/blob/cffa9c822ac8288a44d13a9394a2255e574c7592/frontend/src/components/Arrows.tsx#L9) usam `VisibilityContext` diretamente. Arquivado em 2024, fixa `^2.1.1`.

Também em destaque no [React Status #257](https://react.statuscode.com/issues/257).

## Início rápido

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

Três coisas das quais o exemplo depende:

- Cada item precisa de uma prop `itemId` única — é assim que o rastreamento de
  visibilidade funciona. A `key` do React funciona como fallback.
- `styles.css` é uma importação separada; o bundle JS nunca injeta CSS.
- A largura do item vem do seu próprio CSS — o menu não mede nada.

Escrevendo JavaScript puro? Remova as importações de tipo e use
`React.useContext(VisibilityContext)` como de costume.

## Uso com agentes de IA

Modelos treinados em versões antigas ainda procuram `visibleElements`, itens
`Separator` e uma prop `Arrows` — tudo removido — e inventam uma prop `autoplay`
que nunca existiu. O pacote envia oito arquivos `SKILL.md` para impedir isso:
orientação por tarefa carregada sob demanda por meio do
[TanStack Intent](https://tanstack.com/intent/latest/docs/overview), versionada
com a biblioteca e não com qualquer página web.

```bash
npm install react-horizontal-scrolling-menu
npx @tanstack/intent@latest install   # uma vez por projeto
```

`install` adiciona a descoberta de habilidades à configuração do seu agente
(`CLAUDE.md`, `.cursorrules`, …); o agente então carrega uma habilidade sob
demanda de `node_modules/react-horizontal-scrolling-menu/skills/`. Liste ou
carregue diretamente com `npx @tanstack/intent@latest list` e
`npx @tanstack/intent@latest load react-horizontal-scrolling-menu#menu-setup`.

| Habilidade             | Quando é carregada                                                     |
| ---------------------- | ---------------------------------------------------------------------- |
| `menu-setup`           | Um primeiro menu funcional, setas, a importação CSS necessária         |
| `menu-visibility`      | O que está na tela e o estado das setas nas bordas                     |
| `menu-scrolling`       | `scrollToItem`, `apiRef`, paginação página a página                    |
| `menu-interactions`    | Arraste, roda e toque — e suas fábricas de handlers                    |
| `menu-recipes`         | Autoplay, loop infinito, carregar mais: receitas, não props            |
| `menu-transitions-rtl` | Tempo de animação, easing personalizado, direita para esquerda         |
| `menu-testing-ssr`     | Next.js e RSC, mocks do Jest, Playwright                               |
| `menu-migration`       | Atualizar código anterior à v8 e as APIs que os modelos ainda inventam |

As fontes vivem em [`skills/`](skills/). Agentes que não conseguem carregar
habilidades do Intent devem ler o
[llms.txt](https://react-horizontal-scrolling-menu.dev/llms.txt) — os mesmos
fatos, condensados em um arquivo.

## O que ele faz — e não faz

Construído sobre a rolagem nativa do navegador: inércia, barra de rolagem,
toque, roda e acessibilidade vêm do navegador, não de uma reimplementação de
física. Em cima disso: visibilidade por item via IntersectionObserver,
`scrollToItem` / `scrollNext` / `scrollPrev`, um `apiRef` para controle externo,
slots Header e Footer, RTL, detecção dinâmica de adição/remoção e tipos
TypeScript por toda parte. Seguro para SSR — a
[página inicial](https://react-horizontal-scrolling-menu.dev) renderiza cada
demo no servidor.

Sem motor de carrossel: sem física de snap ou de mola — se você quer um slider
de imagens em tela cheia, use Embla ou Swiper. Autoplay e loop infinito também
não são props; são receitas de cerca de sessenta linhas cada sobre a API
pública, editáveis ao vivo no Storybook
([loop infinito](https://asmyshlyaev177.github.io/react-horizontal-scrolling-menu/?path=/story/examples-infiniteloop--infinite-loop),
[autoplay](https://asmyshlyaev177.github.io/react-horizontal-scrolling-menu/?path=/story/examples-autoplay--autoplay)).
Se você precisa de uma linha que saiba o que está visível, é isto.

## Exemplos

Cada exemplo é editável ao vivo no
[Storybook](https://asmyshlyaev177.github.io/react-horizontal-scrolling-menu) —
cada história vem com um editor Monaco carregado com as definições de tipo reais
da biblioteca. Cobre: uso básico, rolagem de um item por vez, arraste com o
mouse, rolar até um item ao montar, centralizar ao clicar, adicionar itens
dinamicamente, salvar/restaurar posição, animação de itens, pontos de progresso,
impedir a rolagem do body, transições personalizadas, loop infinito, autoplay,
layout vertical, setas no rodapé, deslize móvel, RTL e um teste de estresse com
5.000 itens.

<!-- DOCS_START -->

### Helpers e API

Filhos do componente principal ScrollMenu (setas, header, footer, itens) podem
usar **VisibilityContext** para acessar estado e callbacks. Callbacks de função
também recebem o contexto, por exemplo `onWheel`, `onScroll`.

## Propriedades e callbacks

| Prop                     | Assinatura                                                                                                |
| ------------------------ | --------------------------------------------------------------------------------------------------------- |
| LeftArrow                | Componente React para a seta esquerda                                                                     |
| RightArrow               | Componente React para a seta direita                                                                      |
| Header                   | Componente React Header                                                                                   |
| Footer                   | Componente React Footer                                                                                   |
| onWheel                  | (VisibilityContext, event) => void                                                                        |
| onScroll                 | (VisibilityContext, event) => void, dispara _antes_ de a rolagem assentar                                 |
| onInit                   | (VisibilityContext) => void                                                                               |
| onUpdate                 | (VisibilityContext) => void                                                                               |
| apiRef                   | React.RefObject \| React.RefCallback                                                                      |
| options                  | opções para IntersectionObserver — `rootMargin`, `threshold` e `ratio` para considerar o elemento visível |
| containerRef             | React.RefObject \| React.RefCallback para o contêiner de rolagem                                          |
| onMouseDown              | (VisibilityContext) => (React.MouseEventHandler) => void                                                  |
| onMouseLeave             | (VisibilityContext) => (React.MouseEventHandler) => void                                                  |
| onMouseUp                | (VisibilityContext) => (React.MouseEventHandler) => void                                                  |
| onMouseMove              | (VisibilityContext) => (React.MouseEventHandler) => void                                                  |
| onTouchMove              | (VisibilityContext) => (React.TouchEventHandler) => void                                                  |
| onTouchStart             | (VisibilityContext) => (React.TouchEventHandler) => void                                                  |
| onTouchEnd               | (VisibilityContext) => (React.TouchEventHandler) => void                                                  |
| itemClassName            | ClassName do Item                                                                                         |
| scrollContainerClassName | ClassName do scrollContainer                                                                              |
| wrapperClassName         | ClassName do div mais externo                                                                             |
| transitionDuration       | Duração das transições em ms, padrão `500`, requer `noPolyfill={false}`                                   |
| transitionBehavior       | 'smooth' \| 'auto' \| função personalizada, requer `noPolyfill={false}`                                   |
| RTL                      | Ativar direção da direita para a esquerda                                                                 |
| noPolyfill               | `true` por padrão (scrollIntoView nativo); defina `false` para ativar as props de transição               |

Observe as duas formas de callback: `onWheel` e `onScroll` são simples
`(context, event) => void`, enquanto as props de mouse e toque são fábricas de
handlers — `(context) => (event) => void`. Veja a
[história MouseDrag](https://asmyshlyaev177.github.io/react-horizontal-scrolling-menu/?path=/story/examples-mousedrag--mouse-drag)
para o padrão de fábrica em uso.

### VisibilityContext

Hooks (chame-os apenas dentro de componentes renderizados sob o ScrollMenu,
seguindo as regras dos hooks):

| Hook                 | Assinatura                                                               |
| -------------------- | ------------------------------------------------------------------------ |
| useIsVisible         | (itemId: string \| 'first' \| 'last', defaultValue?: boolean) => boolean |
| useLeftArrowVisible  | () => boolean                                                            |
| useRightArrowVisible | () => boolean                                                            |

Valores e funções:

| Prop                  | Assinatura                                             |
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
| items                 | instância da classe ItemsMap                           |
| scrollContainer       | Ref<OuterContainer>                                    |

### instância da classe items

ItemsMap guarda informações sobre todos os itens, com métodos para obter os
itens atualmente visíveis e o item anterior ou seguinte. Você também pode se
inscrever em atualizações.

| Prop/método | Descrição                                                                                                                                          |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| subscribe   | inscrever-se em eventos para `itemId` ou `first`, `last`, `onInit`, `onUpdate`, ex. `items.subscribe('item5', (item) => setVisible(item.visible))` |
| unsubscribe | use no useEffect para limpeza, passe a mesma instância de callback                                                                                 |
| getVisible  | retorna apenas os itens visíveis                                                                                                                   |
| toItems     | retorna os ids de todos os itens                                                                                                                   |
| toArr       | retorna todos os itens                                                                                                                             |
| first       | retorna o primeiro item                                                                                                                            |
| last        | retorna o último item                                                                                                                              |
| prev        | (itemId \| Item) => item anterior \| undefined                                                                                                     |
| next        | (itemId \| Item) => próximo item \| undefined                                                                                                      |

### Transições e animação

`transitionDuration` e `transitionBehavior` (`'smooth'`, `'auto'` ou uma função
personalizada) controlam como `scrollToItem` e os helpers de rolagem animam.
Ambos exigem `noPolyfill={false}` — a rolagem nativa padrão os ignora. Eles não
combinam com a prop `RTL`.

Veja a
[história CustomTransition](https://asmyshlyaev177.github.io/react-horizontal-scrolling-menu/?path=/story/examples-customtransition--custom-transition)
para uma função de easing personalizada.

#### ScrollOptions

O último argumento de `scrollToItem`, `scrollPrev` e `scrollNext` sobrescreve as
props de transição para aquela única chamada:

```tsx
scrollToItem(getItemElementById('item-5'), 'smooth', 'center', 'nearest', {
  duration: 800, // milissegundos
});
```

### Outros helpers

#### slidingWindow

Obtenha o grupo anterior ou seguinte de itens visíveis:

```tsx
slidingWindow(allItems, visibleItems).prev();
// ou .next()
```

#### getItemsPos

Obtenha o primeiro, o central e o último item de um grupo — por exemplo, para
rolar até o centro da página anterior:

```tsx
const prevGroup = slidingWindow(allItems, visibleItems).prev();
const { center } = getItemsPos(prevGroup);
scrollToItem(getItemById(center), 'smooth', 'center');
```

### apiRef

Passe uma ref ao ScrollMenu e o valor completo de VisibilityContext é atribuído
a ela — útil para disparar funções como `scrollToItem` de fora do menu. Valores
de dados na ref podem ficar obsoletos, então prefira chamar funções:

```tsx
apiRef.current.scrollToItem(apiRef.current.getItemElementById('item-3'));
```

Você também pode acessar diretamente o elemento DOM de um item por
``document.querySelector(`[data-key='${itemId}']`)``. Veja a
[história ScrollToItem](https://asmyshlyaev177.github.io/react-horizontal-scrolling-menu/?path=/story/examples-scrolltoitem--scroll-to-item)
e a
[história AddItemAndScrollToIt](https://asmyshlyaev177.github.io/react-horizontal-scrolling-menu/?path=/story/examples-additemandscrolltoit--add-item-and-scroll-to-it).

<!-- DOCS_END -->

## SSR

A biblioteca é segura para SSR: a primeira renderização emite marcação simples e
o IntersectionObserver só se conecta no cliente. O argumento `defaultValue` de
`useIsVisible` controla o estado renderizado no servidor — o padrão canônico de
setas (`('first', true)` / `('last', false)`) renderiza uma seta esquerda
desabilitada e uma direita habilitada, correspondendo a uma linha rolada até o
início.

### Nota sobre Next.js

O pacote é ESM-first. Em configurações antigas de Next.js você pode esbarrar em
[“Cannot use import statement outside a module”](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/issues/240) —
adicionar o pacote a
[`transpilePackages`](https://nextjs.org/docs/app/api-reference/config/next-config-js/transpilePackages)
resolve.

## Suporte a navegadores

Requer **IntersectionObserver** e **requestAnimationFrame** — todo navegador
moderno. Sem IE.

## Desenvolvimento

```bash
git clone https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu
cd react-horizontal-scrolling-menu
pnpm run setup
pnpm run demo        # app de exemplo (Next.js, porta 3003) com a biblioteca em modo watch
pnpm run demo-tanstack  # app de exemplo (TanStack Start SSR, porta 3004)
pnpm run storybook   # exemplos
pnpm test            # testes unitários + e2e + storybook
```

Dois apps de exemplo de integração vivem no repositório — `example-nextjs` e
`example-tanstack` (TanStack Start, renderizado no servidor no workerd) — ambos
renderizando a mesma demo (arraste com mouse, bloqueio da rolagem do body,
animação personalizada com um painel de controle) para que a única suíte e2e em
`e2e/` rode contra a biblioteca em ambos os frameworks, incluindo uma asserção
de que o menu já está presente no HTML renderizado no servidor.

Contribuições e correções são bem-vindas — faça fork, commit, abra um PR e não
esqueça dos testes. Veja [CONTRIBUTING](./CONTRIBUTING.md) e o
[CHANGELOG](./CHANGELOG.md).

Docs da [API v1](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/tree/v1) legada.

## Sobre

Construído e mantido por **Aleksandr Smyshliaev** desde 2018 — meu primeiro
pacote npm, e ainda a mesma API pública do React 16.8 ao 19. Sou engenheiro
frontend (React / Next.js / TypeScript) e **disponível para trabalho por
contrato e em tempo integral**.

- **Fale comigo** — [asmyshlyaev177.dev](https://asmyshlyaev177.dev) ·
  [asmyshlyaev177@gmail.com](mailto:asmyshlyaev177@gmail.com) ·
  [LinkedIn](https://linkedin.com/in/asmyshlyaev177) · Telegram @asmyshlyaev177
- **Também meus** — [state-in-url](https://github.com/asmyshlyaev177/state-in-url)
  (estado tipado na URL),
  [test-proxy-recorder](https://github.com/asmyshlyaev177/test-proxy-recorder)
  (gravar/reproduzir para Playwright)

Uma ⭐️ no repositório ajuda mais pessoas a encontrar a biblioteca.
