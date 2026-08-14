<!-- i18n:start -->

[English](./README.md) · [简体中文](./README.zh-CN.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [Русский](./README.ru.md) · [Español](./README.es.md) · [Português (BR)](./README.pt-BR.md) · Français · [Tiếng Việt](./README.vi.md)
<!-- i18n:meta locale=fr source=README.md source-blob=091dcc7b634f270278560b8d6a9292fab4f9683a status=translated -->
<!-- i18n:end -->

# React horizontal scrolling menu

[![npm](https://img.shields.io/npm/v/react-horizontal-scrolling-menu.svg)](https://www.npmjs.com/package/react-horizontal-scrolling-menu)
![Téléchargements npm](https://img.shields.io/npm/dm/react-horizontal-scrolling-menu)
![Taille du bundle npm (minifié + gzip)](https://img.shields.io/bundlephobia/minzip/react-horizontal-scrolling-menu.svg)
[![CI](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/actions/workflows/main.yml/badge.svg)](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/actions/workflows/main.yml)
[![Disponible pour embauche](https://img.shields.io/badge/available%20for%20hire-senior%20react%20engineer-2ea44f?style=flat-square)](https://asmyshlyaev177.dev)

Un composant de menu à défilement horizontal pour React, construit sur le
défilement natif du navigateur avec un suivi de visibilité par élément. Idéal
pour les rangées de catégories, les onglets, les filtres à puces, les galeries :
toute rangée d’éléments dont votre application a besoin de raisonner. Les
éléments sont vos propres composants avec votre propre CSS ; le menu s’adapte à
la largeur de son parent ; la navigation fonctionne par barre de défilement, au
toucher, à la molette, par glisser-déposer ou via les composants de flèche que
vous fournissez. 5,7 kB min+gzip.

![exemple](/sample.gif)

### [Page d’accueil](https://react-horizontal-scrolling-menu.dev) · [Exemples en direct (Storybook, éditables dans le navigateur)](https://asmyshlyaev177.github.io/react-horizontal-scrolling-menu) · [API](#propriétés-et-callbacks) · [Compétences pour agents IA](#utilisation-avec-des-agents-ia)

### Utilisé par

Plus de 20 000 dépôts dépendent de cette bibliothèque. En voici quelques-uns à
lire :

- [Our World in Data](https://github.com/owid/owid-grapher) — `^8.2.0`
- [Precious Plastic / ONE ARMY](https://github.com/ONEARMY/community-platform) — `^8.2.0`
- [erxes](https://github.com/erxes/erxes) — `^4.0.4`
- [Reapit](https://github.com/reapit/foundations) — `^3.2.5`
- [AWS Performance Dashboard](https://github.com/aws-solutions/performance-dashboard-on-aws) — `^2.1.1`

Également présenté dans [React Status #257](https://react.statuscode.com/issues/257).

## Démarrage rapide

```bash
npm install react-horizontal-scrolling-menu
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

Trois choses dont dépend l’exemple :

- Chaque élément a besoin d’une prop `itemId` unique : c’est ainsi que fonctionne
  le suivi de visibilité. La `key` de React sert de solution de repli.
- `styles.css` est un import séparé ; le bundle JS n’injecte jamais de CSS.
- La largeur de l’élément vient de votre propre CSS : le menu ne mesure rien.

Vous écrivez en JavaScript pur ? Retirez les imports de types et utilisez
`React.useContext(VisibilityContext)` comme d’habitude.

## Utilisation avec des agents IA

Les modèles entraînés sur d’anciennes versions recherchent encore
`visibleElements`, les éléments `Separator` et une prop `Arrows` — tous
supprimés — et inventent une prop `autoplay` qui n’a jamais existé. Le paquet
embarque huit fichiers `SKILL.md` pour mettre fin à cela : des guides par tâche
chargés à la demande via
[TanStack Intent](https://tanstack.com/intent/latest/docs/overview), versionnés
avec la bibliothèque plutôt qu’avec une page web.

```bash
npm install react-horizontal-scrolling-menu
npx @tanstack/intent@latest install   # une fois par projet
```

`install` ajoute la découverte des compétences à la configuration de votre agent
(`CLAUDE.md`, `.cursorrules`, …) ; l’agent charge ensuite une compétence à la
demande depuis `node_modules/react-horizontal-scrolling-menu/skills/`.
Listez-les ou chargez-les directement avec `npx @tanstack/intent@latest list` et
`npx @tanstack/intent@latest load react-horizontal-scrolling-menu#menu-setup`.

| Compétence             | Quand elle est chargée                                                             |
| ---------------------- | ---------------------------------------------------------------------------------- |
| `menu-setup`           | Un premier menu fonctionnel, des flèches, l’import CSS requis                      |
| `menu-visibility`      | Ce qui est à l’écran et l’état des flèches aux extrémités                          |
| `menu-scrolling`       | `scrollToItem`, `apiRef`, pagination page par page                                 |
| `menu-interactions`    | Glisser, molette et toucher — et leurs fabriques de gestionnaires                  |
| `menu-recipes`         | Lecture auto, boucle infinie, charger plus : des recettes, pas des props           |
| `menu-transitions-rtl` | Rythme d’animation, easing personnalisé, droite à gauche                           |
| `menu-testing-ssr`     | Next.js et RSC, mocks Jest, Playwright                                             |
| `menu-migration`       | Mettre à niveau le code antérieur à v8 et les API que les modèles inventent encore |

Les sources se trouvent dans [`skills/`](skills/). Les agents qui ne peuvent pas
charger les compétences Intent devraient lire
[llms.txt](https://react-horizontal-scrolling-menu.dev/llms.txt) : les mêmes
faits, condensés dans un fichier.

## Ce qu’il fait — et ne fait pas

Construit sur le défilement natif du navigateur : l’inertie, la barre de
défilement, le toucher, la molette et l’accessibilité viennent du navigateur,
pas d’une réimplémentation de la physique. Par-dessus : la visibilité par élément
via IntersectionObserver, `scrollToItem` / `scrollNext` / `scrollPrev`, un
`apiRef` pour le contrôle depuis l’extérieur, les emplacements Header et Footer,
la prise en charge RTL, la détection dynamique d’ajout/suppression et des types
TypeScript partout. Sûr pour le SSR — la
[page d’accueil](https://react-horizontal-scrolling-menu.dev) rend chaque démo
côté serveur.

Pas de moteur de carrousel : pas de physique d’accroche ni de ressort — si vous
voulez un diaporama d’images en plein écran, utilisez Embla ou Swiper. La
lecture automatique et la boucle infinie ne sont pas non plus des props ; ce
sont des recettes d’environ soixante lignes chacune sur l’API publique,
modifiables en direct dans Storybook
([boucle infinie](https://asmyshlyaev177.github.io/react-horizontal-scrolling-menu/?path=/story/examples-infiniteloop--infinite-loop),
[lecture automatique](https://asmyshlyaev177.github.io/react-horizontal-scrolling-menu/?path=/story/examples-autoplay--autoplay)).
Si vous avez besoin d’une rangée qui sache ce qui est visible, c’est celle-ci.

## Exemples

Chaque exemple est modifiable en direct dans
[Storybook](https://asmyshlyaev177.github.io/react-horizontal-scrolling-menu) —
chaque histoire est livrée avec un éditeur Monaco chargé des vraies définitions
de types de la bibliothèque. Couvre : l’utilisation de base, le défilement d’un
élément à la fois, le glisser à la souris, défiler vers un élément au montage,
centrer au clic, ajouter des éléments dynamiquement, sauvegarder/restaurer la
position, l’animation d’éléments, les points de progression, empêcher le
défilement du body, les transitions personnalisées, la boucle infinie, la
lecture automatique, la disposition verticale, les flèches dans le pied de page,
le balayage mobile, RTL et un test de charge à 5 000 éléments.

<!-- DOCS_START -->

### Utilitaires et API

Les enfants du composant principal ScrollMenu (flèches, en-tête, pied de page,
éléments) peuvent utiliser **VisibilityContext** pour accéder à l’état et aux
callbacks. Les callbacks de fonction reçoivent aussi le contexte, par exemple
`onWheel`, `onScroll`.

## Propriétés et callbacks

| Prop                     | Signature                                                                                                   |
| ------------------------ | ----------------------------------------------------------------------------------------------------------- |
| LeftArrow                | Composant React pour la flèche gauche                                                                       |
| RightArrow               | Composant React pour la flèche droite                                                                       |
| Header                   | Composant React Header                                                                                      |
| Footer                   | Composant React Footer                                                                                      |
| onWheel                  | (VisibilityContext, event) => void                                                                          |
| onScroll                 | (VisibilityContext, event) => void, se déclenche _avant_ que le défilement se stabilise                     |
| onInit                   | (VisibilityContext) => void                                                                                 |
| onUpdate                 | (VisibilityContext) => void                                                                                 |
| apiRef                   | React.RefObject \| React.RefCallback                                                                        |
| options                  | options pour IntersectionObserver : `rootMargin`, `threshold` et `ratio` pour considérer un élément visible |
| containerRef             | React.RefObject \| React.RefCallback pour le conteneur de défilement                                        |
| onMouseDown              | (VisibilityContext) => (React.MouseEventHandler) => void                                                    |
| onMouseLeave             | (VisibilityContext) => (React.MouseEventHandler) => void                                                    |
| onMouseUp                | (VisibilityContext) => (React.MouseEventHandler) => void                                                    |
| onMouseMove              | (VisibilityContext) => (React.MouseEventHandler) => void                                                    |
| onTouchMove              | (VisibilityContext) => (React.TouchEventHandler) => void                                                    |
| onTouchStart             | (VisibilityContext) => (React.TouchEventHandler) => void                                                    |
| onTouchEnd               | (VisibilityContext) => (React.TouchEventHandler) => void                                                    |
| itemClassName            | ClassName de l’Item                                                                                         |
| scrollContainerClassName | ClassName du scrollContainer                                                                                |
| wrapperClassName         | ClassName du div le plus externe                                                                            |
| transitionDuration       | Durée des transitions en ms, `500` par défaut, nécessite `noPolyfill={false}`                               |
| transitionBehavior       | 'smooth' \| 'auto' \| fonction personnalisée, nécessite `noPolyfill={false}`                                |
| RTL                      | Activer le sens droite vers gauche                                                                          |
| noPolyfill               | `true` par défaut (scrollIntoView natif) ; définissez `false` pour activer les props de transition          |

Notez les deux formes de callbacks : `onWheel` et `onScroll` sont de simples
`(context, event) => void`, tandis que les props souris et tactiles sont des
fabriques de gestionnaires — `(context) => (event) => void`. Consultez
l’[histoire MouseDrag](https://asmyshlyaev177.github.io/react-horizontal-scrolling-menu/?path=/story/examples-mousedrag--mouse-drag)
pour voir la fabrique en action.

### VisibilityContext

Hooks (appelez-les uniquement dans les composants rendus sous ScrollMenu, en
suivant les règles des hooks) :

| Hook                 | Signature                                                                |
| -------------------- | ------------------------------------------------------------------------ |
| useIsVisible         | (itemId: string \| 'first' \| 'last', defaultValue?: boolean) => boolean |
| useLeftArrowVisible  | () => boolean                                                            |
| useRightArrowVisible | () => boolean                                                            |

Valeurs et fonctions :

| Prop                  | Signature                                              |
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
| items                 | instance de la classe ItemsMap                         |
| scrollContainer       | Ref<OuterContainer>                                    |

### instance de la classe items

ItemsMap stocke des informations sur tous les éléments, avec des méthodes pour
obtenir les éléments actuellement visibles et l’élément précédent ou suivant.
Vous pouvez aussi vous abonner aux mises à jour.

| Prop/méthode | Description                                                                                                                                         |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| subscribe    | s’abonner aux événements pour `itemId` ou `first`, `last`, `onInit`, `onUpdate`, ex. `items.subscribe('item5', (item) => setVisible(item.visible))` |
| unsubscribe  | utilisez dans useEffect pour le nettoyage, passez la même instance de callback                                                                      |
| getVisible   | renvoie uniquement les éléments visibles                                                                                                            |
| toItems      | renvoie les id de tous les éléments                                                                                                                 |
| toArr        | renvoie tous les éléments                                                                                                                           |
| first        | renvoie le premier élément                                                                                                                          |
| last         | renvoie le dernier élément                                                                                                                          |
| prev         | (itemId \| Item) => élément précédent \| undefined                                                                                                  |
| next         | (itemId \| Item) => élément suivant \| undefined                                                                                                    |

### Transitions et animation

`transitionDuration` et `transitionBehavior` (`'smooth'`, `'auto'` ou une
fonction personnalisée) contrôlent l’animation de `scrollToItem` et des
utilitaires de défilement. Les deux nécessitent `noPolyfill={false}` — le
défilement natif par défaut les ignore. Ils ne se combinent pas avec la prop
`RTL`.

Consultez l’[histoire CustomTransition](https://asmyshlyaev177.github.io/react-horizontal-scrolling-menu/?path=/story/examples-customtransition--custom-transition)
pour une fonction d’easing personnalisée.

#### ScrollOptions

Le dernier argument de `scrollToItem`, `scrollPrev` et `scrollNext` remplace les
props de transition pour ce seul appel :

```tsx
scrollToItem(getItemElementById('item-5'), 'smooth', 'center', 'nearest', {
  duration: 800, // millisecondes
});
```

### Autres utilitaires

#### slidingWindow

Obtenez le groupe précédent ou suivant d’éléments visibles :

```tsx
slidingWindow(allItems, visibleItems).prev();
// ou .next()
```

#### getItemsPos

Obtenez le premier, le central et le dernier élément d’un groupe — par exemple
pour défiler vers le centre de la page précédente :

```tsx
const prevGroup = slidingWindow(allItems, visibleItems).prev();
const { center } = getItemsPos(prevGroup);
scrollToItem(getItemById(center), 'smooth', 'center');
```

### apiRef

Passez une ref à ScrollMenu et la valeur complète de VisibilityContext lui est
assignée — utile pour déclencher des fonctions comme `scrollToItem` depuis
l’extérieur du menu. Les valeurs de données sur la ref peuvent devenir
obsolètes, donc préférez appeler des fonctions :

```tsx
apiRef.current.scrollToItem(apiRef.current.getItemElementById('item-3'));
```

Vous pouvez aussi accéder directement à l’élément DOM d’un élément via
``document.querySelector(`[data-key='${itemId}']`)``. Consultez
l’[histoire ScrollToItem](https://asmyshlyaev177.github.io/react-horizontal-scrolling-menu/?path=/story/examples-scrolltoitem--scroll-to-item)
et l’[histoire AddItemAndScrollToIt](https://asmyshlyaev177.github.io/react-horizontal-scrolling-menu/?path=/story/examples-additemandscrolltoit--add-item-and-scroll-to-it).

<!-- DOCS_END -->

## SSR

La bibliothèque est sûre pour le SSR : le premier rendu émet un balisage simple
et IntersectionObserver ne s’attache que côté client. L’argument `defaultValue`
de `useIsVisible` contrôle l’état rendu côté serveur — le motif canonique de
flèches (`('first', true)` / `('last', false)`) rend une flèche gauche
désactivée et une flèche droite activée, correspondant à une rangée défilée
jusqu’à son début.

### Note sur Next.js

Le paquet est orienté ESM. Sur d’anciennes configurations Next.js, vous pouvez
rencontrer
[“Cannot use import statement outside a module”](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/issues/240) —
ajouter le paquet à
[`transpilePackages`](https://nextjs.org/docs/app/api-reference/config/next-config-js/transpilePackages)
le résout.

## Compatibilité navigateurs

Nécessite **IntersectionObserver** et **requestAnimationFrame** : tous les
navigateurs modernes. Pas d’IE.

## Développement

```bash
git clone https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu
cd react-horizontal-scrolling-menu
npm run setup
npm run demo        # application d'exemple (Next.js, port 3003) avec la bibliothèque en mode watch
npm run demo-tanstack  # application d'exemple (TanStack Start SSR, port 3004)
npm run storybook   # exemples
npm test            # tests unitaires + e2e + storybook
```

Deux applications d’exemple d’intégration vivent dans le dépôt — `example-nextjs`
et `example-tanstack` (TanStack Start, rendu serveur dans workerd) — toutes deux
rendant la même démo (glisser à la souris, verrouillage du défilement du body,
animation personnalisée avec un panneau de contrôle) afin que l’unique suite e2e
dans `e2e/` s’exécute contre la bibliothèque dans les deux frameworks, y compris
une assertion que le menu est déjà présent dans le HTML rendu serveur.

Les contributions et corrections sont les bienvenues — fork, commit, ouvrez une
PR et n’oubliez pas les tests. Consultez [CONTRIBUTING](./CONTRIBUTING.md) et le
[CHANGELOG](./CHANGELOG.md).

Documentation de l’ancienne [API v1](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/tree/v1).

## À propos

Créé et maintenu par **Aleksandr Smyshliaev** depuis 2018 — mon premier paquet
npm, et toujours la même API publique de React 16.8 à 19. Je suis ingénieur
frontend (React / Next.js / TypeScript) et **disponible pour des missions en
freelance et à temps plein**.

- **Me contacter** — [asmyshlyaev177.dev](https://asmyshlyaev177.dev) ·
  [asmyshlyaev177@gmail.com](mailto:asmyshlyaev177@gmail.com) ·
  [LinkedIn](https://linkedin.com/in/asmyshlyaev177) · Telegram @asmyshlyaev177
- **Aussi à moi** — [state-in-url](https://github.com/asmyshlyaev177/state-in-url)
  (état typé dans l’URL),
  [test-proxy-recorder](https://github.com/asmyshlyaev177/test-proxy-recorder)
  (enregistrer/rejouer pour Playwright)

Une ⭐️ sur le dépôt aide davantage de personnes à trouver la bibliothèque.
