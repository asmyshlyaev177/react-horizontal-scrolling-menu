// Portuguese (Brazil) (pt-BR) — translation of en/compare.ts.
//
// Values only: every key, its order and its type come from the English
// module, and a missing or renamed one is a type error rather than a
// silently English page.
// i18n:meta locale=pt-BR source=en/compare.ts source-blob=c29839efeb7de75a4cfbad0342c7bfb7266a0666 status=translated
import type { CompareCopy } from '../types.ts';

export const compare: CompareCopy = {
  meta: {
    title: 'react-horizontal-scrolling-menu vs Swiper, Embla, react-slick',
    description:
      'Uma comparação honesta: quando um menu de rolagem horizontal vence uma biblioteca de carrossel, e quando não. Swiper, Embla, keen-slider e react-slick, lado a lado.',
  },
  jsonLdHeadline:
    'Carrossel ou menu de rolagem? react-horizontal-scrolling-menu vs Swiper, Embla, keen-slider e react-slick',

  title: 'Carrossel ou menu de rolagem? Uma comparação honesta',
  lede: 'Swiper, Embla, keen-slider e react-slick são motores de carrossel: reimplementam a rolagem em JavaScript para obter semântica de slides, física de snap e efeitos. react-horizontal-scrolling-menu não é um deles — usa a rolagem nativa do navegador e adiciona rastreamento de visibilidade por item. Qual você quer depende do que está construindo; e para uma boa fatia do uso real de carrosséis a resposta honesta é: você estava construindo um menu o tempo todo.',

  table: {
    headers: [
      '',
      'esta biblioteca',
      'Swiper',
      'Embla',
      'keen-slider',
      'react-slick',
    ],
    rows: [
      [
        'O que é',
        'Menu de rolagem com rastreamento de visibilidade',
        'Framework completo de slider/carrossel',
        'Motor de carrossel headless',
        'Motor de slider independente de framework',
        'Porte React do slider slick do jQuery',
      ],
      [
        'Motor de rolagem',
        'Rolagem nativa do navegador',
        'Transformações JS + física',
        'Transformações JS + física',
        'Transformações JS + física',
        'Transformações JS (transições CSS)',
      ],
      [
        'Bundle (núcleo, min+gzip)',
        '≈5,7 kB',
        '≈40 kB',
        '≈8 kB',
        '≈7 kB',
        '≈15 kB + slick CSS',
      ],
      [
        'Quais itens estão na tela',
        'Embutido — useIsVisible por item',
        'Baseado em índice de slide',
        'Eventos de índice de slide',
        'Eventos de índice de slide',
        'Baseado em índice de slide',
      ],
      [
        'Snap, efeitos, física',
        'Nenhum — de propósito',
        'Rico (fade, cube, coverflow…)',
        'Baseado em plugins, com tween',
        'Sim, incluindo modo livre',
        'Fade, modo centralizado',
      ],
      [
        'Loop / autoplay',
        'Receitas sobre a API pública',
        'Props embutidas',
        'Plugins',
        'Opções embutidas',
        'Props embutidas',
      ],
      [
        'Barra de rolagem, roda, foco de teclado',
        'Nativo — grátis do navegador',
        'Emulado / módulos opcionais',
        'Faça você mesmo (headless)',
        'Faça você mesmo',
        'Limitado',
      ],
      [
        'Ideal para',
        'Linhas de categorias, faixas de abas, filtros de chips',
        'Sliders em tela cheia, galerias',
        'Carrosséis personalizados (padrão do shadcn)',
        'Sliders personalizados mínimos',
        'Migrações de slick legado',
      ],
    ],
    note: 'Os tamanhos de bundle são núcleos aproximados — confira o bundlephobia para números atuais antes de decidir apenas pelo tamanho.',
  },

  prose: [
    {
      heading: 'Primeiro, a pergunta real',
      body: `Um **carrossel** apresenta slides: uma coisa (ou uma página de coisas) por vez, com snap, efeitos e uma sensação de «posição 3 de 8». Um **menu** apresenta uma linha que o usuário percorre e da qual escolhe: um carril de categorias, uma faixa de abas, uma barra de chips. Carrosséis querem semântica de slides; menus querem rolagem nativa — inércia, barra de rolagem, roda, toque e foco de teclado comportando-se exatamente como no resto da página — mais o que o navegador não dá: saber quais itens estão na tela.

Se você está construindo um slider de imagens em tela cheia, uma galeria hero ou qualquer coisa com física de snap para slide, **use uma biblioteca de carrossel — Embla ou Swiper são excelentes**. Esta página existe para o outro caso, o que todo FAQ de carrossel ignora em silêncio: linhas de coisas clicáveis que nunca foram de fato slides.`,
    },
    {
      heading: 'vs Swiper',
      body: `Swiper é o framework de slider mais completo que existe: efeitos (fade, cube, coverflow), slides virtuais, zoom, parallax, paginação e um ecossistema maduro. Seus ≈40 kB se justificam quando você usa o que ele entrega. Ele reimplementa a rolagem com transformações, então a barra de rolagem nativa, o comportamento da roda e a acessibilidade da rolagem são emulações que você configura, não padrões que você herda.

- **Escolha Swiper** para sliders centrados em imagens, efeitos ou qualquer coisa que deva parecer slides.
- **Escolha esta biblioteca** quando o «carrossel» é uma barra de chips estilo YouTube ou uma linha de categorias estilo Netflix: você obtém rolagem nativa por ≈34 kB a menos, mais \`useIsVisible\` por item — algo que o Swiper não modela, porque slides não são itens.`,
    },
    {
      heading: 'vs Embla',
      body: `Embla é um motor de carrossel headless com física bonita e um adaptador React de primeira — é sobre ele que o shadcn/ui constrói seu carrossel, e o padrão correto quando você quer controle visual total sobre um carrossel real. Headless corta dos dois lados para menus: rolar até a visão ao selecionar, visibilidade por item, desativação de setas e gerenciamento de foco são todos seus para construir à mão.

- **Escolha Embla** para carrosséis de design personalizado e física de snap com tamanho pequeno.
- **Escolha esta biblioteca** quando essas peças construídas à mão são justamente o ponto: \`scrollToItem\`, \`useIsVisible\`, estado de seta first/last e \`apiRef\` já vêm funcionando.`,
    },
    {
      heading: 'vs keen-slider',
      body: 'keen-slider é um motor de slider enxuto e independente de framework, uma boa escolha para sliders personalizados mínimos quando você quer uma dependência só entre frameworks. Como os outros, ele possui a camada de gestos com transformações, e sua API é moldada pelo índice de slide: boa para slides, estranha para «role o chip selecionado até a vista e me diga o que está visível».',
    },
    {
      heading: 'vs react-slick',
      body: 'react-slick porta o carrossel slick da era jQuery para o React. Ainda funciona, mas arrasta um arquivo CSS separado, sua arquitetura é anterior aos hooks e a manutenção é escassa. Times que o abandonam costumam cair em dois lados: carrosséis reais (vão para Embla ou Swiper) — e linhas de navegação dobradas no `centerMode` porque o slick já estava instalado. Esse segundo lado é exatamente a forma desta biblioteca: [seleção centralizada](/examples/center-on-click), [avanço de um item](/examples/one-item-scroll) e [arrastar para rolar](/examples/mouse-drag) sem motor de slider.',
    },
    {
      heading: 'Como é o lado do menu',
      body: `Cada padrão deste site está ao vivo e renderizado no servidor, cada um com sua fonte completa: [abas roláveis](/examples/center-on-click), [chips de filtro](/examples/add-item-and-scroll-to-it), [linhas de carregar mais](/examples/add-items) e — as duas funções que as pessoas assumem precisar de um motor de carrossel — [loop infinito](/examples/infinite-loop) e [autoplay](/examples/autoplay), cada uma com cerca de sessenta linhas sobre a API pública.

- 5,7 kB min+gzip, TypeScript-first, MIT, ≈347k downloads/mês, mantido desde 2018 com uma API estável do React 16.8 ao 19.
- Amigável a SSR: a linha rola antes de seu JavaScript hidratar — esta página e cada demo deste site provam isso.`,
    },
  ],

  links: {
    examples: 'Ver todos os exemplos',
    storybook: 'Experimente no Storybook',
    github: 'GitHub',
  },
};
