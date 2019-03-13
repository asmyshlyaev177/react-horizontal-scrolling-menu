/// <reference types="react" />
import { Ref } from "./types";
declare const notUndefOrNull: (val: any) => boolean;
declare const getClientRect: (elem: Ref) => {
    width: number;
    x: number;
};
declare const formatTranslate: (val: import("react").ReactText) => number;
declare const translateIsValid: (val: any) => boolean;
declare const validateTranslate: (value: any, defaultValue: number) => number;
declare const testPassiveEventSupport: () => boolean;
export { formatTranslate, notUndefOrNull, getClientRect, testPassiveEventSupport, validateTranslate, translateIsValid, };
//# sourceMappingURL=utils.d.ts.map