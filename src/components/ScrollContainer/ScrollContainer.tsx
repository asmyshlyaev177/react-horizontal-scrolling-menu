import React, { LegacyRef } from 'react';

import { scrollContainerClassName } from '../../constants';

export type Props = {
  className?: string;
  children?: React.ReactNode;
  onScroll?: (event: React.UIEvent) => void;
  scrollRef: React.Ref<HTMLElement>;
};

function ScrollContainer({
  className: _className = '',
  children,
  onScroll = () => void 0,
  scrollRef,
}: Props) {
  const scrollContainerClass = React.useMemo(
    () => `${scrollContainerClassName} ${_className}`,
    [_className],
  );

  return (
    <div
      className={scrollContainerClass}
      onScroll={onScroll}
      ref={scrollRef as LegacyRef<HTMLDivElement>}
    >
      {children}
    </div>
  );
}

export default ScrollContainer;
