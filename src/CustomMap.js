class CustomMap extends Map {
  toArr() {
    return [...this]
  }

  first() {
    return this.toArr()[0]?.[1]
  }

  last() {
    return this.toArr().slice(-1)?.[0]?.[1]
  }

  filter(fn) {
    return this.toArr().filter(fn)
  }

  find(fn) {
    return this.toArr().find(fn)
  }

  findIndex(fn) {
    return this.toArr().findIndex(fn)
  }

  prev(item) {
    const arr = this.toArr()
    const current = arr.findIndex((el) => el[0] === item || el[1] === item)

    return current !== -1 ? arr[current - 1] : undefined
  }

  next(item) {
    const arr = this.toArr()
    const current = arr.findIndex((el) => el[0] === item || el[1] === item)

    return current !== -1 ? arr[current + 1] : undefined
  }
}

export default CustomMap
