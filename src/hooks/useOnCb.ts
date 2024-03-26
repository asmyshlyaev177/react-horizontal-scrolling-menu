import React from 'react';

import { events } from '../constants';
import { publicApiType } from '../createApi';

interface Props {
  context: publicApiType;
  onInit: (context: publicApiType) => void;
  onUpdate: (context: publicApiType) => void;
}

export const useOnCb = ({ context, onInit, onUpdate }: Props) => {
  React.useEffect(() => {
    const onInitCb = () => onInit(context);
    const onUpdateCb = () => onUpdate(context);

    context.items.subscribe(events.onInit, onInitCb);
    context.items.subscribe(events.onUpdate, onUpdateCb);

    return () => {
      context.items.unsubscribe(events.onInit, onInitCb);
      context.items.unsubscribe(events.onUpdate, onUpdateCb);
    };
  }, [context, onInit, onUpdate]);
};
