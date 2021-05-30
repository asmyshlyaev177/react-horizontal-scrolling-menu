import React from "react";
// import React from '../node_modules/react'

import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

const elemPrefix = "test";
const getId = (index) => `${elemPrefix}${index}`;

const getItems = () =>
  Array(20)
    .fill(0)
    .map((_, ind) => ({ id: getId(ind) }));

function App() {
  const [items, setItems] = React.useState(getItems);
  const [selected, setSelected] = React.useState([]);
  const [position, setPosition] = React.useState(300);
  const [mounted, setMounted] = React.useState(false);

  function savePosition({ scrollContainer }) {
    setPosition(scrollContainer.scrollLeft);
  }

  React.useEffect(() => {
    setTimeout(() => {
      const newItems = items.concat(
        Array(5)
          .fill(0)
          .map((_, ind) => ({ id: getId(items.length + ind) }))
      );
      console.log("push new items");
      setItems(newItems);
    }, 3000);
  }, []);

  const toggleSelected = (id) => {
    const isSelected = selected.find((el) => el === id);

    setSelected((currentSelected) =>
      isSelected
        ? currentSelected.filter((el) => el !== id)
        : currentSelected.concat(id)
    );
  };

  // console.log({ mounted })
  // NOTE: can use items without id for padding
  return (
    <div style={{ opacity: +mounted }}>
      <ScrollMenu
        LeftArrow={LeftArrow}
        RightArrow={RightArrow}
        onInit={({ scrollContainer }) => {
          scrollContainer.scrollLeft = position;
          setMounted(true);
        }}
        onScroll={savePosition}
      >
        {items.map(({ id }) => (
          <Card
            id={id}
            key={id}
            onClick={() => toggleSelected(id)}
            selected={!!selected.find((el) => el === id)}
          />
        ))}
      </ScrollMenu>
    </div>
  );
}

function LeftArrow() {
  const { getPrevItem, isFirstItemVisible } = React.useContext(VisibilityContext)

  const onClick = () => {
    const prevItem = getPrevItem()?.entry?.target;

    // NOTE: can scroll to last item if start reached
    // const lastItem = allItems?.slice(-1)?.[0]?.entry?.target
    // const item = prevItem || lastItem

    const item = prevItem;
    item &&
      item.scrollIntoView({
        behavior: "smooth",
        inline: "end",
      });
  };

  return (
    <Arrow disabled={isFirstItemVisible} onClick={onClick}>
      Left
    </Arrow>
  );
}

function RightArrow() {
  const { getNextItem, isLastItemVisible } = React.useContext(VisibilityContext)

  const onClick = () => {
    const nextItem = getNextItem()?.entry?.target;

    // NOTE: can scroll to first item if end reached
    // const firstItem = allItems?.[0]?.entry?.target
    // const item = nextItem || firstItem

    const item = nextItem;
    item &&
      item.scrollIntoView({
        behavior: "smooth",
        inline: "start",
      });
  };

  return (
    <Arrow disabled={isLastItemVisible} onClick={onClick}>
      Right
    </Arrow>
  );
}

function Arrow({ children, disabled, onClick }) {
  return (
    <div
      disabled={disabled}
      onClick={onClick}
      style={{
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        right: "1%",
        opacity: disabled ? "0" : "1",
        userSelect: "none",
      }}
    >
      {children}
    </div>
  );
}

function Card({ id, onClick, selected }) {
  const { isItemVisible } = React.useContext(VisibilityContext)


  return (
    <div
      onClick={onClick}
      style={{
        border: "1px solid",
        display: "inline-block",
        margin: "0 10px",
        width: "160px",
      }}
      tabIndex="0"
    >
      <div className="card">
        <div>{id}</div>
        <div>visible: {JSON.stringify(!!isItemVisible(id))}</div>
        <div>selected: {JSON.stringify(!!selected)}</div>
      </div>
      <div
        style={{
          backgroundColor: selected ? "green" : "bisque",
          height: "200px",
        }}
      />
    </div>
  );
}

export default App;
