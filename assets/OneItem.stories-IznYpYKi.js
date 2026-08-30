import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{_ as i,a,g as o,i as s,n as c,o as l,r as u,s as d,t as f,v as p,y as m}from"./dist-oGMj_wFx.js";import{n as h,t as g}from"./SizeWrapper-D7kux-98.js";import{a as _,n as v,o as y,s as b}from"./test-CHHlmwCw.js";function x(){let[e]=D.useState(()=>P()),[t,n]=D.useState([]),r=e=>!!t.find(t=>t===e),i=e=>{let t=r(e);n(n=>t?n.filter(t=>t!==e):n.concat(e))};return(0,O.jsx)(k,{children:(0,O.jsx)(A,{children:(0,O.jsx)(u,{LeftArrow:S,RightArrow:C,onWheel:E,children:e.map(({id:e})=>(0,O.jsx)(T,{title:e,itemId:e,onClick:()=>i(e),selected:r(e)},e))})})})}function S(){let e=D.useContext(f),t=e.useLeftArrowVisible();return(0,O.jsx)(w,{disabled:t,onClick:()=>e.scrollPrev(),testId:`left-arrow`,children:`Left`})}function C(){let e=D.useContext(f),t=e.useRightArrowVisible();return(0,O.jsx)(w,{disabled:t,onClick:()=>e.scrollNext(),testId:`right-arrow`,children:`Right`})}function w({children:e,disabled:t,onClick:n,className:r,testId:i}){return(0,O.jsx)(j,{disabled:t,onClick:n,className:`arrow-${r}`,"data-testid":i,children:e})}function T({onClick:e,selected:t,title:n,itemId:r}){let i=D.useContext(f),a=i.useIsVisible(r,!0);return(0,O.jsxs)(M,{"data-cy":r,onClick:()=>e(i),onKeyDown:t=>{t.code===`Enter`&&e(i)},"data-testid":`card`,role:`button`,tabIndex:0,className:`card`,visible:a,selected:t,children:[(0,O.jsxs)(`div`,{className:`header`,children:[(0,O.jsx)(`div`,{children:n}),(0,O.jsxs)(`div`,{className:`visible`,children:[`visible: `,JSON.stringify(a)]}),(0,O.jsxs)(`div`,{className:`selected`,children:[`selected: `,JSON.stringify(!!t)]})]}),(0,O.jsx)(`div`,{className:`background`})]})}function E(e,t){if(Math.abs(t.deltaX)!==0||Math.abs(t.deltaY)<15){t.stopPropagation();return}t.deltaY<0?e.scrollNext():e.scrollPrev()}var D,O,k,A,j,M,N,P;function F(){return(F=t((()=>{o(),D=e(n(),1),c(),O=r(),k=i(`div`)({"& .react-horizontal-scrolling-menu--item ":{minWidth:`100%`,display:`flex`,justifyContent:`center`}}),A=i(`div`)({"& .react-horizontal-scrolling-menu--scroll-container::-webkit-scrollbar":{display:`none`},"& .react-horizontal-scrolling-menu--scroll-container":{scrollbarWidth:`none`,"-ms-overflow-style":`none`}}),j=i(`button`)(e=>({cursor:`pointer`,display:`flex`,flexDirection:`column`,justifyContent:`center`,marginBottom:`2px`,opacity:e.disabled?`0`:`1`,userSelect:`none`,borderRadius:`6px`,borderWidth:`1px`})),M=i(`div`)(e=>({border:`1px solid`,display:`inline-block`,margin:`0 10px`,width:`160px`,userSelect:`none`,borderRadius:`8px`,overflow:`hidden`,"& .header":{backgroundColor:`white`},"& .visible":{backgroundColor:e.visible?`transparent`:`gray`},"& .background":{backgroundColor:e.selected?`green`:`bisque`,height:`200px`}})),N=e=>`test${e}`,P=()=>Array(10).fill(0).map((e,t)=>({id:N(t)})),x.__docgenInfo={description:``,methods:[],displayName:`OneItem`}})))()}var I;function L(){return(L=t((()=>{I=`import 'react-horizontal-scrolling-menu/dist/styles.css';

import styled from '@emotion/styled';
import React from 'react';
import {
  type publicApiType,
  ScrollMenu,
  VisibilityContext,
} from 'react-horizontal-scrolling-menu';

const WideItems = styled('div')({
  '& .react-horizontal-scrolling-menu--item ': {
    minWidth: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
});

export function OneItem() {
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
    <WideItems>
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
    </WideItems>
  );
}

export default OneItem;

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
`})))()}var R,z,B,V,H,U;function W(){return(W=t((()=>{n(),p(),d(),s(),h(),_(),F(),L(),R=r(),{within:z}=__STORYBOOK_MODULE_TEST__,B={title:`Examples/OneItem`,component:x,decorators:[e=>(0,R.jsx)(g,{children:(0,R.jsx)(e,{})})]},V={},m(V,{code:I,availableImports:l,modifyEditor:a}),H={tags:[`test-only`],play:async({canvasElement:e})=>{let t=z(e),n=new v(t,{leftArrow:y,rightArrow:b});await n.isReady(),await n.arrowsVisible({left:!1,right:!0}),await n.expectVisibleCards([`test0`]),await n.clickNext(),await n.cardHidden(`test0`),await n.expectVisibleCards([`test1`]),await n.arrowsVisible({left:!0,right:!0}),await n.clickNext(),await n.cardHidden(`test1`),await n.expectVisibleCards([`test2`]),await n.arrowsVisible({left:!0,right:!0}),await n.clickPrev(),await n.cardHidden(`test2`),await n.arrowsVisible({left:!0,right:!0}),await n.expectVisibleCards([`test1`]),await n.clickPrev(),await n.cardHidden(`test1`),await n.arrowsVisible({left:!1,right:!0}),await n.expectVisibleCards([`test0`])}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
    await testObj.expectVisibleCards(['test0']);
    await testObj.clickNext();
    await testObj.cardHidden('test0');
    await testObj.expectVisibleCards(['test1']);
    await testObj.arrowsVisible({
      left: true,
      right: true
    });
    await testObj.clickNext();
    await testObj.cardHidden('test1');
    await testObj.expectVisibleCards(['test2']);
    await testObj.arrowsVisible({
      left: true,
      right: true
    });
    await testObj.clickPrev();
    await testObj.cardHidden('test2');
    await testObj.arrowsVisible({
      left: true,
      right: true
    });
    await testObj.expectVisibleCards(['test1']);
    await testObj.clickPrev();
    await testObj.cardHidden('test1');
    await testObj.arrowsVisible({
      left: false,
      right: true
    });
    await testObj.expectVisibleCards(['test0']);
  }
}`,...H.parameters?.docs?.source}}},U=[`OneItem`,`Test`]})))()}W();export{V as OneItem,H as Test,U as __namedExportsOrder,B as default};