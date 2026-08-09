import{n as e}from"./rolldown-runtime-DkW27tQK.js";var t;function n(){return(n=e((()=>{t=`import type { StyleSheet } from '@emotion/sheet';
export type { StyleSheet };
export type RegisteredCache = Record<string, string | undefined>;
export type SerializedStyles = {
    name: string;
    styles: string;
    next?: SerializedStyles;
};
export type EmotionCache = {
    inserted: Record<string, string | true | undefined>;
    registered: RegisteredCache;
    sheet: StyleSheet;
    key: string;
    compat?: true;
    nonce?: string;
    insert: (selector: string, serialized: SerializedStyles, sheet: StyleSheet, shouldCache: boolean) => string | void;
};
`})))()}n();export{t as default};