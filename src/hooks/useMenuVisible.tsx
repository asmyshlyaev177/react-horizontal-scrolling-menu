import React from 'react';

import useIsomorphicLayoutEffect from './useIsomorphicLayoutEffect';

export const useMenuVisible = (
  menuRef: { current: HTMLDivElement | null },
  ratio: number,
) => {
  const wrapperVisible = React.useRef(true);

  useIsomorphicLayoutEffect(() => {
    const ioCb = (entries: IntersectionObserverEntry[]) => {
      const isIntersecting = entries?.[0]?.intersectionRatio > ratio + 0.05;
      wrapperVisible.current = isIntersecting;
    };
    const observerInstance = new IntersectionObserver(ioCb, {
      threshold,
    });
    if (menuRef.current) {
      observerInstance.observe(menuRef.current);
    }

    return () => {
      observerInstance.disconnect();
    };
  }, [wrapperVisible, menuRef]);

  return wrapperVisible;
};

const threshold = [0.89, 0.9, 0.91, 0.92, 0.95];
