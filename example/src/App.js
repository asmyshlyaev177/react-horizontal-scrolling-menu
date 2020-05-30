import React, { useState } from 'react'

import ScrollMenu from 'react-horizontal-scrolling-menu'

const items = Array(20)
  .fill(0)
  .map((_, ind) => ({ id: `test${ind}` }))

function App() {
  const [selected, setSelected] = useState([])

  return (
    <ScrollMenu
      items={items.map(({ id }) => (
        <Card
          id={id}
          key={id}
          onClick={(ev) => clickHandler(id, ev)}
          selected={!!selected.find((el) => el === id)}
        />
      ))}
      LeftArrow={LeftArrow}
      RightArrow={RightArrow}
    />
  )

  function clickHandler(id, ev) {
    const isSelected = selected.find((el) => el === id)

    //ev.target.scrollIntoView({ behavior: "smooth", inline: "center" });

    setSelected((selected) =>
      isSelected ? selected.filter((el) => el !== id) : selected.concat(id),
    )
  }
}

export default App

function Card({ id, onClick, selected, visible }) {
  return (
    <div
      onClick={onClick}
      style={{
        border: '1px solid',
        display: 'inline-block',
        margin: '0 10px',
        width: '160px',
      }}
    >
      <div className="card">
        <div>{id}</div>
        <div>visible: {JSON.stringify(!!visible)}</div>
        <div>selected: {JSON.stringify(!!selected)}</div>
      </div>
      <div
        style={{
          backgroundColor: selected ? 'green' : 'bisque',
          height: '200px',
        }}
      />
    </div>
  )
}

function RightArrow({ onClick, visible }) {
  return (
    <div
      disabled={!visible}
      onClick={onClick}
      style={{
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        right: '1%',
        opacity: visible ? '1' : '0',
        userSelect: 'none',
        zIndex: visible ? 10 : -1,
      }}
    >
      Right
    </div>
  )
}

function LeftArrow({ onClick, visible }) {
  return (
    <div
      disabled={!visible}
      onClick={onClick}
      style={{
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        left: '1%',
        opacity: visible ? '1' : '0',
        userSelect: 'none',
        zIndex: visible ? 10 : -1,
      }}
    >
      Left
    </div>
  )
}
