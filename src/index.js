import React, {
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'

// TODO: Idea
// https://codesandbox.io/s/horizontal-scroll-usestate-nlkyt?from-embed=&file=/src/horizontal-scroll.js:709-720

const threshold = [0, 1]

const ScrollContainer = forwardRef(({ children, pos }, ref) => (
  <div
    ref={ref}
    style={{
      display: 'flex',
      height: 'max-content',
      overflowY: 'hidden',
      position: 'relative',
      width: '100%',
    }}
  >
    {children}
  </div>
))
ScrollContainer.displayName = 'ScrollContainer'

const Container = ({ children }) => (
  <div
    style={{
      display: 'flex',
      height: 'auto',
      //justifyContent: "flex-start",
      position: 'relative',
      width: 'max-content',
    }}
  >
    {children}
  </div>
)
Container.displayName = 'Container'

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
      <div
        data-separator={child.props.id}
        key={'separator ' + child.props.id}
      />
    </>
  ))
}
MenuItems.displayName = 'MenuItems'

const ScrollMenu = ({
  firstItemVisible: firstItemVisibleInitial = true,
  items: menuItems = [],
  lastItemVisible: lastItemVisibleInitial = false,
  LeftArrow,
  onScroll = () => false,
  RightArrow,
}) => {
  const [isMounted, setIsMounted] = useState(false)

  const root = useRef(null)
  const observer = useRef(false)
  const [observed, setObserved] = useState({})
  const [mockWidth, setMockWidth] = useState('0')

  const [visibleItems, setVisibleItems] = useState([])
  const [firstItemVisible, setFirstItemVisible] = useState(
    firstItemVisibleInitial,
  )
  const [lastItemVisible, setLastItemVisible] = useState(lastItemVisibleInitial)

  const getVisibility = useCallback(observed => {
    const items = Object.entries(observed)
    const visibleItems = items.filter(el => el[1]).map(el => el[0])

    const firstItemVisible = !!(
      items.length && visibleItems.includes(items[0][0])
    )
    const lastItemVisible = !!(
      items.length && visibleItems.includes(items.slice(-1)[0][0])
    )

    return { items, visibleItems, firstItemVisible, lastItemVisible }
  }, [])
  const [scrollQueue, setScrollQueue] = useState([])

  const cb = useCallback(
    entries => {
      const _observed = entries.reduce(
        (acc, entry) => {
          const { intersectionRatio, target } = entry
          const key = target.getAttribute('data-key')
          acc[key] = intersectionRatio === 1
          return acc
        },
        { ...observed },
      )

      const {
        firstItemVisible,
        lastItemVisible,
        visibleItems: _visibleItems,
      } = getVisibility(_observed)

      if (JSON.stringify(visibleItems) !== JSON.stringify(_visibleItems)) {
        setVisibleItems(_visibleItems)
      }
      setFirstItemVisible(firstItemVisible)
      setLastItemVisible(lastItemVisible)
      if (JSON.stringify(observed) !== JSON.stringify(_observed)) {
        setObserved(_observed)
      }
    },
    [getVisibility, observed, visibleItems],
  )

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

    if (elems && observer.current) {
      elems.forEach(elem => observerFn.observe(elem))
    }

    return () => {
      elems && observerFn && elems.forEach(elem => observerFn.unobserve(elem))
    }
  })

  const performScroll = useCallback(
    task => {
      const { selector, cb = () => false } = task

      const item = document.querySelector(selector)
      item &&
        item.scrollIntoView({
          behavior: isMounted ? 'smooth' : 'auto',
          inline: 'center',
        })

      cb()
    },
    [isMounted],
  )

  // useRef for scrollQueue ?
  //console.log(scrollQueue);
  useEffect(() => {
    if (scrollQueue.length) {
      const task = scrollQueue[0]
      setScrollQueue(q => q.filter(el => el !== task))
      performScroll(task)
    }
  }, [isMounted, performScroll, scrollQueue])

  // align to center on first mount
  useEffect(() => {
    if (!isMounted && visibleItems.length) {
      const isOdd = visibleItems.length % 2
      const itemId = visibleItems[Math.ceil(visibleItems.length / 2) - 1]
      const itemInCenter = isOdd
        ? `[data-key="${itemId}"`
        : `[data-separator="${itemId}"`

      const firstItem = document.querySelector(`[data-key="${visibleItems[0]}"`)
      const firstItemWidth =
        (firstItem && firstItem.getBoundingClientRect().width) / 2 || 0
      setMockWidth(`${firstItemWidth}px`)

      // console.log({ itemNearCenter, itemInCenter });
      if (!scrollQueue.find(el => el.id === itemId)) {
        setScrollQueue(q =>
          q.concat({
            id: itemId,
            selector: itemInCenter,
            cb: () => setIsMounted(true),
          }),
        )
      }
    }
  }, [isMounted, observed, scrollQueue, visibleItems])

  return (
    <div
      onScroll={scrollHandler}
      onWheel={wheelHandler}
      style={{ display: 'flex', opacity: +isMounted }}
    >
      {LeftArrow && (
        <LeftArrow onClick={scrollLeft} visible={!firstItemVisible} />
      )}
      <ScrollContainer ref={root}>
        <Container>
          <div style={{ width: mockWidth }} />
          <MenuItems visibleItems={visibleItems}>{menuItems}</MenuItems>
          <div style={{ width: mockWidth }} />
        </Container>
      </ScrollContainer>
      {RightArrow && (
        <RightArrow onClick={scrollRight} visible={!lastItemVisible} />
      )}
    </div>
  )

  function wheelHandler() {
    // TODO: use debounce
    // create invisible vertical container with scroll
    // https://codesandbox.io/s/horizontal-scroll-usestate-nlkyt?from-embed=&file=/src/horizontal-scroll.js
    //const { deltaY } = event;
    //deltaY > 0 ? scrollRight() : scrollLeft();
  }

  function scrollRight() {
    const itemsVisibility = Object.entries(observed)
    const lastVisible = visibleItems.slice(-1)[0]
    const lastVisibleIndex = itemsVisibility.findIndex(
      el => el[0] === lastVisible,
    )
    // TODO: hook for handle prev/next index

    const isOdd = visibleItems.length % 2

    const nextItemIndex = lastVisibleIndex + Math.ceil(visibleItems.length / 2)
    const nextItem = itemsVisibility[nextItemIndex]
    const nextItemId = nextItem && nextItem[0]

    const nextSelector =
      nextItemId && isOdd
        ? `[data-key="${nextItemId}"`
        : `[data-separator="${nextItemId}"`

    if (nextSelector && !scrollQueue.find(el => el.id === nextItemId)) {
      // TODO: if queue not empty increase step in existing entry
      // don't create a new one
      setScrollQueue(q =>
        q.concat({
          id: nextItemId,
          index: nextItemIndex,
          direction: 'right',
          selector: nextSelector,
        }),
      )
    }
  }

  function scrollLeft() {
    const itemsVisibility = Object.entries(observed)
    const firstVisible = itemsVisibility.findIndex(el => el[1])
    const next = firstVisible && itemsVisibility[firstVisible - 1]

    const elem = next && document.querySelector(`[data-key="${next[0]}"`)

    elem && elem.scrollIntoView({ behavior: 'smooth', inline: 'end' })
  }

  function scrollHandler() {
    onScroll({
      firstItemVisible,
      lastItemVisible,
      visibleItems,
      position: root.current && root.current.scrollLeft,
    })
  }
}

ScrollMenu.displayName = 'ScrollMenu'

export default ScrollMenu
