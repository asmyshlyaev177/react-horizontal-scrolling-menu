import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{t as n}from"./react-B82b4cNX.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{a as i,c as a,d as o,f as s,i as c,m as l,n as u,o as d,p as f,r as p,s as m,t as h}from"./dist-3zXSRqsZ.js";function g(){let[e]=y.useState(()=>k(x)),[t,n]=y.useState([]),r=y.useRef(new S),i=y.useCallback(({scrollContainer:e})=>t=>r.current.dragMove(t,t=>{e.current&&(e.current.scrollLeft+=t)}),[]),a=y.useCallback(()=>r.current.dragStart,[r]),o=y.useCallback(()=>r.current.dragStop,[r]),s=y.useCallback(e=>{if(r.current.dragging)return!1;n(t=>t.includes(e)?t.filter(t=>t!==e):t.concat(e))},[]);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)(`div`,{style:{marginBottom:`50px`},children:[x,` items and still fast!`]}),(0,b.jsx)(`div`,{onMouseLeave:()=>r.current.dragStop(),children:(0,b.jsx)(p,{LeftArrow:C,RightArrow:w,onMouseDown:a,onMouseUp:o,onMouseMove:i,onWheel:v,noPolyfill:!0,children:e.map(({id:e})=>(0,b.jsx)(E,{title:e,itemId:e,onClick:s,selected:t.includes(e)},e))})})]})}function _({children:e,disabled:t,onClick:n,testId:r}){return(0,b.jsx)(T,{disabled:t,onClick:n,"data-testid":r,children:e})}function v(e,t){if(Math.abs(t.deltaX)!==0||Math.abs(t.deltaY)<15){t.stopPropagation();return}t.deltaY<0?e.scrollNext():e.scrollPrev()}var y,b,x,S,C,w,T,E,D,O,k,A=e((()=>{a(),o(),y=t(n(),1),u(),b=r(),x=5e3,S=class{clicked;dragging;position;constructor(){this.clicked=!1,this.dragging=!1,this.position=0}dragStart=e=>{this.position=e.clientX,this.clicked=!0};dragStop=()=>{window.requestAnimationFrame(()=>{this.dragging=!1,this.clicked=!1})};dragMove=(e,t)=>{let n=this.position-e.clientX,r=Math.abs(n)>5;this.clicked&&r&&(this.dragging=!0),this.dragging&&r&&(this.position=e.clientX,t(n))}},C=y.memo(()=>{let e=y.useContext(h);return(0,b.jsx)(_,{disabled:e.useIsVisible(`first`,!0),onClick:()=>e.scrollPrev(),testId:`left-arrow`,children:`Left`})}),w=y.memo(()=>{let e=y.useContext(h);return(0,b.jsx)(_,{disabled:e.useIsVisible(`last`,!1),onClick:()=>e.scrollNext(),testId:`right-arrow`,children:`Right`})}),T=s(`button`)(e=>({cursor:`pointer`,display:`flex`,flexDirection:`column`,justifyContent:`center`,marginBottom:`2px`,opacity:e.disabled?`0`:`1`,userSelect:`none`,borderRadius:`6px`,borderWidth:`1px`})),E=y.memo(({onClick:e,selected:t,title:n,itemId:r})=>{let i=y.useContext(h).useIsVisible(r,!0),a=y.useDeferredValue(i),o=y.useCallback(()=>e(r),[r,e]),s=y.useCallback(e=>{e.code===`Enter`&&o()},[o]);return(0,b.jsxs)(D,{"data-cy":r,onClick:o,onKeyDown:s,"data-testid":`card`,role:`button`,tabIndex:0,className:`card`,visible:a,selected:t,children:[(0,b.jsxs)(`div`,{className:`header`,children:[(0,b.jsx)(`div`,{children:n}),(0,b.jsxs)(`div`,{className:`visible`,children:[`visible: `,JSON.stringify(a)]}),(0,b.jsxs)(`div`,{className:`selected`,children:[`selected: `,JSON.stringify(!!t)]})]}),(0,b.jsx)(`div`,{className:`background`})]})},(e,t)=>e.selected===t.selected&&e.title===t.title),D=s(`div`)(e=>({border:`1px solid`,display:`inline-block`,margin:`0 10px`,width:`160px`,userSelect:`none`,borderRadius:`8px`,overflow:`hidden`,"& .header":{backgroundColor:`white`},"& .visible":{backgroundColor:e.visible?`transparent`:`gray`},"& .background":{backgroundColor:e.selected?`green`:`bisque`,height:`200px`}})),O=e=>`test${e}`,k=e=>Array(e).fill(0).map((e,t)=>({id:O(t)})),g.__docgenInfo={description:``,methods:[],displayName:`Performance`}})),j,M=e((()=>{j=`import 'react-horizontal-scrolling-menu/dist/styles.css';

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
`})),N,P,F,I;e((()=>{n(),f(),m(),c(),A(),M(),N=r(),P={title:`Examples/Performance`,component:g,decorators:[e=>(0,N.jsx)(e,{})]},F={},l(F,{code:j,availableImports:d,modifyEditor:i}),F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{}`,...F.parameters?.docs?.source}}},I=[`Performance`]}))();export{F as Performance,I as __namedExportsOrder,P as default};