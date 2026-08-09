import{n as e}from"./rolldown-runtime-DkW27tQK.js";var t;function n(){return(n=e((()=>{t=`export type Options = {
    nonce?: string;
    key: string;
    container: Node;
    speedy?: boolean;
    prepend?: boolean;
    insertionPoint?: HTMLElement;
};
export declare class StyleSheet {
    isSpeedy: boolean;
    ctr: number;
    tags: HTMLStyleElement[];
    container: Node;
    key: string;
    nonce: string | undefined;
    prepend: boolean | undefined;
    before: Element | null;
    insertionPoint: HTMLElement | undefined;
    private _alreadyInsertedOrderInsensitiveRule;
    constructor(options: Options);
    private _insertTag;
    hydrate(nodes: HTMLStyleElement[]): void;
    insert(rule: string): void;
    flush(): void;
}
`})))()}n();export{t as default};