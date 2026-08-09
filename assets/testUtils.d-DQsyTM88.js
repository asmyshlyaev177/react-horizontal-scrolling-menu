import{n as e}from"./rolldown-runtime-DkW27tQK.js";var t;function n(){return(n=e((()=>{t=`type IntersectionObserverCB = (arg1: IntersectionObserverEntry[]) => void;
export type { IntersectionObserverCB };
export declare class MockedObserver {
    cb: IntersectionObserverCB;
    options: IntersectionObserverInit;
    elements: HTMLElement[];
    constructor(cb: IntersectionObserverCB, options: IntersectionObserverInit);
    unobserve(elem: HTMLElement): void;
    observe(elem: HTMLElement): void;
    disconnect(): void;
    fire(arr: IntersectionObserverEntry[]): void;
}
export type MockedCalls = Record<string | symbol, unknown[]>;
export declare function traceMethodCalls(obj: object, calls?: MockedCalls): object;
`})))()}n();export{t as default};