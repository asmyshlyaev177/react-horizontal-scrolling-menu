import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{t as n}from"./react-B82b4cNX.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{a as i,c as a,d as o,f as s,i as c,m as l,n as u,o as d,p as f,r as p,s as m,t as h}from"./dist-CxkS9euy.js";import{n as g,t as _}from"./SizeWrapper-g9pokEER.js";import{a as v,n as y,o as b,s as x,t as S}from"./test-BB-LPJmr.js";function C(){let[e]=k.useState(()=>F()),[t,n]=k.useState([]),r=e=>!!t.find(t=>t===e),i=e=>{let t=r(e);n(n=>t?n.filter(t=>t!==e):n.concat(e))},{getPosition:a,setPosition:o,reset:s}=j(),c=k.useCallback(e=>{o(e.scrollContainer.current?.scrollLeft??0)},[o]),l=k.useCallback(e=>{let t=e.scrollContainer.current;t&&(t.scrollLeft=a())},[a]),[u,d]=k.useState(()=>String(Math.random())),f=k.useCallback(()=>d(String(Math.random())),[]);return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(p,{LeftArrow:w,RightArrow:T,onWheel:O,onUpdate:c,onInit:l,children:e.map(({id:e})=>(0,A.jsx)(D,{title:e,itemId:e,onClick:()=>i(e),selected:r(e)},e))},u),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`button`,{onClick:s,"data-testid":`reset`,children:`Reset position`}),(0,A.jsx)(`button`,{onClick:f,"data-testid":`reload`,children:`Reload`})]})]})}function w(){let e=k.useContext(h);return(0,A.jsx)(E,{disabled:e.useLeftArrowVisible(),onClick:()=>e.scrollPrev(),testId:`left-arrow`,children:`Left`})}function T(){let e=k.useContext(h);return(0,A.jsx)(E,{disabled:e.useRightArrowVisible(),onClick:()=>e.scrollNext(),testId:`right-arrow`,children:`Right`})}function E({children:e,disabled:t,onClick:n,className:r,testId:i}){return(0,A.jsx)(M,{disabled:t,onClick:n,className:`arrow-${r}`,"data-testid":i,children:e})}function D({onClick:e,selected:t,title:n,itemId:r}){let i=k.useContext(h),a=i.useIsVisible(r,!0);return(0,A.jsxs)(N,{"data-cy":r,onClick:()=>e(i),onKeyDown:t=>{t.code===`Enter`&&e(i)},"data-testid":`card`,role:`button`,tabIndex:0,className:`card`,visible:a,selected:t,children:[(0,A.jsxs)(`div`,{className:`header`,children:[(0,A.jsx)(`div`,{children:n}),(0,A.jsxs)(`div`,{className:`visible`,children:[`visible: `,JSON.stringify(a)]}),(0,A.jsxs)(`div`,{className:`selected`,children:[`selected: `,JSON.stringify(!!t)]})]}),(0,A.jsx)(`div`,{className:`background`})]})}function O(e,t){if(Math.abs(t.deltaX)!==0||Math.abs(t.deltaY)<15){t.stopPropagation();return}t.deltaY<0?e.scrollNext():e.scrollPrev()}var k,A,j,M,N,P,F,I=e((()=>{a(),o(),k=t(n(),1),u(),A=r(),j=()=>(k.useEffect(()=>{window.history.scrollRestoration=`manual`},[]),{getPosition:()=>+(sessionStorage.getItem(`position`)||0),setPosition:k.useCallback(e=>{sessionStorage.setItem(`position`,String(e))},[]),reset:k.useCallback(()=>sessionStorage.removeItem(`position`),[])}),M=s(`button`)(e=>({cursor:`pointer`,display:`flex`,flexDirection:`column`,justifyContent:`center`,marginBottom:`2px`,opacity:e.disabled?`0`:`1`,userSelect:`none`,borderRadius:`6px`,borderWidth:`1px`})),N=s(`div`)(e=>({border:`1px solid`,display:`inline-block`,margin:`0 10px`,width:`160px`,userSelect:`none`,borderRadius:`8px`,overflow:`hidden`,"& .header":{backgroundColor:`white`},"& .visible":{backgroundColor:e.visible?`transparent`:`gray`},"& .background":{backgroundColor:e.selected?`green`:`bisque`,height:`200px`}})),P=e=>`test${e}`,F=()=>Array(10).fill(0).map((e,t)=>({id:P(t)})),C.__docgenInfo={description:``,methods:[],displayName:`Position`}})),L,R=e((()=>{L=`import 'react-horizontal-scrolling-menu/dist/styles.css';

