import React from 'react';

import { emptyStr, scrollContainerClassName } from '../../constants';
import { isRefObject } from '../../helpers';
import { RefType } from '../../types';

export type Props = {
  className?: string;
  children?: React.ReactNode;
  label?: string;
  onScroll?: (event: React.UIEvent) => void;
  scrollRef: RefType<Element>;
  containerRef: RefType<Element>;
};

function ScrollContainer({
  className: _className = emptyStr,
  children,
  label,
  onScroll = () => void 0,
  scrollRef,
  containerRef,
}: Props) {
  const scrollContainerClass = React.useMemo(
    () => `${scrollContainerClassName} ${_className}`,
    [_className],
  );

  const setRefs = React.useCallback(
    (elem: HTMLDivElement) => {
      if (isRefObject(scrollRef)) {
        scrollRef.current = elem;
      } else {
        scrollRef(elem);
      }
      if (isRefObject(containerRef)) {
        containerRef.current = elem;
      } else {
        containerRef(elem);
      }
    },
    [scrollRef, containerRef],
  );

  // Items are the consumer's and need not be focusable, so the scrollable
  // container carries the tab stop itself (axe `scrollable-region-focusable`).
  // `role` stays off without a name: an unnamed region tells a reader nothing
  // and collides with every other one on the page (`landmark-unique`).
  return (
    <div
      className={scrollContainerClass}
      onScroll={onScroll}
      ref={setRefs}
      tabIndex={0}
      role={label ? 'region' : undefined}
      aria-label={label}
    >
      {children}
    </div>
  );
}

export default ScrollContainer;
