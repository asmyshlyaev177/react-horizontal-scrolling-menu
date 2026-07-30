import{i as e}from"./preload-helper-BdFrVu1K.js";var t;e((()=>{t=`import { Theme } from '@emotion/react';
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
`}))();export{t as default};