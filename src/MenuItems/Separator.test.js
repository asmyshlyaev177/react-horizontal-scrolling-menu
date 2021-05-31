import React from 'react'
import { render } from '@testing-library/react'
import Separator from './Separator'

const setup = (props = {}) => {
  return render(<Separator {...props} />)
}

describe('Separator', () => {
  test('should pass data-key, data-index and className attrs', () => {
    const id = 'test1'
    const index = '1.1'
    const refs = {}
    const { container } = setup({ id, index, refs })

    expect(container.firstChild.getAttribute('data-key')).toEqual(id)
    expect(container.firstChild.getAttribute('data-index')).toEqual(index)
    expect(container.firstChild.getAttribute('class')).toEqual(
      'react-horizontal-scrolling-menu--separator'
    )
  })

  test('should assign ref to refs', () => {
    const id = 'test1'
    const index = '1.1'
    const refs = {}
    setup({ id, index, refs })

    expect(Object.keys(refs)).toHaveLength(1)
    expect(refs[index].current).toBeInTheDocument()
  })
})
