// French (fr) — translation of en/compare-pairs.ts.
//
// Values only: every key, its order and its type come from the English
// module, and a missing or renamed one is a type error rather than a
// silently English page.
// i18n:meta locale=fr source=en/compare-pairs.ts source-blob=0fb5673892e901be3f7c39eba5eb45e00488b9a5 status=translated
import type { ComparePairsCopy } from '../types.ts';

// Neutral-pair comparison pages. The voice is a referee's, not a vendor's:
// each page recommends the right carousel for carousel jobs and claims only
// the menu-shaped slice. Overselling here burns the credibility the pages
// exist to earn.
export const comparePairs: ComparePairsCopy = {
  hub: {
    heading: 'Plus de comparaisons',
    lede: 'Des pages plus approfondies sur les choix précis que les gens pèsent réellement.',
  },

  emblaVsSwiper: {
    meta: {
      title: 'Embla vs Swiper : quel carrousel React choisir',
      description:
        'Embla vs Swiper comparés honnêtement : taille du bundle, fonctionnalités, headless vs tout-inclus — et la troisième option quand votre carrousel est en réalité un menu.',
    },
    jsonLdHeadline:
      "Embla vs Swiper pour React : une comparaison honnête, et le cas où vous n'avez besoin d'aucun des deux",
    name: 'Embla vs Swiper',
    blurb:
      "Moteur headless ou tout-inclus — et le cas où vous n'avez besoin d'aucun des deux.",
    title: 'Embla vs Swiper : choisissez selon ce que vous construisez',
    lede: "Les deux sont d'excellents moteurs de carrousel activement maintenus, et le choix entre eux est réellement serré. Tout se résume à un seul axe : Swiper embarque chaque fonctionnalité intégrée ; Embla fournit un petit moteur headless sur lequel vous construisez. Cette page est écrite par le mainteneur d'une bibliothèque qui ne concurrence ni l'une ni l'autre — ce qui est aussi la troisième réponse tout en bas, pour les projets qui s'avèrent ne pas être des carrousels du tout.",
    table: {
      headers: ['', 'Embla', 'Swiper'],
      rows: [
        [
          "Ce que c'est",
          'Moteur de carrousel headless',
          'Framework complet de slider/carrousel',
        ],
        ['Bundle (cœur, min+gzip)', '≈8 kB', '≈40 kB (croît avec les modules)'],
        [
          'Style et balisage',
          "Entièrement les vôtres — il n'en fournit aucun",
          'Sa propre structure DOM et son CSS, thématisables',
        ],
        [
          'Effets (fondu, cube, coverflow…)',
          'Plugins communautaires, ou fait maison',
          'Intégrés, matures',
        ],
        [
          'Lecture automatique, pagination, miniatures',
          'Plugins officiels',
          'Modules intégrés',
        ],
        [
          'Intégration React',
          'Hook de premier ordre (useEmblaCarousel)',
          "Composants d'enveloppe autour d'un cœur vanilla",
        ],
        [
          "Remarque sur l'écosystème",
          'Le moteur sous le carrousel de shadcn/ui',
          'Le slider le plus utilisé sur le web',
        ],
        [
          'Idéal pour',
          'Carrousels sur mesure, systèmes de design',
          'Sliders axés image, galeries riches en fonctionnalités',
        ],
      ],
      note: 'Les tailles de bundle sont des cœurs approximatifs — consultez bundlephobia pour les chiffres actuels ; celui de Swiper croît avec les modules que vous importez.',
    },
    prose: [
      {
        heading: "Choisissez Embla quand le contrôle du design est l'objectif",
        body: `Embla vous donne la physique d'alignement, la gestion du glisser et un modèle de diapositives, et rien d'autre — pas de balisage, pas de CSS, pas de flèches. C'est sa force : dans un système de design, tout ce qui est visible est à vous, et le moteur ne lutte jamais contre vos styles. C'est sur cela que shadcn/ui construit son carrousel, ce qui vous indique le point idéal : les équipes qui veulent qu'un carrousel ressemble à *leur* produit, pas à une bibliothèque de carrousel.

Le coût est que chaque fonctionnalité au-delà du glissement est un ajout ou fait main : la lecture automatique et les noms de classes sont des plugins officiels ; les points de pagination, les miniatures et les effets sont à vous d'écrire.`,
      },
      {
        heading:
          "Choisissez Swiper quand vous voulez les fonctionnalités prêtes à l'emploi",
        body: `Swiper est la réponse tout-inclus : effets de fondu, cube et coverflow, diapositives virtuelles, zoom, parallaxe, galeries de miniatures, module a11y, pagination dans plusieurs styles — configurés, pas construits. Si votre produit a besoin de trois de ces éléments ce trimestre, Swiper rentabilise sa taille plusieurs fois.

Le coût est l'inverse de celui d'Embla : vous héritez du DOM de Swiper, de son CSS à thématiser, et d'un cœur en JavaScript vanilla enveloppé pour React — plus lourd à la fois en kilo-octets et en surface.`,
      },
      {
        heading: "La question à se poser avant l'un ou l'autre",
        body: `Les deux bibliothèques supposent que vous présentez des *diapositives* — une chose, ou une page de choses, à la fois, avec alignement et une notion de position. Une grande part des vrais « carrousels » n'a rien de tel : rangées de catégories, bandes de logos, barres d'onglets, filtres à puces — des rangées d'éléments cliquables que votre utilisateur parcourt et parmi lesquels il choisit. Ceux-là veulent le défilement natif (inertie, barre de défilement, molette, accessibilité gratuitement) plus le fait de savoir quels éléments sont à l'écran — et ni Embla ni Swiper ne modélisent la visibilité par élément, car les diapositives ne sont pas des éléments.

Pour cette forme, il existe une troisième option : [react-horizontal-scrolling-menu](/) (≈5,7 kB) repose sur le défilement natif et fournit \`useIsVisible\`, \`scrollToItem\` et des flèches conscientes des bords. Voyez-le comme une [rangée façon Netflix](/netflix-row), une [barre d'onglets](/scrollable-tabs) ou une [barre de puces](/filter-chips), ou le [tableau de comparaison complet](/compare) face aux deux.`,
      },
    ],
  },

  reactSlickAlternatives: {
    meta: {
      title: 'Alternatives à react-slick en 2026',
      description:
        'Migrer depuis react-slick : Embla et Swiper pour de vrais carrousels, react-horizontal-scrolling-menu pour les rangées de navigation façon centerMode. Guide de migration honnête.',
    },
    jsonLdHeadline:
      'Alternatives à react-slick : où migrer les vrais carrousels, et où doit aller votre rangée centerMode',
    name: 'Alternatives à react-slick',
    blurb:
      'Où migrer les vrais carrousels — et où doivent aller les rangées centerMode.',
    title:
      'Alternatives à react-slick : migrez selon ce que vous avez construit avec',
    lede: "react-slick porte le carrousel slick de l'ère jQuery vers React. Ça fonctionne encore, mais l'architecture est antérieure aux hooks, les publications sont rares, et cela traîne un fichier CSS séparé dans chaque build. Le bon remplaçant dépend moins des fonctionnalités que du camp parmi deux dans lequel se range votre usage.",
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
          "Ce que c'est",
          'Portage React de slick jQuery',
          'Moteur de carrousel headless',
          'Framework de slider complet',
          'Menu défilant, défilement natif',
        ],
        ['Maintenance', 'Rare', 'Active', 'Active', 'Active depuis 2018'],
        [
          'Bundle (min+gzip)',
          '≈15 kB + CSS slick',
          '≈8 kB',
          '≈40 kB',
          '≈5,7 kB',
        ],
        [
          'Fichier CSS supplémentaire requis',
          'Oui (deux)',
          'Non',
          'Oui (cœur)',
          "Un seul, ou Tailwind via l'élément shadcn",
        ],
        [
          'Sémantique de diapositives (alignement, points, fondu)',
          'Oui',
          'Oui',
          'Oui',
          'Non — délibérément',
        ],
        [
          "Rangées d'éléments cliquables",
          'Détourné via centerMode',
          'Fait main sur le moteur',
          'Configuré à contre-courant',
          "Le cas d'usage principal",
        ],
      ],
      note: 'Les tailles sont des cœurs approximatifs. La dernière colonne est la propre bibliothèque de ce site — le tableau le dit plutôt que de prétendre le contraire.',
    },
    prose: [
      {
        heading: "Premier camp : c'était un vrai carrousel",
        body: `Sliders héros, galeries d'images, rotateurs de témoignages — tout ce où les points, le fondu et la lecture automatique de slick portaient le design. Migrez vers un vrai moteur de carrousel :

- **[Embla](/compare/embla-vs-swiper)** si vous stylez tout vous-même et voulez un petit cœur headless — ce qui se rapproche le plus de « slick, modernisé » dans l'esprit.
- **Swiper** si vous utilisiez abondamment la liste de fonctionnalités de slick ; chaque fonctionnalité de slick a un équivalent Swiper, généralement meilleur.

Faites correspondre \`slidesToShow\`/\`slidesToScroll\` aux \`slidesInView\`/\`slidesToScroll\` d'Embla ou aux \`slidesPerView\`/\`slidesPerGroup\` de Swiper, et attendez-vous à supprimer vos surcharges CSS de positionnement de flèches — les deux successeurs vous laissent rendre vos propres boutons.`,
      },
      {
        heading:
          "Deuxième camp : c'était de la navigation déguisée en centerMode",
        body: `L'autre installation de slick est la discrète : une rangée de catégories, de logos, de dates ou de filtres, tordue en carrousel avec \`centerMode\`, \`focusOnSelect\` et \`variableWidth\` parce que slick était déjà dans le bundle. L'indice révélateur, c'est ce contre quoi vous vous battiez : des clics se déclenchant après des glissers, des flèches au mauvais moment, des éléments que vous ne pouviez pas mesurer, un alignement dont vous ne vouliez pas.

Cette rangée était un menu. [react-horizontal-scrolling-menu](/) fait les trois choses que centerMode simulait — [centrer l'élément cliqué](/examples/center-on-click), défiler nativement avec le [support du glisser](/examples/mouse-drag), et signaler [quels éléments sont visibles](/examples/simple) — en ≈5,7 kB sans aucun moteur de slider. Voir les pages [onglets défilants](/scrollable-tabs) et [rail de catégories](/category-rail) pour les deux formes les plus courantes.`,
      },
      {
        heading:
          "Quel que soit le camp : la migration est plus petite qu'il n'y paraît",
        body: "La surface d'API de slick est large, mais les audits de configurations réelles se réduisent vite : la plupart des projets utilisent une poignée de props. Listez celles que vous utilisez réellement, décidez dans quel camp se situe chaque usage, et migrez instance par instance — les deux camps coexistent souvent dans une même base de code, et rien n'impose qu'ils atterrissent tous deux sur la même bibliothèque.",
      },
    ],
  },

  swiperAlternatives: {
    meta: {
      title: 'Alternatives plus légères à Swiper pour React',
      description:
        'Vous cherchez une alternative plus légère à Swiper en React ? Embla et keen-slider pour de vrais carrousels, react-horizontal-scrolling-menu pour les rangées en forme de menu. Tailles comparées.',
    },
    jsonLdHeadline:
      "Alternatives à Swiper pour React : carrousels plus légers, et l'échappatoire en forme de menu",
    name: 'Alternatives à Swiper',
    blurb:
      "Quand ≈40 kB est le problème : des moteurs plus légers, et l'échappatoire en forme de menu.",
    title:
      'Alternatives à Swiper pour React, selon ce que vous fuyez réellement',
    lede: "Personne ne quitte Swiper parce qu'il est mauvais — c'est le slider le plus complet qui existe. Les gens le quittent à cause du poids (≈40 kB avant les modules), parce qu'ils héritent de son DOM et de son CSS, ou parce que leur « slider » n'a jamais vraiment été des diapositives. Chaque plainte a une meilleure réponse différente.",
    table: {
      headers: [
        '',
        'Swiper',
        'Embla',
        'keen-slider',
        'react-horizontal-scrolling-menu',
      ],
      rows: [
        ['Bundle (cœur, min+gzip)', '≈40 kB', '≈8 kB', '≈7 kB', '≈5,7 kB'],
        [
          'Modèle',
          'Diapositives, tout-inclus',
          'Diapositives, headless',
          'Diapositives, moteur minimal',
          'Éléments dans une rangée à défilement natif',
        ],
        [
          'Effets et modules',
          'Le plus riche disponible',
          'Plugins / fait main',
          'Quelques-uns intégrés',
          'Aucun — des recettes à la place',
        ],
        [
          'Possède la couche de gestes',
          'Oui (transformations)',
          'Oui (transformations)',
          'Oui (transformations)',
          'Non — le navigateur défile',
        ],
        [
          'Visibilité par élément',
          "Événements d'index de diapositive",
          "Événements d'index de diapositive",
          "Événements d'index de diapositive",
          'Intégrée (useIsVisible)',
        ],
        [
          'Meilleur remplacement quand',
          '—',
          'Vous stylez tout de toute façon',
          'Slider minimal, sans dépendance à React',
          'Les « diapositives » sont des éléments cliquables',
        ],
      ],
      note: "Les tailles sont des cœurs approximatifs — celui de Swiper croît avec les modules importés, ce qui signifie aussi qu'un build Swiper allégé est plus petit que sa réputation.",
    },
    prose: [
      {
        heading: 'Fuir les kilo-octets : Embla ou keen-slider',
        body: `Si le produit est un vrai carrousel — alignement, une page de diapositives à la fois — les moteurs légers sont presque des remplacements directs :

- **[Embla](/compare/embla-vs-swiper)** (≈8 kB) : headless, physique superbe, hook React de premier ordre, le moteur sous le carrousel de shadcn/ui. Vous apportez tout le balisage et le CSS — c'est le principe.
- **keen-slider** (≈7 kB) : un moteur minimal agnostique du framework, pratique quand le même slider doit être livré sur des surfaces React et non React.

Les deux conservent le modèle de diapositives basé sur les transformations, donc des effets comme le fondu ou le coverflow restent à faire soi-même — si vous en dépendez, un build Swiper allégé est honnêtement la meilleure réponse plutôt que de les réimplémenter.`,
      },
      {
        heading: 'Fuir le modèle de diapositives : le cas en forme de menu',
        body: `L'autre sortie concerne les projets où la sémantique de diapositives de Swiper n'a jamais vraiment été essentielle : rangées de catégories, murs de logos, barres d'onglets, barres de puces, rails de produits. Les indices sont une configuration comme \`slidesPerView: 'auto'\` combinée à \`freeMode: true\` — cette paire, c'est Swiper qu'on demande d'imiter le défilement natif.

[react-horizontal-scrolling-menu](/) (≈5,7 kB) est ce défilement natif, plus les parties que le navigateur ne fournit pas : [visibilité par élément](/examples/simple), [défilement vers un élément](/examples/scroll-to-item), des flèches conscientes des bords et un [glisser qui ne casse pas les clics](/examples/mouse-drag). Aucun effet, aucun alignement, aucune émulation de gestes — voir les pages [rangée Netflix](/netflix-row), [onglets](/scrollable-tabs) et [barre de puces](/filter-chips), ou le [tableau complet](/compare).`,
      },
      {
        heading: 'Un avertissement équitable dans les deux sens',
        body: "Migrer hors de Swiper pour économiser du poids, puis reconstruire à la main la lecture automatique, la pagination, les annonces a11y et les effets, c'est ainsi qu'un problème de 40 kB devient un problème d'un mois-personne. Passez à un moteur plus léger quand votre usage est réellement un sous-ensemble — et à un menu défilant seulement quand la sémantique de diapositives était factice depuis le début. Si vous utilisez la profondeur de Swiper, gardez Swiper.",
      },
    ],
  },
};
