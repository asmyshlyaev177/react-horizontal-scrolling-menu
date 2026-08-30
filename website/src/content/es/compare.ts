// Spanish (es) — translation of en/compare.ts.
//
// Values only: every key, its order and its type come from the English
// module, and a missing or renamed one is a type error rather than a
// silently English page.
// i18n:meta locale=es source=en/compare.ts source-blob=109fc8a1eaa58ebec8e1085289370248a158cabd status=translated
import type { CompareCopy } from '../types.ts';

export const compare: CompareCopy = {
  meta: {
    title:
      'react-horizontal-scrolling-menu frente a Swiper, Embla, react-slick',
    description:
      'Una comparación honesta: cuándo un menú de desplazamiento horizontal gana a una librería de carrusel y cuándo no. Swiper, Embla, keen-slider y react-slick, lado a lado.',
  },
  jsonLdHeadline:
    '¿Carrusel o menú de desplazamiento? react-horizontal-scrolling-menu frente a Swiper, Embla, keen-slider y react-slick',

  title: '¿Carrusel o menú de desplazamiento? Una comparación honesta',
  lede: 'Swiper, Embla, keen-slider y react-slick son motores de carrusel: reimplementan el desplazamiento en JavaScript para obtener semántica de diapositivas, física de ajuste y efectos. react-horizontal-scrolling-menu no es uno de ellos: usa el desplazamiento nativo del navegador y añade seguimiento de visibilidad por elemento. Cuál quieres depende de lo que estés construyendo — la tabla y las notas de abajo lo exponen con honestidad, en ambos sentidos.',

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
        'Qué es',
        'Menú de desplazamiento con seguimiento de visibilidad',
        'Framework completo de slider/carrusel',
        'Motor de carrusel headless',
        'Motor de slider independiente del framework',
        'Puerto a React del slider slick de jQuery',
      ],
      [
        'Motor de desplazamiento',
        'Desplazamiento nativo del navegador',
        'Transformaciones JS + física',
        'Transformaciones JS + física',
        'Transformaciones JS + física',
        'Transformaciones JS (transiciones CSS)',
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
        'Qué elementos hay en pantalla',
        'Integrado — useIsVisible por elemento',
        'Basado en índice de diapositiva',
        'Eventos de índice de diapositiva',
        'Eventos de índice de diapositiva',
        'Basado en índice de diapositiva',
      ],
      [
        'Ajuste, efectos, física',
        'Ninguno — a propósito',
        'Rico (fade, cube, coverflow…)',
        'Basado en plugins, con tween',
        'Sí, incluido el modo libre',
        'Fade, modo centrado',
      ],
      [
        'Bucle / autoplay',
        'Recetas sobre la API pública',
        'Props integradas',
        'Plugins',
        'Opciones integradas',
        'Props integradas',
      ],
      [
        'Barra de desplazamiento, rueda, foco de teclado',
        'Nativo — gratis del navegador',
        'Emulado / módulos opcionales',
        'Hazlo tú (headless)',
        'Hazlo tú',
        'Limitado',
      ],
      [
        'Ideal para',
        'Filas de categorías, pestañas, filtros de chips',
        'Sliders a pantalla completa, galerías',
        'Carruseles personalizados (por defecto en shadcn)',
        'Sliders personalizados mínimos',
        'Migraciones desde slick heredado',
      ],
    ],
    note: 'Los tamaños de bundle son núcleos aproximados — consulta bundlephobia para cifras actuales antes de decidir solo por el tamaño.',
  },

  prose: [
    {
      heading: 'Primero, la pregunta real',
      body: `Un **carrusel** presenta diapositivas: una cosa (o una página de cosas) a la vez, con ajuste, efectos y una sensación de «posición 3 de 8». Un **menú** presenta una fila que el usuario recorre y de la que elige: un carril de categorías, una franja de pestañas, una barra de chips. Los carruseles quieren semántica de diapositivas; los menús quieren desplazamiento nativo — inercia, barra de desplazamiento, rueda, tacto y foco de teclado comportándose exactamente como en el resto de la página — más lo que el navegador no da: saber qué elementos hay en pantalla.

Si construyes un slider de imágenes a pantalla completa, una galería hero o cualquier cosa con física de ajuste a diapositiva, **usa una librería de carrusel — Embla o Swiper son excelentes**. Esta página existe para el otro caso, el que cada FAQ de carruseles ignora en silencio: filas de cosas clicables que nunca fueron realmente diapositivas.`,
    },
    {
      heading: 'frente a Swiper',
      body: `Swiper es el framework de sliders más completo que existe: efectos (fade, cube, coverflow), diapositivas virtuales, zoom, parallax, paginación y un ecosistema maduro. Sus ≈40 kB se justifican cuando usas lo que trae. Reimplementa el desplazamiento con transformaciones, así que la barra de desplazamiento nativa, el comportamiento de la rueda y la accesibilidad del desplazamiento son emulaciones que configuras, no valores por defecto que heredas.

- **Elige Swiper** para sliders centrados en imágenes, efectos o cualquier cosa que deba sentirse como diapositivas.
- **Elige esta biblioteca** cuando el «carrusel» es una barra de chips estilo YouTube o una fila de categorías estilo Netflix: obtienes desplazamiento nativo por ≈34 kB menos, más \`useIsVisible\` por elemento — algo que Swiper no modela, porque las diapositivas no son elementos.`,
    },
    {
      heading: 'frente a Embla',
      body: `Embla es un motor de carrusel headless con una física preciosa y un adaptador de React de primera — es sobre lo que shadcn/ui construye su carrusel, y el valor por defecto correcto cuando quieres control visual total sobre un carrusel real. Lo headless corta en ambos sentidos para los menús: el scroll a la vista al seleccionar, la visibilidad por elemento, la desactivación de flechas y la gestión del foco son todos tuyos para construir a mano.

- **Elige Embla** para carruseles de diseño personalizado y física de ajuste con poco tamaño.
- **Elige esta biblioteca** cuando esas piezas hechas a mano son justo el punto: \`scrollToItem\`, \`useIsVisible\`, el estado de flechas first/last y \`apiRef\` vienen funcionando.`,
    },
    {
      heading: 'frente a keen-slider',
      body: 'keen-slider es un motor de slider ligero e independiente del framework, una buena elección para sliders personalizados mínimos cuando quieres una sola dependencia entre frameworks. Como los demás, posee la capa de gestos con transformaciones, y su API está moldeada por el índice de diapositiva: bien para diapositivas, incómodo para «desplaza el chip seleccionado a la vista y dime qué es visible».',
    },
    {
      heading: 'frente a react-slick',
      body: 'react-slick porta el carrusel slick de la era jQuery a React. Sigue funcionando, pero arrastra un archivo CSS aparte, su arquitectura es anterior a los hooks y el mantenimiento es escaso. Los equipos que lo dejan suelen caer en dos bandos: carruseles reales (a Embla o Swiper) — y filas de navegación dobladas a `centerMode` porque slick ya estaba instalado. Ese segundo bando es exactamente la forma de esta biblioteca: [selección centrada](/examples/center-on-click), [avance de un elemento](/examples/one-item-scroll) y [arrastrar para desplazarse](/examples/mouse-drag) sin motor de slider.',
    },
    {
      heading: 'Cómo se ve el lado del menú',
      body: `Cada patrón de este sitio está en vivo y renderizado en el servidor, cada uno con su fuente completa: [pestañas desplazables](/examples/center-on-click), [chips de filtro](/examples/add-item-and-scroll-to-it), [filas con carga de más](/examples/add-items) y — las dos funciones que la gente asume que necesitan un motor de carrusel — [bucle infinito](/examples/infinite-loop) y [autoplay](/examples/autoplay), cada una de unas sesenta líneas sobre la API pública.

- 5,7 kB min+gzip, TypeScript-first, MIT, ≈347k descargas/mes, mantenido desde 2018 con una API estable de React 16.8 a 19.
- Amigable con SSR: la fila se desplaza antes de que tu JavaScript hidrate — esta página y cada demo de este sitio lo demuestran.`,
    },
  ],

  links: {
    examples: 'Ver todos los ejemplos',
    storybook: 'Pruébalo en Storybook',
    github: 'GitHub',
  },
};
