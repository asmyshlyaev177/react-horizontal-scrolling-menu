// French (fr) — translation of en/home.ts.
//
// Values only: every key, its order and its type come from the English
// module, and a missing or renamed one is a type error rather than a
// silently English page.
// i18n:meta locale=fr source=en/home.ts source-blob=732c3dd50b5369701d5eea6813f6b1f5c2c05ab4 status=translated
import { INTENT, REACT_STATUS, STORIES } from '../../lib/links.ts';
import type { HomeCopy } from '../types.ts';

// Deep-links the import, not the repo root: the claim is that they render
// this component in production, and the line proves it. Commit-pinned so a
// refactor on their side can't turn it into a 404.
const OWID =
  'https://github.com/owid/owid-grapher/blob/4a60a2fb4532a2d287a1ef5660339dcc32bcd483/site/gdocs/components/KeyInsights.tsx#L3';

export const home: HomeCopy = {
  jsonLdDescription:
    'Composant de menu à défilement horizontal pour React avec suivi de visibilité par élément, construit sur le défilement natif du navigateur.',

  hero: {
    titleLead: 'Le menu horizontal qui ',
    titleHighlight: 'sait ce qui est visible',
    sub: 'Un menu à défilement React construit sur le propre défilement du navigateur — suivi de visibilité par élément, flèches, glisser et une API impérative complète. `5,7 kB` gzippé.',
    primaryCta: 'Démarrer',
    secondaryCta: 'Parcourir les exemples',
    storybookCta: 'Ouvrir le Storybook',
  },

  install: {
    ariaLabel: 'Installer',
    copyLabel: 'Copier la commande d’installation',
    shadcnNote:
      'Ou un composant [shadcn/ui](https://ui.shadcn.com) prêt à l’emploi — flèches, drag-to-scroll, stylisé',
    shadcnCopyLabel: 'Copier la commande shadcn',
    facts: [
      '**347k** téléchargements/mois',
      '**5,7 kB** min+gzip',
      'React **16.8 – 19**',
      '**MIT**',
    ],
  },

  autoplay: {
    heading: 'Lecture automatique, sans moteur de carrousel',
    lede: 'Il n’y a pas de prop `autoplay` — ce rail est une recette sur l’API publique : la rangée clonée aux deux extrémités, un saut de `scrollLeft` à la couture et un minuteur appelant `scrollNext()`. Il se met en pause au survol, au focus et sur les onglets cachés, reste immobile sous mouvement réduit — et vous pouvez le faire glisser, même en arrière, à travers la couture.',
    recipeLink: 'Lire la recette complète',
    storybookLink: 'Modifier en direct dans Storybook',
  },

  positioning: {
    heading: 'Un *menu*, pas un carrousel',
    scope: [
      'Embla, Swiper et keen-slider réimplémentent le défilement en JavaScript pour construire des sliders d’images : points d’accroche, physique de ressort, boucle de rendu. Cette bibliothèque ne fournit rien de tout cela. Elle s’appuie sur le défilement natif du navigateur et ajoute la seule chose que le navigateur ne donne pas : savoir exactement quels éléments sont à l’écran.',
      '**Le mauvais outil** pour un slider d’images plein écran — utilisez Embla ou Swiper là-bas. **Le bon outil** pour les rangées de catégories, les onglets, les filtres à puces et toute rangée d’éléments dont votre application a besoin de raisonner.',
    ],
    pillars: [
      {
        title: 'Défilement natif',
        body: 'L’inertie, la barre de défilement, le toucher, la molette et l’accessibilité viennent du navigateur, pas d’un moteur physique. La rangée défile avant que votre JavaScript ne s’hydrate — chaque démo de cette page est rendue côté serveur.',
      },
      {
        title: 'Suivi de visibilité',
        body: 'IntersectionObserver signale quels éléments sont à l’écran. `useIsVisible(itemId)` abonne un composant à un élément — aucun calcul de position de défilement, et seuls les éléments concernés sont re-rendus.',
      },
      {
        title: 'Impératif quand vous en avez besoin',
        body: '`scrollToItem`, `scrollNext`, `scrollPrev`, recherche par id ou index — via le contexte dans le menu, ou `apiRef` depuis l’extérieur.',
      },
      {
        title: 'Vos composants, votre CSS',
        body: 'Les flèches, l’en-tête, le pied de page et chaque élément sont des composants que vous écrivez. La largeur de l’élément est votre CSS. La bibliothèque fournit 210 octets de styles de mise en page et s’écarte du chemin.',
      },
    ],
  },

  quickStart: {
    heading: 'Démarrage rapide',
    lede: 'Un fichier, aucune configuration : des éléments avec `itemId`, deux flèches lisant `VisibilityContext` et l’import de la feuille de styles.',
    notes: [
      '`itemId` est requis sur chaque élément — c’est ainsi que fonctionne le suivi. La `key` de React sert de solution de repli.',
      '`styles.css` est un import séparé ; le bundle JS n’injecte jamais de CSS.',
      'La largeur de l’élément vient de votre propre CSS — le menu ne mesure rien.',
    ],
    link: 'Lire l’exemple complet de démarrage',
  },

  aiSkills: {
    heading: 'Ou confiez-le à votre agent de code',
    body: `Les modèles entraînés sur d’anciennes versions recherchent encore \`visibleElements\`, les éléments \`Separator\` et une prop \`Arrows\` — tous supprimés il y a des années — et inventent une prop \`autoplay\` qui n’a jamais existé. Pour mettre fin à cela, le paquet embarque huit fichiers \`SKILL.md\` : des guides par tâche que votre agent charge à la demande via [TanStack Intent](${INTENT}), versionnés avec la bibliothèque plutôt qu’avec cette page.`,
    copyLabel: 'Copier la commande Intent',
    note: 'Exécutez une fois dans un projet où le paquet est déjà installé. Votre agent découvre ensuite les compétences depuis `node_modules/react-horizontal-scrolling-menu/skills/`.',
    // The SKILL.md files published inside the package, and the one line each
    // that tells an agent — or a reader deciding whether this is worth a
    // command — when it is the one to load. Kept in the same order as
    // public/llms.txt, which is the machine-readable version of this table.
    skills: [
      {
        id: 'menu-setup',
        when: 'Un premier menu fonctionnel, des flèches, l’import CSS requis',
      },
      {
        id: 'menu-visibility',
        when: 'Ce qui est à l’écran et l’état des flèches aux extrémités',
      },
      {
        id: 'menu-scrolling',
        when: 'scrollToItem, apiRef, pagination page par page',
      },
      {
        id: 'menu-interactions',
        when: 'Glisser, molette et toucher — et leurs fabriques de gestionnaires',
      },
      {
        id: 'menu-recipes',
        when: 'Lecture auto, boucle infinie, charger plus : des recettes, pas des props',
      },
      {
        id: 'menu-transitions-rtl',
        when: 'Rythme d’animation, easing personnalisé, droite à gauche',
      },
      {
        id: 'menu-testing-ssr',
        when: 'Next.js et RSC, mocks Jest, Playwright',
      },
      {
        id: 'menu-migration',
        when: 'Mettre à niveau le code antérieur à v8 et les API que les modèles inventent encore',
      },
    ],
    skillsLink: 'Lire les compétences sur GitHub',
    llmsLink: 'llms.txt — les mêmes faits, condensés',
  },

  gallery: {
    heading: 'Des recettes que vous expédierez vraiment',
    lede: 'Quatre motifs courants, en direct, avec les lignes qui comptent.',
    tabs: {
      title: 'Une bande d’onglets qui centre l’onglet actif',
      body: "Cliquez sur un onglet : `scrollToItem` avec `inline: 'center'` l’amène au milieu de la rangée. Le même appel gère `start`, `end` et la pagination.",
      link: 'Voir l’exemple complet',
    },
    chips: {
      title: 'Ajoutez une puce, faites défiler vers elle',
      body: 'L’état vit hors du menu ; `apiRef` y accède. Ajoutez un filtre et la rangée le suit.',
      link: 'Voir l’exemple complet',
    },
    infinite: {
      title: 'Charger plus quand la fin apparaît',
      body: '`onUpdate` vous dit quand le dernier élément devient visible — ajoutez la page suivante juste là. Pas d’écouteurs de défilement, pas de seuils en pixels à régler.',
      link: 'Voir l’exemple complet',
    },
    rtl: {
      title: 'De droite à gauche, avec une prop',
      body: '`RTL` inverse la direction du conteneur de défilement ; les flèches et la logique de pagination suivent.',
      link: 'Voir l’exemple complet',
    },
  },

  features: {
    heading: 'Ce qu’il y a dans la boîte',
    included: [
      'Hooks de visibilité par élément — `useIsVisible(itemId)`',
      'Helpers `first` / `last` pour l’état des flèches',
      '`scrollToItem` · `scrollNext` · `scrollPrev`',
      '`apiRef` pour le contrôle hors du menu',
      'Entrée par glisser, molette, toucher et barre de défilement',
      'Détection dynamique d’ajout/suppression',
      'Emplacements Header et Footer',
      'Helpers de pagination `slidingWindow` + `getItemsPos`',
      'Prise en charge de droite à gauche',
      'Fonctions de transition personnalisées',
      'Sûr pour le SSR — cette page le prouve',
      'TypeScript-first — `publicApiType` exporté',
      'Une API stable de React 16.8 à 19',
    ],
    notIncludedHeading: 'Pas dans la boîte',
    notIncluded: [
      'Physique d’accroche et de ressort',
      'Sliders d’images plein écran',
      'Lightboxes',
    ],
    note: `Cela appartient au monde des sliders d’images — Embla et Swiper le font bien. La [boucle infinie](${STORIES.infiniteLoop}) et la [lecture automatique](${STORIES.autoplay}) ne sont pas non plus des props — ce sont des recettes : environ soixante lignes de l’API publique chacune, modifiables en direct dans Storybook. Le rail en haut de cette page est exactement cette recette en cours d’exécution. Cela reste un menu.`,
  },

  proof: {
    statement:
      'Téléchargé **347 516 fois** le mois dernier par environ **20 000 dépôts** — maintenu depuis **2018**.',
    notes: [
      '788 étoiles sur GitHub',
      `Présenté dans [React Status #257](${REACT_STATUS})`,
      `En production chez [Our World in Data](${OWID})`,
    ],
  },

  storybook: {
    heading: 'Chaque exemple est modifiable, dans votre navigateur',
    body: 'Storybook fait office de terrain de jeu : chaque histoire est livrée avec un éditeur Monaco chargé des vraies définitions de types de la bibliothèque. Changez le code, regardez-le se re-rendre — sans compte sandbox ni configuration locale.',
    primaryCta: 'Ouvrir Storybook',
    secondaryCta: 'Référence de l’API',
  },

  author: {
    heading: 'Créé et maintenu par Aleksandr Smyshliaev',
    body: 'Publié pour la première fois en 2018, la même API publique de React 16.8 à 19. Aleksandr est ingénieur frontend — React, Next.js, TypeScript — actuellement ouvert aux missions en freelance et à temps plein.',
    siteLink: 'asmyshlyaev177.dev',
    githubLink: 'GitHub',
    linkedinLink: 'LinkedIn',
  },
};
