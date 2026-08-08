import * as React from 'react';
import {
  type publicApiType,
  ScrollMenu,
} from 'react-horizontal-scrolling-menu';

import { feedColors } from '../../lib/demo-data';
import { LeftArrow, RightArrow } from '../Arrows';
import { useDragToScroll } from '../useDragToScroll';

const BATCH = 6;
const MAX = 30;

// Infinite append: onUpdate checks whether the last item is visible and
// loads another batch — the "dynamically add items" recipe.

export function InfiniteDemo() {
  const { dragProps } = useDragToScroll();
  const [count, setCount] = React.useState(BATCH);
  const [loading, setLoading] = React.useState(false);
  const loadingRef = React.useRef(false);

  const loadMore = React.useCallback(() => {
    if (loadingRef.current) return;
    loadingRef.current = true;
    setLoading(true);
    setTimeout(() => {
      setCount((current) => Math.min(current + BATCH, MAX));
      setLoading(false);
      loadingRef.current = false;
    }, 450);
  }, []);

  const onUpdate = React.useCallback(
    (api: publicApiType) => {
      if (count >= MAX) return;
      if (api.items.last()?.visible) loadMore();
    },
    [count, loadMore],
  );

  return (
    <div className="gallery-demo">
      <ScrollMenu
        LeftArrow={LeftArrow}
        RightArrow={RightArrow}
        onUpdate={onUpdate}
        {...dragProps}
      >
        {[
          ...Array.from({ length: count }, (_, i) => (
            <FeedCard itemId={`card-${i}`} key={`card-${i}`} index={i} />
          )),
          ...(loading && count < MAX
            ? [<LoaderCard itemId="loader" key="loader" />]
            : []),
        ]}
      </ScrollMenu>
    </div>
  );
}

function LoaderCard(_props: { itemId: string }) {
  return (
    <div className="feed-card loading">
      <span className="spinner" aria-hidden />
      loading…
    </div>
  );
}

function FeedCard({ index }: { itemId: string; index: number }) {
  return (
    <div className="feed-card">
      <span className="num">#{String(index + 1).padStart(2, '0')}</span>
      <span
        className="bar"
        style={{ background: feedColors[index % feedColors.length] }}
        aria-hidden
      />
    </div>
  );
}
