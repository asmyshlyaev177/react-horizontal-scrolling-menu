import { Ref } from './types';

/** check if value not empty */
const notUndefOrNull = (val: any) => val !== undefined && val !== null;
/** getClientRect */
const getClientRect = (elem: Ref): {width: number, x: number, x2: number} => {
  // tslint:disable-next-line:max-line-length
  if (!elem || !elem.getBoundingClientRect || typeof elem.getBoundingClientRect !== 'function') { return {width: 0, x: 0, x2: 0}; }

  const {left = 0, width = 0, right = 0} = elem.getBoundingClientRect();
  return {width, x: +left, x2: +right};
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

export {
  notUndefOrNull,
  getClientRect,
  validateTranslate,
  translateIsValid,
  formatTranslate,
};
