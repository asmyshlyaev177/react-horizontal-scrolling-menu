import React, { useState } from 'react'

import ScrollMenu from 'react-horizontal-scrolling-menu'

const getId = (index) => `test${index}`

const items = Array(20)
  .fill(0)
  .map((_, ind) => ({ id: getId(ind) }))

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

    //ev.target.scrollIntoView({ behavior: 'smooth', inline: 'center' })

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
      tabIndex="0"
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

function LeftArrow({ scrollLeft: onClick, visibleItems = [] }) {
  const visible = visibleItems.length
    ? !visibleItems.includes(items[0].id)
    : false

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

function RightArrow({ scrollLeft: onClick, visibleItems = [] }) {
  const visible = visibleItems.length
    ? !visibleItems.includes(items.slice(-1)[0].id)
    : true

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
