export class DragManager {
  clicked: boolean;
  dragging: boolean;
  position: number;

  constructor() {
    this.clicked = false;
    this.dragging = false;
    this.position = 0;
  }

  public dragStart = (ev: React.MouseEvent) => {
    this.position = ev.clientX;
      this.clicked = true;
  };

  public dragStop = () => {
    window.requestAnimationFrame(() => {
      this.dragging = false;
      this.clicked = false;
    });
  };

  public dragMove = (ev: React.MouseEvent, cb: (posDiff: number) => void) => {
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
