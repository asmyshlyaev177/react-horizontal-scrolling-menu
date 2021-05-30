import React from 'react'
import { render } from '@testing-library/react'
import Separator, { className } from './Separator'

const setup = (props = {}) => {
  return render(<Separator {...props} />)
}

describe('Separator', () => {
  test('should pass data-key and className attrs', () => {
    const refs = {}
    const id = 'test1'
    const { container } = setup({ id, refs })

    expect(container.firstChild.getAttribute('data-key')).toEqual(id)
    expect(container.firstChild.getAttribute('class')).toEqual(className)
  })

  test('should assign ref to refs', () => {
    const refs = {}
    const id = 'test1'
    setup({ id, refs })

    expect(Object.keys(refs)).toHaveLength(1)
    expect(refs[id].current).toBeInTheDocument()
  })
})
