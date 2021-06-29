import React from 'react';

import { scrollContainerClassName } from '../../constants';

export type Props = {
  children?: React.ReactNode;
  onScroll?: (event: React.UIEvent) => void;
  scrollRef: React.Ref<HTMLDivElement>;
};

// TODO: pass initialPosition ??
function ScrollContainer({
  children,
  onScroll = () => false,
  scrollRef,
}: Props) {
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
