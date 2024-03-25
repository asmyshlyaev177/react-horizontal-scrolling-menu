/* eslint-disable jest/no-conditional-expect */
import { render } from '@testing-library/react';
import React from 'react';

import { type Props as ItemProps } from '../Item';

import MenuItems from './MenuItems';

import type { Refs } from '../../types';

jest.mock('../Item', () => ({ className, id, index, refs }: ItemProps) => (
  <div className={className} id={id} data-index={index} data-refs={refs}>
    Item
  </div>
));

const items = ['test1', 'test2'];
const children = items.map((item) => {
  const itemId = { itemId: item };
  return (
    <div data-testid={item} key={item} {...itemId}>
      {item}
    </div>
  );
});

type mockProps = {
  refs: Refs;
  itemClassName?: string;
};
const setup = ({ refs, itemClassName }: mockProps) => {
  return render(
    <MenuItems itemClassName={itemClassName} refs={refs}>
      {children}
    </MenuItems>,
  );
};

describe('MenuItems', () => {
  test('should render children', () => {
    const refs = { test0: { current: 'test123' } } as unknown as Refs;
    const itemClassName = 'item-123';
    const { container } = setup({
      itemClassName,
      refs,
    });

    const renderedChildren = container.childNodes;
    expect(renderedChildren).toHaveLength(2);

    renderedChildren.forEach((_child, ind) => {
      const child = _child as HTMLElement;
      const item = items[ind];

      expect(child.getAttribute('id')).toEqual(item);
      expect(+child.getAttribute('data-index')!).toEqual(
        +item.replace(/\D/g, '') - 1,
      );
      expect(child.childNodes).toHaveLength(1);
      expect(child).toHaveClass(
        `react-horizontal-scrolling-menu--item ${itemClassName}`,
      );
    });
  });
});
