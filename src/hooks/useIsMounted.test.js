import React from 'react'
import { render } from '@testing-library/react'

import useIsMounted from './useIsMounted'

const TestComponent = ({ cb }) => {
  const mounted = useIsMounted(cb)

  return <div data-testid="mounted">{JSON.stringify(mounted)}</div>
}

describe('useIsMounted', () => {
  test('should fire cb on mount 1 time', () => {
    const cb = jest.fn()

    const utils = render(<TestComponent cb={cb} />)
    const mounted = JSON.parse(utils.getByTestId('mounted').textContent)

    expect(mounted).toEqual(true)
    expect(cb).toHaveBeenCalledTimes(1)

    utils.rerender(<TestComponent cb={cb} testProp="true" />)

    expect(mounted).toEqual(true)
    expect(cb).toHaveBeenCalledTimes(1)
  })
})
