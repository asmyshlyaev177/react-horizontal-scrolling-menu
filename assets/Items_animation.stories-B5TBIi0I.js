import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{_ as i,a,g as o,h as s,i as c,m as l,n as u,o as d,r as f,s as p,t as m,v as h,y as g}from"./dist-CtTyjgUm.js";function _(){let[e]=s(),[t,n]=C.useState(()=>k(10)),[r,i]=C.useState([]),a=e=>!!r.find(t=>t===e),o=e=>{let t=a(e);i(n=>t?n.filter(t=>t!==e):n.concat(e))},c=C.useCallback(()=>{n(e=>{let t=e.map(e=>+e.id.replace(/\D/g,``)).sort().find((e,t,n)=>n[t+1]-e>1),n=typeof t==`number`;return[...e,...k(1,n?t+1:e.length)]})},[]),l=C.useCallback(()=>{n(e=>[...e.sort().slice(0,e.length-1)])},[]),u=C.useCallback(()=>{n(e=>{let t=[...e],n=t.length,r;for(;n>0;)r=Math.floor(Math.random()*n),n--,[t[n],t[r]]=[t[r],t[n]];return t})},[]);return(0,w.jsxs)(T,{children:[(0,w.jsx)(f,{containerRef:e,LeftArrow:v,RightArrow:y,onWheel:S,noPolyfill:!1,children:t.map(({id:e})=>(0,w.jsx)(x,{title:e,itemId:e,onClick:()=>o(e),selected:a(e)},e))}),(0,w.jsxs)(`div`,{style:{display:`flex`,gap:`8px`,margin:`8px`},children:[(0,w.jsx)(`button`,{onClick:c,children:`Add item`}),(0,w.jsx)(`button`,{onClick:l,children:`Remove item`}),(0,w.jsx)(`button`,{onClick:u,children:`Shuffle items`})]})]})}function v(){let e=C.useContext(m),t=e.useLeftArrowVisible();return(0,w.jsx)(b,{disabled:t,onClick:()=>e.scrollPrev(),testId:`left-arrow`,children:`Left`})}function y(){let e=C.useContext(m),t=e.useRightArrowVisible();return(0,w.jsx)(b,{disabled:t,onClick:()=>e.scrollNext(),testId:`right-arrow`,children:`Right`})}function b({children:e,disabled:t,onClick:n,className:r,testId:i}){return(0,w.jsx)(E,{disabled:t,onClick:n,className:`arrow-${r}`,"data-testid":i,children:e})}function x({onClick:e,selected:t,title:n,itemId:r}){let i=C.useContext(m),a=i.useIsVisible(r,!0);return(0,w.jsxs)(D,{"data-cy":r,onClick:()=>e(i),onKeyDown:t=>{t.code===`Enter`&&e(i)},"data-testid":`card`,role:`button`,tabIndex:0,className:`card`,visible:a,selected:t,children:[(0,w.jsxs)(`div`,{className:`header`,children:[(0,w.jsx)(`div`,{children:n}),(0,w.jsxs)(`div`,{className:`visible`,children:[`visible: `,JSON.stringify(a)]}),(0,w.jsxs)(`div`,{className:`selected`,children:[`selected: `,JSON.stringify(!!t)]})]}),(0,w.jsx)(`div`,{className:`background`})]})}function S(e,t){if(Math.abs(t.deltaX)!==0||Math.abs(t.deltaY)<15){t.stopPropagation();return}t.deltaY<0?e.scrollNext():e.scrollPrev()}var C,w,T,E,D,O,k;function A(){return(A=t((()=>{o(),l(),C=e(n(),1),u(),w=r(),T=i(`div`)({"& .react-horizontal-scrolling-menu--scroll-container::-webkit-scrollbar":{display:`none`},"& .react-horizontal-scrolling-menu--scroll-container":{scrollbarWidth:`none`,"-ms-overflow-style":`none`}}),E=i(`button`)(e=>({cursor:`pointer`,display:`flex`,flexDirection:`column`,justifyContent:`center`,marginBottom:`2px`,opacity:e.disabled?`0`:`1`,userSelect:`none`,borderRadius:`6px`,borderWidth:`1px`})),D=i(`div`)(e=>({border:`1px solid`,display:`inline-block`,margin:`0 10px`,width:`160px`,userSelect:`none`,borderRadius:`8px`,overflow:`hidden`,"& .header":{backgroundColor:`white`},"& .visible":{backgroundColor:e.visible?`transparent`:`gray`},"& .background":{backgroundColor:e.selected?`green`:`bisque`,height:`200px`}})),O=e=>`test${e}`,k=(e,t=0)=>Array(e).fill(0).map((e,n)=>({id:O(t+n)})),_.__docgenInfo={description:``,methods:[],displayName:`ItemsAnimation`}})))()}var j;function M(){return(M=t((()=>{j=`import 'react-horizontal-scrolling-menu/dist/styles.css';

import styled from '@emotion/styled';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import React from 'react';
import {
  type publicApiType,
  ScrollMenu,
  VisibilityContext,
} from 'react-horizontal-scrolling-menu';

export function ItemsAnimation() {
  const [parent] = useAutoAnimate();

  const [items, setItems] = React.useState(() => getItems(10));
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

  const addItems = React.useCallback(() => {
    setItems((curr) => {
      const currentItemsNumbers = curr
        .map((el) => +el.id.replace(/\\D/g, ''))
        .sort();
      const lastSeqItem = currentItemsNumbers.find(
        (el, ind, arr) => arr[ind + 1] - el > 1,
      );
      const haveGaps = typeof lastSeqItem === 'number';

      return [
        ...curr,
        ...getItems(1, haveGaps ? lastSeqItem + 1 : curr.length),
      ];
    });
  }, []);

  const removeItems = React.useCallback(() => {
    setItems((curr) => [...curr.sort().slice(0, curr.length - 1)]);
  }, []);

  const shuffle = React.useCallback(() => {
    setItems((curr) => {
      const array = [...curr];
      let currentIndex = array.length,
        randomIndex;

      while (currentIndex > 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex],
          array[currentIndex],
        ];
      }

      return array;
    });
  }, []);

  return (
    <NoScrollbar>
      <ScrollMenu
        containerRef={parent}
        LeftArrow={LeftArrow}
        RightArrow={RightArrow}
        onWheel={onWheel}
        noPolyfill={false}
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
      <div style={{ display: 'flex', gap: '8px', margin: '8px' }}>
        <button onClick={addItems}>Add item</button>
        <button onClick={removeItems}>Remove item</button>
        <button onClick={shuffle}>Shuffle items</button>
      </div>
    </NoScrollbar>
  );
}

export default ItemsAnimation;

const NoScrollbar = styled('div')({
  '& .react-horizontal-scrolling-menu--scroll-container::-webkit-scrollbar': {
    display: 'none',
  },
  '& .react-horizontal-scrolling-menu--scroll-container': {
    scrollbarWidth: 'none',
    '-ms-overflow-style': 'none',
  },
});

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

const getItems = (count: number, start: number = 0) =>
  Array(count)
    .fill(0)
    .map((_, ind) => ({ id: getId(start + ind) }));

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
`})))()}var N,P,F;function I(){return(I=t((()=>{h(),p(),c(),A(),M(),N={title:`Examples/ItemsAnimation`,component:_},P={},g(P,{code:j,availableImports:d,modifyEditor:a}),P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{}`,...P.parameters?.docs?.source}}},F=[`ItemsAnimation`]})))()}I();export{P as ItemsAnimation,F as __namedExportsOrder,N as default};