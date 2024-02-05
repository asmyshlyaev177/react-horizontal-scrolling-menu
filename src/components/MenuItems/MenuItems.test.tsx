/* eslint-disable jest/no-conditional-expect */
import React from 'react';
import { render } from '@testing-library/react';
import MenuItems from './MenuItems';
import { type Props as SeparatorProps } from '../Separator';
import { type Props as ItemProps } from '../Item';
import type { Refs } from '../../types';

jest.mock('../Item', () => ({ className, id, index, refs }: ItemProps) => (
  <div className={className} id={id} data-index={index} data-refs={refs}>
    Separator
  </div>
));

jest.mock(
  '../Separator',
  () =>
    ({ className, id, index, refs }: SeparatorProps) => (
      <div className={className} id={id} data-index={index} data-refs={refs}>
        Separator
      </div>
    ),
);

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
  separatorClassName?: string;
};
const setup = ({ refs, itemClassName, separatorClassName }: mockProps) => {
  return render(
    <MenuItems
      itemClassName={itemClassName}
      separatorClassName={separatorClassName}
      refs={refs}
    >
      {children}
    </MenuItems>,
  );
};

describe('MenuItems', () => {
  test('should render children with separators', () => {
    const refs = { test0: { current: 'test123' } } as unknown as Refs;
    const itemClassName = 'item-123';
    const separatorClassName = 'sep-123';
    const { container } = setup({
      itemClassName,
      separatorClassName,
      refs,
    });

    const renderedChildren = container.childNodes;
    expect(renderedChildren).toHaveLength(3);

    const isOdd = (number: number) => !!(number % 2);
    const isEven = (number: number) => !isOdd(number);

    renderedChildren.forEach((_child, ind) => {
      const child = _child as HTMLElement;
      //item
      if (isEven(ind)) {
        const item = items[Math.floor(ind / 2)];

        expect(child.getAttribute('id')).toEqual(item);
        expect(+child.getAttribute('data-index')!).toEqual(
          +item.replace(/\D/g, '') - 1,
        );
        expect(child.childNodes).toHaveLength(1);
        // expect(child.childNodes[0]).toEqual('');
        expect(child).toHaveClass(
          `react-horizontal-scrolling-menu--item ${itemClassName}`,
        );
        expect(child.childNodes[0].textContent).toEqual('Separator');
        // expect(child.getAttribute('refs')).toEqual(JSON.stringify(refs))
        // separator
      } else {
        const item = items[Math.floor(ind / 2)];
        expect(child.getAttribute('id')).toEqual(`${item}-separator`);
        expect(child).toHaveClass(
          `react-horizontal-scrolling-menu--separator ${separatorClassName}`,
        );
        expect(+child.getAttribute('data-index')!).toEqual(
          +String(item).replace(/\D/g, '') - 1 + 0.1,
        );
        // expect(child.getAttribute('refs')).toEqual(JSON.stringify(refs))
      }
    });
  });
});
