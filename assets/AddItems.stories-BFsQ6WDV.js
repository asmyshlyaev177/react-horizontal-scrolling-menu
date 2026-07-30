import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{t as n}from"./react-B82b4cNX.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{a as i,c as a,d as o,f as s,i as c,m as l,n as u,o as d,p as f,r as p,s as m,t as h}from"./dist-RpNr9gky.js";import{n as g,t as _}from"./SizeWrapper-Dd6eezdz.js";function v(){let[e,t]=w.useState(()=>A()),[n,r]=w.useState([]),i=e=>!!n.find(t=>t===e),a=e=>{let t=i(e);r(n=>t?n.filter(t=>t!==e):n.concat(e))},[o,s]=w.useState(!1),c=()=>{if(o||e.length>24)return!1;s(!0);let n=e.concat([,,,,,].fill(0).map((t,n)=>({id:k(e.length+n)})));new Promise(e=>{setTimeout(()=>e(t(n)),1e3)}).finally(()=>s(!1))};return(0,T.jsx)(`div`,{children:(0,T.jsx)(`div`,{children:(0,T.jsx)(E,{children:(0,T.jsxs)(p,{LeftArrow:b,RightArrow:(0,T.jsx)(x,{disabled:e.length>=24}),onWheel:j,onUpdate:e=>{e?.items?.last?.()?.visible&&!o&&c()},children:[e.map(({id:e})=>(0,T.jsx)(C,{title:e,itemId:e,onClick:()=>a(e),selected:i(e)},e)),o&&(0,T.jsx)(y,{itemId:`loader`},`loader`)]})})})})}function y({itemId:e}){let t=w.useRef(null);return w.useEffect(()=>{t.current?.scrollIntoView()},[t]),(0,T.jsx)(`div`,{ref:t,children:`Loading...`})}function b(){let e=w.useContext(h);return(0,T.jsx)(S,{disabled:e.useLeftArrowVisible(),onClick:()=>e.scrollPrev(),testId:`left-arrow`,children:`Left`})}function x({disabled:e}){let t=w.useContext(h),n=t.useIsVisible(`last`,!1);return(0,T.jsx)(S,{disabled:e&&n,onClick:()=>t.scrollNext(),testId:`right-arrow`,children:`Right`})}function S({children:e,disabled:t,onClick:n,className:r,testId:i}){return(0,T.jsx)(D,{disabled:t,onClick:n,className:`arrow-${r}`,"data-testid":i,children:e})}function C({onClick:e,selected:t,title:n,itemId:r}){let i=w.useContext(h),a=i.useIsVisible(r,!0);return(0,T.jsxs)(O,{"data-cy":r,onClick:()=>e(i),onKeyDown:t=>{t.code===`Enter`&&e(i)},"data-testid":`card`,role:`button`,tabIndex:0,className:`card`,visible:a,selected:t,children:[(0,T.jsxs)(`div`,{className:`header`,children:[(0,T.jsx)(`div`,{children:n}),(0,T.jsxs)(`div`,{className:`visible`,children:[`visible: `,JSON.stringify(a)]}),(0,T.jsxs)(`div`,{className:`selected`,children:[`selected: `,JSON.stringify(!!t)]})]}),(0,T.jsx)(`div`,{className:`background`})]})}var w,T,E,D,O,k,A,j,M=e((()=>{a(),o(),w=t(n(),1),u(),T=r(),E=s(`div`)({"& .react-horizontal-scrolling-menu--scroll-container::-webkit-scrollbar":{display:`none`},"& .react-horizontal-scrolling-menu--scroll-container":{scrollbarWidth:`none`,"-ms-overflow-style":`none`}}),D=s(`button`)(e=>({cursor:`pointer`,display:`flex`,flexDirection:`column`,justifyContent:`center`,marginBottom:`2px`,opacity:e.disabled?`0`:`1`,userSelect:`none`,borderRadius:`6px`,borderWidth:`1px`})),O=s(`div`)(e=>({border:`1px solid`,display:`inline-block`,margin:`0 10px`,width:`160px`,userSelect:`none`,borderRadius:`8px`,overflow:`hidden`,"& .header":{backgroundColor:`white`},"& .visible":{backgroundColor:e.visible?`transparent`:`gray`},"& .background":{backgroundColor:e.selected?`green`:`bisque`,height:`200px`}})),k=e=>`test${e}`,A=()=>Array(10).fill(0).map((e,t)=>({id:k(t)})),j=(e,t)=>{if(Math.abs(t.deltaX)!==0||Math.abs(t.deltaY)<15){t.stopPropagation();return}t.deltaY<0?e.scrollNext():e.scrollPrev()},v.__docgenInfo={description:``,methods:[],displayName:`AddItemsExample`}})),N,P=e((()=>{N=`import 'react-horizontal-scrolling-menu/dist/styles.css';

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
`})),F,I,L,R;e((()=>{n(),f(),m(),c(),g(),M(),P(),F=r(),I={title:`Examples/AddItems`,component:v,decorators:[e=>(0,F.jsx)(_,{children:(0,F.jsx)(e,{})})]},L={},l(L,{code:N,availableImports:d,modifyEditor:i}),L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{}`,...L.parameters?.docs?.source}}},R=[`AddItems`]}))();export{L as AddItems,R as __namedExportsOrder,I as default};