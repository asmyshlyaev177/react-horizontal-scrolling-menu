import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{_ as i,a,g as o,i as s,n as c,o as l,r as u,s as d,t as f,v as p,y as m}from"./dist-C8yMuzvZ.js";import{n as h,t as g}from"./SizeWrapper-BzDG7ebJ.js";import{a as _,i as v,n as y}from"./test-CHHlmwCw.js";function b(){let[e]=E.useState(()=>N()),[t,n]=E.useState([]),r=e=>!!t.find(t=>t===e),i=e=>{let t=r(e);n(n=>t?n.filter(t=>t!==e):n.concat(e))},{onMouseDown:a,onMouseMove:o,onMouseUp:s}=O(),c=E.useRef(null);return E.useEffect(()=>{let e=e=>{e.preventDefault()},t=c.current?.scrollContainer.current;return t?.addEventListener(`touchmove`,e,{passive:!1}),()=>t?.removeEventListener(`touchmove`,e)},[c]),(0,D.jsx)(k,{children:(0,D.jsx)(u,{LeftArrow:x,RightArrow:S,onWheel:T,onMouseDown:a,onMouseMove:o,onMouseUp:s,apiRef:c,children:e.map(({id:e})=>(0,D.jsx)(w,{title:e,itemId:e,onClick:()=>i(e),selected:r(e)},e))})})}function x(){let e=E.useContext(f),t=e.useLeftArrowVisible();return(0,D.jsx)(C,{disabled:t,onClick:()=>e.scrollPrev(),testId:`left-arrow`,children:`Left`})}function S(){let e=E.useContext(f),t=e.useRightArrowVisible();return(0,D.jsx)(C,{disabled:t,onClick:()=>e.scrollNext(),testId:`right-arrow`,children:`Right`})}function C({children:e,disabled:t,onClick:n,className:r,testId:i}){return(0,D.jsx)(A,{disabled:t,onClick:n,className:`arrow-${r}`,"data-testid":i,children:e})}function w({onClick:e,selected:t,title:n,itemId:r}){let i=E.useContext(f),a=i.useIsVisible(r,!0);return(0,D.jsxs)(j,{"data-cy":r,onClick:()=>e(i),onKeyDown:t=>{t.code===`Enter`&&e(i)},"data-testid":`card`,role:`button`,tabIndex:0,className:`card`,visible:a,selected:t,children:[(0,D.jsxs)(`div`,{className:`header`,children:[(0,D.jsx)(`div`,{children:n}),(0,D.jsxs)(`div`,{className:`visible`,children:[`visible: `,JSON.stringify(a)]}),(0,D.jsxs)(`div`,{className:`selected`,children:[`selected: `,JSON.stringify(!!t)]})]}),(0,D.jsx)(`div`,{className:`background`})]})}function T(e,t){if(Math.abs(t.deltaX)!==0||Math.abs(t.deltaY)<15){t.stopPropagation();return}t.deltaY<0?e.scrollNext():e.scrollPrev()}var E,D,O,k,A,j,M,N;function P(){return(P=t((()=>{o(),E=e(n(),1),c(),D=r(),O=()=>{let e=E.useRef({start:{x:0,y:0},end:{x:0,y:0}});return{onMouseDown:()=>t=>{e.current.start={x:t.clientX,y:t.clientY}},onMouseMove:()=>t=>{e.current.end={x:t.clientX,y:t.clientY}},onMouseUp:t=>()=>{let n=e.current.end.x-e.current.start.x,r=n<0&&Math.abs(n)>50,i=n>0&&Math.abs(n)>50;r&&t.scrollNext(),i&&t.scrollPrev()}}},k=i(`div`)({"&":{position:`relative`},"& .react-horizontal-scrolling-menu--scroll-container::-webkit-scrollbar":{display:`none`},"& .react-horizontal-scrolling-menu--scroll-container":{scrollbarWidth:`none`,"-ms-overflow-style":`none`}}),A=i(`button`)(e=>({cursor:`pointer`,display:`flex`,flexDirection:`column`,justifyContent:`center`,marginBottom:`2px`,opacity:e.disabled?`0`:`1`,userSelect:`none`,borderRadius:`6px`,borderWidth:`1px`})),j=i(`div`)(e=>({border:`1px solid`,display:`inline-block`,margin:`0 10px`,width:`160px`,userSelect:`none`,borderRadius:`8px`,overflow:`hidden`,"& .header":{backgroundColor:`white`},"& .visible":{backgroundColor:e.visible?`transparent`:`gray`},"& .background":{backgroundColor:e.selected?`green`:`bisque`,height:`200px`}})),M=e=>`test${e}`,N=()=>Array(20).fill(0).map((e,t)=>({id:M(t)})),b.__docgenInfo={description:``,methods:[],displayName:`SwipeDesktop`}})))()}var F;function I(){return(I=t((()=>{F=`import 'react-horizontal-scrolling-menu/dist/styles.css';

import styled from '@emotion/styled';
import React from 'react';
import {
  type publicApiType,
  ScrollMenu,
  VisibilityContext,
} from 'react-horizontal-scrolling-menu';

export function SwipeDesktop() {
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

  const { onMouseDown, onMouseMove, onMouseUp } = useSwipe();

  const ref = React.useRef<publicApiType>(null);

  // React 18+ attaches touchmove listeners as passive, so preventDefault only
  // works from a non-passive listener added manually to the scroll container.
  React.useEffect(() => {
    const onTouchMove = (ev: TouchEvent) => {
      ev.preventDefault();
    };
    const node = ref.current?.scrollContainer.current;
    node?.addEventListener('touchmove', onTouchMove, { passive: false });

    return () => node?.removeEventListener('touchmove', onTouchMove);
  }, [ref]);

  return (
    <NoScrollbar>
      <ScrollMenu
        LeftArrow={LeftArrow}
        RightArrow={RightArrow}
        onWheel={onWheel}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        apiRef={ref}
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

export default SwipeDesktop;

export const useSwipe = () => {
  const pos = React.useRef({ start: { x: 0, y: 0 }, end: { x: 0, y: 0 } });

  // the required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 50;

  const onMouseDown = () => (ev: React.MouseEvent) => {
    pos.current.start = { x: ev.clientX, y: ev.clientY };
  };

  const onMouseMove = () => (ev: React.MouseEvent) => {
    pos.current.end = { x: ev.clientX, y: ev.clientY };
  };

  const onMouseUp = (apiObj: publicApiType) => () => {
    // disable it for native touch screen devices
    // if ('ontouchstart' in window) { return false }

    const horDiff = pos.current.end.x - pos.current.start.x;
    // const vertDiff = pos.current.end.y - pos.current.start.y;
    const toLeft = horDiff < 0 && Math.abs(horDiff) > minSwipeDistance;
    const toRight = horDiff > 0 && Math.abs(horDiff) > minSwipeDistance;

    // for vertical menu
    // const toTop =  vertDiff < 0 && Math.abs(vertDiff) > minSwipeDistance;
    // const toBottom = vertDiff > 0 && Math.abs(vertDiff) > minSwipeDistance;

    if (toLeft) {
      apiObj.scrollNext();
    }
    if (toRight) {
      apiObj.scrollPrev();
    }
  };

  return { onMouseDown, onMouseMove, onMouseUp };
};

const NoScrollbar = styled('div')({
  '&': {
    position: 'relative',
  },
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
  Array(20)
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
`})))()}var L,R,z,B,V,H;function U(){return(U=t((()=>{n(),p(),d(),s(),h(),_(),P(),I(),L=r(),{within:R}=__STORYBOOK_MODULE_TEST__,z={title:`Examples/SwipeDesktop`,component:b,decorators:[e=>(0,L.jsx)(g,{children:(0,L.jsx)(e,{})})]},B={},m(B,{code:F,availableImports:l,modifyEditor:a}),V={tags:[`test-only`],play:async({canvasElement:e})=>{let t=R(e),n=new y(t,{leftArrow:``,rightArrow:``});await n.isReady();let r=(await n.getVisibleCards()).slice(-1)[0];await v(r,{delta:{x:-100,y:0},duration:150,steps:5}),await n.expectVisibleCards([`test3`,`test4`,`test5`]),await v(r,{delta:{x:100,y:0},duration:150,steps:5}),await n.expectVisibleCards([`test0`,`test1`,`test2`])}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  tags: ['test-only'],
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
    await drag(lastCard, {
      delta: {
        x: -100,
        y: 0
      },
      duration: 150,
      steps: 5
    });
    await testObj.expectVisibleCards(['test3', 'test4', 'test5']);
    await drag(lastCard, {
      delta: {
        x: 100,
        y: 0
      },
      duration: 150,
      steps: 5
    });
    await testObj.expectVisibleCards(['test0', 'test1', 'test2']);
  }
}`,...V.parameters?.docs?.source}}},H=[`SwipeDesktop`,`Test`]})))()}U();export{B as SwipeDesktop,V as Test,H as __namedExportsOrder,z as default};