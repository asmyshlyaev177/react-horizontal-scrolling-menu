// Spanish (es) — translation of en/home.ts.
//
// Values only: every key, its order and its type come from the English
// module, and a missing or renamed one is a type error rather than a
// silently English page.
// i18n:meta locale=es source=en/home.ts source-blob=732c3dd50b5369701d5eea6813f6b1f5c2c05ab4 status=translated
import { INTENT, REACT_STATUS, STORIES } from '../../lib/links.ts';
import type { HomeCopy } from '../types.ts';

// Deep-links the import, not the repo root: the claim is that they render
// this component in production, and the line proves it. Commit-pinned so a
// refactor on their side can't turn it into a 404.
const OWID =
  'https://github.com/owid/owid-grapher/blob/4a60a2fb4532a2d287a1ef5660339dcc32bcd483/site/gdocs/components/KeyInsights.tsx#L3';

export const home: HomeCopy = {
  jsonLdDescription:
    'Componente de menú de desplazamiento horizontal para React con seguimiento de visibilidad por elemento, construido sobre el desplazamiento nativo del navegador.',

  hero: {
    titleLead: 'El menú horizontal que ',
    titleHighlight: 'sabe qué es visible',
    sub: 'Un menú de desplazamiento de React construido sobre el propio desplazamiento del navegador: seguimiento de visibilidad por elemento, flechas, arrastre y una API imperativa completa. `5,7 kB` en gzip.',
    primaryCta: 'Empezar',
    secondaryCta: 'Ver ejemplos',
    storybookCta: 'Abrir Storybook',
  },

  install: {
    ariaLabel: 'Instalar',
    copyLabel: 'Copiar comando de instalación',
    shadcnNote:
      'O un componente [shadcn/ui](https://ui.shadcn.com) listo para usar — flechas, drag-to-scroll, con estilos',
    shadcnCopyLabel: 'Copiar comando de shadcn',
    facts: [
      '**347k** descargas/mes',
      '**5,7 kB** min+gzip',
      'React **16.8 – 19**',
      '**MIT**',
    ],
  },

  autoplay: {
    heading: 'Autoplay, sin motor de carrusel',
    lede: 'No hay una prop `autoplay` — este carril es una receta sobre la API pública: la fila clonada en ambos extremos, un salto de `scrollLeft` en la costura y un temporizador que llama a `scrollNext()`. Se pausa al pasar el ratón, con el foco y en pestañas ocultas, se queda quieto bajo movimiento reducido — y puedes arrastrarlo, incluso hacia atrás, a través de la costura.',
    recipeLink: 'Leer la receta completa',
    storybookLink: 'Edítalo en vivo en Storybook',
  },

  positioning: {
    heading: 'Un *menú*, no un carrusel',
    scope: [
      'Embla, Swiper y keen-slider reimplementan el desplazamiento en JavaScript para construir sliders de imágenes: puntos de ajuste, física de muelle, un bucle de render. Esta biblioteca no trae nada de eso. Usa el desplazamiento nativo del navegador y añade lo único que el navegador no da: saber exactamente qué elementos hay en pantalla.',
      '**La herramienta equivocada** para un slider de imágenes a pantalla completa: usa Embla o Swiper allí. **La herramienta correcta** para filas de categorías, pestañas, filtros de chips y cualquier fila de cosas sobre la que tu aplicación necesite razonar.',
    ],
    pillars: [
      {
        title: 'Desplazamiento nativo',
        body: 'La inercia, la barra de desplazamiento, el tacto, la rueda y la accesibilidad vienen del navegador, no de un motor de física. La fila se desplaza antes de que tu JavaScript hidrate: cada demo de esta página está renderizada en el servidor.',
      },
      {
        title: 'Seguimiento de visibilidad',
        body: 'IntersectionObserver informa de qué elementos hay en pantalla. `useIsVisible(itemId)` suscribe un componente a un elemento: sin matemática de posición de desplazamiento, y solo se vuelven a renderizar los elementos afectados.',
      },
      {
        title: 'Imperativo cuando lo necesitas',
        body: '`scrollToItem`, `scrollNext`, `scrollPrev`, búsqueda por id o índice — a través del contexto dentro del menú, o de `apiRef` desde fuera.',
      },
      {
        title: 'Tus componentes, tu CSS',
        body: 'Las flechas, la cabecera, el pie y cada elemento son componentes que escribes tú. El ancho del elemento es tu CSS. La biblioteca trae 210 bytes de estilos de diseño y no se interpone.',
      },
    ],
  },

  quickStart: {
    heading: 'Inicio rápido',
    lede: 'Un archivo, sin configuración: elementos con `itemId`, dos flechas leyendo `VisibilityContext` y la importación de la hoja de estilos.',
    notes: [
      '`itemId` es obligatorio en cada elemento: así funciona el seguimiento. La `key` de React funciona como respaldo.',
      '`styles.css` es una importación aparte; el bundle JS nunca inyecta CSS.',
      'El ancho del elemento viene de tu propio CSS: el menú no mide nada.',
    ],
    link: 'Leer el ejemplo completo de primeros pasos',
  },

  aiSkills: {
    heading: 'O pásaselo a tu agente de código',
    body: `Los modelos entrenados con versiones antiguas siguen buscando \`visibleElements\`, elementos \`Separator\` y una prop \`Arrows\` — todo eliminado hace años — e inventan una prop \`autoplay\` que nunca existió. Para evitarlo, el paquete incluye ocho archivos \`SKILL.md\`: guías por tareas que tu agente carga bajo demanda a través de [TanStack Intent](${INTENT}), versionadas con la biblioteca en lugar de con esta página.`,
    copyLabel: 'Copiar comando de Intent',
    note: 'Ejecútalo una vez en un proyecto que ya tenga el paquete instalado. Tu agente descubre entonces las habilidades desde `node_modules/react-horizontal-scrolling-menu/skills/`.',
    // The SKILL.md files published inside the package, and the one line each
    // that tells an agent — or a reader deciding whether this is worth a
    // command — when it is the one to load. Kept in the same order as
    // public/llms.txt, which is the machine-readable version of this table.
    skills: [
      {
        id: 'menu-setup',
        when: 'Un primer menú funcional, flechas, la importación CSS requerida',
      },
      {
        id: 'menu-visibility',
        when: 'Qué hay en pantalla y el estado de las flechas en los extremos',
      },
      {
        id: 'menu-scrolling',
        when: 'scrollToItem, apiRef, paginación página a página',
      },
      {
        id: 'menu-interactions',
        when: 'Arrastre, rueda y tacto — y sus fábricas de manejadores',
      },
      {
        id: 'menu-recipes',
        when: 'Autoplay, bucle infinito, cargar más: recetas, no props',
      },
      {
        id: 'menu-transitions-rtl',
        when: 'Tiempo de animación, easing personalizado, derecha a izquierda',
      },
      {
        id: 'menu-testing-ssr',
        when: 'Next.js y RSC, mocks de Jest, Playwright',
      },
      {
        id: 'menu-migration',
        when: 'Actualizar código anterior a v8 y las API que los modelos aún inventan',
      },
    ],
    skillsLink: 'Leer las habilidades en GitHub',
    llmsLink: 'llms.txt — los mismos hechos, condensados',
  },

  gallery: {
    heading: 'Recetas que enviarás a producción',
    lede: 'Cuatro patrones comunes, en vivo, con las líneas que importan.',
    tabs: {
      title: 'Una franja de pestañas que centra la pestaña activa',
      body: "Haz clic en una pestaña: `scrollToItem` con `inline: 'center'` la lleva al medio de la fila. La misma llamada maneja `start`, `end` y la paginación.",
      link: 'Ver el ejemplo completo',
    },
    chips: {
      title: 'Añade un chip, desplázate a él',
      body: 'El estado vive fuera del menú; `apiRef` llega dentro. Añade un filtro y la fila lo sigue.',
      link: 'Ver el ejemplo completo',
    },
    infinite: {
      title: 'Carga más cuando aparece el final',
      body: '`onUpdate` te avisa cuando el último elemento se vuelve visible: añade la siguiente página justo ahí. Sin listeners de desplazamiento, sin umbrales de píxeles que afinar.',
      link: 'Ver el ejemplo completo',
    },
    rtl: {
      title: 'De derecha a izquierda, con una prop',
      body: '`RTL` invierte la dirección del contenedor de desplazamiento; las flechas y la lógica de paginación le siguen.',
      link: 'Ver el ejemplo completo',
    },
  },

  features: {
    heading: 'Qué hay en la caja',
    included: [
      'Hooks de visibilidad por elemento — `useIsVisible(itemId)`',
      'Helpers `first` / `last` para el estado de las flechas',
      '`scrollToItem` · `scrollNext` · `scrollPrev`',
      '`apiRef` para el control desde fuera del menú',
      'Entrada por arrastre, rueda, tacto y barra de desplazamiento',
      'Detección dinámica de añadir/eliminar',
      'Ranuras Header y Footer',
      'Helpers de paginación `slidingWindow` + `getItemsPos`',
      'Soporte de derecha a izquierda',
      'Funciones de transición personalizadas',
      'Seguro para SSR — esta página lo demuestra',
      'TypeScript-first — se exporta `publicApiType`',
      'Una API estable de React 16.8 a 19',
    ],
    notIncludedHeading: 'No está en la caja',
    notIncluded: [
      'Física de ajuste y de muelle',
      'Sliders de imágenes a pantalla completa',
      'Lightboxes',
    ],
    note: `Eso pertenece al mundo de los sliders de imágenes — Embla y Swiper lo hacen bien. El [bucle infinito](${STORIES.infiniteLoop}) y el [autoplay](${STORIES.autoplay}) tampoco son props: son recetas, de unas sesenta líneas de la API pública cada una, editables en vivo en Storybook. El carril cerca de la parte superior de esta página es exactamente esa receta en funcionamiento. Esto sigue siendo un menú.`,
  },

  proof: {
    statement:
      'Descargado **347.516 veces** el mes pasado por unos **20.000 repositorios** — mantenido desde **2018**.',
    notes: [
      '788 estrellas en GitHub',
      `Destacado en [React Status #257](${REACT_STATUS})`,
      `En producción en [Our World in Data](${OWID})`,
    ],
  },

  storybook: {
    heading: 'Cada ejemplo es editable, en tu navegador',
    body: 'Storybook hace las veces de patio de juegos: cada historia viene con un editor Monaco cargado con las definiciones de tipo reales de la biblioteca. Cambia el código, mira cómo se vuelve a renderizar — sin cuenta de sandbox ni configuración local.',
    primaryCta: 'Abrir Storybook',
    secondaryCta: 'Referencia de la API',
  },

  author: {
    heading: 'Construido y mantenido por Aleksandr Smyshliaev',
    body: 'Publicado por primera vez en 2018, la misma API pública de React 16.8 a 19. Aleksandr es ingeniero frontend — React, Next.js, TypeScript — y actualmente está abierto a trabajo por contrato y a tiempo completo.',
    siteLink: 'asmyshlyaev177.dev',
    githubLink: 'GitHub',
    linkedinLink: 'LinkedIn',
  },
};
