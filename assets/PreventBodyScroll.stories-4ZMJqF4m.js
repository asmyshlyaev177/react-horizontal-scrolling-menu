import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{_ as i,a,g as o,i as s,n as c,o as l,r as u,s as d,t as f,v as p,y as m}from"./dist-FrB8AX0O.js";import{n as h,t as g}from"./SizeWrapper-0dCO968y.js";import{a as _,t as v}from"./test-CHHlmwCw.js";function y(){let e=E.useCallback(e=>{e?.preventDefault?.()},[]),t=E.useCallback(()=>{document&&document.removeEventListener(`wheel`,e,!1)},[e]),n=E.useCallback(()=>{document&&document.addEventListener(`wheel`,e,{passive:!1})},[e]);return E.useEffect(()=>t,[t]),{disableScroll:n,enableScroll:t}}function b(){let{disableScroll:e,enableScroll:t}=y(),[n]=E.useState(()=>M()),[r,i]=E.useState([]),a=e=>!!r.find(t=>t===e),o=e=>{let t=a(e);i(n=>t?n.filter(t=>t!==e):n.concat(e))};return(0,D.jsx)(`div`,{style:{height:`200vh`},children:(0,D.jsx)(`div`,{children:(0,D.jsx)(O,{onMouseEnter:e,onMouseLeave:t,children:(0,D.jsx)(u,{LeftArrow:x,RightArrow:S,onWheel:T,children:n.map(({id:e})=>(0,D.jsx)(w,{title:e,itemId:e,onClick:()=>o(e),selected:a(e)},e))})})})})}function x(){let e=E.useContext(f),t=e.useLeftArrowVisible();return(0,D.jsx)(C,{disabled:t,onClick:()=>e.scrollPrev(),testId:`left-arrow`,children:`Left`})}function S(){let e=E.useContext(f),t=e.useRightArrowVisible();return(0,D.jsx)(C,{disabled:t,onClick:()=>e.scrollNext(),testId:`right-arrow`,children:`Right`})}function C({children:e,disabled:t,onClick:n,className:r,testId:i}){return(0,D.jsx)(k,{disabled:t,onClick:n,className:`arrow-${r}`,"data-testid":i,children:e})}function w({onClick:e,selected:t,title:n,itemId:r}){let i=E.useContext(f),a=i.useIsVisible(r,!0);return(0,D.jsxs)(A,{"data-cy":r,onClick:()=>e(i),onKeyDown:t=>{t.code===`Enter`&&e(i)},"data-testid":`card`,role:`button`,tabIndex:0,className:`card`,visible:a,selected:t,children:[(0,D.jsxs)(`div`,{className:`header`,children:[(0,D.jsx)(`div`,{children:n}),(0,D.jsxs)(`div`,{className:`visible`,children:[`visible: `,JSON.stringify(a)]}),(0,D.jsxs)(`div`,{className:`selected`,children:[`selected: `,JSON.stringify(!!t)]})]}),(0,D.jsx)(`div`,{className:`background`})]})}function T(e,t){if(Math.abs(t.deltaX)!==0||Math.abs(t.deltaY)<15){t.stopPropagation();return}t.deltaY<0?e.scrollNext():e.scrollPrev()}var E,D,O,k,A,j,M;function N(){return(N=t((()=>{o(),E=e(n(),1),c(),D=r(),O=i(`div`)({"& .react-horizontal-scrolling-menu--scroll-container::-webkit-scrollbar":{display:`none`},"& .react-horizontal-scrolling-menu--scroll-container":{scrollbarWidth:`none`,"-ms-overflow-style":`none`}}),k=i(`button`)(e=>({cursor:`pointer`,display:`flex`,flexDirection:`column`,justifyContent:`center`,marginBottom:`2px`,opacity:e.disabled?`0`:`1`,userSelect:`none`,borderRadius:`6px`,borderWidth:`1px`})),A=i(`div`)(e=>({border:`1px solid`,display:`inline-block`,margin:`0 10px`,width:`160px`,userSelect:`none`,borderRadius:`8px`,overflow:`hidden`,"& .header":{backgroundColor:`white`},"& .visible":{backgroundColor:e.visible?`transparent`:`gray`},"& .background":{backgroundColor:e.selected?`green`:`bisque`,height:`200px`}})),j=e=>`test${e}`,M=()=>Array(10).fill(0).map((e,t)=>({id:j(t)})),b.__docgenInfo={description:``,methods:[],displayName:`PreventBodyScroll`}})))()}var P;function F(){return(F=t((()=>{P=`import 'react-horizontal-scrolling-menu/dist/styles.css';

import styled from '@emotion/styled';
import React from 'react';
import {
  type publicApiType,
  ScrollMenu,
  VisibilityContext,
} from 'react-horizontal-scrolling-menu';

function usePreventBodyScroll() {
  const preventDefault = React.useCallback((ev: Event) => {
    ev?.preventDefault?.();
  }, []);

  const enableScroll = React.useCallback(() => {
    document && document.removeEventListener('wheel', preventDefault, false);
  }, [preventDefault]);
  const disableScroll = React.useCallback(() => {
    document &&
      document.addEventListener('wheel', preventDefault, {
        passive: false,
      });
  }, [preventDefault]);

  React.useEffect(() => {
    return enableScroll;
  }, [enableScroll]);

  return { disableScroll, enableScroll };
}

export function PreventBodyScroll() {
  const { disableScroll, enableScroll } = usePreventBodyScroll();

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
    <div style={{ height: '200vh' }}>
      <div>
        <NoScrollbar onMouseEnter={disableScroll} onMouseLeave={enableScroll}>
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
      </div>
    </div>
  );
}

export default PreventBodyScroll;

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
`})))()}var I,L,R,z,B;function V(){return(V=t((()=>{n(),p(),d(),s(),h(),_(),N(),F(),I=r(),L={title:`Examples/PreventBodyScroll`,component:b,decorators:[e=>(0,I.jsx)(g,{children:(0,I.jsx)(e,{})})]},R={},m(R,{code:P,availableImports:l,modifyEditor:a}),z={...v(),tags:[`test-only`]},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  ...ScrollTest(),
  tags: ['test-only']
}`,...z.parameters?.docs?.source}}},B=[`PreventBodyScroll`,`Test`]})))()}V();export{R as PreventBodyScroll,z as Test,B as __namedExportsOrder,L as default};