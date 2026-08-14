// Portuguese (Brazil) (pt-BR) — translation of en/examples-hub.ts.
//
// Values only: every key, its order and its type come from the English
// module, and a missing or renamed one is a type error rather than a
// silently English page.
// i18n:meta locale=pt-BR source=en/examples-hub.ts source-blob=8127bcad7814c2b0afd352822f229d8a3c1783ff status=translated
import type { ExamplePageCopy, ExamplesHubCopy } from '../types.ts';

/** A página de listagem /examples. */
export const examplesHub: ExamplesHubCopy = {
  meta: {
    title:
      'Exemplos de menu de rolagem horizontal do React — ao vivo, com código',
    description:
      'Exemplos do react-horizontal-scrolling-menu: setas, arrastar para rolar, abas roláveis, RTL, vertical, loop infinito, autoplay — cada um com fonte pronta para copiar e colar.',
  },
  title: 'Exemplos: cada padrão, ao vivo, com a fonte completa',
  lede: 'Cada exemplo é uma demo funcional do pacote npm publicado mais o arquivo completo por trás dela: pronto para copiar e colar, e editável ao vivo no Storybook. Renderizado no servidor como tudo mais neste site.',
  storybookCta: 'Prefere um playground? Abra o Storybook',
};

/** O mobiliário compartilhado por todas as vinte e uma páginas de exemplo. */
export const examplePage: ExamplePageCopy = {
  breadcrumbLabel: 'Trilha de navegação',
  breadcrumbExamples: 'Exemplos',
  storybookCta: 'Edite este exemplo ao vivo no Storybook',
  fullSource: 'Fonte completa',
  fullSourceLede:
    'Completa e pronta para copiar e colar — este é o arquivo exato por trás da',
  fullSourceLedeLink: 'versão do Storybook editável ao vivo',
  copyFullSource: 'Copiar fonte completa',
  relatedExamples: 'Exemplos relacionados',
  allExamples: 'Todos os exemplos ({count})',
};
