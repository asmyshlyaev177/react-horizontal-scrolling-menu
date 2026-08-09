import{n as e}from"./rolldown-runtime-DkW27tQK.js";var t;function n(){return(n=e((()=>{t=`import { AutoAnimateOptions, AutoAnimationPlugin } from "../index";
import { Setter, Accessor } from "solid-js";
declare module "solid-js" {
    namespace JSX {
        interface Directives {
            autoAnimate: Partial<AutoAnimateOptions> | AutoAnimationPlugin | true;
        }
    }
}
export declare const createAutoAnimate: <T extends HTMLElement>(options?: Partial<AutoAnimateOptions> | AutoAnimationPlugin) => [Setter<T | null>, (enabled: boolean) => void];
export declare const createAutoAnimateDirective: () => (el: HTMLElement, options: Accessor<Partial<AutoAnimateOptions> | AutoAnimationPlugin | true>) => void;
`})))()}n();export{t as default};