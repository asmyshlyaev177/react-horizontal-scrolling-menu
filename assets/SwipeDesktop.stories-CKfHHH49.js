import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{t as n}from"./react-B82b4cNX.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{a as i,c as a,d as o,f as s,i as c,m as l,n as u,o as d,p as f,r as p,s as m,t as h}from"./dist-C6j6OFUi.js";import{n as g,t as _}from"./SizeWrapper-BSaTbaJP.js";import{a as v,i as y,n as b}from"./test-BB-LPJmr.js";function x(){let[e]=D.useState(()=>P()),[t,n]=D.useState([]),r=e=>!!t.find(t=>t===e),i=e=>{let t=r(e);n(n=>t?n.filter(t=>t!==e):n.concat(e))},{onMouseDown:a,onMouseMove:o,onMouseUp:s}=k(),c=D.useRef(null);return D.useEffect(()=>{let e=e=>{e.preventDefault()},t=c.current?.scrollContainer.current;return t?.addEventListener(`touchmove`,e,{passive:!1}),()=>t?.removeEventListener(`touchmove`,e)},[c]),(0,O.jsx)(A,{children:(0,O.jsx)(p,{LeftArrow:S,RightArrow:C,onWheel:E,onMouseDown:a,onMouseMove:o,onMouseUp:s,apiRef:c,children:e.map(({id:e})=>(0,O.jsx)(T,{title:e,itemId:e,onClick:()=>i(e),selected:r(e)},e))})})}function S(){let e=D.useContext(h);return(0,O.jsx)(w,{disabled:e.useLeftArrowVisible(),onClick:()=>e.scrollPrev(),testId:`left-arrow`,children:`Left`})}function C(){let e=D.useContext(h);return(0,O.jsx)(w,{disabled:e.useRightArrowVisible(),onClick:()=>e.scrollNext(),testId:`right-arrow`,children:`Right`})}function w({children:e,disabled:t,onClick:n,className:r,testId:i}){return(0,O.jsx)(j,{disabled:t,onClick:n,className:`arrow-${r}`,"data-testid":i,children:e})}function T({onClick:e,selected:t,title:n,itemId:r}){let i=D.useContext(h),a=i.useIsVisible(r,!0);return(0,O.jsxs)(M,{"data-cy":r,onClick:()=>e(i),onKeyDown:t=>{t.code===`Enter`&&e(i)},"data-testid":`card`,role:`button`,tabIndex:0,className:`card`,visible:a,selected:t,children:[(0,O.jsxs)(`div`,{className:`header`,children:[(0,O.jsx)(`div`,{children:n}),(0,O.jsxs)(`div`,{className:`visible`,children:[`visible: `,JSON.stringify(a)]}),(0,O.jsxs)(`div`,{className:`selected`,children:[`selected: `,JSON.stringify(!!t)]})]}),(0,O.jsx)(`div`,{className:`background`})]})}function E(e,t){if(Math.abs(t.deltaX)!==0||Math.abs(t.deltaY)<15){t.stopPropagation();return}t.deltaY<0?e.scrollNext():e.scrollPrev()}var D,O,k,A,j,M,N,P,F=e((()=>{a(),o(),D=t(n(),1),u(),O=r(),k=()=>{let e=D.useRef({start:{x:0,y:0},end:{x:0,y:0}});return{onMouseDown:()=>t=>{e.current.start={x:t.clientX,y:t.clientY}},onMouseMove:()=>t=>{e.current.end={x:t.clientX,y:t.clientY}},onMouseUp:t=>()=>{let n=e.current.end.x-e.current.start.x,r=n<0&&Math.abs(n)>50,i=n>0&&Math.abs(n)>50;r&&t.scrollNext(),i&&t.scrollPrev()}}},A=s(`div`)({"&":{position:`relative`},"& .react-horizontal-scrolling-menu--scroll-container::-webkit-scrollbar":{display:`none`},"& .react-horizontal-scrolling-menu--scroll-container":{scrollbarWidth:`none`,"-ms-overflow-style":`none`}}),j=s(`button`)(e=>({cursor:`pointer`,display:`flex`,flexDirection:`column`,justifyContent:`center`,marginBottom:`2px`,opacity:e.disabled?`0`:`1`,userSelect:`none`,borderRadius:`6px`,borderWidth:`1px`})),M=s(`div`)(e=>({border:`1px solid`,display:`inline-block`,margin:`0 10px`,width:`160px`,userSelect:`none`,borderRadius:`8px`,overflow:`hidden`,"& .header":{backgroundColor:`white`},"& .visible":{backgroundColor:e.visible?`transparent`:`gray`},"& .background":{backgroundColor:e.selected?`green`:`bisque`,height:`200px`}})),N=e=>`test${e}`,P=()=>Array(20).fill(0).map((e,t)=>({id:N(t)})),x.__docgenInfo={description:``,methods:[],displayName:`SwipeDesktop`}})),I,L=e((()=>{I=`import 'react-horizontal-scrolling-menu/dist/styles.css';

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

  // NOTE: that ugly hack needed cause React v18 changed how it handle events
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
`})),R,z,B,V,H,U;e((()=>{n(),f(),m(),c(),g(),v(),F(),L(),R=r(),{within:z}=__STORYBOOK_MODULE_TEST__,B={title:`Examples/SwipeDesktop`,component:x,decorators:[e=>(0,R.jsx)(_,{children:(0,R.jsx)(e,{})})]},V={},l(V,{code:I,availableImports:d,modifyEditor:i}),H={play:async({canvasElement:e})=>{let t=new b(z(e),{leftArrow:``,rightArrow:``});await t.isReady();let n=(await t.getVisibleCards()).slice(-1)[0];await y(n,{delta:{x:-100,y:0},duration:150,steps:5}),await t.expectVisibleCards([`test3`,`test4`,`test5`]),await y(n,{delta:{x:100,y:0},duration:150,steps:5}),await t.expectVisibleCards([`test0`,`test1`,`test2`])}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}},U=[`SwipeDesktop`,`Test`]}))();export{V as SwipeDesktop,H as Test,U as __namedExportsOrder,B as default};