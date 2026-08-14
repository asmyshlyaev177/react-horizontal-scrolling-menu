import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{_ as i,a,g as o,i as s,n as c,o as l,r as u,s as d,t as f,v as p,y as m}from"./dist-FrB8AX0O.js";import{n as h,t as g}from"./SizeWrapper-0dCO968y.js";import{a as _,l as v,r as y,t as b}from"./test-CHHlmwCw.js";function x(){let[e]=E.useState(()=>M()),[t,n]=E.useState([]),r=e=>!!t.find(t=>t===e),i=e=>{let t=r(e);n(n=>t?n.filter(t=>t!==e):n.concat(e))};return(0,D.jsx)(O,{children:(0,D.jsx)(u,{Header:S,Footer:C,children:e.map(({id:e})=>(0,D.jsx)(T,{title:e,itemId:e,onClick:()=>i(e),selected:r(e)},e))})})}function S(){let e=E.useContext(f),t=e.useIsVisible(`first`,!0);return(0,D.jsx)(w,{disabled:t,onClick:()=>e.scrollPrev(void 0,void 0,`end`),testId:`up-arrow`,children:`Up`})}function C(){let e=E.useContext(f),t=e.useIsVisible(`last`,!1);return(0,D.jsx)(w,{disabled:t,onClick:()=>e.scrollNext(void 0,void 0,`start`),testId:`down-arrow`,children:`Down`})}function w({children:e,disabled:t,onClick:n,className:r,testId:i}){return(0,D.jsx)(k,{disabled:t,onClick:n,className:`arrow-${r}`,"data-testid":i,children:e})}function T({onClick:e,selected:t,title:n,itemId:r}){let i=E.useContext(f),a=i.useIsVisible(r,!0);return(0,D.jsxs)(A,{"data-cy":r,onClick:()=>e(i),onKeyDown:t=>{t.code===`Enter`&&e(i)},"data-testid":`card`,role:`button`,tabIndex:0,className:`card`,visible:a,selected:t,children:[(0,D.jsxs)(`div`,{className:`header`,children:[(0,D.jsx)(`div`,{children:n}),(0,D.jsxs)(`div`,{className:`visible`,children:[`visible: `,JSON.stringify(a)]}),(0,D.jsxs)(`div`,{className:`selected`,children:[`selected: `,JSON.stringify(!!t)]})]}),(0,D.jsx)(`div`,{className:`background`})]})}var E,D,O,k,A,j,M;function N(){return(N=t((()=>{o(),E=e(n(),1),c(),D=r(),O=i(`div`)({"& .react-horizontal-scrolling-menu--scroll-container::-webkit-scrollbar":{display:`none`},"& .react-horizontal-scrolling-menu--wrapper":{height:`100%`},"& .react-horizontal-scrolling-menu--scroll-container":{height:`initial`,scrollbarWidth:`none`,"-ms-overflow-style":`none`,overflowY:`auto`,flexDirection:`column`}}),k=i(`button`)(e=>({cursor:`pointer`,display:`flex`,flexDirection:`column`,justifyContent:`center`,marginBottom:`2px`,opacity:e.disabled?`0`:`1`,userSelect:`none`,borderRadius:`6px`,borderWidth:`1px`})),A=i(`div`)(e=>({border:`1px solid`,display:`inline-block`,margin:`0 10px`,width:`160px`,userSelect:`none`,borderRadius:`8px`,overflow:`hidden`,"& .header":{backgroundColor:`white`},"& .visible":{backgroundColor:e.visible?`transparent`:`gray`},"& .background":{backgroundColor:e.selected?`green`:`bisque`,height:`125px`}})),j=e=>`test${e}`,M=()=>Array(10).fill(0).map((e,t)=>({id:j(t)})),x.__docgenInfo={description:``,methods:[],displayName:`VerticalExample`}})))()}var P;function F(){return(F=t((()=>{P=`import 'react-horizontal-scrolling-menu/dist/styles.css';

import styled from '@emotion/styled';
import React from 'react';
import {
  type publicApiType,
  ScrollMenu,
  VisibilityContext,
} from 'react-horizontal-scrolling-menu';

const NoScrollbar = styled('div')({
  '& .react-horizontal-scrolling-menu--scroll-container::-webkit-scrollbar': {
    display: 'none',
  },
  // NOTE: also need to set on parent:
  // display: 'flex' and position: 'relative'
  '& .react-horizontal-scrolling-menu--wrapper': {
    height: '100%',
  },

  '& .react-horizontal-scrolling-menu--scroll-container': {
    height: 'initial',
    scrollbarWidth: 'none',
    '-ms-overflow-style': 'none',
    overflowY: 'auto',
    flexDirection: 'column',
  },
});

export function VerticalExample() {
  const [items] = React.useState(() => getItems());
  const [selected, setSelected] = React.useState<string[]>([]);

  const isItemSelected = (id: string): boolean =>
    !!selected.find((el) => el === id);

  const handleItemClick = (itemId: string) => {
    const itemSelected = isItemSelected(itemId);

    setSelected((currentSelected: string[]) =>
      itemSelected
        ? currentSelected.filter((el) => el !== itemId)
        : currentSelected.concat(itemId),
    );
  };

  return (
    <NoScrollbar>
      <ScrollMenu Header={UpArrow} Footer={DownArrow}>
        {items.map(({ id }) => (
          <Card
            title={id}
            itemId={id} // NOTE: itemId is required for track items
            key={id}
            onClick={() => handleItemClick(id)}
            selected={isItemSelected(id)}
          />
        ))}
      </ScrollMenu>
    </NoScrollbar>
  );
}

export default VerticalExample;

function UpArrow() {
  const visibility = React.useContext<publicApiType>(VisibilityContext);
  const isFirstItemVisible = visibility.useIsVisible('first', true);

  return (
    <Arrow
      disabled={isFirstItemVisible}
      onClick={() => visibility.scrollPrev(undefined, undefined, 'end')}
      testId="up-arrow"
    >
      Up
    </Arrow>
  );
}

function DownArrow() {
  const visibility = React.useContext<publicApiType>(VisibilityContext);
  const isLastItemVisible = visibility.useIsVisible('last', false);

  return (
    <Arrow
      disabled={isLastItemVisible}
      onClick={() => visibility.scrollNext(undefined, undefined, 'start')}
      testId="down-arrow"
    >
      Down
    </Arrow>
  );
}

function Arrow({
  children,
  disabled,
  onClick,
  className,
  testId,
}: {
  children: React.ReactNode;
  disabled: boolean;
  onClick: VoidFunction;
  className?: string;
  testId: string;
}) {
  return (
    <ArrowButton
      disabled={disabled}
      onClick={onClick}
      className={'arrow' + \`-\${className}\`}
      data-testid={testId}
    >
      {children}
    </ArrowButton>
  );
}
const ArrowButton = styled('button')((props) => ({
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  marginBottom: '2px',
  opacity: props.disabled ? '0' : '1',
  userSelect: 'none',
  borderRadius: '6px',
  borderWidth: '1px',
}));

function Card({
  onClick,
  selected,
  title,
  itemId,
}: {
  onClick: (context: publicApiType) => void;
  selected: boolean;
  title: string;
  itemId: string;
}) {
  const visibility = React.useContext<publicApiType>(VisibilityContext);
  const isVisible = visibility.useIsVisible(itemId, true);

  return (
    <CardBody
      data-cy={itemId}
      onClick={() => onClick(visibility)}
      onKeyDown={(ev: React.KeyboardEvent) => {
        ev.code === 'Enter' && onClick(visibility);
      }}
      data-testid="card"
      role="button"
      tabIndex={0}
      className="card"
      visible={isVisible}
      selected={selected}
    >
      <div className="header">
        <div>{title}</div>
        <div className="visible">visible: {JSON.stringify(isVisible)}</div>
        <div className="selected">selected: {JSON.stringify(!!selected)}</div>
      </div>
      <div className="background" />
    </CardBody>
  );
}
const CardBody = styled('div')<{ selected?: boolean; visible?: boolean }>(
  (props) => ({
    border: '1px solid',
    display: 'inline-block',
    margin: '0 10px',
    width: '160px',
    userSelect: 'none',
    borderRadius: '8px',
    overflow: 'hidden',

    '& .header': {
      backgroundColor: 'white',
    },

    '& .visible': {
      backgroundColor: props.visible ? 'transparent' : 'gray',
    },

    '& .background': {
      backgroundColor: props.selected ? 'green' : 'bisque',
      height: '125px',
    },
  }),
);

const getId = (index: number) => \`\${'test'}\${index}\`;

const getItems = () =>
  Array(10)
    .fill(0)
    .map((_, ind) => ({ id: getId(ind) }));
`})))()}var I,L,R,z,B;function V(){return(V=t((()=>{n(),p(),d(),s(),h(),_(),N(),F(),I=r(),L={title:`Examples/Vertical`,component:x,decorators:[e=>(0,I.jsx)(g,{style:{maxWidth:`300px`,maxHeight:`670px`,display:`flex`,position:`relative`},children:(0,I.jsx)(e,{})})]},R={},m(R,{code:P,availableImports:l,modifyEditor:a}),z={...b({leftArrow:v,rightArrow:y}),tags:[`test-only`]},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  ...ScrollTest({
    leftArrow: upArrowSelector,
    rightArrow: downArrowSelector
  }),
  tags: ['test-only']
}`,...z.parameters?.docs?.source}}},B=[`Vertical`,`Test`]})))()}V();export{z as Test,R as Vertical,B as __namedExportsOrder,L as default};