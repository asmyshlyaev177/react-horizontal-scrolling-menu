import React from 'react'
import { render } from '@testing-library/react'
import Item from './Item'

const setup = (props = {}) => {
  return render(<Item {...props} />)
}

describe('Item', () => {
  test('should pass data-key data-index and className attrs', () => {
    const id = 'test1'
    const index = '1'
    const refs = {}
    const { container } = setup({ id, index, refs })

    expect(container.firstChild.getAttribute('data-key')).toEqual(id)
    expect(container.firstChild.getAttribute('data-index')).toEqual(index)
    expect(container.firstChild.getAttribute('class')).toEqual(
      'react-horizontal-scrolling-menu--item'
    )
  })

  test('should assign ref to refs', () => {
    const id = 'test1'
    const index = '1'
    const refs = {}
    setup({ id, index, refs })

    expect(Object.keys(refs)).toHaveLength(1)
    expect(refs[index].current).toBeInTheDocument()
  })

  test('should render children', () => {
    const id = 'child1'
    const index = '1'
    const refs = {}
    const text = 'text123'
    const { findByTestId, findByText } = setup({
      children: <div data-test-id={id}>{text}</div>,
      id,
      index,
      refs,
    })

    expect(findByTestId(id)).toBeTruthy()
    expect(findByText(text)).toBeTruthy()
  })
})
