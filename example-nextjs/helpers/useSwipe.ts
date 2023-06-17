import React from 'react';
import { VisibilityContext } from 'react-horizontal-scrolling-menu';

type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

export const useSwipe = () => {
  const [touchStart, setTouchStart] = React.useState(null);
  const [touchEnd, setTouchEnd] = React.useState(null);

  // the required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 50;

  const onTouchStart = () => (ev: React.TouchEvent) => {
    console.log('TouchStart');
    setTouchEnd(null);
    setTouchStart(ev.targetTouches[0].clientX);
  };

  const onTouchMove = () => (ev: React.TouchEvent) => {
    console.log('TouchMove');
    setTouchEnd(ev.targetTouches[0].clientX);
  };

  const onTouchEnd = (apiObj: scrollVisibilityApiType) => () => {
    console.log('TouchEnd');
    if (!touchStart || !touchEnd) return false;
    const distance = touchStart - touchEnd;
    const isSwipe = Math.abs(distance) > minSwipeDistance;
    const isLeftSwipe = distance < minSwipeDistance;
    console.log({ isSwipe, isLeftSwipe });
    if (isSwipe) {
      if (isLeftSwipe) {
        apiObj.scrollPrev();
      } else {
        apiObj.scrollNext();
      }
    }
  };

  return { onTouchStart, onTouchEnd, onTouchMove };
};
