// Spanish (es) — translation of en/examples-hub.ts.
//
// Values only: every key, its order and its type come from the English
// module, and a missing or renamed one is a type error rather than a
// silently English page.
// i18n:meta locale=es source=en/examples-hub.ts source-blob=8127bcad7814c2b0afd352822f229d8a3c1783ff status=translated
import type { ExamplePageCopy, ExamplesHubCopy } from '../types.ts';

/** La página de listado /examples. */
export const examplesHub: ExamplesHubCopy = {
  meta: {
    title:
      'Ejemplos de menú de desplazamiento horizontal de React — en vivo, con código',
    description:
      'Ejemplos de react-horizontal-scrolling-menu: flechas, arrastrar para desplazarse, pestañas desplazables, RTL, vertical, bucle infinito, autoplay — cada uno con fuente lista para copiar y pegar.',
  },
  title: 'Ejemplos: cada patrón, en vivo, con la fuente completa',
  lede: 'Cada ejemplo es una demo funcional del paquete npm publicado más el archivo completo que la respalda: listo para copiar y pegar, y editable en vivo en Storybook. Renderizado en el servidor como todo lo demás de este sitio.',
  storybookCta: '¿Prefieres un patio de juegos? Abre Storybook',
};

/** El mobiliario que comparten las veintiún páginas de ejemplo. */
export const examplePage: ExamplePageCopy = {
  breadcrumbLabel: 'Miga de pan',
  breadcrumbExamples: 'Ejemplos',
  storybookCta: 'Edita este ejemplo en vivo en Storybook',
  fullSource: 'Fuente completa',
  fullSourceLede:
    'Completa y lista para copiar y pegar: este es el archivo exacto que está detrás de la',
  fullSourceLedeLink: 'versión de Storybook editable en vivo',
  copyFullSource: 'Copiar fuente completa',
  relatedExamples: 'Ejemplos relacionados',
  allExamples: 'Todos los ejemplos ({count})',
};
