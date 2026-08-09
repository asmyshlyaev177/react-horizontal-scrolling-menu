import * as React from 'react';
import {
  type publicApiType,
  ScrollMenu,
  VisibilityContext,
} from 'react-horizontal-scrolling-menu';

import { tabs } from '../../lib/demo-data';
import { LeftArrow, RightArrow } from '../Arrows';
import { useDragToScroll } from '../useDragToScroll';

// Tab strip: clicking a tab centers it via scrollToItem(el, 'smooth',
// 'center') — the "center items on click" recipe.

export function TabsDemo() {
  const { dragProps, dragManager } = useDragToScroll();
  const [active, setActive] = React.useState(tabs[0]);

  return (
    <div className="gallery-demo">
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} {...dragProps}>
        {tabs.map((label) => (
          <Tab
            itemId={label}
            key={label}
            label={label}
            active={active === label}
            onActivate={() => {
              // A drag released over a tab must not select it.
              if (dragManager.dragging) return false;
              setActive(label);
              return true;
            }}
          />
        ))}
      </ScrollMenu>
    </div>
  );
}

function Tab({
  itemId,
  label,
  active,
  onActivate,
}: {
  itemId: string;
  label: string;
  active: boolean;
  onActivate: () => boolean;
}) {
  const api = React.useContext<publicApiType>(VisibilityContext);

  return (
    <button
      type="button"
      className="tab-pill"
      data-active={active}
      onClick={() => {
        if (!onActivate()) return;
        const el = api.getItemElementById(itemId);
        if (el) api.scrollToItem(el, 'smooth', 'center');
      }}
    >
      {label}
    </button>
  );
}
