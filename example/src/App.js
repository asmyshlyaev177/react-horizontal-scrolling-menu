import React, { useState } from 'react'

import ScrollMenu from 'react-horizontal-scrolling-menu'

const elemPrefix = 'test'
const getId = (index) => `${elemPrefix}${index}`
const getIndex = (id = '') => {
  const result = id.match(new RegExp(elemPrefix + '([0-9]*)'))
  return +result[1]
}

const items = Array(20)
  .fill(0)
  .map((_, ind) => ({ id: getId(ind) }))

function App() {
  const [selected, setSelected] = useState([])

  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {items.map(({ id }) => (
        <Card
          id={id}
          key={id}
          onClick={(ev) => toggle(id, ev)}
          selected={!!selected.find((el) => el === id)}
        />
      ))}
    </ScrollMenu>
  )

  function toggle(id) {
    const isSelected = selected.find((el) => el === id)

    setSelected((selected) =>
      isSelected ? selected.filter((el) => el !== id) : selected.concat(id),
    )
  }
}

function LeftArrow({ refs, visibleItems: visibleItemsWithSeparators }) {
  const visibleItems = visibleItemsWithSeparators.filter(
    (el) => !el.includes('separator'),
  )
  const isFirstItemVisible = visibleItems.includes(items[0].id)

  const onClick = () => {
    const firstVisibleItem = visibleItems[0] || ''

    const firstVisibleIndex = getIndex(firstVisibleItem)
    const prevItem = items.find((el) => el.id === getId(firstVisibleIndex - 1))

    const itemToScroll = refs[prevItem?.id]?.current
    if (itemToScroll) {
      itemToScroll.scrollIntoView({
        behavior: 'smooth',
        inline: 'end',
      })
    }
  }

  return (
    <Arrow disabled={isFirstItemVisible} onClick={onClick}>
      Left
    </Arrow>
  )
}

function RightArrow({ refs, visibleItems: visibleItemsWithSeparators }) {
  const visibleItems = visibleItemsWithSeparators.filter(
    (el) => !el.includes('separator'),
  )
  const isLastItemVisible = visibleItems.includes(items.slice(-1)[0].id)

  const onClick = () => {
    const lastVisibleItem = visibleItems.slice(-1)[0] || ''

    const lastVisibleIndex = getIndex(lastVisibleItem)
    const nextItem = items.find((el) => el.id === getId(lastVisibleIndex + 1))

    const itemToScroll = refs[nextItem?.id]?.current
    if (itemToScroll) {
      itemToScroll.scrollIntoView({
        behavior: 'smooth',
        inline: 'start',
      })
    }
  }

  return (
    <Arrow disabled={isLastItemVisible} onClick={onClick}>
      Right
    </Arrow>
  )
}

function Arrow({ children, disabled, onClick }) {
  return (
    <div
      disabled={disabled}
      onClick={onClick}
      style={{
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        right: '1%',
        opacity: disabled ? '0' : '1',
        userSelect: 'none',
      }}
    >
      {children}
    </div>
  )
}

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

export default App
