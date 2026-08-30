// Spanish (es) — translation of en/use-cases.ts.
//
// Values only: every key, its order and its type come from the English
// module, and a missing or renamed one is a type error rather than a
// silently English page.
// i18n:meta locale=es source=en/use-cases.ts source-blob=90fca8a33a3a26de44d29e981f98e2a5cd248922 status=translated
import type { UseCasesCopy } from '../types.ts';

export const useCases: UseCasesCopy = {
  hub: {
    heading: 'Casos de uso',
    lede: 'Patrones completos por objetivo: demo en vivo, código e instalación shadcn.',
  },

  netflixRow: {
    name: 'Fila estilo Netflix',
    blurb:
      'Tarjetas tipo póster, flechas al pasar el cursor, degradado en los bordes, arrastre.',
    meta: {
      title: 'Fila horizontal estilo Netflix en React',
      description:
        'Crea una fila de categorías estilo Netflix en React con scroll nativo: flechas al pasar el cursor, desvanecido en los bordes, arrastre para desplazar y seguimiento de visibilidad. Demo en vivo y código completo.',
    },
    jsonLdHeadline:
      'Cómo crear una fila horizontal estilo Netflix en React — sin una librería de carrusel',
    title: 'Fila horizontal estilo Netflix en React',
    lede: 'La fila de pósters que recorres en cualquier plataforma de streaming no es un carrusel: es un menú. Nada encaja a la fuerza, nada se reproduce solo; usa el desplazamiento nativo con inercia, con flechas superpuestas encima. Eso es exactamente lo que ofrece `react-horizontal-scrolling-menu`: tus tarjetas, scroll nativo y visibilidad por elemento para que las flechas sepan cuándo ocultarse.',
    demoHint:
      'Arrástrala o pasa el cursor sobre la fila: las flechas aparecen sobre los bordes y cada una desaparece cuando se llega a ese extremo de la fila.',
    prose: [
      {
        heading: 'Por qué esto no es tarea de un carrusel',
        body: `Una fila estilo Netflix nunca muestra una sola diapositiva a la vez. Los elementos se cortan a propósito en los bordes: el póster cortado es la señal de que "hay más". Los motores de carrusel luchan contra esto: controlan la capa de gestos con transformaciones de JavaScript, encajan en los límites de cada diapositiva y reimplementan la inercia que el navegador de tus usuarios ya tiene. En una fila de tarjetas pulsables, todo eso es sobrecarga innecesaria.

El scroll nativo te da inercia, tacto, trackpad y barra de desplazamiento gratis. Las dos cosas que no te da son las flechas superpuestas y saber qué tarjetas están en pantalla, y esas son justo las dos cosas que añade esta librería, mediante [\`useIsVisible\`](/examples/simple) por elemento y un estado de flechas consciente de los bordes.`,
      },
      {
        heading: 'Los tres detalles que venden el efecto',
        body: `- **Las flechas se superponen al contenido**, no van al lado. Renderízalas con posición absoluta sobre los extremos de la fila (la demo de arriba las pasa a través de \`Header\` para que permanezcan dentro del contexto del menú), muéstralas al pasar el cursor y oculta cada una cuando [\`useLeftArrowVisible\` / \`useRightArrowVisible\`](/examples/simple) indiquen que se ha llegado a ese extremo de la fila.
- **Los bordes se desvanecen.** Una línea de CSS —un gradiente \`mask-image\` en el contenedor de scroll— sustituye la lógica de "asomo" que los plugins de carrusel incluyen para esto.
- **El arrastre no debe disparar clics.** Un arrastre de ratón que termina sobre un póster no debe abrirlo. La [receta de arrastre para desplazar](/examples/mouse-drag) sigue el estado del arrastre y suprime justo ese clic.`,
      },
      {
        heading: 'Escalarlo: filas diferidas y rieles largos',
        body: `Las interfaces de streaming apilan docenas de filas con cientos de tarjetas. Como los elementos son DOM normal dentro de un contenedor de scroll nativo, nada se vuelve a renderizar al desplazarse: el [ejemplo de rendimiento](/examples/performance) mueve 300 elementos sin virtualización. La visibilidad por elemento también te da carga diferida de imágenes gratis: renderiza un marcador de posición hasta que \`useIsVisible\` indique que la tarjeta está en pantalla.

Si tu fila debe dar la vuelta al llegar al final, ese es el único caso en el que la semántica de diapositivas realmente ayuda: consulta la [receta de bucle infinito](/examples/infinite-loop) para la versión de ~60 líneas hecha a mano, antes de recurrir a un motor de carrusel.`,
      },
    ],
    snippet: {
      heading: 'El patrón, en su forma mínima',
      lede: 'Superpón flechas sobre una fila de scroll nativo: la demo de arriba es esta misma estructura más estilos. El código completo, listo para usar, con arrastre y desvanecido en los bordes, se distribuye como el componente shadcn de abajo.',
    },
    shadcn: {
      heading: 'O instálalo como componente shadcn',
      body: 'El elemento del registro [media-row](https://react-horizontal-scrolling-menu.dev/r/media-row.json) es exactamente este patrón —flechas al pasar el cursor, desvanecido con gradiente en los bordes, arrastre para desplazar— como componente con estilos Tailwind en tu `components/ui/`, listo para que lo edites:',
    },
  },

  scrollableTabs: {
    name: 'Pestañas desplazables',
    blurb:
      'Una tira de pestañas que desborda con elegancia y centra la pestaña activa.',
    meta: {
      title: 'Pestañas desplazables en React — sin Material UI',
      description:
        'Pestañas desplazables en React con scroll nativo: la pestaña activa se centra sola, las flechas aparecen solo cuando hacen falta, contenido de pestaña libre. Demo en vivo y código.',
    },
    jsonLdHeadline:
      'Pestañas desplazables en React: scroll nativo, selección centrada, sin Material UI',
    title: 'Pestañas de React que se desplazan como el navegador',
    lede: 'Una barra de pestañas deja de caber en cuanto tu producto supera las seis pestañas. La solución no es una fuente más pequeña: es una barra que se desplaza. El desbordamiento lo gestiona el navegador, al hacer clic en una pestaña esta se centra y las flechas aparecen solo cuando hay a dónde ir.',
    demoHint:
      'Haz clic en una pestaña cerca del borde: se desplaza sola hasta el centro.',
    prose: [
      {
        heading: 'El único comportamiento que importa: centrar al seleccionar',
        body: `Una barra de pestañas desplazable vive o muere por lo que pasa al hacer clic en una pestaña del borde: debería deslizarse hasta el centro y revelar sus vecinas a ambos lados. Aquí es una sola llamada —\`scrollToItem(el, 'smooth', 'center')\`— conectada en el [ejemplo de centrar al hacer clic](/examples/center-on-click). Restaurar la pestaña activa al montar es la misma llamada con \`'auto'\`, mostrada en [guardar y restaurar posición](/examples/save-restore-position).

Las flechas vienen de los mismos datos de visibilidad: \`useLeftArrowVisible\` es falso solo mientras la primera pestaña está fuera de pantalla, así que la flecha izquierda se renderiza justo cuando es útil. Sin código de medición propio, sin observadores de resize propios.`,
      },
      {
        heading:
          'Si te estás quedando corto con las pestañas desplazables de MUI',
        body: `Las pestañas \`variant="scrollable"\` de Material UI son la respuesta correcta dentro del sistema de diseño de Material, hasta que tus "pestañas" dejan de ser pestañas. MUI suelda la barra a la semántica de Tabs: un par \`value\`/\`onChange\`, paneles de pestaña y botones de scroll que MUI oculta en móvil por defecto. En el momento en que tu fila contiene chips, tarjetas, avatares o contenido mixto, o necesita arrastre para desplazar, o necesita saber qué elementos están visibles, estás luchando contra el componente en lugar de usarlo.

Esta librería es la capa de debajo: una fila con scroll y seguimiento de visibilidad, sin opinión sobre qué es una "pestaña". Tu pestaña es cualquier componente con un \`itemId\`: dale estilo con Tailwind, con el \`styled\` propio de MUI o con CSS normal. El estado de selección sigue siendo tuyo, igual que la demo de arriba lo guarda en un único \`useState\`.`,
      },
      {
        heading: 'La accesibilidad sale casi gratis: cuidado con dos huecos',
        body: `Como la barra es un contenedor de scroll nativo, el foco de teclado, el orden de lectura del lector de pantalla y RTL vienen de la plataforma: mover el foco entre pestañas las desplaza a la vista sin escribir código, y [RTL](/examples/rtl) no necesita configuración. Dos cosas siguen dependiendo de ti, igual que en cualquier UI de pestañas: elegir tu patrón ARIA (\`role="tablist"\` si de verdad cambian paneles, \`aria-current\` si las "pestañas" son navegación) y mantener la supresión de clic de la receta de [arrastre para desplazar](/examples/mouse-drag) para que soltar un arrastre nunca active una pestaña.`,
      },
    ],
    snippet: {
      heading: 'El patrón, en su forma mínima',
      lede: 'Las pestañas son botones normales con un `itemId`; seleccionar una la centra. Esta es toda la idea: la demo de arriba añade estilos y arrastre.',
    },
    shadcn: {
      heading: 'O instálalo como componente shadcn',
      body: 'El elemento del registro [scroll-tabs](https://react-horizontal-scrolling-menu.dev/r/scroll-tabs.json) distribuye este patrón basado en datos —pasa `tabs`, `value`, `onValueChange`— como componente editable en tu `components/ui/`:',
    },
  },

  filterChips: {
    name: 'Chips de filtro',
    blurb:
      'Una barra de chips que desplaza los filtros nuevos a la vista sin romper los clics.',
    meta: {
      title: 'Chips de filtro en React en una barra desplazable',
      description:
        'Una barra horizontal de chips de filtro en React: los chips se desplazan de forma nativa, añadir un chip lo lleva a la vista, arrastre sin romper los clics. Demo en vivo y código.',
    },
    jsonLdHeadline:
      'Cómo crear una barra desplazable de chips de filtro en React con scroll nativo',
    title: 'Una barra de chips de filtro que se desplaza, en React',
    lede: 'La fila de chips bajo cualquier barra de búsqueda —temas de YouTube, filtros de tienda, selectores de etiquetas— es un contenedor de scroll de una sola línea lleno de botones de alternar. El 10% difícil es lo que pasa en los bordes: chips nuevos que aparecen fuera de pantalla, arrastres que no deben activar nada y flechas que saben cuándo son inútiles.',
    demoHint:
      'Añade un filtro: la fila desplaza sola el nuevo chip hasta que sea visible.',
    prose: [
      {
        heading: 'Los casos límite son la característica',
        body: `Cualquier fila flex con \`overflow-x: auto\` se desplaza. Una barra de chips se gana el puesto en los detalles:

- **Un chip añadido fuera de pantalla debe anunciarse.** La demo se desplaza hasta cada chip nuevo con \`apiRef.current.scrollToItem(el, 'smooth', 'end')\` tras el renderizado; el [ejemplo de añadir-elemento-y-desplazarse-hasta-él](/examples/add-item-and-scroll-to-it) es exactamente este cableado.
- **Arrastrar para desplazar, hacer clic para alternar, nunca ambos.** Los usuarios de escritorio arrastran la fila como una superficie táctil; soltar sobre un chip no debe activarlo. La [receta de arrastre](/examples/mouse-drag) sigue el gesto y suprime justo ese clic.
- **Flechas solo cuando son útiles.** \`useLeftArrowVisible\` / \`useRightArrowVisible\` están conectadas al mismo IntersectionObserver que todo lo demás, así que las flechas se desactivan en los bordes reales, incluso después de añadir o quitar chips.`,
      },
      {
        heading: 'El estado queda en tus manos',
        body: `La librería desplaza; no controla la selección. Los chips son tus botones —\`aria-pressed\` para alternar en selección múltiple, estado normal para selección única— y el menú solo necesita que cada uno lleve un \`itemId\`. Eso significa que el estado de los chips encaja con lo que ya tengas: parámetros de búsqueda en la URL, una librería de formularios, un modelo de filtro gestionado por el servidor. Eliminar un chip es [quitar un elemento](/examples/add-items); animarlo al salir es el [ejemplo de animación de elementos](/examples/items-animation).`,
      },
      {
        heading: 'Móvil: un aviso sobre el scroll del body',
        body: `En pantallas táctiles, un deslizamiento horizontal dentro de la barra puede arrastrar la página entera con él en algunos navegadores. Si ves eso, el [ejemplo de prevenir el scroll del body](/examples/prevent-body-scroll) muestra el \`touch-action\` y la contención de overscroll para bloquearlo: solo CSS, sin librería de gestos.`,
      },
    ],
    snippet: {
      heading: 'El patrón, en su forma mínima',
      lede: 'Los chips son botones de alternar con un `itemId`; una ref a la API del menú desplaza un chip recién añadido hasta que sea visible.',
    },
    shadcn: {
      heading: 'O instálalo como componente shadcn',
      body: 'El elemento del registro [chip-bar](https://react-horizontal-scrolling-menu.dev/r/chip-bar.json) lo distribuye como componente controlado —`options`, `selected`, `onSelectedChange`— con estilos Tailwind en tu `components/ui/`:',
    },
  },

  categoryRail: {
    name: 'Riel de categorías',
    blurb:
      'Una fila de departamentos de tienda: flechas conscientes de los bordes, imágenes lazy, analítica.',
    meta: {
      title: 'Riel de categorías en React para e-commerce',
      description:
        'Un riel de categorías horizontal en React: scroll nativo, flechas que se desactivan en los bordes, visibilidad por elemento para imágenes diferidas y analítica. Demo y código.',
    },
    jsonLdHeadline:
      'Cómo crear un riel de categorías de e-commerce en React con scroll nativo',
    title: 'Un riel de categorías para tu tienda, en React',
    lede: 'Los rieles de categorías —la fila pulsable de departamentos sobre la cuadrícula de una tienda— son los contenedores de scroll con más tráfico en e-commerce, y son menús, no carruseles: cada mosaico es un enlace, nada encaja a la fuerza, y que medio mosaico asome en el borde es justo lo que invita a desplazarse.',
    demoHint:
      'Arrastra el riel o usa las flechas: se desactivan en los extremos reales de la fila.',
    prose: [
      {
        heading: 'Por qué el scroll nativo gana en una tienda',
        body: `Los rieles de tienda viven sobre el pliegue, en páginas donde peleas por cada punto de Lighthouse. Un motor de carrusel distribuye decenas de kilobytes de emulación de gestos para hacer lo que el navegador ya hace de forma nativa; esta librería pesa ≈5.7 kB min+gzip y deja el scroll a la plataforma, así que no hay parpadeo de hidratación: el riel se desplaza antes de que se cargue tu JavaScript, lo que también significa que funciona en el HTML renderizado en el servidor que ven tus rastreadores. Esta misma página es la prueba, renderizada en el servidor: la demo de arriba se desplaza con JavaScript desactivado.

La [página de comparación](/compare) tiene la tabla completa frente a Swiper, Embla, keen-slider y react-slick.`,
      },
      {
        heading: 'El seguimiento de visibilidad es una función de tienda',
        body: `La visibilidad por elemento suena como un detalle de implementación hasta que la aplicas al merchandising:

- **Imágenes diferidas** — renderiza un mosaico marcador de posición hasta que \`useIsVisible\` indique que está en pantalla.
- **Analítica de impresiones** — \`getVisible()\` (en vivo en la [demo del hero](/) de la página de inicio) te dice exactamente qué categorías se vieron, no solo que el riel se renderizó.
- **Flechas conscientes de los bordes** — se desactivan u ocultan en los extremos reales, incluso después de que las categorías se carguen de forma asíncrona, como en el [ejemplo de añadir elementos](/examples/add-items).`,
      },
      {
        heading: 'Ajústalo a tu sistema de diseño',
        body: `Los mosaicos son tus componentes —tarjetas con imagen, círculos, píldoras de texto— cada uno con un \`itemId\`. La altura y el ancho vienen de tu CSS; el menú no impone dimensiones. Avanza de un elemento en uno como un slider de producto con [one-item-scroll](/examples/one-item-scroll), muestra un [indicador de progreso](/examples/progress) del scroll, o distribúyelo en RTL para tiendas en árabe y hebreo con el [ejemplo RTL](/examples/rtl): el riel es composición, no configuración.`,
      },
    ],
    snippet: {
      heading: 'El patrón, en su forma mínima',
      lede: 'Mosaicos con un `itemId`, flechas a partir de los hooks de visibilidad: el riel completo tiene menos de cuarenta líneas.',
    },
    shadcn: {
      heading: 'O instálalo como componente shadcn',
      body: 'El elemento base del registro [scroll-menu](https://react-horizontal-scrolling-menu.dev/r/scroll-menu.json) es este riel —flechas con estilo shadcn, arrastre para desplazar, barra de scroll oculta— instalado en tu `components/ui/` y con estilos según tus tokens:',
    },
  },
};
