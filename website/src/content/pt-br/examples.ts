// Portuguese (Brazil) (pt-BR) — translation of en/examples.ts.
//
// Values only: every key, its order and its type come from the English
// module, and a missing or renamed one is a type error rather than a
// silently English page.
// i18n:meta locale=pt-BR source=en/examples.ts source-blob=ffe3d71c21e3e6e545b59fae6bf1db09ad72e4ee status=translated
import type { ExamplesCopy } from '../types.ts';

/** Copy for the example pages, keyed by the slugs in `examples-manifest.ts`. */
export const examples: ExamplesCopy = {
  'add-item-and-scroll-to-it': {
    meta: {
      title: 'Chips de filtro no React: adicionar um item e rolar até ele',
      description:
        'Chips de filtro em um scroller horizontal do React: acrescente um item e então role até ele com apiRef e scrollToItem após ele renderizar. Demo ao vivo e fonte completa.',
    },
    title: 'Adicionar um item e rolar até ele — o padrão de chips de filtro',
    lede: 'Uma barra de chips cresce quando o usuário escolhe um filtro, e o novo chip deve acabar na tela, não escondido além da borda direita. A pegadinha: você não pode rolar até um elemento que ainda não renderizou. Este exemplo divide o trabalho entre um handler de clique e um efeito.',
    demoHint:
      'Clique em Adicionar filtro — o chip aparece no fim e a linha rola para revelá-lo. O x remove um chip.',
    prose: [
      {
        heading: 'Como funciona',
        body: 'O menu recebe um `apiRef`, que expõe a API completa fora da árvore de componentes. `addItem` faz duas coisas: guarda o novo id em uma ref `lastAdded` e então acrescenta o item ao estado. Ele de propósito não rola — nesse momento o chip é apenas estado, não DOM.',
      },
      {
        heading: 'Por que a rolagem vive em um efeito',
        body: '`getItemElementById` procura o item no DOM, então a rolagem só pode acontecer depois que o React confirmou o novo item. Um `useEffect` dependente de `items` roda exatamente nesse ponto: lê `lastAdded`, o limpa e chama `apiRef.current.scrollToItem(el, ’smooth’, ’end’)`. Limpar a ref importa — re-renderizações por qualquer outro motivo (seleção, setas) também atingem o efeito e não devem rolar de novo.',
      },
      {
        heading: 'Notas',
        body: `
          - \`lastAdded\` é uma ref, não estado: escrevê-la não deve por si só causar render, e seu valor só interessa à próxima execução do efeito.
          - \`’end’\` alinha o novo chip com a borda direita da linha; \`’center’\` funciona igual se você quiser no meio.
          - As setas aqui usam os hooks \`useLeftArrowVisible()\` e \`useRightArrowVisible()\` — uma forma mais curta do par \`useIsVisible(’first’/’last’)\`.
          - A barra de rolagem é ocultada com CSS simples sobre a classe \`scroll-container\` da biblioteca; a rolagem em si continua nativa.
        `,
      },
    ],
  },

  'bottom-arrows': {
    meta: {
      title:
        'Setas de carrossel abaixo do menu: posicionamento personalizado no React',
      description:
        'Coloque as setas do carrossel abaixo da linha no React: a prop Footer do ScrollMenu renderiza qualquer layout sob o menu, setas incluídas. Demo ao vivo e fonte completa.',
    },
    title:
      'Coloque as setas abaixo do menu — ou em qualquer lugar do seu layout',
    lede: 'Setas não são cromo embutido — são componentes que você passa, então o posicionamento é uma decisão de layout, não uma configuração da biblioteca. Este exemplo não passa `LeftArrow` nem `RightArrow` e renderiza os dois botões no slot `Footer` sob a linha, ao lado de conteúdo comum.',
    demoHint:
      'As setas ficam sob a linha — elas leem o mesmo VisibilityContext, então ainda se desabilitam nas pontas.',
    prose: [
      {
        heading: 'Como funciona',
        body: '`ScrollMenu` aceita um componente `Footer` e o renderiza abaixo do contêiner de rolagem, dentro do mesmo `VisibilityContext.Provider` que os itens. O footer da história é um div flex comum com algum texto e os dois botões de seta. Como o contexto o alcança, cada botão chama `React.useContext(VisibilityContext)` e obtém exatamente a API que obteria nos slots laterais — nada nas próprias setas muda.',
      },
      {
        heading: 'Estado das setas, como sempre',
        body: '`useLeftArrowVisible()` e `useRightArrowVisible()` informam se a linha já está naquela ponta; a história mapeia o resultado para `disabled` e esmaece o botão. Os cliques chamam `scrollPrev()` e `scrollNext()`. Nada disso sabe ou se importa onde o botão está montado.',
      },
      {
        heading: 'Notas',
        body: `
          - \`Header\` é o slot espelho acima da linha, com o mesmo contrato.
          - As props laterais \`LeftArrow\`/\`RightArrow\` são apenas as variantes pré-posicionadas — os mesmos componentes de seta funcionam em qualquer lugar.
          - O footer não é só para setas: qualquer componente que leia \`VisibilityContext\` tem a API completa ali.
          - O handler \`onWheel\` da história pagina com a roda do mouse e deixa os gestos de touchpad para a rolagem nativa.
        `,
      },
    ],
  },

  autoplay: {
    meta: {
      title: 'Autoplay de carrossel no React com pausa acessível',
      description:
        'Autoplay para um menu de rolagem do React: useInterval chama scrollNext através do apiRef, pausando no hover, foco, toque e movimento reduzido. Demo ao vivo e fonte completa.',
    },
    title: 'Autoplay com comportamento de pausa acessível',
    lede: 'A parte de avançar é uma linha — um temporizador chamando `scrollNext()` através do `apiRef`, por cima do mesmo núcleo de loop infinito. A engenharia está em quando *não* avançar: hover, toque, foco de teclado, um botão de Pausa, abas ocultas, carris fora da tela e preferências de movimento reduzido — tudo para o temporizador, cada um por uma razão diferente.',
    demoHint:
      'Passe o mouse, toque ou tabule até o carril e ele pausa; o botão de Pausa o detém até você apertar Reproduzir.',
    prose: [
      {
        heading: 'Como funciona',
        body: '`useInterval(cb, active ? interval : null)` é todo o agendador. `active` junta quatro flags — pausado pelo usuário, pausado por hover, pausado por foco e `prefers-reduced-motion` — e passar `null` remove o temporizador por completo, de modo que retomar inicia um intervalo novo e completo em vez de disparar no meio do ciclo logo depois que o ponteiro sai.',
      },
      {
        heading: 'Ticks que se recusam a rodar',
        body: 'Mesmo um temporizador ativo checa antes de rolar: o tick lê `api.menuVisible.current` e `document.visibilityState`, e pula se qualquer um disser não. Uma aba oculta congela o IntersectionObserver, então rolar lá significa avançar às cegas e o registro do teleporte se desviar; um carril rolado para fora da página simplesmente não deve se mover. Ticks pulados não custam nada — o próximo re-checa.',
      },
      {
        heading: 'A superfície de pausa',
        body: 'Hover e toque pausam via handlers de invólucro, foco de teclado via `onFocusCapture`/`onBlurCapture`, e `prefers-reduced-motion` mantém o autoplay totalmente desligado. O botão de Pausa explícito é o que a WCAG 2.2.2 de fato exige para conteúdo que avança sozinho — pausar só no hover não conta.',
      },
      {
        heading: 'Notas',
        body: `
          - O alternador de Pausa fica fora do invólucro de hover — dentro dele, clicar em Pausa também pausaria por hover, e o botão nunca poderia ser observado fazendo algo.
          - O loop vem do mesmo hook de clonar-e-teletransportar \`useInfiniteLoop\` do exemplo de loop infinito; o autoplay só adiciona o temporizador e as flags de pausa.
          - A animação de rolagem é a rolagem suave nativa do navegador — \`transitionDuration\` não tem efeito com o \`noPolyfill\` padrão.
        `,
      },
    ],
  },

  'mouse-drag': {
    meta: {
      title:
        'Arrastar para rolar no React: menu horizontal sem quebrar cliques',
      description:
        'Rolagem por arraste com o mouse para uma lista horizontal do React: um limiar de 5px separa arrastes de cliques, mantendo os itens clicáveis. Demo ao vivo e fonte completa.',
    },
    title: 'Arrastar para rolar com o mouse — sem quebrar cliques',
    lede: 'Usuários de toque rolam uma lista horizontal nativamente, mas usuários de mouse precisam de fiação: segurar, arrastar, soltar. A parte difícil não é mover a linha — é que uma implementação ingênua transforma cada arraste solto em um clique acidental de item. Este exemplo separa os dois com uma pequena classe `DragDealer` e três props de mouse.',
    demoHint:
      'Agarre qualquer parte da linha e arraste. Os itens continuam clicáveis — um clique após um arraste é suprimido.',
    prose: [
      {
        heading: 'Como funciona',
        body: '`ScrollMenu` expõe handlers de mouse currificados — `onMouseDown`, `onMouseUp` e `onMouseMove` recebem cada um o objeto API e retornam um handler de evento comum. A instância `DragDealer` rastreia uma coordenada âncora: a cada movimento ela aplica a delta direto em `scrollContainer.current.scrollLeft`. A rolagem nativa faz o resto — sem transformações, sem física, e a barra de rolagem continua real.',
      },
      {
        heading: 'Por que os cliques continuam funcionando',
        body: 'Um arraste só começa depois que o ponteiro se move mais de 5px, então um clique comum nunca rola. A outra direção é o bug clássico: o `onClick` do item dispara após `mouseup`, então soltar um arraste sobre um cartão o selecionaria. `dragStop` limpa a flag de aplicação imediatamente, mas mantém `dragging` por mais um frame de animação — handlers de clique a checam e abortam.',
      },
      {
        heading: 'Detalhes que valem roubar',
        body: `
          - \`dragStart\` cancela o reset pendente do gesto anterior — sem ele, um segundo arraste rápido pode aplicar uma delta obsoleta.
          - \`onMouseLeave\` no invólucro também chama \`dragStop\`, então sair da linha no meio do arraste não a deixa presa no estado de arrastar.
          - O toque não precisa de nada disso — o contêiner é um contêiner de rolagem real, então deslizar já funciona.
        `,
      },
    ],
  },

  'save-restore-position': {
    meta: {
      title:
        'Preservar a posição de rolagem no React: restaurar ao remontar ou voltar',
      description:
        'Salve o deslocamento de rolagem no sessionStorage a cada onUpdate e restaure-o no onInit, para a posição sobreviver a remontagens e recargas. Demo ao vivo e fonte completa.',
    },
    title: 'Salvar e restaurar a posição de rolagem',
    lede: 'Um carril horizontal esquece seu deslocamento toda vez que desmonta: saia da rota e volte, colapse uma seção, e ele salta para o início. Este exemplo salva o deslocamento enquanto o usuário rola e o escreve de volta ao montar, para o menu reaparecer exatamente onde ele o deixou.',
    demoHint:
      'Role a linha para algum lugar, desmonte o menu e monte de novo — o carril volta no mesmo deslocamento.',
    prose: [
      {
        heading: 'Como funciona',
        body: 'Dois callbacks carregam toda a função. `onUpdate` dispara conforme o estado de visibilidade do menu muda enquanto o usuário rola; `savePos` lê `api.scrollContainer.current.scrollLeft` e escreve no `sessionStorage`. No próximo mount, `onInit` atribui o valor salvo direto a `scrollLeft` — uma escrita de propriedade simples, então a restauração é instantânea em vez de uma animação tocando diante do usuário.',
      },
      {
        heading: 'Sobrevivendo a remontagens, recargas e navegação de volta',
        body: '`sessionStorage` sobrevive ao componente: mudanças de rota no cliente, renders condicionais e recargas completas da página voltam ao deslocamento salvo, e o valor é por aba, então duas abas não se sobrescrevem. Para navegação por histórico, a história também define `window.history.scrollRestoration = ’manual’`, evitando que a restauração de rolagem do navegador brigue com a manual ao voltar e avançar.',
      },
      {
        heading: 'Notas',
        body: `
          - Restaurar por \`scrollLeft\` bruto é exato ao pixel e não se importa com quais itens existem — sem ids para lembrar, sem nada para procurar.
          - O botão Recarregar da história troca a \`key\` do menu para forçar uma remontagem; o alternador desmontar/montar da demo é o mesmo teste tornado explícito.
          - Reset apenas remove a chave de armazenamento — o próximo mount começa do zero, como uma primeira visita.
        `,
      },
    ],
  },

  'one-item': {
    meta: {
      title:
        'Slider de um item por visão no React: itens de rolagem em largura total',
      description:
        'Itens em largura total em um menu de rolagem horizontal do React: min-width 100% no invólucro do item faz um slider de um item por visão. Demo ao vivo e fonte completa.',
    },
    title: 'Um item por visão: um slider de largura total do mesmo menu',
    lede: 'Não há modo slider para ligar. O menu dispõe o que seu CSS disser, então uma regra — `min-width: 100%` no invólucro de item da biblioteca — transforma o mesmo componente em um slider: cada cartão preenche a visão, e as setas de paginação comuns avançam exatamente um item.',
    demoHint:
      'Pagine com as setas — cada slide tem exatamente uma visão de largura, e cada slide informa sua própria visibilidade.',
    prose: [
      {
        heading: 'Como funciona',
        body: 'A história envolve o menu em um contêiner estilizado mirando `.react-horizontal-scrolling-menu--item` — o div que a biblioteca renderiza ao redor de cada filho — e dá a ele `minWidth: ’100%’` mais centralização flex. Cada invólucro agora abrange todo o contêiner de rolagem, então um único cartão cabe na visão. As setas são padrão: `scrollPrev()` e `scrollNext()` paginam pelo grupo visível, e quando o grupo visível é um item, uma página e um item são a mesma coisa.',
      },
      {
        heading: 'Setas e a roda',
        body: 'O estado das setas vem de `useLeftArrowVisible()` e `useRightArrowVisible()` — cada uma retorna true quando a linha está naquela ponta, e a história o alimenta em `disabled` e esmaece o botão. A prop `onWheel` recebe o objeto API junto com o evento, então uma roda vertical pagina a linha pelo sinal de `deltaY`. Ela primeiro fareja touchpads: qualquer delta horizontal, ou uma vertical abaixo de 15, é assumida como gesto de touchpad e deixada para a rolagem nativa.',
      },
      {
        heading: 'Notas',
        body: [
          '- `itemId` em cada filho é o único requisito duro — é como os itens são rastreados e rolados.',
          '- Os cartões ainda chamam `useIsVisible(itemId, true)`; com um item por visão, todo slide fora da tela informa `visible: false`.',
          '- A barra de rolagem é ocultada com CSS simples no contêiner de rolagem (`scrollbar-width: none` mais o pseudoelemento WebKit) — essa escolha é sua, não da biblioteca.',
          '- A largura vive inteiramente na sua folha de estilos. Troque 100% por 50% e você tem um slider de dois por visão; a biblioteca não mede nada.',
        ].join('\n'),
      },
    ],
  },

  performance: {
    meta: {
      title: 'Desempenho de lista horizontal no React: 5.000 itens',
      description:
        'Um menu horizontal do React renderizando 5.000 itens com rolagem nativa: cartões memoizados, um IntersectionObserver, sem virtualização. Demo ao vivo e fonte completa.',
    },
    title: '5.000 itens em uma linha — sem necessidade de virtualização',
    lede: 'O conselho usual com algumas centenas de itens é recorrer à virtualização. Este exemplo renderiza 5.000 nós DOM reais em um `ScrollMenu` e continua responsivo — o overflow nativo faz o movimento, um IntersectionObserver faz a observação, e o React em sua maior parte não faz nada.',
    demoHint:
      'Arraste o carril ou pagine com as setas — cada um dos 5.000 cartões é um nó DOM real; nada é janelado.',
    prose: [
      {
        heading: 'Onde o trabalho não acontece',
        body: 'A rolagem nunca entra no React. O carril é um contêiner overflow genuíno: roda e toque o rolam nativamente, e a fiação do arraste apenas atribui a `scrollContainer.current.scrollLeft` — sem estado, sem re-renderizações por frame. A visibilidade é uma única instância de IntersectionObserver observando os 5.000 elementos de item; os callbacks chegam em lotes, e só os componentes que se inscreveram com `useIsVisible` atualizam quando o próprio item vira. Não há matemática de rolagem por item em lugar nenhum.',
      },
      {
        heading: 'O que a história ajusta',
        body: '`Card` é envolvido em `React.memo` com um comparador sobre `selected` e `title`, então selecionar um cartão não reconcilia os outros 4.999. A leitura de visibilidade passa por `useDeferredValue`: após um salto de página, centenas de itens viram estado de uma vez, e adiar mantém essa explosão fora do caminho crítico da interação que a causou. `noPolyfill={true}` faz as rolagens programáticas usarem o `scrollIntoView` do próprio navegador em vez do polyfill de rolagem suave. O arraste é o mesmo padrão `DragDealer` do exemplo mouse-drag.',
      },
      {
        heading: 'O trade-off que esta página admite',
        body: 'O carril de demo acima não é renderizado no servidor: 5.000 cartões serializam para cerca de um megabyte de HTML, então o carril monta apenas no cliente atrás de um placeholder de altura correspondente e não há mudança de layout. Essa é a conta real nesse tamanho — o navegador lida com 5.000 nós vivos com conforto, mas enviá-los como carga de SSR é uma decisão separada. Em algum ponto nas dezenas de milhares de nós, memória e custo de render inicial também alcançam; é aí que o janelamento deixa de ser opcional.',
      },
      {
        heading: 'Notas',
        body: [
          '- O DOM dos 5.000 cartões é construído uma vez, no mount — `React.memo` transforma renders posteriores do pai em no-ops para cada cartão.',
          '- As setas paginam mais ou menos um viewport por vez, então cruzar o carril inteiro por seta é lento por design — flicks de arraste ou saltos de `scrollToItem` cabem melhor nessa escala.',
          "- As setas ainda rodam em `useIsVisible('first')` e `useIsVisible('last')` — o mesmo mecanismo de observador de um menu de dez itens, com 500 vezes o número de itens.",
        ].join('\n'),
      },
    ],
  },

  progress: {
    meta: {
      title:
        'Indicador de progresso de rolagem horizontal no React para um carrossel',
      description:
        'Uma barra de progresso para um menu horizontal do React: inscreva-se no onUpdate, conte os itens visíveis, derive a página atual. Demo ao vivo e fonte completa da história.',
    },
    title:
      'Adicionar um indicador de progresso de rolagem a um menu horizontal',
    lede: 'Um carrossel que esconde sua barra de rolagem ainda deve ao usuário uma resposta a «quanto falta?». O menu já sabe: ele rastreia a visibilidade de cada item, então a posição é questão de contar. A história renderiza botões de página numerados mais contadores de itens restantes à esquerda/direita a partir desses dados; esta demo destila a mesma matemática em uma barra de progresso.',
    demoHint:
      'Role a linha, arraste-a ou use as setas — a barra preenche página a página e o contador mostra onde você está.',
    prose: [
      {
        heading: 'Como funciona',
        body: 'O indicador é passado como prop `Footer`, então o `ScrollMenu` o renderiza dentro do menu onde o `VisibilityContext` está disponível. Do contexto ele pega `items` — o mapa por trás do rastreamento de visibilidade — e se inscreve com `items.subscribe(’onUpdate’, cb)`. Esse evento dispara a cada callback do IntersectionObserver, então a história o faz debounce (um timeout mais `requestAnimationFrame`) antes de ler `items.getVisible()`.',
      },
      {
        heading: 'De itens visíveis a número de página',
        body: 'A contagem de itens visíveis é o tamanho da página. O total de páginas é `Math.ceil(items.size / visibleItemsLen)`; a página atual vem do `index` da última entrada visível. A história as transforma em botões de página clicáveis — cada um chama `scrollToItem(getItemByIndex(itemInd))`, endereçando um item por posição sem conhecer seu id — e deriva os contadores de itens à esquerda e à direita dos mesmos números. A barra da demo é só `currentPage / totalPages` como porcentagem de largura.',
      },
      {
        heading: 'Notas',
        body: [
          '- Nada é medido em pixels — a matemática roda inteiramente sobre dados de visibilidade, então continua funcionando quando as larguras dos itens diferem.',
          '- Redimensione o viewport e o tamanho da página segue: cabem mais itens, `getVisible()` retorna mais entradas, e a contagem de páginas recalcula na próxima atualização.',
          '- O efeito retorna uma limpeza que chama `items.unsubscribe` e limpa o temporizador pendente — pule-a e um footer desmontado continua sendo chamado.',
          '- Antes do primeiro relatório do observador `getVisible()` está vazio; a história retorna `null` até lá, e a demo pinta uma trilha vazia.',
        ].join('\n'),
      },
    ],
  },

  'scroll-to-item': {
    meta: {
      title:
        'Rolar até um elemento em uma lista horizontal do React: scrollToItem',
      description:
        'Role uma lista horizontal do React até qualquer item por id: onInit entrega a api e scrollToItem traz o alvo à vista. Demo ao vivo e fonte completa.',
    },
    title: 'Rolar até um item específico em uma lista horizontal',
    lede: 'Link profundo para uma linha: um chat abre na conversa ativa, uma galeria na foto que você compartilhou. O contêiner de rolagem vive dentro da biblioteca, mas você não precisa de uma ref no DOM dele — `onInit` entrega a api, e `scrollToItem` faz o posicionamento.',
    demoHint:
      'O carril não monta em Tokyo — o onInit salta direto para quito. Arraste para outro lugar e remonte para vê-lo pousar lá de novo.',
    prose: [
      {
        heading: 'Como funciona',
        body: '`ScrollMenu` aceita um callback `onInit` e o chama quando o menu renderizou e mediu seus itens, passando o mesmo objeto api que o `VisibilityContext` fornece dentro. O handler procura o elemento com `getItemElementById(id)` e o entrega a `scrollToItem(item, ’auto’, ’start’)`. Como `onInit` só dispara após a medição, a busca não pode voltar vazia para um item renderizado — sem `setTimeout`, sem loop de retry.',
      },
      {
        heading: 'Comportamento e alinhamento',
        body: 'A história passa `’auto’` e `’start’`: `’auto’` salta sem animação, que é o que você quer para uma posição inicial — o usuário nunca vê o carril no primeiro item. `’start’` alinha a borda esquerda do item com o carril. Para rolagens guiadas por clique, a mesma chamada pega `’smooth’` e `’center’` — esse é o exemplo de centralizar ao clicar abaixo.',
      },
      {
        heading: 'Notas',
        body: [
          '- `getItemElementByIndex` é a alternativa posicional quando você conhece o slot mas não o id.',
          '- O id que você passa é o `itemId` do item — a mesma chave que o menu usa para o rastreamento de visibilidade.',
          '- A demo repete o comportamento remontando o menu com uma `key` nova; cada mount novo roda o `onInit` de novo.',
        ].join('\n'),
      },
    ],
  },
  'center-on-click': {
    meta: {
      title: 'Abas roláveis no React: centralizar a aba ativa ao clicar',
      description:
        'Abas roláveis no React sem Material UI: clicar em uma aba a centraliza com scrollToItem(el, "smooth", "center"). Demo ao vivo e fonte completa da história.',
    },
    title: 'Centralizar o item clicado — o padrão de abas roláveis',
    lede: 'O comportamento que toda faixa de abas precisa e nenhum contêiner de rolagem dá de graça: clique numa aba perto da borda e ela desliza para o meio, revelando as vizinhas dos dois lados. Aqui é uma chamada de API — sem Material UI, sem medir, sem matemática de rolagem.',
    demoHint:
      'Clique numa aba perto de qualquer borda — ela ativa e se centraliza na linha.',
    prose: [
      {
        heading: 'Como funciona',
        body: '`handleItemClick` é currificado: pega o `itemId` e retorna uma função esperando o objeto API. O clique primeiro guarda o id no estado `selected`, então chama `api.getItemElementById(itemId)` para achar o elemento DOM real e o entrega a `api.scrollToItem(item, ’smooth’, ’center’)`. Um clique, dois efeitos: a aba é selecionada e centralizada.',
      },
      {
        heading: 'De onde a API vem',
        body: 'O componente pai nunca guarda uma ref de API. Cada `Card` lê a API completa do `VisibilityContext` — disponível a qualquer filho do `ScrollMenu` — e a passa ao handler de clique: `onClick(visibility)`. Se em vez disso você precisa rolar de fora do menu, esse é o padrão `apiRef` do exemplo scroll-to-item.',
      },
      {
        heading: 'Notas',
        body: [
          '- O terceiro argumento de `scrollToItem` pega os mesmos valores da opção `inline` do `scrollIntoView` — `’start’`, `’center’` ou `’end’`.',
          '- Os cartões são focáveis (`role="button"`, `tabIndex=0`) e tratam Enter no `onKeyDown`, então usuários de teclado obtêm o mesmo selecionar-e-centralizar.',
          '- O handler `onWheel` mapeia as deltas da roda do mouse para `scrollNext`/`scrollPrev`, mas recua para touchpads — uma delta horizontal ou uma vertical minúscula é assumida como gesto e deixada nativa.',
          '- As setas se desabilitam com os atalhos `useIsVisible(’first’)` e `useIsVisible(’last’)`.',
        ].join('\n'),
      },
    ],
  },

  'swipe-desktop': {
    meta: {
      title:
        'Deslizar com o mouse no desktop: gesto de flick de carrossel no React',
      description:
        'Deslize de desktop para um menu horizontal do React: rastreie o pressionar/soltar do mouse, e soltar além de 50px dá um flick para a próxima página com um deslize suave. Demo e fonte completa.',
    },
    title: 'Deslizar no desktop: um flick de mouse que pagina o menu',
    lede: 'Arrastar para rolar move a linha 1:1 com o cursor. Este é o outro gesto de mouse: um flick. Pressione, mova pelo menos 50px, solte — e o menu desliza uma página naquela direção via `scrollNext` ou `scrollPrev`. A linha não segue o ponteiro de forma alguma; o deslize é a rolagem programática suave da biblioteca, que é o que dá à soltura sua sensação de inércia.',
    demoHint:
      'Pressione em qualquer lugar da linha, mova para a esquerda ou direita pelo menos 50px e solte — o menu desliza uma página. Movimentos mais curtos não fazem nada.',
    prose: [
      {
        heading: 'Como funciona',
        body: 'Um hook `useSwipe` retorna as três props de mouse currificadas que o `ScrollMenu` espera — cada uma recebe o objeto API e retorna um handler de evento comum. `onMouseDown` ancora o `clientX` do ponteiro numa ref, `onMouseMove` continua sobrescrevendo a coordenada final, e `onMouseUp` compara as duas: uma diferença horizontal além de `minSwipeDistance` (50px) chama `apiObj.scrollNext()` para um flick à esquerda ou `apiObj.scrollPrev()` para um à direita.',
      },
      {
        heading: 'Por que os cliques não precisam de tratamento especial',
        body: 'No exemplo de arraste, soltar um arraste sobre um cartão o clicaria, então uma flag `dragging` tem que sobreviver ao gesto por um frame. Um flick contorna todo o problema: abaixo do limiar de 50px o `onMouseUp` não faz nada, então um clique é só um clique — e além dele o ponteiro já saiu do cartão que pressionou. Sem flags, sem handlers suprimidos.',
      },
      {
        heading: 'O que a história adiciona para toque e roda',
        body: 'A história também fixa o pan nativo de toque: React 18+ registra os listeners de `touchmove` como passivos, então `preventDefault` só funciona de um listener não passivo. Um efeito alcança o contêiner de rolagem pelo `apiRef` (`ref.current.scrollContainer.current`) e anexa um com `{ passive: false }`. Seu handler `onWheel` também pagina o menu, com uma heurística — `deltaX` diferente de zero ou um `deltaY` pequeno é assumido como touchpad e deixado em paz.',
      },
      {
        heading: 'Notas',
        body: [
          '- As coordenadas vivem numa ref, não em estado — rastrear `mousemove` em estado re-renderizaria a cada pixel.',
          '- A demo re-ancora a coordenada final no `mousedown`, então uma posição remanescente do gesto anterior nunca pode contar para um novo deslize.',
          '- Ajuste `minSwipeDistance` a gosto: mais baixo é mais ágil, mais alto tolera cliques mais desleixados. A variante de toque desta receita usa 20px.',
        ].join('\n'),
      },
    ],
  },

  'mobile-swipe-only': {
    meta: {
      title:
        'Ocultar as setas do carrossel no mobile: rolagem React só por toque',
      description:
        'Setas no desktop, rolagem só por toque no mobile para um menu horizontal do React: uma checagem matchMedia de pointer: coarse as oculta. Demo ao vivo e fonte completa.',
    },
    title: 'Oculte as setas no mobile — rolagem só por toque em telas pequenas',
    lede: 'Numa tela de toque, os botões de seta são peso morto: deslizar é nativo, os polegares cobrem os alvos de toque, e cada seta come largura da linha. A demo mantém as setas para usuários de mouse e as desmonta quando o ponteiro é um dedo; a história vai além e substitui o pan nativo por gestos explícitos de deslizar-para-paginar.',
    demoHint:
      'Abra num telefone, ou ligue a emulação de toque no DevTools — as setas somem e deslizar faz todo o trabalho.',
    prose: [
      {
        heading: 'Como a demo oculta as setas',
        body: '`LeftArrow` e `RightArrow` são props opcionais — passe `undefined` e o slot não é renderizado de forma alguma, então não há nada para esconder com CSS e não sobram botões na ordem de tabulação. O interruptor é uma checagem `matchMedia(’(pointer: coarse)’)` num efeito: o servidor não pode saber o tipo de ponteiro, então o primeiro paint é desktop-first com setas, e a hidratação as remove assim que um ponteiro grosso é confirmado. Um listener `change` o mantém vivo — a emulação de dispositivo do DevTools vira sem recarregar.',
      },
      {
        heading: 'O que a história faz ao tocar',
        body: 'O hook `useSwipe` da história transforma o pan livre em paginação. As props currificadas `onTouchStart`, `onTouchMove` e `onTouchEnd` recebem cada uma o objeto API; start reseta a coordenada final e registra `targetTouches[0].clientX`, move a rastreia, e end mede a distância percorrida. Além de `minSwipeDistance` (20px) chama `apiObj.scrollPrev()` ou `apiObj.scrollNext()` — uma página suave por deslize, seja qual for a velocidade do dedo.',
      },
      {
        heading: 'Suprimindo a rolagem de toque nativa',
        body: 'Para a paginação ser o único movimento, o pan do navegador tem que parar, e React 18+ registra os listeners de `touchmove` como passivos, onde `preventDefault` é ignorado. O efeito da história alcança o elemento de rolagem real pelo `apiRef` (`ref.current.scrollContainer.current`) e anexa seu próprio listener com `{ passive: false }`, onde a chamada funciona.',
      },
      {
        heading: 'Notas',
        body: [
          '- Escolha o padrão de SSR de propósito: renderizar as setas primeiro favorece crawlers e usuários de desktop, e dispositivos de toque as perdem logo após a hidratação.',
          '- `(pointer: coarse)` mira a entrada, não o tamanho da tela — uma janela de desktop estreita mantém suas setas, um tablet não.',
          '- Se você só quer ocultar as setas e manter o deslize nativo (o comportamento da demo), pule o efeito `touchmove` da história — pan livre e setas ocultas coexistem bem.',
          '- O limiar de toque é 20px contra os 50px do flick de desktop — veja o exemplo swipe-on-desktop para a variante de mouse.',
        ].join('\n'),
      },
    ],
  },

  'infinite-loop': {
    meta: {
      title: 'Menu de rolagem em loop infinito no React: um carrossel contínuo',
      description:
        'Um carrossel em loop contínuo no React sem biblioteca de carrossel: clones nas duas pontas e um teleporte de scrollLeft quando a rolagem assenta. Demo e fonte completa.',
    },
    title: 'Um menu em loop infinito, construído sobre a API pública',
    lede: 'O clássico truque de carrossel de clonar-e-teletransportar, implementado com zero mudanças na biblioteca: a linha é clonada nas duas pontas, e quando a rolagem assenta dentro de uma zona de clone, `scrollLeft` salta exatamente o comprimento de um loop. Os frames dos dois lados do salto são idênticos, então nada parece se mover. Setas, roda, toque e arraste de mouse cruzam todos a emenda.',
    demoHint:
      'Continue em qualquer direção — por seta, roda, toque ou arraste — e a linha nunca termina.',
    prose: [
      {
        heading: 'Como funciona',
        body: '`getSlides` copia os itens para as duas pontas da linha. Como `itemId` deve ser único, os clones ganham um sufixo — `-lc` à esquerda, `-rc` à direita — mantendo o id real como `realId` para títulos, seleção e cliques. `useInfiniteLoop` empacota o resto: `normalize()` mede o comprimento do loop pelo `offsetLeft` do primeiro item real e seu clone direito, e desloca `scrollLeft` exatamente essa distância sempre que a posição cai numa zona de clone. Geometria pura e idempotente — chamá-lo quando não há nada a corrigir não faz nada.',
      },
      {
        heading: 'Quando o teleporte dispara',
        body: 'Saltar no meio da rolagem brigaria visivelmente com o navegador, então `normalize` roda quando a rolagem assenta: um listener nativo `scrollend` no contêiner (alcançado pela prop `containerRef`), com um fallback `onScroll` com debounce de 150ms para o Safari, que não dispara `scrollend`. Mais um salto acontece antes de qualquer um ver algo: um efeito de layout define o `scrollLeft` inicial no primeiro item real antes do paint, então a página nunca abre nos clones à esquerda.',
      },
      {
        heading: 'Cruzando a emenda no meio do arraste',
        body: 'O callback de arraste de mouse adiciona cada delta a `scrollLeft` e chama `loop.normalize()` ali mesmo, dentro do gesto. Sem isso, arrastar para uma zona de clone esperaria o fim do arraste para teletransportar — com isso, você pode arrastar através da emenda indefinidamente e nunca notar.',
      },
      {
        heading: 'Notas',
        body: [
          '- As setas aqui são personalizadas e sempre habilitadas: os hooks padrão `first`/`last` rastreiam os itens mais externos, que aqui são clones — piscariam desabilitados na emenda.',
          '- Os cartões exibem uma visibilidade de união gêmea — um item conta como visível quando ele ou qualquer clone está — porque a flag por elemento fica obsoleta por um frame após um teleporte e piscaria o header.',
          '- Duas páginas de clones por lado: a zona deve cobrir um viewport completo (frames idênticos ao redor de um salto) com folga, para que um clique em Próximo da página que cruza a emenda nunca trave no fim da linha.',
          '- Tudo usado aqui — `containerRef`, `onScroll`, `itemId`, as props de mouse currificadas — é API pública.',
        ].join('\n'),
      },
    ],
  },

  simple: {
    meta: {
      title: 'Menu de rolagem horizontal do React: exemplo de primeiros passos',
      description:
        'A configuração mínima do react-horizontal-scrolling-menu: itens com itemId, duas setas lendo VisibilityContext e rastreamento de visibilidade por item. Fonte completa.',
    },
    title: 'Primeiros passos: um menu de rolagem horizontal no React',
    lede: 'A menor configuração útil: uma linha de cartões, dois botões de seta e aquilo de que esta biblioteca realmente trata — cada cartão sabe se está na tela. Um componente, uma prop obrigatória, uma importação de folha de estilos.',
    demoHint:
      'Role a linha — as setas desabilitam nas pontas e cada cartão rastreia sua própria visibilidade.',
    prose: [
      {
        heading: 'Como funciona',
        body: '`ScrollMenu` renderiza seus filhos dentro de um contêiner de rolagem nativo e observa cada um com um IntersectionObserver. O único contrato é `itemId` — uma prop única em cada filho, que é como os itens são rastreados, encontrados e rolados. Dentro de qualquer filho ou seta, o `VisibilityContext` entrega a você a API completa.',
      },
      {
        heading: 'O hook de visibilidade',
        body: 'Os cartões chamam `useIsVisible(itemId)` para se inscrever no próprio estado em tela — sem listeners de rolagem, sem matemática de posição, e só os cartões afetados re-renderizam quando a visibilidade muda. As setas usam os atalhos `first` e `last` para se desabilitar nas pontas da linha.',
      },
      {
        heading: 'Notas',
        body: [
          '- `styles.css` é uma importação separada — o bundle JS nunca injeta CSS.',
          '- A largura do item é seu próprio CSS; o menu não mede nada e entrega 210 bytes de estilos de layout.',
          '- O segundo argumento de `useIsVisible(itemId, true)` é o valor usado antes do observador reportar — e o valor que seu servidor renderiza, se você renderizar o menu no servidor.',
        ].join('\n'),
      },
    ],
  },

  vertical: {
    meta: {
      title: 'Menu de rolagem vertical no React com setas',
      description:
        'Faça o react-horizontal-scrolling-menu vertical: contêiner de rolagem flex-column, altura limitada, setas acima e abaixo via Header/Footer. Demo ao vivo e fonte.',
    },
    title: 'Um menu de rolagem vertical — o mesmo componente, girado por CSS',
    lede: 'Não há prop `vertical`, e nenhuma é necessária: o menu é uma linha flex dentro de um contêiner de rolagem nativo, então apontá-lo para baixo é um par de sobrescritas de CSS. Rastreamento de visibilidade, hooks de seta e `scrollPrev`/`scrollNext` continuam funcionando no novo eixo.',
    demoHint:
      'Passe a roda sobre a coluna ou use as setas — Cima e Baixo são o Header e o Footer do ScrollMenu. As linhas esmaecem ao sair da visão.',
    prose: [
      {
        heading: 'Duas sobrescritas e um limite de altura',
        body: 'A história reestiliza dois nomes de classe da biblioteca. O contêiner de rolagem ganha `flex-direction: column`, `overflow-y: auto` e `height: initial` no lugar do `max-content` padrão; o invólucro ganha `height: 100%`, então qualquer altura fixa que o pai tenha vira o limite de rolagem. Esse é todo o modo vertical. A história aplica as sobrescritas com emotion; a demo desta página passa utilitários do Tailwind pelas props `wrapperClassName` e `scrollContainerClassName` em vez disso — qualquer rota de estilo funciona, os nomes de classe são estáveis.',
      },
      {
        heading: 'As setas viram Header e Footer',
        body: "Os slots `LeftArrow`/`RightArrow` renderizam ao lado do carril — o lugar errado para uma coluna. `ScrollMenu` também aceita componentes `Header` e `Footer` renderizados acima e abaixo, e a história monta seus botões Cima e Baixo ali. São consumidores comuns de `VisibilityContext`: `useIsVisible('first', true)` desabilita Cima no topo, `useIsVisible('last', false)` desabilita Baixo embaixo. Os cliques passam um terceiro argumento — `scrollPrev(undefined, undefined, 'end')` e `scrollNext(undefined, undefined, 'start')` — a posição `block` para `scrollIntoView`. `'end'` deixa o item anterior na borda inferior (uma página inteira acima); `'start'` põe o próximo no topo (uma página inteira abaixo). Com o `'nearest'` padrão, cada clique só empurraria a próxima linha para a visão.",
      },
      {
        heading: 'Mantendo a rolagem dentro da coluna',
        body: "`scrollIntoView` move todos os ancestrais roláveis do alvo, e a página é um deles — então um salto alinhado por `block` dentro de uma coluna leva o documento inteiro junto. A opção que para a caminhada é `boundary`, passada no quarto argumento: `scrollNext(undefined, undefined, 'start', { boundary })` com o próprio `scrollContainer.current` do menu rola as linhas e nada mais. Ela precisa de `noPolyfill={false}` no `ScrollMenu`, já que só o polyfill entende `boundary` — a demo acima passa ambos. Menus horizontais raramente esbarram nisso: seu `block: 'nearest'` padrão não pede movimento vertical à página em primeiro lugar.",
      },
      {
        heading: 'A visibilidade não tem eixo',
        body: '`useIsVisible` é apoiado pelo IntersectionObserver, e a interseção é medida nas duas dimensões — as linhas reportam seu estado ao cruzar as bordas de cima e de baixo exatamente como itens horizontais fazem nas laterais. A demo esmaece as linhas fora da visão para mostrar isso, com as quatro primeiras pintadas como visíveis no servidor via o argumento `defaultValue` do hook.',
      },
      {
        heading: 'Notas',
        body: [
          '- A única dimensão fixa é a altura inline do painel; o `height: 100%` do invólucro a carrega até o contêiner de rolagem.',
          '- Roda e toque rolam a coluna nativamente — `overflow-y: auto` a torna um contêiner de rolagem real; as setas são conveniência, não mecanismo.',
          '- O segundo argumento de `scrollPrev`/`scrollNext` é a posição `inline` (horizontal) — menus verticais se importam com `block`, por isso a história a passa explicitamente.',
        ].join('\n'),
      },
    ],
  },

  rtl: {
    meta: {
      title:
        'Rolagem horizontal RTL no React: um menu da direita para a esquerda',
      description:
        'Um menu de rolagem horizontal da direita para a esquerda no React: a prop RTL inverte a direção de rolagem e a paginação, e as setas trocam de lado. Demo ao vivo e fonte completa.',
    },
    title: 'Um menu horizontal da direita para a esquerda',
    lede: 'Para interfaces em árabe ou hebraico, a linha deve começar na borda direita e crescer para a esquerda. Uma prop booleana inverte o contêiner de rolagem; o único trabalho real que resta é decidir o que as setas significam quando «próximo» aponta para a esquerda.',
    demoHint:
      'Vire o interruptor — a linha reinicia da borda oposta e as setas trocam de papel.',
    prose: [
      {
        heading: 'Como funciona',
        body: '`RTL={true}` coloca o contêiner de rolagem no modo direita-para-esquerda: o primeiro item fica na borda direita e a rolagem avança para a esquerda. Tudo lógico continua lógico — `useIsVisible(’first’)` ainda significa o primeiro item dos seus dados, `scrollNext()` ainda se move rumo ao último — só a direção na tela inverte.',
      },
      {
        heading: 'As setas trocam de slot, não de lógica',
        body: 'A prop `LeftArrow` sempre renderiza no lado esquerdo da tela. Em RTL esse lado é onde «próximo» vive, então a história alimenta os slots com elementos trocados: `LeftArrow={RTL ? <RightArrow /> : <LeftArrow />}`. Os próprios componentes mantêm a lógica — o conectado a `scrollPrev` ainda se desabilita via `useIsVisible(’first’)` — só a posição na tela e o rótulo mudam.',
      },
      {
        heading: 'Notas',
        body: [
          '- A história passa `noPolyfill={true}`, então as rolagens programáticas usam a rolagem suave nativa do navegador em vez do polyfill embutido.',
          '- `scrollPrev(’smooth’, ’end’)` e `scrollNext(’smooth’, ’start’)` passam um alinhamento explícito — o segundo argumento é o mesmo conjunto `start/center/end` que `scrollToItem` pega.',
          '- A história alterna `RTL` ao vivo a partir de um checkbox — a prop é só estado, nada no menu é configurado em tempo de build.',
        ].join('\n'),
      },
    ],
  },

  'add-items': {
    meta: {
      title: 'Rolagem horizontal infinita no React: carregar mais no fim',
      description:
        'Rolagem horizontal infinita no React: onUpdate checa api.items.last().visible e acrescenta o próximo lote com um item de loader. Demo ao vivo e fonte completa.',
    },
    title: 'Carregar mais itens quando o fim entra na visão',
    lede: 'Rolagem horizontal infinita sem um listener de rolagem: o menu já sabe quais itens são visíveis, então «o usuário chegou ao fim?» é só uma pergunta — o último item está na tela? `onUpdate` a faz após cada rolagem e acrescenta o próximo lote quando a resposta é sim.',
    demoHint:
      'Role até a extremidade direita — um cartão de loader aparece e o próximo lote chega. A demo para em 30 itens.',
    prose: [
      {
        heading: 'Como funciona',
        body: '`onUpdate` dispara sempre que a visibilidade de um item muda. O handler lê `api.items.last()?.visible` — a biblioteca rastreia cada item por seu `itemId` e mantém uma flag de visibilidade por item, então detectar o fim custa uma busca, sem IntersectionObserver próprio e sem matemática de posição de rolagem. Então `pushNewItems` simula um fetch: um timeout de um segundo, cinco itens a mais, pronto.',
      },
      {
        heading: 'Protegendo o fetch',
        body: 'As atualizações de visibilidade chegam em rajadas, então o handler deve ser seguro para chamar repetidamente. Uma flag `loading` o torna idempotente: tanto `onUpdate` quanto `pushNewItems` a checam, e só o primeiro gatilho inicia um fetch. A mesma flag renderiza um componente `Loader` como um item de menu real (com seu próprio `itemId`) que chama `scrollIntoView()` ao montar, mantendo o fim da linha à vista enquanto o lote carrega.',
      },
      {
        heading: 'Notas',
        body: [
          '- A seta direita é passada como elemento, `RightArrow={<RightArrow disabled={...} />}` — as formas de componente e de elemento funcionam, e a forma de elemento deixa o pai passar props como o limite de itens.',
          '- Essa seta só desabilita quando o limite é alcançado e o último item é visível — antes do limite, chegar ao fim significa que mais itens estão vindo.',
          '- `newItemsLimit` para esta demo em 24 itens; em código real o sinal equivalente é sua API ficar sem páginas.',
        ].join('\n'),
      },
    ],
  },
  'custom-transition': {
    meta: {
      title: 'Animação de rolagem personalizada no React: easing e duração',
      description:
        'Easing e duração personalizados para rolagens programáticas no React: transitionBehavior entrega a posição-alvo e você anima scrollLeft. Demo ao vivo e fonte.',
    },
    title: 'Animação de rolagem personalizada: seu próprio easing e duração',
    lede: 'A rolagem suave nativa dá a você uma velocidade e uma curva, escolhidas pelo navegador. Quando uma rolagem programática deve combinar com o resto do seu design de movimento, `noPolyfill={false}` deixa você assumir — o menu calcula para onde o carril precisa ir, e seu código conduz `scrollLeft` até lá.',
    demoHint:
      'Clique nas setas e alterne a duração — a 2500 ms a curva ease-in-out-cubic é fácil de ver. Um clique no meio da animação cancela a anterior.',
    prose: [
      {
        heading: 'Como funciona',
        body: 'Por padrão o menu rola com o `scrollIntoView` nativo e ignora ambas as props de transição. Definir `noPolyfill={false}` roteia as rolagens programáticas pelo polyfill scroll-into-view-if-needed, que calcula o alvo e o entrega ao seu `transitionBehavior` como instruções: uma ação `{ el, top, left }` por ancestral rolável que precisa se mover — aqui sempre só o contêiner de rolagem, porque o menu o passa como limite. A partir daí, `animateScroll` avança `el.scrollLeft` rumo ao alvo a cada `requestAnimationFrame`, mapeando o progresso por `easeInOutCubic` ao longo da duração escolhida.',
      },
      {
        heading: 'Interrompendo uma animação em voo',
        body: 'Um segundo clique de seta pode pousar no meio da animação. A história guarda o frame pendente por elemento em um `WeakMap`, então uma nova chamada cancela o antigo loop de `requestAnimationFrame` em vez de deixar dois brigarem por `scrollLeft`. E como cada animação lê seu ponto de partida do `scrollLeft` atual do elemento, a nova retoma exatamente onde a interrompida parou.',
      },
      {
        heading: 'Notas',
        body: [
          '- Nada aqui está amarrado à função de easing — uma vez que você tem a posição-alvo, qualquer curva ou biblioteca de animação funciona.',
          '- Os tipos descrevem `transitionBehavior` como uma string `ScrollBehavior`, mas o valor vai direto para o scroll-into-view-if-needed como seu callback `behavior` — daí o cast na fonte.',
          '- A história conecta o mesmo estado de duração em `transitionDuration` e na própria animação, para que os dois não se afastem.',
        ].join('\n'),
      },
    ],
  },

  'prevent-body-scroll': {
    meta: {
      title: 'Impedir a rolagem da página com a roda: menu horizontal do React',
      description:
        'Role um menu horizontal do React com a roda do mouse enquanto a página fica parada: um listener de roda nativo não passivo alternado no hover. Demo ao vivo e fonte completa.',
    },
    title: 'Role o menu com a roda — sem rolar a página',
    lede: 'Um menu horizontal sob a roda do mouse é estranho: a roda rola a página e a linha fica parada. A correção tem duas metades — um handler `onWheel` que transforma tiques da roda em paginação, e um listener nativo não passivo que impede a página de se mover por baixo. A segunda metade não dá para fazer só com React.',
    demoHint:
      'Pare o ponteiro sobre a linha e gire a roda: a linha pagina, a página fica parada. Saia da linha e a roda volta a rolar a página.',
    prose: [
      {
        heading: 'Transformando a roda em paginação',
        body: 'A prop `onWheel` do `ScrollMenu` é chamada com o objeto API e o evento de roda. Uma roda de mouse real reporta deltas só em Y em passos grossos, então o handler chama `scrollNext` quando `deltaY` é negativo e `scrollPrev` caso contrário — cada tique pagina a linha. Antes de tudo isso ele checa se o evento parece um gesto de touchpad: qualquer `deltaX`, ou um `deltaY` abaixo de 15.',
      },
      {
        heading: 'Por que o bloqueio de página precisa de um listener nativo',
        body: "Chamar `preventDefault` dentro do handler React seria a forma óbvia de parar a página — e ele silenciosamente não faz nada, porque o React registra listeners de roda como passivos, e um listener passivo é proibido de cancelar o evento. Então `usePreventBodyScroll` contorna o React: no `mouseenter` ele roda `document.addEventListener('wheel', preventDefault, { passive: false })`, no `mouseleave` remove o listener de novo. Enquanto o ponteiro está sobre o menu, todo evento de roda borbulha até `document` e tem sua ação padrão — rolar a página — cancelada lá. Uma limpeza de `useEffect` chama `enableScroll` na desmontagem, então a página nunca pode ficar travada.",
      },
      {
        heading: 'A rota de fuga do touchpad',
        body: 'O pan de dois dedos também chega como eventos de roda, e o contêiner rola nativamente com eles — o listener de document mataria isso. Para eventos que casam com a heurística de touchpad, o handler chama `stopPropagation` e retorna: o evento nunca chega ao listener de document, então o pan nativo sobrevive. Não há forma confiável de detectar um touchpad; a heurística da delta é o palpite honesto da história, e ela se sustenta na prática.',
      },
      {
        heading: 'Notas',
        body: [
          '- Os navegadores tornaram passivos por padrão os listeners de roda de nível de document precisamente para as páginas não travarem a rolagem — `passive: false` é a saída explícita que torna `preventDefault` legal de novo.',
          '- Roda para cima pagina para frente e roda para baixo pagina para trás — esse é o mapeamento da história; troque os ramos `scrollNext` / `scrollPrev` para o inverso.',
          '- Dispositivos de toque não rodam nada disso: não há `mouseenter`, e deslizar a linha é rolagem nativa desde o início.',
          '- O bloqueio existe só entre `mouseenter` e `mouseleave`, então o resto da página rola normalmente no instante em que o ponteiro sai do carril.',
        ].join('\n'),
      },
    ],
  },

  'one-item-scroll': {
    meta: {
      title: 'Rolar um item por vez no React: setas de carrossel precisas',
      description:
        'Avança um carrossel do React um item por clique de seta: scrollToItem com getNextElement avança um cartão em vez de uma página inteira. Demo ao vivo e fonte completa.',
    },
    title: 'Rolar um item por vez em vez de uma página inteira',
    lede: 'Por padrão as setas paginam: tudo visível desliza para fora e o próximo grupo desliza para dentro. Este exemplo as reconecta para dar passos — um cartão por clique — e toda a mudança é o que o `onClick` da seta chama. Mesmo menu, mesmos itens, alvo de rolagem diferente.',
    demoHint:
      'Clique numa seta — a linha avança um cartão, não uma página. As setas desabilitam nas pontas.',
    prose: [
      {
        heading: 'Como funciona',
        body: '`getNextElement()` retorna o primeiro item além do grupo visível; `getPrevElement()` aquele logo antes. A seta direita chama `scrollToItem(visibility.getNextElement(), ’smooth’, ’end’)` — alinhar esse item com a borda final do contêiner rola o bastante para trazê-lo à visão, o que move a linha exatamente um cartão. A seta esquerda é o espelho: elemento anterior, alinhado a `’start’`.',
      },
      {
        heading: 'O alinhamento é todo o truque',
        body: 'O `scrollNext()` padrão resolve o mesmo próximo elemento internamente, mas o alinha à borda inicial — a visão rola além de todo o grupo visível para colocar esse item primeiro. Um argumento `ScrollLogicalPosition` é a diferença entre paginar e dar passos. O terceiro parâmetro de `scrollToItem` é o alinhamento `inline` padrão do scroll-into-view; o segundo é o comportamento, aqui `’smooth’`.',
      },
      {
        heading: 'Notas',
        body: [
          '- O estado das setas usa os atalhos `’first’` e `’last’`: `useIsVisible(’first’, true)` desabilita a seta esquerda no início, `useIsVisible(’last’, false)` a direita no fim.',
          '- Nas pontas `getNextElement()` retorna undefined e `scrollToItem` silenciosamente não faz nada, então uma seta habilitada ainda não pode rolar demais.',
          '- O handler `onWheel` da história ainda pagina uma visão inteira por entalhe da roda — dar passos é o comportamento das setas, não um modo global.',
          '- Os cliques de item ficam intactos: cartões alternam a seleção pelo próprio `onClick`, independente de como as setas rolam.',
        ].join('\n'),
      },
    ],
  },

  'items-animation': {
    meta: {
      title: 'Animar itens de lista ao adicionar e remover no React',
      description:
        'Adicione, remova e embaralhe itens de uma lista horizontal do React, animados por @formkit/auto-animate através da prop containerRef do ScrollMenu. Demo ao vivo e fonte completa.',
    },
    title: 'Animar itens ao entrar, sair e a seus lugares com auto-animate',
    lede: 'Acrescentar a uma lista horizontal faz o novo item surgir de repente; remover um junta seus vizinhos de repente. `@formkit/auto-animate` corrige ambos com uma única ref pai — e a prop `containerRef` do `ScrollMenu` entrega exatamente o elemento que ele precisa.',
    demoHint:
      'Adicione, remova e embaralhe — toda entrada, saída e reordenação é animada. O próprio menu não tem código de animação.',
    prose: [
      {
        heading: 'Como funciona',
        body: '`useAutoAnimate()` retorna uma ref que deve pousar no pai direto dos elementos que deve animar. Dentro do `ScrollMenu` esse pai é o contêiner de rolagem: cada filho que você passa é envolvido num div de item, e esses divs de item são os filhos imediatos do contêiner. A história passa a ref direto — `<ScrollMenu containerRef={parent}>` — e o auto-animate assume daí: itens adicionados entram com ease, itens removidos animam para fora e itens reordenados deslizam para o novo slot. O próprio menu nunca sabe que está sendo animado.',
      },
      {
        heading: 'Adicionar, remover, embaralhar',
        body: 'Os três controles são chamadas `setState` comuns sobre o array items — `addItems` acrescenta um, `removeItems` solta o último, `shuffle` é uma passada Fisher–Yates sobre uma cópia. As animações vêm inteiramente das mutações de DOM que essas atualizações causam. Vale manter uma regra: `itemId` faz as vezes de key do React e de identificador do item no mapa de rastreamento do menu, então os ids devem continuar únicos — a história até preenche as lacunas de numeração deixadas por remoções em vez de arriscar cunhar um duplicado.',
      },
      {
        heading: 'Rolagem e rastreamento continuam funcionando',
        body: 'O menu re-observa seus filhos sempre que mudam, então o `useIsVisible` de um item recém-adicionado reporta corretamente na hora e as setas continuam paginando. Um item novo normalmente pousa fora da tela, porém — se a entrada deve ser de fato vista, combine isso com `scrollToItem` como o exemplo add-item-and-scroll-to-it faz.',
      },
      {
        heading: 'Notas',
        body: [
          '- `containerRef` aceita um objeto de ref ou uma ref callback — o callback do `useAutoAnimate` se conecta direto.',
          '- auto-animate é de configuração zero e independente de framework; a ligação com React é o único hook `useAutoAnimate`.',
          '- A demo acima simplifica o gerenciamento de id para um contador monótono; o painel de código mostra a versão com preenchimento de lacunas da história.',
        ].join('\n'),
      },
    ],
  },
};
