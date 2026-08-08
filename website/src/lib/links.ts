export const SITE_URL =
  'https://react-horizontal-scrolling-menu.asmyshlyaev177.workers.dev';

export const GITHUB =
  'https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu';
export const NPM =
  'https://www.npmjs.com/package/react-horizontal-scrolling-menu';
export const STORYBOOK =
  'https://asmyshlyaev177.github.io/react-horizontal-scrolling-menu';
export const CHANGELOG = `${GITHUB}/blob/master/CHANGELOG.md`;
export const ISSUES = `${GITHUB}/issues`;
export const API_DOCS = `${GITHUB}#properties-and-callbacks`;
export const AUTHOR_SITE = 'https://asmyshlyaev177.dev';
export const AUTHOR_GITHUB = 'https://github.com/asmyshlyaev177';
export const AUTHOR_LINKEDIN = 'https://linkedin.com/in/asmyshlyaev177';
export const REACT_STATUS = 'https://react.statuscode.com/issues/257';

export const storyUrl = (id: string) => `${STORYBOOK}/?path=/story/${id}`;

// Story ids for "Open in Storybook" links. Kept in one place so the
// Storybook reorganization only has to update this map.
export const STORIES = {
  simple: storyUrl('examples-simple--simple'),
  centerOnClick: storyUrl('examples-centeronclick--center-on-click'),
  addItemScrollTo: storyUrl(
    'examples-additemandscrolltoit--add-item-and-scroll-to-it',
  ),
  addItems: storyUrl('examples-additems--add-items'),
  rtl: storyUrl('examples-rtl--rtl'),
};
