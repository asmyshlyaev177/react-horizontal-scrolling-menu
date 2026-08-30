// French (fr) — translation of en/examples.ts.
//
// Values only: every key, its order and its type come from the English
// module, and a missing or renamed one is a type error rather than a
// silently English page.
// i18n:meta locale=fr source=en/examples.ts source-blob=60d5f83e262100978eb4d1dc9565659367d156c4 status=translated
import type { ExamplesCopy } from '../types.ts';

/** Copy for the example pages, keyed by the slugs in `examples-manifest.ts`. */
export const examples: ExamplesCopy = {
  'add-item-and-scroll-to-it': {
    meta: {
      title: 'Puces de filtre React : ajouter un élément et défiler vers lui',
      description:
        'Puces de filtre dans un scroller horizontal React : ajoutez un élément puis faites défiler vers lui avec apiRef et scrollToItem après son rendu. Démo en direct et source complète.',
    },
    title:
      'Ajouter un élément et défiler vers lui — le motif des puces de filtre',
    lede: 'Une barre de puces grandit quand l’utilisateur choisit un filtre, et la nouvelle puce doit finir à l’écran, pas cachée au-delà du bord droit. Le piège : on ne peut pas défiler vers un élément qui n’est pas encore rendu. Cet exemple divise le travail entre un gestionnaire de clic et un effet.',
    demoHint:
      'Cliquez sur Ajouter un filtre — la puce apparaît à la fin et la rangée défile pour la révéler. Le x retire une puce.',
    prose: [
      {
        heading: 'Comment ça marche',
        body: 'Le menu reçoit un `apiRef`, qui expose l’API complète hors de l’arbre de composants. `addItem` fait deux choses : il stocke le nouvel id dans une ref `lastAdded`, puis ajoute l’élément à l’état. Il ne défile volontairement pas — à ce moment, la puce n’est que de l’état, pas du DOM.',
      },
      {
        heading: 'Pourquoi le défilement vit dans un effet',
        body: '`getItemElementById` cherche l’élément dans le DOM, donc le défilement ne peut se produire qu’après que React a validé le nouvel élément. Un `useEffect` dépendant de `items` s’exécute exactement à ce point : il lit `lastAdded`, le vide et appelle `apiRef.current.scrollToItem(el, ’smooth’, ’end’)`. Vider la ref compte — les re-rendus pour toute autre raison (sélection, flèches) atteignent aussi l’effet et ne doivent pas défiler à nouveau.',
      },
      {
        heading: 'Notes',
        body: `
          - \`lastAdded\` est une ref, pas un état : l’écrire ne doit pas en soi causer un rendu, et sa valeur n’a de sens que pour la toute prochaine exécution de l’effet.
          - \`’end’\` aligne la nouvelle puce avec le bord droit de la rangée ; \`’center’\` fonctionne pareil si vous la voulez au milieu.
          - Les flèches utilisent ici les hooks \`useLeftArrowVisible()\` et \`useRightArrowVisible()\` — une forme plus courte du couple \`useIsVisible(’first’/’last’)\`.
          - La barre de défilement est masquée avec du CSS simple sur la classe \`scroll-container\` de la bibliothèque ; le défilement lui-même reste natif.
        `,
      },
    ],
  },

  'bottom-arrows': {
    meta: {
      title:
        'Flèches de carrousel sous le menu : placement personnalisé dans React',
      description:
        'Placez les flèches du carrousel sous la rangée dans React : la prop Footer de ScrollMenu rend n’importe quelle mise en page sous le menu, flèches comprises. Démo en direct et source complète.',
    },
    title:
      'Mettez les flèches sous le menu — ou n’importe où dans votre mise en page',
    lede: 'Les flèches ne sont pas du chrome intégré — ce sont des composants que vous passez, donc le placement est une décision de mise en page, pas un réglage de bibliothèque. Cet exemple ne passe ni `LeftArrow` ni `RightArrow` et rend les deux boutons dans l’emplacement `Footer` sous la rangée, à côté du contenu ordinaire.',
    demoHint:
      'Les flèches sont sous la rangée — elles lisent le même VisibilityContext, donc elles se désactivent toujours aux extrémités.',
    prose: [
      {
        heading: 'Comment ça marche',
        body: '`ScrollMenu` accepte un composant `Footer` et le rend sous le conteneur de défilement, dans le même `VisibilityContext.Provider` que les éléments. Le pied de page de la story est un simple div flex contenant du texte et les deux boutons de flèche. Comme le contexte l’atteint, chaque bouton appelle `React.useContext(VisibilityContext)` et reçoit exactement l’API qu’il obtiendrait dans les emplacements latéraux — rien ne change dans les flèches elles-mêmes.',
      },
      {
        heading: 'État des flèches, comme toujours',
        body: '`useLeftArrowVisible()` et `useRightArrowVisible()` indiquent si la rangée est déjà à cette extrémité ; la story mappe le résultat vers `disabled` et estompe le bouton. Les clics appellent `scrollPrev()` et `scrollNext()`. Rien de tout cela ne sait ni ne se soucie de l’endroit où le bouton est monté.',
      },
      {
        heading: 'Notes',
        body: `
          - \`Header\` est l’emplacement miroir au-dessus de la rangée, avec le même contrat.
          - Les props latérales \`LeftArrow\`/\`RightArrow\` ne sont que les variantes pré-positionnées — les mêmes composants de flèche fonctionnent aux deux endroits.
          - Le pied de page n’est pas réservé aux flèches : tout composant qui lit \`VisibilityContext\` y dispose de l’API complète.
          - Le gestionnaire \`onWheel\` de la story pagine à la molette et laisse les gestes de trackpad au défilement natif.
        `,
      },
    ],
  },

  autoplay: {
    meta: {
      title: 'Lecture automatique de carrousel React avec pause accessible',
      description:
        'Lecture automatique pour un menu à défilement React : useInterval appelle scrollNext via apiRef, avec pause au survol, au focus, au toucher et sous mouvement réduit. Démo en direct et source complète.',
    },
    title: 'Lecture automatique avec pause accessible',
    lede: 'La partie qui avance tient en une ligne — un minuteur appelant `scrollNext()` via `apiRef`, par-dessus le même noyau de boucle infinie. L’ingénierie est dans le moment où *ne pas* avancer : survol, toucher, focus clavier, un bouton Pause, les onglets cachés, les rails hors écran et les préférences de mouvement réduit — tout arrête le minuteur, chacun pour une raison différente.',
    demoHint:
      'Survolez, touchez ou tabulez dans le rail et il se met en pause ; le bouton Pause l’arrête jusqu’à ce que vous appuyiez sur Lecture.',
    prose: [
      {
        heading: 'Comment ça marche',
        body: '`useInterval(cb, active ? interval : null)` est tout le planificateur. `active` regroupe quatre drapeaux — pause utilisateur, pause survol, pause focus et `prefers-reduced-motion` — et passer `null` retire entièrement le minuteur, de sorte que la reprise démarre un intervalle frais et complet au lieu de se déclencher en plein cycle juste après le départ du pointeur.',
      },
      {
        heading: 'Des tics qui refusent de tourner',
        body: 'Même un minuteur actif vérifie avant de défiler : le tic lit `api.menuVisible.current` et `document.visibilityState`, et saute si l’un ou l’autre dit non. Un onglet caché gèle IntersectionObserver, donc défiler là-bas signifie avancer à l’aveugle et laisser dériver la comptabilité du téléport ; un rail défilé hors de la page ne doit tout simplement pas bouger. Les tics sautés ne coûtent rien — le suivant re-vérifie.',
      },
      {
        heading: 'La surface de pause',
        body: 'Le survol et le toucher mettent en pause via des gestionnaires d’enveloppe, le focus clavier via `onFocusCapture`/`onBlurCapture`, et `prefers-reduced-motion` garde la lecture automatique entièrement éteinte. Le bouton Pause explicite est ce que WCAG 2.2.2 exige réellement pour le contenu qui avance tout seul — la pause au survol seule ne compte pas.',
      },
      {
        heading: 'Notes',
        body: `
          - Le commutateur Pause se trouve hors de l’enveloppe de survol — à l’intérieur, cliquer sur Pause déclencherait aussi la pause de survol, et le bouton ne pourrait jamais être observé en train de faire quoi que ce soit.
          - La boucle vient du même hook de cloner-et-téléporter \`useInfiniteLoop\` que l’exemple de boucle infinie ; la lecture automatique n’ajoute que le minuteur et les drapeaux de pause.
          - L’animation de défilement est le défilement fluide natif du navigateur — \`transitionDuration\` n’a aucun effet avec le \`noPolyfill\` par défaut.
        `,
      },
    ],
  },

  'mouse-drag': {
    meta: {
      title:
        'Glisser pour défiler dans React : menu horizontal sans casser les clics',
      description:
        'Défilement par glisser à la souris pour une liste horizontale React : un seuil de 5px sépare les glissements des clics, pour garder les éléments cliquables. Démo en direct et source complète.',
    },
    title: 'Glisser pour défiler à la souris — sans casser les clics',
    lede: 'Les utilisateurs tactiles font défiler une liste horizontale nativement, mais les utilisateurs de souris ont besoin de câblage : maintenir, faire glisser, relâcher. La partie difficile n’est pas de bouger la rangée — c’est qu’une implémentation naïve transforme chaque glissement relâché en clic accidentel d’élément. Cet exemple sépare les deux avec une petite classe `DragDealer` et trois props de souris.',
    demoHint:
      'Saisissez n’importe où sur la rangée et faites glisser. Les éléments restent cliquables — un clic après un glissement est supprimé.',
    prose: [
      {
        heading: 'Comment ça marche',
        body: '`ScrollMenu` expose des gestionnaires de souris currifiés — `onMouseDown`, `onMouseUp` et `onMouseMove` reçoivent chacun l’objet API et renvoient un gestionnaire d’événement ordinaire. L’instance `DragDealer` suit une coordonnée d’ancrage : à chaque mouvement, elle applique le delta directement à `scrollContainer.current.scrollLeft`. Le défilement natif fait le reste — pas de transformations, pas de physique, et la barre de défilement reste réelle.',
      },
      {
        heading: 'Pourquoi les clics continuent de fonctionner',
        body: 'Un glissement ne commence qu’après que le pointeur a bougé de plus de 5px, donc un clic ordinaire ne défile jamais. L’autre sens est le bug classique : le `onClick` de l’élément se déclenche après `mouseup`, donc relâcher un glissement au-dessus d’une carte la sélectionnerait. `dragStop` efface immédiatement le drapeau d’application mais garde `dragging` un frame d’animation de plus — les gestionnaires de clic le vérifient et s’interrompent.',
      },
      {
        heading: 'Détails qui valent le vol',
        body: `
          - \`dragStart\` annule la remise à zéro en attente du geste précédent — sans elle, un second glissement rapide peut appliquer un delta périmé.
          - \`onMouseLeave\` sur l’enveloppe appelle aussi \`dragStop\`, donc quitter la rangée en plein glissement ne peut pas la laisser coincée en état de glisser.
          - Le toucher n’a besoin de rien de tout cela — le conteneur est un vrai conteneur de défilement, donc le balayage fonctionne déjà.
        `,
      },
    ],
  },

  'save-restore-position': {
    meta: {
      title:
        'Préserver la position de défilement dans React : restaurer au remontage ou au retour',
      description:
        'Enregistrez le décalage de défilement dans sessionStorage à chaque onUpdate et restaurez-le dans onInit, pour que la position survive aux remontages et rechargements. Démo en direct et source complète.',
    },
    title: 'Sauvegarder et restaurer la position de défilement',
    lede: 'Un rail horizontal oublie son décalage à chaque démontage : quittez la route et revenez, repliez une section, et il saute au début. Cet exemple enregistre le décalage pendant que l’utilisateur défile et le réécrit au montage, pour que le menu réapparaisse exactement où il l’a laissé.',
    demoHint:
      'Faites défiler la rangée quelque part, démontez le menu puis remontez-le — le rail revient au même décalage.',
    prose: [
      {
        heading: 'Comment ça marche',
        body: 'Deux callbacks portent toute la fonction. `onUpdate` se déclenche quand l’état de visibilité du menu change pendant que l’utilisateur défile ; `savePos` lit `api.scrollContainer.current.scrollLeft` et l’écrit dans `sessionStorage`. Au montage suivant, `onInit` assigne la valeur enregistrée directement à `scrollLeft` — une simple écriture de propriété, donc la restauration est instantanée plutôt qu’une animation rejouée devant l’utilisateur.',
      },
      {
        heading:
          'Survivre aux remontages, rechargements et navigations arrière',
        body: '`sessionStorage` survit au composant : les changements de route côté client, les rendus conditionnels et les rechargements complets de la page reviennent tous au décalage enregistré, et la valeur est par onglet, donc deux onglets ne s’écrasent pas. Pour la navigation par historique, la story définit aussi `window.history.scrollRestoration = ’manual’`, empêchant la restauration de défilement du navigateur de se battre avec la restauration manuelle sur retour et avant.',
      },
      {
        heading: 'Notes',
        body: `
          - Restaurer par \`scrollLeft\` brut est précis au pixel et ne se soucie pas des éléments existants — aucun id à retenir, rien à chercher.
          - Le bouton Recharger de la story change la \`key\` du menu pour forcer un remontage ; le commutateur démonter/remonter de la démo est le même test rendu explicite.
          - Réinitialiser supprime simplement la clé de stockage — le montage suivant repart de zéro, comme une première visite.
        `,
      },
    ],
  },

  'one-item': {
    meta: {
      title:
        'Slider « un élément par vue » React : éléments de défilement pleine largeur',
      description:
        'Éléments pleine largeur dans un menu à défilement horizontal React : min-width 100% sur l’enveloppe de l’élément fait un slider d’un élément par vue. Démo en direct et source complète.',
    },
    title: 'Un élément par vue : un slider pleine largeur depuis le même menu',
    lede: 'Il n’y a pas de mode slider à activer. Le menu dispose ce que dit votre CSS, donc une règle — `min-width: 100%` sur l’enveloppe d’élément de la bibliothèque — transforme le même composant en slider : chaque carte remplit la vue, et les flèches de pagination ordinaires avancent exactement d’un élément.',
    demoHint:
      'Paginez avec les flèches — chaque diapositive fait exactement une vue de large, et chaque diapositive signale sa propre visibilité.',
    prose: [
      {
        heading: 'Comment ça marche',
        body: 'La story enveloppe le menu dans un conteneur stylé ciblant `.react-horizontal-scrolling-menu--item` — le div que la bibliothèque rend autour de chaque enfant — et lui donne `minWidth: ’100%’` plus un centrage flex. Chaque enveloppe couvre désormais tout le conteneur de défilement, donc une seule carte tient dans la vue. Les flèches sont standard : `scrollPrev()` et `scrollNext()` paginent par le groupe visible, et quand le groupe visible est un élément, une page et un élément sont la même chose.',
      },
      {
        heading: 'Les flèches et la molette',
        body: 'L’état des flèches vient de `useLeftArrowVisible()` et `useRightArrowVisible()` — chacune renvoie true quand la rangée est à cette extrémité, et la story l’alimente dans `disabled` et estompe le bouton. La prop `onWheel` reçoit l’objet API avec l’événement, donc une molette verticale pagine la rangée par le signe de `deltaY`. Elle flaire d’abord les trackpads : tout delta horizontal, ou un delta vertical inférieur à 15, est supposé être un geste de trackpad et laissé au défilement natif.',
      },
      {
        heading: 'Notes',
        body: [
          '- `itemId` sur chaque enfant est la seule exigence dure — c’est ainsi que les éléments sont suivis et vers quoi on défile.',
          '- Les cartes appellent toujours `useIsVisible(itemId, true)` ; avec un élément par vue, chaque diapositive hors écran signale `visible: false`.',
          '- La barre de défilement est masquée avec du CSS simple sur le conteneur de défilement (`scrollbar-width: none` plus le pseudo-élément WebKit) — ce choix est le vôtre, pas celui de la bibliothèque.',
          '- La largeur vit entièrement dans votre feuille de styles. Remplacez 100% par 50% et vous avez un slider de deux par vue ; la bibliothèque ne mesure rien.',
        ].join('\n'),
      },
    ],
  },

  performance: {
    meta: {
      title: 'Performance de liste horizontale React : 5 000 éléments',
      description:
        'Un menu horizontal React rendant 5 000 éléments avec défilement natif : cartes mémoïsées, un IntersectionObserver, sans virtualisation. Démo en direct et source complète.',
    },
    title: '5 000 éléments dans une rangée — pas besoin de virtualisation',
    lede: 'Le conseil habituel avec quelques centaines d’éléments est de recourir à la virtualisation. Cet exemple rend 5 000 vrais nœuds DOM dans un seul `ScrollMenu` et reste réactif — l’overflow natif fait le mouvement, un IntersectionObserver fait l’observation, et React ne fait presque rien.',
    demoHint:
      'Faites glisser le rail ou paginez avec les flèches — chacune des 5 000 cartes est un vrai nœud DOM ; rien n’est fenêtré.',
    prose: [
      {
        heading: 'Là où le travail ne se produit pas',
        body: 'Le défilement n’entre jamais dans React. Le rail est un vrai conteneur overflow : la molette et le toucher le font défiler nativement, et le câblage du glissement n’assigne que `scrollContainer.current.scrollLeft` — pas d’état, pas de re-rendus par frame. La visibilité est une seule instance d’IntersectionObserver observant les 5 000 éléments ; les callbacks arrivent par lots, et seuls les composants abonnés via `useIsVisible` se mettent à jour quand leur propre élément bascule. Il n’y a aucun calcul de défilement par élément nulle part.',
      },
      {
        heading: 'Ce que la story ajuste',
        body: '`Card` est enveloppée dans `React.memo` avec un comparateur sur `selected` et `title`, donc sélectionner une carte ne réconcilie pas les 4 999 autres. La lecture de visibilité passe par `useDeferredValue` : après un saut de page, des centaines d’éléments basculent d’état d’un coup, et différer garde cette rafale hors du chemin critique de l’interaction qui l’a causée. `noPolyfill={true}` fait que les défilements programmatiques utilisent le `scrollIntoView` du navigateur au lieu du polyfill de défilement fluide. Le glissement est le même motif `DragDealer` que l’exemple mouse-drag.',
      },
      {
        heading: 'Le compromis que cette page admet',
        body: 'Le rail de démo ci-dessus n’est pas rendu côté serveur : 5 000 cartes sérialisent en à peu près un mégaoctet de HTML, donc le rail monte côté client uniquement, derrière un espace réservé de même hauteur, et il n’y a pas de décalage de mise en page. C’est la vraie facture à cette taille — le navigateur gère 5 000 nœuds vivants confortablement, mais les expédier comme charge SSR est une décision séparée. Quelque part dans les dizaines de milliers de nœuds, la mémoire et le coût du rendu initial rattrapent aussi ; c’est là que le fenêtrage cesse d’être optionnel.',
      },
      {
        heading: 'Notes',
        body: [
          '- Le DOM des 5 000 cartes est construit une fois, au montage — `React.memo` transforme les rendus ultérieurs du parent en no-ops pour chaque carte.',
          '- Les flèches paginent à peu près un viewport à la fois, donc traverser tout le rail à la flèche est lent par conception — les flicks de glissement ou les sauts de `scrollToItem` conviennent mieux à cette échelle.',
          "- Les flèches tournent toujours sur `useIsVisible('first')` et `useIsVisible('last')` — le même mécanisme d'observateur qu'un menu de dix éléments, à 500 fois le nombre d'éléments.",
        ].join('\n'),
      },
    ],
  },

  progress: {
    meta: {
      title:
        'Indicateur de progression de défilement horizontal React pour un carrousel',
      description:
        'Une barre de progression pour un menu horizontal React : abonnez-vous à onUpdate, comptez les éléments visibles, déduisez la page courante. Démo en direct et source complète de la story.',
    },
    title:
      'Ajouter un indicateur de progression de défilement à un menu horizontal',
    lede: 'Un carrousel qui masque sa barre de défilement doit encore à l’utilisateur une réponse à « combien reste-t-il ? ». Le menu le sait déjà : il suit la visibilité de chaque élément, donc la position est une affaire de comptage. La story rend des boutons de page numérotés plus des compteurs d’éléments restants à gauche/droite à partir de ces données ; cette démo distille la même mathématique en une barre de progression.',
    demoHint:
      'Faites défiler la rangée, glissez-la ou utilisez les flèches — la barre se remplit page par page et le compteur montre où vous êtes.',
    prose: [
      {
        heading: 'Comment ça marche',
        body: 'L’indicateur est passé comme prop `Footer`, donc `ScrollMenu` le rend à l’intérieur du menu où `VisibilityContext` est disponible. Du contexte, il prend `items` — la carte derrière le suivi de visibilité — et s’abonne avec `items.subscribe(’onUpdate’, cb)`. Cet événement se déclenche à chaque callback d’IntersectionObserver, donc la story le déboune (un timeout plus `requestAnimationFrame`) avant de lire `items.getVisible()`.',
      },
      {
        heading: 'Des éléments visibles au numéro de page',
        body: 'Le nombre d’éléments visibles est la taille de page. Le total de pages est `Math.ceil(items.size / visibleItemsLen)` ; la page courante vient de l’`index` de la dernière entrée visible. La story les transforme en boutons de page cliquables — chacun appelle `scrollToItem(getItemByIndex(itemInd))`, adressant un élément par position sans connaître son id — et déduit les compteurs d’éléments à gauche et à droite des mêmes nombres. La barre de la démo n’est que `currentPage / totalPages` en pourcentage de largeur.',
      },
      {
        heading: 'Notes',
        body: [
          '- Rien n’est mesuré en pixels — la mathématique tourne entièrement sur les données de visibilité, donc elle continue de fonctionner quand les largeurs d’éléments diffèrent.',
          '- Redimensionnez le viewport et la taille de page suit : plus d’éléments tiennent, `getVisible()` renvoie plus d’entrées, et le nombre de pages se recalcule à la mise à jour suivante.',
          '- L’effet renvoie un nettoyage qui appelle `items.unsubscribe` et vide le minuteur en attente — sautez-le et un pied de page démonté continue d’être appelé.',
          '- Avant le premier rapport de l’observateur, `getVisible()` est vide ; la story renvoie `null` jusque-là, et la démo peint une piste vide.',
        ].join('\n'),
      },
    ],
  },

  'scroll-to-item': {
    meta: {
      title:
        'Défiler vers un élément dans une liste horizontale React : scrollToItem',
      description:
        'Faites défiler une liste horizontale React vers n’importe quel élément par id : onInit remet l’api et scrollToItem amène la cible à la vue. Démo en direct et source complète.',
    },
    title: 'Défiler vers un élément précis dans une liste horizontale',
    lede: 'Un lien profond vers une rangée : un chat s’ouvre sur la conversation active, une galerie sur la photo que vous avez partagée. Le conteneur de défilement vit dans la bibliothèque, mais vous n’avez pas besoin d’une ref dans son DOM — `onInit` vous remet l’api, et `scrollToItem` fait le positionnement.',
    demoHint:
      'Le rail ne monte pas à Tokyo — onInit saute directement à quito. Glissez ailleurs puis remontez pour le voir atterrir là de nouveau.',
    prose: [
      {
        heading: 'Comment ça marche',
        body: '`ScrollMenu` accepte un callback `onInit` et l’appelle une fois que le menu a rendu et mesuré ses éléments, en passant le même objet api que `VisibilityContext` fournit à l’intérieur. Le gestionnaire cherche l’élément avec `getItemElementById(id)` et le remet à `scrollToItem(item, ’auto’, ’start’)`. Comme `onInit` ne se déclenche qu’après la mesure, la recherche ne peut pas revenir vide pour un élément rendu — pas de `setTimeout`, pas de boucle de réessai.',
      },
      {
        heading: 'Comportement et alignement',
        body: 'La story passe `’auto’` et `’start’` : `’auto’` saute sans animation, ce qui est ce que vous voulez pour une position initiale — l’utilisateur ne voit jamais le rail au premier élément. `’start’` aligne le bord gauche de l’élément avec le rail. Pour les défilements pilotés par clic, le même appel prend `’smooth’` et `’center’` — c’est l’exemple de centrage au clic ci-dessous.',
      },
      {
        heading: 'Notes',
        body: [
          '- `getItemElementByIndex` est l’alternative positionnelle quand vous connaissez l’emplacement mais pas l’id.',
          '- L’id que vous passez est le `itemId` de l’élément — la même clé que le menu utilise pour le suivi de visibilité.',
          '- La démo rejoue le comportement en remontant le menu avec une nouvelle `key` ; chaque montage frais réexécute `onInit`.',
        ].join('\n'),
      },
    ],
  },
  'center-on-click': {
    meta: {
      title: 'Onglets défilables React : centrer l’onglet actif au clic',
      description:
        'Onglets défilables dans React sans Material UI : cliquer sur un onglet le centre avec scrollToItem(el, "smooth", "center"). Démo en direct et source complète de la story.',
    },
    title: 'Centrer l’élément cliqué — le motif des onglets défilables',
    lede: 'Le comportement dont chaque bande d’onglets a besoin et qu’aucun conteneur de défilement ne donne gratuitement : cliquez sur un onglet près du bord et il glisse au milieu, révélant ses voisins des deux côtés. Ici, c’est un seul appel d’API — sans Material UI, sans mesure, sans mathématique de défilement.',
    demoHint:
      'Cliquez sur un onglet près de l’un ou l’autre bord — il s’active et se centre dans la rangée.',
    prose: [
      {
        heading: 'Comment ça marche',
        body: '`handleItemClick` est currifié : il prend le `itemId` et renvoie une fonction attendant l’objet API. Le clic enregistre d’abord l’id dans l’état `selected`, puis appelle `api.getItemElementById(itemId)` pour trouver le vrai élément DOM et le remet à `api.scrollToItem(item, ’smooth’, ’center’)`. Un clic, deux effets : l’onglet est sélectionné et centré.',
      },
      {
        heading: 'D’où vient l’API',
        body: 'Le composant parent ne garde jamais de ref d’API. Chaque `Card` lit l’API complète depuis `VisibilityContext` — disponible pour tout enfant de `ScrollMenu` — et la passe au gestionnaire de clic : `onClick(visibility)`. Si vous devez plutôt défiler depuis l’extérieur du menu, c’est le motif `apiRef` de l’exemple scroll-to-item.',
      },
      {
        heading: 'Notes',
        body: [
          '- Le troisième argument de `scrollToItem` prend les mêmes valeurs que l’option `inline` de `scrollIntoView` — `’start’`, `’center’` ou `’end’`.',
          '- Les cartes sont focalisables (`role="button"`, `tabIndex=0`) et gèrent Entrée dans `onKeyDown`, donc les utilisateurs de clavier obtiennent le même sélectionner-et-centrer.',
          '- Le gestionnaire `onWheel` mappe les deltas de la molette vers `scrollNext`/`scrollPrev`, mais renonce pour les trackpads — un delta horizontal ou un petit delta vertical est supposé être un geste et laissé natif.',
          '- Les flèches se désactivent avec les raccourcis `useIsVisible(’first’)` et `useIsVisible(’last’)`.',
        ].join('\n'),
      },
    ],
  },

  'swipe-desktop': {
    meta: {
      title:
        'Balayer à la souris sur ordinateur : geste de flick de carrousel React',
      description:
        'Balayage sur ordinateur pour un menu horizontal React : suivez l’appui/relâchement de la souris, et un relâchement au-delà de 50px fait un flick vers la page suivante avec un glissement fluide. Démo et source complète.',
    },
    title: 'Balayer sur ordinateur : un flick de souris qui pagine le menu',
    lede: 'Le glisser pour défiler bouge la rangée en 1:1 avec le curseur. Voici l’autre geste de souris : un flick. Appuyez, bougez d’au moins 50px, relâchez — et le menu glisse d’une page dans cette direction via `scrollNext` ou `scrollPrev`. La rangée ne suit pas du tout le pointeur ; le glissement est le défilement programmatique fluide de la bibliothèque, qui donne au relâchement sa sensation d’inertie.',
    demoHint:
      'Appuyez n’importe où sur la rangée, bougez à gauche ou à droite d’au moins 50px et relâchez — le menu glisse d’une page. Les mouvements plus courts ne font rien.',
    prose: [
      {
        heading: 'Comment ça marche',
        body: 'Un hook `useSwipe` renvoie les trois props de souris currifiées que `ScrollMenu` attend — chacune reçoit l’objet API et renvoie un gestionnaire d’événement ordinaire. `onMouseDown` ancre le `clientX` du pointeur dans une ref, `onMouseMove` continue d’écraser la coordonnée de fin, et `onMouseUp` compare les deux : une différence horizontale au-delà de `minSwipeDistance` (50px) appelle `apiObj.scrollNext()` pour un flick vers la gauche ou `apiObj.scrollPrev()` pour un vers la droite.',
      },
      {
        heading: 'Pourquoi les clics n’ont pas besoin de traitement spécial',
        body: 'Dans l’exemple de glissement, relâcher un glissement au-dessus d’une carte la cliquerait, donc un drapeau `dragging` doit survivre au geste d’un frame. Un flick contourne tout le problème : sous le seuil de 50px, `onMouseUp` ne fait rien, donc un clic est juste un clic — et au-delà, le pointeur a de toute façon quitté la carte sur laquelle il a appuyé. Pas de drapeaux, pas de gestionnaires supprimés.',
      },
      {
        heading: 'Ce que la story ajoute pour le toucher et la molette',
        body: 'La story fixe aussi le défilement tactile natif : React 18+ enregistre les écouteurs `touchmove` comme passifs, donc `preventDefault` ne fonctionne que depuis un écouteur non passif. Un effet atteint le conteneur de défilement via `apiRef` (`ref.current.scrollContainer.current`) et en attache un avec `{ passive: false }`. Son gestionnaire `onWheel` pagine aussi le menu, avec une heuristique — un `deltaX` non nul ou un petit `deltaY` est supposé être un trackpad et laissé tranquille.',
      },
      {
        heading: 'Notes',
        body: [
          '- Les coordonnées vivent dans une ref, pas dans l’état — suivre `mousemove` dans l’état re-rendrait à chaque pixel.',
          '- La démo ré-ancre la coordonnée de fin au `mousedown`, donc une position restante du geste précédent ne peut jamais compter pour un nouveau balayage.',
          '- Réglez `minSwipeDistance` au goût : plus bas est plus vif, plus haut tolère des clics plus négligés. La variante tactile de cette recette utilise 20px.',
        ].join('\n'),
      },
    ],
  },

  'mobile-swipe-only': {
    meta: {
      title:
        'Masquer les flèches du carrousel sur mobile : défilement React au seul toucher',
      description:
        'Flèches sur ordinateur, défilement au seul toucher sur mobile pour un menu horizontal React : une vérification matchMedia de pointer: coarse les masque. Démo en direct et source complète.',
    },
    title:
      'Masquez les flèches sur mobile — défilement au seul toucher sur petits écrans',
    lede: 'Sur un écran tactile, les boutons de flèche sont un poids mort : le balayage est natif, les pouces couvrent les cibles de toucher, et chaque flèche mange la largeur de la rangée. La démo garde les flèches pour les utilisateurs de souris et les démonte quand le pointeur est un doigt ; la story va plus loin et remplace le défilement natif par des gestes explicites de balayer-pour-paginer.',
    demoHint:
      'Ouvrez sur un téléphone, ou activez l’émulation tactile dans DevTools — les flèches disparaissent et le balayage fait tout le travail.',
    prose: [
      {
        heading: 'Comment la démo masque les flèches',
        body: '`LeftArrow` et `RightArrow` sont des props optionnelles — passez `undefined` et l’emplacement n’est pas rendu du tout, donc il n’y a rien à masquer en CSS et aucun bouton ne reste dans l’ordre de tabulation. Le commutateur est une vérification `matchMedia(’(pointer: coarse)’)` dans un effet : le serveur ne peut pas connaître le type de pointeur, donc le premier paint est desktop-first avec les flèches, et l’hydratation les retire une fois un pointeur grossier confirmé. Un écouteur `change` le garde vivant — l’émulation d’appareil de DevTools le bascule sans recharger.',
      },
      {
        heading: 'Ce que la story fait au toucher',
        body: 'Le hook `useSwipe` de la story transforme le défilement libre en pagination. Les props currifiées `onTouchStart`, `onTouchMove` et `onTouchEnd` reçoivent chacune l’objet API ; start réinitialise la coordonnée de fin et enregistre `targetTouches[0].clientX`, move la suit, et end mesure la distance parcourue. Au-delà de `minSwipeDistance` (20px), il appelle `apiObj.scrollPrev()` ou `apiObj.scrollNext()` — une page fluide par balayage, quelle que soit la vitesse du doigt.',
      },
      {
        heading: 'Supprimer le défilement tactile natif',
        body: 'Pour que la pagination soit le seul mouvement, le défilement du navigateur doit s’arrêter, et React 18+ enregistre les écouteurs `touchmove` comme passifs, où `preventDefault` est ignoré. L’effet de la story atteint le vrai élément de défilement via `apiRef` (`ref.current.scrollContainer.current`) et attache son propre écouteur avec `{ passive: false }`, là où l’appel fonctionne.',
      },
      {
        heading: 'Notes',
        body: [
          '- Choisissez le défaut SSR délibérément : rendre les flèches d’abord favorise les crawlers et les utilisateurs de bureau, et les appareils tactiles les perdent juste après l’hydratation.',
          '- `(pointer: coarse)` cible l’entrée, pas la taille d’écran — une fenêtre de bureau étroite garde ses flèches, une tablette non.',
          '- Si vous voulez seulement masquer les flèches et garder le balayage natif (le comportement de la démo), sautez l’effet `touchmove` de la story — le défilement libre et les flèches masquées cohabitent bien.',
          '- Le seuil tactile est de 20px contre les 50px du flick de bureau — voyez l’exemple swipe-on-desktop pour la variante souris.',
        ].join('\n'),
      },
    ],
  },

  'infinite-loop': {
    meta: {
      title: 'Menu à défilement en boucle infinie React : un carrousel continu',
      description:
        'Un carrousel en boucle continue dans React sans bibliothèque de carrousel : clones aux deux extrémités et un téléport de scrollLeft quand le défilement se stabilise. Démo et source complète.',
    },
    title: 'Un menu en boucle infinie, construit sur l’API publique',
    lede: 'Le classique truc de carrousel cloner-et-téléporter, implémenté avec zéro changement de bibliothèque : la rangée est clonée aux deux extrémités, et quand le défilement se stabilise dans une zone de clones, `scrollLeft` saute d’exactement une longueur de boucle. Les frames des deux côtés du saut sont identiques, donc rien ne semble bouger. Flèches, molette, toucher et glisser à la souris traversent tous la couture.',
    demoHint:
      'Continuez dans l’une ou l’autre direction — par flèche, molette, toucher ou glissement — et la rangée ne finit jamais.',
    prose: [
      {
        heading: 'Comment ça marche',
        body: '`getSlides` copie les éléments aux deux extrémités de la rangée. Comme `itemId` doit être unique, les clones reçoivent un suffixe — `-lc` à gauche, `-rc` à droite — tout en gardant l’id réel comme `realId` pour les titres, la sélection et les clics. `useInfiniteLoop` emballe le reste : `normalize()` mesure la longueur de la boucle par l’`offsetLeft` du premier élément réel et de son clone droit, et décale `scrollLeft` d’exactement cette distance chaque fois que la position tombe dans une zone de clones. Géométrie pure et idempotente — l’appeler quand rien n’est à corriger ne fait rien.',
      },
      {
        heading: 'Quand le téléport se déclenche',
        body: 'Sauter en plein défilement se battrait visiblement avec le navigateur, donc `normalize` tourne quand le défilement se stabilise : un écouteur natif `scrollend` sur le conteneur (atteint via la prop `containerRef`), avec un repli `onScroll` débouné à 150ms pour Safari, qui ne déclenche pas `scrollend`. Un saut de plus se produit avant que quiconque voie quoi que ce soit : un effet de mise en page fixe le `scrollLeft` initial sur le premier élément réel avant le paint, donc la page ne s’ouvre jamais sur les clones de gauche.',
      },
      {
        heading: 'Traverser la couture en plein glissement',
        body: 'Le callback de glissement à la souris ajoute chaque delta à `scrollLeft` et appelle `loop.normalize()` juste là, dans le geste. Sans cela, glisser vers une zone de clones attendrait la fin du glissement pour téléporter — avec cela, vous pouvez glisser à travers la couture indéfiniment sans jamais le remarquer.',
      },
      {
        heading: 'Notes',
        body: [
          '- Les flèches ici sont personnalisées et toujours activées : les hooks standard `first`/`last` suivent les éléments les plus externes, qui ici sont des clones — ils clignoteraient désactivés à la couture.',
          '- Les cartes affichent une visibilité d’union jumelle — un élément compte comme visible quand lui ou l’un des clones l’est — parce que le drapeau par élément devient périmé pendant un frame après un téléport et ferait clignoter l’en-tête.',
          '- Deux pages de clones par côté : la zone doit couvrir un viewport complet (frames identiques autour d’un saut) avec de la marge, pour qu’un clic Suivant depuis la page à cheval sur la couture ne s’écrase jamais en bout de rangée.',
          '- Tout ce qui est utilisé ici — `containerRef`, `onScroll`, `itemId`, les props de souris currifiées — est de l’API publique.',
        ].join('\n'),
      },
    ],
  },

  simple: {
    meta: {
      title: 'Menu à défilement horizontal React : exemple de démarrage',
      description:
        'La configuration minimale de react-horizontal-scrolling-menu : éléments avec itemId, deux flèches lisant VisibilityContext et suivi de visibilité par élément. Source complète.',
    },
    title: 'Démarrage : un menu à défilement horizontal dans React',
    lede: 'La plus petite configuration utile : une rangée de cartes, deux boutons de flèche et ce dont cette bibliothèque traite vraiment — chaque carte sait si elle est à l’écran. Un composant, une prop requise, un import de feuille de styles.',
    demoHint:
      'Faites défiler la rangée — les flèches se désactivent aux extrémités et chaque carte suit sa propre visibilité.',
    prose: [
      {
        heading: 'Comment ça marche',
        body: '`ScrollMenu` rend vos enfants dans un conteneur de défilement natif et observe chacun avec un IntersectionObserver. Le seul contrat est `itemId` — une prop unique sur chaque enfant, qui est la façon dont les éléments sont suivis, trouvés et vers quoi on défile. Dans tout enfant ou flèche, `VisibilityContext` vous remet l’API complète.',
      },
      {
        heading: 'Le hook de visibilité',
        body: 'Les cartes appellent `useIsVisible(itemId)` pour s’abonner à leur propre état à l’écran — pas d’écouteurs de défilement, pas de mathématique de position, et seules les cartes concernées se re-rendent quand la visibilité change. Les flèches utilisent les raccourcis `first` et `last` pour se désactiver aux extrémités de la rangée.',
      },
      {
        heading: 'Notes',
        body: [
          '- `styles.css` est un import séparé — le bundle JS n’injecte jamais de CSS.',
          '- La largeur de l’élément est votre propre CSS ; le menu ne mesure rien et fournit 210 octets de styles de mise en page.',
          '- Le deuxième argument de `useIsVisible(itemId, true)` est la valeur utilisée avant que l’observateur ne rapporte — et la valeur que votre serveur rend, si vous rendez le menu côté serveur.',
        ].join('\n'),
      },
    ],
  },

  vertical: {
    meta: {
      title: 'Menu à défilement vertical React avec flèches',
      description:
        'Rendez react-horizontal-scrolling-menu vertical : conteneur de défilement flex-column, hauteur bornée, flèches en haut et en bas via Header/Footer. Démo en direct et source.',
    },
    title: 'Un menu à défilement vertical — le même composant, tourné par CSS',
    lede: 'Il n’y a pas de prop `vertical`, et aucune n’est nécessaire : le menu est une rangée flex dans un conteneur de défilement natif, donc le pointer vers le bas est un couple de surcharges CSS. Le suivi de visibilité, les hooks de flèche et `scrollPrev`/`scrollNext` continuent tous de fonctionner sur le nouvel axe.',
    demoHint:
      'Passez la molette sur la colonne ou utilisez les flèches — Haut et Bas sont le Header et le Footer de ScrollMenu. Les rangées s’estompent en quittant la vue.',
    prose: [
      {
        heading: 'Deux surcharges et une borne de hauteur',
        body: 'La story re-style deux noms de classe de la bibliothèque. Le conteneur de défilement reçoit `flex-direction: column`, `overflow-y: auto` et `height: initial` à la place du `max-content` par défaut ; l’enveloppe reçoit `height: 100%`, donc toute hauteur fixe du parent devient la borne de défilement. C’est tout le mode vertical. La story applique les surcharges avec emotion ; la démo de cette page passe des utilitaires Tailwind via les props `wrapperClassName` et `scrollContainerClassName` à la place — n’importe quelle voie de style fonctionne, les noms de classe sont stables.',
      },
      {
        heading: 'Les flèches deviennent Header et Footer',
        body: "Les emplacements `LeftArrow`/`RightArrow` se rendent à côté du rail — le mauvais endroit pour une colonne. `ScrollMenu` accepte aussi des composants `Header` et `Footer` rendus au-dessus et en dessous, et la story monte ses boutons Haut et Bas là. Ce sont des consommateurs de `VisibilityContext` ordinaires : `useIsVisible('first', true)` désactive Haut en haut, `useIsVisible('last', false)` désactive Bas en bas. Les clics passent un troisième argument — `scrollPrev(undefined, undefined, 'end')` et `scrollNext(undefined, undefined, 'start')` — la position `block` pour `scrollIntoView`. `'end'` dépose l'élément précédent au bord inférieur (une page entière vers le haut) ; `'start'` met l'élément suivant en haut (une page entière vers le bas). Avec le `'nearest'` par défaut, chaque clic ne ferait que pousser la rangée suivante dans la vue.",
      },
      {
        heading: 'Garder le défilement dans la colonne',
        body: "`scrollIntoView` déplace tous les ancêtres défilables de sa cible, et la page en est un — donc un saut aligné par `block` dans une colonne emporte tout le document. L'option qui arrête la marche est `boundary`, passée au quatrième argument : `scrollNext(undefined, undefined, 'start', { boundary })` avec le propre `scrollContainer.current` du menu fait défiler les rangées et rien d'autre. Elle nécessite `noPolyfill={false}` sur `ScrollMenu`, puisque seul le polyfill comprend `boundary` — la démo ci-dessus passe les deux. Les menus horizontaux s'y heurtent rarement : leur `block: 'nearest'` par défaut ne demande aucun mouvement vertical à la page en premier lieu.",
      },
      {
        heading: 'La visibilité n’a pas d’axe',
        body: '`useIsVisible` est porté par IntersectionObserver, et l’intersection est mesurée dans les deux dimensions — les rangées signalent leur état en croisant les bords haut et bas exactement comme les éléments horizontaux le font sur les côtés. La démo estompe les rangées hors vue pour le montrer, avec les quatre premières peintes visibles côté serveur via l’argument `defaultValue` du hook.',
      },
      {
        heading: 'Notes',
        body: [
          '- La seule dimension fixe est la hauteur en ligne du panneau ; le `height: 100%` de l’enveloppe la porte jusqu’au conteneur de défilement.',
          '- La molette et le toucher font défiler la colonne nativement — `overflow-y: auto` en fait un vrai conteneur de défilement ; les flèches sont une commodité, pas un mécanisme.',
          '- Le deuxième argument de `scrollPrev`/`scrollNext` est la position `inline` (horizontale) — les menus verticaux se soucient de `block`, c’est pourquoi la story la passe explicitement.',
        ].join('\n'),
      },
    ],
  },

  rtl: {
    meta: {
      title:
        'Défilement horizontal RTL dans React : un menu de droite à gauche',
      description:
        'Un menu à défilement horizontal de droite à gauche dans React : la prop RTL inverse le sens de défilement et la pagination, et les flèches changent de côté. Démo en direct et source complète.',
    },
    title: 'Un menu horizontal de droite à gauche',
    lede: 'Pour les interfaces en arabe ou en hébreu, la rangée doit commencer au bord droit et grandir vers la gauche. Une prop booléenne inverse le conteneur de défilement ; le seul vrai travail restant est de décider ce que signifient les flèches quand « suivant » pointe à gauche.',
    demoHint:
      'Basculez l’interrupteur — la rangée redémarre du bord opposé et les flèches échangent leurs rôles.',
    prose: [
      {
        heading: 'Comment ça marche',
        body: '`RTL={true}` met le conteneur de défilement en mode droite-à-gauche : le premier élément se trouve au bord droit et le défilement avance vers la gauche. Tout ce qui est logique reste logique — `useIsVisible(’first’)` signifie toujours le premier élément de vos données, `scrollNext()` se déplace toujours vers le dernier — seule la direction à l’écran s’inverse.',
      },
      {
        heading: 'Les flèches échangent d’emplacement, pas de logique',
        body: 'La prop `LeftArrow` se rend toujours du côté gauche de l’écran. En RTL, ce côté est celui où vit « suivant », donc la story alimente les emplacements avec des éléments échangés : `LeftArrow={RTL ? <RightArrow /> : <LeftArrow />}`. Les composants eux-mêmes gardent leur logique — celui câblé à `scrollPrev` se désactive toujours via `useIsVisible(’first’)` — seuls leur position à l’écran et leur libellé changent.',
      },
      {
        heading: 'Notes',
        body: [
          '- La story passe `noPolyfill={true}`, donc les défilements programmatiques utilisent le défilement fluide natif du navigateur au lieu du polyfill embarqué.',
          '- `scrollPrev(’smooth’, ’end’)` et `scrollNext(’smooth’, ’start’)` passent un alignement explicite — le deuxième argument est le même ensemble `start/center/end` que prend `scrollToItem`.',
          '- La story bascule `RTL` en direct depuis une case à cocher — la prop n’est qu’un état, rien dans le menu n’est configuré au moment du build.',
        ].join('\n'),
      },
    ],
  },

  'add-items': {
    meta: {
      title: 'Défilement horizontal infini dans React : charger plus à la fin',
      description:
        'Défilement horizontal infini dans React : onUpdate vérifie api.items.last().visible et ajoute le lot suivant avec un élément de chargement. Démo en direct et source complète.',
    },
    title: 'Charger plus d’éléments quand la fin entre dans la vue',
    lede: 'Défilement horizontal infini sans écouteur de défilement : le menu sait déjà quels éléments sont visibles, donc « l’utilisateur a-t-il atteint la fin ? » n’est qu’une question — le dernier élément est-il à l’écran ? `onUpdate` la pose après chaque défilement et ajoute le lot suivant quand la réponse est oui.',
    demoHint:
      'Faites défiler jusqu’à l’extrémité droite — une carte de chargement apparaît et le lot suivant arrive. La démo s’arrête à 30 éléments.',
    prose: [
      {
        heading: 'Comment ça marche',
        body: '`onUpdate` se déclenche à chaque changement de visibilité d’élément. Le gestionnaire lit `api.items.last()?.visible` — la bibliothèque suit chaque élément par son `itemId` et garde un drapeau de visibilité par élément, donc détecter la fin coûte une recherche, sans IntersectionObserver propre et sans mathématique de position de défilement. Ensuite `pushNewItems` simule un fetch : un timeout d’une seconde, cinq éléments de plus, terminé.',
      },
      {
        heading: 'Protéger le fetch',
        body: 'Les mises à jour de visibilité arrivent par rafales, donc le gestionnaire doit être sûr à appeler de façon répétée. Un drapeau `loading` le rend idempotent : `onUpdate` et `pushNewItems` le vérifient tous deux, et seul le premier déclencheur lance un fetch. Le même drapeau rend un composant `Loader` comme un vrai élément de menu (avec son propre `itemId`) qui appelle `scrollIntoView()` au montage, gardant la fin de la rangée à la vue pendant que le lot charge.',
      },
      {
        heading: 'Notes',
        body: [
          '- La flèche droite est passée comme élément, `RightArrow={<RightArrow disabled={...} />}` — les formes composant et élément fonctionnent toutes deux, et la forme élément laisse le parent passer des props comme le plafond d’éléments.',
          '- Cette flèche ne se désactive que lorsque le plafond est atteint et que le dernier élément est visible — avant le plafond, atteindre la fin signifie que d’autres éléments arrivent.',
          '- `newItemsLimit` arrête cette démo à 24 éléments ; dans du vrai code, le signal équivalent est votre API qui n’a plus de pages.',
        ].join('\n'),
      },
    ],
  },
  'custom-transition': {
    meta: {
      title:
        'Animation de défilement personnalisée dans React : easing et durée',
      description:
        'Easing et durée personnalisés pour les défilements programmatiques dans React : transitionBehavior vous remet la position cible et vous animez scrollLeft. Démo en direct et source.',
    },
    title:
      'Animation de défilement personnalisée : votre propre easing et durée',
    lede: 'Le défilement fluide natif vous donne une vitesse et une courbe, choisies par le navigateur. Quand un défilement programmatique doit s’accorder au reste de votre design de mouvement, `noPolyfill={false}` vous laisse prendre la main — le menu calcule où le rail doit aller, et votre code y conduit `scrollLeft`.',
    demoHint:
      'Cliquez sur les flèches et changez la durée — à 2500 ms, la courbe ease-in-out-cubic est facile à voir. Un clic en pleine animation annule la précédente.',
    prose: [
      {
        heading: 'Comment ça marche',
        body: 'Par défaut, le menu défile avec le `scrollIntoView` natif et ignore les deux props de transition. Définir `noPolyfill={false}` route les défilements programmatiques par le polyfill scroll-into-view-if-needed, qui calcule la cible et la remet à votre `transitionBehavior` comme instructions : une action `{ el, top, left }` par ancêtre défilable qui doit bouger — ici toujours le seul conteneur de défilement, parce que le menu le passe comme limite. À partir de là, `animateScroll` fait avancer `el.scrollLeft` vers la cible à chaque `requestAnimationFrame`, en mappant le progrès via `easeInOutCubic` sur la durée choisie.',
      },
      {
        heading: 'Interrompre une animation en vol',
        body: 'Un second clic de flèche peut atterrir en pleine animation. La story garde le frame en attente par élément dans un `WeakMap`, donc un nouvel appel annule l’ancienne boucle de `requestAnimationFrame` au lieu de laisser les deux se battre pour `scrollLeft`. Et comme chaque animation lit son point de départ dans le `scrollLeft` actuel de l’élément, la nouvelle reprend exactement là où l’interrompue s’est arrêtée.',
      },
      {
        heading: 'Notes',
        body: [
          '- Rien ici n’est lié à la fonction d’easing — une fois que vous avez la position cible, n’importe quelle courbe ou bibliothèque d’animation fonctionne.',
          '- Les types décrivent `transitionBehavior` comme une chaîne `ScrollBehavior`, mais la valeur va directement à scroll-into-view-if-needed comme son callback `behavior` — d’où le cast dans la source.',
          '- La story câble le même état de durée dans `transitionDuration` et dans l’animation elle-même, pour que les deux ne puissent pas diverger.',
        ].join('\n'),
      },
    ],
  },

  'prevent-body-scroll': {
    meta: {
      title:
        'Empêcher le défilement de page à la molette : menu horizontal React',
      description:
        'Faites défiler un menu horizontal React à la molette pendant que la page reste en place : un écouteur de molette natif non passif activé au survol. Démo en direct et source complète.',
    },
    title: 'Faites défiler le menu à la molette — sans faire défiler la page',
    lede: 'Un menu horizontal sous la molette est gênant : la molette fait défiler la page et la rangée reste en place. La correction a deux moitiés — un gestionnaire `onWheel` qui transforme les tics de molette en pagination, et un écouteur natif non passif qui empêche la page de bouger en dessous. La seconde moitié ne peut pas être faite avec React seul.',
    demoHint:
      'Posez le pointeur sur la rangée et tournez la molette : la rangée pagine, la page reste immobile. Sortez de la rangée et la molette refait défiler la page.',
    prose: [
      {
        heading: 'Transformer la molette en pagination',
        body: 'La prop `onWheel` de `ScrollMenu` est appelée avec l’objet API et l’événement de molette. Une vraie molette de souris signale des deltas uniquement en Y par pas grossiers, donc le gestionnaire appelle `scrollNext` quand `deltaY` est négatif et `scrollPrev` sinon — chaque tic pagine la rangée. Avant tout cela, il vérifie si l’événement ressemble à un geste de trackpad : n’importe quel `deltaX`, ou un `deltaY` inférieur à 15.',
      },
      {
        heading:
          'Pourquoi le verrouillage de page a besoin d’un écouteur natif',
        body: "Appeler `preventDefault` dans le gestionnaire React serait le moyen évident d'arrêter la page — et il ne fait rien en silence, parce que React enregistre les écouteurs de molette comme passifs, et qu'un écouteur passif n'a pas le droit d'annuler l'événement. Alors `usePreventBodyScroll` contourne React : au `mouseenter`, il exécute `document.addEventListener('wheel', preventDefault, { passive: false })`, au `mouseleave` il retire l'écouteur. Pendant que le pointeur est sur le menu, chaque événement de molette remonte jusqu'à `document` et y voit son action par défaut — faire défiler la page — annulée. Un nettoyage de `useEffect` appelle `enableScroll` au démontage, donc la page ne peut jamais rester verrouillée.",
      },
      {
        heading: 'L’échappatoire du trackpad',
        body: 'Le défilement à deux doigts arrive aussi comme des événements de molette, et le conteneur défile nativement avec eux — l’écouteur de document tuerait cela. Pour les événements correspondant à l’heuristique de trackpad, le gestionnaire appelle `stopPropagation` et renvoie : l’événement n’atteint jamais l’écouteur de document, donc le défilement natif survit. Il n’y a pas de moyen fiable de détecter un trackpad ; l’heuristique du delta est le pari honnête de la story, et il tient en pratique.',
      },
      {
        heading: 'Notes',
        body: [
          '- Les navigateurs ont rendu passifs par défaut les écouteurs de molette au niveau du document précisément pour que les pages ne saccadent pas le défilement — `passive: false` est l’exclusion explicite qui rend `preventDefault` de nouveau légal.',
          '- Molette vers le haut pagine en avant et molette vers le bas en arrière — c’est le mappage de la story ; échangez les branches `scrollNext` / `scrollPrev` pour l’inverse.',
          '- Les appareils tactiles n’exécutent rien de tout cela : il n’y a pas de `mouseenter`, et balayer la rangée est du défilement natif depuis le début.',
          '- Le verrou n’existe qu’entre `mouseenter` et `mouseleave`, donc le reste de la page défile normalement dès que le pointeur quitte le rail.',
        ].join('\n'),
      },
    ],
  },

  'one-item-scroll': {
    meta: {
      title:
        'Défiler d’un élément à la fois dans React : flèches de carrousel précises',
      description:
        'Avancez un carrousel React d’un élément par clic de flèche : scrollToItem avec getNextElement avance d’une carte au lieu d’une page entière. Démo en direct et source complète.',
    },
    title: 'Défiler d’un élément à la fois au lieu d’une page entière',
    lede: 'Par défaut, les flèches paginent : tout ce qui est visible glisse dehors et le groupe suivant glisse dedans. Cet exemple les recâble pour faire des pas — une carte par clic — et tout le changement est ce que le `onClick` de la flèche appelle. Même menu, mêmes éléments, cible de défilement différente.',
    demoHint:
      'Cliquez sur une flèche — la rangée avance d’une carte, pas d’une page. Les flèches se désactivent aux extrémités.',
    prose: [
      {
        heading: 'Comment ça marche',
        body: '`getNextElement()` renvoie le premier élément au-delà du groupe visible ; `getPrevElement()` celui juste avant. La flèche droite appelle `scrollToItem(visibility.getNextElement(), ’smooth’, ’end’)` — aligner cet élément avec le bord final du conteneur fait défiler juste assez pour l’amener à la vue, ce qui bouge la rangée d’exactement une carte. La flèche gauche est son miroir : élément précédent, aligné sur `’start’`.',
      },
      {
        heading: 'L’alignement est tout le truc',
        body: 'Le `scrollNext()` standard résout le même élément suivant en interne, mais l’aligne sur le bord initial — la vue défile au-delà de tout le groupe visible pour mettre cet élément en premier. Un argument `ScrollLogicalPosition` est la différence entre paginer et faire des pas. Le troisième paramètre de `scrollToItem` est l’alignement `inline` standard du scroll-into-view ; le deuxième est le comportement, ici `’smooth’`.',
      },
      {
        heading: 'Notes',
        body: [
          '- L’état des flèches utilise les raccourcis `’first’` et `’last’` : `useIsVisible(’first’, true)` désactive la flèche gauche au début, `useIsVisible(’last’, false)` la droite à la fin.',
          '- Aux extrémités, `getNextElement()` renvoie undefined et `scrollToItem` ne fait rien en silence, donc une flèche activée ne peut toujours pas défiler en trop.',
          '- Le gestionnaire `onWheel` de la story pagine encore une vue entière par cran de molette — faire des pas est le comportement des flèches, pas un mode global.',
          '- Les clics d’élément restent intacts : les cartes basculent la sélection via leur propre `onClick`, indépendant de la façon dont les flèches défilent.',
        ].join('\n'),
      },
    ],
  },

  'items-animation': {
    meta: {
      title: 'Animer l’ajout et la suppression d’éléments de liste dans React',
      description:
        'Ajoutez, retirez et mélangez des éléments d’une liste horizontale React, animés par @formkit/auto-animate via la prop containerRef de ScrollMenu. Démo en direct et source complète.',
    },
    title:
      'Animer les éléments à l’entrée, à la sortie et à leur place avec auto-animate',
    lede: 'Ajouter à une liste horizontale fait surgir le nouvel élément en place ; en retirer un rapproche soudainement ses voisins. `@formkit/auto-animate` corrige les deux avec une seule ref parente — et la prop `containerRef` de `ScrollMenu` lui remet exactement l’élément dont il a besoin.',
    demoHint:
      'Ajoutez, retirez et mélangez — chaque entrée, sortie et réorganisation est animée. Le menu lui-même n’a pas de code d’animation.',
    prose: [
      {
        heading: 'Comment ça marche',
        body: '`useAutoAnimate()` renvoie une ref qui doit se poser sur le parent direct des éléments à animer. Dans `ScrollMenu`, ce parent est le conteneur de défilement : chaque enfant que vous passez est enveloppé dans un div d’élément, et ces divs d’élément sont les enfants immédiats du conteneur. La story fait passer la ref directement — `<ScrollMenu containerRef={parent}>` — et auto-animate prend le relais : les éléments ajoutés entrent en douceur, les éléments retirés s’animent à la sortie, et les éléments réordonnés glissent vers leur nouveau slot. Le menu lui-même ne sait jamais qu’il est animé.',
      },
      {
        heading: 'Ajouter, retirer, mélanger',
        body: 'Les trois contrôles sont de simples appels `setState` sur le tableau items — `addItems` en ajoute un, `removeItems` laisse tomber le dernier, `shuffle` est une passe de Fisher–Yates sur une copie. Les animations viennent entièrement des mutations du DOM que ces mises à jour causent. Une règle mérite d’être gardée : `itemId` sert à la fois de key React et de poignée de l’élément dans la carte de suivi du menu, donc les id doivent rester uniques — la story va jusqu’à reboucher les trous de numérotation laissés par les suppressions plutôt que de risquer de frapper un doublon.',
      },
      {
        heading: 'Le défilement et le suivi continuent de fonctionner',
        body: 'Le menu re-observe ses enfants à chaque changement, donc le `useIsVisible` d’un élément fraîchement ajouté rapporte correctement tout de suite et les flèches continuent de paginer. Un nouvel élément atterrit généralement hors écran, cela dit — si l’entrée doit réellement être vue, associez ceci à `scrollToItem` comme le fait l’exemple add-item-and-scroll-to-it.',
      },
      {
        heading: 'Notes',
        body: [
          '- `containerRef` accepte un objet ref ou une ref callback — le callback de `useAutoAnimate` se branche directement.',
          '- auto-animate est sans configuration et indépendant du framework ; la liaison React est le seul hook `useAutoAnimate`.',
          '- La démo ci-dessus simplifie la gestion des id en un compteur monotone ; le panneau de code montre la version avec rebouchage de trous de la story.',
        ].join('\n'),
      },
    ],
  },

  'mui-scrollable-tabs': {
    meta: {
      title: 'Alternative aux onglets défilables MUI : défilement natif',
      description:
        'Vous dépassez variant="scrollable" de MUI ? Gardez le contrat value/onChange, boutons qui survivent au mobile, centré et défilable à la fois. Source complète.',
    },
    title: 'Onglets défilables au-delà de MUI',
    lede: 'Les onglets défilables de Material UI sont soudés à la sémantique de Tabs, et leurs boutons de défilement disparaissent sur mobile par défaut. Cette recette garde la partie dont votre code dépend — le contrat `value`/`onChange` — et remplace la bande sous-jacente : défilement natif, une sélection qui se centre elle-même, des onglets capables de contenir n’importe quoi.',
    demoHint:
      'Cliquez sur un onglet près de l’un ou l’autre bord — il se centre lui-même. Faites glisser la rangée, comme sur un téléphone.',
    prose: [
      {
        heading: 'Garder le contrat value/onChange',
        body: 'Le `handleChange` de la source a exactement la signature de MUI — `(event, newValue)`. Migrer signifie remplacer le balisage, pas recâbler l’état : vos `useState`, gestionnaires et panneaux d’onglets restent intacts. La sélection se centre elle-même avec `api.scrollToItem(el, ’smooth’, ’center’)`, câblée exactement comme dans l’[exemple de centrage au clic](/examples/center-on-click).',
      },
      {
        heading: 'Boutons de défilement qui survivent sur mobile',
        body: 'MUI masque ses boutons de défilement en dessous de 600px, sauf si vous activez `allowScrollButtonsMobile` — et même alors, ils restent internes à Tabs. Ici, les flèches sont vos propres composants : `useIsVisible(’first’)` / `useIsVisible(’last’)` pilotent un fondu d’opacité, elles s’affichent sur chaque viewport, et le défilement tactile reste natif, quoi que fassent les flèches.',
      },
      {
        heading: 'Centrer et défiler, à la fois',
        body: 'Dans MUI, la prop `centered` et le variant `scrollable` s’excluent mutuellement — la documentation vous dit d’en choisir un. Ici, le centrage n’est pas un mode de mise en page mais un défilement au clic, donc la bande est les deux à la fois : elle déborde nativement et chaque onglet sélectionné glisse jusqu’au milieu.',
      },
      {
        heading: 'Onglets qui cessent d’être des onglets',
        body: 'Deux onglets de la démo portent des badges de comptage ; puces, avatars ou contenu mixte fonctionnent de la même façon — la seule exigence est un `itemId`. Stylez avec `@emotion/styled` comme le fait la source, avec le `styled()` propre à MUI pour qu’il s’intègre dans une application Material, ou avec Tailwind. La démo ci-dessus ajoute le [glisser pour défiler](/examples/mouse-drag) ; restaurer l’onglet sélectionné au montage, c’est [sauvegarder et restaurer la position](/examples/save-restore-position).',
      },
      {
        heading: 'Notes',
        body: [
          '- Choisissez votre motif ARIA : gardez `role="tablist"`/`role="tab"`/`aria-selected` quand de vrais panneaux basculent (comme ici), ou `aria-current` quand les « onglets » sont des liens de navigation.',
          '- Avec le glisser activé, supprimez le clic qui se déclenche au relâchement du glissement — la démo vérifie `dragManager.dragging` avant de sélectionner, comme la [recette de glisser pour défiler](/examples/mouse-drag).',
          '- Le [RTL](/examples/rtl) ne demande aucun travail supplémentaire : la bande est un conteneur de défilement natif, donc `direction: rtl` l’inverse, flèches comprises.',
        ].join('\n'),
      },
    ],
  },
};
