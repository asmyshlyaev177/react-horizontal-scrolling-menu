import React from 'react'
import { render } from '@testing-library/react'
import MenuItems from './MenuItems'

jest.mock('./Item', () => ({ id, index, refs }) => (
  <div id={id} index={index} refs={JSON.stringify(refs)}>
    Separator
  </div>
))

jest.mock('./Separator', () => ({ id, index, key, refs }) => (
  <div id={id} index={index} refs={JSON.stringify(refs)} key={key}>
    Separator
  </div>
))

const items = ['test1', 'test2']
const children = items.map((item) => (
  <div data-testid={item} key={item} data-id={item}>
    {item}
  </div>
))

const setup = (props = {}) => {
  return render(<MenuItems {...props}>{children}</MenuItems>)
}

describe('MenuItems', () => {
  test('should render children with separators', () => {
    const refs = { current: 'test123' }
    const { container } = setup({ refs })

    const renderedChildren = container.childNodes
    expect(renderedChildren).toHaveLength(3)

    const isOdd = (number) => !!(number % 2)
    const isEven = (number) => !isOdd(number)

    renderedChildren.forEach((child, ind) => {
      //item
      if (isEven(ind)) {
        const item = items[Math.floor(ind / 2)]
        expect(child.getAttribute('id')).toEqual(item)
        expect(+child.getAttribute('index')).toEqual(
          +item.replace(/\D/g, '') - 1
        )
        expect(child.childNodes).toHaveLength(1)
        expect(child.childNodes[0].textContent).toEqual('Separator')
        expect(child.getAttribute('refs')).toEqual(JSON.stringify(refs))
        // separator
      } else {
        const item = items[Math.floor(ind / 2)]
        expect(child.getAttribute('id')).toEqual(`${item}-separator`)
        expect(+child.getAttribute('index')).toEqual(
          +item.replace(/\D/g, '') - 1 + 0.1
        )
        expect(child.getAttribute('refs')).toEqual(JSON.stringify(refs))
      }
    })
  })
})
