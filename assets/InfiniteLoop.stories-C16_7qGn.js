import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{_ as i,a,g as o,i as s,l as c,n as ee,o as te,p as l,r as u,s as d,t as f,u as ne,v as p,y as m}from"./dist-C8yMuzvZ.js";import{n as h,t as re}from"./SizeWrapper-BzDG7ebJ.js";import{a as ie,i as g,n as ae}from"./test-CHHlmwCw.js";import{a as _,i as v,n as y,o as b,r as x,s as oe,t as S}from"./loopTestUtils-BNZnGCE3.js";function C(){let[e,t]=A.useState([]),[n]=A.useState(()=>new I),r=w(R()),i=({scrollContainer:e})=>t=>n.dragMove(t,t=>{e.current&&(e.current.scrollLeft+=t,r.normalize())}),a=t=>e.includes(t),o=e=>{n.dragging||t(t=>t.includes(e)?t.filter(t=>t!==e):t.concat(e))};return(0,j.jsx)(z,{onMouseLeave:()=>n.dragStop(),children:(0,j.jsx)(u,{...r.menuProps,LeftArrow:E,RightArrow:D,onMouseDown:()=>n.dragStart,onMouseUp:()=>n.dragStop,onMouseMove:i,children:r.slides.map(({itemId:e,realId:t})=>(0,j.jsx)(k,{realId:t,itemId:e,onClick:()=>o(t),selected:a(t)},e))})})}function w(e,t=M){let[n]=A.useState(()=>F(e,t)),r=A.useRef(null),i=n[t].itemId,a=n[n.length-t].itemId,o=A.useCallback(()=>{let e=r.current,t=e?.querySelector(`[data-key='${i}']`),n=e?.querySelector(`[data-key='${a}']`);if(!e||!t||!n)return;let o=t.offsetLeft,s=n.offsetLeft-o,c=e.scrollLeft;c>=o+s?e.scrollLeft=c-s:c<o&&(e.scrollLeft=c+s)},[i,a]),s=ne(o,150);l(()=>s.cancel());let c=typeof window<`u`&&`onscrollend`in window;return A.useEffect(()=>{let e=r.current;if(!(!e||!c))return e.addEventListener(`scrollend`,o),()=>e.removeEventListener(`scrollend`,o)},[o,c]),A.useLayoutEffect(()=>{let e=r.current,t=e?.querySelector(`[data-key='${i}']`);e&&t&&(e.scrollLeft=t.offsetLeft)},[i]),{slides:n,normalize:o,menuProps:{containerRef:r,onScroll:c?void 0:()=>s()}}}function T(e){let t=A.useContext(f),n=t.useIsVisible(e,!0),r=t.useIsVisible(N(e),!1),i=t.useIsVisible(P(e),!1);return n||r||i}function E(){let e=A.useContext(f);return(0,j.jsx)(O,{onClick:()=>e.scrollPrev(),testId:`left-arrow`,children:`Left`})}function D(){let e=A.useContext(f);return(0,j.jsx)(O,{onClick:()=>e.scrollNext(),testId:`right-arrow`,children:`Right`})}function O({children:e,onClick:t,testId:n}){return(0,j.jsx)(B,{onClick:t,"data-testid":n,children:e})}function k({onClick:e,selected:t,realId:n,itemId:r}){let i=A.useContext(f).useIsVisible(r,!0),a=T(n);return(0,j.jsxs)(V,{"data-cy":r,"data-visible":i,onClick:e,onKeyDown:t=>{t.code===`Enter`&&e()},"data-testid":`card`,role:`button`,tabIndex:0,className:`card`,visible:a,selected:t,children:[(0,j.jsxs)(`div`,{className:`header`,children:[(0,j.jsx)(`div`,{children:n}),(0,j.jsxs)(`div`,{className:`visible`,children:[`visible: `,JSON.stringify(a)]}),(0,j.jsxs)(`div`,{className:`selected`,children:[`selected: `,JSON.stringify(!!t)]})]}),(0,j.jsx)(`div`,{className:`background`})]})}var A,j,M,N,P,F,I,L,R,z,B,V;function H(){return(H=t((()=>{o(),A=e(n(),1),ee(),c(),j=r(),M=6,N=e=>`${e}-lc`,P=e=>`${e}-rc`,F=(e,t)=>{let n=e.slice(-t).map(e=>({itemId:N(e),realId:e})),r=e.slice(0,t).map(e=>({itemId:P(e),realId:e})),i=e.map(e=>({itemId:e,realId:e}));return[...n,...i,...r]},I=class{clicked;dragging;position;resetId;constructor(){this.clicked=!1,this.dragging=!1,this.position=0,this.resetId=0}dragStart=e=>{window.cancelAnimationFrame(this.resetId),this.position=e.clientX,this.clicked=!0};dragStop=()=>{this.clicked=!1,this.resetId=window.requestAnimationFrame(()=>{this.dragging=!1})};dragMove=(e,t)=>{let n=this.position-e.clientX;this.clicked&&Math.abs(n)>5&&(this.dragging=!0,this.position=e.clientX,t(n))}},L=e=>`test${e}`,R=()=>Array(10).fill(0).map((e,t)=>L(t)),z=i(`div`)({"& .react-horizontal-scrolling-menu--scroll-container::-webkit-scrollbar":{display:`none`},"& .react-horizontal-scrolling-menu--scroll-container":{scrollbarWidth:`none`,"-ms-overflow-style":`none`}}),B=i(`button`)({cursor:`pointer`,display:`flex`,flexDirection:`column`,justifyContent:`center`,marginBottom:`2px`,userSelect:`none`,borderRadius:`6px`,borderWidth:`1px`}),V=i(`div`)(e=>({border:`1px solid`,display:`inline-block`,margin:`0 10px`,width:`160px`,userSelect:`none`,borderRadius:`8px`,overflow:`hidden`,"& .header":{backgroundColor:`white`},"& .visible":{backgroundColor:e.visible?`transparent`:`gray`},"& .background":{backgroundColor:e.selected?`green`:`bisque`,height:`200px`}})),C.__docgenInfo={description:``,methods:[],displayName:`InfiniteLoop`}})))()}var U;function W(){return(W=t((()=>{U=`import 'react-horizontal-scrolling-menu/dist/styles.css';

import styled from '@emotion/styled';
import React from 'react';
import {
  type publicApiType,
  ScrollMenu,
  VisibilityContext,
} from 'react-horizontal-scrolling-menu';
import { useDebounceCallback, useUnmount } from 'usehooks-ts';

// Two pages per side: the clone zone must cover a viewport (identical
// frames around a jump), with room to spare so a Next click from the page
// straddling the seam never clamps at the end of the row.
const CLONES_PER_SIDE = 6;

export function InfiniteLoop() {
  const [selected, setSelected] = React.useState<string[]>([]);

  // NOTE: for drag by mouse
  const [dragManager] = React.useState(() => new DragDealer());

  const loop = useInfiniteLoop(getItemIds());

  // normalize() inside the drag keeps the seam crossable mid-gesture.
  const handleDrag =
    ({ scrollContainer }: publicApiType) =>
    (ev: React.MouseEvent) =>
      dragManager.dragMove(ev, (posDiff) => {
        if (scrollContainer.current) {
          scrollContainer.current.scrollLeft += posDiff;
          loop.normalize();
        }
      });

  const isItemSelected = (id: string): boolean => selected.includes(id);

  // Keyed by real id — clicking a clone selects its twin.
  const handleItemClick = (realId: string) => {
    if (dragManager.dragging) {
      return;
    }
    setSelected((currentSelected) =>
      currentSelected.includes(realId)
        ? currentSelected.filter((el) => el !== realId)
        : currentSelected.concat(realId),
    );
  };

  return (
    <NoScrollbar onMouseLeave={() => dragManager.dragStop()}>
      <ScrollMenu
        {...loop.menuProps}
        LeftArrow={LeftArrow}
        RightArrow={RightArrow}
        onMouseDown={() => dragManager.dragStart}
        onMouseUp={() => dragManager.dragStop}
        onMouseMove={handleDrag}
      >
        {loop.slides.map(({ itemId, realId }) => (
          <Card
            realId={realId}
            itemId={itemId} // NOTE: must be unique — clones get a suffix
            key={itemId}
            onClick={() => handleItemClick(realId)}
            selected={isItemSelected(realId)}
          />
        ))}
      </ScrollMenu>
    </NoScrollbar>
  );
}
export default InfiniteLoop;

// The loop, packaged: cloned slides, the pre-paint start jump and the
// seam teleport. Spread \`menuProps\` onto ScrollMenu, render \`slides\`,
// and call \`normalize()\` after moving scrollLeft by hand (e.g. inside a
// drag). \`itemIds\` are read once, on the first render.
function useInfiniteLoop(
  itemIds: string[],
  clonesPerSide: number = CLONES_PER_SIDE,
) {
  const [slides] = React.useState(() => getSlides(itemIds, clonesPerSide));

  // Receives the scroll container div itself.
  const containerRef = React.useRef<HTMLDivElement | null>(null);

  // Seam markers come from the data — itemId can be anything.
  const firstRealId = slides[clonesPerSide].itemId;
  const firstRightCloneId = slides[slides.length - clonesPerSide].itemId;

  // Shift by one loop length when settled inside a clone zone. Pure
  // geometry and idempotent — visibility flags lag and must not gate it.
  const normalize = React.useCallback(() => {
    const el = containerRef.current;
    const first = el?.querySelector<HTMLElement>(\`[data-key='\${firstRealId}']\`);
    const firstClone = el?.querySelector<HTMLElement>(
      \`[data-key='\${firstRightCloneId}']\`,
    );
    if (!el || !first || !firstClone) {
      return;
    }

    const realStart = first.offsetLeft;
    const loopLength = firstClone.offsetLeft - realStart;
    const x = el.scrollLeft;

    if (x >= realStart + loopLength) {
      el.scrollLeft = x - loopLength;
    } else if (x < realStart) {
      el.scrollLeft = x + loopLength;
    }
  }, [firstRealId, firstRightCloneId]);

  // 'scrollend' fires when scrolling truly ends; debounce covers Safari.
  const settle = useDebounceCallback(normalize, 150);
  useUnmount(() => settle.cancel());

  const hasScrollEnd = typeof window !== 'undefined' && 'onscrollend' in window;
  React.useEffect(() => {
    const el = containerRef.current;
    if (!el || !hasScrollEnd) {
      return;
    }
    el.addEventListener('scrollend', normalize);
    return () => el.removeEventListener('scrollend', normalize);
  }, [normalize, hasScrollEnd]);

  // Start on the first real item, before first paint.
  React.useLayoutEffect(() => {
    const el = containerRef.current;
    const first = el?.querySelector<HTMLElement>(\`[data-key='\${firstRealId}']\`);
    if (el && first) {
      el.scrollLeft = first.offsetLeft;
    }
  }, [firstRealId]);

  return {
    slides,
    normalize,
    menuProps: {
      containerRef,
      onScroll: hasScrollEnd ? undefined : () => settle(),
    },
  };
}

const leftCloneId = (id: string) => \`\${id}-lc\`;
const rightCloneId = (id: string) => \`\${id}-rc\`;

// Clones render exactly like their twins; unique itemId is the only
// difference — title, selection and clicks all use the real id.
const getSlides = (ids: string[], clonesPerSide: number) => {
  const left = ids
    .slice(-clonesPerSide)
    .map((id) => ({ itemId: leftCloneId(id), realId: id }));
  const right = ids
    .slice(0, clonesPerSide)
    .map((id) => ({ itemId: rightCloneId(id), realId: id }));
  const real = ids.map((id) => ({ itemId: id, realId: id }));

  return [...left, ...real, ...right];
};

// An item is visible when any twin is: the raw per-element flag goes
// stale for a frame right after a teleport and would blink the header.
function useLoopItemVisible(realId: string) {
  const visibility = React.useContext<publicApiType>(VisibilityContext);
  const realVisible = visibility.useIsVisible(realId, true);
  const leftTwinVisible = visibility.useIsVisible(leftCloneId(realId), false);
  const rightTwinVisible = visibility.useIsVisible(rightCloneId(realId), false);
  return realVisible || leftTwinVisible || rightTwinVisible;
}

class DragDealer {
  clicked: boolean;
  dragging: boolean;
  position: number;
  resetId: number;

  constructor() {
    this.clicked = false;
    this.dragging = false;
    this.position = 0;
    this.resetId = 0;
  }

  public dragStart = (ev: React.MouseEvent) => {
    // A pending reset from the previous drag would kill this one.
    window.cancelAnimationFrame(this.resetId);
    this.position = ev.clientX;
    this.clicked = true;
  };

  public dragStop = () => {
    // Stop applying immediately; clear \`dragging\` a frame later so item
    // onClick (which fires after mouseup) still sees it and suppresses
    // the click.
    this.clicked = false;
    this.resetId = window.requestAnimationFrame(() => {
      this.dragging = false;
    });
  };

  public dragMove = (ev: React.MouseEvent, cb: (posDiff: number) => void) => {
    const newDiff = this.position - ev.clientX;

    if (this.clicked && Math.abs(newDiff) > 5) {
      this.dragging = true;
      this.position = ev.clientX;
      cb(newDiff);
    }
  };
}

const getId = (index: number) => \`\${'test'}\${index}\`;

const getItemIds = () =>
  Array(10)
    .fill(0)
    .map((_, ind) => getId(ind));

const NoScrollbar = styled('div')({
  '& .react-horizontal-scrolling-menu--scroll-container::-webkit-scrollbar': {
    display: 'none',
  },
  '& .react-horizontal-scrolling-menu--scroll-container': {
    scrollbarWidth: 'none',
    '-ms-overflow-style': 'none',
  },
});

// Always enabled: the stock arrow hooks track the outermost items — here
// those are clones, so they'd flash disabled at the seam.
function LeftArrow() {
  const visibility = React.useContext<publicApiType>(VisibilityContext);

  return (
    <Arrow onClick={() => visibility.scrollPrev()} testId="left-arrow">
      Left
    </Arrow>
  );
}

function RightArrow() {
  const visibility = React.useContext<publicApiType>(VisibilityContext);

  return (
    <Arrow onClick={() => visibility.scrollNext()} testId="right-arrow">
      Right
    </Arrow>
  );
}

function Arrow({
  children,
  onClick,
  testId,
}: {
  children: React.ReactNode;
  onClick: VoidFunction;
  testId: string;
}) {
  return (
    <ArrowButton onClick={onClick} data-testid={testId}>
      {children}
    </ArrowButton>
  );
}
const ArrowButton = styled('button')({
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  marginBottom: '2px',
  userSelect: 'none',
  borderRadius: '6px',
  borderWidth: '1px',
});

function Card({
  onClick,
  selected,
  realId,
  itemId,
}: {
  onClick: VoidFunction;
  selected: boolean;
  realId: string;
  itemId: string;
}) {
  const visibility = React.useContext<publicApiType>(VisibilityContext);
  // Raw flag of this element — kept on data-visible for the play tests.
  const ownVisible = visibility.useIsVisible(itemId, true);
  const isVisible = useLoopItemVisible(realId);

  return (
    <CardBody
      data-cy={itemId}
      data-visible={ownVisible}
      onClick={onClick}
      onKeyDown={(ev: React.KeyboardEvent) => {
        ev.code === 'Enter' && onClick();
      }}
      data-testid="card"
      role="button"
      tabIndex={0}
      className="card"
      visible={isVisible}
      selected={selected}
    >
      <div className="header">
        <div>{realId}</div>
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
`})))()}var G,K,q,J,Y,X,Z,Q;function $(){return($=t((()=>{n(),p(),d(),oe(),s(),h(),ie(),H(),W(),G=r(),{expect:K,waitFor:q,within:J}=__STORYBOOK_MODULE_TEST__,Y={title:`Examples/InfiniteLoop`,component:C,decorators:[e=>(0,G.jsx)(re,{children:(0,G.jsx)(e,{})})]},X={},m(X,{code:U,availableImports:te,modifyEditor:a}),Z={tags:[`test-only`],play:async({canvasElement:e})=>{let t=J(e),n=new ae(t,{leftArrow:`left-arrow`,rightArrow:`right-arrow`});await n.isReady(),await q(()=>{let t=x(e);K(t.scrollLeft).toBe(_(t).realStart)},{timeout:5e3}),await y(e,[`test0`,`test1`,`test2`],`init`),await S(e,async()=>{await n.clickPrev(),await y(e,[`test7`,`test8`,`test9`],`wrap-back`),await b(e)}),await S(e,async()=>{await n.clickNext(),await y(e,[`test0`,`test1`,`test2`],`wrap-fwd`),await b(e)}),await n.clickNext(),await y(e,[`test3`,`test4`,`test5`],`lap1`),await n.clickNext(),await y(e,[`test6`,`test7`,`test8`],`lap2`),await n.clickNext(),await y(e,[`test9`,`test0-rc`,`test1-rc`],`straddle`),await n.clickNext(),await y(e,[`test2`,`test3`,`test4`],`seam`),await b(e);let[r]=await n.getCards(`test1`);r.click(),await q(async()=>{K(await n.getSelectedCardsKeys()).toEqual([`test1`,`test1`])},{timeout:5e3});let[i]=v(e);await g(i,{delta:{x:-350,y:0}}),await y(e,[`test4`,`test5`,`test6`],`drag-fwd`),await b(e);let[a]=v(e);await g(a,{delta:{x:900,y:0}}),await y(e,[`test9`,`test0-rc`,`test1-rc`],`drag-back`),await b(e)}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  tags: ['test-only'],
  play: async ({
    canvasElement: storyRoot
  }) => {
    const canvas = within(storyRoot);
    const testObj = new TestObj(canvas, {
      leftArrow: 'left-arrow',
      rightArrow: 'right-arrow'
    });
    await testObj.isReady();

    // Layout effect put the row exactly on the first real item.
    await waitFor(() => {
      const el = getScrollEl(storyRoot);
      expect(el.scrollLeft).toBe(getZone(el).realStart);
    }, {
      timeout: 5000
    });
    await expectVisibleKeys(storyRoot, ['test0', 'test1', 'test2'], 'init');

    // Backward across the seam and forward again. Settled cards must never
    // blink back to \`visible: false\` while the observer catches up with
    // the teleport.
    await expectNoBlink(storyRoot, async () => {
      await testObj.clickPrev();
      await expectVisibleKeys(storyRoot, ['test7', 'test8', 'test9'], 'wrap-back');
      await inRealZone(storyRoot);
    });
    await expectNoBlink(storyRoot, async () => {
      await testObj.clickNext();
      await expectVisibleKeys(storyRoot, ['test0', 'test1', 'test2'], 'wrap-fwd');
      await inRealZone(storyRoot);
    });

    // Full forward lap; the 9|0-1 page legitimately shows clones, and the
    // click after it must land page-aligned past the seam.
    await testObj.clickNext();
    await expectVisibleKeys(storyRoot, ['test3', 'test4', 'test5'], 'lap1');
    await testObj.clickNext();
    await expectVisibleKeys(storyRoot, ['test6', 'test7', 'test8'], 'lap2');
    await testObj.clickNext();
    await expectVisibleKeys(storyRoot, ['test9', 'test0-rc', 'test1-rc'], 'straddle');
    await testObj.clickNext();
    await expectVisibleKeys(storyRoot, ['test2', 'test3', 'test4'], 'seam');
    await inRealZone(storyRoot);

    // Clone clicks select the real item — real card + its twin highlight.
    const [test1Card] = await testObj.getCards('test1');
    test1Card.click();
    await waitFor(async () => {
      expect(await testObj.getSelectedCardsKeys()).toEqual(['test1', 'test1']);
    }, {
      timeout: 5000
    });

    // Drag forward: increments are relative, 350px lands two cards over.
    const [dragFrom] = getVisibleCards(storyRoot);
    await drag(dragFrom, {
      delta: {
        x: -350,
        y: 0
      }
    });
    await expectVisibleKeys(storyRoot, ['test4', 'test5', 'test6'], 'drag-fwd');
    await inRealZone(storyRoot);

    // Drag backward through the seam: normalize() runs inside the drag,
    // so the row teleports mid-gesture and keeps following the cursor.
    const [dragFrom2] = getVisibleCards(storyRoot);
    await drag(dragFrom2, {
      delta: {
        x: 900,
        y: 0
      }
    });
    await expectVisibleKeys(storyRoot, ['test9', 'test0-rc', 'test1-rc'], 'drag-back');
    await inRealZone(storyRoot);
  }
}`,...Z.parameters?.docs?.source}}},Q=[`InfiniteLoop`,`Test`]})))()}$();export{X as InfiniteLoop,Z as Test,Q as __namedExportsOrder,Y as default};