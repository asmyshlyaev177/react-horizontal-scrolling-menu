import React from 'react';
import { publicApiType } from '../createApi';
import { events } from '../constants';

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
      context.items.unsubscribe(onInitCb);
      context.items.unsubscribe(onUpdateCb);
    };
  }, [context, onInit, onUpdate]);
};
