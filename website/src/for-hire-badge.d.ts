import type { HTMLAttributes } from 'react';

/**
 * <for-hire-badge> — custom element loaded from
 * https://asmyshlyaev177.dev/for-hire-badge.js (see the script tag in
 * routes/__root.tsx). Declared here so JSX accepts the tag; nothing is bundled.
 */
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'for-hire-badge': HTMLAttributes<HTMLElement> & {
        theme?: 'auto' | 'light' | 'dark';
        position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
        label?: string;
      };
    }
  }
}
