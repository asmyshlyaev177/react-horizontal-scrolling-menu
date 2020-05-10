import React, { forwardRef, useEffect, useRef, useState } from 'react'

const items = Array(20)
  .fill(0)
  .map((_, ind) => ({ id: `test${ind}` }))

const threshold = [0, 1]

const Card = ({ id, onClick, selected, visible }) => (
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

const ScrollContainer = forwardRef(({ children }, ref) => (
  <div
    ref={ref}
    style={{
      display: 'flex',
      height: 'max-content',
      overflowX: 'scroll',
      position: 'relative',
      width: '100%',
    }}
  >
    {children}
  </div>
))

const Container = ({ children }) => (
  <div
    style={{
      display: 'flex',
      height: 'auto',
      justifyContent: 'flex-start',
      position: 'relative',
      width: 'max-content',
    }}
  >
    {children}
  </div>
)

const MenuItems = ({ children, visibleItems = [] }) => {
  return React.Children.map(children, child => (
    <>
      <div data-key={child.props.id} key={child.props.id}>
        {React.cloneElement(
          child,
          {
            ...child.props,
            visible: visibleItems.includes(child.props.id),
          },
          [child.children],
        )}
      </div>
      <div data-separator={child.props.id} />
    </>
  ))
}

function ScrollMenu({
  firstItemVisible: firstItemVisibleInitial = true,
  items: menuItems = [],
  lastItemVisible: lastItemVisibleInitial = false,
  LeftArrow,
  onScroll = () => false,
  RightArrow,
}) {
  const root = useRef(null)
  const observer = useRef(false)
  const [observed, setObserved] = useState({})

  const [visibleItems, setVisibleItems] = useState([])
  const [firstItemVisible, setFirstItemVisible] = useState(
    firstItemVisibleInitial,
  )
  const [lastItemVisible, setLastItemVisible] = useState(lastItemVisibleInitial)

  const cb = entries => {
    const { firstItemVisible, lastItemVisible, visibleItems } = getVisibility(
      observed,
    )
    setVisibleItems(visibleItems)

    setFirstItemVisible(firstItemVisible)
    setLastItemVisible(lastItemVisible)

    setObserved(observed =>
      entries.reduce(
        (acc, entry) => {
          const { intersectionRatio, target } = entry
          const key = target.getAttribute('data-key')
          acc[key] = intersectionRatio === 1
          return acc
        },
        { ...observed },
      ),
    )
  }

  useEffect(() => {
    if (root.current) {
      observer.current && observer.current.disconnect()

      observer.current = new IntersectionObserver(cb, {
        root: root.current,
        threshold,
      })
    }

    return () => {
      observer.current && observer.current.disconnect()
    }
  })

  useEffect(() => {
    const { current: observerFn } = observer

    const elems = document.querySelectorAll('[data-key]')

    // elems && observerFn && elems.forEach(elem => observerFn.unobserve(elem));

    if (elems && observer.current) {
      elems.forEach(elem => observerFn.observe(elem))
    }

    return () => {
      elems && observerFn && elems.forEach(elem => observerFn.unobserve(elem))
    }
  })

  return (
    <div
      onScroll={scrollHandler}
      onWheel={wheelHandler}
      style={{ display: 'flex' }}
    >
      {LeftArrow && (
        <LeftArrow onClick={scrollLeft} visible={!firstItemVisible} />
      )}
      <ScrollContainer ref={root}>
        <Container>
          <MenuItems visibleItems={visibleItems}>{menuItems}</MenuItems>
        </Container>
      </ScrollContainer>
      {RightArrow && (
        <RightArrow onClick={scrollRight} visible={!lastItemVisible} />
      )}
    </div>
  )

  function wheelHandler(event) {
    const { deltaY } = event
    deltaY > 0 ? scrollRight() : scrollLeft()
  }

  function scrollRight() {
    const itemsVisibility = Object.entries(observed)
    const firstVisible = itemsVisibility.findIndex(el => el[1])
    const next = itemsVisibility.slice(firstVisible).find(el => !el[1])

    const elem = next && document.querySelector(`[data-key="${next[0]}"`)

    elem && elem.scrollIntoView({ behavior: 'smooth', inline: 'start' })
  }

  function scrollLeft() {
    const itemsVisibility = Object.entries(observed)
    const firstVisible = itemsVisibility.findIndex(el => el[1])
    const next = firstVisible && itemsVisibility[firstVisible - 1]

    const elem = next && document.querySelector(`[data-key="${next[0]}"`)

    elem && elem.scrollIntoView({ behavior: 'smooth', inline: 'end' })
  }

  function getVisibility(observed) {
    const items = Object.entries(observed)
    const visibleItems = items.filter(el => el[1]).map(el => el[0])

    const firstItemVisible = !!(
      items.length && visibleItems.includes(items[0][0])
    )
    const lastItemVisible = !!(
      items.length && visibleItems.includes(items.slice(-1)[0][0])
    )

    return { items, visibleItems, firstItemVisible, lastItemVisible }
  }

  // need to run it on first mount
  function scrollHandler() {
    onScroll({
      firstItemVisible,
      lastItemVisible,
      items,
      visibleItems,
      position: root.current && root.current.scrollLeft,
    })
  }
}

const LeftArrow = ({ onClick, visible }) => (
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
const RightArrow = ({ onClick, visible }) => (
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

export default function App() {
  const [selected, setSelected] = useState([])

  return (
    <ScrollMenu
      items={items.map(({ id }) => (
        <Card
          id={id}
          key={id}
          onClick={ev => clickHandler(id, ev)}
          selected={!!selected.find(el => el === id)}
        />
      ))}
      LeftArrow={LeftArrow}
      RightArrow={RightArrow}
    />
  )

  function clickHandler(id, ev) {
    const isSelected = selected.find(el => el === id)

    //ev.target.scrollIntoView({ behavior: "smooth", inline: "center" });

    setSelected(selected =>
      isSelected ? selected.filter(el => el !== id) : selected.concat(id),
    )
  }
}
