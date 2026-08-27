import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{_ as i,a,d as o,f as s,g as c,i as l,l as u,n as d,o as f,p,r as ee,s as m,t as h,u as te,v as g,y as ne}from"./dist-DdPJJPGg.js";import{n as _,t as v}from"./SizeWrapper-B5G4YiBS.js";import{a as y,i as b,n as re}from"./test-CHHlmwCw.js";import{a as ie,c as x,i as ae,o as S,r as C,s as oe}from"./loopTestUtils-BNZnGCE3.js";function w({interval:e=2e3}){let[t]=D.useState(()=>new N),n=D.useRef(null),r=se(F()),i=s(`(prefers-reduced-motion: reduce)`,{initializeWithValue:!1}),[a,c]=D.useState(!1),[l,u]=D.useState(!1),[d,f]=D.useState(!1),p=!a&&!l&&!d&&!i,m=({scrollContainer:e})=>n=>t.dragMove(n,t=>{e.current&&(e.current.scrollLeft+=t,r.normalize())});return o(()=>{let e=n.current;!e?.menuVisible.current||document.visibilityState!==`visible`||e.scrollNext()},p?e:null),(0,O.jsxs)(`div`,{children:[(0,O.jsx)(I,{children:(0,O.jsx)(`button`,{type:`button`,"data-testid":`autoplay-toggle`,onClick:()=>c(e=>!e),children:a?`Play`:`Pause`})}),(0,O.jsx)(L,{onMouseEnter:()=>u(!0),onMouseLeave:()=>{t.dragStop(),u(!1)},onTouchStart:()=>u(!0),onTouchEnd:()=>u(!1),onFocusCapture:()=>f(!0),onBlurCapture:()=>f(!1),children:(0,O.jsx)(ee,{...r.menuProps,LeftArrow:ce,RightArrow:le,apiRef:n,onMouseDown:()=>t.dragStart,onMouseUp:()=>t.dragStop,onMouseMove:m,children:r.slides.map(({itemId:e,realId:t})=>(0,O.jsx)(ue,{realId:t,itemId:e},e))})})]})}function se(e,t=k){let[n]=D.useState(()=>M(e,t)),r=D.useRef(null),i=n[t].itemId,a=n[n.length-t].itemId,o=D.useCallback(()=>{let e=r.current,t=e?.querySelector(`[data-key='${i}']`),n=e?.querySelector(`[data-key='${a}']`);if(!e||!t||!n)return;let o=t.offsetLeft,s=n.offsetLeft-o,c=e.scrollLeft;c>=o+s?e.scrollLeft=c-s:c<o&&(e.scrollLeft=c+s)},[i,a]),s=te(o,150);p(()=>s.cancel());let c=typeof window<`u`&&`onscrollend`in window;return D.useEffect(()=>{let e=r.current;if(!(!e||!c))return e.addEventListener(`scrollend`,o),()=>e.removeEventListener(`scrollend`,o)},[o,c]),D.useLayoutEffect(()=>{let e=r.current,t=e?.querySelector(`[data-key='${i}']`);e&&t&&(e.scrollLeft=t.offsetLeft)},[i]),{slides:n,normalize:o,menuProps:{containerRef:r,onScroll:c?void 0:()=>s()}}}function T(e){let t=D.useContext(h),n=t.useIsVisible(e,!0),r=t.useIsVisible(A(e),!1),i=t.useIsVisible(j(e),!1);return n||r||i}function ce(){let e=D.useContext(h);return(0,O.jsx)(E,{onClick:()=>e.scrollPrev(),testId:`left-arrow`,children:`Left`})}function le(){let e=D.useContext(h);return(0,O.jsx)(E,{onClick:()=>e.scrollNext(),testId:`right-arrow`,children:`Right`})}function E({children:e,onClick:t,testId:n}){return(0,O.jsx)(R,{onClick:t,"data-testid":n,children:e})}function ue({realId:e,itemId:t}){let n=D.useContext(h).useIsVisible(t,!0),r=T(e);return(0,O.jsxs)(z,{"data-cy":t,"data-visible":n,"data-testid":`card`,className:`card`,visible:r,children:[(0,O.jsxs)(`div`,{className:`header`,children:[(0,O.jsx)(`div`,{children:e}),(0,O.jsxs)(`div`,{className:`visible`,children:[`visible: `,JSON.stringify(r)]})]}),(0,O.jsx)(`div`,{className:`background`})]})}var D,O,k,A,j,M,N,P,F,I,L,R,z;function B(){return(B=t((()=>{c(),D=e(n(),1),d(),u(),O=r(),k=6,A=e=>`${e}-lc`,j=e=>`${e}-rc`,M=(e,t)=>{let n=e.slice(-t).map(e=>({itemId:A(e),realId:e})),r=e.slice(0,t).map(e=>({itemId:j(e),realId:e})),i=e.map(e=>({itemId:e,realId:e}));return[...n,...i,...r]},N=class{clicked;dragging;position;resetId;constructor(){this.clicked=!1,this.dragging=!1,this.position=0,this.resetId=0}dragStart=e=>{window.cancelAnimationFrame(this.resetId),this.position=e.clientX,this.clicked=!0};dragStop=()=>{this.clicked=!1,this.resetId=window.requestAnimationFrame(()=>{this.dragging=!1})};dragMove=(e,t)=>{let n=this.position-e.clientX;this.clicked&&Math.abs(n)>5&&(this.dragging=!0,this.position=e.clientX,t(n))}},P=e=>`test${e}`,F=()=>Array(10).fill(0).map((e,t)=>P(t)),I=i(`div`)({display:`flex`,justifyContent:`flex-end`,marginBottom:`8px`}),L=i(`div`)({"& .react-horizontal-scrolling-menu--scroll-container::-webkit-scrollbar":{display:`none`},"& .react-horizontal-scrolling-menu--scroll-container":{scrollbarWidth:`none`,"-ms-overflow-style":`none`}}),R=i(`button`)({cursor:`pointer`,display:`flex`,flexDirection:`column`,justifyContent:`center`,marginBottom:`2px`,userSelect:`none`,borderRadius:`6px`,borderWidth:`1px`}),z=i(`div`)(e=>({border:`1px solid`,display:`inline-block`,margin:`0 10px`,width:`160px`,userSelect:`none`,borderRadius:`8px`,overflow:`hidden`,"& .header":{backgroundColor:`white`},"& .visible":{backgroundColor:e.visible?`transparent`:`gray`},"& .background":{backgroundColor:`bisque`,height:`200px`}})),w.__docgenInfo={description:``,methods:[],displayName:`Autoplay`,props:{interval:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`2000`,computed:!1}}}}})))()}var V;function H(){return(H=t((()=>{V=`import 'react-horizontal-scrolling-menu/dist/styles.css';

import styled from '@emotion/styled';
import React from 'react';
import {
  type publicApiType,
  ScrollMenu,
  VisibilityContext,
} from 'react-horizontal-scrolling-menu';
import {
  useDebounceCallback,
  useInterval,
  useMediaQuery,
  useUnmount,
} from 'usehooks-ts';

// Autoplay on top of the InfiniteLoop recipe: a timer calls scrollNext()
// through apiRef, and the same useInfiniteLoop clone-and-teleport hook
// makes it endless. Pauses on hover, touch, focus and the Pause button,
// skips ticks in hidden tabs or when offscreen, and stays off under
// reduced motion (WCAG 2.2.2). The animation is the browser's native
// smooth scroll — \`transitionDuration\` has no effect with the default
// noPolyfill.

const CLONES_PER_SIDE = 6;

export function Autoplay({ interval = 2000 }: { interval?: number }) {
  // NOTE: for drag by mouse; the hover pause already covers dragging.
  const [dragManager] = React.useState(() => new DragDealer());

  const apiRef = React.useRef<publicApiType | null>(null);

  const loop = useInfiniteLoop(getItemIds());

  const reducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)', {
    initializeWithValue: false,
  });
  const [userPaused, setUserPaused] = React.useState(false);
  const [hoverPaused, setHoverPaused] = React.useState(false);
  const [focusPaused, setFocusPaused] = React.useState(false);

  const active = !userPaused && !hoverPaused && !focusPaused && !reducedMotion;

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

  // \`null\` removes the timer, so resuming starts a fresh, full interval.
  useInterval(
    () => {
      const api = apiRef.current;
      // A hidden tab freezes IntersectionObserver — skip, don't scroll blind.
      if (!api?.menuVisible.current || document.visibilityState !== 'visible') {
        return;
      }
      api.scrollNext();
    },
    active ? interval : null,
  );

  return (
    <div>
      <Toolbar>
        {/* Outside the hover wrapper, so clicking it can't hover-pause. */}
        <button
          type="button"
          data-testid="autoplay-toggle"
          onClick={() => setUserPaused((paused) => !paused)}
        >
          {userPaused ? 'Play' : 'Pause'}
        </button>
      </Toolbar>
      <NoScrollbar
        onMouseEnter={() => setHoverPaused(true)}
        onMouseLeave={() => {
          dragManager.dragStop();
          setHoverPaused(false);
        }}
        onTouchStart={() => setHoverPaused(true)}
        onTouchEnd={() => setHoverPaused(false)}
        onFocusCapture={() => setFocusPaused(true)}
        onBlurCapture={() => setFocusPaused(false)}
      >
        <ScrollMenu
          {...loop.menuProps}
          LeftArrow={LeftArrow}
          RightArrow={RightArrow}
          apiRef={apiRef}
          onMouseDown={() => dragManager.dragStart}
          onMouseUp={() => dragManager.dragStop}
          onMouseMove={handleDrag}
        >
          {loop.slides.map(({ itemId, realId }) => (
            <Card
              realId={realId}
              itemId={itemId} // NOTE: must be unique — clones get a suffix
              key={itemId}
            />
          ))}
        </ScrollMenu>
      </NoScrollbar>
    </div>
  );
}
export default Autoplay;

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
// difference.
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

const Toolbar = styled('div')({
  display: 'flex',
  justifyContent: 'flex-end',
  marginBottom: '8px',
});

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

function Card({ realId, itemId }: { realId: string; itemId: string }) {
  const visibility = React.useContext<publicApiType>(VisibilityContext);
  // Raw flag of this element — kept on data-visible for the play tests.
  const ownVisible = visibility.useIsVisible(itemId, true);
  const isVisible = useLoopItemVisible(realId);

  return (
    <CardBody
      data-cy={itemId}
      data-visible={ownVisible}
      data-testid="card"
      className="card"
      visible={isVisible}
    >
      <div className="header">
        <div>{realId}</div>
        <div className="visible">visible: {JSON.stringify(isVisible)}</div>
      </div>
      <div className="background" />
    </CardBody>
  );
}
const CardBody = styled('div')<{ visible?: boolean }>((props) => ({
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
    backgroundColor: 'bisque',
    height: '200px',
  },
}));
`})))()}var U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=t((()=>{n(),g(),m(),oe(),l(),_(),y(),B(),H(),U=r(),{expect:W,userEvent:G,waitFor:K,within:q}=__STORYBOOK_MODULE_TEST__,J={title:`Examples/Autoplay`,component:w,decorators:[e=>(0,U.jsx)(v,{children:(0,U.jsx)(e,{})})]},Y={},ne(Y,{code:V,availableImports:f,modifyEditor:a}),X=400,Z={tags:[`test-only`],args:{interval:X},play:async({canvasElement:e})=>{let t=q(e);await new re(t,{leftArrow:`left-arrow`,rightArrow:`right-arrow`}).isReady();let n=-1,r=!1;await K(()=>{let t=C(e).scrollLeft;n>=0&&t<n-1e3&&(r=!0),n=t,W(r).toBe(!0)},{timeout:15e3}),await S(e),await G.click(t.getByTestId(`autoplay-toggle`)),await x(1500),await S(e);let i=C(e).scrollLeft;await x(3*X),W(C(e).scrollLeft).toBe(i),await G.click(t.getByTestId(`autoplay-toggle`)),await K(()=>{W(C(e).scrollLeft).not.toBe(i)},{timeout:5e3}),await G.click(t.getByTestId(`autoplay-toggle`)),await x(1500),await S(e);let a=C(e).scrollLeft,[o]=ae(e);await b(o,{delta:{x:-350,y:0}}),await K(()=>{let t=C(e),n=t.scrollLeft-a,{loop:r}=ie(t),i=Math.abs(n-350)<=1||Math.abs(n-(350-r))<=1;W(i,`moved=${n}`).toBe(!0)},{timeout:5e3}),await S(e)}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{}`,...Y.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  tags: ['test-only'],
  args: {
    interval: INTERVAL
  },
  play: async ({
    canvasElement: storyRoot
  }) => {
    const canvas = within(storyRoot);
    const testObj = new TestObj(canvas, {
      leftArrow: 'left-arrow',
      rightArrow: 'right-arrow'
    });
    await testObj.isReady();

    // Ticks only scroll forward; a big backward jump can only be the seam
    // teleport — seeing one proves autoplay wrapped around.
    let prevX = -1;
    let sawWrap = false;
    await waitFor(() => {
      const x = getScrollEl(storyRoot).scrollLeft;
      if (prevX >= 0 && x < prevX - 1000) {
        sawWrap = true;
      }
      prevX = x;
      expect(sawWrap).toBe(true);
    }, {
      timeout: 15000
    });
    await inRealZone(storyRoot);

    // Pause removes the timer; once the in-flight animation and settle
    // finish, the row must freeze.
    await userEvent.click(canvas.getByTestId('autoplay-toggle'));
    await sleep(1500);
    await inRealZone(storyRoot);
    const frozen = getScrollEl(storyRoot).scrollLeft;
    await sleep(3 * INTERVAL);
    expect(getScrollEl(storyRoot).scrollLeft).toBe(frozen);

    // Resume starts a fresh timer.
    await userEvent.click(canvas.getByTestId('autoplay-toggle'));
    await waitFor(() => {
      expect(getScrollEl(storyRoot).scrollLeft).not.toBe(frozen);
    }, {
      timeout: 5000
    });

    // Pause again so the drag is the only movement source.
    await userEvent.click(canvas.getByTestId('autoplay-toggle'));
    await sleep(1500);
    await inRealZone(storyRoot);

    // Drag moves by exactly the dragged distance — minus one loop length
    // if it crossed the seam and teleported mid-gesture.
    const before = getScrollEl(storyRoot).scrollLeft;
    const [dragFrom] = getVisibleCards(storyRoot);
    await drag(dragFrom, {
      delta: {
        x: -350,
        y: 0
      }
    });
    await waitFor(() => {
      const el = getScrollEl(storyRoot);
      const moved = el.scrollLeft - before;
      const {
        loop
      } = getZone(el);
      const ok = Math.abs(moved - 350) <= 1 || Math.abs(moved - (350 - loop)) <= 1;
      expect(ok, \`moved=\${moved}\`).toBe(true);
    }, {
      timeout: 5000
    });
    await inRealZone(storyRoot);
  }
}`,...Z.parameters?.docs?.source}}},Q=[`Autoplay`,`Test`]})))()}$();export{Y as Autoplay,Z as Test,Q as __namedExportsOrder,J as default};