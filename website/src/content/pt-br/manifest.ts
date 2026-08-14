// Portuguese (Brazil) (pt-BR) — translation of en/manifest.ts.
//
// Values only: every key, its order and its type come from the English
// module, and a missing or renamed one is a type error rather than a
// silently English page.
// i18n:meta locale=pt-BR source=en/manifest.ts source-blob=269945541172d5f4f06823bd0d6393dfc44a3fb2 status=translated
import type { ManifestCopy } from '../types.ts';

/**
 * Texto dos cartões das páginas de exemplo. Os slugs e ids de grupo são
 * estrutura — vivem em `lib/examples-manifest.ts` e aqui são chaves, não texto.
 */
export const manifest: ManifestCopy = {
  groups: {
    Basics: 'Básico',
    'Position & scrolling': 'Posição e rolagem',
    'Input & gestures': 'Entrada e gestos',
    'Dynamic items': 'Itens dinâmicos',
    Layout: 'Layout',
    Recipes: 'Receitas',
  },
  examples: {
    simple: {
      name: 'Primeiros passos',
      blurb: 'O menu mínimo: itens, duas setas, visibilidade pronta para usar.',
    },
    'one-item': {
      name: 'Um item por visão',
      blurb: 'Um menu com a largura de um item — um cartão preenche a linha.',
    },
    'one-item-scroll': {
      name: 'Rolar um item por vez',
      blurb: 'As setas avançam um único item em vez de uma página inteira.',
    },
    'bottom-arrows': {
      name: 'Setas abaixo do menu',
      blurb: 'As setas são seus componentes — coloque-as onde quiser.',
    },
    'center-on-click': {
      name: 'Centralizar o item clicado',
      blurb: 'scrollToItem com inline: center — o padrão de abas roláveis.',
    },
    'scroll-to-item': {
      name: 'Rolar até um item por id',
      blurb: 'Acesse o menu de fora com apiRef.',
    },
    'save-restore-position': {
      name: 'Salvar e restaurar a posição de rolagem',
      blurb:
        'Mantenha o deslocamento de rolagem entre desmontagens e recargas.',
    },
    'custom-transition': {
      name: 'Animação de rolagem personalizada',
      blurb: 'Traga seu próprio easing e duração para rolagens programáticas.',
    },
    progress: {
      name: 'Indicador de progresso de rolagem',
      blurb: 'Uma barra de progresso guiada por quais itens estão visíveis.',
    },
    'mouse-drag': {
      name: 'Arrastar para rolar com o mouse',
      blurb: 'Arraste com o mouse que ainda deixa os cliques funcionarem.',
    },
    'swipe-desktop': {
      name: 'Deslizar no desktop',
      blurb: 'Deslize com inércia para usuários de mouse.',
    },
    'mobile-swipe-only': {
      name: 'Ocultar as setas no mobile',
      blurb: 'Rolagem apenas por toque em telas pequenas, setas no desktop.',
    },
    'prevent-body-scroll': {
      name: 'Impedir a rolagem do body',
      blurb: 'A roda sobre o menu rola o menu, não a página.',
    },
    'add-items': {
      name: 'Carregar mais quando o fim aparece',
      blurb: 'Acréscimo infinito guiado pela visibilidade do último item.',
    },
    'add-item-and-scroll-to-it': {
      name: 'Adicionar um item e rolar até ele',
      blurb: 'O padrão de chips de filtro: adicionar e então trazer à vista.',
    },
    'items-animation': {
      name: 'Animar itens ao entrar e sair',
      blurb: 'Animações de adicionar/remover com @formkit/auto-animate.',
    },
    performance: {
      name: '5.000 itens e ainda rápido',
      blurb: 'A rolagem nativa escala — sem necessidade de virtualização aqui.',
    },
    vertical: {
      name: 'Menu vertical',
      blurb: 'O mesmo menu, rolando de cima para baixo.',
    },
    rtl: {
      name: 'Da direita para a esquerda',
      blurb: 'RTL inverte a direção; as setas e a paginação seguem.',
    },
    'infinite-loop': {
      name: 'Loop infinito',
      blurb:
        'Loop contínuo a partir da API pública — sem mudanças na biblioteca.',
    },
    autoplay: {
      name: 'Autoplay',
      blurb: 'Um loop que avança sozinho com pausa acessível.',
    },
  },
};
