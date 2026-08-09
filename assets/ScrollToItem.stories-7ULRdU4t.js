import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{_ as i,a,g as o,i as s,n as c,o as l,r as u,s as d,t as f,v as p,y as m}from"./dist-CtTyjgUm.js";import{n as h,t as g}from"./SizeWrapper-CdXqr5N7.js";function _(){let[e]=C.useState(()=>O()),[t,n]=C.useState([]),r=e=>!!t.find(t=>t===e),i=e=>{let t=r(e);n(n=>t?n.filter(t=>t!==e):n.concat(e))};return(0,w.jsx)(u,{LeftArrow:v,RightArrow:y,onWheel:S,onInit:e=>{let t=e.getItemElementById(D(5));t&&e.scrollToItem(t,`auto`,`start`)},children:e.map(({id:e})=>(0,w.jsx)(x,{title:e,itemId:e,onClick:()=>i(e),selected:r(e)},e))})}function v(){let e=C.useContext(f),t=e.useLeftArrowVisible();return(0,w.jsx)(b,{disabled:t,onClick:()=>e.scrollPrev(),testId:`left-arrow`,children:`Left`})}function y(){let e=C.useContext(f),t=e.useRightArrowVisible();return(0,w.jsx)(b,{disabled:t,onClick:()=>e.scrollNext(),testId:`right-arrow`,children:`Right`})}function b({children:e,disabled:t,onClick:n,className:r,testId:i}){return(0,w.jsx)(T,{disabled:t,onClick:n,className:`arrow-${r}`,"data-testid":i,children:e})}function x({onClick:e,selected:t,title:n,itemId:r}){let i=C.useContext(f),a=i.useIsVisible(r,!0);return(0,w.jsxs)(E,{"data-cy":r,onClick:()=>e(i),onKeyDown:t=>{t.code===`Enter`&&e(i)},"data-testid":`card`,role:`button`,tabIndex:0,className:`card`,visible:a,selected:t,children:[(0,w.jsxs)(`div`,{className:`header`,children:[(0,w.jsx)(`div`,{children:n}),(0,w.jsxs)(`div`,{className:`visible`,children:[`visible: `,JSON.stringify(a)]}),(0,w.jsxs)(`div`,{className:`selected`,children:[`selected: `,JSON.stringify(!!t)]})]}),(0,w.jsx)(`div`,{className:`background`})]})}function S(e,t){if(Math.abs(t.deltaX)!==0||Math.abs(t.deltaY)<15){t.stopPropagation();return}t.deltaY<0?e.scrollNext():e.scrollPrev()}var C,w,T,E,D,O;function k(){return(k=t((()=>{o(),C=e(n(),1),c(),w=r(),T=i(`button`)(e=>({cursor:`pointer`,display:`flex`,flexDirection:`column`,justifyContent:`center`,marginBottom:`2px`,opacity:e.disabled?`0`:`1`,userSelect:`none`,borderRadius:`6px`,borderWidth:`1px`})),E=i(`div`)(e=>({border:`1px solid`,display:`inline-block`,margin:`0 10px`,width:`160px`,userSelect:`none`,borderRadius:`8px`,overflow:`hidden`,"& .header":{backgroundColor:`white`},"& .visible":{backgroundColor:e.visible?`transparent`:`gray`},"& .background":{backgroundColor:e.selected?`green`:`bisque`,height:`200px`}})),D=e=>`test${e}`,O=()=>Array(10).fill(0).map((e,t)=>({id:D(t)})),_.__docgenInfo={description:``,methods:[],displayName:`ScrollToItem`}})))()}var A;function j(){return(j=t((()=>{A=`import 'react-horizontal-scrolling-menu/dist/styles.css';

import styled from '@emotion/styled';
import React from 'react';
import {
  type publicApiType,
  ScrollMenu,
  VisibilityContext,
} from 'react-horizontal-scrolling-menu';

export function ScrollToItem() {
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

  // \`onInit\` fires once the menu has rendered and measured its items,
  // so the api is safe to use right away — no timers needed.
  const scrollToItemOnInit = (api: publicApiType) => {
    const item = api.getItemElementById(getId(5));
    // const item = api.getItemElementByIndex('5') // or by index
    if (item) {
      api.scrollToItem(item, 'auto', 'start');
    }
  };

  return (
    <ScrollMenu
      LeftArrow={LeftArrow}
      RightArrow={RightArrow}
      onWheel={onWheel}
      onInit={scrollToItemOnInit}
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
  );
}

export default ScrollToItem;

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
`})))()}var M,N,P,F;function I(){return(I=t((()=>{n(),p(),d(),s(),h(),k(),j(),M=r(),N={title:`Examples/ScrollToItem`,component:_,decorators:[e=>(0,M.jsx)(g,{children:(0,M.jsx)(e,{})})]},P={},m(P,{code:A,availableImports:l,modifyEditor:a}),P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{}`,...P.parameters?.docs?.source}}},F=[`ScrollToItem`]})))()}I();export{P as ScrollToItem,F as __namedExportsOrder,N as default};