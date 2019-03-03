import React from 'react';
import { Data } from './types';
interface ArrowWrapperProps {
    className: string;
    onClick: Function;
    children: JSX.Element;
    isDisabled: boolean;
    hideArrows: boolean;
    disabledClass: string;
    forwardClick: boolean;
}
export declare const ArrowWrapper: {
    ({ className: clsName, onClick, children, isDisabled, hideArrows, disabledClass, forwardClick }: ArrowWrapperProps): JSX.Element;
    defaultProps: {
        disabledClass: string;
    };
};
interface innerStyleProps {
    translate: number;
    dragging: boolean;
    mounted: boolean;
    transition: number;
}
export declare const innerStyle: ({ translate, dragging, mounted, transition }: innerStyleProps) => React.CSSProperties;
interface InnerWrapperProps {
    data: Data;
    setRef: Function;
    onClick: Function;
    translate: number;
    dragging: boolean;
    mounted: boolean;
    transition: number;
    selected: string | number;
    innerWrapperClass: string;
    itemClass: string;
    itemClassActive: string;
    forwardClick: boolean;
}
export declare class InnerWrapper extends React.Component<InnerWrapperProps, {}> {
    static defaultProps: {
        data: never[];
        translate: number;
        dragging: boolean;
        mounted: boolean;
        transition: number;
        selected: string;
    };
    private ref;
    constructor(props: InnerWrapperProps);
    setRef: (key: string, value: HTMLDivElement | null) => void;
    render(): JSX.Element;
}
export {};
//# sourceMappingURL=wrapper.d.ts.map