// Portuguese (Brazil) (pt-BR) — translation of en/home.ts.
//
// Values only: every key, its order and its type come from the English
// module, and a missing or renamed one is a type error rather than a
// silently English page.
// i18n:meta locale=pt-BR source=en/home.ts source-blob=1da4a2b83ec7a4e233dae7ab5c335622de7edad4 status=translated
import { INTENT, REACT_STATUS, STORIES } from '../../lib/links.ts';
import type { HomeCopy } from '../types.ts';

// Deep-links the import, not the repo root: the claim is that they render
// this component in production, and the line proves it. Commit-pinned so a
// refactor on their side can't turn it into a 404.
const OWID =
  'https://github.com/owid/owid-grapher/blob/4a60a2fb4532a2d287a1ef5660339dcc32bcd483/site/gdocs/components/KeyInsights.tsx#L3';

export const home: HomeCopy = {
  jsonLdDescription:
    'Componente de menu de rolagem horizontal para React com rastreamento de visibilidade por item, construído sobre a rolagem nativa do navegador.',

  hero: {
    titleLead: 'O menu horizontal que ',
    titleHighlight: 'sabe o que está visível',
    sub: 'Um menu de rolagem do React construído sobre a própria rolagem do navegador — rastreamento de visibilidade por item, setas, arraste e uma API imperativa completa. `5,7 kB` gzip.',
    primaryCta: 'Começar',
    secondaryCta: 'Ver exemplos',
    storybookCta: 'Abrir o Storybook',
  },

  install: {
    ariaLabel: 'Instalar',
    copyLabel: 'Copiar comando de instalação',
    shadcnNote:
      'Ou um componente [shadcn/ui](https://ui.shadcn.com) pronto — setas, drag-to-scroll, estilizado',
    shadcnCopyLabel: 'Copiar comando shadcn',
    facts: [
      '**347k** downloads/mês',
      '**5,7 kB** min+gzip',
      'React **16.8 – 19**',
      '**MIT**',
    ],
  },

  autoplay: {
    heading: 'Autoplay, sem motor de carrossel',
    lede: 'Não existe uma prop `autoplay` — este carril é uma receita sobre a API pública: a linha clonada nas duas pontas, um salto de `scrollLeft` na emenda e um temporizador chamando `scrollNext()`. Ele pausa no hover, no foco e em abas ocultas, fica parado sob movimento reduzido — e você pode arrastá-lo, até para trás, através da emenda.',
    recipeLink: 'Ler a receita completa',
    storybookLink: 'Edite ao vivo no Storybook',
  },

  positioning: {
    heading: 'Um *menu*, não um carrossel',
    scope: [
      'Embla, Swiper e keen-slider reimplementam a rolagem em JavaScript para construir sliders de imagens — pontos de snap, física de mola, um loop de render. Esta biblioteca não entrega nada disso. Ela usa a rolagem nativa do navegador e adiciona a única coisa que o navegador não dá: saber exatamente quais itens estão na tela.',
      '**A ferramenta errada** para um slider de imagens em tela cheia — use Embla ou Swiper lá. **A ferramenta certa** para linhas de categorias, faixas de abas, filtros de chips e qualquer linha de coisas sobre a qual seu app precise raciocinar.',
    ],
    pillars: [
      {
        title: 'Rolagem nativa',
        body: 'Inércia, barra de rolagem, toque, roda e acessibilidade vêm do navegador, não de um motor de física. A linha rola antes de seu JavaScript hidratar — cada demo desta página é renderizada no servidor.',
      },
      {
        title: 'Rastreamento de visibilidade',
        body: 'O IntersectionObserver informa quais itens estão na tela. `useIsVisible(itemId)` inscreve um componente em um item — sem matemática de posição de rolagem, e só os itens afetados são re-renderizados.',
      },
      {
        title: 'Imperativo quando você precisa',
        body: '`scrollToItem`, `scrollNext`, `scrollPrev`, busca por id ou índice — pelo contexto dentro do menu, ou pelo `apiRef` de fora dele.',
      },
      {
        title: 'Seus componentes, seu CSS',
        body: 'Setas, header, footer e cada item são componentes que você escreve. A largura do item é seu CSS. A biblioteca entrega 210 bytes de estilos de layout e sai do caminho.',
      },
    ],
  },

  quickStart: {
    heading: 'Início rápido',
    lede: 'Um arquivo, sem configuração: itens com `itemId`, duas setas lendo `VisibilityContext` e a importação da folha de estilos.',
    notes: [
      '`itemId` é obrigatório em cada item — é assim que o rastreamento funciona. A `key` do React funciona como fallback.',
      '`styles.css` é uma importação separada; o bundle JS nunca injeta CSS.',
      'A largura do item vem do seu próprio CSS — o menu não mede nada.',
    ],
    link: 'Ler o exemplo completo de primeiros passos',
  },

  aiSkills: {
    heading: 'Ou entregue ao seu agente de código',
    body: `Modelos treinados em versões antigas ainda procuram \`visibleElements\`, itens \`Separator\` e uma prop \`Arrows\` — tudo removido há anos — e inventam uma prop \`autoplay\` que nunca existiu. Para impedir isso, o pacote envia oito arquivos \`SKILL.md\`: orientação por tarefa que seu agente carrega sob demanda via [TanStack Intent](${INTENT}), versionada com a biblioteca em vez de com esta página.`,
    copyLabel: 'Copiar comando do Intent',
    note: 'Execute uma vez em um projeto que já tenha o pacote instalado. Seu agente então descobre as habilidades em `node_modules/react-horizontal-scrolling-menu/skills/`.',
    // The SKILL.md files published inside the package, and the one line each
    // that tells an agent — or a reader deciding whether this is worth a
    // command — when it is the one to load. Kept in the same order as
    // public/llms.txt, which is the machine-readable version of this table.
    skills: [
      {
        id: 'menu-setup',
        when: 'Um primeiro menu funcional, setas, a importação CSS necessária',
      },
      {
        id: 'menu-visibility',
        when: 'O que está na tela e o estado das setas nas bordas',
      },
      {
        id: 'menu-scrolling',
        when: 'scrollToItem, apiRef, paginação página a página',
      },
      {
        id: 'menu-interactions',
        when: 'Arraste, roda e toque — e suas fábricas de handlers',
      },
      {
        id: 'menu-recipes',
        when: 'Autoplay, loop infinito, carregar mais: receitas, não props',
      },
      {
        id: 'menu-transitions-rtl',
        when: 'Tempo de animação, easing personalizado, direita para esquerda',
      },
      {
        id: 'menu-testing-ssr',
        when: 'Next.js e RSC, mocks do Jest, Playwright',
      },
      {
        id: 'menu-migration',
        when: 'Atualizar código anterior à v8 e as APIs que os modelos ainda inventam',
      },
    ],
    skillsLink: 'Ler as habilidades no GitHub',
    llmsLink: 'llms.txt — os mesmos fatos, condensados',
  },

  gallery: {
    heading: 'Receitas que você realmente enviará',
    lede: 'Quatro padrões comuns, ao vivo, com as linhas que importam.',
    tabs: {
      title: 'Uma faixa de abas que centraliza a aba ativa',
      body: "Clique em uma aba: `scrollToItem` com `inline: 'center'` a traz para o meio da linha. A mesma chamada lida com `start`, `end` e paginação.",
      link: 'Ver o exemplo completo',
    },
    chips: {
      title: 'Adicione um chip, role até ele',
      body: 'O estado vive fora do menu; o `apiRef` alcança dentro. Adicione um filtro e a linha o segue.',
      link: 'Ver o exemplo completo',
    },
    infinite: {
      title: 'Carregue mais quando o fim aparecer',
      body: '`onUpdate` avisa quando o último item fica visível — acrescente a próxima página ali mesmo. Sem listeners de rolagem, sem limiares de pixel para ajustar.',
      link: 'Ver o exemplo completo',
    },
    rtl: {
      title: 'Da direita para a esquerda, com uma prop',
      body: '`RTL` inverte a direção do contêiner de rolagem; as setas e a lógica de paginação seguem.',
      link: 'Ver o exemplo completo',
    },
  },

  features: {
    heading: 'O que vem na caixa',
    included: [
      'Hooks de visibilidade por item — `useIsVisible(itemId)`',
      'Helpers `first` / `last` para o estado das setas',
      '`scrollToItem` · `scrollNext` · `scrollPrev`',
      '`apiRef` para controle de fora do menu',
      'Entrada por arraste, roda, toque e barra de rolagem',
      'Detecção dinâmica de adicionar/remover',
      'Slots Header e Footer',
      'Helpers de paginação `slidingWindow` + `getItemsPos`',
      'Suporte a direita para esquerda',
      'Funções de transição personalizadas',
      'Seguro para SSR — esta página prova',
      'TypeScript-first — `publicApiType` exportado',
      'Uma API estável do React 16.8 ao 19',
    ],
    notIncludedHeading: 'Não vem na caixa',
    notIncluded: [
      'Física de snap e de mola',
      'Sliders de imagens em tela cheia',
      'Lightboxes',
    ],
    note: `Isso pertence ao mundo dos sliders de imagens — Embla e Swiper fazem bem. O [loop infinito](${STORIES.infiniteLoop}) e o [autoplay](${STORIES.autoplay}) também não são props — são receitas: cerca de sessenta linhas da API pública cada, editáveis ao vivo no Storybook. O carril perto do topo desta página é exatamente essa receita em execução. Isto continua sendo um menu.`,
  },

  proof: {
    statement:
      'Baixado **347.516 vezes** no mês passado por cerca de **20.000 repositórios** — mantido desde **2018**.',
    notes: [
      '788 estrelas no GitHub',
      `Em destaque no [React Status #257](${REACT_STATUS})`,
      `Em produção no [Our World in Data](${OWID})`,
    ],
  },

  storybook: {
    heading: 'Cada exemplo é editável, no seu navegador',
    body: 'O Storybook funciona como um playground: cada história vem com um editor Monaco carregado com as definições de tipo reais da biblioteca. Mude o código, veja-o re-renderizar — sem conta de sandbox, sem configuração local.',
    primaryCta: 'Abrir o Storybook',
    secondaryCta: 'Referência da API',
  },

  author: {
    heading: 'Construído e mantido por Aleksandr Smyshliaev',
    body: 'Publicado pela primeira vez em 2018, a mesma API pública do React 16.8 ao 19. Aleksandr é engenheiro frontend — React, Next.js, TypeScript — atualmente aberto a trabalho por contrato e em tempo integral.',
    siteLink: 'asmyshlyaev177.dev',
    githubLink: 'GitHub',
    linkedinLink: 'LinkedIn',
  },
};
