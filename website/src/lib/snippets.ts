// Source code for every snippet shown on the page. Highlighted at build
// time by the `snippets-html` plugin in vite.config.ts — shiki never ships
// to the browser or the worker.

export interface Snippet {
  lang: 'tsx' | 'bash';
  code: string;
}

export const snippets = {
  install: {
    lang: 'bash',
    code: 'npm install react-horizontal-scrolling-menu',
  },

  quickStart: {
    lang: 'tsx',
    code: `import React from 'react';
import {
  ScrollMenu,
  VisibilityContext,
  type publicApiType,
} from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';

const items = Array.from({ length: 10 }, (_, i) => \`item-\${i + 1}\`);

export function App() {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {items.map((id) => (
        <Card itemId={id} key={id} title={id} />
      ))}
    </ScrollMenu>
  );
}

function LeftArrow() {
  const visibility = React.useContext<publicApiType>(VisibilityContext);
  const isFirstVisible = visibility.useIsVisible('first', true);
  return (
    <button
      disabled={isFirstVisible}
      onClick={() => visibility.scrollPrev()}
    >
      ←
    </button>
  );
}

function RightArrow() {
  const visibility = React.useContext<publicApiType>(VisibilityContext);
  const isLastVisible = visibility.useIsVisible('last', false);
  return (
    <button
      disabled={isLastVisible}
      onClick={() => visibility.scrollNext()}
    >
      →
    </button>
  );
}

function Card({ itemId, title }: { itemId: string; title: string }) {
  const visibility = React.useContext<publicApiType>(VisibilityContext);
  const isVisible = visibility.useIsVisible(itemId);
  return (
    <div className="card" data-visible={isVisible}>
      <div>{title}</div>
      <div>visible: {String(isVisible)}</div>
    </div>
  );
}`,
  },

  tabs: {
    lang: 'tsx',
    code: `function Tab({ itemId, label }: { itemId: string; label: string }) {
  const api = React.useContext<publicApiType>(VisibilityContext);

  const centerOnClick = () => {
    const el = api.getItemElementById(itemId);
    if (el) api.scrollToItem(el, 'smooth', 'center');
  };

  return <button onClick={centerOnClick}>{label}</button>;
}`,
  },

  chips: {
    lang: 'tsx',
    code: `const apiRef = React.useRef<publicApiType>(null);
const lastAdded = React.useRef<string | null>(null);

function addChip(id: string) {
  lastAdded.current = id;
  setChips((current) => [...current, id]);
}

// After the new chip renders, scroll it into view from outside
// the menu — this is what apiRef is for.
React.useEffect(() => {
  const id = lastAdded.current;
  if (!id) return;
  const el = apiRef.current?.getItemElementById(id);
  if (el) apiRef.current?.scrollToItem(el, 'smooth', 'end');
  lastAdded.current = null;
}, [chips]);

<ScrollMenu apiRef={apiRef}>…</ScrollMenu>`,
  },

  infinite: {
    lang: 'tsx',
    code: `<ScrollMenu
  onUpdate={(api) => {
    // react in onUpdate, not onScroll — onScroll fires
    // before the visibility state settles
    if (api.items.last()?.visible) loadMore();
  }}
>
  {cards}
</ScrollMenu>`,
  },

  rtl: {
    lang: 'tsx',
    code: `<ScrollMenu RTL LeftArrow={LeftArrow} RightArrow={RightArrow}>
  {items.map((item) => (
    <Item itemId={item.id} key={item.id} label={item.label} />
  ))}
</ScrollMenu>`,
  },
} satisfies Record<string, Snippet>;

export type SnippetKey = keyof typeof snippets;
