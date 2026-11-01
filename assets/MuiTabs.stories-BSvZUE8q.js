import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{_ as i,a,g as o,i as s,n as c,o as l,r as u,s as d,t as f,v as p,y as m}from"./dist-w4KwMnd7.js";import{n as h,t as g}from"./SizeWrapper-DZc8Mm5p.js";function _(){let[e,t]=x.useState(C[0].value),n=(e,n)=>t(n);return(0,S.jsx)(E,{children:(0,S.jsx)(u,{LeftArrow:y,RightArrow:b,containerRef:w,children:C.map(t=>(0,S.jsx)(v,{itemId:t.value,tab:t,selected:e===t.value,onSelect:e=>n(e,t.value)},t.value))})})}function v({itemId:e,tab:t,selected:n,onSelect:r}){let i=x.useContext(f),a=t=>{r(t);let n=i.getItemElementById(e);n&&i.scrollToItem(n,`smooth`,`center`)};return(0,S.jsxs)(D,{type:`button`,role:`tab`,"aria-selected":n,selected:n,onClick:a,onKeyDown:e=>{e.code===`Enter`&&a(e)},children:[t.label,t.count!==void 0&&(0,S.jsx)(O,{children:t.count})]})}function y(){let e=x.useContext(f),t=e.useIsVisible(`first`,!0);return(0,S.jsx)(k,{type:`button`,disabled:t,"aria-label":`Scroll tabs left`,onClick:()=>e.scrollPrev(),children:`‹`})}function b(){let e=x.useContext(f),t=e.useIsVisible(`last`,!1);return(0,S.jsx)(k,{type:`button`,disabled:t,"aria-label":`Scroll tabs right`,onClick:()=>e.scrollNext(),children:`›`})}var x,S,C,w,T,E,D,O,k;function A(){return(A=t((()=>{o(),x=e(n(),1),c(),S=r(),C=[{value:`overview`,label:`Overview`},{value:`analytics`,label:`Analytics`},{value:`reports`,label:`Reports`,count:12},{value:`campaigns`,label:`Campaigns`},{value:`audiences`,label:`Audiences`},{value:`attribution`,label:`Attribution`},{value:`conversions`,label:`Conversions`,count:3},{value:`realtime`,label:`Realtime`},{value:`integrations`,label:`Integrations`},{value:`settings`,label:`Settings`}],w=e=>{e&&(e.setAttribute(`role`,`tablist`),e.setAttribute(`aria-label`,`Sections`))},T=`#1976d2`,E=i(`div`)({fontFamily:`Roboto, Helvetica, Arial, sans-serif`,borderBottom:`1px solid rgba(0, 0, 0, 0.12)`}),D=i(`button`)(e=>({appearance:`none`,border:`none`,background:`none`,cursor:`pointer`,minWidth:`90px`,minHeight:`48px`,padding:`12px 16px`,display:`inline-flex`,alignItems:`center`,gap:`8px`,textTransform:`uppercase`,fontSize:`0.875rem`,fontWeight:500,letterSpacing:`0.02857em`,whiteSpace:`nowrap`,userSelect:`none`,color:e.selected?T:`rgba(0, 0, 0, 0.6)`,boxShadow:e.selected?`inset 0 -2px 0 0 ${T}`:`none`,transition:`color 0.2s, box-shadow 0.2s`,"&:hover":{color:e.selected?T:`rgba(0, 0, 0, 0.87)`}})),O=i(`span`)({background:T,color:`white`,borderRadius:`10px`,padding:`1px 7px`,fontSize:`0.75rem`}),k=i(`button`)({appearance:`none`,border:`none`,background:`none`,cursor:`pointer`,width:`40px`,fontSize:`1.5rem`,color:`rgba(0, 0, 0, 0.54)`,transition:`opacity 0.2s`,"&:disabled":{cursor:`default`,opacity:0}}),_.__docgenInfo={description:``,methods:[],displayName:`MuiTabs`}})))()}var j;function M(){return(M=t((()=>{j=`import 'react-horizontal-scrolling-menu/dist/styles.css';

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
    // The behavior MUI cannot combine with \`scrollable\`: center the
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
      disabled={isFirstItemVisible}
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
      disabled={isLastItemVisible}
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
  boxShadow: props.selected ? \`inset 0 -2px 0 0 \${PRIMARY}\` : 'none',
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
// out at the edges via useIsVisible instead of unmounting. \`disabled\`, not
// \`hidden\`: the hidden attribute is display:none, and an arrow leaving the
// layout resizes the strip mid-scroll, so the scroll stops short of the end.
const ArrowButton = styled('button')({
  appearance: 'none',
  border: 'none',
  background: 'none',
  cursor: 'pointer',
  width: '40px',
  fontSize: '1.5rem',
  color: 'rgba(0, 0, 0, 0.54)',
  transition: 'opacity 0.2s',

  '&:disabled': {
    cursor: 'default',
    opacity: 0,
  },
});
`})))()}var N,P,F,I,L,R,z,B,V,H;function U(){return(U=t((()=>{n(),p(),d(),s(),h(),A(),M(),N=r(),{expect:P,userEvent:F,waitFor:I,within:L}=__STORYBOOK_MODULE_TEST__,R={title:`Examples/MuiTabs`,component:_,decorators:[e=>(0,N.jsx)(g,{children:(0,N.jsx)(e,{})})]},z={},m(z,{code:j,availableImports:l,modifyEditor:a}),B=5e3,V={tags:[`test-only`],play:async({canvasElement:e})=>{let t=L(e),n=await t.findAllByRole(`tab`);P(n.length).toBeGreaterThan(3),P(n[0]).toHaveAttribute(`aria-selected`,`true`);let r=e.querySelector(`.react-horizontal-scrolling-menu--scroll-container`);P(r).not.toBeNull(),P(r.scrollLeft).toBe(0);let i=[],a=n[n.length-1],o=()=>{let e=r.getBoundingClientRect(),n=a.getBoundingClientRect(),i=Math.max(0,Math.min(n.right,e.right)-Math.max(n.left,e.left))/n.width,o=t.getByLabelText(`Scroll tabs left`),s=t.getByLabelText(`Scroll tabs right`);return`sl=${r.scrollLeft} cw=${r.clientWidth} sw=${r.scrollWidth} last=${i.toFixed(3)} sel=${a.getAttribute(`aria-selected`)} L=${o.disabled}/${getComputedStyle(o).opacity} R=${s.disabled}/${getComputedStyle(s).opacity}`},s=``,c=()=>{let e=o();e!==s&&i.push(`${Math.round(performance.now())} ${e}`),s=e,requestAnimationFrame(c)};requestAnimationFrame(c),new IntersectionObserver(e=>e.forEach(e=>i.push(`${Math.round(performance.now())} IO ratio=${e.intersectionRatio.toFixed(3)} isect=${e.isIntersecting}`)),{root:r,rootMargin:`5px`,threshold:[.05,.5,.75,.95]}).observe(a);let l=t.getByLabelText(`Scroll tabs left`);await I(()=>P(getComputedStyle(l).opacity).toBe(`0`)),P(l.getBoundingClientRect().width).toBeGreaterThan(0);let u=n[n.length-1];i.push(`${Math.round(performance.now())} CLICK`),await F.click(u),await I(()=>{P(u).toHaveAttribute(`aria-selected`,`true`),P(n[0]).toHaveAttribute(`aria-selected`,`false`),P(r.scrollLeft).toBeGreaterThan(0)},{timeout:B}),await I(()=>{let e=t.getByLabelText(`Scroll tabs left`),n=t.getByLabelText(`Scroll tabs right`);P(getComputedStyle(n).opacity,`
`+i.join(`
`)+`
NOW `+o()).toBe(`0`),P(getComputedStyle(e).opacity).toBe(`1`)},{timeout:B})}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{}`,...z.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  tags: ['test-only'],
  play: async ({
    canvasElement: storyRoot
  }: {
    canvasElement: HTMLElement;
  }) => {
    const canvas = within(storyRoot);
    const tabs = await canvas.findAllByRole('tab');
    expect(tabs.length).toBeGreaterThan(3);
    expect(tabs[0]).toHaveAttribute('aria-selected', 'true');
    const scrollEl = storyRoot.querySelector('.react-horizontal-scrolling-menu--scroll-container') as HTMLElement;
    expect(scrollEl).not.toBeNull();
    expect(scrollEl.scrollLeft).toBe(0);

    // DIAG-START
    const diagLog: string[] = [];
    const lastTabEl = tabs[tabs.length - 1];
    const diagRow = () => {
      const c = scrollEl.getBoundingClientRect();
      const t = lastTabEl.getBoundingClientRect();
      const ratio = Math.max(0, Math.min(t.right, c.right) - Math.max(t.left, c.left)) / t.width;
      const l = canvas.getByLabelText('Scroll tabs left') as HTMLButtonElement;
      const r = canvas.getByLabelText('Scroll tabs right') as HTMLButtonElement;
      return \`sl=\${scrollEl.scrollLeft} cw=\${scrollEl.clientWidth} sw=\${scrollEl.scrollWidth} last=\${ratio.toFixed(3)} sel=\${lastTabEl.getAttribute('aria-selected')} L=\${l.disabled}/\${getComputedStyle(l).opacity} R=\${r.disabled}/\${getComputedStyle(r).opacity}\`;
    };
    let diagPrev = '';
    const diagLoop = () => {
      const row = diagRow();
      if (row !== diagPrev) diagLog.push(\`\${Math.round(performance.now())} \${row}\`);
      diagPrev = row;
      requestAnimationFrame(diagLoop);
    };
    requestAnimationFrame(diagLoop);
    new IntersectionObserver(entries => entries.forEach(e => diagLog.push(\`\${Math.round(performance.now())} IO ratio=\${e.intersectionRatio.toFixed(3)} isect=\${e.isIntersecting}\`)), {
      root: scrollEl,
      rootMargin: '5px',
      threshold: [0.05, 0.5, 0.75, 0.95]
    }).observe(lastTabEl);
    // DIAG-END

    // A faded arrow must keep its box: if it left the layout, the strip
    // would resize mid-scroll and a smooth scroll would stop short of the end.
    const fadedLeftArrow = canvas.getByLabelText('Scroll tabs left');
    await waitFor(() => expect(getComputedStyle(fadedLeftArrow).opacity).toBe('0'));
    expect(fadedLeftArrow.getBoundingClientRect().width).toBeGreaterThan(0);

    // Selecting the last tab must move aria-selected and center it —
    // i.e. actually scroll the strip.
    const last = tabs[tabs.length - 1];
    diagLog.push(\`\${Math.round(performance.now())} CLICK\`);
    await userEvent.click(last);
    await waitFor(() => {
      expect(last).toHaveAttribute('aria-selected', 'true');
      expect(tabs[0]).toHaveAttribute('aria-selected', 'false');
      expect(scrollEl.scrollLeft).toBeGreaterThan(0);
    }, {
      timeout: settleTimeout
    });

    // At the far end the right arrow must fade out and the left fade in.
    await waitFor(() => {
      const leftArrow = canvas.getByLabelText('Scroll tabs left');
      const rightArrow = canvas.getByLabelText('Scroll tabs right');
      expect(getComputedStyle(rightArrow).opacity, '\\n' + diagLog.join('\\n') + '\\nNOW ' + diagRow()).toBe('0');
      expect(getComputedStyle(leftArrow).opacity).toBe('1');
    }, {
      timeout: settleTimeout
    });
  }
}`,...V.parameters?.docs?.source}}},H=[`MuiTabs`,`Test`]})))()}U();export{z as MuiTabs,V as Test,H as __namedExportsOrder,R as default};