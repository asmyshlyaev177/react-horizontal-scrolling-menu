// French (fr) — translation of en/use-cases.ts.
//
// Values only: every key, its order and its type come from the English
// module, and a missing or renamed one is a type error rather than a
// silently English page.
// i18n:meta locale=fr source=en/use-cases.ts source-blob=0bba3e70db5e9e86a65737d044573e94eae8728e status=translated
import type { UseCasesCopy } from '../types.ts';

export const useCases: UseCasesCopy = {
  hub: {
    heading: 'Cas d’usage',
    lede: 'Des patterns complets par objectif — démo live, code et installation shadcn.',
  },

  netflixRow: {
    name: 'Rangée façon Netflix',
    blurb:
      'Cartes affiches, flèches au survol sur les bords, fondu des bords, glisser-défiler.',
    meta: {
      title: 'Rangée horizontale façon Netflix en React',
      description:
        'Créez une rangée de catégories façon Netflix en React avec défilement natif : flèches au survol, fondu des bords, glisser pour défiler, suivi de visibilité. Démo et code source complets.',
    },
    jsonLdHeadline:
      'Comment créer une rangée horizontale façon Netflix en React — sans bibliothèque de carrousel',
    title: 'Rangée horizontale façon Netflix en React',
    lede: "La rangée d'affiches que vous parcourez sur chaque site de streaming repose sur le défilement natif à inertie, avec des flèches superposées par-dessus. C'est exactement ce que fournit `react-horizontal-scrolling-menu` : vos cartes, le défilement natif, et une visibilité par élément pour que les flèches sachent quand se cacher.",
    demoHint:
      'Faites-la glisser, ou survolez la rangée — les flèches apparaissent en fondu sur les bords, et chacune disparaît quand son extrémité de la rangée est atteinte.',
    prose: [
      {
        heading: 'Pourquoi le défilement natif convient',
        body: `Une rangée Netflix n'affiche jamais une seule diapositive à la fois. Les éléments sont volontairement coupés en partie sur les bords — l'affiche tronquée est l'indice visuel qui dit « il y en a plus ». Les moteurs de carrousel luttent contre cela : ils s'approprient la couche de gestes avec des transformations JavaScript, s'alignent sur des limites de diapositives, et réimplémentent l'inertie que les navigateurs de vos utilisateurs possèdent déjà. Sur une rangée de cartes cliquables, tout cela est superflu.

Le défilement natif vous donne l'inertie, le tactile, le trackpad et la barre de défilement gratuitement. Les deux choses qu'il ne vous donne pas sont les flèches superposées et le fait de savoir quelles cartes sont à l'écran — et ce sont justement les deux choses qu'ajoute cette bibliothèque, via [\`useIsVisible\`](/examples/simple) par élément et un état des flèches conscient des bords.`,
      },
      {
        heading: "Les trois détails qui vendent l'effet",
        body: `- **Les flèches se superposent au contenu**, elles ne sont pas à côté. Positionnez-les en absolu par-dessus les extrémités de la rangée (la démo ci-dessus les fait passer par \`Header\` pour qu'elles restent dans le contexte du menu), affichez-les au survol, et masquez chacune quand [\`useLeftArrowVisible\` / \`useRightArrowVisible\`](/examples/simple) signalent que cette extrémité de la rangée est atteinte.
- **Les bords s'estompent en fondu.** Une seule ligne de CSS — un dégradé \`mask-image\` sur le conteneur de défilement — remplace la logique d'« aperçu » que les plugins de carrousel embarquent pour cela.
- **Le glisser ne doit pas déclencher de clics.** Un glisser de souris qui se termine sur une affiche ne doit pas l'ouvrir. La [recette de glisser pour défiler](/examples/mouse-drag) suit l'état du glisser et absorbe exactement ce clic.`,
      },
      {
        heading: 'Faire monter en charge : rangées paresseuses et longs rails',
        body: `Les interfaces de streaming empilent des dizaines de rangées avec des centaines de cartes. Comme les éléments sont du DOM ordinaire dans un conteneur de défilement natif, rien ne se re-rend au défilement — l'[exemple de performance](/examples/performance) fait tourner 300 éléments sans virtualisation. La visibilité par élément offre aussi le chargement paresseux d'images gratuitement : affichez un espace réservé jusqu'à ce que \`useIsVisible\` signale que la carte est à l'écran.

Si votre rangée doit boucler à la fin, c'est le seul endroit où la sémantique des diapositives aide vraiment — voir la [recette de boucle infinie](/examples/infinite-loop) pour la version côté application d'environ 60 lignes, avant de vous tourner vers un moteur de carrousel.`,
      },
    ],
    snippet: {
      heading: 'Le motif, minimal',
      lede: "Superposez des flèches sur une rangée à défilement natif — la démo ci-dessus, c'est cette structure plus le style. Le code source complet, prêt à l'emploi, avec glisser et fondu des bords, est fourni ci-dessous comme composant shadcn.",
    },
    shadcn: {
      heading: 'Ou installez-le comme composant shadcn',
      body: "L'élément de registre [media-row](https://react-horizontal-scrolling-menu.dev/r/media-row.json) est exactement ce motif — flèches au survol, fondu des bords en dégradé, glisser pour défiler — sous forme de composant stylé avec Tailwind dans votre `components/ui/`, à vous de l'éditer :",
    },
  },

  scrollableTabs: {
    name: 'Onglets défilants',
    blurb:
      'Une barre d’onglets qui déborde avec élégance et centre l’onglet actif.',
    meta: {
      title: 'Onglets défilants React — sans Material UI',
      description:
        "Onglets défilants en React avec défilement natif : l'onglet actif se centre lui-même, les flèches n'apparaissent qu'en cas de besoin, contenu d'onglet libre. Démo en direct et code source.",
    },
    jsonLdHeadline:
      'Onglets défilants en React : défilement natif, sélection centrée, sans Material UI',
    title: 'Des onglets défilants React qui défilent comme le navigateur',
    lede: "Une barre d'onglets cesse de tenir dès que votre produit dépasse six onglets. La solution n'est pas une police plus petite — c'est une barre qui défile : le débordement repose sur le navigateur, cliquer sur un onglet le centre, et les flèches n'apparaissent que s'il y a quelque part où aller.",
    demoHint:
      'Cliquez sur un onglet près du bord — il se centre lui-même par défilement.',
    prose: [
      {
        heading: 'Le seul comportement qui compte : centrer à la sélection',
        body: `Une barre d'onglets défilante ne tient que sur ce qui se passe quand vous cliquez sur un onglet au bord : il doit glisser vers le centre, révélant ses voisins des deux côtés. C'est un seul appel ici — \`scrollToItem(el, 'smooth', 'center')\` — câblé dans l'[exemple de centrage au clic](/examples/center-on-click). Restaurer l'onglet actif au montage est le même appel avec \`'auto'\`, montré dans [sauvegarder et restaurer la position](/examples/save-restore-position).

Les flèches proviennent des mêmes données de visibilité : \`useLeftArrowVisible\` est faux uniquement tant que le premier onglet est hors écran, donc la flèche gauche s'affiche exactement quand elle est utile. Aucun code de mesure, aucun observateur de redimensionnement à écrire vous-même.`,
      },
      {
        heading: 'Si vous dépassez les onglets défilants de MUI',
        body: `Les onglets \`variant="scrollable"\` de Material UI sont la bonne réponse à l'intérieur du système de design de Material — jusqu'à ce que vos « onglets » cessent d'être des onglets. MUI soude la barre à la sémantique de Tabs : une paire \`value\`/\`onChange\`, des panneaux d'onglets, et des boutons de défilement que MUI masque sur mobile par défaut. Dès que votre rangée contient des puces, des cartes, des avatars ou du contenu mixte, ou a besoin du glisser pour défiler, ou a besoin de savoir quels éléments sont visibles, vous luttez contre le composant plutôt que de l'utiliser.

Cette bibliothèque est la couche en dessous : une rangée défilante avec suivi de visibilité, sans aucun avis sur ce qu'est un « onglet ». Votre onglet est n'importe quel composant portant un \`itemId\` — stylez-le avec Tailwind, le \`styled\` de MUI, ou du CSS ordinaire. L'état de sélection reste le vôtre, exactement comme la démo ci-dessus le garde dans un seul \`useState\`. La [recette des onglets défilants au-delà de MUI](/examples/mui-scrollable-tabs) est ce pont mis en œuvre — \`value\`/\`onChange\` conservés, la barre remplacée.`,
      },
      {
        heading:
          "L'accessibilité est presque gratuite — attention à deux lacunes",
        body: `Comme la barre est un conteneur de défilement natif, le focus clavier, l'ordre de lecture du lecteur d'écran et le RTL viennent de la plateforme — déplacer le focus à travers les onglets les fait défiler dans la vue sans aucun code, et le [RTL](/examples/rtl) ne nécessite aucune configuration. Deux choses restent à votre charge, comme pour toute interface d'onglets : choisir votre motif ARIA (\`role="tablist"\` si de vrais panneaux basculent, \`aria-current\` si les « onglets » sont de la navigation), et conserver la suppression de clic de la recette de [glisser pour défiler](/examples/mouse-drag) pour qu'un relâchement de glisser n'active jamais un onglet.`,
      },
    ],
    snippet: {
      heading: 'Le motif, minimal',
      lede: "Les onglets sont de simples boutons avec un `itemId` ; en sélectionner un le centre. C'est toute l'idée — la démo ci-dessus ajoute le style et le glisser.",
    },
    shadcn: {
      heading: 'Ou installez-le comme composant shadcn',
      body: "L'élément de registre [scroll-tabs](https://react-horizontal-scrolling-menu.dev/r/scroll-tabs.json) fournit ce motif piloté par les données — passez `tabs`, `value`, `onValueChange` — comme composant modifiable dans votre `components/ui/` :",
    },
  },

  filterChips: {
    name: 'Chips de filtre',
    blurb:
      'Une barre de chips qui fait défiler les nouveaux filtres en vue sans casser les clics.',
    meta: {
      title: 'Puces de filtre React dans une barre défilante',
      description:
        "Une barre de puces de filtre horizontale en React : les puces défilent nativement, ajouter une puce la fait défiler jusqu'à la vue, glisser pour défiler sans casser les clics. Démo en direct et code source.",
    },
    jsonLdHeadline:
      'Construire une barre de puces de filtre défilante en React avec défilement natif',
    title: 'Une barre de puces de filtre qui défile, en React',
    lede: 'La rangée de puces sous chaque barre de recherche — sujets YouTube, filtres de boutique, sélecteurs de tags — est un conteneur de défilement sur une seule ligne rempli de boutons à bascule. Les 10 % difficiles concernent ce qui se passe aux bords : de nouvelles puces apparaissant hors écran, des glissers qui ne doivent rien basculer, et des flèches qui savent quand elles sont inutiles.',
    demoHint:
      "Ajoutez un filtre — la rangée fait défiler la nouvelle puce jusqu'à la vue toute seule.",
    prose: [
      {
        heading: 'Les cas limites sont la fonctionnalité',
        body: `Toute rangée flex avec \`overflow-x: auto\` défile. Une barre de puces se distingue sur les détails :

- **Une puce ajoutée hors écran doit se signaler.** La démo défile jusqu'à chaque nouvelle puce avec \`apiRef.current.scrollToItem(el, 'smooth', 'end')\` après le rendu — l'[exemple d'ajout d'élément et de défilement vers celui-ci](/examples/add-item-and-scroll-to-it) est exactement ce câblage.
- **Glisser pour défiler, cliquer pour basculer — jamais les deux.** Les utilisateurs de bureau font glisser la rangée comme une surface tactile ; relâcher au-dessus d'une puce ne doit pas la faire basculer. La [recette de glisser](/examples/mouse-drag) suit le geste et supprime exactement ce clic.
- **Des flèches seulement quand elles sont utiles.** \`useLeftArrowVisible\` / \`useRightArrowVisible\` sont câblées au même IntersectionObserver que tout le reste, donc les flèches se désactivent aux véritables bords — y compris après l'ajout ou la suppression de puces.`,
      },
      {
        heading: "L'état reste entre vos mains",
        body: `La bibliothèque défile ; elle ne possède pas la sélection. Les puces sont vos boutons — \`aria-pressed\` pour les bascules multi-sélection, un état ordinaire pour la sélection unique — et le menu a seulement besoin que chacune porte un \`itemId\`. Cela signifie que l'état des puces se compose avec ce que vous avez déjà : paramètres d'URL, une bibliothèque de formulaires, un modèle de filtre piloté par serveur. Supprimer une puce, c'est [retirer un élément](/examples/add-items) ; l'animer en sortie est l'[exemple d'animation d'éléments](/examples/items-animation).`,
      },
      {
        heading: 'Mobile : un avertissement sur le défilement du corps de page',
        body: `Sur les écrans tactiles, un balayage horizontal à l'intérieur de la barre peut entraîner la page de côté avec lui sur certains navigateurs. Si vous constatez cela, l'[exemple d'empêcher le défilement du corps](/examples/prevent-body-scroll) montre le \`touch-action\` et le confinement de surdéfilement pour le verrouiller — CSS uniquement, aucune bibliothèque de gestes.`,
      },
    ],
    snippet: {
      heading: 'Le motif, minimal',
      lede: "Les puces sont des boutons à bascule avec un `itemId` ; une ref vers l'API du menu fait défiler une puce nouvellement ajoutée jusqu'à la vue.",
    },
    shadcn: {
      heading: 'Ou installez-le comme composant shadcn',
      body: "L'élément de registre [chip-bar](https://react-horizontal-scrolling-menu.dev/r/chip-bar.json) fournit ceci comme composant contrôlé — `options`, `selected`, `onSelectedChange` — stylé avec Tailwind dans votre `components/ui/` :",
    },
  },

  categoryRail: {
    name: 'Rail de catégories',
    blurb:
      'Une rangée de rayons e-commerce : flèches conscientes des bords, images lazy, analytics.',
    meta: {
      title: "Rail de catégories React pour l'e-commerce",
      description:
        "Un rail de catégories horizontal en React : défilement natif, flèches qui se désactivent aux bords, visibilité par élément pour les images paresseuses et l'analytique. Démo et code source.",
    },
    jsonLdHeadline:
      'Construire un rail de catégories e-commerce en React sur du défilement natif',
    title: 'Un rail de catégories pour votre boutique, en React',
    lede: "Les rails de catégories — la rangée cliquable de rayons au-dessus d'une grille de vitrine — sont les conteneurs de défilement les plus fréquentés en e-commerce : chaque vignette est un lien, rien ne s'aligne, et une demi-vignette qui dépasse au bord est ce qui invite au défilement.",
    demoHint:
      'Faites glisser le rail ou utilisez les flèches — elles se désactivent aux véritables extrémités de la rangée.',
    prose: [
      {
        heading: 'Pourquoi le défilement natif gagne sur une vitrine',
        body: `Les rails de vitrine vivent au-dessus de la ligne de flottaison, sur des pages où vous vous battez pour chaque point Lighthouse. Un moteur de carrousel embarque des dizaines de kilo-octets d'émulation de gestes pour faire ce que le navigateur fait nativement ; cette bibliothèque pèse ≈5,7 kB min+gzip et laisse le défilement à la plateforme, donc il n'y a pas de saccade d'hydratation — le rail défile avant même le chargement de votre JavaScript, ce qui signifie aussi qu'il fonctionne dans le HTML rendu côté serveur que voient vos robots d'indexation. Cette page elle-même en est la preuve rendue côté serveur : la démo ci-dessus défile avec JavaScript désactivé.

La [page de comparaison](/compare) contient le tableau complet face à Swiper, Embla, keen-slider et react-slick.`,
      },
      {
        heading: 'Le suivi de visibilité est une fonctionnalité de vitrine',
        body: `La visibilité par élément ressemble à un détail d'implémentation jusqu'à ce que vous la rapprochiez du merchandising :

- **Images paresseuses** — affichez une vignette d'espace réservé jusqu'à ce que \`useIsVisible\` signale qu'elle est à l'écran.
- **Analytique d'impressions** — \`getVisible()\` (en direct dans la [démo héro](/) de la page d'accueil) vous indique exactement quelles catégories ont été vues, pas seulement que le rail s'est rendu.
- **Flèches conscientes des bords** — se désactivent ou se masquent aux véritables extrémités, même après le chargement asynchrone de catégories, comme dans l'[exemple d'ajout d'éléments](/examples/add-items).`,
      },
      {
        heading: 'Adaptez-le à votre système de design',
        body: `Les vignettes sont vos composants — cartes images, cercles, pastilles de texte — chacune portant un \`itemId\`. La hauteur et la largeur viennent de votre CSS ; le menu n'impose aucune dimension. Avancez d'un élément à la fois comme un slider produit avec [one-item-scroll](/examples/one-item-scroll), affichez un [indicateur de progression](/examples/progress) de défilement, ou livrez-le en RTL pour les boutiques arabes et hébraïques avec l'[exemple RTL](/examples/rtl) — le rail est de la composition, pas de la configuration.`,
      },
    ],
    snippet: {
      heading: 'Le motif, minimal',
      lede: 'Des vignettes avec un `itemId`, des flèches issues des hooks de visibilité — le rail complet fait moins de quarante lignes.',
    },
    shadcn: {
      heading: 'Ou installez-le comme composant shadcn',
      body: "L'élément de registre de base [scroll-menu](https://react-horizontal-scrolling-menu.dev/r/scroll-menu.json) est ce rail — flèches stylées shadcn, glisser pour défiler, barre de défilement masquée — installé dans votre `components/ui/` et stylé par vos tokens :",
    },
  },
};
