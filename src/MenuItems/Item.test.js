import React from 'react'
import { render } from '@testing-library/react'
import Item from './Item'

const setup = (props = {}) => {
  return render(<Item {...props} />)
}

describe('Item', () => {
  test('should pass data-key and className attrs', () => {
    const refs = {}
    const id = 'test1'
    const { container } = setup({ id, refs })

    expect(container.firstChild.getAttribute('data-key')).toEqual(id)
    expect(container.firstChild.getAttribute('class')).toEqual(
      'react-horizontal-scrolling-menu--item'
    )
  })

  test('should assign ref to refs', () => {
    const refs = {}
    const id = 'test1'
    setup({ id, refs })

    expect(Object.keys(refs)).toHaveLength(1)
    expect(refs[id].current).toBeInTheDocument()
  })

  test('should render children', () => {
    const id = 'child1'
    const text = 'text123'
    const { findByTestId, findByText } = setup({
      children: <div data-test-id={id}>{text}</div>,
    })

    expect(findByTestId(id)).toBeTruthy()
    expect(findByText(text)).toBeTruthy()
  })
})
