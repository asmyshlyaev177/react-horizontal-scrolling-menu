import React from 'react';

import useIsomorphicLayoutEffect from './useIsomorphicLayoutEffect';

export const useMenuVisible = (
  menuRef: { current: HTMLDivElement | null },
  ratio: number,
) => {
  const wrapperVisible = React.useRef(true);

  const _ratio = React.useMemo(() => ratio + 0.01, [ratio]);
  const threshold = React.useMemo(
    () => [_ratio - 0.01, _ratio, _ratio + 0.01],
    [_ratio],
  );
  const ioCb = React.useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const isIntersecting = entries?.[0]?.intersectionRatio > _ratio;

      if (wrapperVisible.current !== isIntersecting) {
        wrapperVisible.current = isIntersecting;
      }
    },
    [_ratio],
  );

  useIsomorphicLayoutEffect(() => {
    const observerInstance = new IntersectionObserver(ioCb, {
      threshold,
    });
    if (menuRef.current) {
      observerInstance.observe(menuRef.current);
    }

    return () => {
      observerInstance.disconnect();
    };
  }, [wrapperVisible, menuRef, ioCb, threshold]);

  return wrapperVisible;
};
