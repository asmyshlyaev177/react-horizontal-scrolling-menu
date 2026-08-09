import{n as e}from"./rolldown-runtime-DkW27tQK.js";var t;function n(){return(n=e((()=>{t=`import type { EventKey, IOItem } from '../types';
export type ObsFn = (val?: IOItem) => void;
export type EventPayload = [key: EventKey, value?: IOItem];
export declare class Observer {
    observers: Map<EventKey, ObsFn[]>;
    constructor();
    subscribe: (key: EventKey, fn: ObsFn) => void;
    unsubscribe: (key: EventKey, fn: ObsFn) => void;
    private emitUpdates;
    updateBatch: (entries: EventPayload[], onUpdate?: boolean) => void;
    update: (key: EventPayload[0], value?: EventPayload[1]) => void;
}
`})))()}n();export{t as default};