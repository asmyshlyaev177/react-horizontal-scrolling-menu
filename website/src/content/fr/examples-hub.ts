// French (fr) — translation of en/examples-hub.ts.
//
// Values only: every key, its order and its type come from the English
// module, and a missing or renamed one is a type error rather than a
// silently English page.
// i18n:meta locale=fr source=en/examples-hub.ts source-blob=8127bcad7814c2b0afd352822f229d8a3c1783ff status=translated
import type { ExamplePageCopy, ExamplesHubCopy } from '../types.ts';

/** La page de liste /examples. */
export const examplesHub: ExamplesHubCopy = {
  meta: {
    title:
      'Exemples de menu à défilement horizontal React — en direct, avec le code',
    description:
      'Exemples de react-horizontal-scrolling-menu : flèches, glisser pour défiler, onglets défilables, RTL, vertical, boucle infinie, lecture automatique — chacun avec sa source à copier-coller.',
  },
  title: 'Exemples : chaque motif, en direct, avec la source complète',
  lede: 'Chaque exemple est une démo fonctionnelle du paquet npm publié plus le fichier complet qui se trouve derrière : prêt à copier-coller, et modifiable en direct dans Storybook. Rendu côté serveur comme tout le reste de ce site.',
  storybookCta: 'Vous préférez un terrain de jeu ? Ouvrez Storybook',
};

/** Le mobilier partagé par les vingt-et-une pages d’exemple. */
export const examplePage: ExamplePageCopy = {
  breadcrumbLabel: 'Fil d’Ariane',
  breadcrumbExamples: 'Exemples',
  storybookCta: 'Modifier cet exemple en direct dans Storybook',
  fullSource: 'Source complète',
  fullSourceLede:
    'Complète et prête à copier-coller — c’est le fichier exact derrière la',
  fullSourceLedeLink: 'version Storybook modifiable en direct',
  copyFullSource: 'Copier la source complète',
  relatedExamples: 'Exemples associés',
  allExamples: 'Tous les exemples ({count})',
};
