import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{t as n}from"./react-B82b4cNX.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{a as i,c as a,d as o,f as s,i as c,m as l,n as u,o as d,p as f,r as p,s as m,t as h}from"./dist-RpNr9gky.js";import{n as g,t as _}from"./SizeWrapper-Dd6eezdz.js";import{a as v,i as y,n as b,t as x}from"./test-BB-LPJmr.js";function S(){let[e]=O.useState(()=>F()),[t,n]=O.useState([]),r=O.useRef(new A),i=({scrollContainer:e})=>t=>r.current.dragMove(t,t=>{e.current&&(e.current.scrollLeft+=t)}),a=O.useCallback(()=>r.current.dragStart,[r]),o=O.useCallback(()=>r.current.dragStop,[r]),s=e=>!!t.find(t=>t===e),c=e=>{if(r.current.dragging)return!1;let t=s(e);n(n=>t?n.filter(t=>t!==e):n.concat(e))};return(0,k.jsx)(j,{onMouseLeave:()=>r.current.dragStop(),children:(0,k.jsx)(p,{LeftArrow:C,RightArrow:w,onMouseDown:a,onMouseUp:o,onMouseMove:i,onWheel:D,children:e.map(({id:e})=>(0,k.jsx)(E,{title:e,itemId:e,onClick:()=>c(e),selected:s(e)},e))})})}function C(){let e=O.useContext(h);return(0,k.jsx)(T,{disabled:e.useLeftArrowVisible(),onClick:()=>e.scrollPrev(),testId:`left-arrow`,children:`Left`})}function w(){let e=O.useContext(h);return(0,k.jsx)(T,{disabled:e.useRightArrowVisible(),onClick:()=>e.scrollNext(),testId:`right-arrow`,children:`Right`})}function T({children:e,disabled:t,onClick:n,className:r,testId:i}){return(0,k.jsx)(M,{disabled:t,onClick:n,className:`arrow-${r}`,"data-testid":i,children:e})}function E({onClick:e,selected:t,title:n,itemId:r}){let i=O.useContext(h),a=i.useIsVisible(r,!0);return(0,k.jsxs)(N,{"data-cy":r,onClick:()=>e(i),onKeyDown:t=>{t.code===`Enter`&&e(i)},"data-testid":`card`,role:`button`,tabIndex:0,className:`card`,visible:a,selected:t,children:[(0,k.jsxs)(`div`,{className:`header`,children:[(0,k.jsx)(`div`,{children:n}),(0,k.jsxs)(`div`,{className:`visible`,children:[`visible: `,JSON.stringify(a)]}),(0,k.jsxs)(`div`,{className:`selected`,children:[`selected: `,JSON.stringify(!!t)]})]}),(0,k.jsx)(`div`,{className:`background`})]})}function D(e,t){if(Math.abs(t.deltaX)!==0||Math.abs(t.deltaY)<15){t.stopPropagation();return}t.deltaY<0?e.scrollNext():e.scrollPrev()}var O,k,A,j,M,N,P,F,I=e((()=>{a(),o(),O=t(n(),1),u(),k=r(),A=class{clicked;dragging;position;constructor(){this.clicked=!1,this.dragging=!1,this.position=0}dragStart=e=>{this.position=e.clientX,this.clicked=!0};dragStop=()=>{window.requestAnimationFrame(()=>{this.dragging=!1,this.clicked=!1})};dragMove=(e,t)=>{let n=this.position-e.clientX,r=Math.abs(n)>5;this.clicked&&r&&(this.dragging=!0),this.dragging&&r&&(this.position=e.clientX,t(n))}},j=s(`div`)({"& .react-horizontal-scrolling-menu--scroll-container::-webkit-scrollbar":{display:`none`},"& .react-horizontal-scrolling-menu--scroll-container":{scrollbarWidth:`none`,"-ms-overflow-style":`none`}}),M=s(`button`)(e=>({cursor:`pointer`,display:`flex`,flexDirection:`column`,justifyContent:`center`,marginBottom:`2px`,opacity:e.disabled?`0`:`1`,userSelect:`none`,borderRadius:`6px`,borderWidth:`1px`})),N=s(`div`)(e=>({border:`1px solid`,display:`inline-block`,margin:`0 10px`,width:`160px`,userSelect:`none`,borderRadius:`8px`,overflow:`hidden`,"& .header":{backgroundColor:`white`},"& .visible":{backgroundColor:e.visible?`transparent`:`gray`},"& .background":{backgroundColor:e.selected?`green`:`bisque`,height:`200px`}})),P=e=>`test${e}`,F=()=>Array(10).fill(0).map((e,t)=>({id:P(t)})),S.__docgenInfo={description:``,methods:[],displayName:`MouseDrag`}})),L,R=e((()=>{L=`import 'react-horizontal-scrolling-menu/dist/styles.css';

