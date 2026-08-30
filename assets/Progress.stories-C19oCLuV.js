import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{_ as i,a,g as o,i as s,n as c,o as l,r as u,s as d,t as f,v as p,y as m}from"./dist-oGMj_wFx.js";import{n as h,t as g}from"./SizeWrapper-D7kux-98.js";import{a as _,n as v,o as y,s as b}from"./test-CHHlmwCw.js";function x(){let[e]=D.useState(()=>F(30)),[t,n]=D.useState([]),r=e=>!!t.find(t=>t===e),i=e=>{let t=r(e);n(n=>t?n.filter(t=>t!==e):n.concat(e))};return(0,O.jsx)(`div`,{children:(0,O.jsx)(j,{children:(0,O.jsx)(u,{LeftArrow:S,RightArrow:C,onWheel:E,Footer:k,children:e.map(({id:e})=>(0,O.jsx)(T,{title:e,itemId:e,onClick:()=>i(e),selected:r(e)},e))})})})}function S(){let e=D.useContext(f),t=e.useLeftArrowVisible();return(0,O.jsx)(w,{disabled:t,onClick:()=>e.scrollPrev(),testId:`left-arrow`,children:`Left`})}function C(){let e=D.useContext(f),t=e.useRightArrowVisible();return(0,O.jsx)(w,{disabled:t,onClick:()=>e.scrollNext(),testId:`right-arrow`,children:`Right`})}function w({children:e,disabled:t,onClick:n,className:r,testId:i}){return(0,O.jsx)(M,{disabled:t,onClick:n,className:`arrow-${r}`,"data-testid":i,children:e})}function T({onClick:e,selected:t,title:n,itemId:r}){let i=D.useContext(f),a=i.useIsVisible(r,!0);return(0,O.jsxs)(N,{"data-cy":r,onClick:()=>e(i),onKeyDown:t=>{t.code===`Enter`&&e(i)},"data-testid":`card`,role:`button`,tabIndex:0,className:`card`,visible:a,selected:t,children:[(0,O.jsxs)(`div`,{className:`header`,children:[(0,O.jsx)(`div`,{children:n}),(0,O.jsxs)(`div`,{className:`visible`,children:[`visible: `,JSON.stringify(a)]}),(0,O.jsxs)(`div`,{className:`selected`,children:[`selected: `,JSON.stringify(!!t)]})]}),(0,O.jsx)(`div`,{className:`background`})]})}function E(e,t){if(Math.abs(t.deltaX)!==0||Math.abs(t.deltaY)<15){t.stopPropagation();return}t.deltaY<0?e.scrollNext():e.scrollPrev()}var D,O,k,A,j,M,N,P,F;function I(){return(I=t((()=>{o(),D=e(n(),1),c(),O=r(),k=()=>{let e=D.useContext(f),{items:t}=e,[n,r]=D.useState([]);if(D.useEffect(()=>{if(t){let e,n=()=>{clearTimeout(e),e=setTimeout(()=>requestAnimationFrame(()=>r(t.getVisible())),200)};return t.subscribe(`onInit`,n),t.subscribe(`onUpdate`,n),n(),()=>{clearTimeout(e),t.unsubscribe(`onInit`,n),t.unsubscribe(`onUpdate`,n)}}},[t]),!n.length)return null;let i=t?.size,a=n.length,o=Math.ceil(i/a),s=+n.slice(-1)[0][1].index,c=Math.ceil(s/a),l=Array(o).fill(1).map((e,t)=>t+1),u=(c-1)*a,d=i-a*c,p=t=>{let n=t*a-1;e.scrollToItem(e.getItemByIndex(n))};return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(A,{children:l.map(e=>(0,O.jsx)(`button`,{"data-testid":`page-${e}`,onClick:()=>p(e),onKeyDown:t=>{t.code===`Space`&&p(e)},className:`page-btn ${e===c?`active`:``}`,children:e},e))}),(0,O.jsx)(A,{children:(0,O.jsxs)(`div`,{children:[(0,O.jsxs)(`div`,{children:[`Items on the left: `,(0,O.jsx)(`span`,{"data-testid":`items-left`,children:u})]}),(0,O.jsxs)(`div`,{children:[`Items on the right:`,` `,(0,O.jsx)(`span`,{"data-testid":`items-right`,children:d})]})]})})]})},A=i(`div`)({"&":{display:`flex`,justifyContent:`center`,gap:`5px`,margin:`10px`},"& button.active":{color:`red`}}),j=i(`div`)({"& .react-horizontal-scrolling-menu--scroll-container::-webkit-scrollbar":{display:`none`},"& .react-horizontal-scrolling-menu--scroll-container":{scrollbarWidth:`none`,"-ms-overflow-style":`none`}}),M=i(`button`)(e=>({cursor:`pointer`,display:`flex`,flexDirection:`column`,justifyContent:`center`,marginBottom:`2px`,opacity:e.disabled?`0`:`1`,userSelect:`none`,borderRadius:`6px`,borderWidth:`1px`})),N=i(`div`)(e=>({border:`1px solid`,display:`inline-block`,margin:`0 10px`,width:`160px`,userSelect:`none`,borderRadius:`8px`,overflow:`hidden`,"& .header":{backgroundColor:`white`},"& .visible":{backgroundColor:e.visible?`transparent`:`gray`},"& .background":{backgroundColor:e.selected?`green`:`bisque`,height:`200px`}})),P=e=>`test${e}`,F=(e=10)=>Array(e).fill(0).map((e,t)=>({id:P(t)})),x.__docgenInfo={description:``,methods:[],displayName:`Progress`}})))()}var L;function R(){return(R=t((()=>{L=`import 'react-horizontal-scrolling-menu/dist/styles.css';

import styled from '@emotion/styled';
import React from 'react';
import {
  type publicApiType,
  ScrollMenu,
  VisibilityContext,
} from 'react-horizontal-scrolling-menu';

export function Progress() {
  const [items] = React.useState(() => getItems(30));
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
    <div>
      <NoScrollbar>
        <ScrollMenu
          LeftArrow={LeftArrow}
          RightArrow={RightArrow}
          onWheel={onWheel}
          Footer={Footer}
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
  );
}

const Footer = () => {
  const visibility = React.useContext<publicApiType>(VisibilityContext);
  const { items } = visibility;
  const [visible, setVisible] = React.useState<[string, { index: string }][]>(
    [],
  );

  // Need to update this component
  // listening to 'onUpdate' event with some debounce.
  // 'onInit' covers the very first classification (it fires instead of
  // 'onUpdate' there), and the immediate call picks the state up when the
  // first batch landed before this effect ran — otherwise the footer would
  // wait for the next scroll to appear.
  React.useEffect(() => {
    if (items) {
      let timer: ReturnType<typeof setTimeout>;
      const cb = () => {
        clearTimeout(timer);
        timer = setTimeout(
          () => requestAnimationFrame(() => setVisible(items.getVisible())),
          200,
        );
      };
      items.subscribe('onInit', cb);
      items.subscribe('onUpdate', cb);
      cb();

      return () => {
        clearTimeout(timer);
        items.unsubscribe('onInit', cb);
        items.unsubscribe('onUpdate', cb);
      };
    }
  }, [items]);

  if (!visible.length) {
    return null;
  }

  const total = items?.size;
  const visibleItemsLen = visible.length;
  const totalPages = Math.ceil(total / visibleItemsLen);
  const lastVisibleInd = +visible.slice(-1)[0][1].index;
  const currentPage = Math.ceil(lastVisibleInd / visibleItemsLen);
  const pages = Array(totalPages)
    .fill(1)
    .map((_, ind) => ind + 1);
  const itemsLeft = (currentPage - 1) * visibleItemsLen;
  const itemsRight = total - visibleItemsLen * currentPage;

  const scrollToPage = (page: number) => {
    const itemInd = page * visibleItemsLen - 1;
    visibility.scrollToItem(visibility.getItemByIndex(itemInd));
  };

  return (
    <>
      <FooterContainer>
        {pages.map((page) => (
          <button
            key={page}
            data-testid={\`page-\${page}\`}
            onClick={() => scrollToPage(page)}
            onKeyDown={(ev) => {
              if (ev.code === 'Space') {
                scrollToPage(page);
              }
            }}
            className={\`page-btn \${page === currentPage ? 'active' : ''}\`}
          >
            {page}
          </button>
        ))}
      </FooterContainer>
      <FooterContainer>
        <div>
          <div>
            Items on the left: <span data-testid="items-left">{itemsLeft}</span>
          </div>
          <div>
            Items on the right:{' '}
            <span data-testid="items-right">{itemsRight}</span>
          </div>
        </div>
      </FooterContainer>
    </>
  );
};

const FooterContainer = styled('div')({
  '&': {
    display: 'flex',
    justifyContent: 'center',
    gap: '5px',
    margin: '10px',
  },
  '& button.active': {
    color: 'red',
  },
});

export default Progress;

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

const getItems = (count: number = 10) =>
  Array(count)
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
`})))()}var z,B,V,H,U,W,G,K,q;function J(){return(J=t((()=>{n(),p(),d(),s(),h(),_(),I(),R(),z=r(),{expect:B,userEvent:V,waitFor:H,within:U}=__STORYBOOK_MODULE_TEST__,W={title:`Examples/Progress`,component:x,decorators:[e=>(0,z.jsx)(g,{children:(0,z.jsx)(e,{})})]},G={},m(G,{code:L,availableImports:l,modifyEditor:a}),K={tags:[`test-only`],play:async({canvasElement:e})=>{let t=U(e),n=new v(t,{leftArrow:y,rightArrow:b}),r=async e=>H(()=>B(t.queryAllByTestId(/page-/)).toHaveLength(e)),i=async e=>H(()=>{let n=t.queryAllByTestId(/page-/).filter(e=>e.className.includes(`active`));B(n[0]?.textContent).toEqual(e)}),a=async(e,n)=>H(async()=>{B((await t.findByTestId(`items-left`)).textContent).toEqual(e),B((await t.findByTestId(`items-right`)).textContent).toEqual(n)});await n.expectVisibleCards([`test0`,`test1`,`test2`]),await a(`0`,`27`),await r(10),await i(`1`),await V.click(t.getByTestId(`page-5`)),await r(10),await n.expectVisibleCards([`test12`,`test13`,`test14`]),await i(`5`),await a(`12`,`15`),await V.click(t.getByTestId(`page-10`)),await r(10),await n.expectVisibleCards([`test27`,`test28`,`test29`]),await i(`10`),await a(`27`,`0`)}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  tags: ['test-only'],
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const testObj = new TestObj(canvas, {
      leftArrow: leftArrowSelector,
      rightArrow: rightArrowSelector
    });
    // The progress footer is driven by the same visibility state as the cards
    // but mounts and updates a beat behind them, so everything it renders has
    // to be polled rather than read once.
    const expectPages = async (count: number) => waitFor(() => expect(canvas.queryAllByTestId(/page-/)).toHaveLength(count));
    const expectActivePage = async (page: string) => waitFor(() => {
      const active = canvas.queryAllByTestId(/page-/).filter(el => el.className.includes('active'));
      expect(active[0]?.textContent).toEqual(page);
    });
    const expectItemCounts = async (left: string, right: string) => waitFor(async () => {
      expect((await canvas.findByTestId('items-left')).textContent).toEqual(left);
      expect((await canvas.findByTestId('items-right')).textContent).toEqual(right);
    });
    await testObj.expectVisibleCards(['test0', 'test1', 'test2']);
    await expectItemCounts('0', '27');
    await expectPages(10);
    await expectActivePage('1');
    await userEvent.click(canvas.getByTestId('page-5'));
    await expectPages(10);
    await testObj.expectVisibleCards(['test12', 'test13', 'test14']);
    await expectActivePage('5');
    await expectItemCounts('12', '15');
    await userEvent.click(canvas.getByTestId('page-10'));
    await expectPages(10);
    await testObj.expectVisibleCards(['test27', 'test28', 'test29']);
    await expectActivePage('10');
    await expectItemCounts('27', '0');
  }
}`,...K.parameters?.docs?.source}}},q=[`Progress`,`Test`]})))()}J();export{G as Progress,K as Test,q as __namedExportsOrder,W as default};