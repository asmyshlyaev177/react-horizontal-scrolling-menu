import React, { useState } from 'react'

import ScrollMenu from 'react-horizontal-scrolling-menu'

const elemPrefix = 'test'
const getId = (index) => `${elemPrefix}${index}`
const getIndex = (id = '') => {
  const result = id.match(new RegExp(elemPrefix + '([0-9]*)'))
  return (result && +result[1]) || 0
}

const items = Array(20)
  .fill(0)
  .map((_, ind) => ({ id: getId(ind) }))

function App() {
  const [selected, setSelected] = useState([])

  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      <div style={{ width: '150px' }} key="before" />
      {items.map(({ id }) => (
        <Card
          id={id}
          key={id}
          onClick={(ev) => clickHandler(id, ev)}
          selected={!!selected.find((el) => el === id)}
        />
      ))}
      <div style={{ width: '150px' }} key="after" />
    </ScrollMenu>
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

function Card({ id, onClick, selected, isVisible }) {
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
        <div>visible: {JSON.stringify(!!isVisible)}</div>
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

function LeftArrow({ refs, visibleItems = [] }) {
  const visible = visibleItems.length
    ? !visibleItems.includes(items[0].id)
    : false

  //console.log(visibleItems)
  const onClick = () => {
    const firstVisible = visibleItems[0] || ''
    const nextIndex = getIndex(firstVisible) - 1
    const nextItem = getId((nextIndex >= 0 && nextIndex) || 0)

    const itemToScroll = refs[nextItem].current
    if (itemToScroll) {
      itemToScroll.scrollIntoView({
        behavior: 'smooth',
        inline: 'end',
      })
    }
  }

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

function RightArrow({ refs, visibleItems = [] }) {
  const visible = visibleItems.length
    ? !visibleItems.includes(items.slice(-1)[0].id)
    : true

  const onClick = () => {
    const lastVisible = visibleItems.slice(-1)[0] || ''
    const nextIndex = getIndex(lastVisible) + 1
    const nextItem = getId(
      (nextIndex < items.length && nextIndex) || nextIndex - 1,
    )

    const itemToScroll = refs[nextItem].current
    if (itemToScroll) {
      itemToScroll.scrollIntoView({
        behavior: 'smooth',
        inline: 'start',
      })
    }
  }

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
