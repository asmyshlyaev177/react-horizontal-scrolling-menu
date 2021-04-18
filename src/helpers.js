export const getNodesFromRefs = (refs) =>
  Object.values(refs)
    .map((el) => el.current)
    .filter(Boolean)
