import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{t as n}from"./react-B82b4cNX.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{a as i,c as a,d as o,f as s,i as c,m as l,n as u,o as d,p as f,r as p,s as m,t as h}from"./dist-CxkS9euy.js";import{n as g,t as _}from"./SizeWrapper-g9pokEER.js";import{a as v,n as y,o as b,s as x}from"./test-BB-LPJmr.js";function S(){let[e]=O.useState(()=>P()),[t,n]=O.useState([]),r=e=>!!t.find(t=>t===e),i=e=>{let t=r(e);n(n=>t?n.filter(t=>t!==e):n.concat(e))};return(0,k.jsx)(A,{children:(0,k.jsx)(p,{LeftArrow:C,RightArrow:w,onWheel:D,children:e.map(({id:e})=>(0,k.jsx)(E,{title:e,itemId:e,onClick:()=>i(e),selected:r(e)},e))})})}function C(){let e=O.useContext(h),t=e.useIsVisible(`first`,!0);return(0,k.jsx)(T,{disabled:t,onClick:()=>e.scrollToItem(e.getPrevElement(),`smooth`,`start`),testId:`left-arrow`,children:`Left`})}function w(){let e=O.useContext(h),t=e.useIsVisible(`last`,!1);return(0,k.jsx)(T,{disabled:t,onClick:()=>e.scrollToItem(e.getNextElement(),`smooth`,`end`),testId:`right-arrow`,children:`Right`})}function T({children:e,disabled:t,onClick:n,className:r,testId:i}){return(0,k.jsx)(j,{disabled:t,onClick:n,className:`arrow-${r}`,"data-testid":i,children:e})}function E({onClick:e,selected:t,title:n,itemId:r}){let i=O.useContext(h),a=i.useIsVisible(r,!0);return(0,k.jsxs)(M,{"data-cy":r,onClick:()=>e(i),onKeyDown:t=>{t.code===`Enter`&&e(i)},"data-testid":`card`,role:`button`,tabIndex:0,className:`card`,visible:a,selected:t,children:[(0,k.jsxs)(`div`,{className:`header`,children:[(0,k.jsx)(`div`,{children:n}),(0,k.jsxs)(`div`,{className:`visible`,children:[`visible: `,JSON.stringify(a)]}),(0,k.jsxs)(`div`,{className:`selected`,children:[`selected: `,JSON.stringify(!!t)]})]}),(0,k.jsx)(`div`,{className:`background`})]})}function D(e,t){if(Math.abs(t.deltaX)!==0||Math.abs(t.deltaY)<15){t.stopPropagation();return}t.deltaY<0?e.scrollNext():e.scrollPrev()}var O,k,A,j,M,N,P,F=e((()=>{a(),o(),O=t(n(),1),u(),k=r(),A=s(`div`)({"& .react-horizontal-scrolling-menu--scroll-container::-webkit-scrollbar":{display:`none`},"& .react-horizontal-scrolling-menu--scroll-container":{scrollbarWidth:`none`,"-ms-overflow-style":`none`}}),j=s(`button`)(e=>({cursor:`pointer`,display:`flex`,flexDirection:`column`,justifyContent:`center`,marginBottom:`2px`,opacity:e.disabled?`0`:`1`,userSelect:`none`,borderRadius:`6px`,borderWidth:`1px`})),M=s(`div`)(e=>({border:`1px solid`,display:`inline-block`,margin:`0 10px`,width:`160px`,userSelect:`none`,borderRadius:`8px`,overflow:`hidden`,"& .header":{backgroundColor:`white`},"& .visible":{backgroundColor:e.visible?`transparent`:`gray`},"& .background":{backgroundColor:e.selected?`green`:`bisque`,height:`200px`}})),N=e=>`test${e}`,P=()=>Array(10).fill(0).map((e,t)=>({id:N(t)})),S.__docgenInfo={description:``,methods:[],displayName:`OneItemScroll`}})),I,L=e((()=>{I=`import 'react-horizontal-scrolling-menu/dist/styles.css';

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
`})),R,z,B,V,H,U;e((()=>{n(),f(),m(),c(),g(),v(),F(),L(),R=r(),{within:z}=__STORYBOOK_MODULE_TEST__,B={title:`Examples/OneItemScroll`,component:S,decorators:[e=>(0,R.jsx)(_,{children:(0,R.jsx)(e,{})})]},V={},l(V,{code:I,availableImports:d,modifyEditor:i}),H={play:async({canvasElement:e})=>{let t=new y(z(e),{leftArrow:b,rightArrow:x});await t.isReady(),await t.arrowsVisible({left:!1,right:!0}),await t.clickNext(),await t.cardHidden(`test0`),await t.expectVisibleCards([`test1`,`test2`,`test3`]),await t.arrowsVisible({left:!0,right:!0}),await t.clickNext(),await t.cardHidden(`test1`),await t.expectVisibleCards([`test2`,`test3`,`test4`]),await t.arrowsVisible({left:!0,right:!0}),await t.clickPrev(),await t.cardHidden(`test4`),await t.arrowsVisible({left:!0,right:!0}),await t.expectVisibleCards([`test1`,`test2`,`test3`]),await t.clickPrev(),await t.cardHidden(`test3`),await t.arrowsVisible({left:!1,right:!0}),await t.expectVisibleCards([`test0`,`test1`,`test2`])}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}},U=[`OneItemScroll`,`Test`]}))();export{V as OneItemScroll,H as Test,U as __namedExportsOrder,B as default};