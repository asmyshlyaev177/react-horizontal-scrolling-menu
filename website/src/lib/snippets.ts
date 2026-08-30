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
  netflixRow: {
    lang: 'tsx',
    code: `function MediaRow({ children }: { children: React.ReactNode }) {
  return (
    <div className="group relative">
      <ScrollMenu Header={<OverlayArrows />} wrapperClassName="edge-fade">
        {children}
      </ScrollMenu>
    </div>
  );
}

// Rendered as Header, so it lives inside the menu's VisibilityContext
// and can sit absolutely positioned over the row ends.
function OverlayArrows() {
  const api = React.useContext<publicApiType>(VisibilityContext);
  const atStart = api.useLeftArrowVisible();
  const atEnd = api.useRightArrowVisible();
  return (
    <>
      <button
        className="overlay-arrow left-0"
        hidden={atStart}
        onClick={() => api.scrollPrev()}
      >
        ←
      </button>
      <button
        className="overlay-arrow right-0"
        hidden={atEnd}
        onClick={() => api.scrollNext()}
      >
        →
      </button>
    </>
  );
}

/* .edge-fade — the Netflix edge, one CSS line:
   mask-image: linear-gradient(to right,
     transparent, black 40px, black calc(100% - 40px), transparent); */`,
  },

  scrollableTabs: {
    lang: 'tsx',
    code: `function ScrollTabs({ tabs }: { tabs: string[] }) {
  const [active, setActive] = React.useState(tabs[0]);
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {tabs.map((tab) => (
        <Tab itemId={tab} key={tab} label={tab}
          active={tab === active} onSelect={() => setActive(tab)} />
      ))}
    </ScrollMenu>
  );
}

function Tab({ itemId, label, active, onSelect }: TabProps) {
  const api = React.useContext<publicApiType>(VisibilityContext);
  return (
    <button
      aria-current={active}
      onClick={(ev) => {
        onSelect();
        // The behavior that makes tabs feel native: selecting an
        // edge tab glides it to the center of the strip.
        api.scrollToItem(ev.currentTarget, 'smooth', 'center');
      }}
    >
      {label}
    </button>
  );
}`,
  },

  filterChips: {
    lang: 'tsx',
    code: `function ChipBar({ options }: { options: string[] }) {
  const apiRef = React.useRef<publicApiType>(null);
  const [selected, setSelected] = React.useState<string[]>([]);

  const toggle = (id: string) =>
    setSelected((cur) =>
      cur.includes(id) ? cur.filter((c) => c !== id) : [...cur, id],
    );

  // A chip appended off-screen scrolls itself into view.
  const addChip = (id: string) => {
    toggle(id);
    requestAnimationFrame(() => {
      const el = apiRef.current?.getItemElementById(id);
      if (el) apiRef.current?.scrollToItem(el, 'smooth', 'end');
    });
  };

  return (
    <ScrollMenu apiRef={apiRef}>
      {options.map((id) => (
        <Chip itemId={id} key={id} pressed={selected.includes(id)}
          onToggle={() => toggle(id)} />
      ))}
    </ScrollMenu>
  );
}`,
  },

  categoryRail: {
    lang: 'tsx',
    code: `function CategoryRail({ categories }: { categories: Category[] }) {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {categories.map((category) => (
        <CategoryTile itemId={category.id} key={category.id} {...category} />
      ))}
    </ScrollMenu>
  );
}

function CategoryTile({ itemId, name, image }: CategoryTileProps) {
  // Lazy images for free: placeholders until the tile is on screen.
  const visibility = React.useContext<publicApiType>(VisibilityContext);
  const isVisible = visibility.useIsVisible(itemId, false);
  return (
    <a href={\`/category/\${itemId}\`} className="rail-tile">
      {isVisible ? <img src={image} alt="" /> : <div className="ph" />}
      <span>{name}</span>
    </a>
  );
}

function LeftArrow() {
  const visibility = React.useContext<publicApiType>(VisibilityContext);
  const atStart = visibility.useLeftArrowVisible();
  return (
    <button disabled={atStart} onClick={() => visibility.scrollPrev()}>
      ←
    </button>
  );
}`,
  },

  shadcnMediaRow: {
    lang: 'bash',
    code: 'npx shadcn@latest add https://react-horizontal-scrolling-menu.dev/r/media-row.json',
  },

  shadcnScrollTabs: {
    lang: 'bash',
    code: 'npx shadcn@latest add https://react-horizontal-scrolling-menu.dev/r/scroll-tabs.json',
  },

  shadcnChipBar: {
    lang: 'bash',
    code: 'npx shadcn@latest add https://react-horizontal-scrolling-menu.dev/r/chip-bar.json',
  },

  shadcnScrollMenu: {
    lang: 'bash',
    code: 'npx shadcn@latest add https://react-horizontal-scrolling-menu.dev/r/scroll-menu.json',
  },
} satisfies Record<string, Snippet>;

export type SnippetKey = keyof typeof snippets;
