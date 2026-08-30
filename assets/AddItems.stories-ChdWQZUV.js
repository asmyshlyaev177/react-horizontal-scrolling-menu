import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{_ as i,a,g as o,i as s,n as c,o as l,r as u,s as d,t as f,v as p,y as m}from"./dist-oGMj_wFx.js";import{n as h,t as g}from"./SizeWrapper-D7kux-98.js";function _(){let[e,t]=C.useState(()=>k()),[n,r]=C.useState([]),i=e=>!!n.find(t=>t===e),a=e=>{let t=i(e);r(n=>t?n.filter(t=>t!==e):n.concat(e))},[o,s]=C.useState(!1),c=()=>{if(o||e.length>24)return!1;s(!0);let n=e.concat([,,,,,].fill(0).map((t,n)=>({id:O(e.length+n)})));new Promise(e=>{setTimeout(()=>e(t(n)),1e3)}).finally(()=>s(!1))};return(0,w.jsx)(`div`,{children:(0,w.jsx)(`div`,{children:(0,w.jsx)(T,{children:(0,w.jsxs)(u,{LeftArrow:y,RightArrow:(0,w.jsx)(b,{disabled:e.length>=24}),onWheel:A,onUpdate:e=>{e?.items?.last?.()?.visible&&!o&&c()},children:[e.map(({id:e})=>(0,w.jsx)(S,{title:e,itemId:e,onClick:()=>a(e),selected:i(e)},e)),o&&(0,w.jsx)(v,{itemId:`loader`},`loader`)]})})})})}function v({itemId:e}){let t=C.useRef(null);return C.useEffect(()=>{t.current?.scrollIntoView()},[t]),(0,w.jsx)(`div`,{ref:t,children:`Loading...`})}function y(){let e=C.useContext(f),t=e.useLeftArrowVisible();return(0,w.jsx)(x,{disabled:t,onClick:()=>e.scrollPrev(),testId:`left-arrow`,children:`Left`})}function b({disabled:e}){let t=C.useContext(f),n=t.useIsVisible(`last`,!1);return(0,w.jsx)(x,{disabled:e&&n,onClick:()=>t.scrollNext(),testId:`right-arrow`,children:`Right`})}function x({children:e,disabled:t,onClick:n,className:r,testId:i}){return(0,w.jsx)(E,{disabled:t,onClick:n,className:`arrow-${r}`,"data-testid":i,children:e})}function S({onClick:e,selected:t,title:n,itemId:r}){let i=C.useContext(f),a=i.useIsVisible(r,!0);return(0,w.jsxs)(D,{"data-cy":r,onClick:()=>e(i),onKeyDown:t=>{t.code===`Enter`&&e(i)},"data-testid":`card`,role:`button`,tabIndex:0,className:`card`,visible:a,selected:t,children:[(0,w.jsxs)(`div`,{className:`header`,children:[(0,w.jsx)(`div`,{children:n}),(0,w.jsxs)(`div`,{className:`visible`,children:[`visible: `,JSON.stringify(a)]}),(0,w.jsxs)(`div`,{className:`selected`,children:[`selected: `,JSON.stringify(!!t)]})]}),(0,w.jsx)(`div`,{className:`background`})]})}var C,w,T,E,D,O,k,A;function j(){return(j=t((()=>{o(),C=e(n(),1),c(),w=r(),T=i(`div`)({"& .react-horizontal-scrolling-menu--scroll-container::-webkit-scrollbar":{display:`none`},"& .react-horizontal-scrolling-menu--scroll-container":{scrollbarWidth:`none`,"-ms-overflow-style":`none`}}),E=i(`button`)(e=>({cursor:`pointer`,display:`flex`,flexDirection:`column`,justifyContent:`center`,marginBottom:`2px`,opacity:e.disabled?`0`:`1`,userSelect:`none`,borderRadius:`6px`,borderWidth:`1px`})),D=i(`div`)(e=>({border:`1px solid`,display:`inline-block`,margin:`0 10px`,width:`160px`,userSelect:`none`,borderRadius:`8px`,overflow:`hidden`,"& .header":{backgroundColor:`white`},"& .visible":{backgroundColor:e.visible?`transparent`:`gray`},"& .background":{backgroundColor:e.selected?`green`:`bisque`,height:`200px`}})),O=e=>`test${e}`,k=()=>Array(10).fill(0).map((e,t)=>({id:O(t)})),A=(e,t)=>{if(Math.abs(t.deltaX)!==0||Math.abs(t.deltaY)<15){t.stopPropagation();return}t.deltaY<0?e.scrollNext():e.scrollPrev()},_.__docgenInfo={description:``,methods:[],displayName:`AddItemsExample`}})))()}var M;function N(){return(N=t((()=>{M=`import 'react-horizontal-scrolling-menu/dist/styles.css';

import styled from '@emotion/styled';
import React from 'react';
import {
  type publicApiType,
  ScrollMenu,
  VisibilityContext,
} from 'react-horizontal-scrolling-menu';

export function AddItemsExample() {
  const [items, setItems] = React.useState(() => getItems());
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

  const newItemsLimit = 24;
  const [loading, setLoading] = React.useState(false);
  const pushNewItems = () => {
    if (loading || items.length > newItemsLimit) {
      return false;
    }

    setLoading(true);
    const newItems = items.concat(
      Array(5)
        .fill(0)
        .map((_, ind) => ({ id: getId(items.length + ind) })),
    );
    new Promise((res) => {
      setTimeout(() => res(setItems(newItems)), 1000);
    }).finally(() => setLoading(false));
  };

  return (
    <div>
      <div>
        <NoScrollbar>
          <ScrollMenu
            LeftArrow={LeftArrow}
            RightArrow={<RightArrow disabled={items.length >= newItemsLimit} />}
            onWheel={onWheel}
            onUpdate={(api) => {
              const lastVisible = api?.items?.last?.()?.visible;
              if (lastVisible && !loading) {
                pushNewItems();
              }
            }}
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
            {loading && <Loader itemId="loader" key="loader" />}
          </ScrollMenu>
        </NoScrollbar>
      </div>
    </div>
  );
}

function Loader({ itemId }: { itemId: string }) {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    ref.current?.scrollIntoView();
  }, [ref]);
  return <div ref={ref}>Loading...</div>;
}

export default AddItemsExample;

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

function RightArrow({ disabled }: { disabled: boolean }) {
  const visibility = React.useContext<publicApiType>(VisibilityContext);
  const isLastItemVisible = visibility.useIsVisible('last', false);

  return (
    <Arrow
      disabled={disabled && isLastItemVisible}
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

const onWheel = (apiObj: publicApiType, ev: React.WheelEvent) => {
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
};
`})))()}var P,F,I,L;function R(){return(R=t((()=>{n(),p(),d(),s(),h(),j(),N(),P=r(),F={title:`Examples/AddItems`,component:_,decorators:[e=>(0,P.jsx)(g,{children:(0,P.jsx)(e,{})})]},I={},m(I,{code:M,availableImports:l,modifyEditor:a}),I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{}`,...I.parameters?.docs?.source}}},L=[`AddItems`]})))()}R();export{I as AddItems,L as __namedExportsOrder,F as default};