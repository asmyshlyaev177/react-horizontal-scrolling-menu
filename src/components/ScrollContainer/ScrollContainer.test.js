import React from 'react'
import { act, fireEvent, render } from '@testing-library/react'
import ScrollContainer from './ScrollContainer'

const setup = (props = {}) => {
  return render(<ScrollContainer {...props}>Child</ScrollContainer>)
}

describe('ScrollContainer', () => {
  test('classNames and styles', () => {
    const scrollRef = { current: undefined }
    const { container } = setup({ scrollRef })

    expect(container.firstChild).toHaveClass(
      'react-horizontal-scrolling-menu--scroll-container'
    )
    expect(container.firstChild).toHaveStyle({
      display: 'flex',
      overflowY: 'hidden',
      position: 'relative',
      width: '100%',
    })
  })

  test('should render children and use ref', () => {
    const scrollRef = { current: undefined }
    const { container, getByText } = setup({ scrollRef })

    expect(scrollRef.current).toEqual(container.firstChild)
    expect(getByText('Child')).toBeTruthy()
  })

  test('should fire onScroll', () => {
    const onScroll = jest.fn()
    const scrollRef = { current: undefined }
    const { container } = setup({ onScroll, scrollRef })

    expect(onScroll).toHaveBeenCalledTimes(0)
    act(() => {
      fireEvent.scroll(container.firstChild)
    })

    expect(onScroll).toHaveBeenCalledTimes(1)
  })
})
