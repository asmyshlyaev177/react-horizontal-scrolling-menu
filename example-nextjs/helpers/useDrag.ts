import React from 'react';

export default function useDrag() {
  const [clicked, setClicked] = React.useState(false);
  const [dragging, setDragging] = React.useState(false);
  const position = React.useRef(0);

  const dragStart = React.useCallback((ev: React.MouseEvent) => {
    const { type, touches } = ev;
    let { clientX } = ev;
    if (type === 'touchstart') {
      clientX = touches[0].clientX;
    }
    position.current = clientX;
    setClicked(true);
  }, []);

  const dragStop = React.useCallback(
    () =>
      // NOTE: need some delay so item under cursor won't be clicked
      window.requestAnimationFrame(() => {
        setDragging(false);
        setClicked(false);
      }),
    []
  );

  const dragMove = (ev: React.MouseEvent, cb: (posDiff: number) => void) => {
    const { type, touches } = ev;
    let { clientX } = ev;
    if (type === 'touchmove') {
      clientX = touches[0].clientX;
    }
    const newDiff = position.current - clientX;
    const movedEnough = Math.abs(newDiff) > 5;
    if (clicked && movedEnough) {
      setDragging(true);
    }
    if (dragging && movedEnough) {
      position.current = clientX;
      cb(newDiff);
    }
  };

  return {
    dragStart,
    dragStop,
    dragMove,
    dragging,
    position,
    setDragging,
  };
}
