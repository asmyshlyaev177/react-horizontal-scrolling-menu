// Drag-to-scroll for mouse users, ported from the library's example app.
// A 5px threshold separates a drag from a click, and dragStop defers one
// frame so click handlers can still read `dragging` and skip selection.

import type React from 'react';

export class DragManager {
  clicked = false;
  dragging = false;
  position = 0;
  resetId = 0;

  dragStart = (ev: React.MouseEvent) => {
    // A pending reset from the previous drag would kill this one.
    window.cancelAnimationFrame(this.resetId);
    this.position = ev.clientX;
    this.clicked = true;
  };

  dragStop = () => {
    // Stop applying immediately; only `dragging` waits a frame, so click
    // handlers can still read it. Deferring `clicked` too let a mousemove
    // landing within that frame apply a stale delta from the old anchor.
    this.clicked = false;
    this.resetId = window.requestAnimationFrame(() => {
      this.dragging = false;
    });
  };

  dragMove = (ev: React.MouseEvent, cb: (delta: number) => void) => {
    const newDiff = this.position - ev.clientX;

    if (this.clicked && Math.abs(newDiff) > 5) {
      this.dragging = true;
      this.position = ev.clientX;
      cb(newDiff);
    }
  };
}
