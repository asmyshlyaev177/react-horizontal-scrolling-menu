import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{_ as i,a,g as o,i as s,n as c,o as l,r as u,s as d,t as f,v as p,y as m}from"./dist-CtTyjgUm.js";import{n as h,t as g}from"./SizeWrapper-CdXqr5N7.js";import{a as _,n as v,o as y,s as b}from"./test-CHHlmwCw.js";function x(){let[e]=D.useState(()=>N()),[t,n]=D.useState([]),r=e=>!!t.find(t=>t===e),i=e=>{let t=r(e);n(n=>t?n.filter(t=>t!==e):n.concat(e))};return(0,O.jsx)(k,{children:(0,O.jsx)(u,{LeftArrow:S,RightArrow:C,onWheel:E,children:e.map(({id:e})=>(0,O.jsx)(T,{title:e,itemId:e,onClick:()=>i(e),selected:r(e)},e))})})}function S(){let e=D.useContext(f),t=e.useIsVisible(`first`,!0);return(0,O.jsx)(w,{disabled:t,onClick:()=>e.scrollToItem(e.getPrevElement(),`smooth`,`start`),testId:`left-arrow`,children:`Left`})}function C(){let e=D.useContext(f),t=e.useIsVisible(`last`,!1);return(0,O.jsx)(w,{disabled:t,onClick:()=>e.scrollToItem(e.getNextElement(),`smooth`,`end`),testId:`right-arrow`,children:`Right`})}function w({children:e,disabled:t,onClick:n,className:r,testId:i}){return(0,O.jsx)(A,{disabled:t,onClick:n,className:`arrow-${r}`,"data-testid":i,children:e})}function T({onClick:e,selected:t,title:n,itemId:r}){let i=D.useContext(f),a=i.useIsVisible(r,!0);return(0,O.jsxs)(j,{"data-cy":r,onClick:()=>e(i),onKeyDown:t=>{t.code===`Enter`&&e(i)},"data-testid":`card`,role:`button`,tabIndex:0,className:`card`,visible:a,selected:t,children:[(0,O.jsxs)(`div`,{className:`header`,children:[(0,O.jsx)(`div`,{children:n}),(0,O.jsxs)(`div`,{className:`visible`,children:[`visible: `,JSON.stringify(a)]}),(0,O.jsxs)(`div`,{className:`selected`,children:[`selected: `,JSON.stringify(!!t)]})]}),(0,O.jsx)(`div`,{className:`background`})]})}function E(e,t){if(Math.abs(t.deltaX)!==0||Math.abs(t.deltaY)<15){t.stopPropagation();return}t.deltaY<0?e.scrollNext():e.scrollPrev()}var D,O,k,A,j,M,N;function P(){return(P=t((()=>{o(),D=e(n(),1),c(),O=r(),k=i(`div`)({"& .react-horizontal-scrolling-menu--scroll-container::-webkit-scrollbar":{display:`none`},"& .react-horizontal-scrolling-menu--scroll-container":{scrollbarWidth:`none`,"-ms-overflow-style":`none`}}),A=i(`button`)(e=>({cursor:`pointer`,display:`flex`,flexDirection:`column`,justifyContent:`center`,marginBottom:`2px`,opacity:e.disabled?`0`:`1`,userSelect:`none`,borderRadius:`6px`,borderWidth:`1px`})),j=i(`div`)(e=>({border:`1px solid`,display:`inline-block`,margin:`0 10px`,width:`160px`,userSelect:`none`,borderRadius:`8px`,overflow:`hidden`,"& .header":{backgroundColor:`white`},"& .visible":{backgroundColor:e.visible?`transparent`:`gray`},"& .background":{backgroundColor:e.selected?`green`:`bisque`,height:`200px`}})),M=e=>`test${e}`,N=()=>Array(10).fill(0).map((e,t)=>({id:M(t)})),x.__docgenInfo={description:``,methods:[],displayName:`OneItemScroll`}})))()}var F;function I(){return(I=t((()=>{F=`import 'react-horizontal-scrolling-menu/dist/styles.css';

import styled from '@emotion/styled';
import React from 'react';
import {
  type publicApiType,
  ScrollMenu,
  VisibilityContext,
} from 'react-horizontal-scrolling-menu';

export function OneItemScroll() {
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
      <ScrollMenu
        LeftArrow={LeftArrow}
        RightArrow={RightArrow}
        onWheel={onWheel}
      >
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

export default OneItemScroll;

function LeftArrow() {
  const visibility = React.useContext<publicApiType>(VisibilityContext);
  const isFirstItemVisible = visibility.useIsVisible('first', true);

  // NOTE: Look here
  const onClick = () =>
    visibility.scrollToItem(visibility.getPrevElement(), 'smooth', 'start');

  return (
    <Arrow disabled={isFirstItemVisible} onClick={onClick} testId="left-arrow">
      Left
    </Arrow>
  );
}

function RightArrow() {
  const visibility = React.useContext<publicApiType>(VisibilityContext);
  const isLastItemVisible = visibility.useIsVisible('last', false);

  // NOTE: Look here
  const onClick = () =>
    visibility.scrollToItem(visibility.getNextElement(), 'smooth', 'end');

  return (
    <Arrow disabled={isLastItemVisible} onClick={onClick} testId="right-arrow">
      Right
    </Arrow>
  );
}

const NoScrollbar = styled('div')({
  '& .react-horizontal-scrolling-menu--scroll-container::-webkit-scrollbar': {
    display: 'none',
  },
  '& .react-horizontal-scrolling-menu--scroll-container': {
    scrollbarWidth: 'none',
    '-ms-overflow-style': 'none',
  },
});

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
`})))()}var L,R,z,B,V,H;function U(){return(U=t((()=>{n(),p(),d(),s(),h(),_(),P(),I(),L=r(),{within:R}=__STORYBOOK_MODULE_TEST__,z={title:`Examples/OneItemScroll`,component:x,decorators:[e=>(0,L.jsx)(g,{children:(0,L.jsx)(e,{})})]},B={},m(B,{code:F,availableImports:l,modifyEditor:a}),V={tags:[`test-only`],play:async({canvasElement:e})=>{let t=R(e),n=new v(t,{leftArrow:y,rightArrow:b});await n.isReady(),await n.arrowsVisible({left:!1,right:!0}),await n.clickNext(),await n.cardHidden(`test0`),await n.expectVisibleCards([`test1`,`test2`,`test3`]),await n.arrowsVisible({left:!0,right:!0}),await n.clickNext(),await n.cardHidden(`test1`),await n.expectVisibleCards([`test2`,`test3`,`test4`]),await n.arrowsVisible({left:!0,right:!0}),await n.clickPrev(),await n.cardHidden(`test4`),await n.arrowsVisible({left:!0,right:!0}),await n.expectVisibleCards([`test1`,`test2`,`test3`]),await n.clickPrev(),await n.cardHidden(`test3`),await n.arrowsVisible({left:!1,right:!0}),await n.expectVisibleCards([`test0`,`test1`,`test2`])}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  tags: ['test-only'],
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const testObj = new TestObj(canvas, {
      leftArrow: leftArrowSelector,
      rightArrow: rightArrowSelector
    });
    // Both arrows start in the state this first assertion expects, so
    // without gating on the observer it would pass before the menu had
    // initialised and the click below would hit an empty ItemsMap.
    await testObj.isReady();
    await testObj.arrowsVisible({
      left: false,
      right: true
    });
    await testObj.clickNext();
    await testObj.cardHidden('test0');
    await testObj.expectVisibleCards(['test1', 'test2', 'test3']);
    await testObj.arrowsVisible({
      left: true,
      right: true
    });
    await testObj.clickNext();
    await testObj.cardHidden('test1');
    await testObj.expectVisibleCards(['test2', 'test3', 'test4']);
    await testObj.arrowsVisible({
      left: true,
      right: true
    });
    await testObj.clickPrev();
    await testObj.cardHidden('test4');
    await testObj.arrowsVisible({
      left: true,
      right: true
    });
    await testObj.expectVisibleCards(['test1', 'test2', 'test3']);
    await testObj.clickPrev();
    await testObj.cardHidden('test3');
    await testObj.arrowsVisible({
      left: false,
      right: true
    });
    await testObj.expectVisibleCards(['test0', 'test1', 'test2']);
  }
}`,...V.parameters?.docs?.source}}},H=[`OneItemScroll`,`Test`]})))()}U();export{B as OneItemScroll,V as Test,H as __namedExportsOrder,z as default};