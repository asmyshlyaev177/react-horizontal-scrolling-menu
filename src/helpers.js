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
