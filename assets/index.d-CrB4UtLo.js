import{n as e}from"./rolldown-runtime-DkW27tQK.js";var t;function n(){return(n=e((()=>{t=`import type { EmotionCache } from '@emotion/utils';
import { StylisPlugin } from "./types.js";
export interface Options {
    nonce?: string;
    stylisPlugins?: Array<StylisPlugin>;
    key: string;
    container?: Node;
    speedy?: boolean;
    /** @deprecate use \`insertionPoint\` instead */
    prepend?: boolean;
    insertionPoint?: HTMLElement;
}
declare let createCache: (options: Options) => EmotionCache;
export default createCache;
export type { EmotionCache };
export type { StylisElement, StylisPlugin, StylisPluginCallback } from "./types.js";
`})))()}n();export{t as default};