import{n as e}from"./rolldown-runtime-DkW27tQK.js";var t;function n(){return(n=e((()=>{t=`import * as React from 'react';
import { CSSInterpolation } from '@emotion/serialize';
import { Theme } from "./theming.js";
export interface ArrayClassNamesArg extends Array<ClassNamesArg> {
}
export type ClassNamesArg = undefined | null | string | boolean | {
    [className: string]: boolean | null | undefined;
} | ArrayClassNamesArg;
export interface ClassNamesContent {
    css(template: TemplateStringsArray, ...args: Array<CSSInterpolation>): string;
    css(...args: Array<CSSInterpolation>): string;
    cx(...args: Array<ClassNamesArg>): string;
    theme: Theme;
}
export interface ClassNamesProps {
    children(content: ClassNamesContent): React.ReactNode;
}
export declare const ClassNames: React.FC<ClassNamesProps & React.RefAttributes<any>> | React.ForwardRefExoticComponent<ClassNamesProps & React.RefAttributes<any>>;
`})))()}n();export{t as default};