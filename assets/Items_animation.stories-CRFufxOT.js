import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{t as n}from"./react-B82b4cNX.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{a as i,c as a,d as o,f as s,i as c,l,m as u,n as d,o as f,p,r as m,s as h,t as g,u as _}from"./dist-BDHy28fY.js";function v(){let[e]=_(),[t,n]=w.useState(()=>A(10)),[r,i]=w.useState([]),a=e=>!!r.find(t=>t===e),o=e=>{let t=a(e);i(n=>t?n.filter(t=>t!==e):n.concat(e))},s=w.useCallback(()=>{n(e=>{let t=e.map(e=>+e.id.replace(/\D/g,``)).sort().find((e,t,n)=>n[t+1]-e>1),n=typeof t==`number`;return[...e,...A(1,n?t+1:e.length)]})},[]),c=w.useCallback(()=>{n(e=>[...e.sort().slice(0,e.length-1)])},[]),l=w.useCallback(()=>{n(e=>{let t=[...e],n=t.length,r;for(;n>0;)r=Math.floor(Math.random()*n),n--,[t[n],t[r]]=[t[r],t[n]];return t})},[]);return(0,T.jsxs)(E,{children:[(0,T.jsx)(m,{containerRef:e,LeftArrow:y,RightArrow:b,onWheel:C,noPolyfill:!1,children:t.map(({id:e})=>(0,T.jsx)(S,{title:e,itemId:e,onClick:()=>o(e),selected:a(e)},e))}),(0,T.jsxs)(`div`,{style:{display:`flex`,gap:`8px`,margin:`8px`},children:[(0,T.jsx)(`button`,{onClick:s,children:`Add item`}),(0,T.jsx)(`button`,{onClick:c,children:`Remove item`}),(0,T.jsx)(`button`,{onClick:l,children:`Shuffle items`})]})]})}function y(){let e=w.useContext(g);return(0,T.jsx)(x,{disabled:e.useLeftArrowVisible(),onClick:()=>e.scrollPrev(),testId:`left-arrow`,children:`Left`})}function b(){let e=w.useContext(g);return(0,T.jsx)(x,{disabled:e.useRightArrowVisible(),onClick:()=>e.scrollNext(),testId:`right-arrow`,children:`Right`})}function x({children:e,disabled:t,onClick:n,className:r,testId:i}){return(0,T.jsx)(D,{disabled:t,onClick:n,className:`arrow-${r}`,"data-testid":i,children:e})}function S({onClick:e,selected:t,title:n,itemId:r}){let i=w.useContext(g),a=i.useIsVisible(r,!0);return(0,T.jsxs)(O,{"data-cy":r,onClick:()=>e(i),onKeyDown:t=>{t.code===`Enter`&&e(i)},"data-testid":`card`,role:`button`,tabIndex:0,className:`card`,visible:a,selected:t,children:[(0,T.jsxs)(`div`,{className:`header`,children:[(0,T.jsx)(`div`,{children:n}),(0,T.jsxs)(`div`,{className:`visible`,children:[`visible: `,JSON.stringify(a)]}),(0,T.jsxs)(`div`,{className:`selected`,children:[`selected: `,JSON.stringify(!!t)]})]}),(0,T.jsx)(`div`,{className:`background`})]})}function C(e,t){if(Math.abs(t.deltaX)!==0||Math.abs(t.deltaY)<15){t.stopPropagation();return}t.deltaY<0?e.scrollNext():e.scrollPrev()}var w,T,E,D,O,k,A,j=e((()=>{a(),o(),l(),w=t(n(),1),d(),T=r(),E=s(`div`)({"& .react-horizontal-scrolling-menu--scroll-container::-webkit-scrollbar":{display:`none`},"& .react-horizontal-scrolling-menu--scroll-container":{scrollbarWidth:`none`,"-ms-overflow-style":`none`}}),D=s(`button`)(e=>({cursor:`pointer`,display:`flex`,flexDirection:`column`,justifyContent:`center`,marginBottom:`2px`,opacity:e.disabled?`0`:`1`,userSelect:`none`,borderRadius:`6px`,borderWidth:`1px`})),O=s(`div`)(e=>({border:`1px solid`,display:`inline-block`,margin:`0 10px`,width:`160px`,userSelect:`none`,borderRadius:`8px`,overflow:`hidden`,"& .header":{backgroundColor:`white`},"& .visible":{backgroundColor:e.visible?`transparent`:`gray`},"& .background":{backgroundColor:e.selected?`green`:`bisque`,height:`200px`}})),k=e=>`test${e}`,A=(e,t=0)=>Array(e).fill(0).map((e,n)=>({id:k(t+n)})),v.__docgenInfo={description:``,methods:[],displayName:`ItemsAnimation`}})),M,N=e((()=>{M=`import 'react-horizontal-scrolling-menu/dist/styles.css';

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
`})),P,F,I,L;e((()=>{n(),p(),h(),c(),j(),N(),P=r(),F={title:`Examples/ItemsAnimation`,component:v,decorators:[e=>(0,P.jsx)(e,{})]},I={},u(I,{code:M,availableImports:f,modifyEditor:i}),I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{}`,...I.parameters?.docs?.source}}},L=[`ItemsAnimation`]}))();export{I as ItemsAnimation,L as __namedExportsOrder,F as default};