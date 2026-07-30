import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{t as n}from"./react-B82b4cNX.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{a as i,c as a,d as o,f as s,i as c,m as l,n as u,o as d,p as f,r as p,s as m,t as h}from"./dist-RpNr9gky.js";import{n as g,t as _}from"./SizeWrapper-Dd6eezdz.js";import{a as v,c as y,n as b,o as x,s as S}from"./test-BB-LPJmr.js";function C(){let[e,t]=k.useState(!0),[n]=k.useState(()=>R()),[r,i]=k.useState([]),a=e=>!!r.find(t=>t===e),o=e=>{let t=a(e);i(n=>t?n.filter(t=>t!==e):n.concat(e))};return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(I,{children:(0,A.jsx)(p,{LeftArrow:e?(0,A.jsx)(T,{RTL:e}):(0,A.jsx)(w,{RTL:e}),RightArrow:e?(0,A.jsx)(w,{RTL:e}):(0,A.jsx)(T,{RTL:e}),onWheel:O,RTL:e,noPolyfill:!0,children:n.map(({id:e})=>(0,A.jsx)(D,{title:e,itemId:e,onClick:()=>o(e),selected:a(e)},e))})}),(0,A.jsx)(M,{label:`RTL`,value:e,onClick:t})]})}function w({RTL:e}){let t=k.useContext(h);return(0,A.jsx)(E,{disabled:t.useIsVisible(`first`,!0),onClick:()=>t.scrollPrev(`smooth`,`end`),testId:e?`right-arrow`:`left-arrow`,children:e?`Right`:`Left`})}function T({RTL:e}){let t=k.useContext(h);return(0,A.jsx)(E,{disabled:t.useIsVisible(`last`,!1),onClick:()=>t.scrollNext(`smooth`,`start`),testId:e?`left-arrow`:`right-arrow`,children:e?`Left`:`Right`})}function E({children:e,disabled:t,onClick:n,className:r,testId:i}){return(0,A.jsx)(j,{disabled:t,onClick:n,className:`arrow-${r}`,"data-testid":i,children:e})}function D({onClick:e,selected:t,title:n,itemId:r}){let i=k.useContext(h),a=i.useIsVisible(r,!0);return(0,A.jsxs)(F,{"data-cy":r,onClick:()=>e(i),onKeyDown:t=>{t.code===`Enter`&&e(i)},"data-testid":`card`,role:`button`,tabIndex:0,className:`card`,visible:a,selected:t,children:[(0,A.jsxs)(`div`,{className:`header`,children:[(0,A.jsx)(`div`,{children:n}),(0,A.jsxs)(`div`,{className:`visible`,children:[`visible: `,JSON.stringify(a)]}),(0,A.jsxs)(`div`,{className:`selected`,children:[`selected: `,JSON.stringify(!!t)]})]}),(0,A.jsx)(`div`,{className:`background`})]})}function O(e,t){if(Math.abs(t.deltaX)!==0||Math.abs(t.deltaY)<15){t.stopPropagation();return}t.deltaY<0?e.scrollPrev(`smooth`,`end`):e.scrollNext(`smooth`,`start`)}var k,A,j,M,N,P,F,I,L,R,z=e((()=>{a(),o(),k=t(n(),1),u(),A=r(),j=s(`button`)(e=>({cursor:`pointer`,display:`flex`,flexDirection:`column`,justifyContent:`center`,marginBottom:`2px`,opacity:e.disabled?`0`:`1`,userSelect:`none`,borderRadius:`6px`,borderWidth:`1px`})),M=({onClick:e,value:t,label:n})=>(0,A.jsxs)(N,{children:[(0,A.jsx)(P,{type:`checkbox`,id:n,onChange:t=>e(t?.target?.checked),checked:t,defaultChecked:t}),(0,A.jsx)(`label`,{htmlFor:n,children:n})]}),N=s(`div`)({display:`flex`,alignItems:`center`,margin:`16px`,"& *:first-child":{marginRight:`4px`}}),P=s(`input`)({height:`24px`,width:`24px`,cursor:`pointer`}),F=s(`div`)(e=>({border:`1px solid`,display:`inline-block`,margin:`0 10px`,width:`160px`,userSelect:`none`,borderRadius:`8px`,overflow:`hidden`,"& .header":{backgroundColor:`white`},"& .visible":{backgroundColor:e.visible?`transparent`:`gray`},"& .background":{backgroundColor:e.selected?`green`:`bisque`,height:`200px`}})),I=s(`div`)({"& .react-horizontal-scrolling-menu--scroll-container::-webkit-scrollbar":{display:`none`},"& .react-horizontal-scrolling-menu--scroll-container":{scrollbarWidth:`none`,"-ms-overflow-style":`none`}}),L=e=>`test${e}`,R=()=>Array(10).fill(0).map((e,t)=>({id:L(t)})),C.__docgenInfo={description:``,methods:[],displayName:`RTL`}})),B,V=e((()=>{B=`import 'react-horizontal-scrolling-menu/dist/styles.css';

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
`})),H,U,W,G,K,q,J,Y;e((()=>{n(),f(),m(),c(),g(),v(),z(),V(),H=r(),{expect:U,within:W}=__STORYBOOK_MODULE_TEST__,G={title:`Examples/RTL`,component:C,decorators:[e=>(0,H.jsx)(_,{children:(0,H.jsx)(e,{})})]},K={},l(K,{code:B,availableImports:d,modifyEditor:i}),q={play:async({canvasElement:e})=>{let t=W(e),n=new b(t,{leftArrow:S,rightArrow:x});U(await t.getByLabelText(`RTL`)).toBeChecked(),await n.isReady(),await y(n)}},J={play:async({canvasElement:e})=>{let t=W(e),n=new b(t,{leftArrow:x,rightArrow:S});await t.getByLabelText(`RTL`).click(),U(await t.getByLabelText(`RTL`)).not.toBeChecked(),await n.isReady(),await y(n)}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}},Y=[`RTL`,`TestRTL`,`TestNonRTL`]}))();export{K as RTL,J as TestNonRTL,q as TestRTL,Y as __namedExportsOrder,G as default};