import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{_ as i,a,g as o,i as s,n as c,o as l,r as u,s as d,t as f,v as p,y as m}from"./dist-oGMj_wFx.js";import{n as h,t as g}from"./SizeWrapper-D7kux-98.js";import{a as _,c as v,n as y,o as b,s as x}from"./test-CHHlmwCw.js";function S(){let[e,t]=O.useState(!0),[n]=O.useState(()=>L()),[r,i]=O.useState([]),a=e=>!!r.find(t=>t===e),o=e=>{let t=a(e);i(n=>t?n.filter(t=>t!==e):n.concat(e))};return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(F,{children:(0,k.jsx)(u,{LeftArrow:e?(0,k.jsx)(w,{RTL:e}):(0,k.jsx)(C,{RTL:e}),RightArrow:e?(0,k.jsx)(C,{RTL:e}):(0,k.jsx)(w,{RTL:e}),onWheel:D,RTL:e,noPolyfill:!0,children:n.map(({id:e})=>(0,k.jsx)(E,{title:e,itemId:e,onClick:()=>o(e),selected:a(e)},e))})}),(0,k.jsx)(j,{label:`RTL`,value:e,onClick:t})]})}function C({RTL:e}){let t=O.useContext(f),n=t.useIsVisible(`first`,!0);return(0,k.jsx)(T,{disabled:n,onClick:()=>t.scrollPrev(`smooth`,`end`),testId:e?`right-arrow`:`left-arrow`,children:e?`Right`:`Left`})}function w({RTL:e}){let t=O.useContext(f),n=t.useIsVisible(`last`,!1);return(0,k.jsx)(T,{disabled:n,onClick:()=>t.scrollNext(`smooth`,`start`),testId:e?`left-arrow`:`right-arrow`,children:e?`Left`:`Right`})}function T({children:e,disabled:t,onClick:n,className:r,testId:i}){return(0,k.jsx)(A,{disabled:t,onClick:n,className:`arrow-${r}`,"data-testid":i,children:e})}function E({onClick:e,selected:t,title:n,itemId:r}){let i=O.useContext(f),a=i.useIsVisible(r,!0);return(0,k.jsxs)(P,{"data-cy":r,onClick:()=>e(i),onKeyDown:t=>{t.code===`Enter`&&e(i)},"data-testid":`card`,role:`button`,tabIndex:0,className:`card`,visible:a,selected:t,children:[(0,k.jsxs)(`div`,{className:`header`,children:[(0,k.jsx)(`div`,{children:n}),(0,k.jsxs)(`div`,{className:`visible`,children:[`visible: `,JSON.stringify(a)]}),(0,k.jsxs)(`div`,{className:`selected`,children:[`selected: `,JSON.stringify(!!t)]})]}),(0,k.jsx)(`div`,{className:`background`})]})}function D(e,t){if(Math.abs(t.deltaX)!==0||Math.abs(t.deltaY)<15){t.stopPropagation();return}t.deltaY<0?e.scrollPrev(`smooth`,`end`):e.scrollNext(`smooth`,`start`)}var O,k,A,j,M,N,P,F,I,L;function R(){return(R=t((()=>{o(),O=e(n(),1),c(),k=r(),A=i(`button`)(e=>({cursor:`pointer`,display:`flex`,flexDirection:`column`,justifyContent:`center`,marginBottom:`2px`,opacity:e.disabled?`0`:`1`,userSelect:`none`,borderRadius:`6px`,borderWidth:`1px`})),j=({onClick:e,value:t,label:n})=>(0,k.jsxs)(M,{children:[(0,k.jsx)(N,{type:`checkbox`,id:n,onChange:t=>e(t?.target?.checked),checked:t,defaultChecked:t}),(0,k.jsx)(`label`,{htmlFor:n,children:n})]}),M=i(`div`)({display:`flex`,alignItems:`center`,margin:`16px`,"& *:first-child":{marginRight:`4px`}}),N=i(`input`)({height:`24px`,width:`24px`,cursor:`pointer`}),P=i(`div`)(e=>({border:`1px solid`,display:`inline-block`,margin:`0 10px`,width:`160px`,userSelect:`none`,borderRadius:`8px`,overflow:`hidden`,"& .header":{backgroundColor:`white`},"& .visible":{backgroundColor:e.visible?`transparent`:`gray`},"& .background":{backgroundColor:e.selected?`green`:`bisque`,height:`200px`}})),F=i(`div`)({"& .react-horizontal-scrolling-menu--scroll-container::-webkit-scrollbar":{display:`none`},"& .react-horizontal-scrolling-menu--scroll-container":{scrollbarWidth:`none`,"-ms-overflow-style":`none`}}),I=e=>`test${e}`,L=()=>Array(10).fill(0).map((e,t)=>({id:I(t)})),S.__docgenInfo={description:``,methods:[],displayName:`RTL`}})))()}var z;function B(){return(B=t((()=>{z=`import 'react-horizontal-scrolling-menu/dist/styles.css';

import styled from '@emotion/styled';
import React from 'react';
import {
  type publicApiType,
  ScrollMenu,
  VisibilityContext,
} from 'react-horizontal-scrolling-menu';

export function RTL() {
  const [RTL, setRTL] = React.useState(true);
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
    <>
      <NoScrollbar>
        <ScrollMenu
          LeftArrow={RTL ? <RightArrow RTL={RTL} /> : <LeftArrow RTL={RTL} />}
          RightArrow={RTL ? <LeftArrow RTL={RTL} /> : <RightArrow RTL={RTL} />}
          onWheel={onWheel}
          RTL={RTL}
          noPolyfill={true}
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

      <Checkbox label="RTL" value={RTL} onClick={setRTL} />
    </>
  );
}

export default RTL;

function LeftArrow({ RTL }: { RTL: boolean }) {
  const visibility = React.useContext<publicApiType>(VisibilityContext);
  const isFirstItemVisible = visibility.useIsVisible('first', true);

  return (
    <Arrow
      disabled={isFirstItemVisible}
      onClick={() => visibility.scrollPrev('smooth', 'end')}
      testId={RTL ? 'right-arrow' : 'left-arrow'}
    >
      {RTL ? 'Right' : 'Left'}
    </Arrow>
  );
}

function RightArrow({ RTL }: { RTL: boolean }) {
  const visibility = React.useContext<publicApiType>(VisibilityContext);
  const isLastItemVisible = visibility.useIsVisible('last', false);

  return (
    <Arrow
      disabled={isLastItemVisible}
      onClick={() => visibility.scrollNext('smooth', 'start')}
      testId={RTL ? 'left-arrow' : 'right-arrow'}
    >
      {RTL ? 'Left' : 'Right'}
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

const Checkbox = ({
  onClick,
  value,
  label,
}: {
  value: boolean;
  label: string;
  onClick: (val: boolean) => void;
}) => {
  return (
    <CheckboxWrapper>
      <BigCheckbox
        type="checkbox"
        id={label}
        onChange={(ev: React.ChangeEvent<HTMLInputElement>) =>
          onClick(ev?.target?.checked)
        }
        checked={value}
        defaultChecked={value}
      />
      <label htmlFor={label}>{label}</label>
    </CheckboxWrapper>
  );
};
const CheckboxWrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  margin: '16px',
  '& *:first-child': {
    marginRight: '4px',
  },
});
const BigCheckbox = styled('input')({
  height: '24px',
  width: '24px',
  cursor: 'pointer',
});

function Card({
  onClick,
  selected,
  title,
  itemId,
}: {
  onClick: (visibility: publicApiType) => void;
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

const NoScrollbar = styled('div')({
  '& .react-horizontal-scrolling-menu--scroll-container::-webkit-scrollbar': {
    display: 'none',
  },
  '& .react-horizontal-scrolling-menu--scroll-container': {
    scrollbarWidth: 'none',
    '-ms-overflow-style': 'none',
  },
});

const getId = (index: number) => \`\${'test'}\${index}\`;

const getItems = () =>
  Array(10)
    .fill(0)
    .map((_, ind) => ({ id: getId(ind) }));

function onWheel(apiObj: publicApiType, ev: React.WheelEvent): void {
  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

  if (isThouchpad) {
    ev.stopPropagation();
    return;
  }

  if (ev.deltaY < 0) {
    apiObj.scrollPrev('smooth', 'end');
  } else {
    apiObj.scrollNext('smooth', 'start');
  }
}
`})))()}var V,H,U,W,G,K,q,J;function Y(){return(Y=t((()=>{n(),p(),d(),s(),h(),_(),R(),B(),V=r(),{expect:H,within:U}=__STORYBOOK_MODULE_TEST__,W={title:`Examples/RTL`,component:S,decorators:[e=>(0,V.jsx)(g,{children:(0,V.jsx)(e,{})})]},G={},m(G,{code:z,availableImports:l,modifyEditor:a}),K={tags:[`test-only`],play:async({canvasElement:e})=>{let t=U(e),n=new y(t,{leftArrow:x,rightArrow:b});H(await t.getByLabelText(`RTL`)).toBeChecked(),await n.isReady(),await v(n)}},q={tags:[`test-only`],play:async({canvasElement:e})=>{let t=U(e),n=new y(t,{leftArrow:b,rightArrow:x});await t.getByLabelText(`RTL`).click(),H(await t.getByLabelText(`RTL`)).not.toBeChecked(),await n.isReady(),await v(n)}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  tags: ['test-only'],
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement) as Canvas;
    const testObj = new TestObj(canvas, {
      leftArrow: rightArrowSelector,
      rightArrow: leftArrowSelector
    });
    expect(await canvas.getByLabelText('RTL')).toBeChecked();
    await testObj.isReady();
    await scrollSmokeTest(testObj);
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  tags: ['test-only'],
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement) as Canvas;
    const testObj = new TestObj(canvas, {
      leftArrow: leftArrowSelector,
      rightArrow: rightArrowSelector
    });
    await canvas.getByLabelText('RTL').click();
    expect(await canvas.getByLabelText('RTL')).not.toBeChecked();
    await testObj.isReady();
    await scrollSmokeTest(testObj);
  }
}`,...q.parameters?.docs?.source}}},J=[`RTL`,`TestRTL`,`TestNonRTL`]})))()}Y();export{G as RTL,q as TestNonRTL,K as TestRTL,J as __namedExportsOrder,W as default};