import { Ref } from "./types";

/** check if value not empty */
const notUndefOrNull = (val: any) => val !== undefined && val !== null;
/** getClientRect */
const getClientRect = (elem: Ref): {width: number, x: number} => {
  if (!elem || !elem.getBoundingClientRect || typeof elem.getBoundingClientRect !== 'function') return {width: 0, x: 0};

  const {left = 0, width = 0} = elem.getBoundingClientRect();
  return {width, x: +left};
};

const formatTranslate = (val: number): number => +val.toFixed(0);

/** check if translate is valid */
const translateIsValid = (val: any): boolean =>
  typeof val === 'number' && !isNaN(+val);
/** pass translate value and default, valid - return formatted value, not valid - return default */
const validateTranslate = (value: any, defaultValue: number): number =>
  translateIsValid(value)
    ? +value
    : defaultValue;

/** test passive event support, for performance */
// maybe use separate package detect-passive-events
const testPassiveEventSupport = (): boolean => {
  let passiveSupported = false;

  try {
    let options = {
      get passive() {
        // This function will be called when the browser
        // attempts to access the passive property.
        passiveSupported = true;
        return false;
      },
    };

    window.addEventListener('testPassiveEventSupport', options as any, options);
    window.removeEventListener('testPassiveEventSupport', options as any, options as any);
  } catch (err) {
    passiveSupported = false;
  }
  return passiveSupported;
};

export {
  notUndefOrNull,
  getClientRect,
  testPassiveEventSupport,
  validateTranslate,
  translateIsValid,
  formatTranslate,
};
