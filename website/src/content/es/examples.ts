// Spanish (es) — translation of en/examples.ts.
//
// Values only: every key, its order and its type come from the English
// module, and a missing or renamed one is a type error rather than a
// silently English page.
// i18n:meta locale=es source=en/examples.ts source-blob=60d5f83e262100978eb4d1dc9565659367d156c4 status=translated
import type { ExamplesCopy } from '../types.ts';

/** Copy for the example pages, keyed by the slugs in `examples-manifest.ts`. */
export const examples: ExamplesCopy = {
  'add-item-and-scroll-to-it': {
    meta: {
      title: 'Chips de filtro en React: añadir un elemento y desplazarse a él',
      description:
        'Chips de filtro en un scroller horizontal de React: añade un elemento y luego desplázate a él con apiRef y scrollToItem tras renderizarse. Demo en vivo y fuente completa.',
    },
    title:
      'Añadir un elemento y desplazarse a él — el patrón de chips de filtro',
    lede: 'Una barra de chips crece cuando el usuario elige un filtro, y el nuevo chip debe acabar en pantalla, no oculto tras el borde derecho. La trampa: no puedes desplazarte a un elemento que aún no se ha renderizado. Este ejemplo divide el trabajo entre un manejador de clic y un efecto.',
    demoHint:
      'Pulsa «Añadir filtro»: el chip aparece al final y la fila se desplaza para mostrarlo. La x elimina un chip.',
    prose: [
      {
        heading: 'Cómo funciona',
        body: 'El menú recibe un `apiRef`, que expone la API completa fuera del árbol de componentes. `addItem` hace dos cosas: guarda el nuevo id en una ref `lastAdded` y añade el elemento al estado. A propósito no se desplaza — en ese momento el chip es solo estado, no DOM.',
      },
      {
        heading: 'Por qué el desplazamiento vive en un efecto',
        body: '`getItemElementById` busca el elemento en el DOM, así que el desplazamiento solo puede ocurrir después de que React haya confirmado el nuevo elemento. Un `useEffect` dependiente de `items` se ejecuta exactamente en ese punto: lee `lastAdded`, lo limpia y llama a `apiRef.current.scrollToItem(el, ’smooth’, ’end’)`. Limpiar la ref importa — los re-renderizados por cualquier otra razón (selección, flechas) también alcanzan el efecto y no deben volver a desplazar.',
      },
      {
        heading: 'Notas',
        body: `
          - \`lastAdded\` es una ref, no estado: escribirla no debe causar por sí mismo un render, y su valor solo tiene sentido para la siguiente ejecución del efecto.
          - \`’end’\` alinea el nuevo chip con el borde derecho de la fila; \`’center’\` funciona igual si lo quieres en medio.
          - Las flechas aquí usan los hooks \`useLeftArrowVisible()\` y \`useRightArrowVisible()\` — una forma más corta del par \`useIsVisible(’first’/’last’)\`.
          - La barra de desplazamiento se oculta con CSS simple sobre la clase \`scroll-container\` de la biblioteca; el desplazamiento en sí sigue siendo nativo.
        `,
      },
    ],
  },

  'bottom-arrows': {
    meta: {
      title:
        'Flechas de carrusel debajo del menú: colocación personalizada en React',
      description:
        'Coloca las flechas del carrusel debajo de la fila en React: la prop Footer de ScrollMenu renderiza cualquier diseño bajo el menú, flechas incluidas. Demo en vivo y fuente completa.',
    },
    title:
      'Pon las flechas debajo del menú — o en cualquier parte de tu diseño',
    lede: 'Las flechas no son cromo integrado, son componentes que pasas tú, así que la colocación es una decisión de diseño, no una configuración de la biblioteca. Este ejemplo no pasa `LeftArrow` ni `RightArrow` en absoluto y renderiza ambos botones en la ranura `Footer` bajo la fila, junto al contenido ordinario.',
    demoHint:
      'Las flechas están debajo de la fila — leen el mismo VisibilityContext, así que siguen deshabilitándose en los extremos.',
    prose: [
      {
        heading: 'Cómo funciona',
        body: '`ScrollMenu` acepta un componente `Footer` y lo renderiza debajo del contenedor de desplazamiento, dentro del mismo `VisibilityContext.Provider` que los elementos. El pie de la historia es un div flex corriente con algo de texto y los dos botones de flecha. Como el contexto le llega, cada botón llama a `React.useContext(VisibilityContext)` y obtiene exactamente la API que tendría en las ranuras laterales — nada cambia en las propias flechas.',
      },
      {
        heading: 'El estado de las flechas, como siempre',
        body: '`useLeftArrowVisible()` y `useRightArrowVisible()` informan de si la fila ya está en ese extremo; la historia mapea el resultado a `disabled` y atenúa el botón. Los clics llaman a `scrollPrev()` y `scrollNext()`. Nada de esto sabe ni le importa dónde está montado el botón.',
      },
      {
        heading: 'Notas',
        body: `
          - \`Header\` es la ranura espejo sobre la fila, con el mismo contrato.
          - Las props laterales \`LeftArrow\`/\`RightArrow\` son solo las variantes preposicionadas: los mismos componentes de flecha funcionan en cualquier sitio.
          - El pie no es solo para flechas: cualquier componente que lea \`VisibilityContext\` tiene allí la API completa.
          - El manejador \`onWheel\` de la historia pagina con la rueda del ratón y deja los gestos de trackpad al desplazamiento nativo.
        `,
      },
    ],
  },

  autoplay: {
    meta: {
      title: 'Autoplay de carrusel en React con pausa accesible',
      description:
        'Autoplay para un menú de desplazamiento de React: useInterval llama a scrollNext a través de apiRef, con pausa al pasar el ratón, con el foco, al tocar y con movimiento reducido. Demo en vivo y fuente completa.',
    },
    title: 'Autoplay con comportamiento de pausa accesible',
    lede: 'La parte de avanzar es una línea: un temporizador que llama a `scrollNext()` a través de `apiRef`, sobre el mismo núcleo de bucle infinito. La ingeniería está en cuándo *no* avanzar: el ratón encima, el tacto, el foco del teclado, un botón de Pausa, las pestañas ocultas, los carriles fuera de pantalla y las preferencias de movimiento reducido — todo detiene el temporizador, cada uno por una razón distinta.',
    demoHint:
      'Pasa el ratón, toca o tabula al carril y se pausa; el botón de Pausa lo detiene hasta que pulses Reproducir.',
    prose: [
      {
        heading: 'Cómo funciona',
        body: '`useInterval(cb, active ? interval : null)` es todo el planificador. `active` reúne cuatro banderas — pausado por el usuario, por el ratón, por el foco y `prefers-reduced-motion` — y pasar `null` elimina el temporizador por completo, de modo que reanudar inicia un intervalo fresco y completo en lugar de dispararse a mitad de ciclo justo después de que se vaya el puntero.',
      },
      {
        heading: 'Tics que se niegan a correr',
        body: 'Incluso un temporizador activo comprueba antes de desplazarse: el tic lee `api.menuVisible.current` y `document.visibilityState`, y salta si cualquiera dice que no. Una pestaña oculta congela IntersectionObserver, así que desplazarse allí significa avanzar a ciegas y que el registro del teletransporte se desvíe; un carril desplazado fuera de la página simplemente no debe moverse. Los tics saltados no cuestan nada — el siguiente vuelve a comprobar.',
      },
      {
        heading: 'La superficie de pausa',
        body: 'El ratón y el tacto pausan mediante manejadores de envoltorio, el foco del teclado mediante `onFocusCapture`/`onBlurCapture`, y `prefers-reduced-motion` mantiene el autoplay totalmente apagado. El botón de Pausa explícito es lo que WCAG 2.2.2 exige de verdad para el contenido que avanza solo — la pausa al pasar el ratón por sí sola no cuenta.',
      },
      {
        heading: 'Notas',
        body: `
          - El conmutador de Pausa está fuera del envoltorio de hover — dentro, pulsar Pausa también pausaría por hover, y el botón nunca podría observarse haciendo nada.
          - El bucle viene del mismo hook de clonar-y-teletransportar \`useInfiniteLoop\` que el ejemplo de bucle infinito; el autoplay solo añade el temporizador y las banderas de pausa.
          - La animación de desplazamiento es el desplazamiento suave nativo del navegador — \`transitionDuration\` no tiene efecto con el \`noPolyfill\` por defecto.
        `,
      },
    ],
  },

  'mouse-drag': {
    meta: {
      title:
        'Arrastrar para desplazarse en React: menú horizontal sin romper los clics',
      description:
        'Desplazamiento por arrastre con el ratón para una lista horizontal de React: un umbral de 5px separa los arrastres de los clics, para que los elementos sigan siendo clicables. Demo en vivo y fuente completa.',
    },
    title: 'Arrastrar para desplazarse con el ratón — sin romper los clics',
    lede: 'Los usuarios táctiles desplazan una lista horizontal de forma nativa, pero los de ratón necesitan cableado: mantener, arrastrar, soltar. Lo difícil no es mover la fila — es que una implementación ingenua convierte cada arrastre soltado en un clic accidental de elemento. Este ejemplo separa ambas cosas con una pequeña clase `DragDealer` y tres props de ratón.',
    demoHint:
      'Agarra cualquier parte de la fila y arrastra. Los elementos siguen siendo clicables — se suprime el clic tras un arrastre.',
    prose: [
      {
        heading: 'Cómo funciona',
        body: '`ScrollMenu` expone manejadores de ratón currificados — `onMouseDown`, `onMouseUp` y `onMouseMove` reciben cada uno el objeto API y devuelven un manejador de evento normal. La instancia `DragDealer` rastrea una coordenada ancla: en cada movimiento aplica la delta directamente a `scrollContainer.current.scrollLeft`. El resto lo hace el desplazamiento nativo — sin transformaciones, sin física, y la barra de desplazamiento sigue siendo real.',
      },
      {
        heading: 'Por qué los clics siguen funcionando',
        body: 'Un arrastre solo empieza después de que el puntero se mueve más de 5px, así que un clic normal nunca desplaza. La otra dirección es el clásico bug: el `onClick` del elemento se dispara después de `mouseup`, así que soltar un arrastre encima de una tarjeta la seleccionaría. `dragStop` limpia la bandera de aplicación de inmediato pero mantiene `dragging` un frame de animación más — los manejadores de clic lo comprueban y se salen.',
      },
      {
        heading: 'Detalles que vale la pena robar',
        body: `
          - \`dragStart\` cancela el reinicio pendiente del gesto anterior — sin él, un segundo arrastre rápido puede aplicar una delta obsoleta.
          - \`onMouseLeave\` en el envoltorio también llama a \`dragStop\`, de modo que salir de la fila a mitad de arrastre no la deja atascada en el estado de arrastre.
          - El tacto no necesita nada de esto — el contenedor es un contenedor de desplazamiento real, así que deslizar ya funciona.
        `,
      },
    ],
  },

  'save-restore-position': {
    meta: {
      title:
        'Conservar la posición de desplazamiento en React: restaurar al remontar o volver',
      description:
        'Guarda el desplazamiento en sessionStorage en cada onUpdate y restáuralo en onInit, para que la posición sobreviva a remontajes y recargas. Demo en vivo y fuente completa.',
    },
    title: 'Guardar y restaurar la posición de desplazamiento',
    lede: 'Un carril horizontal olvida su desplazamiento cada vez que se desmonta: sal por la ruta y vuelve, colapsa una sección, y salta al inicio. Este ejemplo guarda el desplazamiento mientras el usuario se desplaza y lo vuelve a escribir al montar, para que el menú reaparezca exactamente donde lo dejó.',
    demoHint:
      'Desplaza la fila a algún sitio, desmonta el menú y móntalo de nuevo — el carril vuelve al mismo desplazamiento.',
    prose: [
      {
        heading: 'Cómo funciona',
        body: 'Dos callbacks cargan con toda la función. `onUpdate` se dispara cuando cambia el estado de visibilidad del menú mientras el usuario se desplaza; `savePos` lee `api.scrollContainer.current.scrollLeft` y lo escribe en `sessionStorage`. En el siguiente montaje, `onInit` asigna el valor guardado directamente a `scrollLeft` — una escritura de propiedad simple, así que la restauración es instantánea en lugar de una animación que se reproduce ante el usuario.',
      },
      {
        heading: 'Sobrevivir a remontajes, recargas y navegación atrás',
        body: '`sessionStorage` sobrevive al componente: los cambios de ruta en el cliente, los renders condicionales y las recargas de página completas vuelven al desplazamiento guardado, y el valor es por pestaña, de modo que dos pestañas no se sobrescriben. Para la navegación por historial, la historia también fija `window.history.scrollRestoration = ’manual’`, evitando que la restauración de desplazamiento del navegador luche contra la manual al ir atrás y adelante.',
      },
      {
        heading: 'Notas',
        body: `
          - Restaurar con \`scrollLeft\` crudo es exacto al píxel y no le importa qué elementos existan — sin id que recordar, sin nada que buscar.
          - El botón Recargar de la historia cambia la \`key\` del menú para forzar un remontaje; el conmutador desmontar/montar de la demo es la misma prueba hecha explícita.
          - Reiniciar solo elimina la clave de almacenamiento — el siguiente montaje empieza de cero, como una primera visita.
        `,
      },
    ],
  },

  'one-item': {
    meta: {
      title:
        'Slider de un elemento por vista en React: elementos de ancho completo',
      description:
        'Elementos de ancho completo en un menú de desplazamiento horizontal de React: min-width 100% en el envoltorio del elemento da un slider de un elemento por vista. Demo en vivo y fuente completa.',
    },
    title:
      'Un elemento por vista: un slider de ancho completo desde el mismo menú',
    lede: 'No hay un modo de slider que activar. El menú dispone lo que diga tu CSS, así que una regla — `min-width: 100%` en el envoltorio del elemento de la biblioteca — convierte el mismo componente en un slider: cada tarjeta llena la vista, y las flechas de paginación normales avanzan exactamente un elemento.',
    demoHint:
      'Pagina con las flechas — cada diapositiva tiene exactamente una vista de ancho, y cada diapositiva informa de su propia visibilidad.',
    prose: [
      {
        heading: 'Cómo funciona',
        body: 'La historia envuelve el menú en un contenedor con estilos que apunta a `.react-horizontal-scrolling-menu--item` — el div que la biblioteca renderiza alrededor de cada hijo — y le da `minWidth: ’100%’` más centrado flex. Cada envoltorio ahora abarca todo el contenedor de desplazamiento, así que una sola tarjeta cabe en la vista. Las flechas son las estándar: `scrollPrev()` y `scrollNext()` paginan por el grupo visible, y cuando el grupo visible es un elemento, una página y un elemento son lo mismo.',
      },
      {
        heading: 'Las flechas y la rueda',
        body: 'El estado de las flechas viene de `useLeftArrowVisible()` y `useRightArrowVisible()` — cada una devuelve true cuando la fila está en ese extremo, y la historia lo mete en `disabled` y atenúa el botón. La prop `onWheel` recibe el objeto API junto con el evento, así que una rueda vertical pagina la fila por el signo de `deltaY`. Primero husmea trackpads: cualquier delta horizontal, o una vertical menor de 15, se asume como gesto de trackpad y se deja al desplazamiento nativo.',
      },
      {
        heading: 'Notas',
        body: [
          '- `itemId` en cada hijo es el único requisito duro: así se rastrean los elementos y se desplaza a ellos.',
          '- Las tarjetas siguen llamando a `useIsVisible(itemId, true)`; con un elemento por vista, cada diapositiva fuera de pantalla informa `visible: false`.',
          '- La barra de desplazamiento se oculta con CSS simple en el contenedor de desplazamiento (`scrollbar-width: none` más el pseudoelemento de WebKit) — esa elección es tuya, no de la biblioteca.',
          '- El ancho vive enteramente en tu hoja de estilos. Cambia 100% por 50% y tienes un slider de dos por vista; la biblioteca no mide nada.',
        ].join('\n'),
      },
    ],
  },

  performance: {
    meta: {
      title: 'Rendimiento de lista horizontal en React: 5.000 elementos',
      description:
        'Un menú horizontal de React renderizando 5.000 elementos con desplazamiento nativo: tarjetas memoizadas, un IntersectionObserver, sin virtualización. Demo en vivo y fuente completa.',
    },
    title: '5.000 elementos en una fila — sin necesidad de virtualización',
    lede: 'El consejo habitual con unos cientos de elementos es recurrir a la virtualización. Este ejemplo renderiza 5.000 nodos DOM reales en un solo `ScrollMenu` y se mantiene responsivo — el overflow nativo hace el movimiento, un IntersectionObserver hace la observación, y React no hace casi nada.',
    demoHint:
      'Arrastra el carril o pagina con las flechas — cada una de las 5.000 tarjetas es un nodo DOM real; nada está ventaneado.',
    prose: [
      {
        heading: 'Dónde no ocurre el trabajo',
        body: 'El desplazamiento nunca entra en React. El carril es un contenedor overflow genuino: la rueda y el tacto lo desplazan de forma nativa, y el cableado del arrastre solo asigna a `scrollContainer.current.scrollLeft` — sin estado, sin re-renderizados por frame. La visibilidad es una sola instancia de IntersectionObserver observando los 5.000 elementos; los callbacks llegan en lotes, y solo los componentes que se suscribieron con `useIsVisible` se actualizan cuando su propio elemento cambia. No hay matemática de desplazamiento por elemento en ningún sitio.',
      },
      {
        heading: 'Qué afina la historia',
        body: '`Card` se envuelve en `React.memo` con un comparador sobre `selected` y `title`, de modo que seleccionar una tarjeta no reconcilia las otras 4.999. La lectura de visibilidad pasa por `useDeferredValue`: tras un salto de página, cientos de elementos cambian de estado a la vez, y diferirlo saca ese estallido del camino crítico de la interacción que lo causó. `noPolyfill={true}` hace que los desplazamientos programáticos usen el `scrollIntoView` del propio navegador en lugar del polyfill de desplazamiento suave. El arrastre es el mismo patrón `DragDealer` del ejemplo mouse-drag.',
      },
      {
        heading: 'El compromiso que admite esta página',
        body: 'El carril de demo de arriba no se renderiza en el servidor: 5.000 tarjetas serializan a casi un megabyte de HTML, así que el carril se monta solo en el cliente detrás de un marcador de posición de la misma altura y no hay cambio de diseño. Esa es la factura real de este tamaño — el navegador maneja 5.000 nodos vivos con comodidad, pero enviarlos como carga útil de SSR es otra decisión. En algún punto de las decenas de miles de nodos, la memoria y el coste del render inicial también alcanzan; ahí es donde el ventaneo deja de ser opcional.',
      },
      {
        heading: 'Notas',
        body: [
          '- El DOM de las 5.000 tarjetas se construye una vez, al montar — `React.memo` convierte los renders posteriores del padre en no-ops para cada tarjeta.',
          '- Las flechas paginan más o menos un viewport a la vez, así que cruzar todo el carril con flechas es lento a propósito — los flicks de arrastre o los saltos de `scrollToItem` encajan mejor con esta escala.',
          "- Las flechas siguen funcionando con `useIsVisible('first')` y `useIsVisible('last')` — el mismo mecanismo de observador que un menú de diez elementos, con 500 veces el número de elementos.",
        ].join('\n'),
      },
    ],
  },

  progress: {
    meta: {
      title:
        'Indicador de progreso de desplazamiento horizontal en React para un carrusel',
      description:
        'Una barra de progreso para un menú horizontal de React: suscríbete a onUpdate, cuenta los elementos visibles, deriva la página actual. Demo en vivo y fuente completa de la historia.',
    },
    title:
      'Añadir un indicador de progreso de desplazamiento a un menú horizontal',
    lede: 'Un carrusel que oculta su barra de desplazamiento aún le debe al usuario una respuesta a «¿cuánto queda?». El menú ya lo sabe: rastrea la visibilidad de cada elemento, así que la posición es cuestión de contar. La historia renderiza botones de página numerados más contadores de elementos restantes a izquierda/derecha a partir de esos datos; esta demo destila la misma matemática en una barra de progreso.',
    demoHint:
      'Desplaza la fila, arrástrala o usa las flechas — la barra se llena página a página y el contador muestra dónde estás.',
    prose: [
      {
        heading: 'Cómo funciona',
        body: 'El indicador se pasa como prop `Footer`, así que `ScrollMenu` lo renderiza dentro del menú donde está disponible `VisibilityContext`. Del contexto toma `items` — el mapa detrás del seguimiento de visibilidad — y se suscribe con `items.subscribe(’onUpdate’, cb)`. Ese evento se dispara en cada callback de IntersectionObserver, así que la historia lo hace debounce (un timeout más `requestAnimationFrame`) antes de leer `items.getVisible()`.',
      },
      {
        heading: 'De elementos visibles a número de página',
        body: 'El número de elementos visibles es el tamaño de página. El total de páginas es `Math.ceil(items.size / visibleItemsLen)`; la página actual viene del `index` de la última entrada visible. La historia las convierte en botones de página clicables — cada uno llama a `scrollToItem(getItemByIndex(itemInd))`, dirigiéndose a un elemento por posición sin conocer su id — y deriva los contadores de elementos a la izquierda y a la derecha de los mismos números. La barra de la demo es simplemente `currentPage / totalPages` como porcentaje de ancho.',
      },
      {
        heading: 'Notas',
        body: [
          '- Nada se mide en píxeles — la matemática corre enteramente sobre datos de visibilidad, así que sigue funcionando cuando los anchos de los elementos difieren.',
          '- Redimensiona el viewport y el tamaño de página le sigue: caben más elementos, `getVisible()` devuelve más entradas, y el número de páginas se recalcula en la siguiente actualización.',
          '- El efecto devuelve una limpieza que llama a `items.unsubscribe` y limpia el temporizador pendiente — omítela y un pie desmontado seguirá siendo llamado.',
          '- Antes del primer informe del observador `getVisible()` está vacío; la historia devuelve `null` hasta entonces, y la demo pinta una pista vacía.',
        ].join('\n'),
      },
    ],
  },

  'scroll-to-item': {
    meta: {
      title:
        'Desplazarse a un elemento en una lista horizontal de React: scrollToItem',
      description:
        'Desplaza una lista horizontal de React a cualquier elemento por id: onInit entrega la api y scrollToItem trae el objetivo a la vista. Demo en vivo y fuente completa.',
    },
    title: 'Desplazarse a un elemento concreto en una lista horizontal',
    lede: 'Enlazar en profundidad con una fila: un chat se abre en la conversación activa, una galería en la foto que compartiste. El contenedor de desplazamiento vive dentro de la biblioteca, pero no necesitas una ref a su DOM — `onInit` te entrega la api, y `scrollToItem` hace el posicionamiento.',
    demoHint:
      'El carril no se monta en Tokyo — onInit salta directamente a quito. Arrastra a otro sitio y remonta para verlo aterrizar allí de nuevo.',
    prose: [
      {
        heading: 'Cómo funciona',
        body: '`ScrollMenu` acepta un callback `onInit` y lo llama una vez que el menú se ha renderizado y medido sus elementos, pasando el mismo objeto api que `VisibilityContext` proporciona dentro. El manejador busca el elemento con `getItemElementById(id)` y se lo pasa a `scrollToItem(item, ’auto’, ’start’)`. Como `onInit` solo se dispara tras la medición, la búsqueda no puede volver vacía para un elemento renderizado — sin `setTimeout`, sin bucle de reintentos.',
      },
      {
        heading: 'Comportamiento y alineación',
        body: 'La historia pasa `’auto’` y `’start’`: `’auto’` salta sin animación, que es lo que quieres para una posición inicial — el usuario nunca ve el carril en el primer elemento. `’start’` alinea el borde izquierdo del elemento con el carril. Para desplazamientos por clic, la misma llamada toma `’smooth’` y `’center’` — ese es el ejemplo de centrar al hacer clic de abajo.',
      },
      {
        heading: 'Notas',
        body: [
          '- `getItemElementByIndex` es la alternativa posicional cuando conoces la ranura pero no el id.',
          '- El id que pasas es el `itemId` del elemento — la misma clave que el menú usa para el seguimiento de visibilidad.',
          '- La demo repite el comportamiento remontando el menú con una `key` nueva; cada montaje fresco vuelve a ejecutar `onInit`.',
        ].join('\n'),
      },
    ],
  },
  'center-on-click': {
    meta: {
      title:
        'Pestañas desplazables en React: centrar la pestaña activa al hacer clic',
      description:
        'Pestañas desplazables en React sin Material UI: hacer clic en una pestaña la centra con scrollToItem(el, "smooth", "center"). Demo en vivo y fuente completa de la historia.',
    },
    title: 'Centrar el elemento clicado — el patrón de pestañas desplazables',
    lede: 'El comportamiento que toda franja de pestañas necesita y ningún contenedor de desplazamiento da gratis: haz clic en una pestaña cerca del borde y se desliza al medio, revelando sus vecinas a ambos lados. Aquí es una sola llamada a la API — sin Material UI, sin medir, sin matemática de desplazamiento.',
    demoHint:
      'Haz clic en una pestaña cerca de cualquiera de los bordes — se activa y se centra en la fila.',
    prose: [
      {
        heading: 'Cómo funciona',
        body: '`handleItemClick` está currificado: toma el `itemId` y devuelve una función que espera el objeto API. El clic primero guarda el id en el estado `selected`, luego llama a `api.getItemElementById(itemId)` para encontrar el elemento DOM real y se lo pasa a `api.scrollToItem(item, ’smooth’, ’center’)`. Un clic, dos efectos: la pestaña se selecciona y se centra.',
      },
      {
        heading: 'De dónde viene la API',
        body: 'El componente padre nunca guarda una ref de API. Cada `Card` lee la API completa de `VisibilityContext` — disponible para cualquier hijo de `ScrollMenu` — y la pasa al manejador de clic: `onClick(visibility)`. Si en cambio necesitas desplazarte desde fuera del menú, ese es el patrón `apiRef` del ejemplo scroll-to-item.',
      },
      {
        heading: 'Notas',
        body: [
          '- El tercer argumento de `scrollToItem` toma los mismos valores que la opción `inline` de `scrollIntoView` — `’start’`, `’center’` o `’end’`.',
          '- Las tarjetas son enfocables (`role="button"`, `tabIndex=0`) y manejan Enter en `onKeyDown`, así que los usuarios de teclado obtienen el mismo seleccionar-y-centrar.',
          '- El manejador `onWheel` mapea las deltas de la rueda del ratón a `scrollNext`/`scrollPrev`, pero se retira con los trackpads — una delta horizontal o una vertical diminuta se asume como gesto y se deja nativa.',
          '- Las flechas se deshabilitan solas con los atajos `useIsVisible(’first’)` y `useIsVisible(’last’)`.',
        ].join('\n'),
      },
    ],
  },

  'swipe-desktop': {
    meta: {
      title:
        'Deslizar con el ratón en escritorio: gesto de flick de carrusel en React',
      description:
        'Deslizamiento de escritorio para un menú horizontal de React: rastrea el pulsar/soltar del ratón, y soltar más allá de 50px hace flick a la siguiente página con un deslizamiento suave. Demo y fuente completa.',
    },
    title: 'Deslizar en escritorio: un flick de ratón que pagina el menú',
    lede: 'El arrastre para desplazarse mueve la fila 1:1 con el cursor. Este es el otro gesto de ratón: un flick. Pulsa, muévete al menos 50px, suelta — y el menú se desliza una página en esa dirección mediante `scrollNext` o `scrollPrev`. La fila no sigue al puntero en absoluto; el deslizamiento es el desplazamiento programático suave de la biblioteca, que es lo que da a la suelta su sensación de inercia.',
    demoHint:
      'Pulsa en cualquier parte de la fila, muévete a izquierda o derecha al menos 50px y suelta — el menú se desliza una página. Los movimientos más cortos no hacen nada.',
    prose: [
      {
        heading: 'Cómo funciona',
        body: 'Un hook `useSwipe` devuelve las tres props de ratón currificadas que `ScrollMenu` espera — cada una recibe el objeto API y devuelve un manejador de evento normal. `onMouseDown` ancla el `clientX` del puntero en una ref, `onMouseMove` sigue sobrescribiendo la coordenada final, y `onMouseUp` compara ambas: una diferencia horizontal más allá de `minSwipeDistance` (50px) llama a `apiObj.scrollNext()` para un flick hacia la izquierda o `apiObj.scrollPrev()` para uno hacia la derecha.',
      },
      {
        heading: 'Por qué los clics no necesitan manejo especial',
        body: 'En el ejemplo de arrastre, soltar un arrastre sobre una tarjeta la clicaría, así que una bandera `dragging` tiene que sobrevivir al gesto por un frame. Un flick esquiva todo el problema: por debajo del umbral de 50px `onMouseUp` no hace nada, así que un clic es solo un clic — y más allá de él, el puntero ya se ha ido de la tarjeta que pulsó. Sin banderas, sin manejadores suprimidos.',
      },
      {
        heading: 'Qué añade la historia para tacto y rueda',
        body: 'La historia también fija el paneo táctil nativo: React 18+ registra los listeners de `touchmove` como pasivos, así que `preventDefault` solo funciona desde un listener no pasivo. Un efecto llega al contenedor de desplazamiento a través de `apiRef` (`ref.current.scrollContainer.current`) y engancha uno con `{ passive: false }`. Su manejador `onWheel` también pagina el menú, con una heurística — un `deltaX` distinto de cero o un `deltaY` pequeño se asume como trackpad y se deja en paz.',
      },
      {
        heading: 'Notas',
        body: [
          '- Las coordenadas viven en una ref, no en estado — rastrear `mousemove` en estado re-renderizaría en cada píxel.',
          '- La demo re-ancla la coordenada final en `mousedown`, de modo que una posición sobrante del gesto anterior nunca puede contar para un nuevo deslizamiento.',
          '- Afina `minSwipeDistance` a gusto: más bajo es más ágil, más alto tolera clics más descuidados. La variante táctil de esta receta usa 20px.',
        ].join('\n'),
      },
    ],
  },

  'mobile-swipe-only': {
    meta: {
      title:
        'Ocultar las flechas del carrusel en móvil: desplazamiento React solo táctil',
      description:
        'Flechas en escritorio, desplazamiento solo táctil en móvil para un menú horizontal de React: una comprobación matchMedia de pointer: coarse las oculta. Demo en vivo y fuente completa.',
    },
    title:
      'Oculta las flechas en móvil — desplazamiento solo táctil en pantallas pequeñas',
    lede: 'En una pantalla táctil, los botones de flecha son peso muerto: deslizar es nativo, los pulgares cubren los objetivos de toque y cada flecha se come ancho de la fila. La demo mantiene las flechas para los usuarios de ratón y las desmonta cuando el puntero es un dedo; la historia va más allá y sustituye el paneo nativo por gestos explícitos de deslizar-para-paginar.',
    demoHint:
      'Ábrelo en un teléfono o activa la emulación táctil en DevTools — las flechas desaparecen y deslizar hace todo el trabajo.',
    prose: [
      {
        heading: 'Cómo oculta la demo las flechas',
        body: '`LeftArrow` y `RightArrow` son props opcionales — pasa `undefined` y la ranura no se renderiza en absoluto, así que no hay nada que ocultar con CSS y no quedan botones en el orden de tabulación. El conmutador es una comprobación `matchMedia(’(pointer: coarse)’)` en un efecto: el servidor no puede saber el tipo de puntero, así que el primer pintado es desktop-first con flechas, y la hidratación las elimina una vez confirmado un puntero grueso. Un listener `change` lo mantiene vivo — la emulación de dispositivo de DevTools lo voltea sin recargar.',
      },
      {
        heading: 'Qué hace la historia al tocar',
        body: 'El hook `useSwipe` de la historia convierte el paneo libre en paginación. Las props currificadas `onTouchStart`, `onTouchMove` y `onTouchEnd` reciben cada una el objeto API; start reinicia la coordenada final y registra `targetTouches[0].clientX`, move la rastrea, y end mide la distancia recorrida. Más allá de `minSwipeDistance` (20px) llama a `apiObj.scrollPrev()` o `apiObj.scrollNext()` — una página suave por deslizamiento, sea cual sea la velocidad del dedo.',
      },
      {
        heading: 'Suprimir el desplazamiento táctil nativo',
        body: 'Para que la paginación sea el único movimiento, el paneo del navegador tiene que detenerse, y React 18+ registra los listeners de `touchmove` como pasivos, donde `preventDefault` se ignora. El efecto de la historia llega al elemento de desplazamiento real a través de `apiRef` (`ref.current.scrollContainer.current`) y engancha su propio listener con `{ passive: false }`, donde la llamada funciona.',
      },
      {
        heading: 'Notas',
        body: [
          '- Elige el valor por defecto de SSR a propósito: renderizar las flechas primero favorece a los crawlers y usuarios de escritorio, y los dispositivos táctiles las pierden justo tras la hidratación.',
          '- `(pointer: coarse)` apunta a la entrada, no al tamaño de pantalla — una ventana de escritorio estrecha conserva sus flechas, una tableta no.',
          '- Si solo quieres ocultar las flechas y mantener el deslizamiento nativo (el comportamiento de la demo), omite el efecto `touchmove` de la historia — el paneo libre y las flechas ocultas conviven bien.',
          '- El umbral táctil es de 20px frente a los 50px del flick de escritorio — mira el ejemplo swipe-on-desktop para la variante de ratón.',
        ].join('\n'),
      },
    ],
  },

  'infinite-loop': {
    meta: {
      title:
        'Menú de desplazamiento con bucle infinito en React: un carrusel continuo',
      description:
        'Un carrusel en bucle continuo en React sin librería de carrusel: clones en ambos extremos y un teletransporte de scrollLeft cuando el desplazamiento se asienta. Demo y fuente completa.',
    },
    title: 'Un menú en bucle infinito, construido sobre la API pública',
    lede: 'El clásico truco de carrusel de clonar-y-teletransportar, implementado con cero cambios en la biblioteca: la fila se clona en ambos extremos, y cuando el desplazamiento se asienta dentro de una zona de clones, `scrollLeft` salta exactamente la longitud de un bucle. Los frames a ambos lados del salto son idénticos, así que nada parece moverse. Flechas, rueda, tacto y arrastre de ratón cruzan todos la costura.',
    demoHint:
      'Sigue avanzando en cualquier dirección — con flechas, rueda, tacto o arrastre — y la fila nunca termina.',
    prose: [
      {
        heading: 'Cómo funciona',
        body: '`getSlides` copia los elementos a ambos extremos de la fila. Como `itemId` debe ser único, los clones reciben un sufijo — `-lc` a la izquierda, `-rc` a la derecha — mientras mantienen el id real como `realId` para títulos, selección y clics. `useInfiniteLoop` empaqueta el resto: `normalize()` mide la longitud del bucle por el `offsetLeft` del primer elemento real y su clon derecho, y desplaza `scrollLeft` exactamente esa distancia cuando la posición cae dentro de una zona de clones. Geometría pura e idempotente — llamarlo cuando no hay nada que arreglar no hace nada.',
      },
      {
        heading: 'Cuándo se dispara el teletransporte',
        body: 'Saltar a mitad de desplazamiento pelearía visiblemente con el navegador, así que `normalize` corre cuando el desplazamiento se asienta: un listener nativo `scrollend` en el contenedor (alcanzado a través de la prop `containerRef`), con un fallback `onScroll` con debounce de 150ms para Safari, que no dispara `scrollend`. Un salto más ocurre antes de que nadie vea nada: un efecto de layout fija el `scrollLeft` inicial en el primer elemento real antes de pintar, así que la página nunca se abre en los clones izquierdos.',
      },
      {
        heading: 'Cruzar la costura a mitad de arrastre',
        body: 'El callback de arrastre de ratón añade cada delta a `scrollLeft` y llama a `loop.normalize()` justo ahí, dentro del gesto. Sin eso, arrastrar hacia una zona de clones esperaría al final del arrastre para teletransportar — con ello, puedes arrastrar a través de la costura indefinidamente y no notarlo.',
      },
      {
        heading: 'Notas',
        body: [
          '- Las flechas aquí son personalizadas y siempre están habilitadas: los hooks estándar `first`/`last` rastrean los elementos más externos, que aquí son clones — parpadearían deshabilitadas en la costura.',
          '- Las tarjetas muestran una visibilidad de unión gemela — un elemento cuenta como visible cuando lo está él o cualquiera de sus clones — porque la bandera por elemento se queda obsoleta un frame tras un teletransporte y parpadearía la cabecera.',
          '- Dos páginas de clones por lado: la zona debe cubrir un viewport completo (frames idénticos alrededor de un salto) con margen, para que un clic en Siguiente desde la página que cabalga la costura nunca se tope con el final de la fila.',
          '- Todo lo usado aquí — `containerRef`, `onScroll`, `itemId`, las props de ratón currificadas — es API pública.',
        ].join('\n'),
      },
    ],
  },

  simple: {
    meta: {
      title:
        'Menú de desplazamiento horizontal de React: ejemplo de primeros pasos',
      description:
        'La configuración mínima de react-horizontal-scrolling-menu: elementos con itemId, dos flechas leyendo VisibilityContext y seguimiento de visibilidad por elemento. Fuente completa.',
    },
    title: 'Primeros pasos: un menú de desplazamiento horizontal en React',
    lede: 'La configuración útil más pequeña: una fila de tarjetas, dos botones de flecha y aquello de lo que trata de verdad esta biblioteca — cada tarjeta sabe si está en pantalla. Un componente, una prop obligatoria, una importación de hoja de estilos.',
    demoHint:
      'Desplaza la fila — las flechas se deshabilitan en los extremos y cada tarjeta rastrea su propia visibilidad.',
    prose: [
      {
        heading: 'Cómo funciona',
        body: '`ScrollMenu` renderiza tus hijos dentro de un contenedor de desplazamiento nativo y observa cada uno con un IntersectionObserver. El único contrato es `itemId` — una prop única en cada hijo, que es como se rastrean, encuentran y a la que se desplaza. Dentro de cualquier hijo o flecha, `VisibilityContext` te entrega la API completa.',
      },
      {
        heading: 'El hook de visibilidad',
        body: 'Las tarjetas llaman a `useIsVisible(itemId)` para suscribirse a su propio estado en pantalla — sin listeners de desplazamiento, sin matemática de posición, y solo se re-renderizan las tarjetas afectadas cuando cambia la visibilidad. Las flechas usan los atajos `first` y `last` para deshabilitarse en los extremos de la fila.',
      },
      {
        heading: 'Notas',
        body: [
          '- `styles.css` es una importación aparte — el bundle JS nunca inyecta CSS.',
          '- El ancho del elemento es tu propio CSS; el menú no mide nada y trae 210 bytes de estilos de diseño.',
          '- El segundo argumento de `useIsVisible(itemId, true)` es el valor usado antes de que informe el observador — y el valor que renderiza tu servidor, si renderizas el menú en el servidor.',
        ].join('\n'),
      },
    ],
  },

  vertical: {
    meta: {
      title: 'Menú de desplazamiento vertical en React con flechas',
      description:
        'Haz react-horizontal-scrolling-menu vertical: contenedor de desplazamiento flex-column, altura acotada, flechas arriba y abajo mediante Header/Footer. Demo en vivo y fuente.',
    },
    title:
      'Un menú de desplazamiento vertical — el mismo componente, girado con CSS',
    lede: 'No hay una prop `vertical`, y no hace falta: el menú es una fila flex dentro de un contenedor de desplazamiento nativo, así que apuntarlo hacia abajo es un par de sobrescrituras de CSS. El seguimiento de visibilidad, los hooks de flechas y `scrollPrev`/`scrollNext` siguen funcionando en el nuevo eje.',
    demoHint:
      'Pasa la rueda sobre la columna o usa las flechas — Arriba y Abajo son el Header y el Footer de ScrollMenu. Las filas se atenúan al salir de la vista.',
    prose: [
      {
        heading: 'Dos sobrescrituras y una cota de altura',
        body: 'La historia reestiliza dos nombres de clase de la biblioteca. El contenedor de desplazamiento recibe `flex-direction: column`, `overflow-y: auto` e `height: initial` en lugar del `max-content` por defecto; el envoltorio recibe `height: 100%`, así que cualquier altura fija que tenga el padre se convierte en la cota de desplazamiento. Ese es todo el modo vertical. La historia aplica las sobrescrituras con emotion; la demo de esta página pasa utilidades de Tailwind mediante las props `wrapperClassName` y `scrollContainerClassName` en su lugar — cualquier vía de estilo funciona, los nombres de clase son estables.',
      },
      {
        heading: 'Las flechas se convierten en Header y Footer',
        body: "Las ranuras `LeftArrow`/`RightArrow` se renderizan junto al carril — el sitio equivocado para una columna. `ScrollMenu` también acepta componentes `Header` y `Footer` renderizados arriba y abajo, y la historia monta ahí sus botones Arriba y Abajo. Son consumidores de `VisibilityContext` corrientes: `useIsVisible('first', true)` deshabilita Arriba en la parte superior, `useIsVisible('last', false)` deshabilita Abajo en la inferior. Los clics pasan un tercer argumento — `scrollPrev(undefined, undefined, 'end')` y `scrollNext(undefined, undefined, 'start')` — la posición `block` para `scrollIntoView`. `'end'` deja el elemento anterior en el borde inferior (una página completa arriba); `'start'` pone el siguiente en la parte superior (una página completa abajo). Con el `'nearest'` por defecto, cada clic solo empujaría la siguiente fila a la vista.",
      },
      {
        heading: 'Mantener el desplazamiento dentro de la columna',
        body: "`scrollIntoView` mueve a cada ancestro desplazable de su objetivo, y la página es uno de ellos — así que un salto alineado por `block` dentro de una columna se lleva todo el documento. La opción que detiene el paseo es `boundary`, pasada en el cuarto argumento: `scrollNext(undefined, undefined, 'start', { boundary })` con el propio `scrollContainer.current` del menú desplaza las filas y nada más. Necesita `noPolyfill={false}` en `ScrollMenu`, ya que solo el polyfill entiende `boundary` — la demo de arriba pasa ambas cosas. Los menús horizontales rara vez se topan con esto: su `block: 'nearest'` por defecto no pide a la página movimiento vertical en primer lugar.",
      },
      {
        heading: 'La visibilidad no tiene eje',
        body: '`useIsVisible` se apoya en IntersectionObserver, y la intersección se mide en ambas dimensiones — las filas informan de su estado al cruzar los bordes superior e inferior exactamente igual que los elementos horizontales lo hacen por los lados. La demo atenúa las filas fuera de vista para mostrarlo, con las primeras cuatro pintadas como visibles en el servidor mediante el argumento `defaultValue` del hook.',
      },
      {
        heading: 'Notas',
        body: [
          '- La única dimensión fija es la altura inline del panel; el `height: 100%` del envoltorio la lleva hasta el contenedor de desplazamiento.',
          '- La rueda y el tacto desplazan la columna de forma nativa — `overflow-y: auto` la hace un contenedor de desplazamiento real; las flechas son conveniencia, no mecanismo.',
          '- El segundo argumento de `scrollPrev`/`scrollNext` es la posición `inline` (horizontal) — a los menús verticales les importa `block`, por eso la historia lo pasa explícitamente.',
        ].join('\n'),
      },
    ],
  },

  rtl: {
    meta: {
      title:
        'Desplazamiento horizontal RTL en React: un menú de derecha a izquierda',
      description:
        'Un menú de desplazamiento horizontal de derecha a izquierda en React: la prop RTL invierte la dirección de desplazamiento y la paginación, y las flechas cambian de lado. Demo en vivo y fuente completa.',
    },
    title: 'Un menú horizontal de derecha a izquierda',
    lede: 'Para interfaces en árabe o hebreo, la fila debe empezar en el borde derecho y crecer hacia la izquierda. Una prop booleana invierte el contenedor de desplazamiento; el único trabajo real que te queda es decidir qué significan las flechas cuando «siguiente» apunta a la izquierda.',
    demoHint:
      'Voltea el interruptor — la fila se reinicia desde el borde opuesto y las flechas intercambian roles.',
    prose: [
      {
        heading: 'Cómo funciona',
        body: '`RTL={true}` pone el contenedor de desplazamiento en modo derecha-a-izquierda: el primer elemento se sienta en el borde derecho y el desplazamiento avanza hacia la izquierda. Todo lo lógico sigue siendo lógico — `useIsVisible(’first’)` sigue significando el primer elemento de tus datos, `scrollNext()` sigue moviéndose hacia el último — solo se invierte la dirección en pantalla.',
      },
      {
        heading: 'Las flechas cambian de ranura, no de lógica',
        body: 'La prop `LeftArrow` siempre se renderiza en el lado izquierdo de la pantalla. En RTL ese lado es donde vive «siguiente», así que la historia alimenta las ranuras con elementos intercambiados: `LeftArrow={RTL ? <RightArrow /> : <LeftArrow />}`. Los propios componentes mantienen su lógica — el conectado a `scrollPrev` sigue deshabilitándose mediante `useIsVisible(’first’)` — solo cambian su posición en pantalla y su etiqueta.',
      },
      {
        heading: 'Notas',
        body: [
          '- La historia pasa `noPolyfill={true}`, así que los desplazamientos programáticos usan el desplazamiento suave nativo del navegador en lugar del polyfill empaquetado.',
          '- `scrollPrev(’smooth’, ’end’)` y `scrollNext(’smooth’, ’start’)` pasan una alineación explícita — el segundo argumento es el mismo conjunto `start/center/end` que toma `scrollToItem`.',
          '- La historia alterna `RTL` en vivo desde un checkbox — la prop es solo estado, nada del menú se configura en tiempo de compilación.',
        ].join('\n'),
      },
    ],
  },

  'add-items': {
    meta: {
      title: 'Desplazamiento horizontal infinito en React: cargar más al final',
      description:
        'Desplazamiento horizontal infinito en React: onUpdate comprueba api.items.last().visible y añade el siguiente lote con un elemento cargador. Demo en vivo y fuente completa.',
    },
    title: 'Cargar más elementos cuando el final entra en la vista',
    lede: 'Desplazamiento horizontal infinito sin un listener de desplazamiento: el menú ya sabe qué elementos son visibles, así que «¿ha llegado el usuario al final?» es solo una pregunta — ¿está el último elemento en pantalla? `onUpdate` la hace tras cada desplazamiento y añade el siguiente lote cuando la respuesta es sí.',
    demoHint:
      'Desplázate al extremo derecho — aparece una tarjeta cargadora y llega el siguiente lote. La demo se detiene en 30 elementos.',
    prose: [
      {
        heading: 'Cómo funciona',
        body: '`onUpdate` se dispara siempre que cambia la visibilidad de un elemento. El manejador lee `api.items.last()?.visible` — la biblioteca rastrea cada elemento por su `itemId` y mantiene una bandera de visibilidad por elemento, así que detectar el final cuesta una búsqueda, sin un IntersectionObserver propio y sin matemática de posición de desplazamiento. Luego `pushNewItems` simula un fetch: un timeout de un segundo, cinco elementos más, listo.',
      },
      {
        heading: 'Proteger el fetch',
        body: 'Las actualizaciones de visibilidad llegan en ráfagas, así que el manejador debe ser seguro de llamar repetidamente. Una bandera `loading` lo hace idempotente: tanto `onUpdate` como `pushNewItems` la comprueban, y solo el primer disparo inicia un fetch. La misma bandera renderiza un componente `Loader` como un elemento de menú real (con su propio `itemId`) que llama a `scrollIntoView()` al montar, manteniendo el final de la fila a la vista mientras se carga el lote.',
      },
      {
        heading: 'Notas',
        body: [
          '- La flecha derecha se pasa como elemento, `RightArrow={<RightArrow disabled={...} />}` — funcionan tanto la forma de componente como la de elemento, y la de elemento deja que el padre pase props como el tope de elementos.',
          '- Esa flecha solo se deshabilita cuando se alcanza el tope y el último elemento es visible — antes del tope, llegar al final significa que vienen más elementos.',
          '- `newItemsLimit` detiene esta demo en 24 elementos; en código real la señal equivalente es que tu API se quede sin páginas.',
        ].join('\n'),
      },
    ],
  },
  'custom-transition': {
    meta: {
      title:
        'Animación de desplazamiento personalizada en React: easing y duración',
      description:
        'Easing y duración personalizados para desplazamientos programáticos en React: transitionBehavior te entrega la posición objetivo y tú animas scrollLeft. Demo en vivo y fuente.',
    },
    title:
      'Animación de desplazamiento personalizada: tu propio easing y duración',
    lede: 'El desplazamiento suave nativo te da una velocidad y una curva, elegidas por el navegador. Cuando un desplazamiento programático debe encajar con el resto de tu diseño de movimiento, `noPolyfill={false}` te deja tomar el control — el menú calcula adónde debe ir el carril, y tu código conduce `scrollLeft` hasta allí.',
    demoHint:
      'Haz clic en las flechas y cambia la duración — a 2500 ms la curva ease-in-out-cubic es fácil de ver. Un clic a mitad de animación cancela la anterior.',
    prose: [
      {
        heading: 'Cómo funciona',
        body: 'Por defecto el menú se desplaza con el `scrollIntoView` nativo e ignora ambas props de transición. Poner `noPolyfill={false}` enruta los desplazamientos programáticos por el polyfill scroll-into-view-if-needed, que calcula el objetivo y se lo entrega a tu `transitionBehavior` como instrucciones: una acción `{ el, top, left }` por cada ancestro desplazable que deba moverse — aquí siempre solo el contenedor de desplazamiento, porque el menú lo pasa como límite. A partir de ahí, `animateScroll` avanza `el.scrollLeft` hacia el objetivo en cada `requestAnimationFrame`, mapeando el progreso a través de `easeInOutCubic` a lo largo de la duración elegida.',
      },
      {
        heading: 'Interrumpir una animación en vuelo',
        body: 'Un segundo clic de flecha puede caer a mitad de animación. La historia guarda el frame pendiente por elemento en un `WeakMap`, así que una nueva llamada cancela el viejo bucle de `requestAnimationFrame` en lugar de dejar que dos peleen por `scrollLeft`. Y como cada animación lee su punto de partida del `scrollLeft` actual del elemento, la nueva recoge exactamente donde se detuvo la interrumpida.',
      },
      {
        heading: 'Notas',
        body: [
          '- Nada aquí está atado a la función de easing — una vez tienes la posición objetivo, vale cualquier curva o librería de animación.',
          '- Los tipos describen `transitionBehavior` como una cadena `ScrollBehavior`, pero el valor va directo a scroll-into-view-if-needed como su callback `behavior` — de ahí el cast en la fuente.',
          '- La historia conecta el mismo estado de duración a `transitionDuration` y a la propia animación, para que no se desvíen.',
        ].join('\n'),
      },
    ],
  },

  'prevent-body-scroll': {
    meta: {
      title:
        'Evitar el desplazamiento de página con la rueda: menú horizontal de React',
      description:
        'Desplaza un menú horizontal de React con la rueda del ratón mientras la página se queda quieta: un listener de rueda nativo no pasivo activado al pasar el ratón. Demo en vivo y fuente completa.',
    },
    title: 'Desplaza el menú con la rueda — sin desplazar la página',
    lede: 'Un menú horizontal bajo la rueda del ratón es incómodo: la rueda desplaza la página y la fila se queda quieta. El arreglo tiene dos mitades — un manejador `onWheel` que convierte los tics de la rueda en paginación, y un listener nativo no pasivo que evita que la página se mueva debajo. La segunda mitad no se puede hacer solo con React.',
    demoHint:
      'Pon el puntero sobre la fila y gira la rueda: la fila pagina, la página se queda quieta. Sal de la fila y la rueda vuelve a desplazar la página.',
    prose: [
      {
        heading: 'Convertir la rueda en paginación',
        body: 'La prop `onWheel` de `ScrollMenu` se llama con el objeto API y el evento de rueda. Una rueda de ratón real informa deltas solo en Y en pasos gruesos, así que el manejador llama a `scrollNext` cuando `deltaY` es negativo y a `scrollPrev` en caso contrario — cada tic pagina la fila. Antes de todo eso comprueba si el evento parece un gesto de trackpad: cualquier `deltaX` en absoluto, o un `deltaY` menor de 15.',
      },
      {
        heading: 'Por qué el bloqueo de página necesita un listener nativo',
        body: "Llamar a `preventDefault` dentro del manejador de React sería la forma obvia de detener la página — y no hace nada en silencio, porque React registra los listeners de rueda como pasivos, y a un listener pasivo le está prohibido cancelar el evento. Así que `usePreventBodyScroll` rodea a React: en `mouseenter` ejecuta `document.addEventListener('wheel', preventDefault, { passive: false })`, en `mouseleave` vuelve a quitar el listener. Mientras el puntero está sobre el menú, cada evento de rueda burbujea hasta `document` y allí se cancela su acción por defecto — desplazar la página. Una limpieza de `useEffect` llama a `enableScroll` al desmontar, de modo que la página nunca puede quedar bloqueada.",
      },
      {
        heading: 'La vía de escape del trackpad',
        body: 'El paneo de dos dedos también llega como eventos de rueda, y el contenedor se desplaza de forma nativa con ellos — el listener de document lo mataría. Para los eventos que coinciden con la heurística del trackpad, el manejador llama a `stopPropagation` y retorna: el evento nunca llega al listener de document, así que el paneo nativo sobrevive. No hay forma fiable de detectar un trackpad; la heurística de la delta es la suposición honesta de la historia, y se sostiene en la práctica.',
      },
      {
        heading: 'Notas',
        body: [
          '- Los navegadores hicieron pasivos por defecto los listeners de rueda a nivel de document precisamente para que las páginas no puedan atascar el desplazamiento — `passive: false` es la exclusión explícita que vuelve a hacer legal `preventDefault`.',
          '- Rueda arriba pagina hacia delante y rueda abajo hacia atrás — ese es el mapeo de la historia; intercambia las ramas `scrollNext` / `scrollPrev` para lo contrario.',
          '- Los dispositivos táctiles no ejecutan nada de esto: no hay `mouseenter`, y deslizar la fila es desplazamiento nativo desde el principio.',
          '- El bloqueo existe solo entre `mouseenter` y `mouseleave`, así que el resto de la página se desplaza con normalidad en cuanto el puntero sale del carril.',
        ].join('\n'),
      },
    ],
  },

  'one-item-scroll': {
    meta: {
      title:
        'Desplazarse de un elemento en uno en React: flechas de carrusel precisas',
      description:
        'Avanza un carrusel de React un elemento por clic de flecha: scrollToItem con getNextElement avanza una tarjeta en lugar de una página completa. Demo en vivo y fuente completa.',
    },
    title: 'Desplazarse de un elemento en uno en lugar de una página completa',
    lede: 'Por defecto las flechas paginan: todo lo visible sale y el siguiente grupo entra. Este ejemplo las recablea para dar pasos — una tarjeta por clic — y todo el cambio es lo que llama el `onClick` de la flecha. Mismo menú, mismos elementos, distinto objetivo de desplazamiento.',
    demoHint:
      'Haz clic en una flecha — la fila avanza una tarjeta, no una página. Las flechas se deshabilitan en los extremos.',
    prose: [
      {
        heading: 'Cómo funciona',
        body: '`getNextElement()` devuelve el primer elemento más allá del grupo visible; `getPrevElement()` el que está justo antes. La flecha derecha llama a `scrollToItem(visibility.getNextElement(), ’smooth’, ’end’)` — alinear ese elemento con el borde final del contenedor desplaza lo justo para traerlo a la vista, lo que mueve la fila exactamente una tarjeta. La flecha izquierda es su espejo: elemento anterior, alineado a `’start’`.',
      },
      {
        heading: 'La alineación es todo el truco',
        body: 'El `scrollNext()` estándar resuelve el mismo elemento siguiente internamente, pero lo alinea con el borde inicial — la vista se desplaza más allá de todo el grupo visible para poner ese elemento primero. Un argumento `ScrollLogicalPosition` es la diferencia entre paginar y dar pasos. El tercer parámetro de `scrollToItem` es la alineación `inline` estándar de scroll-into-view; el segundo es el comportamiento, aquí `’smooth’`.',
      },
      {
        heading: 'Notas',
        body: [
          '- El estado de las flechas usa los atajos `’first’` y `’last’`: `useIsVisible(’first’, true)` deshabilita la flecha izquierda al inicio, `useIsVisible(’last’, false)` la derecha al final.',
          '- En los extremos `getNextElement()` devuelve undefined y `scrollToItem` no hace nada en silencio, así que una flecha habilitada tampoco puede sobre-desplazarse.',
          '- El manejador `onWheel` de la historia sigue paginando una vista completa por muesca de rueda — dar pasos es el comportamiento de las flechas, no un modo global.',
          '- Los clics de elemento están intactos: las tarjetas alternan la selección mediante su propio `onClick`, independiente de cómo desplacen las flechas.',
        ].join('\n'),
      },
    ],
  },

  'items-animation': {
    meta: {
      title: 'Animar elementos de lista al añadir y eliminar en React',
      description:
        'Añade, elimina y baraja elementos de una lista horizontal de React, animados por @formkit/auto-animate a través de la prop containerRef de ScrollMenu. Demo en vivo y fuente completa.',
    },
    title: 'Animar elementos al entrar, salir y a su sitio con auto-animate',
    lede: 'Añadir a una lista horizontal hace que el nuevo elemento aparezca de golpe; eliminar uno junta a sus vecinos de golpe. `@formkit/auto-animate` arregla ambas cosas con una sola ref padre — y la prop `containerRef` de `ScrollMenu` le entrega exactamente el elemento que necesita.',
    demoHint:
      'Añade, elimina y baraja — cada entrada, salida y reordenación está animada. El propio menú no tiene código de animación.',
    prose: [
      {
        heading: 'Cómo funciona',
        body: '`useAutoAnimate()` devuelve una ref que debe caer sobre el padre directo de los elementos que debe animar. Dentro de `ScrollMenu` ese padre es el contenedor de desplazamiento: cada hijo que pasas se envuelve en un div de elemento, y esos divs de elemento son los hijos inmediatos del contenedor. La historia pasa la ref de largo — `<ScrollMenu containerRef={parent}>` — y auto-animate toma el relevo: los elementos añadidos se atenúan al entrar, los eliminados se animan al salir y los reordenados se deslizan a su nueva ranura. El propio menú nunca sabe que lo están animando.',
      },
      {
        heading: 'Añadir, eliminar, barajar',
        body: 'Los tres controles son llamadas `setState` corrientes sobre el array items — `addItems` añade uno, `removeItems` suelta el último, `shuffle` es una pasada de Fisher–Yates sobre una copia. Las animaciones provienen enteramente de las mutaciones de DOM que causan esas actualizaciones. Vale la pena mantener una regla: `itemId` hace las veces de key de React y de manejador del elemento en el mapa de seguimiento del menú, así que los id deben seguir siendo únicos — la historia incluso rellena los huecos de numeración que dejan las eliminaciones en lugar de arriesgarse a acuñar un duplicado.',
      },
      {
        heading: 'El desplazamiento y el seguimiento siguen funcionando',
        body: 'El menú vuelve a observar a sus hijos siempre que cambian, así que el `useIsVisible` de un elemento recién añadido informa correctamente de inmediato y las flechas siguen paginando. Un elemento nuevo suele aterrizar fuera de pantalla, eso sí — si la entrada debe verse de verdad, combina esto con `scrollToItem` como hace el ejemplo add-item-and-scroll-to-it.',
      },
      {
        heading: 'Notas',
        body: [
          '- `containerRef` acepta un objeto ref o una ref callback — el callback de `useAutoAnimate` se conecta directamente.',
          '- auto-animate es de configuración cero e independiente del framework; el enlace a React es el único hook `useAutoAnimate`.',
          '- La demo de arriba simplifica la gestión de id a un contador monótono; el panel de código muestra la versión con relleno de huecos de la historia.',
        ].join('\n'),
      },
    ],
  },

  'mui-scrollable-tabs': {
    meta: {
      title:
        'Alternativa a las pestañas desplazables de MUI: desplazamiento nativo',
      description:
        '¿Te estás quedando corto con MUI variant="scrollable"? Conserva value/onChange, gana botones de desplazamiento que sobreviven en móvil, centrado y desplazable a la vez. Fuente completa.',
    },
    title: 'Pestañas desplazables más allá de MUI',
    lede: 'Las pestañas desplazables de Material UI están soldadas a la semántica de Tabs, y sus botones de desplazamiento desaparecen en móvil por defecto. Esta receta conserva la parte de la que depende tu código — el contrato `value`/`onChange` — y cambia la franja de debajo: desplazamiento nativo, una selección que se centra sola, pestañas que pueden contener cualquier cosa.',
    demoHint:
      'Haz clic en una pestaña cerca de cualquiera de los bordes — se centra sola. Arrastra la fila, como en un móvil.',
    prose: [
      {
        heading: 'Mantén el contrato value/onChange',
        body: 'El `handleChange` de la fuente tiene la firma exacta de MUI — `(event, newValue)`. Migrar significa cambiar el marcado, no recablear el estado: tu `useState`, los manejadores y los paneles de pestaña quedan intactos. La selección se centra sola con `api.scrollToItem(el, ’smooth’, ’center’)`, conectado exactamente igual que en [centrar al hacer clic](/examples/center-on-click).',
      },
      {
        heading: 'Botones de desplazamiento que sobreviven en móvil',
        body: 'MUI oculta sus botones de desplazamiento por debajo de 600px salvo que lo actives con `allowScrollButtonsMobile` — e incluso entonces son internos a Tabs. Aquí las flechas son tus propios componentes: `useIsVisible(’first’)` / `useIsVisible(’last’)` impulsan un desvanecido de opacidad, se renderizan en cualquier viewport, y el desplazamiento táctil es nativo sin importar lo que hagan las flechas.',
      },
      {
        heading: 'Centrado y desplazable, a la vez',
        body: 'En MUI la prop `centered` y la variant `scrollable` son mutuamente excluyentes — la documentación te dice que elijas una. Aquí centrar no es un modo de diseño sino un desplazamiento por clic, así que la franja es ambas cosas a la vez: desborda de forma nativa y cada pestaña seleccionada se desliza hasta el centro.',
      },
      {
        heading: 'Pestañas que dejan de ser pestañas',
        body: 'Dos pestañas de la demo llevan insignias de contador; los chips, avatares o contenido mixto funcionan igual — el único requisito es un `itemId`. Dales estilo con `@emotion/styled` como hace la fuente, con el `styled()` propio de MUI para que encaje en una aplicación Material, o con Tailwind. La demo de arriba añade [arrastrar para desplazarse](/examples/mouse-drag); restaurar la pestaña seleccionada al montar es [guardar y restaurar posición](/examples/save-restore-position).',
      },
      {
        heading: 'Notas',
        body: [
          '- Elige tu patrón ARIA: conserva `role="tablist"`/`role="tab"`/`aria-selected` cuando cambian paneles reales (como aquí), o `aria-current` cuando las "pestañas" son enlaces de navegación.',
          '- Con el arrastre activado, suprime el clic que se dispara al soltar el arrastre — la demo comprueba `dragManager.dragging` antes de seleccionar, igual que la [receta de arrastre](/examples/mouse-drag).',
          '- [RTL](/examples/rtl) no necesita trabajo extra: la franja es un contenedor de desplazamiento nativo, así que `direction: rtl` la invierte, flechas incluidas.',
        ].join('\n'),
      },
    ],
  },
};
