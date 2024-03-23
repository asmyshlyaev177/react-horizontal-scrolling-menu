import React from 'react';

import { scrollContainerClassName, emptyStr } from '../../constants';
import { RefType } from '../../types';
import { isMutableRef } from '../../helpers';

export type Props = {
  className?: string;
  children?: React.ReactNode;
  onScroll?: (event: React.UIEvent) => void;
  scrollRef: RefType<Element>;
  containerRef: RefType<Element>;
};

function ScrollContainer({
  className: _className = emptyStr,
  children,
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
      if (isMutableRef(scrollRef)) {
        scrollRef.current = elem;
      } else {
        scrollRef(elem);
      }
      if (isMutableRef(containerRef)) {
        containerRef.current = elem;
      } else {
        containerRef(elem);
      }
    },
    [scrollRef, containerRef],
  );

  return (
    <div className={scrollContainerClass} onScroll={onScroll} ref={setRefs}>
      {children}
    </div>
  );
}

export default ScrollContainer;
