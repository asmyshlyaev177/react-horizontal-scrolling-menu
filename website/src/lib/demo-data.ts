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

// Ten to start with, so the row overflows before anything is added — the
// point of the demo is the scroll-to-the-new-chip, which needs a row that
// scrolls. The pool is what "Add filter" draws from.
export const initialChips = [
  { id: 'react', color: 'var(--demo-cyan)', darkText: true },
  { id: 'typescript', color: 'var(--demo-blue)' },
  { id: 'scrolling', color: 'var(--demo-red)' },
  { id: 'menu', color: 'var(--demo-green)', darkText: true },
  { id: 'gallery', color: 'var(--demo-amber)', darkText: true },
  { id: 'tabs', color: 'var(--demo-violet)' },
  { id: 'carousel', color: 'var(--demo-cyan)', darkText: true },
  { id: 'slider', color: 'var(--demo-red)' },
  { id: 'accordion', color: 'var(--demo-amber)', darkText: true },
  { id: 'lightbox', color: 'var(--demo-blue)' },
];

export const chipPool = [
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

export interface Review {
  id: string;
  name: string;
  role: string;
  rating: number;
  quote: string;
  color: string;
  darkText?: boolean;
}

// Six fictional customers of a fictional product: the scroll-snap demo needs
// cards with a face, a name, a rating and a paragraph, and nothing more.
export const reviews: Review[] = [
  {
    id: 'mia',
    name: 'Mia Chen',
    role: 'Product designer',
    rating: 5,
    quote:
      'Setup took an afternoon and the first report landed in my inbox the next morning. I have not opened the old spreadsheet since.',
    color: 'var(--demo-blue)',
  },
  {
    id: 'tomas',
    name: 'Tomás Reyes',
    role: 'Engineering manager',
    rating: 5,
    quote:
      'The weekly digest is the only email my team reads end to end. Short, specific, and it names the person who unblocked you.',
    color: 'var(--demo-amber)',
    darkText: true,
  },
  {
    id: 'aisha',
    name: 'Aisha Okafor',
    role: 'Founder',
    rating: 4,
    quote:
      'I wanted numbers I could defend in a board meeting. Every figure links back to the source, so nobody has to take my word for it.',
    color: 'var(--demo-violet)',
  },
  {
    id: 'jonas',
    name: 'Jonas Lindqvist',
    role: 'Data analyst',
    rating: 5,
    quote:
      'Exports are plain CSV with sane column names. That alone saved me a script I had been maintaining for two years.',
    color: 'var(--demo-green)',
    darkText: true,
  },
  {
    id: 'priya',
    name: 'Priya Natarajan',
    role: 'Operations lead',
    rating: 5,
    quote:
      'Support answered a Sunday question in twenty minutes with a fix, not a ticket number. That is what I pay for.',
    color: 'var(--demo-red)',
  },
  {
    id: 'lucas',
    name: 'Lucas Moreau',
    role: 'Freelance developer',
    rating: 4,
    quote:
      'The API does exactly what the docs say, and the docs are one page. I shipped the integration before lunch.',
    color: 'var(--demo-cyan)',
    darkText: true,
  },
];
