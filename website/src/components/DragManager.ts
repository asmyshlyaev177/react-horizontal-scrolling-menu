// Drag-to-scroll for mouse users, ported from the library's example app.
// A 5px threshold separates a drag from a click, and dragStop defers one
// frame so click handlers can still read `dragging` and skip selection.

import type React from 'react';

export class DragManager {
  clicked = false;
  dragging = false;
  position = 0;

  dragStart = (ev: React.MouseEvent) => {
    this.position = ev.clientX;
    this.clicked = true;
  };

  dragStop = () => {
    window.requestAnimationFrame(() => {
      this.dragging = false;
      this.clicked = false;
    });
  };

  dragMove = (ev: React.MouseEvent, cb: (delta: number) => void) => {
    const newDiff = this.position - ev.clientX;
    const movedEnough = Math.abs(newDiff) > 5;

    if (this.clicked && movedEnough) {
      this.dragging = true;
    }

    if (this.dragging && movedEnough) {
      this.position = ev.clientX;
      cb(newDiff);
    }
  };
}
