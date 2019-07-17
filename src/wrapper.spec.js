/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import { mount } from 'enzyme';
import ScrollMenu from './scrollMenu';
import {innerStyle, InnerWrapper} from './wrapper';
import {props, menu} from './scrollMenu.spec.js';

describe('wrappers and styles', () => {
  const wrapper = mount(<ScrollMenu {...props} />);

  it('set correct innerStyle', () => {
    let style, result;
    result = {
      width: '9900px',
      transform: 'translate3d(10px, 0, 0)',
      transition: 'transform 0s',
    };

    style = innerStyle({
      translate: 10,
      dragging: true,
      mounted: true,
      transition: 0.4,
    });
    expect(style).toEqual(result);

    style = innerStyle({
      translate: 20,
      dragging: false,
      mounted: false,
      transition: 0.4,
    });
    expect(style).toEqual({
      ...result,
      transform: 'translate3d(20px, 0, 0)',
    });

    style = innerStyle({
      translate: 10,
      dragging: false,
      mounted: true,
      transition: 0.4,
    });
    expect(style).toEqual({...result, transition: 'transform 0.4s'});
  });

  describe('innerWrapper', () => {
    const onClick = jest.fn();
    const setRef = jest.fn();
    const setMenuInnerRef = jest.fn();

    const prop = {
      ...props,
      setRef,
      setMenuInnerRef,
      onClick,
      translate: 0,
      dragging: true,
      mounted: false,
      transition: 0.4,
      selected: 0,
    };

    const wrapper = mount(<InnerWrapper {...prop} />);
    it('mount inner wrapper', () => {
      expect(wrapper.find('MenuItem').length).toEqual(menu.length);

      expect(setRef.mock.calls.length).toEqual(menu.length);
      expect(setMenuInnerRef.mock.calls.length).toEqual(1);
    });

    it('click on item', () => {
      const item = wrapper.find('MenuItem').first();
      item.simulate('click');
      expect(onClick.mock.calls.length).toEqual(1);
      expect(onClick.mock.calls[0][0]).toEqual(menu[0].key);
    });
  });
});
