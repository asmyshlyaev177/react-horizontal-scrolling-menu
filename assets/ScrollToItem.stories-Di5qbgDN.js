import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{t as n}from"./react-B82b4cNX.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{a as i,c as a,d as o,f as s,i as c,m as l,n as u,o as d,p as f,r as p,s as m,t as h}from"./dist-C6j6OFUi.js";import{n as g,t as _}from"./SizeWrapper-BSaTbaJP.js";function v(){let[e]=w.useState(()=>k()),[t,n]=w.useState([]),r=e=>!!t.find(t=>t===e),i=e=>{let t=r(e);n(n=>t?n.filter(t=>t!==e):n.concat(e))},a=w.useRef(null);return w.useEffect(()=>{if(!a.current)return()=>{};let e=setTimeout(()=>{let e=a.current;if(!e)return;let t=[...e.items.toItems()].find(e=>e.includes(`5`));if(!t)return;let n=e.getItemById(t);e.scrollToItem(n,`auto`,`start`)},100);return()=>clearTimeout(e)},[a]),(0,T.jsx)(p,{LeftArrow:y,RightArrow:b,onWheel:C,apiRef:a,children:e.map(({id:e})=>(0,T.jsx)(S,{title:e,itemId:e,onClick:()=>i(e),selected:r(e)},e))})}function y(){let e=w.useContext(h);return(0,T.jsx)(x,{disabled:e.useLeftArrowVisible(),onClick:()=>e.scrollPrev(),testId:`left-arrow`,children:`Left`})}function b(){let e=w.useContext(h);return(0,T.jsx)(x,{disabled:e.useRightArrowVisible(),onClick:()=>e.scrollNext(),testId:`right-arrow`,children:`Right`})}function x({children:e,disabled:t,onClick:n,className:r,testId:i}){return(0,T.jsx)(E,{disabled:t,onClick:n,className:`arrow-${r}`,"data-testid":i,children:e})}function S({onClick:e,selected:t,title:n,itemId:r}){let i=w.useContext(h),a=i.useIsVisible(r,!0);return(0,T.jsxs)(D,{"data-cy":r,onClick:()=>e(i),onKeyDown:t=>{t.code===`Enter`&&e(i)},"data-testid":`card`,role:`button`,tabIndex:0,className:`card`,visible:a,selected:t,children:[(0,T.jsxs)(`div`,{className:`header`,children:[(0,T.jsx)(`div`,{children:n}),(0,T.jsxs)(`div`,{className:`visible`,children:[`visible: `,JSON.stringify(a)]}),(0,T.jsxs)(`div`,{className:`selected`,children:[`selected: `,JSON.stringify(!!t)]})]}),(0,T.jsx)(`div`,{className:`background`})]})}function C(e,t){if(Math.abs(t.deltaX)!==0||Math.abs(t.deltaY)<15){t.stopPropagation();return}t.deltaY<0?e.scrollNext():e.scrollPrev()}var w,T,E,D,O,k,A=e((()=>{a(),o(),w=t(n(),1),u(),T=r(),E=s(`button`)(e=>({cursor:`pointer`,display:`flex`,flexDirection:`column`,justifyContent:`center`,marginBottom:`2px`,opacity:e.disabled?`0`:`1`,userSelect:`none`,borderRadius:`6px`,borderWidth:`1px`})),D=s(`div`)(e=>({border:`1px solid`,display:`inline-block`,margin:`0 10px`,width:`160px`,userSelect:`none`,borderRadius:`8px`,overflow:`hidden`,"& .header":{backgroundColor:`white`},"& .visible":{backgroundColor:e.visible?`transparent`:`gray`},"& .background":{backgroundColor:e.selected?`green`:`bisque`,height:`200px`}})),O=e=>`test${e}`,k=()=>Array(10).fill(0).map((e,t)=>({id:O(t)})),v.__docgenInfo={description:``,methods:[],displayName:`ScrollToItem`}})),j,M=e((()=>{j=`import 'react-horizontal-scrolling-menu/dist/styles.css';

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

  const apiRef = React.useRef<publicApiType | null>(null);

  // TODO: fix bug with items
  React.useEffect(() => {
    if (!apiRef.current) return () => {};

    const id = setTimeout(() => {
      const api = apiRef.current;
      if (!api) return;

      const itemsList = [...api.items.toItems()];
      const itemKey = itemsList.find((el) => el.includes('5'));
      if (!itemKey) return;

      const item = api.getItemById(itemKey);
      // const item = api.getItemByIndex(5) // or by index
      api.scrollToItem(item, 'auto', 'start');
    }, 100);

    return () => clearTimeout(id);
  }, [apiRef]);

  return (
    <ScrollMenu
      LeftArrow={LeftArrow}
      RightArrow={RightArrow}
      onWheel={onWheel}
      apiRef={apiRef}
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
`})),N,P,F,I;e((()=>{n(),f(),m(),c(),g(),A(),M(),N=r(),P={title:`Examples/ScrollToItem`,component:v,decorators:[e=>(0,N.jsx)(_,{children:(0,N.jsx)(e,{})})]},F={},l(F,{code:j,availableImports:d,modifyEditor:i}),F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{}`,...F.parameters?.docs?.source}}},I=[`ScrollToItem`]}))();export{F as ScrollToItem,I as __namedExportsOrder,P as default};