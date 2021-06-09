import React from 'react';

import { scrollContainerClassName } from '../../constants';

export type Props = {
  children?: React.ReactChild | React.ReactChild[];
  onScroll?: VoidFunction;
  scrollRef: React.Ref<HTMLDivElement>;
};

// TODO: pass initialPosition ??
function ScrollContainer({ children, onScroll, scrollRef }: Props) {
  return (
    <div
      className={scrollContainerClassName}
      onScroll={onScroll}
      ref={scrollRef}
    >
      {children}
    </div>
  );
}

export default ScrollContainer;
