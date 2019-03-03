/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-unused-vars */
import { defaultProps } from './defautSettings';
import { validateTranslate, getClientRect } from './utils';

describe('getClientRect', () => {
  it('get width and x', () => {
    const el = {
      getBoundingClientRect: () => ({x: 1, left: 2, width: 3})
    };
    expect(getClientRect(el)).toEqual({ width: 3, x: 2 });
  });

  it('no x property, return left instead x', () => {
    const el = {
      getBoundingClientRect: () => ({left: 2, width: 3})
    };
    expect(getClientRect(el)).toEqual({ width: 3, x: 2 });
  });
  it('no element', () => {
    const result = { width: 0, x: 0 };
    expect(getClientRect()).toEqual(result);
    expect(getClientRect(null)).toEqual(result);
    expect(getClientRect(undefined)).toEqual(result);
    expect(getClientRect('')).toEqual(result);
    expect(getClientRect(5)).toEqual(result);
    expect(getClientRect(true)).toEqual(result);
  });
  it('no getBoundingClientRect method on element', () => {
    const el = {};
    expect(getClientRect(el)).toEqual({ width: 0, x: 0 });
  });
  it('getBoundingClientRect is not a function', () => {
    const el = {getBoundingClientRect: 'test'};
    expect(getClientRect(el)).toEqual({ width: 0, x: 0 });
  });
});

describe('validateTranslate', () => {
  const defTranslate = defaultProps.translate;
  it('valid value', () => {
    expect(validateTranslate(-100, defTranslate)).toEqual(-100.000);
    expect(validateTranslate(0, defTranslate)).toEqual(0.000);
    expect(validateTranslate(100, 0)).toEqual(100.000);
    expect(validateTranslate(200, 0)).toEqual(200.000);
  });
  it('invalid value', () => {
    expect(validateTranslate(NaN, defTranslate)).toEqual(defTranslate);
    expect(validateTranslate('abc', defTranslate)).toEqual(defTranslate);
    expect(validateTranslate(undefined, defTranslate)).toEqual(defTranslate);
    expect(validateTranslate(null, defTranslate)).toEqual(defTranslate);
  });
});
