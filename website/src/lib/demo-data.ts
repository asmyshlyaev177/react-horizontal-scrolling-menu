// Content for the live demos. Flat playful color lives here, in demo
// content, not in the page chrome — which is itself the point: items are
// your components, styled by your CSS.

export interface Genre {
  id: string;
  name: string;
  color: string;
  darkText?: boolean;
}

export const genres: Genre[] = [
  { id: 'scifi', name: 'Sci-Fi', color: 'var(--demo-blue)' },
  { id: 'comedy', name: 'Comedy', color: 'var(--demo-amber)', darkText: true },
  { id: 'drama', name: 'Drama', color: 'var(--demo-red)' },
  { id: 'horror', name: 'Horror', color: 'var(--demo-violet)' },
  { id: 'docs', name: 'Docs', color: 'var(--demo-green)', darkText: true },
  { id: 'kids', name: 'Kids', color: 'var(--demo-cyan)', darkText: true },
  { id: 'action', name: 'Action', color: 'var(--demo-red)' },
  { id: 'indie', name: 'Indie', color: 'var(--demo-violet)' },
  { id: 'anime', name: 'Anime', color: 'var(--demo-blue)' },
  {
    id: 'classics',
    name: 'Classics',
    color: 'var(--demo-amber)',
    darkText: true,
  },
  {
    id: 'thriller',
    name: 'Thriller',
    color: 'var(--demo-green)',
    darkText: true,
  },
  { id: 'reality', name: 'Reality', color: 'var(--demo-cyan)', darkText: true },
];

export const tabs = [
  'Overview',
  'Getting started',
  'Visibility',
  'Arrows',
  'Drag to scroll',
  'RTL',
  'apiRef',
  'Helpers',
  'TypeScript',
  'Testing',
  'Changelog',
  'FAQ',
];

export const initialChips = [
  { id: 'react', color: 'var(--demo-cyan)', darkText: true },
  { id: 'typescript', color: 'var(--demo-blue)' },
  { id: 'scrolling', color: 'var(--demo-red)' },
  { id: 'menu', color: 'var(--demo-green)', darkText: true },
  { id: 'gallery', color: 'var(--demo-amber)', darkText: true },
  { id: 'tabs', color: 'var(--demo-violet)' },
];

export const chipPool = [
  'carousel',
  'slider',
  'rtl',
  'a11y',
  'touch',
  'wheel',
  'drag',
  'observer',
  'hooks',
  'ssr',
];

export const rtlItems = [
  { id: 'one', label: 'واحد' },
  { id: 'two', label: 'اثنان' },
  { id: 'three', label: 'ثلاثة' },
  { id: 'four', label: 'أربعة' },
  { id: 'five', label: 'خمسة' },
  { id: 'six', label: 'ستة' },
  { id: 'seven', label: 'سبعة' },
  { id: 'eight', label: 'ثمانية' },
  { id: 'nine', label: 'تسعة' },
  { id: 'ten', label: 'عشرة' },
];

export const feedColors = [
  'var(--demo-red)',
  'var(--demo-amber)',
  'var(--demo-green)',
  'var(--demo-cyan)',
  'var(--demo-blue)',
  'var(--demo-violet)',
];

export interface City {
  id: string;
  name: string;
  color: string;
  darkText?: boolean;
}

export const cities: City[] = [
  { id: 'tokyo', name: 'Tokyo', color: 'var(--demo-red)' },
  { id: 'oslo', name: 'Oslo', color: 'var(--demo-cyan)', darkText: true },
  { id: 'lima', name: 'Lima', color: 'var(--demo-amber)', darkText: true },
  { id: 'cairo', name: 'Cairo', color: 'var(--demo-blue)' },
  { id: 'sydney', name: 'Sydney', color: 'var(--demo-green)', darkText: true },
  { id: 'quito', name: 'Quito', color: 'var(--demo-violet)' },
  { id: 'seoul', name: 'Seoul', color: 'var(--demo-cyan)', darkText: true },
  { id: 'porto', name: 'Porto', color: 'var(--demo-red)' },
  { id: 'denver', name: 'Denver', color: 'var(--demo-amber)', darkText: true },
  { id: 'hanoi', name: 'Hanoi', color: 'var(--demo-blue)' },
];
