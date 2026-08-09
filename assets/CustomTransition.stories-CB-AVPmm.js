import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{_ as i,a,g as o,i as s,n as c,o as l,r as u,s as d,t as f,v as p,y as m}from"./dist-0YfFV8Jw.js";import{n as h,t as g}from"./SizeWrapper-DeikXEKS.js";import{a as _,c as v,n as y,o as b,s as x}from"./test-CHHlmwCw.js";function S(){let[e]=A.useState(()=>B()),[t,n]=A.useState([]),[r,i]=A.useState(N),a=e=>!!t.find(t=>t===e),o=e=>{let t=a(e);n(n=>t?n.filter(t=>t!==e):n.concat(e))};return(0,j.jsxs)(`div`,{children:[(0,j.jsx)(w,{value:r,onChange:i}),(0,j.jsx)(u,{LeftArrow:T,RightArrow:E,onWheel:k,noPolyfill:!1,transitionDuration:r,transitionBehavior:e=>{e.forEach(({el:e,left:t})=>C(e,t,r))},children:e.map(({id:e})=>(0,j.jsx)(O,{title:e,itemId:e,onClick:()=>o(e),selected:a(e)},e))})]})}function C(e,t,n){let r=F.get(e);r!==void 0&&cancelAnimationFrame(r);let i=e.scrollLeft,a=t-i,o=performance.now(),s=t=>{let r=Math.min((t-o)/n,1);e.scrollLeft=i+a*P(r),r<1?F.set(e,requestAnimationFrame(s)):F.delete(e)};F.set(e,requestAnimationFrame(s))}function w({value:e,onChange:t}){return(0,j.jsxs)(I,{children:[(0,j.jsx)(`label`,{htmlFor:`duration`,children:`Duration`}),(0,j.jsx)(`select`,{id:`duration`,"data-testid":`duration-select`,value:e,onChange:e=>t(Number(e.target.value)),children:M.map(e=>(0,j.jsxs)(`option`,{value:e,children:[e,` ms`]},e))})]})}function T(){let e=A.useContext(f),t=e.useLeftArrowVisible();return(0,j.jsx)(D,{disabled:t,onClick:()=>e.scrollPrev(),testId:`left-arrow`,children:`Left`})}function E(){let e=A.useContext(f),t=e.useRightArrowVisible();return(0,j.jsx)(D,{disabled:t,onClick:()=>e.scrollNext(),testId:`right-arrow`,children:`Right`})}function D({children:e,disabled:t,onClick:n,className:r,testId:i}){return(0,j.jsx)(L,{disabled:t,onClick:n,className:`arrow-${r}`,"data-testid":i,children:e})}function O({onClick:e,selected:t,title:n,itemId:r}){let i=A.useContext(f),a=i.useIsVisible(r,!0);return(0,j.jsxs)(R,{"data-cy":r,onClick:()=>e(i),onKeyDown:t=>{t.code===`Enter`&&e(i)},"data-testid":`card`,role:`button`,tabIndex:0,className:`card`,visible:a,selected:t,children:[(0,j.jsxs)(`div`,{className:`header`,children:[(0,j.jsx)(`div`,{children:n}),(0,j.jsxs)(`div`,{className:`visible`,children:[`visible: `,JSON.stringify(a)]}),(0,j.jsxs)(`div`,{className:`selected`,children:[`selected: `,JSON.stringify(!!t)]})]}),(0,j.jsx)(`div`,{className:`background`})]})}function k(e,t){if(Math.abs(t.deltaX)!==0||Math.abs(t.deltaY)<15){t.stopPropagation();return}t.deltaY<0?e.scrollNext():e.scrollPrev()}var A,j,M,N,P,F,I,L,R,z,B;function V(){return(V=t((()=>{o(),A=e(n(),1),c(),j=r(),M=[500,1200,2500],N=1200,P=e=>e<.5?4*e*e*e:1-(-2*e+2)**3/2,F=new WeakMap,I=i(`div`)({display:`flex`,alignItems:`center`,margin:`16px`,"& *:first-child":{marginRight:`4px`}}),L=i(`button`)(e=>({cursor:`pointer`,display:`flex`,flexDirection:`column`,justifyContent:`center`,marginBottom:`2px`,opacity:e.disabled?`0`:`1`,userSelect:`none`,borderRadius:`6px`,borderWidth:`1px`})),R=i(`div`)(e=>({border:`1px solid`,display:`inline-block`,margin:`0 10px`,width:`160px`,userSelect:`none`,borderRadius:`8px`,overflow:`hidden`,"& .header":{backgroundColor:`white`},"& .visible":{backgroundColor:e.visible?`transparent`:`gray`},"& .background":{backgroundColor:e.selected?`green`:`bisque`,height:`200px`}})),z=e=>`test${e}`,B=()=>Array(10).fill(0).map((e,t)=>({id:z(t)})),S.__docgenInfo={description:``,methods:[],displayName:`CustomTransitionExample`}})))()}var H;function U(){return(U=t((()=>{H=`import 'react-horizontal-scrolling-menu/dist/styles.css';

import styled from '@emotion/styled';
import React from 'react';
import {
  type publicApiType,
  ScrollMenu,
  VisibilityContext,
} from 'react-horizontal-scrolling-menu';

/**
 * What scroll-into-view-if-needed hands to a custom \`transitionBehavior\`:
 * one action per scrollable ancestor that has to move — here always just the
 * scroll container, because the menu passes it as \`boundary\`.
 */
type ScrollAction = { el: Element; top: number; left: number };

const durations = [500, 1200, 2500];
const defaultDuration = 1200;

export function CustomTransitionExample() {
  const [items] = React.useState(() => getItems());
  const [selected, setSelected] = React.useState<string[]>([]);
  const [duration, setDuration] = React.useState(defaultDuration);

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

  // Instead of letting the browser scroll, receive the computed target
  // positions and drive \`scrollLeft\` there manually — any curve or animation
  // library works from here.
  const transition = (instructions: ScrollAction[]) => {
    instructions.forEach(({ el, left }) => animateScroll(el, left, duration));
  };

  return (
    <div>
      <DurationSelect value={duration} onChange={setDuration} />
      {/* NOTE: transitionDuration and transitionBehavior only take effect
          with noPolyfill={false} — the default noPolyfill={true} scrolls with
          native scrollIntoView and ignores both. */}
      <ScrollMenu
        LeftArrow={LeftArrow}
        RightArrow={RightArrow}
        onWheel={onWheel}
        noPolyfill={false}
        transitionDuration={duration}
        // The typings describe the options-object form, but the menu passes
        // this value straight to scroll-into-view-if-needed as its \`behavior\`
        // callback — hence the cast.
        transitionBehavior={transition as unknown as ScrollBehavior}
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
    </div>
  );
}

export default CustomTransitionExample;

const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

/**
 * A second arrow click can land mid-animation; remembering the pending frame
 * per element lets the new animation cancel the old one instead of both
 * fighting over \`scrollLeft\`.
 */
const pendingFrames = new WeakMap<Element, number>();

function animateScroll(el: Element, target: number, duration: number) {
  const prevFrame = pendingFrames.get(el);
  if (prevFrame !== undefined) {
    cancelAnimationFrame(prevFrame);
  }

  const from = el.scrollLeft;
  const distance = target - from;
  const startTime = performance.now();

  const step = (now: number) => {
    const progress = Math.min((now - startTime) / duration, 1);
    el.scrollLeft = from + distance * easeInOutCubic(progress);

    if (progress < 1) {
      pendingFrames.set(el, requestAnimationFrame(step));
    } else {
      pendingFrames.delete(el);
    }
  };

  pendingFrames.set(el, requestAnimationFrame(step));
}

function DurationSelect({
  value,
  onChange,
}: {
  value: number;
  onChange: (val: number) => void;
}) {
  return (
    <SelectWrapper>
      <label htmlFor="duration">Duration</label>
      <select
        id="duration"
        data-testid="duration-select"
        value={value}
        onChange={(ev: React.ChangeEvent<HTMLSelectElement>) =>
          onChange(Number(ev.target.value))
        }
      >
        {durations.map((ms) => (
          <option value={ms} key={ms}>
            {ms} ms
          </option>
        ))}
      </select>
    </SelectWrapper>
  );
}
const SelectWrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  margin: '16px',
  '& *:first-child': {
    marginRight: '4px',
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
`})))()}var W,G,K,q,J,Y,X,Z;function Q(){return(Q=t((()=>{n(),p(),d(),s(),h(),_(),V(),U(),W=r(),{expect:G,userEvent:K,within:q}=__STORYBOOK_MODULE_TEST__,J={title:`Examples/CustomTransition`,component:S,decorators:[e=>(0,W.jsx)(g,{children:(0,W.jsx)(e,{})})]},Y={},m(Y,{code:H,availableImports:l,modifyEditor:a}),X={tags:[`test-only`],play:async({canvasElement:e})=>{let t=q(e),n=new y(t,{leftArrow:b,rightArrow:x}),r=t.getByTestId(`duration-select`);G(r).toHaveValue(`1200`),await n.isReady(),await v(n),await K.selectOptions(r,`500`),G(r).toHaveValue(`500`),await n.clickNext(),await n.cardHidden(`test0`),await n.expectVisibleCards([`test3`,`test4`,`test5`])}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  tags: ['test-only'],
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement) as Canvas;
    const testObj = new TestObj(canvas, {
      leftArrow: leftArrowSelector,
      rightArrow: rightArrowSelector
    });

    // The select drives both transition props; 1200ms is the default.
    const select = canvas.getByTestId('duration-select');
    expect(select).toHaveValue('1200');
    await testObj.isReady();

    // The full scroll pass runs through the custom rAF transition — every
    // visibility assertion only settles once the ease-in-out animation has
    // landed \`scrollLeft\` on its computed target.
    await scrollSmokeTest(testObj);

    // Changing the duration swaps in a new behavior closure; the menu has to
    // keep scrolling with it.
    await userEvent.selectOptions(select, '500');
    expect(select).toHaveValue('500');
    await testObj.clickNext();
    await testObj.cardHidden('test0');
    await testObj.expectVisibleCards(['test3', 'test4', 'test5']);
  }
}`,...X.parameters?.docs?.source}}},Z=[`CustomTransition`,`Test`]})))()}Q();export{Y as CustomTransition,X as Test,Z as __namedExportsOrder,J as default};