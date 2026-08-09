/// <reference types="vite/client" />

declare module 'virtual:snippets-html' {
  const html: Record<string, string>;
  export default html;
}

declare module 'virtual:example-code/*' {
  export const code: string;
  export const html: string;
}
