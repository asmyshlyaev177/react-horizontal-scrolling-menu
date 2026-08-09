import{n as e}from"./rolldown-runtime-DkW27tQK.js";var t;function n(){return(n=e((()=>{t=`import { Theme } from '@emotion/react';
import { ReactJSXIntrinsicElements } from "./jsx-namespace.js";
import { CreateStyledComponent, CreateStyled as BaseCreateStyled } from "./types.js";
export type { ArrayInterpolation, ComponentSelector, CSSObject, FunctionInterpolation, Interpolation } from '@emotion/serialize';
export type { CreateStyledComponent, FilteringStyledOptions, StyledComponent, StyledOptions } from "./types.js";
export type StyledTags = {
    [Tag in keyof ReactJSXIntrinsicElements]: CreateStyledComponent<{
        theme?: Theme;
        as?: React.ElementType;
    }, ReactJSXIntrinsicElements[Tag]>;
};
export interface CreateStyled extends BaseCreateStyled, StyledTags {
}
declare const styled: CreateStyled;
export default styled;
`})))()}n();export{t as default};