import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{_ as i,a,g as o,i as s,n as c,o as l,r as u,s as d,t as f,v as p,y as m}from"./dist-xJ0qTjfS.js";import{n as h,t as g}from"./SizeWrapper-DFvFoyVR.js";import{a as _,n as v,o as y,s as b}from"./test-CHHlmwCw.js";function x(){let[e]=D.useState(()=>M()),[t,n]=D.useState(``),r=e=>t===e,i=e=>t=>{n(e);let r=t.getItemElementById(e);r&&t.scrollToItem(r,`smooth`,`center`)};return(0,O.jsx)(u,{LeftArrow:S,RightArrow:C,onWheel:E,children:e.map(({id:e})=>(0,O.jsx)(T,{title:e,itemId:e,onClick:i(e),selected:r(e)},e))})}function S(){let e=D.useContext(f),t=e.useIsVisible(`first`,!0);return(0,O.jsx)(w,{disabled:t,onClick:()=>e.scrollPrev(),testId:`left-arrow`,children:`Left`})}function C(){let e=D.useContext(f),t=e.useIsVisible(`last`,!1);return(0,O.jsx)(w,{disabled:t,onClick:()=>e.scrollNext(),testId:`right-arrow`,children:`Right`})}function w({children:e,disabled:t,onClick:n,className:r,testId:i}){return(0,O.jsx)(k,{disabled:t,onClick:n,className:`arrow-${r}`,"data-testid":i,children:e})}function T({onClick:e,selected:t,title:n,itemId:r}){let i=D.useContext(f),a=i.useIsVisible(r,!0);return(0,O.jsxs)(A,{"data-cy":r,onClick:()=>e(i),onKeyDown:t=>{t.code===`Enter`&&e(i)},"data-testid":`card`,role:`button`,tabIndex:0,className:`card`,visible:a,selected:t,children:[(0,O.jsxs)(`div`,{className:`header`,children:[(0,O.jsx)(`div`,{children:n}),(0,O.jsxs)(`div`,{className:`visible`,children:[`visible: `,JSON.stringify(a)]}),(0,O.jsxs)(`div`,{className:`selected`,children:[`selected: `,JSON.stringify(!!t)]})]}),(0,O.jsx)(`div`,{className:`background`})]})}function E(e,t){if(Math.abs(t.deltaX)!==0||Math.abs(t.deltaY)<15){t.stopPropagation();return}t.deltaY<0?e.scrollNext():e.scrollPrev()}var D,O,k,A,j,M;function N(){return(N=t((()=>{o(),D=e(n(),1),c(),O=r(),k=i(`button`)(e=>({cursor:`pointer`,display:`flex`,flexDirection:`column`,justifyContent:`center`,marginBottom:`2px`,opacity:e.disabled?`0`:`1`,userSelect:`none`,borderRadius:`6px`,borderWidth:`1px`})),A=i(`div`)(e=>({border:`1px solid`,display:`inline-block`,margin:`0 10px`,width:`160px`,userSelect:`none`,borderRadius:`8px`,overflow:`hidden`,"& .header":{backgroundColor:`white`},"& .visible":{backgroundColor:e.visible?`transparent`:`gray`},"& .background":{backgroundColor:e.selected?`green`:`bisque`,height:`200px`}})),j=e=>`test${e}`,M=()=>Array(14).fill(0).map((e,t)=>({id:j(t)})),x.__docgenInfo={description:``,methods:[],displayName:`CenterOnClick`}})))()}var P;function F(){return(F=t((()=>{P=`import 'react-horizontal-scrolling-menu/dist/styles.css';

import styled from '@emotion/styled';
import React from 'react';
import {
  type publicApiType,
  ScrollMenu,
  VisibilityContext,
} from 'react-horizontal-scrolling-menu';

export function CenterOnClick() {
  const [items] = React.useState(() => getItems());
  const [selected, setSelected] = React.useState<string>('');

  const isItemSelected = (id: string): boolean => selected === id;

  // The Card reads the api from VisibilityContext and passes it here,
  // so a single click both selects the item and centers it.
  const handleItemClick = (itemId: string) => (api: publicApiType) => {
    setSelected(itemId);

    const item = api.getItemElementById(itemId);
    if (item) {
      api.scrollToItem(item, 'smooth', 'center');
    }
  };

  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} onWheel={onWheel}>
      {items.map(({ id }) => (
        <Card
          title={id}
          itemId={id} // NOTE: itemId is required for track items
          key={id}
          onClick={handleItemClick(id)}
          selected={isItemSelected(id)}
        />
      ))}
    </ScrollMenu>
  );
}

export default CenterOnClick;

function LeftArrow() {
  const visibility = React.useContext<publicApiType>(VisibilityContext);

  const isFirstItemVisible = visibility.useIsVisible('first', true);

  return (
    <Arrow
      disabled={isFirstItemVisible}
      onClick={() => visibility.scrollPrev()}
      testId="left-arrow"
    >
      Left
    </Arrow>
  );
}

function RightArrow() {
  const visibility = React.useContext<publicApiType>(VisibilityContext);

  const isLastItemVisible = visibility.useIsVisible('last', false);

  return (
    <Arrow
      disabled={isLastItemVisible}
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
  Array(14)
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
`})))()}var I,L,R,z,B,V,H,U;function W(){return(W=t((()=>{n(),p(),d(),s(),h(),_(),N(),F(),I=r(),{expect:L,userEvent:R,within:z}=__STORYBOOK_MODULE_TEST__,B={title:`Examples/CenterOnClick`,component:x,decorators:[e=>(0,I.jsx)(g,{children:(0,I.jsx)(e,{})})]},V={},m(V,{code:P,availableImports:l,modifyEditor:a}),H={tags:[`test-only`],play:async({canvasElement:e})=>{let t=z(e),n=new v(t,{leftArrow:y,rightArrow:b});await n.isReady(),await n.arrowsVisible({left:!1,right:!0}),await n.expectVisibleCards([`test0`,`test1`,`test2`]),await R.click(t.getByText(`test2`)),await n.expectVisibleCards([`test1`,`test2`,`test3`]),L(await n.getSelectedCardsKeys()).toEqual([`test2`]),await n.arrowsVisible({left:!0,right:!0}),await R.click(t.getByText(`test3`)),await n.expectVisibleCards([`test2`,`test3`,`test4`]),L(await n.getSelectedCardsKeys()).toEqual([`test3`])}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  tags: ['test-only'],
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const testObj = new TestObj(canvas, {
      leftArrow: leftArrowSelector,
      rightArrow: rightArrowSelector
    });
    await testObj.isReady();
    await testObj.arrowsVisible({
      left: false,
      right: true
    });
    await testObj.expectVisibleCards(['test0', 'test1', 'test2']);

    // Clicking the last visible card selects it and scrolls it to the
    // center, pulling one neighbour in from each side.
    await userEvent.click(canvas.getByText('test2'));
    await testObj.expectVisibleCards(['test1', 'test2', 'test3']);
    expect(await testObj.getSelectedCardsKeys()).toEqual(['test2']);
    await testObj.arrowsVisible({
      left: true,
      right: true
    });

    // Clicking another card re-centers on it and moves the single
    // selection over, rather than adding to it.
    await userEvent.click(canvas.getByText('test3'));
    await testObj.expectVisibleCards(['test2', 'test3', 'test4']);
    expect(await testObj.getSelectedCardsKeys()).toEqual(['test3']);
  }
}`,...H.parameters?.docs?.source}}},U=[`CenterOnClick`,`Test`]})))()}W();export{V as CenterOnClick,H as Test,U as __namedExportsOrder,B as default};