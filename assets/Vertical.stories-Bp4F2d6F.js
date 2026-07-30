import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{t as n}from"./react-B82b4cNX.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{a as i,c as a,d as o,f as s,i as c,m as l,n as u,o as d,p as f,r as p,s as m,t as h}from"./dist-RpNr9gky.js";import{a as g,l as _,r as v,t as y}from"./test-BB-LPJmr.js";function b(){let[e]=T.useState(()=>j()),[t,n]=T.useState([]),r=e=>!!t.find(t=>t===e),i=e=>{let t=r(e);n(n=>t?n.filter(t=>t!==e):n.concat(e))};return(0,E.jsx)(D,{children:(0,E.jsx)(p,{Header:x,Footer:S,children:e.map(({id:e})=>(0,E.jsx)(w,{title:e,itemId:e,onClick:()=>i(e),selected:r(e)},e))})})}function x(){let e=T.useContext(h);return(0,E.jsx)(C,{disabled:e.useIsVisible(`first`,!0),onClick:()=>e.scrollPrev(void 0,void 0,`end`),testId:`up-arrow`,children:`Up`})}function S(){let e=T.useContext(h);return(0,E.jsx)(C,{disabled:e.useIsVisible(`last`,!1),onClick:()=>e.scrollNext(void 0,void 0,`start`),testId:`down-arrow`,children:`Down`})}function C({children:e,disabled:t,onClick:n,className:r,testId:i}){return(0,E.jsx)(O,{disabled:t,onClick:n,className:`arrow-${r}`,"data-testid":i,children:e})}function w({onClick:e,selected:t,title:n,itemId:r}){let i=T.useContext(h),a=i.useIsVisible(r,!0);return(0,E.jsxs)(k,{"data-cy":r,onClick:()=>e(i),onKeyDown:t=>{t.code===`Enter`&&e(i)},"data-testid":`card`,role:`button`,tabIndex:0,className:`card`,visible:a,selected:t,children:[(0,E.jsxs)(`div`,{className:`header`,children:[(0,E.jsx)(`div`,{children:n}),(0,E.jsxs)(`div`,{className:`visible`,children:[`visible: `,JSON.stringify(a)]}),(0,E.jsxs)(`div`,{className:`selected`,children:[`selected: `,JSON.stringify(!!t)]})]}),(0,E.jsx)(`div`,{className:`background`})]})}var T,E,D,O,k,A,j,M=e((()=>{a(),o(),T=t(n(),1),u(),E=r(),D=s(`div`)({"& .react-horizontal-scrolling-menu--scroll-container::-webkit-scrollbar":{display:`none`},"& .react-horizontal-scrolling-menu--wrapper":{height:`100%`},"& .react-horizontal-scrolling-menu--scroll-container":{height:`initial`,scrollbarWidth:`none`,"-ms-overflow-style":`none`,overflowY:`auto`,flexDirection:`column`}}),O=s(`button`)(e=>({cursor:`pointer`,display:`flex`,flexDirection:`column`,justifyContent:`center`,marginBottom:`2px`,opacity:e.disabled?`0`:`1`,userSelect:`none`,borderRadius:`6px`,borderWidth:`1px`})),k=s(`div`)(e=>({border:`1px solid`,display:`inline-block`,margin:`0 10px`,width:`160px`,userSelect:`none`,borderRadius:`8px`,overflow:`hidden`,"& .header":{backgroundColor:`white`},"& .visible":{backgroundColor:e.visible?`transparent`:`gray`},"& .background":{backgroundColor:e.selected?`green`:`bisque`,height:`125px`}})),A=e=>`test${e}`,j=()=>Array(10).fill(0).map((e,t)=>({id:A(t)})),b.__docgenInfo={description:``,methods:[],displayName:`VerticalExample`}})),N,P=e((()=>{N=`import 'react-horizontal-scrolling-menu/dist/styles.css';

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
`})),F,I,L,R,z,B;e((()=>{o(),n(),f(),m(),c(),g(),M(),P(),F=r(),I={title:`Examples/Vertical`,component:b,decorators:[e=>(0,F.jsx)(L,{children:(0,F.jsx)(e,{})})]},L=s(`div`)({maxWidth:`300px`,maxHeight:`670px`,display:`flex`,position:`relative`}),R={},l(R,{code:N,availableImports:d,modifyEditor:i}),z=y({leftArrow:_,rightArrow:v}),R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`ScrollTest({
  leftArrow: upArrowSelector,
  rightArrow: downArrowSelector
})`,...z.parameters?.docs?.source}}},B=[`Vertical`,`Test`]}))();export{z as Test,R as Vertical,B as __namedExportsOrder,I as default};