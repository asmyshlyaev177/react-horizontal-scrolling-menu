import React from 'react';

export default function useDrag() {
  const [clicked, setClicked] = React.useState(false);
  const [dragging, setDragging] = React.useState(false);
  const [position, setPosition] = React.useState(0);
  const [diff, setDiff] = React.useState(0);

  const dragStart = React.useCallback((ev: React.MouseEvent) => {
    setPosition(ev.clientX);
    setDiff(0);
    setClicked(true);
  }, []);

  const dragStop = React.useCallback(
    () =>
      window.requestAnimationFrame(() => {
        setDragging(false);
        setClicked(false);
      }),
    []
  );

  const dragMove = React.useCallback(
    (ev: React.MouseEvent, cb: (newPos: number) => void) => {
      const newDiff = position - ev.clientX;

      const movedEnough = Math.abs(newDiff) > 5;

      if (clicked && movedEnough) {
        setDragging(true);
      }

      if (dragging && movedEnough) {
        setPosition(ev.clientX);
        setDiff(newDiff);
        cb(newDiff);
      }
    },
    [clicked, dragging, position]
  );

  return {
    dragStart,
    dragStop,
    dragMove,
    diff,
    dragging,
    position,
    setDragging,
    setDiff,
    setPosition,
  };
}
