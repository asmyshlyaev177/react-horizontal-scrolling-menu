import React from 'react';
import { Data, Void } from './types';
interface ArrowWrapperProps {
    className: string;
    onClick: Function;
    children: JSX.Element;
    isDisabled: boolean;
    hideArrows: boolean;
    disabledClass?: string;
    forwardClick: boolean;
}
export declare class ArrowWrapper extends React.PureComponent<ArrowWrapperProps> {
    static defaultProps: {
        disabledClass: string;
    };
    render(): React.ReactNode;
}
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
    setMenuInnerRef: Function;
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
export declare class InnerWrapper extends React.PureComponent<InnerWrapperProps, {}> {
    static defaultProps: {
        data: never[];
        translate: number;
        dragging: boolean;
        mounted: boolean;
        transition: number;
        selected: string;
    };
    setMenuInnerRef: (value: HTMLDivElement | null) => Void;
    setRef: (key: string, elKey: string, value: HTMLDivElement | null) => Void;
    isElementActive: (itemId: string | number | null, selected: React.ReactText) => boolean;
    setItems: (arr: JSX.Element[], selected: React.ReactText) => JSX.Element[];
    forwardClickHandler: (key: any, reverse?: boolean) => () => Void;
    render(): JSX.Element;
}
export {};
//# sourceMappingURL=wrapper.d.ts.map