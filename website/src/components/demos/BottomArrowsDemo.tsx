import { ScrollMenu } from 'react-horizontal-scrolling-menu';

import { cities } from '../../lib/demo-data';
import { LeftArrow, RightArrow } from '../Arrows';
import { CityCard } from './LoopParts';

// The story's move: no LeftArrow/RightArrow props at all. The arrows
// render inside the Footer slot below the row, next to plain content —
// VisibilityContext reaches them there just like it does side arrows.

function FooterBar() {
  return (
    <div className="mt-3 flex w-full items-center justify-center gap-3">
      <span className="text-sm text-muted">Footer: any content works</span>
      <div className="flex gap-2">
        <LeftArrow />
        <RightArrow />
      </div>
    </div>
  );
}

export function BottomArrowsDemo() {
  return (
    <div className="example-demo">
      <ScrollMenu Footer={FooterBar}>
        {cities.map((city) => (
          <CityCard itemId={city.id} key={city.id} city={city} />
        ))}
      </ScrollMenu>
    </div>
  );
}
