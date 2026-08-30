<!-- i18n:start -->

[English](./README.md) · [简体中文](./README.zh-CN.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [Русский](./README.ru.md) · Español · [Português (BR)](./README.pt-BR.md) · [Français](./README.fr.md) · [Tiếng Việt](./README.vi.md)
<!-- i18n:meta locale=es source=README.md source-blob=8958730422d74e17cb64c668f1e52d7eeee19c63 status=translated -->
<!-- i18n:end -->

# React horizontal scrolling menu

[![npm](https://img.shields.io/npm/v/react-horizontal-scrolling-menu.svg)](https://www.npmjs.com/package/react-horizontal-scrolling-menu)
![Descargas de npm](https://img.shields.io/npm/dm/react-horizontal-scrolling-menu)
![Tamaño del bundle npm (minified + gzip)](https://img.shields.io/bundlephobia/minzip/react-horizontal-scrolling-menu.svg)
[![CI](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/actions/workflows/main.yml/badge.svg)](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/actions/workflows/main.yml)
[![Disponible para contratar](https://img.shields.io/badge/available%20for%20hire-senior%20react%20engineer-2ea44f?style=flat-square)](https://asmyshlyaev177.dev)

Un componente de menú con desplazamiento horizontal para React, construido sobre
el desplazamiento nativo del navegador y con seguimiento de visibilidad por
elemento. Ideal para filas de categorías, pestañas, filtros de chips, galerías:
cualquier fila de elementos sobre la que tu aplicación necesite razonar. Los
elementos son tus propios componentes con tu propio CSS; el menú se adapta al
ancho de su contenedor; la navegación funciona con la barra de desplazamiento,
el tacto, la rueda del ratón, el arrastre o los componentes de flecha que tú
proporciones. 5,7 kB min+gzip.

![ejemplo](/sample.gif)

### [Página de inicio](https://react-horizontal-scrolling-menu.dev) · [Ejemplos en vivo (Storybook, editables en el navegador)](https://asmyshlyaev177.github.io/react-horizontal-scrolling-menu) · [API](#propiedades-y-callbacks) · [Habilidades para agentes de IA](#uso-con-agentes-de-ia)

### Quién lo usa

Más de 20.000 repositorios dependen de esta biblioteca. Cinco que puedes
leer — cada enlace lleva al `import` del componente que la usa, fijado a un
commit, no a un `package.json`:

- [Our World in Data](https://github.com/owid/owid-grapher/blob/4a60a2fb4532a2d287a1ef5660339dcc32bcd483/site/gdocs/components/KeyInsights.tsx#L3) — el carrusel de ideas clave en su renderizador de artículos; también sus [facetas de temas](https://github.com/owid/owid-grapher/blob/4a60a2fb4532a2d287a1ef5660339dcc32bcd483/site/latest/LatestTopicFacets.tsx#L10), que envuelven un `ToggleButton` de react-aria. `^8.2.0`
- [Precious Plastic / ONE ARMY](https://github.com/ONEARMY/community-platform/blob/90c1be6be0ad450a92d9483577433fdc8b09f477/packages/components/src/VerticalList/VerticalList.client.tsx#L6-L7) — el `VerticalList` de su paquete de componentes compartidos, construido a partir de la propia documentación de esta biblioteca. `^8.2.0`
- [erxes](https://github.com/erxes/erxes/blob/efef0252d390f4072e21c0a188d289f01866b188/apps/posclient-front/components/ui/horizontalScrollMenu.tsx#L6) — el menú de categorías en su cliente de punto de venta. `^4.0.4`
- [Reapit](https://github.com/reapit/foundations/blob/9edda57691befd398547bcdf4013916b85face52/packages/app-builder/src/components/ui/viewport/tab-bar.tsx#L4) — la barra de pestañas del viewport en su constructor de aplicaciones. `^3.2.5`
- [AWS Performance Dashboard](https://github.com/aws-solutions/performance-dashboard-on-aws/blob/cffa9c822ac8288a44d13a9394a2255e574c7592/frontend/src/components/Tabs.tsx#L8) — el componente `Tabs` del panel; sus [`Arrows`](https://github.com/aws-solutions/performance-dashboard-on-aws/blob/cffa9c822ac8288a44d13a9394a2255e574c7592/frontend/src/components/Arrows.tsx#L9) usan `VisibilityContext` directamente. Archivado en 2024, fija `^2.1.1`.

También aparece en [React Status #257](https://react.statuscode.com/issues/257).

## Inicio rápido

```bash
npm install react-horizontal-scrolling-menu
```

¿Usas [shadcn/ui](https://ui.shadcn.com)? Un solo comando instala un componente listo y con estilos — flechas sensibles a los bordes, drag-to-scroll, scrollbar oculta — directamente en tu `components/ui/`:

```bash
npx shadcn@latest add https://react-horizontal-scrolling-menu.dev/r/scroll-menu.json
```

```tsx
import React from 'react';
import {
  ScrollMenu,
  VisibilityContext,
  type publicApiType,
} from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';

const items = Array.from({ length: 10 }, (_, i) => `item-${i + 1}`);

export function App() {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {items.map((id) => (
        <Card itemId={id} key={id} title={id} />
      ))}
    </ScrollMenu>
  );
}

function LeftArrow() {
  const visibility = React.useContext<publicApiType>(VisibilityContext);
  const isFirstVisible = visibility.useIsVisible('first', true);
  return (
    <button disabled={isFirstVisible} onClick={() => visibility.scrollPrev()}>
      ←
    </button>
  );
}

function RightArrow() {
  const visibility = React.useContext<publicApiType>(VisibilityContext);
  const isLastVisible = visibility.useIsVisible('last', false);
  return (
    <button disabled={isLastVisible} onClick={() => visibility.scrollNext()}>
      →
    </button>
  );
}

function Card({ itemId, title }: { itemId: string; title: string }) {
  const visibility = React.useContext<publicApiType>(VisibilityContext);
  const isVisible = visibility.useIsVisible(itemId);
  return (
    <div style={{ width: '160px' }} data-visible={isVisible}>
      {title}
    </div>
  );
}
```

Tres cosas de las que depende el ejemplo:

- Cada elemento necesita una prop `itemId` única: así funciona el seguimiento de
  visibilidad. La `key` de React funciona como respaldo.
- `styles.css` es una importación aparte; el bundle JS nunca inyecta CSS.
- El ancho del elemento viene de tu propio CSS: el menú no mide nada.

¿Escribes JavaScript puro? Quita las importaciones de tipos y usa
`React.useContext(VisibilityContext)` como siempre.

## Uso con agentes de IA

Los modelos entrenados con versiones antiguas siguen buscando `visibleElements`,
elementos `Separator` y una prop `Arrows` — todo eliminado — e inventan una prop
`autoplay` que nunca existió. El paquete incluye ocho archivos `SKILL.md` para
evitarlo: guías por tareas que se cargan bajo demanda a través de
[TanStack Intent](https://tanstack.com/intent/latest/docs/overview), versionadas
con la biblioteca y no con ninguna página web.

```bash
npm install react-horizontal-scrolling-menu
npx @tanstack/intent@latest install   # una vez por proyecto
```

`install` añade el descubrimiento de habilidades a la configuración de tu agente
(`CLAUDE.md`, `.cursorrules`, …); el agente carga entonces una habilidad bajo
demanda desde `node_modules/react-horizontal-scrolling-menu/skills/`. Lista o
cárgalas directamente con `npx @tanstack/intent@latest list` y
`npx @tanstack/intent@latest load react-horizontal-scrolling-menu#menu-setup`.

| Habilidad              | Cuándo se carga                                                        |
| ---------------------- | ---------------------------------------------------------------------- |
| `menu-setup`           | Un primer menú funcional, flechas, la importación CSS requerida        |
| `menu-visibility`      | Qué hay en pantalla y el estado de las flechas en los extremos         |
| `menu-scrolling`       | `scrollToItem`, `apiRef`, paginación página a página                   |
| `menu-interactions`    | Arrastre, rueda y tacto — y sus fábricas de manejadores                |
| `menu-recipes`         | Autoplay, bucle infinito, cargar más: recetas, no props                |
| `menu-transitions-rtl` | Tiempo de animación, easing personalizado, derecha a izquierda         |
| `menu-testing-ssr`     | Next.js y RSC, mocks de Jest, Playwright                               |
| `menu-migration`       | Actualizar código anterior a v8 y las API que los modelos aún inventan |

El código fuente vive en [`skills/`](skills/). Los agentes que no pueden cargar
habilidades de Intent deberían leer
[llms.txt](https://react-horizontal-scrolling-menu.dev/llms.txt): los mismos
hechos, condensados en un archivo.

## Qué hace — y qué no

Construido sobre el desplazamiento nativo del navegador: la inercia, la barra de
desplazamiento, el tacto, la rueda y la accesibilidad vienen del navegador, no de
una reimplementación de física. Encima de eso: visibilidad por elemento mediante
IntersectionObserver, `scrollToItem` / `scrollNext` / `scrollPrev`, un `apiRef`
para el control desde fuera, ranuras Header y Footer, RTL, detección dinámica de
añadido/eliminación y tipos de TypeScript por todas partes. Seguro para SSR: la
[página de inicio](https://react-horizontal-scrolling-menu.dev) renderiza cada
demo en el servidor.

Sin motor de carrusel: sin física de ajuste ni de muelle — si quieres un slider
de imágenes a pantalla completa, usa Embla o Swiper. El autoplay y el bucle
infinito tampoco son props; son recetas de unas sesenta líneas cada una sobre la
API pública, editables en vivo en Storybook
([bucle infinito](https://asmyshlyaev177.github.io/react-horizontal-scrolling-menu/?path=/story/examples-infiniteloop--infinite-loop),
[autoplay](https://asmyshlyaev177.github.io/react-horizontal-scrolling-menu/?path=/story/examples-autoplay--autoplay)).
Si necesitas una fila que sepa qué es visible, esto es para ti.

## Ejemplos

Cada ejemplo es editable en vivo en
[Storybook](https://asmyshlyaev177.github.io/react-horizontal-scrolling-menu):
cada historia viene con un editor Monaco cargado con las definiciones de tipo
reales de la biblioteca. Cubre: uso básico, desplazamiento de un elemento por
vez, arrastre con el ratón, desplazarse a un elemento al montar, centrar al hacer
clic, añadir elementos dinámicamente, guardar/restaurar posición, animación de
elementos, puntos de progreso, evitar el desplazamiento del body, transiciones
personalizadas, bucle infinito, autoplay, diseño vertical, flechas en el pie,
deslizamiento móvil, RTL y una prueba de estrés con 5.000 elementos.

<!-- DOCS_START -->

### Helpers y API

Los hijos del componente principal ScrollMenu (flechas, cabecera, pie, elementos)
pueden usar **VisibilityContext** para acceder al estado y los callbacks. Los
callbacks de función también reciben el contexto, por ejemplo `onWheel`,
`onScroll`.

## Propiedades y callbacks

| Prop                     | Firma                                                                                                       |
| ------------------------ | ----------------------------------------------------------------------------------------------------------- |
| LeftArrow                | Componente React para la flecha izquierda                                                                   |
| RightArrow               | Componente React para la flecha derecha                                                                     |
| Header                   | Componente React Header                                                                                     |
| Footer                   | Componente React Footer                                                                                     |
| onWheel                  | (VisibilityContext, event) => void                                                                          |
| onScroll                 | (VisibilityContext, event) => void, se dispara _antes_ de que el desplazamiento se asiente                  |
| onInit                   | (VisibilityContext) => void                                                                                 |
| onUpdate                 | (VisibilityContext) => void                                                                                 |
| apiRef                   | React.RefObject \| React.RefCallback                                                                        |
| options                  | opciones para IntersectionObserver: `rootMargin`, `threshold` y `ratio` para considerar un elemento visible |
| containerRef             | React.RefObject \| React.RefCallback para el contenedor de desplazamiento                                   |
| onMouseDown              | (VisibilityContext) => (React.MouseEventHandler) => void                                                    |
| onMouseLeave             | (VisibilityContext) => (React.MouseEventHandler) => void                                                    |
| onMouseUp                | (VisibilityContext) => (React.MouseEventHandler) => void                                                    |
| onMouseMove              | (VisibilityContext) => (React.MouseEventHandler) => void                                                    |
| onTouchMove              | (VisibilityContext) => (React.TouchEventHandler) => void                                                    |
| onTouchStart             | (VisibilityContext) => (React.TouchEventHandler) => void                                                    |
| onTouchEnd               | (VisibilityContext) => (React.TouchEventHandler) => void                                                    |
| itemClassName            | ClassName del Item                                                                                          |
| scrollContainerClassName | ClassName del scrollContainer                                                                               |
| wrapperClassName         | ClassName del div más externo                                                                               |
| transitionDuration       | Duración de las transiciones en ms, por defecto `500`, requiere `noPolyfill={false}`                        |
| transitionBehavior       | 'smooth' \| 'auto' \| función personalizada, requiere `noPolyfill={false}`                                  |
| RTL                      | Activar la dirección de derecha a izquierda                                                                 |
| noPolyfill               | `true` por defecto (scrollIntoView nativo); pon `false` para activar las props de transición                |

Observa las dos formas de callback: `onWheel` y `onScroll` son simples
`(context, event) => void`, mientras que las props de ratón y táctiles son
fábricas de manejadores — `(context) => (event) => void`. Consulta la
[historia MouseDrag](https://asmyshlyaev177.github.io/react-horizontal-scrolling-menu/?path=/story/examples-mousedrag--mouse-drag)
para ver el patrón de fábrica en uso.

### VisibilityContext

Hooks (llámalos solo dentro de componentes renderizados bajo ScrollMenu,
siguiendo las reglas de los hooks):

| Hook                 | Firma                                                                    |
| -------------------- | ------------------------------------------------------------------------ |
| useIsVisible         | (itemId: string \| 'first' \| 'last', defaultValue?: boolean) => boolean |
| useLeftArrowVisible  | () => boolean                                                            |
| useRightArrowVisible | () => boolean                                                            |

Valores y funciones:

| Prop                  | Firma                                                  |
| --------------------- | ------------------------------------------------------ |
| getItemById           | itemId => IOItem \| undefined                          |
| getItemElementById    | itemId => DOM Element \| null                          |
| getItemByIndex        | index => IOItem \| undefined                           |
| getItemElementByIndex | index => DOM Element \| null                           |
| getNextElement        | () => IOItem \| undefined                              |
| getPrevElement        | () => IOItem \| undefined                              |
| isFirstItemVisible    | boolean                                                |
| isItemVisible         | itemId => boolean                                      |
| isLastItem            | boolean                                                |
| isLastItemVisible     | boolean                                                |
| menuVisible           | { current: boolean }                                   |
| scrollNext            | (behavior, inline, block, ScrollOptions) => void       |
| scrollPrev            | (behavior, inline, block, ScrollOptions) => void       |
| scrollToItem          | (item, behavior, inline, block, ScrollOptions) => void |
| items                 | instancia de la clase ItemsMap                         |
| scrollContainer       | Ref<OuterContainer>                                    |

### instancia de la clase items

ItemsMap guarda información sobre todos los elementos, con métodos para obtener
los elementos actualmente visibles y el elemento anterior o siguiente. También
puedes suscribirte a actualizaciones.

| Prop/método | Descripción                                                                                                                                        |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| subscribe   | suscribirse a eventos para `itemId` o `first`, `last`, `onInit`, `onUpdate`, p. ej. `items.subscribe('item5', (item) => setVisible(item.visible))` |
| unsubscribe | úsalo en useEffect para la limpieza, pasa la misma instancia de callback                                                                           |
| getVisible  | devuelve solo los elementos visibles                                                                                                               |
| toItems     | devuelve los id de todos los elementos                                                                                                             |
| toArr       | devuelve todos los elementos                                                                                                                       |
| first       | devuelve el primer elemento                                                                                                                        |
| last        | devuelve el último elemento                                                                                                                        |
| prev        | (itemId \| Item) => elemento anterior \| undefined                                                                                                 |
| next        | (itemId \| Item) => elemento siguiente \| undefined                                                                                                |

### Transiciones y animación

`transitionDuration` y `transitionBehavior` (`'smooth'`, `'auto'` o una función
personalizada) controlan cómo animan `scrollToItem` y los helpers de
desplazamiento. Ambos requieren `noPolyfill={false}`: el desplazamiento nativo
por defecto los ignora. No se combinan con la prop `RTL`.

Consulta la
[historia CustomTransition](https://asmyshlyaev177.github.io/react-horizontal-scrolling-menu/?path=/story/examples-customtransition--custom-transition)
para una función de easing personalizada.

#### ScrollOptions

El último argumento de `scrollToItem`, `scrollPrev` y `scrollNext` anula las
props de transición para esa única llamada:

```tsx
scrollToItem(getItemElementById('item-5'), 'smooth', 'center', 'nearest', {
  duration: 800, // milisegundos
});
```

### Otros helpers

#### slidingWindow

Obtén el grupo anterior o siguiente de elementos visibles:

```tsx
slidingWindow(allItems, visibleItems).prev();
// o .next()
```

#### getItemsPos

Obtén el primer elemento, el central y el último de un grupo; por ejemplo, para
desplazarte al centro de la página anterior:

```tsx
const prevGroup = slidingWindow(allItems, visibleItems).prev();
const { center } = getItemsPos(prevGroup);
scrollToItem(getItemById(center), 'smooth', 'center');
```

### apiRef

Pasa una ref a ScrollMenu y se le asigna el valor completo de VisibilityContext —
útil para disparar funciones como `scrollToItem` desde fuera del menú. Los
valores de datos en la ref pueden quedar obsoletos, así que prefiere llamar a
funciones:

```tsx
apiRef.current.scrollToItem(apiRef.current.getItemElementById('item-3'));
```

También puedes acceder directamente al elemento DOM de un elemento mediante
``document.querySelector(`[data-key='${itemId}']`)``. Consulta la
[historia ScrollToItem](https://asmyshlyaev177.github.io/react-horizontal-scrolling-menu/?path=/story/examples-scrolltoitem--scroll-to-item)
y la
[historia AddItemAndScrollToIt](https://asmyshlyaev177.github.io/react-horizontal-scrolling-menu/?path=/story/examples-additemandscrolltoit--add-item-and-scroll-to-it).

<!-- DOCS_END -->

## SSR

La biblioteca es segura para SSR: el primer render emite marcado plano e
IntersectionObserver solo se conecta en el cliente. El argumento `defaultValue`
de `useIsVisible` controla el estado renderizado en el servidor: el patrón
canónico de flechas (`('first', true)` / `('last', false)`) renderiza una flecha
izquierda deshabilitada y una derecha habilitada, lo que corresponde a una fila
desplazada a su inicio.

### Nota sobre Next.js

El paquete es ESM-first. En configuraciones antiguas de Next.js puedes toparte
con
[“Cannot use import statement outside a module”](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/issues/240):
añadir el paquete a
[`transpilePackages`](https://nextjs.org/docs/app/api-reference/config/next-config-js/transpilePackages)
lo resuelve.

## Soporte de navegadores

Requiere **IntersectionObserver** y **requestAnimationFrame**: todo navegador
moderno. Sin IE.

## Desarrollo

```bash
git clone https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu
cd react-horizontal-scrolling-menu
pnpm run setup
pnpm run demo        # app de ejemplo (Next.js, puerto 3003) con la biblioteca en modo watch
pnpm run demo-tanstack  # app de ejemplo (TanStack Start SSR, puerto 3004)
pnpm run storybook   # ejemplos
pnpm test            # pruebas de unidad + e2e + storybook
```

En el repositorio viven dos apps de ejemplo de integración — `example-nextjs` y
`example-tanstack` (TanStack Start, renderizado en servidor en workerd) — ambas
renderizan la misma demo (arrastre con ratón, bloqueo del desplazamiento del
body, animación personalizada con un panel de control) para que la única suite
e2e en `e2e/` se ejecute contra la biblioteca en ambos frameworks, incluida una
comprobación de que el menú ya está presente en el HTML renderizado en el
servidor.

Las contribuciones y correcciones son bienvenidas: haz fork, haz commit, abre un
PR y no olvides las pruebas. Consulta [CONTRIBUTING](./CONTRIBUTING.md) y
[CHANGELOG](./CHANGELOG.md).

Documentación de la [API v1](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/tree/v1) heredada.

## Acerca de

Construido y mantenido por **Aleksandr Smyshliaev** desde 2018: mi primer paquete
de npm y la misma API pública de React 16.8 a 19. Soy ingeniero frontend (React /
Next.js / TypeScript) y **estoy disponible para trabajo por contrato y a tiempo
completo**.

- **Contacta conmigo** — [asmyshlyaev177.dev](https://asmyshlyaev177.dev) ·
  [asmyshlyaev177@gmail.com](mailto:asmyshlyaev177@gmail.com) ·
  [LinkedIn](https://linkedin.com/in/asmyshlyaev177) · Telegram @asmyshlyaev177
- **También míos** — [state-in-url](https://github.com/asmyshlyaev177/state-in-url)
  (estado tipado en la URL),
  [test-proxy-recorder](https://github.com/asmyshlyaev177/test-proxy-recorder)
  (grabar/reproducir para Playwright)

Una ⭐️ en el repositorio ayuda a que más gente encuentre la biblioteca.
