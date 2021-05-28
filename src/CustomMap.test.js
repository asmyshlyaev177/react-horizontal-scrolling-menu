import CustomMap from './CustomMap'

describe('CustomMap', () => {
  const data = [
    ['test1', 1],
    ['test2', 2],
    ['test3', 3],
  ]

  test('set and get', () => {
    const map = new CustomMap()

    data.forEach(([key, value]) => {
      map.set(key, value)
    })
    data.forEach(([key, value]) => {
      expect(map.get(key)).toEqual(value)
    })

    data.forEach(([key, value]) => {
      map.set(key, value)
    })
    data.forEach(([key, value]) => {
      expect(map.get(key)).toEqual(value)
    })

    expect([...map]).toEqual(data)
  })

  test('first element', () => {
    const map = new CustomMap()

    data.forEach(([key, value]) => {
      map.set(key, value)
    })

    expect([...map]).toEqual(data)

    expect(map.first()).toEqual(data[0][1])
  })

  test('last element', () => {
    const map = new CustomMap()

    data.forEach(([key, value]) => {
      map.set(key, value)
    })

    expect(map.last()).toEqual(data.slice(-1)[0][1])

    map.set('newLast', 'last')
    expect(map.last()).toEqual('last')
  })

  test('filter', () => {
    const map = new CustomMap()

    data.forEach(([key, value]) => {
      map.set(key, value)
    })

    expect(map.filter((el) => el[1] === 1)).toEqual([['test1', 1]])
  })

  test('findIndex', () => {
    const map = new CustomMap()

    data.forEach(([key, value]) => {
      map.set(key, value)
    })

    expect(map.findIndex((el) => el[1] === 1)).toEqual(0)
    expect(map.findIndex((el) => el[1] === 2)).toEqual(1)
  })

  test('find', () => {
    const map = new CustomMap()

    data.forEach(([key, value]) => {
      map.set(key, value)
    })

    expect(map.find((el) => el[1] === 1)).toEqual(['test1', 1])
    expect(map.find((el) => el[0] === 'test1')).toEqual(['test1', 1])
  })

  describe('prev"ious item', () => {
    describe('by key', () => {
      test('have previous item', () => {
        const map = new CustomMap()

        data.forEach(([key, value]) => {
          map.set(key, value)
        })

        const item = 'test2'

        expect(map.prev(item)).toEqual(['test1', 1])
      })

      test('does not have prev item', () => {
        const map = new CustomMap()

        data.forEach(([key, value]) => {
          map.set(key, value)
        })

        const item = 'test1'

        expect(map.prev(item)).toEqual()
      })
    })

    test('invalid item', () => {
      const map = new CustomMap()

      data.forEach(([key, value]) => {
        map.set(key, value)
      })

      const item = 'aaa'

      expect(map.prev(item)).toEqual()
      expect(map.prev()).toEqual()
      expect(map.prev([])).toEqual()
      expect(map.prev(null)).toEqual()
    })

    describe('by value', () => {
      test('have previous item', () => {
        const map = new CustomMap()

        data.forEach(([key, value]) => {
          map.set(key, value)
        })

        const item = 2

        expect(map.prev(item)).toEqual(['test1', 1])
      })

      test('does not have prev item', () => {
        const map = new CustomMap()

        data.forEach(([key, value]) => {
          map.set(key, value)
        })

        const item = 1

        expect(map.prev(item)).toEqual()
      })
    })
  })

  describe('next item', () => {
    describe('by key', () => {
      test('have previous item', () => {
        const map = new CustomMap()

        data.forEach(([key, value]) => {
          map.set(key, value)
        })

        const item = 'test2'

        expect(map.next(item)).toEqual(['test3', 3])
      })

      test('does not have next item', () => {
        const map = new CustomMap()

        data.forEach(([key, value]) => {
          map.set(key, value)
        })

        const item = 'test3'

        expect(map.next(item)).toEqual()
      })
    })

    test('invalid item', () => {
      const map = new CustomMap()

      data.forEach(([key, value]) => {
        map.set(key, value)
      })

      const item = 'aaa'

      expect(map.next(item)).toEqual()
      expect(map.next()).toEqual()
      expect(map.next([])).toEqual()
      expect(map.next(null)).toEqual()
    })

    describe('by value', () => {
      test('have next item', () => {
        const map = new CustomMap()

        data.forEach(([key, value]) => {
          map.set(key, value)
        })

        const item = 2

        expect(map.next(item)).toEqual(['test3', 3])
      })

      test('does not have next item', () => {
        const map = new CustomMap()

        data.forEach(([key, value]) => {
          map.set(key, value)
        })

        const item = 3

        expect(map.next(item)).toEqual()
      })
    })
  })
})
