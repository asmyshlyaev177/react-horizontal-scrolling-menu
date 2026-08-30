import * as React from 'react';
import {
  type publicApiType,
  ScrollMenu,
  VisibilityContext,
} from 'react-horizontal-scrolling-menu';

import { LeftArrow, RightArrow } from '../Arrows';
import { useDragToScroll } from '../useDragToScroll';

// The MUI bridge: a strip that keeps Material's value/onChange contract
// and tab look, while scrolling natively and centering the selection.

const TABS = [
  { value: 'overview', label: 'Overview' },
  { value: 'analytics', label: 'Analytics' },
  { value: 'reports', label: 'Reports', count: 12 },
  { value: 'campaigns', label: 'Campaigns' },
  { value: 'audiences', label: 'Audiences' },
  { value: 'attribution', label: 'Attribution' },
  { value: 'conversions', label: 'Conversions', count: 3 },
  { value: 'realtime', label: 'Realtime' },
  { value: 'integrations', label: 'Integrations' },
  { value: 'settings', label: 'Settings' },
];

// role="tab" needs a tablist ancestor; the scroll container is exactly
// that, reached through the library's containerRef prop.
const tablistRef = (el: HTMLElement | null) => {
  if (el) {
    el.setAttribute('role', 'tablist');
    el.setAttribute('aria-label', 'Sections');
  }
};

export function MuiTabsDemo() {
  const { dragProps, dragManager } = useDragToScroll();
  const [value, setValue] = React.useState(TABS[0].value);

  return (
    <div className="gallery-demo mui-tabs-demo">
      <ScrollMenu
        LeftArrow={LeftArrow}
        RightArrow={RightArrow}
        containerRef={tablistRef}
        {...dragProps}
      >
        {TABS.map((tab) => (
          <Tab
            key={tab.value}
            itemId={tab.value}
            tab={tab}
            selected={value === tab.value}
            onActivate={() => {
              // A drag released over a tab must not select it.
              if (dragManager.dragging) return false;
              setValue(tab.value);
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
  tab,
  selected,
  onActivate,
}: {
  itemId: string;
  tab: (typeof TABS)[number];
  selected: boolean;
  onActivate: () => boolean;
}) {
  const api = React.useContext<publicApiType>(VisibilityContext);

  return (
    <button
      type="button"
      role="tab"
      aria-selected={selected}
      className="mui-tab"
      data-active={selected}
      onClick={() => {
        if (!onActivate()) return;
        const el = api.getItemElementById(itemId);
        if (el) api.scrollToItem(el, 'smooth', 'center');
      }}
    >
      {tab.label}
      {tab.count !== undefined && (
        <span className="mui-tab-badge">{tab.count}</span>
      )}
    </button>
  );
}
