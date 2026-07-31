import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{t as n}from"./react-B82b4cNX.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{a as i,c as a,d as o,f as s,i as c,m as l,n as u,o as d,p as f,r as p,s as m,t as h}from"./dist-CxkS9euy.js";import{n as g,t as _}from"./SizeWrapper-g9pokEER.js";import{a as v,t as y}from"./test-BB-LPJmr.js";function b(){let[e]=E.useState(()=>N()),[t,n]=E.useState([]),r=e=>!!t.find(t=>t===e),i=e=>{let t=r(e);n(n=>t?n.filter(t=>t!==e):n.concat(e))};return(0,D.jsx)(O,{children:(0,D.jsx)(p,{Footer:k,onWheel:T,children:e.map(({id:e})=>(0,D.jsx)(w,{title:e,itemId:e,onClick:()=>i(e),selected:r(e)},e))})})}function x(){let e=E.useContext(h);return(0,D.jsx)(C,{disabled:e.useLeftArrowVisible(),onClick:()=>e.scrollPrev(),testId:`left-arrow`,children:`Left`})}function S(){let e=E.useContext(h);return(0,D.jsx)(C,{disabled:e.useRightArrowVisible(),onClick:()=>e.scrollNext(),testId:`right-arrow`,children:`Right`})}function C({children:e,disabled:t,onClick:n,className:r,testId:i}){return(0,D.jsx)(A,{disabled:t,onClick:n,className:`arrow-${r}`,"data-testid":i,children:e})}function w({onClick:e,selected:t,title:n,itemId:r}){let i=E.useContext(h),a=i.useIsVisible(r,!0);return(0,D.jsxs)(j,{"data-cy":r,onClick:()=>e(i),onKeyDown:t=>{t.code===`Enter`&&e(i)},"data-testid":`card`,role:`button`,tabIndex:0,className:`card`,visible:a,selected:t,children:[(0,D.jsxs)(`div`,{className:`header`,children:[(0,D.jsx)(`div`,{children:n}),(0,D.jsxs)(`div`,{className:`visible`,children:[`visible: `,JSON.stringify(a)]}),(0,D.jsxs)(`div`,{className:`selected`,children:[`selected: `,JSON.stringify(!!t)]})]}),(0,D.jsx)(`div`,{className:`background`})]})}function T(e,t){if(Math.abs(t.deltaX)!==0||Math.abs(t.deltaY)<15){t.stopPropagation();return}t.deltaY<0?e.scrollNext():e.scrollPrev()}var E,D,O,k,A,j,M,N,P=e((()=>{a(),o(),E=t(n(),1),u(),D=r(),O=s(`div`)({"& .react-horizontal-scrolling-menu--scroll-container::-webkit-scrollbar":{display:`none`},"& .react-horizontal-scrolling-menu--scroll-container":{scrollbarWidth:`none`,"-ms-overflow-style":`none`}}),k=()=>(0,D.jsxs)(`div`,{style:{width:`100%`,display:`flex`,justifyContent:`center`},children:[`Some other content`,(0,D.jsxs)(`div`,{style:{marginLeft:`10px`,display:`flex`},children:[(0,D.jsx)(x,{}),` `,(0,D.jsx)(S,{})]})]}),A=s(`button`)(e=>({cursor:`pointer`,display:`flex`,flexDirection:`column`,justifyContent:`center`,marginBottom:`2px`,opacity:e.disabled?`0`:`1`,userSelect:`none`,borderRadius:`6px`,borderWidth:`1px`})),j=s(`div`)(e=>({border:`1px solid`,display:`inline-block`,margin:`0 10px`,width:`160px`,userSelect:`none`,borderRadius:`8px`,overflow:`hidden`,"& .header":{backgroundColor:`white`},"& .visible":{backgroundColor:e.visible?`transparent`:`gray`},"& .background":{backgroundColor:e.selected?`green`:`bisque`,height:`200px`}})),M=e=>`test${e}`,N=()=>Array(10).fill(0).map((e,t)=>({id:M(t)})),b.__docgenInfo={description:``,methods:[],displayName:`BottomArrows`}})),F,I=e((()=>{F=`import 'react-horizontal-scrolling-menu/dist/styles.css';

import styled from '@emotion/styled';
import React from 'react';
import {
  type publicApiType,
  ScrollMenu,
  VisibilityContext,
} from 'react-horizontal-scrolling-menu';

export function BottomArrows() {
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
      <ScrollMenu Footer={Arrows} onWheel={onWheel}>
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
export default BottomArrows;

const NoScrollbar = styled('div')({
  '& .react-horizontal-scrolling-menu--scroll-container::-webkit-scrollbar': {
    display: 'none',
  },
  '& .react-horizontal-scrolling-menu--scroll-container': {
    scrollbarWidth: 'none',
    '-ms-overflow-style': 'none',
  },
});

const Arrows = () => (
  <div
    style={{
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
    }}
  >
    Some other content
    <div style={{ marginLeft: '10px', display: 'flex' }}>
      <LeftArrow /> <RightArrow />
    </div>
  </div>
);

function LeftArrow() {
  const visibility = React.useContext<publicApiType>(VisibilityContext);

  const disabled = visibility.useLeftArrowVisible();

  return (
    <Arrow
      disabled={disabled}
      onClick={() => visibility.scrollPrev()}
      testId="left-arrow"
    >
      Left
    </Arrow>
  );
}

function RightArrow() {
  const visibility = React.useContext<publicApiType>(VisibilityContext);

  const disabled = visibility.useRightArrowVisible();

  return (
    <Arrow
      disabled={disabled}
      onClick={() => visibility.scrollNext()}
      testId="right-arrow"
    >
      Right
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
      height: '200px',
    },
  }),
);

const getId = (index: number) => \`\${'test'}\${index}\`;

const getItems = () =>
  Array(10)
    .fill(0)
    .map((_, ind) => ({ id: getId(ind) }));

function onWheel(apiObj: publicApiType, ev: React.WheelEvent): void {
  // NOTE: no good standart way to distinguish touchpad scrolling gestures
  // but can assume that gesture will affect X axis, mouse scroll only Y axis
  // of if deltaY too small probably is it touchpad
  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

  if (isThouchpad) {
    ev.stopPropagation();
    return;
  }

  if (ev.deltaY < 0) {
    apiObj.scrollNext();
  } else {
    apiObj.scrollPrev();
  }
}
`})),L,R,z,B,V;e((()=>{n(),f(),m(),c(),g(),v(),P(),I(),L=r(),R={title:`Examples/BottomArrows`,component:b,decorators:[e=>(0,L.jsx)(_,{children:(0,L.jsx)(e,{})})]},z={},l(z,{code:F,availableImports:d,modifyEditor:i}),B=y(),z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`ScrollTest()`,...B.parameters?.docs?.source}}},V=[`BottomArrows`,`Test`]}))();export{z as BottomArrows,B as Test,V as __namedExportsOrder,R as default};