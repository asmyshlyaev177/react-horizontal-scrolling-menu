import { render } from '@testing-library/react';
import React from 'react';

import type { RegisterRef } from '../../types';
import { type Props as ItemProps } from '../Item';
import MenuItems from './MenuItems';

jest.mock('../Item', () => ({ className, id, index }: ItemProps) => (
  <div className={className} id={id} data-index={index}>
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
  registerRef: RegisterRef;
  itemClassName?: string;
};
const setup = ({ registerRef, itemClassName }: mockProps) => {
  return render(
    <MenuItems itemClassName={itemClassName} registerRef={registerRef}>
      {children}
    </MenuItems>,
  );
};

describe('MenuItems', () => {
  test('should render children', () => {
    const registerRef: RegisterRef = () => void 0;
    const itemClassName = 'item-123';
    const { container } = setup({
      itemClassName,
      registerRef,
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
