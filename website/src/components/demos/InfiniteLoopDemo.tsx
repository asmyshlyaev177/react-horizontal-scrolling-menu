import * as React from 'react';
import {
  type publicApiType,
  ScrollMenu,
} from 'react-horizontal-scrolling-menu';

import { cities } from '../../lib/demo-data';
import { DragManager } from '../DragManager';
import { useInfiniteLoop } from '../useInfiniteLoop';
import { CityCard, LoopLeftArrow, LoopRightArrow } from './LoopParts';

// The infinite-loop recipe without the timer: arrows, wheel, touch and
// mouse drag all cross the seam invisibly. Same clone-and-teleport core
// as the Storybook recipe, running on the published package.

const CLONES_PER_SIDE = cities.length;
const IDS = cities.map((city) => city.id);
const cityById = Object.fromEntries(cities.map((city) => [city.id, city]));

export function InfiniteLoopDemo() {
  const [dragManager] = React.useState(() => new DragManager());
  const [dragging, setDragging] = React.useState(false);

  const loop = useInfiniteLoop(IDS, CLONES_PER_SIDE);

  // normalize() inside the drag keeps the seam crossable mid-gesture.
  const handleDrag =
    ({ scrollContainer }: publicApiType) =>
    (ev: React.MouseEvent) =>
      dragManager.dragMove(ev, (delta) => {
        if (scrollContainer.current) {
          scrollContainer.current.scrollLeft += delta;
          loop.normalize();
        }
      });

  return (
    <div
      className="autoplay-demo"
      onMouseLeave={() => {
        dragManager.dragStop();
        setDragging(false);
      }}
    >
      <ScrollMenu
        {...loop.menuProps}
        LeftArrow={LoopLeftArrow}
        RightArrow={LoopRightArrow}
        onMouseDown={() => (ev: React.MouseEvent) => {
          dragManager.dragStart(ev);
          setDragging(true);
        }}
        onMouseUp={() => () => {
          dragManager.dragStop();
          setDragging(false);
        }}
        onMouseMove={handleDrag}
        scrollContainerClassName={dragging ? 'dragging' : ''}
      >
        {loop.slides.map(({ itemId, realId }) => (
          <CityCard itemId={itemId} key={itemId} city={cityById[realId]} />
        ))}
      </ScrollMenu>
    </div>
  );
}
