import React from 'react';

import { events } from '../constants';
import { publicApiType } from '../createApi';

interface Props {
  context: publicApiType;
  onInit: (context: publicApiType) => void;
  onUpdate: (context: publicApiType) => void;
}

export const useOnCb = ({ context, onInit, onUpdate }: Props) => {
  // onInit is one-shot per menu; the ref keeps it that way when the effect
  // re-subscribes or when the replay below races the real emit.
  const initDone = React.useRef(false);
  const onInitCb = React.useCallback(() => {
    if (!initDone.current) {
      initDone.current = true;
      onInit(context);
    }
  }, [onInit, context]);
  const onUpdateCb = React.useCallback(
    () => onUpdate(context),
    [onUpdate, context],
  );
  const { items } = context;

  React.useEffect(() => {
    items.subscribe(events.onInit, onInitCb);
    items.subscribe(events.onUpdate, onUpdateCb);

    // Items are observed in a layout effect, and WebKit can run the first
    // intersection update before the passive effects this subscription lives
    // in — the one-shot onInit emit then has no listeners and is lost.
    // firstRun records that the first batch was already processed: replay.
    if (!items.firstRun) {
      onInitCb();
    }

    return () => {
      items.unsubscribe(events.onInit, onInitCb);
      items.unsubscribe(events.onUpdate, onUpdateCb);
    };
  }, [items, onInitCb, onUpdateCb]);
};
