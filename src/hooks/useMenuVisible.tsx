import React from 'react';

import useIsomorphicLayoutEffect from './useIsomorphicLayoutEffect';

export const useMenuVisible = (
  menuRef: { current: HTMLDivElement | null },
  ratio: number,
) => {
  const menuVisible = React.useRef(true);

  const threshold = React.useMemo(
    () => [ratio - 0.05, ratio - 0.01, ratio, ratio + 0.01, ratio + 0.05],
    [ratio],
  );
  const ioCb = React.useCallback(
    (entries: IntersectionObserverEntry[]) => {
      menuVisible.current = entries?.[0]?.intersectionRatio >= ratio;
    },
    [ratio],
  );

  useIsomorphicLayoutEffect(() => {
    const observerInstance = new IntersectionObserver(ioCb, {
      threshold,
      rootMargin: '0px',
    });
    if (menuRef.current) {
      observerInstance.observe(menuRef.current);
    }

    return () => observerInstance.disconnect();
  }, [menuVisible, menuRef, ioCb, threshold]);

  return menuVisible;
};
