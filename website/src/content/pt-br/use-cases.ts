// Portuguese (Brazil) (pt-BR) — translation of en/use-cases.ts.
//
// Values only: every key, its order and its type come from the English
// module, and a missing or renamed one is a type error rather than a
// silently English page.
// i18n:meta locale=pt-BR source=en/use-cases.ts source-blob=0bba3e70db5e9e86a65737d044573e94eae8728e status=translated
import type { UseCasesCopy } from '../types.ts';

export const useCases: UseCasesCopy = {
  hub: {
    heading: 'Casos de uso',
    lede: 'Padrões completos por objetivo — demo ao vivo, código e instalação shadcn.',
  },

  netflixRow: {
    name: 'Linha estilo Netflix',
    blurb:
      'Cards de pôster, setas no hover sobre as bordas, fade nas bordas, arraste.',
    meta: {
      title: 'Linha horizontal estilo Netflix em React',
      description:
        'Crie uma linha de categorias estilo Netflix em React com rolagem nativa: setas ao passar o mouse, fade nas bordas, arraste para rolar, rastreamento de visibilidade. Demo ao vivo e código-fonte completo.',
    },
    jsonLdHeadline:
      'Como criar uma linha horizontal estilo Netflix em React — sem biblioteca de carrossel',
    title: 'Linha horizontal estilo Netflix em React',
    lede: 'A fileira de pôsteres que você percorre em qualquer site de streaming usa a rolagem nativa com inércia (momentum), com setas sobrepostas por cima. É exatamente isso que o `react-horizontal-scrolling-menu` entrega: seus cards, rolagem nativa e visibilidade por item para que as setas saibam quando se esconder.',
    demoHint:
      'Arraste, ou passe o mouse sobre a fileira — as setas aparecem gradualmente nas bordas, e cada uma desaparece quando aquele extremo da fileira é alcançado.',
    prose: [
      {
        heading: 'Por que a rolagem nativa se encaixa',
        body: `Uma fileira estilo Netflix nunca mostra um slide por vez. Os itens são propositalmente cortados nas bordas — o pôster cortado é o indício visual que diz "tem mais". Motores de carrossel lutam contra isso: eles assumem a camada de gestos com transformações em JavaScript, encaixam (snap) nos limites dos slides e reimplementam a inércia que o navegador do usuário já tem. Em uma fileira de cards clicáveis, tudo isso é overhead.

A rolagem nativa te dá inércia, toque, trackpad e barra de rolagem de graça. As duas coisas que ela não te dá são as setas sobrepostas e saber quais cards estão na tela — e são exatamente essas duas coisas que esta biblioteca adiciona, via [\`useIsVisible\`](/examples/simple) por item e um estado de seta sensível às bordas.`,
      },
      {
        heading: 'Os três detalhes que vendem o efeito',
        body: `- **As setas se sobrepõem ao conteúdo**, elas não ficam ao lado dele. Renderize-as com posicionamento absoluto sobre as extremidades da fileira (a demo acima as passa através de \`Header\` para que fiquem dentro do contexto do menu), mostre-as ao passar o mouse e esconda cada uma quando [\`useLeftArrowVisible\` / \`useRightArrowVisible\`](/examples/simple) informar que aquele extremo da fileira foi alcançado.
- **As bordas desaparecem em gradiente.** Uma linha de CSS — um gradiente \`mask-image\` no contêiner de rolagem — substitui a lógica de "espiada" que os plugins de carrossel embutem para isso.
- **O arraste não pode disparar cliques.** Um arraste de mouse que termina sobre um pôster não pode abri-lo. A [receita de arraste para rolar](/examples/mouse-drag) rastreia o estado do arraste e engole exatamente esse clique.`,
      },
      {
        heading: 'Escalando: fileiras preguiçosas e trilhas longas',
        body: `Interfaces de streaming empilham dezenas de fileiras com centenas de cards. Como os itens são DOM comum dentro de um contêiner de rolagem nativa, nada é renderizado novamente durante a rolagem — o [exemplo de performance](/examples/performance) roda 300 itens sem virtualização. A visibilidade por item também te dá lazy-loading de imagens de graça: renderize um placeholder até que \`useIsVisible\` informe que o card está na tela.

Se a sua fileira precisa dar a volta no final, esse é o único lugar em que a semântica de slides realmente ajuda — veja a [receita de loop infinito](/examples/infinite-loop) para a versão userland de ~60 linhas antes de recorrer a um motor de carrossel.`,
      },
    ],
    snippet: {
      heading: 'O padrão, no mínimo',
      lede: 'Setas sobrepostas em uma fileira de rolagem nativa — a demo acima é essa estrutura mais estilização. O código-fonte completo, pronto para uso, com arraste e fade nas bordas, vem como o componente shadcn abaixo.',
    },
    shadcn: {
      heading: 'Ou instale como um componente shadcn',
      body: 'O item de registro [media-row](https://react-horizontal-scrolling-menu.dev/r/media-row.json) é exatamente esse padrão — setas ao passar o mouse, fade em gradiente nas bordas, arraste para rolar — como um componente estilizado com Tailwind no seu `components/ui/`, seu para editar:',
    },
  },

  scrollableTabs: {
    name: 'Abas roláveis',
    blurb:
      'Uma faixa de abas que transborda com elegância e centraliza a aba ativa.',
    meta: {
      title: 'Abas roláveis em React — sem precisar do Material UI',
      description:
        'Abas roláveis em React com rolagem nativa: a aba ativa se centraliza sozinha, as setas aparecem só quando necessário, conteúdo de aba livre. Demo ao vivo e código-fonte.',
    },
    jsonLdHeadline:
      'Abas roláveis em React: rolagem nativa, seleção centralizada, sem Material UI',
    title: 'Abas roláveis em React que rolam como o navegador',
    lede: 'Uma barra de abas para de caber assim que seu produto passa de seis abas. A solução não é uma fonte menor — é uma barra que rola: o overflow fica por conta do navegador, clicar em uma aba a centraliza, e as setas aparecem só quando há para onde ir.',
    demoHint:
      'Clique em uma aba perto da borda — ela rola sozinha até o centro.',
    prose: [
      {
        heading: 'O único comportamento que importa: centralizar ao selecionar',
        body: `Uma barra de abas rolável vive ou morre pelo que acontece quando você clica em uma aba na borda: ela deve deslizar até o meio, revelando as vizinhas dos dois lados. Aqui isso é uma única chamada — \`scrollToItem(el, 'smooth', 'center')\` — ligada no [exemplo center-on-click](/examples/center-on-click). Restaurar a aba ativa ao montar o componente é a mesma chamada com \`'auto'\`, mostrada em [salvar e restaurar posição](/examples/save-restore-position).

As setas vêm dos mesmos dados de visibilidade: \`useLeftArrowVisible\` só é falso enquanto a primeira aba está fora da tela, então a seta esquerda é renderizada exatamente quando é útil. Sem código de medição, sem resize observers próprios.`,
      },
      {
        heading: 'Se você está deixando as abas roláveis do MUI para trás',
        body: `As abas \`variant="scrollable"\` do Material UI são a resposta certa dentro do design system do Material — até suas "abas" pararem de ser abas. O MUI solda a barra à semântica de Tabs: um par \`value\`/\`onChange\`, painéis de aba e botões de rolagem que o MUI esconde no mobile por padrão. No momento em que sua fileira passa a ter chips, cards, avatares ou conteúdo misto, ou precisa de arraste para rolar, ou precisa saber quais itens estão visíveis, você está lutando contra o componente em vez de usá-lo.

Esta biblioteca é a camada abaixo disso: uma fileira rolável com rastreamento de visibilidade, sem opinião sobre o que é uma "aba". Sua aba é qualquer componente com um \`itemId\` — estilize com Tailwind, o \`styled\` do próprio MUI, ou CSS puro. O estado de seleção continua seu, exatamente como a demo acima o mantém em um único \`useState\`. A [receita de abas roláveis além do MUI](/examples/mui-scrollable-tabs) é essa ponte por escrito — \`value\`/\`onChange\` mantido, a barra trocada.`,
      },
      {
        heading: 'Acessibilidade é quase de graça — atenção às duas lacunas',
        body: `Como a barra é um contêiner de rolagem nativa, o foco de teclado, a ordem de leitura do leitor de tela e o RTL vêm da plataforma — mover o foco pelas abas as rola para a área visível sem nenhum código, e o [RTL](/examples/rtl) não precisa de configuração. Duas coisas continuam por sua conta, como em qualquer UI de abas: escolher seu padrão ARIA (\`role="tablist"\` se painéis reais forem trocados, \`aria-current\` se as "abas" forem navegação) e manter a supressão de clique da receita de [arraste para rolar](/examples/mouse-drag) para que soltar um arraste nunca ative uma aba.`,
      },
    ],
    snippet: {
      heading: 'O padrão, no mínimo',
      lede: 'Abas são botões comuns com um `itemId`; selecionar uma a centraliza. Essa é a ideia toda — a demo acima adiciona estilização e arraste.',
    },
    shadcn: {
      heading: 'Ou instale como um componente shadcn',
      body: 'O item de registro [scroll-tabs](https://react-horizontal-scrolling-menu.dev/r/scroll-tabs.json) entrega esse padrão orientado a dados — passe `tabs`, `value`, `onValueChange` — como um componente editável no seu `components/ui/`:',
    },
  },

  filterChips: {
    name: 'Chips de filtro',
    blurb:
      'Uma barra de chips que rola os novos filtros para a vista sem quebrar os cliques.',
    meta: {
      title: 'Chips de filtro em React em uma barra rolável',
      description:
        'Uma barra horizontal de chips de filtro em React: os chips rolam nativamente, adicionar um chip o rola até a área visível, arraste para rolar sem quebrar cliques. Demo ao vivo e código-fonte.',
    },
    jsonLdHeadline:
      'Construindo uma barra rolável de chips de filtro em React com rolagem nativa',
    title: 'Uma barra de chips de filtro que rola, em React',
    lede: 'A fileira de chips embaixo de toda barra de busca — tópicos do YouTube, filtros de loja, seletores de tags — é um contêiner de rolagem de uma linha só, cheio de botões de alternância. Os 10% difíceis são o que acontece nas bordas: novos chips aparecendo fora da tela, arrastes que não podem alternar nada, e setas que sabem quando são inúteis.',
    demoHint:
      'Adicione um filtro — a fileira rola o novo chip até a área visível sozinha.',
    prose: [
      {
        heading: 'Os casos extremos são a funcionalidade',
        body: `Qualquer fileira flex com \`overflow-x: auto\` rola. Uma barra de chips justifica sua existência nos detalhes:

- **Um chip adicionado fora da tela precisa se anunciar.** A demo rola até cada novo chip com \`apiRef.current.scrollToItem(el, 'smooth', 'end')\` após a renderização — o [exemplo add-item-and-scroll-to-it](/examples/add-item-and-scroll-to-it) é exatamente essa conexão.
- **Arraste para rolar, clique para alternar — nunca os dois.** Usuários de desktop arrastam a fileira como uma superfície de toque; soltar sobre um chip não pode alterná-lo. A [receita de arraste](/examples/mouse-drag) rastreia o gesto e suprime exatamente esse clique.
- **Setas só quando úteis.** \`useLeftArrowVisible\` / \`useRightArrowVisible\` estão conectadas ao mesmo IntersectionObserver que tudo o mais, então as setas se desativam nas bordas reais — inclusive depois que chips são adicionados ou removidos.`,
      },
      {
        heading: 'O estado continua nas suas mãos',
        body: `A biblioteca rola; ela não é dona da seleção. Os chips são seus botões — \`aria-pressed\` para alternâncias de múltipla seleção, estado simples para seleção única — e o menu só precisa que cada um carregue um \`itemId\`. Isso significa que o estado dos chips se compõe com o que você já tem: parâmetros de busca da URL, uma biblioteca de formulários, um modelo de filtro controlado pelo servidor. Excluir um chip é [remover um item](/examples/add-items); animar sua saída é o [exemplo items-animation](/examples/items-animation).`,
      },
      {
        heading: 'Mobile: um aviso sobre a rolagem do body',
        body: `Em telas de toque, um swipe horizontal dentro da barra pode arrastar a página para o lado junto em alguns navegadores. Se isso acontecer, o [exemplo prevent-body-scroll](/examples/prevent-body-scroll) mostra o \`touch-action\` e a contenção de overscroll para travar isso — só CSS, sem biblioteca de gestos.`,
      },
    ],
    snippet: {
      heading: 'O padrão, no mínimo',
      lede: 'Chips são botões de alternância com um `itemId`; uma ref para a API do menu rola um chip recém-adicionado até a área visível.',
    },
    shadcn: {
      heading: 'Ou instale como um componente shadcn',
      body: 'O item de registro [chip-bar](https://react-horizontal-scrolling-menu.dev/r/chip-bar.json) entrega isso como um componente controlado — `options`, `selected`, `onSelectedChange` — estilizado com Tailwind no seu `components/ui/`:',
    },
  },

  categoryRail: {
    name: 'Trilha de categorias',
    blurb:
      'Uma fileira de departamentos da loja: setas cientes das bordas, imagens lazy, analytics.',
    meta: {
      title: 'Trilha de categorias em React para e-commerce',
      description:
        'Uma trilha horizontal de categorias em React: rolagem nativa, setas que se desativam nas bordas, visibilidade por item para imagens preguiçosas e analytics. Demo e código-fonte.',
    },
    jsonLdHeadline:
      'Construindo uma trilha de categorias de e-commerce em React sobre rolagem nativa',
    title: 'Uma trilha de categorias para sua loja, em React',
    lede: 'Trilhas de categorias — a fileira tocável de departamentos acima da grade de uma loja — são os contêineres de rolagem de maior tráfego no e-commerce: cada bloco é um link, nada se encaixa, e meio bloco espiando na borda é o que convida à rolagem.',
    demoHint:
      'Arraste a trilha ou use as setas — elas se desativam nas extremidades reais da fileira.',
    prose: [
      {
        heading: 'Por que a rolagem nativa vence em uma vitrine',
        body: `Trilhas de vitrine ficam acima da dobra em páginas nas quais você briga por cada ponto do Lighthouse. Um motor de carrossel entrega dezenas de kilobytes de emulação de gestos para fazer o que o navegador já faz nativamente; esta biblioteca tem ≈5,7 kB min+gzip e deixa a rolagem por conta da plataforma, então não há travamento (jank) de hidratação — a trilha rola antes mesmo do seu JavaScript carregar, o que também significa que ela funciona no HTML renderizado no servidor que seus crawlers veem. Esta própria página é a prova renderizada no servidor: a demo acima rola com o JavaScript desativado.

A [página de comparação](/compare) tem a tabela completa contra Swiper, Embla, keen-slider e react-slick.`,
      },
      {
        heading: 'Rastreamento de visibilidade é uma funcionalidade de vitrine',
        body: `Visibilidade por item soa como um detalhe de implementação até você mapeá-la para o merchandising:

- **Imagens preguiçosas (lazy)** — renderize um bloco placeholder até que \`useIsVisible\` informe que ele está na tela.
- **Analytics de impressão** — \`getVisible()\` (ao vivo na [demo do hero](/) na página inicial) diz exatamente quais categorias foram vistas, não só que a trilha foi renderizada.
- **Setas sensíveis às bordas** — desativam ou se escondem nas extremidades reais, mesmo depois que categorias carregam de forma assíncrona, como no [exemplo add-items](/examples/add-items).`,
      },
      {
        heading: 'Encaixe no seu design system',
        body: `Os blocos são seus componentes — cards de imagem, círculos, pílulas de texto — cada um carregando um \`itemId\`. Altura e largura vêm do seu CSS; o menu não impõe nenhuma dimensão. Avance um item por vez, como um slider de produto, com [one-item-scroll](/examples/one-item-scroll), mostre um [indicador de progresso](/examples/progress) de rolagem, ou entregue em RTL para lojas em árabe e hebraico com o [exemplo RTL](/examples/rtl) — a trilha é composição, não configuração.`,
      },
    ],
    snippet: {
      heading: 'O padrão, no mínimo',
      lede: 'Blocos com um `itemId`, setas vindas dos hooks de visibilidade — a trilha inteira tem menos de quarenta linhas.',
    },
    shadcn: {
      heading: 'Ou instale como um componente shadcn',
      body: 'O item de registro base [scroll-menu](https://react-horizontal-scrolling-menu.dev/r/scroll-menu.json) é essa mesma trilha — setas estilizadas pelo shadcn, arraste para rolar, barra de rolagem escondida — instalado no seu `components/ui/` e estilizado pelos seus tokens:',
    },
  },
};
