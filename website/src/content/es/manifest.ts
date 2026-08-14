// Spanish (es) — translation of en/manifest.ts.
//
// Values only: every key, its order and its type come from the English
// module, and a missing or renamed one is a type error rather than a
// silently English page.
// i18n:meta locale=es source=en/manifest.ts source-blob=269945541172d5f4f06823bd0d6393dfc44a3fb2 status=translated
import type { ManifestCopy } from '../types.ts';

/**
 * Texto de las tarjetas para las páginas de ejemplo. Los slugs y los id de
 * grupo son estructura — viven en `lib/examples-manifest.ts` y aquí son claves,
 * no texto.
 */
export const manifest: ManifestCopy = {
  groups: {
    Basics: 'Básicos',
    'Position & scrolling': 'Posición y desplazamiento',
    'Input & gestures': 'Entrada y gestos',
    'Dynamic items': 'Elementos dinámicos',
    Layout: 'Diseño',
    Recipes: 'Recetas',
  },
  examples: {
    simple: {
      name: 'Primeros pasos',
      blurb:
        'El menú mínimo: elementos, dos flechas, visibilidad lista para usar.',
    },
    'one-item': {
      name: 'Un elemento por vista',
      blurb: 'Un menú del ancho de un elemento: una tarjeta llena la fila.',
    },
    'one-item-scroll': {
      name: 'Desplazarse de un elemento en uno',
      blurb:
        'Las flechas avanzan un solo elemento en lugar de una página completa.',
    },
    'bottom-arrows': {
      name: 'Flechas debajo del menú',
      blurb: 'Las flechas son tus componentes: colócalas donde quieras.',
    },
    'center-on-click': {
      name: 'Centrar el elemento clicado',
      blurb:
        'scrollToItem con inline: center — el patrón de pestañas desplazables.',
    },
    'scroll-to-item': {
      name: 'Desplazarse a un elemento por id',
      blurb: 'Llega al menú desde fuera con apiRef.',
    },
    'save-restore-position': {
      name: 'Guardar y restaurar la posición de desplazamiento',
      blurb: 'Mantén el desplazamiento entre desmontajes y recargas de página.',
    },
    'custom-transition': {
      name: 'Animación de desplazamiento personalizada',
      blurb:
        'Trae tu propio easing y duración para los desplazamientos programáticos.',
    },
    progress: {
      name: 'Indicador de progreso de desplazamiento',
      blurb: 'Una barra de progreso impulsada por qué elementos son visibles.',
    },
    'mouse-drag': {
      name: 'Arrastrar para desplazarse con el ratón',
      blurb: 'Arrastre con el ratón que sigue dejando funcionar los clics.',
    },
    'swipe-desktop': {
      name: 'Deslizar en escritorio',
      blurb: 'Deslizamiento con inercia para usuarios de ratón.',
    },
    'mobile-swipe-only': {
      name: 'Ocultar las flechas en móvil',
      blurb:
        'Desplazamiento solo táctil en pantallas pequeñas, flechas en escritorio.',
    },
    'prevent-body-scroll': {
      name: 'Evitar el desplazamiento del body',
      blurb: 'La rueda sobre el menú desplaza el menú, no la página.',
    },
    'add-items': {
      name: 'Cargar más cuando aparece el final',
      blurb:
        'Añadido infinito impulsado por la visibilidad del último elemento.',
    },
    'add-item-and-scroll-to-it': {
      name: 'Añadir un elemento y desplazarse a él',
      blurb: 'El patrón de chips de filtro: añadir y luego traer a la vista.',
    },
    'items-animation': {
      name: 'Animar elementos al entrar y salir',
      blurb: 'Animaciones de añadir/eliminar con @formkit/auto-animate.',
    },
    performance: {
      name: '5.000 elementos y sigue siendo rápido',
      blurb:
        'El desplazamiento nativo escala — aquí no hace falta virtualización.',
    },
    vertical: {
      name: 'Menú vertical',
      blurb: 'El mismo menú, desplazándose de arriba abajo.',
    },
    rtl: {
      name: 'De derecha a izquierda',
      blurb:
        'RTL invierte la dirección; las flechas y la paginación le siguen.',
    },
    'infinite-loop': {
      name: 'Bucle infinito',
      blurb:
        'Bucle continuo desde la API pública — sin cambios en la biblioteca.',
    },
    autoplay: {
      name: 'Autoplay',
      blurb: 'Un bucle que avanza solo con comportamiento de pausa accesible.',
    },
  },
};
