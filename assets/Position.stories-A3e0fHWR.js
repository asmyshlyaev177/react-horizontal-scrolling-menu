import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{_ as i,a,g as o,i as s,n as c,o as l,r as u,s as d,t as f,v as p,y as m}from"./dist-FrB8AX0O.js";import{n as h,t as g}from"./SizeWrapper-0dCO968y.js";import{a as _,n as v,o as y,s as b,t as x}from"./test-CHHlmwCw.js";function S(){let[e]=O.useState(()=>P()),[t,n]=O.useState([]),r=e=>!!t.find(t=>t===e),i=e=>{let t=r(e);n(n=>t?n.filter(t=>t!==e):n.concat(e))},{getPosition:a,setPosition:o,reset:s}=A(),c=O.useCallback(e=>{o(e.scrollContainer.current?.scrollLeft??0)},[o]),l=O.useCallback(e=>{let t=e.scrollContainer.current;t&&(t.scrollLeft=a())},[a]),[d,f]=O.useState(()=>String(Math.random())),p=O.useCallback(()=>f(String(Math.random())),[]);return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(u,{LeftArrow:C,RightArrow:w,onWheel:D,onUpdate:c,onInit:l,children:e.map(({id:e})=>(0,k.jsx)(E,{title:e,itemId:e,onClick:()=>i(e),selected:r(e)},e))},d),(0,k.jsxs)(`div`,{children:[(0,k.jsx)(`button`,{onClick:s,"data-testid":`reset`,children:`Reset position`}),(0,k.jsx)(`button`,{onClick:p,"data-testid":`reload`,children:`Reload`})]})]})}function C(){let e=O.useContext(f),t=e.useLeftArrowVisible();return(0,k.jsx)(T,{disabled:t,onClick:()=>e.scrollPrev(),testId:`left-arrow`,children:`Left`})}function w(){let e=O.useContext(f),t=e.useRightArrowVisible();return(0,k.jsx)(T,{disabled:t,onClick:()=>e.scrollNext(),testId:`right-arrow`,children:`Right`})}function T({children:e,disabled:t,onClick:n,className:r,testId:i}){return(0,k.jsx)(j,{disabled:t,onClick:n,className:`arrow-${r}`,"data-testid":i,children:e})}function E({onClick:e,selected:t,title:n,itemId:r}){let i=O.useContext(f),a=i.useIsVisible(r,!0);return(0,k.jsxs)(M,{"data-cy":r,onClick:()=>e(i),onKeyDown:t=>{t.code===`Enter`&&e(i)},"data-testid":`card`,role:`button`,tabIndex:0,className:`card`,visible:a,selected:t,children:[(0,k.jsxs)(`div`,{className:`header`,children:[(0,k.jsx)(`div`,{children:n}),(0,k.jsxs)(`div`,{className:`visible`,children:[`visible: `,JSON.stringify(a)]}),(0,k.jsxs)(`div`,{className:`selected`,children:[`selected: `,JSON.stringify(!!t)]})]}),(0,k.jsx)(`div`,{className:`background`})]})}function D(e,t){if(Math.abs(t.deltaX)!==0||Math.abs(t.deltaY)<15){t.stopPropagation();return}t.deltaY<0?e.scrollNext():e.scrollPrev()}var O,k,A,j,M,N,P;function F(){return(F=t((()=>{o(),O=e(n(),1),c(),k=r(),A=()=>(O.useEffect(()=>{window.history.scrollRestoration=`manual`},[]),{getPosition:()=>+(sessionStorage.getItem(`position`)||0),setPosition:O.useCallback(e=>{sessionStorage.setItem(`position`,String(e))},[]),reset:O.useCallback(()=>sessionStorage.removeItem(`position`),[])}),j=i(`button`)(e=>({cursor:`pointer`,display:`flex`,flexDirection:`column`,justifyContent:`center`,marginBottom:`2px`,opacity:e.disabled?`0`:`1`,userSelect:`none`,borderRadius:`6px`,borderWidth:`1px`})),M=i(`div`)(e=>({border:`1px solid`,display:`inline-block`,margin:`0 10px`,width:`160px`,userSelect:`none`,borderRadius:`8px`,overflow:`hidden`,"& .header":{backgroundColor:`white`},"& .visible":{backgroundColor:e.visible?`transparent`:`gray`},"& .background":{backgroundColor:e.selected?`green`:`bisque`,height:`200px`}})),N=e=>`test${e}`,P=()=>Array(10).fill(0).map((e,t)=>({id:N(t)})),S.__docgenInfo={description:``,methods:[],displayName:`Position`}})))()}var I;function L(){return(L=t((()=>{I=`import 'react-horizontal-scrolling-menu/dist/styles.css';

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
`})))()}var R,z,B,V,H,U,W,G;function K(){return(K=t((()=>{n(),p(),d(),s(),h(),_(),F(),L(),R=r(),{userEvent:z,within:B}=__STORYBOOK_MODULE_TEST__,V={title:`Examples/SaveRestorePosition`,component:S,decorators:[e=>(0,R.jsx)(g,{children:(0,R.jsx)(e,{})})]},H={},m(H,{code:I,availableImports:l,modifyEditor:a}),U={...x(),tags:[`test-only`]},W={tags:[`test-only`],play:async({canvasElement:e})=>{let t=B(e),n=new v(t,{leftArrow:y,rightArrow:b});await n.isReady(),await z.click(t.getByTestId(`reset`)),await z.click(t.getByTestId(`reload`)),await n.isReady(),await n.clickNext(),await n.expectVisibleCards([`test3`,`test4`,`test5`]),await z.click(t.getByTestId(`reload`)),await n.isReady(),await n.expectVisibleCards([`test3`,`test4`,`test5`])}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  ...ScrollTest(),
  tags: ['test-only']
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  tags: ['test-only'],
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
}`,...W.parameters?.docs?.source}}},G=[`Position`,`Test`,`PosTest`]})))()}K();export{W as PosTest,H as Position,U as Test,G as __namedExportsOrder,V as default};