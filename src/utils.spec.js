/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-unused-vars */
import { defaultSetting } from './defautSettings';
import * as utils from './utils';

describe('validateTranslate', () => {
  const defTranslate = defaultSetting.translate;
  it('valid value', () => {
    expect(utils.validateTranslate(-100, defTranslate)).toEqual(-100.000);
    expect(utils.validateTranslate(0, defTranslate)).toEqual(0.000);
    expect(utils.validateTranslate(100, 0)).toEqual(100.000);
    expect(utils.validateTranslate(200, 0)).toEqual(200.000);
  });
  it('invalid value', () => {
    expect(utils.validateTranslate(NaN, defTranslate)).toEqual(defTranslate);
    expect(utils.validateTranslate('abc', defTranslate)).toEqual(defTranslate);
    expect(utils.validateTranslate(undefined, defTranslate)).toEqual(defTranslate);
    expect(utils.validateTranslate(null, defTranslate)).toEqual(defTranslate);
  });
});
