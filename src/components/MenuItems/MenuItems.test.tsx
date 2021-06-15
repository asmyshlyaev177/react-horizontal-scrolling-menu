import React from 'react';
import { render } from '@testing-library/react';
import MenuItems from './MenuItems';
import { Props as SeparatorProps } from '../Separator';
import { Props as ItemProps } from '../Item';

jest.mock('../Item', () => ({ id, index, refs }: ItemProps) => (
  <div id={id} data-index={index} data-refs={refs}>
    Separator
  </div>
));

// eslint-disable-next-line radar/no-identical-functions
jest.mock('../Separator', () => ({ id, index, refs }: SeparatorProps) => (
  <div id={id} data-index={index} data-refs={refs}>
    Separator
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
  refs: any;
};
const setup = ({ refs }: mockProps) => {
  return render(<MenuItems refs={refs}>{children}</MenuItems>);
};

describe('MenuItems', () => {
  test('should render children with separators', () => {
    const refs = { current: 'test123' };
    const { container } = setup({ refs });

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
          +item.replace(/\D/g, '') - 1
        );
        expect(child.childNodes).toHaveLength(1);
        expect(child.childNodes[0].textContent).toEqual('Separator');
        // expect(child.getAttribute('refs')).toEqual(JSON.stringify(refs))
        // separator
      } else {
        const item = items[Math.floor(ind / 2)];
        expect(child.getAttribute('id')).toEqual(`${item}-separator`);
        expect(+child.getAttribute('data-index')!).toEqual(
          +String(item).replace(/\D/g, '') - 1 + 0.1
        );
        // expect(child.getAttribute('refs')).toEqual(JSON.stringify(refs))
      }
    });
  });
});
