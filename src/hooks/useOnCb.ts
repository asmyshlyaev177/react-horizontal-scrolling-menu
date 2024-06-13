import React from 'react';

import { events } from '../constants';
import { publicApiType } from '../createApi';

interface Props {
  context: publicApiType;
  onInit: (context: publicApiType) => void;
  onUpdate: (context: publicApiType) => void;
}

export const useOnCb = ({ context, onInit, onUpdate }: Props) => {
  const onInitCb = React.useCallback(() => onInit(context), [onInit, context]);
  const onUpdateCb = React.useCallback(
    () => onUpdate(context),
    [onUpdate, context],
  );
  const { items } = context;

  React.useEffect(() => {
    items.subscribe(events.onInit, onInitCb);
    items.subscribe(events.onUpdate, onUpdateCb);

    return () => {
      items.unsubscribe(events.onInit, onInitCb);
      items.unsubscribe(events.onUpdate, onUpdateCb);
    };
  }, [items, onInitCb, onUpdateCb]);
};
