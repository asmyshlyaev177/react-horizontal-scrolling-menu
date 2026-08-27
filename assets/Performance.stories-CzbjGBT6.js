import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{_ as i,a,g as o,i as s,n as c,o as l,r as u,s as d,t as f,v as p,y as m}from"./dist-DdPJJPGg.js";function h(){let[e]=v.useState(()=>O(b)),[t,n]=v.useState([]),r=v.useRef(new x),i=v.useCallback(({scrollContainer:e})=>t=>r.current.dragMove(t,t=>{e.current&&(e.current.scrollLeft+=t)}),[]),a=v.useCallback(()=>r.current.dragStart,[r]),o=v.useCallback(()=>r.current.dragStop,[r]),s=v.useCallback(e=>{if(r.current.dragging)return!1;n(t=>t.includes(e)?t.filter(t=>t!==e):t.concat(e))},[]);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(`div`,{style:{marginBottom:`50px`},children:[b,` items and still fast!`]}),(0,y.jsx)(`div`,{onMouseLeave:()=>r.current.dragStop(),children:(0,y.jsx)(u,{LeftArrow:S,RightArrow:C,onMouseDown:a,onMouseUp:o,onMouseMove:i,onWheel:_,noPolyfill:!0,children:e.map(({id:e})=>(0,y.jsx)(T,{title:e,itemId:e,onClick:s,selected:t.includes(e)},e))})})]})}function g({children:e,disabled:t,onClick:n,testId:r}){return(0,y.jsx)(w,{disabled:t,onClick:n,"data-testid":r,children:e})}function _(e,t){if(Math.abs(t.deltaX)!==0||Math.abs(t.deltaY)<15){t.stopPropagation();return}t.deltaY<0?e.scrollNext():e.scrollPrev()}var v,y,b,x,S,C,w,T,E,D,O;function k(){return(k=t((()=>{o(),v=e(n(),1),c(),y=r(),b=5e3,x=class{clicked;dragging;position;constructor(){this.clicked=!1,this.dragging=!1,this.position=0}dragStart=e=>{this.position=e.clientX,this.clicked=!0};dragStop=()=>{window.requestAnimationFrame(()=>{this.dragging=!1,this.clicked=!1})};dragMove=(e,t)=>{let n=this.position-e.clientX,r=Math.abs(n)>5;this.clicked&&r&&(this.dragging=!0),this.dragging&&r&&(this.position=e.clientX,t(n))}},S=v.memo(()=>{let e=v.useContext(f),t=e.useIsVisible(`first`,!0);return(0,y.jsx)(g,{disabled:t,onClick:()=>e.scrollPrev(),testId:`left-arrow`,children:`Left`})}),C=v.memo(()=>{let e=v.useContext(f),t=e.useIsVisible(`last`,!1);return(0,y.jsx)(g,{disabled:t,onClick:()=>e.scrollNext(),testId:`right-arrow`,children:`Right`})}),w=i(`button`)(e=>({cursor:`pointer`,display:`flex`,flexDirection:`column`,justifyContent:`center`,marginBottom:`2px`,opacity:e.disabled?`0`:`1`,userSelect:`none`,borderRadius:`6px`,borderWidth:`1px`})),T=v.memo(({onClick:e,selected:t,title:n,itemId:r})=>{let i=v.useContext(f).useIsVisible(r,!0),a=v.useDeferredValue(i),o=v.useCallback(()=>e(r),[r,e]),s=v.useCallback(e=>{e.code===`Enter`&&o()},[o]);return(0,y.jsxs)(E,{"data-cy":r,onClick:o,onKeyDown:s,"data-testid":`card`,role:`button`,tabIndex:0,className:`card`,visible:a,selected:t,children:[(0,y.jsxs)(`div`,{className:`header`,children:[(0,y.jsx)(`div`,{children:n}),(0,y.jsxs)(`div`,{className:`visible`,children:[`visible: `,JSON.stringify(a)]}),(0,y.jsxs)(`div`,{className:`selected`,children:[`selected: `,JSON.stringify(!!t)]})]}),(0,y.jsx)(`div`,{className:`background`})]})},(e,t)=>e.selected===t.selected&&e.title===t.title),E=i(`div`)(e=>({border:`1px solid`,display:`inline-block`,margin:`0 10px`,width:`160px`,userSelect:`none`,borderRadius:`8px`,overflow:`hidden`,"& .header":{backgroundColor:`white`},"& .visible":{backgroundColor:e.visible?`transparent`:`gray`},"& .background":{backgroundColor:e.selected?`green`:`bisque`,height:`200px`}})),D=e=>`test${e}`,O=e=>Array(e).fill(0).map((e,t)=>({id:D(t)})),h.__docgenInfo={description:``,methods:[],displayName:`Performance`}})))()}var A;function j(){return(j=t((()=>{A=`import 'react-horizontal-scrolling-menu/dist/styles.css';

import styled from '@emotion/styled';
import React from 'react';
import {
  type publicApiType,
  ScrollMenu,
  VisibilityContext,
} from 'react-horizontal-scrolling-menu';

const ITEMS = 5000;

export function Performance() {
  const [items] = React.useState(() => getItems(ITEMS));
  const [selected, setSelected] = React.useState<string[]>([]);

  // NOTE: for drag by mouse
  const dragState = React.useRef(new DragDealer());

  const handleDrag = React.useCallback(
    ({ scrollContainer }: publicApiType) =>
      (ev: React.MouseEvent) =>
        dragState.current.dragMove(ev, (posDiff) => {
          if (scrollContainer.current) {
            scrollContainer.current.scrollLeft += posDiff;
          }
        }),
    [],
  );

  const onMouseDown = React.useCallback(
    () => dragState.current.dragStart,
    [dragState],
  );
  const onMouseUp = React.useCallback(
    () => dragState.current.dragStop,
    [dragState],
  );

  const handleItemClick = React.useCallback((itemId: string) => {
    if (dragState.current.dragging) {
      return false;
    }

    setSelected((currentSelected: string[]) =>
      currentSelected.includes(itemId)
        ? currentSelected.filter((el) => el !== itemId)
        : currentSelected.concat(itemId),
    );
  }, []);

  return (
    <>
      <div style={{ marginBottom: '50px' }}>{ITEMS} items and still fast!</div>
      <div onMouseLeave={() => dragState.current.dragStop()}>
        <ScrollMenu
          LeftArrow={LeftArrow}
          RightArrow={RightArrow}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onMouseMove={handleDrag}
          onWheel={onWheel}
          // better for performance
          noPolyfill={true}
        >
          {items.map(({ id }) => (
            <Card
              title={id}
              itemId={id} // NOTE: itemId is required for track items
              key={id}
              onClick={handleItemClick}
              selected={selected.includes(id)}
            />
          ))}
        </ScrollMenu>
      </div>
    </>
  );
}
export default Performance;

class DragDealer {
  clicked: boolean;
  dragging: boolean;
  position: number;

  constructor() {
    this.clicked = false;
    this.dragging = false;
    this.position = 0;
  }

  public dragStart = (ev: React.MouseEvent) => {
    this.position = ev.clientX;
    this.clicked = true;
  };

  public dragStop = () => {
    window.requestAnimationFrame(() => {
      this.dragging = false;
      this.clicked = false;
    });
  };

  public dragMove = (ev: React.MouseEvent, cb: (posDiff: number) => void) => {
    const newDiff = this.position - ev.clientX;

    const movedEnough = Math.abs(newDiff) > 5;

    if (this.clicked && movedEnough) {
      this.dragging = true;
    }

    if (this.dragging && movedEnough) {
      this.position = ev.clientX;
      cb(newDiff);
    }
  };
}

const LeftArrow = React.memo(() => {
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
});

const RightArrow = React.memo(() => {
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
});

function Arrow({
  children,
  disabled,
  onClick,
  testId,
}: {
  children: React.ReactNode;
  disabled: boolean;
  onClick: VoidFunction;
  testId: string;
}) {
  return (
    <ArrowButton disabled={disabled} onClick={onClick} data-testid={testId}>
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

const Card = React.memo(
  ({
    onClick,
    selected,
    title,
    itemId,
  }: {
    onClick: (itemId: string) => void;
    selected: boolean;
    title: string;
    itemId: string;
  }) => {
    const visibility = React.useContext<publicApiType>(VisibilityContext);
    const isVisible = visibility.useIsVisible(itemId, true);
    const isVisibleDeffered = React.useDeferredValue(isVisible);
    const handleClick = React.useCallback(
      () => onClick(itemId),
      [itemId, onClick],
    );
    const onKeyDown = React.useCallback(
      (ev: React.KeyboardEvent) => {
        ev.code === 'Enter' && handleClick();
      },
      [handleClick],
    );

    return (
      <CardBody
        data-cy={itemId}
        onClick={handleClick}
        onKeyDown={onKeyDown}
        data-testid="card"
        role="button"
        tabIndex={0}
        className="card"
        visible={isVisibleDeffered}
        selected={selected}
      >
        <div className="header">
          <div>{title}</div>
          <div className="visible">
            visible: {JSON.stringify(isVisibleDeffered)}
          </div>
          <div className="selected">selected: {JSON.stringify(!!selected)}</div>
        </div>
        <div className="background" />
      </CardBody>
    );
  },
  (prevProps, nextProps) =>
    prevProps.selected === nextProps.selected &&
    prevProps.title === nextProps.title,
);

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

const getItems = (count: number) =>
  Array(count)
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
`})))()}var M,N,P;function F(){return(F=t((()=>{p(),d(),s(),k(),j(),M={title:`Examples/Performance`,component:h},N={},m(N,{code:A,availableImports:l,modifyEditor:a}),N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{}`,...N.parameters?.docs?.source}}},P=[`Performance`]})))()}F();export{N as Performance,P as __namedExportsOrder,M as default};