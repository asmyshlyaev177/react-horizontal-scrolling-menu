// Portuguese (Brazil) (pt-BR) — translation of en/compare-pairs.ts.
//
// Values only: every key, its order and its type come from the English
// module, and a missing or renamed one is a type error rather than a
// silently English page.
// i18n:meta locale=pt-BR source=en/compare-pairs.ts source-blob=0fb5673892e901be3f7c39eba5eb45e00488b9a5 status=translated
import type { ComparePairsCopy } from '../types.ts';

// Neutral-pair comparison pages. The voice is a referee's, not a vendor's:
// each page recommends the right carousel for carousel jobs and claims only
// the menu-shaped slice. Overselling here burns the credibility the pages
// exist to earn.
export const comparePairs: ComparePairsCopy = {
  hub: {
    heading: 'Mais comparações',
    lede: 'Páginas mais aprofundadas sobre as escolhas específicas que as pessoas realmente pesam.',
  },

  emblaVsSwiper: {
    meta: {
      title: 'Embla vs Swiper: qual carrossel React escolher',
      description:
        'Embla vs Swiper comparados com honestidade: tamanho do bundle, funcionalidades, headless vs com tudo incluso — e a terceira opção quando seu carrossel é na verdade um menu.',
    },
    jsonLdHeadline:
      'Embla vs Swiper para React: uma comparação honesta, mais o caso em que você não precisa de nenhum dos dois',
    name: 'Embla vs Swiper',
    blurb:
      'Motor headless ou tudo incluso — e o caso em que você não precisa de nenhum dos dois.',
    title: 'Embla vs Swiper: escolha pelo que você está construindo',
    lede: 'Os dois são excelentes motores de carrossel, mantidos ativamente, e a escolha entre eles é genuinamente equilibrada. Tudo se resume a um eixo: o Swiper entrega todas as funcionalidades embutidas; o Embla entrega um pequeno motor headless sobre o qual você constrói. Esta página é escrita pelo mantenedor de uma biblioteca que não compete com nenhum dos dois — que também é a terceira resposta lá embaixo, para as construções que no fim das contas não são carrosséis.',
    table: {
      headers: ['', 'Embla', 'Swiper'],
      rows: [
        [
          'O que é',
          'Motor de carrossel headless',
          'Framework completo de slider/carrossel',
        ],
        [
          'Bundle (núcleo, min+gzip)',
          '≈8 kB',
          '≈40 kB (cresce com os módulos)',
        ],
        [
          'Estilização e markup',
          'Totalmente seu — não vem com nada',
          'DOM e CSS próprios, com tema',
        ],
        [
          'Efeitos (fade, cube, coverflow…)',
          'Plugins da comunidade, ou faça você mesmo',
          'Embutidos, maduros',
        ],
        [
          'Autoplay, paginação, miniaturas',
          'Plugins oficiais',
          'Módulos embutidos',
        ],
        [
          'Integração com React',
          'Hook de primeira classe (useEmblaCarousel)',
          'Componentes wrapper sobre um núcleo vanilla',
        ],
        [
          'Nota do ecossistema',
          'O motor por trás do carrossel do shadcn/ui',
          'O slider mais usado da web',
        ],
        [
          'Melhor para',
          'Carrosséis com design personalizado, design systems',
          'Sliders focados em imagem, galerias ricas em funcionalidades',
        ],
      ],
      note: 'Os tamanhos de bundle são núcleos aproximados — confira o bundlephobia para números atuais; o do Swiper cresce com os módulos que você importa.',
    },
    prose: [
      {
        heading:
          'Escolha o Embla quando o controle de design for o ponto principal',
        body: `O Embla te dá física de encaixe (snap), tratamento de arraste e um modelo de slide, e nada além disso — sem markup, sem CSS, sem setas. Essa é a força dele: em um design system, tudo o que é visível é seu, e o motor nunca briga com seus estilos. É sobre isso que o shadcn/ui constrói seu carrossel, o que indica o ponto ideal: equipes que querem um carrossel parecido com *o produto delas*, não com uma biblioteca de carrossel.

O custo é que toda funcionalidade além de deslizar é um complemento ou feita à mão: autoplay e nomes de classe são plugins oficiais; pontos de paginação, miniaturas e efeitos ficam por sua conta escrever.`,
      },
      {
        heading: 'Escolha o Swiper quando quiser as funcionalidades prontas',
        body: `O Swiper é a resposta com tudo incluso: efeitos de fade, cube e coverflow, slides virtuais, zoom, parallax, galerias de miniaturas, módulo de a11y, paginação em vários estilos — configurados, não construídos. Se seu produto precisar de três dessas coisas neste trimestre, o Swiper compensa o tamanho dele muitas vezes.

O custo é o inverso do Embla: você herda o DOM do Swiper, o CSS dele para dar tema, e um núcleo em JS vanilla envolvido para React — mais pesado tanto em kilobytes quanto em superfície de API.`,
      },
      {
        heading: 'A pergunta a fazer antes de escolher qualquer um dos dois',
        body: `As duas bibliotecas assumem que você está apresentando *slides* — uma coisa, ou uma página de coisas, por vez, com encaixe e uma noção de posição. Boa parte dos "carrosséis" reais não é nada disso: fileiras de categorias, tiras de logos, barras de abas, filtros de chips — fileiras de itens clicáveis que o usuário examina e escolhe. Esses casos querem rolagem nativa (inércia, barra de rolagem, roda do mouse, acessibilidade de graça) mais saber quais itens estão na tela — e nem o Embla nem o Swiper modelam visibilidade por item, porque slides não são itens.

Para esse formato existe uma terceira opção: o [react-horizontal-scrolling-menu](/) (≈5,7 kB) usa a rolagem nativa e entrega \`useIsVisible\`, \`scrollToItem\` e setas sensíveis às bordas. Veja como uma [fileira estilo Netflix](/netflix-row), uma [barra de abas](/scrollable-tabs) ou uma [barra de chips](/filter-chips), ou a [tabela de comparação completa](/compare) contra os dois.`,
      },
    ],
  },

  reactSlickAlternatives: {
    meta: {
      title: 'Alternativas ao react-slick em 2026',
      description:
        'Migrando do react-slick: Embla e Swiper para carrosséis de verdade, react-horizontal-scrolling-menu para fileiras que usavam centerMode como navegação. Guia de migração honesto.',
    },
    jsonLdHeadline:
      'Alternativas ao react-slick: para onde migrar carrosséis de verdade, e para onde deve ir sua fileira com centerMode',
    name: 'react-slick alternatives',
    blurb:
      'Para onde migrar carrosséis de verdade — e para onde devem ir as fileiras com centerMode.',
    title:
      'Alternativas ao react-slick: migre de acordo com o que você construiu com ele',
    lede: 'O react-slick porta o carrossel slick da era jQuery para o React. Ele ainda funciona, mas a arquitetura é anterior aos hooks, os lançamentos são raros, e ele arrasta um arquivo CSS separado para todo build. A substituição certa depende menos das funcionalidades e mais de em qual dos dois grupos o seu uso se encaixa.',
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
          'O que é',
          'Porte para React do slick em jQuery',
          'Motor de carrossel headless',
          'Framework completo de slider',
          'Menu de rolagem, rolagem nativa',
        ],
        ['Manutenção', 'Rara', 'Ativa', 'Ativa', 'Ativa desde 2018'],
        [
          'Bundle (min+gzip)',
          '≈15 kB + CSS do slick',
          '≈8 kB',
          '≈40 kB',
          '≈5,7 kB',
        ],
        [
          'Precisa de arquivo CSS extra',
          'Sim (dois)',
          'Não',
          'Sim (núcleo)',
          'Um, ou Tailwind via item shadcn',
        ],
        [
          'Semântica de slide (snap, pontos, fade)',
          'Sim',
          'Sim',
          'Sim',
          'Não — de propósito',
        ],
        [
          'Fileiras de itens clicáveis',
          'Forçado via centerMode',
          'Construído à mão sobre o motor',
          'Configurado contra a lógica natural',
          'O caso de uso principal',
        ],
      ],
      note: 'Os tamanhos são núcleos aproximados. A última coluna é a própria biblioteca deste site — a tabela deixa isso claro em vez de fingir o contrário.',
    },
    prose: [
      {
        heading: 'Grupo um: era um carrossel de verdade',
        body: `Sliders de hero, galerias de imagens, carrosséis de depoimentos — qualquer coisa em que os pontos, o fade e o autoplay do slick carregavam o design. Migre para um motor de carrossel de verdade:

- **[Embla](/compare/embla-vs-swiper)** se você estiliza tudo por conta própria e quer um núcleo headless pequeno — o mais próximo de "slick, modernizado" em espírito.
- **Swiper** se você usava bastante a lista de funcionalidades do slick; toda funcionalidade do slick tem um equivalente no Swiper, geralmente melhor.

Mapeie \`slidesToShow\`/\`slidesToScroll\` para \`slidesInView\`/\`slidesToScroll\` do Embla ou \`slidesPerView\`/\`slidesPerGroup\` do Swiper, e espere ter que apagar suas sobrescritas de CSS de posicionamento de setas — os dois sucessores deixam você renderizar seus próprios botões.`,
      },
      {
        heading: 'Grupo dois: era navegação disfarçada de centerMode',
        body: `A outra instalação do slick é a discreta: uma fileira de categorias, logos, datas ou filtros, forçada a virar um carrossel com \`centerMode\`, \`focusOnSelect\` e \`variableWidth\` porque o slick já estava no bundle. O sinal é o que você teve que combater: cliques disparando depois de arrastes, setas nos momentos errados, itens que você não conseguia medir, encaixe (snap) que você não queria.

Aquela fileira era um menu. O [react-horizontal-scrolling-menu](/) faz as três coisas que o centerMode estava simulando — [centralizar o item clicado](/examples/center-on-click), rolar nativamente com [suporte a arraste](/examples/mouse-drag), e informar [quais itens estão visíveis](/examples/simple) — em ≈5,7 kB e sem motor de slider. Veja as páginas de [abas roláveis](/scrollable-tabs) e [trilha de categorias](/category-rail) para os dois formatos mais comuns.`,
      },
      {
        heading: 'Seja qual for o grupo: a migração é menor do que parece',
        body: 'A superfície de API do slick é grande, mas auditorias de configurações reais encolhem rápido: a maioria dos projetos usa um punhado de props. Liste as que você realmente define, decida em qual grupo cada uso se encaixa, e migre por instância — os dois grupos costumam coexistir em um mesmo código-fonte, e não há regra nenhuma dizendo que os dois precisam ir para a mesma biblioteca.',
      },
    ],
  },

  swiperAlternatives: {
    meta: {
      title: 'Alternativas mais leves ao Swiper para React',
      description:
        'Procurando uma alternativa mais leve ao Swiper em React? Embla e keen-slider para carrosséis de verdade, react-horizontal-scrolling-menu para fileiras em formato de menu. Tamanhos comparados.',
    },
    jsonLdHeadline:
      'Alternativas ao Swiper para React: carrosséis mais leves, e a rota de fuga em formato de menu',
    name: 'Swiper alternatives',
    blurb:
      'Quando ≈40 kB é a reclamação: motores mais leves, e a rota de fuga em formato de menu.',
    title:
      'Alternativas ao Swiper para React, de acordo com o que você está realmente fugindo',
    lede: 'Ninguém deixa o Swiper porque ele é ruim — é o slider mais completo que existe. As pessoas o deixam pelo peso (≈40 kB antes dos módulos), por herdar o DOM e o CSS dele, ou porque o "slider" delas nunca foi realmente feito de slides. Cada reclamação tem uma resposta ideal diferente.',
    table: {
      headers: [
        '',
        'Swiper',
        'Embla',
        'keen-slider',
        'react-horizontal-scrolling-menu',
      ],
      rows: [
        ['Bundle (núcleo, min+gzip)', '≈40 kB', '≈8 kB', '≈7 kB', '≈5,7 kB'],
        [
          'Modelo',
          'Slides, tudo incluso',
          'Slides, headless',
          'Slides, motor mínimo',
          'Itens em uma fileira de rolagem nativa',
        ],
        [
          'Efeitos e módulos',
          'O mais rico disponível',
          'Plugins / faça você mesmo',
          'Alguns embutidos',
          'Nenhum — receitas no lugar',
        ],
        [
          'Controla a camada de gestos',
          'Sim (transforms)',
          'Sim (transforms)',
          'Sim (transforms)',
          'Não — o navegador rola',
        ],
        [
          'Visibilidade por item',
          'Eventos de índice de slide',
          'Eventos de índice de slide',
          'Eventos de índice de slide',
          'Embutida (useIsVisible)',
        ],
        [
          'Melhor troca quando',
          '—',
          'Você já estiliza tudo de qualquer forma',
          'Slider mínimo, sem prisão ao React',
          'Os "slides" são itens clicáveis',
        ],
      ],
      note: 'Os tamanhos são núcleos aproximados — o do Swiper cresce com os módulos importados, o que também significa que um build enxuto do Swiper é menor do que sua reputação sugere.',
    },
    prose: [
      {
        heading: 'Fugindo dos kilobytes: Embla ou keen-slider',
        body: `Se o produto é um carrossel de verdade — com encaixe, uma página de slides por vez — os motores leves são quase um substituto direto:

- **[Embla](/compare/embla-vs-swiper)** (≈8 kB): headless, física excelente, hook de primeira classe para React, o motor por trás do carrossel do shadcn/ui. Você traz todo o markup e o CSS — que é justamente o ponto.
- **keen-slider** (≈7 kB): um motor mínimo e agnóstico de framework, bom quando o mesmo slider precisa rodar em React e em superfícies fora do React.

Os dois mantêm o modelo de slide baseado em transform, então efeitos como fade ou coverflow continuam sendo faça-você-mesmo — se você depende deles, um build enxuto do Swiper é honestamente a resposta melhor do que reimplementá-los.`,
      },
      {
        heading: 'Fugindo do modelo de slide: o caso em formato de menu',
        body: `A outra saída é para construções em que a semântica de slide do Swiper nunca foi estrutural: fileiras de categorias, paredes de logos, barras de abas, barras de chips, trilhas de produto. Os sinais são configurações como \`slidesPerView: 'auto'\` combinado com \`freeMode: true\` — essa combinação é o Swiper sendo forçado a imitar a rolagem nativa.

[react-horizontal-scrolling-menu](/) (≈5,7 kB) é essa rolagem nativa, mais as partes que o navegador não entrega sozinho: [visibilidade por item](/examples/simple), [scroll-to-item](/examples/scroll-to-item), setas sensíveis às bordas e [arraste que não quebra cliques](/examples/mouse-drag). Sem efeitos, sem encaixe, sem emulação de gestos — veja as páginas [Netflix-row](/netflix-row), [tabs](/scrollable-tabs) e [chip-bar](/filter-chips), ou a [tabela completa](/compare).`,
      },
      {
        heading: 'Um aviso justo nas duas direções',
        body: 'Migrar do Swiper para economizar peso e depois construir autoplay, paginação, anúncios de a11y e efeitos à mão é assim que um problema de 40 kB vira um problema de um mês-pessoa. Troque para um motor mais leve quando seu uso for genuinamente um subconjunto — e para um menu de rolagem só quando a semântica de slide sempre foi fingida. Se você usa a profundidade do Swiper, fique com o Swiper.',
      },
    ],
  },
};
