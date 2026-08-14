// French (fr) — translation of en/manifest.ts.
//
// Values only: every key, its order and its type come from the English
// module, and a missing or renamed one is a type error rather than a
// silently English page.
// i18n:meta locale=fr source=en/manifest.ts source-blob=269945541172d5f4f06823bd0d6393dfc44a3fb2 status=translated
import type { ManifestCopy } from '../types.ts';

/**
 * Texte des cartes pour les pages d’exemple. Les slugs et les id de groupe
 * sont de la structure — ils vivent dans `lib/examples-manifest.ts` et sont ici
 * des clés, pas du texte.
 */
export const manifest: ManifestCopy = {
  groups: {
    Basics: 'Bases',
    'Position & scrolling': 'Position et défilement',
    'Input & gestures': 'Entrée et gestes',
    'Dynamic items': 'Éléments dynamiques',
    Layout: 'Disposition',
    Recipes: 'Recettes',
  },
  examples: {
    simple: {
      name: 'Démarrage',
      blurb:
        'Le menu minimal : éléments, deux flèches, visibilité prête à l’emploi.',
    },
    'one-item': {
      name: 'Un élément par vue',
      blurb:
        'Un menu de la largeur d’un élément — une carte remplit la rangée.',
    },
    'one-item-scroll': {
      name: 'Défiler un élément à la fois',
      blurb:
        'Les flèches avancent d’un seul élément au lieu d’une page entière.',
    },
    'bottom-arrows': {
      name: 'Flèches sous le menu',
      blurb: 'Les flèches sont vos composants — placez-les où vous voulez.',
    },
    'center-on-click': {
      name: 'Centrer l’élément cliqué',
      blurb:
        'scrollToItem avec inline: center — le motif des onglets défilables.',
    },
    'scroll-to-item': {
      name: 'Défiler vers un élément par id',
      blurb: 'Accédez au menu depuis l’extérieur avec apiRef.',
    },
    'save-restore-position': {
      name: 'Sauvegarder et restaurer la position de défilement',
      blurb:
        'Gardez le décalage de défilement entre démontages et rechargements.',
    },
    'custom-transition': {
      name: 'Animation de défilement personnalisée',
      blurb:
        'Apportez votre propre easing et durée pour les défilements programmatiques.',
    },
    progress: {
      name: 'Indicateur de progression du défilement',
      blurb: 'Une barre de progression pilotée par les éléments visibles.',
    },
    'mouse-drag': {
      name: 'Glisser pour défiler à la souris',
      blurb: 'Un glisser à la souris qui laisse les clics fonctionner.',
    },
    'swipe-desktop': {
      name: 'Balayer sur ordinateur',
      blurb: 'Un balayage avec inertie pour les utilisateurs de souris.',
    },
    'mobile-swipe-only': {
      name: 'Masquer les flèches sur mobile',
      blurb:
        'Défilement au seul toucher sur petits écrans, flèches sur ordinateur.',
    },
    'prevent-body-scroll': {
      name: 'Empêcher le défilement du body',
      blurb: 'La molette sur le menu fait défiler le menu, pas la page.',
    },
    'add-items': {
      name: 'Charger plus quand la fin apparaît',
      blurb: 'Ajout infini piloté par la visibilité du dernier élément.',
    },
    'add-item-and-scroll-to-it': {
      name: 'Ajouter un élément et défiler vers lui',
      blurb: 'Le motif des puces de filtre : ajouter, puis amener à la vue.',
    },
    'items-animation': {
      name: 'Animer les éléments à l’entrée et à la sortie',
      blurb: 'Animations d’ajout/suppression avec @formkit/auto-animate.',
    },
    performance: {
      name: '5 000 éléments et toujours rapide',
      blurb: 'Le défilement natif s’adapte — pas besoin de virtualisation ici.',
    },
    vertical: {
      name: 'Menu vertical',
      blurb: 'Le même menu, défilant de haut en bas.',
    },
    rtl: {
      name: 'De droite à gauche',
      blurb: 'RTL inverse la direction ; les flèches et la pagination suivent.',
    },
    'infinite-loop': {
      name: 'Boucle infinie',
      blurb:
        'Boucle continue depuis l’API publique — sans changement dans la bibliothèque.',
    },
    autoplay: {
      name: 'Lecture automatique',
      blurb: 'Une boucle qui avance seule avec une pause accessible.',
    },
  },
};
