export const SITE_URL = 'https://react-horizontal-scrolling-menu.dev';

export const GITHUB =
  'https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu';
export const NPM =
  'https://www.npmjs.com/package/react-horizontal-scrolling-menu';
export const STORYBOOK =
  'https://asmyshlyaev177.github.io/react-horizontal-scrolling-menu';
export const CHANGELOG = `${GITHUB}/blob/master/CHANGELOG.md`;
export const ISSUES = `${GITHUB}/issues`;
export const API_DOCS = `${GITHUB}#properties-and-callbacks`;
export const LLMS_TXT = '/llms.txt';
// The SKILL.md files published with the package, as sources on GitHub.
export const SKILLS = `${GITHUB}/tree/master/skills`;
export const INTENT = 'https://tanstack.com/intent/latest/docs/overview';
export const AUTHOR_SITE = 'https://asmyshlyaev177.dev';
export const AUTHOR_GITHUB = 'https://github.com/asmyshlyaev177';
export const AUTHOR_LINKEDIN = 'https://linkedin.com/in/asmyshlyaev177';
export const REACT_STATUS = 'https://react.statuscode.com/issues/257';

export const storyUrl = (id: string) => `${STORYBOOK}/?path=/story/${id}`;

// Story ids for "Open in Storybook" links. Kept in one place so the
// Storybook reorganization only has to update this map.
export const STORIES = {
  simple: storyUrl('examples-simple--simple'),
  oneItem: storyUrl('examples-oneitem--one-item'),
  oneItemScroll: storyUrl('examples-oneitemscroll--one-item-scroll'),
  bottomArrows: storyUrl('examples-bottomarrows--bottom-arrows'),
  centerOnClick: storyUrl('examples-centeronclick--center-on-click'),
  scrollToItem: storyUrl('examples-scrolltoitem--scroll-to-item'),
  saveRestorePosition: storyUrl('examples-saverestoreposition--position'),
  customTransition: storyUrl('examples-customtransition--custom-transition'),
  progress: storyUrl('examples-progress--progress'),
  mouseDrag: storyUrl('examples-mousedrag--mouse-drag'),
  swipeDesktop: storyUrl('examples-swipedesktop--swipe-desktop'),
  mobileSwipeOnly: storyUrl('examples-mobileswipeonly--mobile-swipe-only'),
  preventBodyScroll: storyUrl(
    'examples-preventbodyscroll--prevent-body-scroll',
  ),
  addItemScrollTo: storyUrl(
    'examples-additemandscrolltoit--add-item-and-scroll-to-it',
  ),
  addItems: storyUrl('examples-additems--add-items'),
  itemsAnimation: storyUrl('examples-itemsanimation--items-animation'),
  performance: storyUrl('examples-performance--performance'),
  vertical: storyUrl('examples-vertical--vertical'),
  rtl: storyUrl('examples-rtl--rtl'),
  infiniteLoop: storyUrl('examples-infiniteloop--infinite-loop'),
  autoplay: storyUrl('examples-autoplay--autoplay'),
};
