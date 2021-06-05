export const getNodesFromRefs = (refs) =>
  Object.values(refs)
    .map((el) => el.current)
    .filter(Boolean)

export function observerEntriesToItems(entries, options) {
  return [...entries].map((entry) => {
    const key = entry.target?.dataset?.key
    const index = String(entry.target?.dataset?.index)

    return [
      key,
      {
        index,
        key,
        entry,
        visible: entry.intersectionRatio >= options.ratio,
      },
    ]
  })
}

export function scrollToItem(item, behavior = 'smooth', inline = 'end') {
  if (item) {
    window &&
      window.requestAnimationFrame(() =>
        item.scrollIntoView({
          behavior,
          inline,
        })
      )
  }
}