import styled from '@emotion/styled';
import React from 'react';
import {
  type publicApiType,
  ScrollMenu,
  VisibilityContext,
} from 'react-horizontal-scrolling-menu';

export function MouseDrag() {
  const [items] = React.useState(() => getItems());
  const [selected, setSelected] = React.useState<string[]>([]);

  // NOTE: for drag by mouse
  const dragState = React.useRef(new DragDealer());

  const handleDrag =
    ({ scrollContainer }: publicApiType) =>
    (ev: React.MouseEvent) =>
      dragState.current.dragMove(ev, (posDiff) => {
        if (scrollContainer.current) {
          scrollContainer.current.scrollLeft += posDiff;
        }
      });
  const onMouseDown = React.useCallback(
    () => dragState.current.dragStart,
    [dragState],
  );
  const onMouseUp = React.useCallback(
    () => dragState.current.dragStop,
    [dragState],
  );

  const isItemSelected = (id: string): boolean =>
    !!selected.find((el) => el === id);

  const handleItemClick = (itemId: string) => {
    if (dragState.current.dragging) {
      return false;
    }
    const itemSelected = isItemSelected(itemId);

    setSelected((currentSelected: string[]) =>
      itemSelected
        ? currentSelected.filter((el) => el !== itemId)
        : currentSelected.concat(itemId),
    );
  };

  return (
    <NoScrollbar onMouseLeave={() => dragState.current.dragStop()}>
      <ScrollMenu
        LeftArrow={LeftArrow}
        RightArrow={RightArrow}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseMove={handleDrag}
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
export default MouseDrag;

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
`})),z,B,V,H,U,W,G,K;e((()=>{n(),f(),m(),c(),g(),v(),I(),R(),z=r(),{expect:B,within:V}=__STORYBOOK_MODULE_TEST__,H={title:`Examples/MouseDrag`,component:S,decorators:[e=>(0,z.jsx)(_,{children:(0,z.jsx)(e,{})})]},U={},l(U,{code:L,availableImports:d,modifyEditor:i}),W=x(),G={play:async({canvasElement:e})=>{let t=new b(V(e),{leftArrow:``,rightArrow:``});await t.isReady();let n=(await t.getVisibleCards()).slice(-1)[0];B(await t.getSelectedCardsKeys()).toHaveLength(0),await n.click(),B(await t.getSelectedCards()).toHaveLength(1),await y(n,{delta:{x:-350,y:0}}),await t.expectVisibleCards([`test2`,`test3`,`test4`])}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`ScrollTest()`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const testObj = new TestObj(canvas, {
      leftArrow: '',
      rightArrow: ''
    });
    // Gates the \`getVisibleCards()\` read below: it is a snapshot, not a
    // retrying assertion, so the observer must have run first.
    await testObj.isReady();
    const lastCard = (await testObj.getVisibleCards()).slice(-1)[0];
    expect(await testObj.getSelectedCardsKeys()).toHaveLength(0);
    await lastCard.click();
    expect(await testObj.getSelectedCards()).toHaveLength(1);
    await drag(lastCard, {
      delta: {
        x: -350,
        y: 0
      }
    });
    await testObj.expectVisibleCards(['test2', 'test3', 'test4']);
  }
}`,...G.parameters?.docs?.source}}},K=[`MouseDrag`,`Test`,`TestDrag`]}))();export{U as MouseDrag,W as Test,G as TestDrag,K as __namedExportsOrder,H as default};