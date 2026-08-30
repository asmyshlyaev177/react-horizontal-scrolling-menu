// Spanish (es) — translation of en/compare-pairs.ts.
//
// Values only: every key, its order and its type come from the English
// module, and a missing or renamed one is a type error rather than a
// silently English page.
// i18n:meta locale=es source=en/compare-pairs.ts source-blob=0fb5673892e901be3f7c39eba5eb45e00488b9a5 status=translated
import type { ComparePairsCopy } from '../types.ts';

// Neutral-pair comparison pages. The voice is a referee's, not a vendor's:
// each page recommends the right carousel for carousel jobs and claims only
// the menu-shaped slice. Overselling here burns the credibility the pages
// exist to earn.
export const comparePairs: ComparePairsCopy = {
  hub: {
    heading: 'Más comparaciones',
    lede: 'Páginas más profundas sobre las decisiones concretas que la gente realmente sopesa.',
  },

  emblaVsSwiper: {
    meta: {
      title: 'Embla vs Swiper: qué carrusel de React elegir',
      description:
        'Embla frente a Swiper, comparados con honestidad: tamaño del bundle, funciones, headless frente a todo incluido, y la tercera opción cuando tu carrusel es en realidad un menú.',
    },
    jsonLdHeadline:
      'Embla vs Swiper para React: una comparación honesta, y el caso en que no necesitas ninguno de los dos',
    name: 'Embla vs Swiper',
    blurb:
      'Motor headless o todo incluido, y el caso en que no necesitas ninguno.',
    title: 'Embla vs Swiper: elige según lo que estés construyendo',
    lede: 'Ambos son motores de carrusel excelentes y con mantenimiento activo, y la elección entre ellos es genuinamente reñida. Se reduce a un solo eje: Swiper trae todas las funciones integradas; Embla ofrece un pequeño motor headless sobre el que construyes. Esta página la escribe el mantenedor de una librería que no compite con ninguno de los dos, que es también la tercera respuesta al final, para los proyectos que resultan no ser carruseles en absoluto.',
    table: {
      headers: ['', 'Embla', 'Swiper'],
      rows: [
        [
          'Qué es',
          'Motor de carrusel headless',
          'Framework completo de slider/carrusel',
        ],
        [
          'Bundle (núcleo, min+gzip)',
          '≈8 kB',
          '≈40 kB (crece con los módulos)',
        ],
        [
          'Estilos y markup',
          'Totalmente tuyos: no incluye ninguno',
          'Su propia estructura DOM y CSS, con tema',
        ],
        [
          'Efectos (fade, cube, coverflow…)',
          'Plugins de la comunidad, o hazlo tú mismo',
          'Integrados, maduros',
        ],
        [
          'Autoplay, paginación, miniaturas',
          'Plugins oficiales',
          'Módulos integrados',
        ],
        [
          'Integración con React',
          'Hook de primera clase (useEmblaCarousel)',
          'Componentes envoltorio sobre un núcleo vanilla',
        ],
        [
          'Nota de ecosistema',
          'El motor detrás del carrusel de shadcn/ui',
          'El slider más usado de la web',
        ],
        [
          'Mejor para',
          'Carruseles con diseño a medida, sistemas de diseño',
          'Sliders centrados en imágenes, galerías cargadas de funciones',
        ],
      ],
      note: 'Los tamaños de bundle son núcleos aproximados: consulta bundlephobia para cifras actuales; el de Swiper crece con los módulos que importes.',
    },
    prose: [
      {
        heading: 'Elige Embla cuando el control del diseño es lo que importa',
        body: `Embla te da física de encaje (snap), gestión del arrastre y un modelo de diapositivas, y nada más: sin markup, sin CSS, sin flechas. Ahí está su fuerza: en un sistema de diseño, todo lo visible es tuyo y el motor nunca pelea contra tus estilos. Es sobre lo que shadcn/ui construye su carrusel, lo que te indica el punto óptimo: equipos que quieren que un carrusel se vea como *su* producto, no como una librería de carrusel.

El coste es que cualquier función más allá de deslizar es un añadido o algo hecho a mano: autoplay y class-names son plugins oficiales; los puntos de paginación, las miniaturas y los efectos los escribes tú.`,
      },
      {
        heading: 'Elige Swiper cuando quieres las funciones ya incluidas',
        body: `Swiper es la respuesta con todo incluido: efectos fade, cube y coverflow, diapositivas virtuales, zoom, parallax, galerías de miniaturas, módulo de accesibilidad, paginación en varios estilos, todo configurado, no construido. Si tu producto necesita tres de esas cosas este trimestre, Swiper justifica su tamaño muchas veces.

El coste es lo contrario de Embla: heredas el DOM de Swiper, su CSS para tematizar y un núcleo en JavaScript vanilla envuelto para React, más pesado tanto en kilobytes como en superficie de API.`,
      },
      {
        heading:
          'La pregunta que hay que hacerse antes de elegir cualquiera de los dos',
        body: `Ambas librerías dan por hecho que estás presentando *diapositivas*: una cosa, o una página de cosas, a la vez, con encaje y una noción de posición. Buena parte de los "carruseles" reales no se parecen en nada a eso: filas de categorías, tiras de logos, barras de pestañas, filtros de chips — filas de elementos pulsables que tu usuario recorre con la vista y de los que elige. Esos quieren scroll nativo (inercia, barra de desplazamiento, rueda del ratón, accesibilidad gratis) además de saber qué elementos están en pantalla, y ni Embla ni Swiper modelan la visibilidad por elemento, porque las diapositivas no son elementos.

Para esa forma hay una tercera opción: [react-horizontal-scrolling-menu](/) (≈5.7 kB) usa el scroll nativo e incluye \`useIsVisible\`, \`scrollToItem\` y flechas conscientes de los bordes. Míralo como una [fila estilo Netflix](/netflix-row), una [barra de pestañas](/scrollable-tabs) o una [barra de chips](/filter-chips), o consulta la [tabla de comparación completa](/compare) frente a ambos.`,
      },
    ],
  },

  reactSlickAlternatives: {
    meta: {
      title: 'Alternativas a react-slick en 2026',
      description:
        'Migrar desde react-slick: Embla y Swiper para carruseles reales, react-horizontal-scrolling-menu para filas de navegación que usan centerMode. Guía de migración honesta.',
    },
    jsonLdHeadline:
      'Alternativas a react-slick: adónde migrar los carruseles reales y adónde debería ir tu fila con centerMode',
    name: 'Alternativas a react-slick',
    blurb:
      'Adónde migrar los carruseles reales, y adónde deberían ir las filas con centerMode.',
    title: 'Alternativas a react-slick: migra según lo que construiste con él',
    lede: 'react-slick porta a React el carrusel slick de la era jQuery. Todavía funciona, pero su arquitectura es anterior a los hooks, las versiones son escasas y arrastra un archivo CSS aparte en cada build. El reemplazo correcto depende menos de las funciones que de en cuál de dos bandos cae tu uso.',
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
          'Qué es',
          'Port a React de slick (jQuery)',
          'Motor de carrusel headless',
          'Framework completo de slider',
          'Menú de scroll, desplazamiento nativo',
        ],
        ['Mantenimiento', 'Escaso', 'Activo', 'Activo', 'Activo desde 2018'],
        [
          'Bundle (min+gzip)',
          '≈15 kB + CSS de slick',
          '≈8 kB',
          '≈40 kB',
          '≈5.7 kB',
        ],
        [
          'Requiere archivo CSS extra',
          'Sí (dos)',
          'No',
          'Sí (núcleo)',
          'Uno, o Tailwind vía el elemento shadcn',
        ],
        [
          'Semántica de diapositivas (snap, puntos, fade)',
          'Sí',
          'Sí',
          'Sí',
          'No, deliberadamente',
        ],
        [
          'Filas de elementos pulsables',
          'Forzado con centerMode',
          'Construido a mano sobre el motor',
          'Configurado a contrapelo',
          'El caso de uso principal',
        ],
      ],
      note: 'Los tamaños son núcleos aproximados. La última columna es la librería propia de este sitio: la tabla lo dice en lugar de fingir lo contrario.',
    },
    prose: [
      {
        heading: 'Bando uno: era un carrusel de verdad',
        body: `Sliders de héroe, galerías de imágenes, rotadores de testimonios: cualquier cosa donde los puntos, el fade y el autoplay de slick sostenían el diseño. Migra a un motor de carrusel de verdad:

- **[Embla](/compare/embla-vs-swiper)** si le das estilo a todo tú mismo y quieres un núcleo headless pequeño: lo más parecido en espíritu a "slick, modernizado".
- **Swiper** si usabas mucho la lista de funciones de slick; cada función de slick tiene un equivalente en Swiper, normalmente mejor.

Mapea \`slidesToShow\`/\`slidesToScroll\` a \`slidesInView\`/\`slidesToScroll\` de Embla o a \`slidesPerView\`/\`slidesPerGroup\` de Swiper, y cuenta con eliminar tus sobrescrituras de CSS para posicionar flechas: ambos sucesores te dejan renderizar tus propios botones.`,
      },
      {
        heading: 'Bando dos: era navegación disfrazada con centerMode',
        body: `La otra instalación de slick es la silenciosa: una fila de categorías, logos, fechas o filtros, forzada a ser un carrusel con \`centerMode\`, \`focusOnSelect\` y \`variableWidth\` porque slick ya estaba en el bundle. La pista es contra qué peleabas: clics que se disparaban después de un arrastre, flechas en los momentos equivocados, elementos que no podías medir, un encaje que no querías.

Esa fila era un menú. [react-horizontal-scrolling-menu](/) hace las tres cosas que centerMode fingía hacer —[centrar el elemento pulsado](/examples/center-on-click), desplazarse de forma nativa con [soporte de arrastre](/examples/mouse-drag) e informar de [qué elementos son visibles](/examples/simple)— en ≈5.7 kB sin motor de slider. Consulta las páginas de [pestañas desplazables](/scrollable-tabs) y [riel de categorías](/category-rail) para las dos formas más comunes.`,
      },
      {
        heading:
          'Sea cual sea el bando: la migración es más pequeña de lo que parece',
        body: 'La superficie de la API de slick es grande, pero al auditar configuraciones reales se reduce rápido: la mayoría de los proyectos usan un puñado de props. Enumera las que realmente usas, decide en qué bando cae cada uso y migra caso por caso: los dos bandos suelen convivir en un mismo código, y no hay ninguna regla que obligue a que ambos acaben en la misma librería.',
      },
    ],
  },

  swiperAlternatives: {
    meta: {
      title: 'Alternativas más ligeras a Swiper para React',
      description:
        '¿Buscas una alternativa más ligera a Swiper en React? Embla y keen-slider para carruseles reales, react-horizontal-scrolling-menu para filas con forma de menú. Tamaños comparados.',
    },
    jsonLdHeadline:
      'Alternativas a Swiper para React: carruseles más ligeros y la vía de escape con forma de menú',
    name: 'Alternativas a Swiper',
    blurb:
      'Cuando la queja son los ≈40 kB: motores más ligeros y la vía de escape con forma de menú.',
    title:
      'Alternativas a Swiper para React, según de qué estás escapando en realidad',
    lede: 'Nadie deja Swiper porque sea malo: es el slider más completo que existe. La gente lo deja por el peso (≈40 kB antes de los módulos), por heredar su DOM y su CSS, o porque su "slider" nunca fueron realmente diapositivas. Cada queja tiene una mejor respuesta distinta.',
    table: {
      headers: [
        '',
        'Swiper',
        'Embla',
        'keen-slider',
        'react-horizontal-scrolling-menu',
      ],
      rows: [
        ['Bundle (núcleo, min+gzip)', '≈40 kB', '≈8 kB', '≈7 kB', '≈5.7 kB'],
        [
          'Modelo',
          'Diapositivas, todo incluido',
          'Diapositivas, headless',
          'Diapositivas, motor mínimo',
          'Elementos en una fila de scroll nativo',
        ],
        [
          'Efectos y módulos',
          'Los más completos disponibles',
          'Plugins / hazlo tú mismo',
          'Algunos integrados',
          'Ninguno: recetas en su lugar',
        ],
        [
          'Controla la capa de gestos',
          'Sí (transforms)',
          'Sí (transforms)',
          'Sí (transforms)',
          'No: se desplaza el navegador',
        ],
        [
          'Visibilidad por elemento',
          'Eventos de índice de diapositiva',
          'Eventos de índice de diapositiva',
          'Eventos de índice de diapositiva',
          'Integrada (useIsVisible)',
        ],
        [
          'Mejor cambio cuando',
          '—',
          'De todos modos le das estilo a todo',
          'Slider mínimo, sin dependencia de React',
          'Las "diapositivas" son elementos pulsables',
        ],
      ],
      note: 'Los tamaños son núcleos aproximados: el de Swiper crece con los módulos importados, lo que también significa que un build de Swiper recortado es más pequeño que su reputación.',
    },
    prose: [
      {
        heading: 'Escapar de los kilobytes: Embla o keen-slider',
        body: `Si el producto es un carrusel de verdad —con encaje, una página de diapositivas a la vez— los motores ligeros son casi un reemplazo directo:

- **[Embla](/compare/embla-vs-swiper)** (≈8 kB): headless, física excelente, hook de primera clase para React, el motor detrás del carrusel de shadcn/ui. Tú aportas todo el markup y el CSS, que es justo el punto.
- **keen-slider** (≈7 kB): un motor mínimo agnóstico de framework, útil cuando el mismo slider debe llegar a superficies con y sin React.

Ambos mantienen el modelo de diapositivas basado en transforms, así que efectos como fade o coverflow siguen siendo cosa tuya: si dependes de ellos, honestamente un build de Swiper recortado es mejor respuesta que reimplementarlos.`,
      },
      {
        heading:
          'Escapar del modelo de diapositivas: el caso con forma de menú',
        body: `La otra salida es para proyectos donde la semántica de diapositivas de Swiper nunca fue estructural: filas de categorías, muros de logos, barras de pestañas, barras de chips, rieles de producto. Las señales son configuraciones como \`slidesPerView: 'auto'\` junto con \`freeMode: true\`: ese par es pedirle a Swiper que imite el scroll nativo.

[react-horizontal-scrolling-menu](/) (≈5.7 kB) es ese scroll nativo, más las partes que el navegador no incluye: [visibilidad por elemento](/examples/simple), [scroll hasta un elemento](/examples/scroll-to-item), flechas conscientes de los bordes y [arrastre que no rompe los clics](/examples/mouse-drag). Sin efectos, sin encaje, sin emulación de gestos: consulta las páginas de [fila estilo Netflix](/netflix-row), [pestañas](/scrollable-tabs) y [barra de chips](/filter-chips), o la [tabla completa](/compare).`,
      },
      {
        heading: 'Una advertencia justa en ambas direcciones',
        body: 'Migrar fuera de Swiper para ahorrar peso y luego construir a mano autoplay, paginación, anuncios de accesibilidad y efectos es cómo un problema de 40 kB se convierte en un problema de un mes-persona. Cambia a un motor más ligero cuando tu uso sea genuinamente un subconjunto, y a un menú de scroll solo cuando la semántica de diapositivas fuera falsa desde el principio. Si aprovechas la profundidad de Swiper, quédate con Swiper.',
      },
    ],
  },
};
