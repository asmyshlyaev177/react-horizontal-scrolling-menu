import 'react-horizontal-scrolling-menu/dist/styles.css';

import styled from '@emotion/styled';
import React from 'react';
import {
  type publicApiType,
  ScrollMenu,
  VisibilityContext,
} from 'react-horizontal-scrolling-menu';

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
// that, reached through the containerRef prop.
const tablistRef = (el: HTMLElement | null) => {
  if (el) {
    el.setAttribute('role', 'tablist');
    el.setAttribute('aria-label', 'Sections');
  }
};

export function MuiTabs() {
  const [value, setValue] = React.useState(TABS[0].value);

  // Same contract as MUI <Tabs onChange>: (event, newValue).
  const handleChange = (
    _event: React.SyntheticEvent | null,
    newValue: string,
  ) => setValue(newValue);

  return (
    <Root>
      <ScrollMenu
        LeftArrow={LeftArrow}
        RightArrow={RightArrow}
        containerRef={tablistRef}
      >
        {TABS.map((tab) => (
          <Tab
            key={tab.value}
            itemId={tab.value} // NOTE: itemId is required for track items
            tab={tab}
            selected={value === tab.value}
            onSelect={(event) => handleChange(event, tab.value)}
          />
        ))}
      </ScrollMenu>
    </Root>
  );
}

export default MuiTabs;

function Tab({
  itemId,
  tab,
  selected,
  onSelect,
}: {
  itemId: string;
  tab: (typeof TABS)[number];
  selected: boolean;
  onSelect: (event: React.SyntheticEvent) => void;
}) {
  const api = React.useContext<publicApiType>(VisibilityContext);

  const select = (event: React.SyntheticEvent) => {
    onSelect(event);
    const el = api.getItemElementById(itemId);
    // The behavior MUI cannot combine with `scrollable`: center the
    // selected tab, revealing its neighbors on both sides.
    if (el) api.scrollToItem(el, 'smooth', 'center');
  };

  return (
    <TabButton
      type="button"
      role="tab"
      aria-selected={selected}
      selected={selected}
      onClick={select}
      onKeyDown={(ev: React.KeyboardEvent) => {
        ev.code === 'Enter' && select(ev);
      }}
    >
      {tab.label}
      {tab.count !== undefined && <Badge>{tab.count}</Badge>}
    </TabButton>
  );
}

function LeftArrow() {
  const visibility = React.useContext<publicApiType>(VisibilityContext);
  const isFirstItemVisible = visibility.useIsVisible('first', true);
  return (
    <ArrowButton
      type="button"
      hidden={isFirstItemVisible}
      aria-label="Scroll tabs left"
      onClick={() => visibility.scrollPrev()}
    >
      ‹
    </ArrowButton>
  );
}

function RightArrow() {
  const visibility = React.useContext<publicApiType>(VisibilityContext);
  const isLastItemVisible = visibility.useIsVisible('last', false);
  return (
    <ArrowButton
      type="button"
      hidden={isLastItemVisible}
      aria-label="Scroll tabs right"
      onClick={() => visibility.scrollNext()}
    >
      ›
    </ArrowButton>
  );
}

// MUI's own tab metrics: uppercase 14px labels, 48px height, a 2px
// primary indicator. Swap the styled() calls for your theme's — nothing
// below depends on these exact values.
const PRIMARY = '#1976d2';

const Root = styled('div')({
  fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
  borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
});

const TabButton = styled('button')<{ selected?: boolean }>((props) => ({
  appearance: 'none',
  border: 'none',
  background: 'none',
  cursor: 'pointer',
  minWidth: '90px',
  minHeight: '48px',
  padding: '12px 16px',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
  textTransform: 'uppercase',
  fontSize: '0.875rem',
  fontWeight: 500,
  letterSpacing: '0.02857em',
  whiteSpace: 'nowrap',
  userSelect: 'none',
  color: props.selected ? PRIMARY : 'rgba(0, 0, 0, 0.6)',
  boxShadow: props.selected ? `inset 0 -2px 0 0 ${PRIMARY}` : 'none',
  transition: 'color 0.2s, box-shadow 0.2s',

  '&:hover': {
    color: props.selected ? PRIMARY : 'rgba(0, 0, 0, 0.87)',
  },
}));

const Badge = styled('span')({
  background: PRIMARY,
  color: 'white',
  borderRadius: '10px',
  padding: '1px 7px',
  fontSize: '0.75rem',
});

// Unlike MUI's scroll buttons, these are plain components you own — they
// render on every viewport (MUI hides its buttons below 600px) and fade
// out at the edges via useIsVisible instead of unmounting.
const ArrowButton = styled('button')<{ hidden?: boolean }>((props) => ({
  appearance: 'none',
  border: 'none',
  background: 'none',
  cursor: props.hidden ? 'default' : 'pointer',
  width: '40px',
  fontSize: '1.5rem',
  color: 'rgba(0, 0, 0, 0.54)',
  opacity: props.hidden ? 0 : 1,
  pointerEvents: props.hidden ? 'none' : 'auto',
  transition: 'opacity 0.2s',
}));