import styled from '@emotion/styled';
import React from 'react';
import {
  type publicApiType,
  ScrollMenu,
  VisibilityContext,
} from 'react-horizontal-scrolling-menu';

export function Position() {
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

  const { getPosition, setPosition, reset } = usePosition();
  const savePos = React.useCallback(
    (api: publicApiType) => {
      setPosition(api.scrollContainer.current?.scrollLeft ?? 0);
    },
    [setPosition],
  );
  const restorePosition = React.useCallback(
    (api: publicApiType) => {
      const node = api.scrollContainer.current;

      if (node) {
        node.scrollLeft = getPosition();
      }
    },
    [getPosition],
  );

  const [key, setKey] = React.useState(() => String(Math.random()));
  const reload = React.useCallback(() => setKey(String(Math.random())), []);

  return (
    <>
      <ScrollMenu
        LeftArrow={LeftArrow}
        RightArrow={RightArrow}
        onWheel={onWheel}
        onUpdate={savePos}
        onInit={restorePosition}
        key={key}
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
      <div>
        <button onClick={reset} data-testid="reset">
          Reset position
        </button>
        <button onClick={reload} data-testid="reload">
          Reload
        </button>
      </div>
    </>
  );
}

const usePosition = () => {
  React.useEffect(() => {
    window.history.scrollRestoration = 'manual';
  }, []);

  const setPosition = React.useCallback((pos: number | string) => {
    sessionStorage.setItem('position', String(pos));
  }, []);
  const getPosition = () => +(sessionStorage.getItem('position') || 0);
  const reset = React.useCallback(
    () => sessionStorage.removeItem('position'),
    [],
  );

  return { getPosition, setPosition, reset };
};

export default Position;

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
`})),z,B,V,H,U,W,G,K;e((()=>{n(),f(),m(),c(),g(),v(),I(),R(),z=r(),{userEvent:B,within:V}=__STORYBOOK_MODULE_TEST__,H={title:`Examples/Position`,component:C,decorators:[e=>(0,z.jsx)(_,{children:(0,z.jsx)(e,{})})]},U={},l(U,{code:L,availableImports:d,modifyEditor:i}),W=S(),G={play:async({canvasElement:e})=>{let t=V(e),n=new y(t,{leftArrow:b,rightArrow:x});await n.isReady(),await B.click(t.getByTestId(`reset`)),await B.click(t.getByTestId(`reload`)),await n.isReady(),await n.clickNext(),await n.expectVisibleCards([`test3`,`test4`,`test5`]),await B.click(t.getByTestId(`reload`)),await n.isReady(),await n.expectVisibleCards([`test3`,`test4`,`test5`])}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`ScrollTest()`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const testObj = new TestObj(canvas, {
      leftArrow: leftArrowSelector,
      rightArrow: rightArrowSelector
    });
    await testObj.isReady();
    await userEvent.click(canvas.getByTestId('reset'));
    await userEvent.click(canvas.getByTestId('reload'));
    await testObj.isReady();
    await testObj.clickNext();
    await testObj.expectVisibleCards(['test3', 'test4', 'test5']);
    await userEvent.click(canvas.getByTestId('reload'));
    await testObj.isReady();
    await testObj.expectVisibleCards(['test3', 'test4', 'test5']);
  }
}`,...G.parameters?.docs?.source}}},K=[`Position`,`Test`,`PosTest`]}))();export{G as PosTest,U as Position,W as Test,K as __namedExportsOrder,H as default};