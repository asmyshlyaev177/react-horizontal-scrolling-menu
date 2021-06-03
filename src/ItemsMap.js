class ItemsMap extends Map {
  toArr() {
    return [...this]
  }

  onlyDigits(value) {
    return String(value).replace(/[^0-9.]/g, '')
  }

  sort(arr = []) {
    return arr.sort(
      (a, b) => +this.onlyDigits(a[1].index) - +this.onlyDigits(b[1].index)
    )
  }

  set(key, val) {
    if (Array.isArray(key)) {
      this.sort(key).forEach((el) => {
        super.set(el[0], el[1])
      })
    } else {
      super.set(key, val)
    }
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

    return current !== -1 ? arr[current - 1]?.[1] : undefined
  }

  next(item) {
    const arr = this.toArr()
    const current = arr.findIndex((el) => el[0] === item || el[1] === item)

    return current !== -1 ? arr[current + 1]?.[1] : undefined
  }

  getVisible() {
    return this.filter((el) => el[1].visible)
  }
}

export default ItemsMap
