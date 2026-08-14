// French (fr) — translation of en/compare.ts.
//
// Values only: every key, its order and its type come from the English
// module, and a missing or renamed one is a type error rather than a
// silently English page.
// i18n:meta locale=fr source=en/compare.ts source-blob=c29839efeb7de75a4cfbad0342c7bfb7266a0666 status=translated
import type { CompareCopy } from '../types.ts';

export const compare: CompareCopy = {
  meta: {
    title: 'react-horizontal-scrolling-menu face à Swiper, Embla, react-slick',
    description:
      'Une comparaison honnête : quand un menu à défilement horizontal l’emporte sur une bibliothèque de carrousel, et quand ce n’est pas le cas. Swiper, Embla, keen-slider et react-slick, côte à côte.',
  },
  jsonLdHeadline:
    'Carrousel ou menu à défilement ? react-horizontal-scrolling-menu face à Swiper, Embla, keen-slider et react-slick',

  title: 'Carrousel ou menu à défilement ? Une comparaison honnête',
  lede: 'Swiper, Embla, keen-slider et react-slick sont des moteurs de carrousel : ils réimplémentent le défilement en JavaScript pour obtenir la sémantique des diapositives, la physique d’accroche et les effets. react-horizontal-scrolling-menu n’en est pas un — il s’appuie sur le défilement natif du navigateur et ajoute un suivi de visibilité par élément. Lequel vous voulez dépend de ce que vous construisez ; et pour une bonne part des usages réels du carrousel, la réponse honnête est : vous construisiez un menu depuis le début.',

  table: {
    headers: [
      '',
      'cette bibliothèque',
      'Swiper',
      'Embla',
      'keen-slider',
      'react-slick',
    ],
    rows: [
      [
        'Ce que c’est',
        'Menu à défilement avec suivi de visibilité',
        'Framework complet de slider/carrousel',
        'Moteur de carrousel headless',
        'Moteur de slider indépendant du framework',
        'Portage React du slider slick de jQuery',
      ],
      [
        'Moteur de défilement',
        'Défilement natif du navigateur',
        'Transformations JS + physique',
        'Transformations JS + physique',
        'Transformations JS + physique',
        'Transformations JS (transitions CSS)',
      ],
      [
        'Bundle (noyau, min+gzip)',
        '≈5,7 kB',
        '≈40 kB',
        '≈8 kB',
        '≈7 kB',
        '≈15 kB + slick CSS',
      ],
      [
        'Quels éléments sont à l’écran',
        'Intégré — useIsVisible par élément',
        'Basé sur l’index de diapositive',
        'Événements d’index de diapositive',
        'Événements d’index de diapositive',
        'Basé sur l’index de diapositive',
      ],
      [
        'Accroche, effets, physique',
        'Aucun — volontairement',
        'Riche (fade, cube, coverflow…)',
        'Basé sur des plugins, avec tween',
        'Oui, y compris le mode libre',
        'Fade, mode centré',
      ],
      [
        'Boucle / lecture automatique',
        'Recettes sur l’API publique',
        'Props intégrées',
        'Plugins',
        'Options intégrées',
        'Props intégrées',
      ],
      [
        'Barre de défilement, molette, focus clavier',
        'Natif — gratuit depuis le navigateur',
        'Émulé / modules optionnels',
        'À faire soi-même (headless)',
        'À faire soi-même',
        'Limité',
      ],
      [
        'Idéal pour',
        'Rangées de catégories, onglets, filtres à puces',
        'Sliders plein écran, galeries',
        'Carrousels personnalisés (défaut de shadcn)',
        'Sliders personnalisés minimaux',
        'Migrations depuis slick hérité',
      ],
    ],
    note: 'Les tailles de bundle sont des noyaux approximatifs — consultez bundlephobia pour les chiffres actuels avant de décider sur la seule taille.',
  },

  prose: [
    {
      heading: 'D’abord, la vraie question',
      body: `Un **carrousel** présente des diapositives : une chose (ou une page de choses) à la fois, avec accroche, effets et une impression de « position 3 sur 8 ». Un **menu** présente une rangée que votre utilisateur parcourt et dans laquelle il choisit : un rail de catégories, une bande d’onglets, une barre de puces. Les carrousels veulent la sémantique des diapositives ; les menus veulent le défilement natif — inertie, barre de défilement, molette, toucher et focus clavier se comportant exactement comme sur le reste de la page — plus une chose que le navigateur ne donne pas : savoir quels éléments sont à l’écran.

Si vous construisez un slider d’images plein écran, une galerie hero ou quoi que ce soit avec une physique d’accroche à la diapositive, **utilisez une bibliothèque de carrousel — Embla ou Swiper sont excellents**. Cette page existe pour l’autre cas, celui que chaque FAQ de carrousel ignore en silence : des rangées de choses cliquables qui n’ont jamais vraiment été des diapositives.`,
    },
    {
      heading: 'face à Swiper',
      body: `Swiper est le framework de slider le plus complet qui existe : effets (fade, cube, coverflow), diapositives virtuelles, zoom, parallaxe, pagination et un écosystème mature. Ses ≈40 kB se justifient quand vous utilisez ce qu’il fournit. Il réimplémente le défilement avec des transformations, donc la barre de défilement native, le comportement de la molette et l’accessibilité du défilement sont des émulations que vous configurez, et non des défauts que vous héritez.

- **Choisissez Swiper** pour les sliders centrés sur les images, les effets ou tout ce qui doit ressembler à des diapositives.
- **Choisissez cette bibliothèque** quand le « carrousel » est une barre de puces façon YouTube ou une rangée de catégories façon Netflix : vous obtenez le défilement natif pour ≈34 kB de moins, plus \`useIsVisible\` par élément — ce que Swiper ne modélise pas, parce que les diapositives ne sont pas des éléments.`,
    },
    {
      heading: 'face à Embla',
      body: `Embla est un moteur de carrousel headless avec une belle physique et un adaptateur React de premier ordre — c’est sur lui que shadcn/ui construit son carrousel, et le bon défaut quand vous voulez un contrôle visuel total sur un vrai carrousel. Le headless a deux tranchants pour les menus : le scroll vers la vue à la sélection, la visibilité par élément, la désactivation des flèches et la gestion du focus sont tous à construire à la main.

- **Choisissez Embla** pour les carrousels au design personnalisé et la physique d’accroche avec une petite taille.
- **Choisissez cette bibliothèque** quand ces pièces construites à la main sont justement l’essentiel : \`scrollToItem\`, \`useIsVisible\`, l’état des flèches first/last et \`apiRef\` sont livrés fonctionnels.`,
    },
    {
      heading: 'face à keen-slider',
      body: 'keen-slider est un moteur de slider léger et indépendant du framework, un bon choix pour les sliders personnalisés minimaux quand vous voulez une seule dépendance entre frameworks. Comme les autres, il possède la couche de gestes avec des transformations, et son API est façonnée par l’index de diapositive : bien pour les diapositives, maladroit pour « fais défiler la puce sélectionnée dans la vue et dis-moi ce qui est visible ».',
    },
    {
      heading: 'face à react-slick',
      body: 'react-slick porte le carrousel slick de l’ère jQuery vers React. Il fonctionne encore, mais il traîne un fichier CSS séparé, son architecture est antérieure aux hooks et la maintenance est clairsemée. Les équipes qui le quittent tombent généralement dans deux camps : les vrais carrousels (vers Embla ou Swiper) — et les rangées de navigation pliées dans `centerMode` parce que slick était déjà installé. Ce second camp est exactement la forme de cette bibliothèque : [sélection centrée](/examples/center-on-click), [avance d’un élément](/examples/one-item-scroll) et [glisser pour défiler](/examples/mouse-drag) sans moteur de slider.',
    },
    {
      heading: 'À quoi ressemble le côté menu',
      body: `Chaque motif de ce site est en direct et rendu côté serveur, chacun avec sa source complète : [onglets défilables](/examples/center-on-click), [puces de filtre](/examples/add-item-and-scroll-to-it), [rangées à chargement de plus](/examples/add-items) et — les deux fonctions que les gens supposent nécessiter un moteur de carrousel — [boucle infinie](/examples/infinite-loop) et [lecture automatique](/examples/autoplay), chacune d’environ soixante lignes sur l’API publique.

- 5,7 kB min+gzip, TypeScript-first, MIT, ≈347k téléchargements/mois, maintenu depuis 2018 avec une API stable de React 16.8 à 19.
- Convivial pour le SSR : la rangée défile avant que votre JavaScript s’hydrate — cette page et chaque démo de ce site le prouvent.`,
    },
  ],

  links: {
    examples: 'Voir tous les exemples',
    storybook: 'Essayer dans Storybook',
    github: 'GitHub',
  },
};
