import { elementScrollIntoViewPolyfill } from 'seamless-scroll-polyfill';

if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  elementScrollIntoViewPolyfill();
}
