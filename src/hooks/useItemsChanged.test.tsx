import React from 'react';
import { render } from '@testing-library/react';

import useItemsChanged from './useItemsChanged';
import { id as itemId } from '../constants';

const TestComponent = ({
  menuItems,
  refs,
}: {
  menuItems?: any;
  refs?: any;
}) => {
  const hash = useItemsChanged(menuItems, refs);

  return <div data-testid="hash">{JSON.stringify(hash)}</div>;
};

describe('useItemsChanged', () => {
  describe('should return hash based on children', () => {
    test('empty string if there is no children', () => {
      const utils = render(<TestComponent />);

      const hash = JSON.parse(utils.getByTestId('hash').textContent!);

      expect(hash).toEqual('');
    });

    test('concatenated props[itemId] if have children', () => {
      const childrenKeys = ['child1', 'chidl2'];
      const getChildren = (keys: string[]) =>
        keys.map((key) => {
          const props = { [itemId]: key };

          return (
            <div {...props} key={key}>
              {key}
            </div>
          );
        });
      const children = getChildren(childrenKeys);

      const utils = render(<TestComponent menuItems={children} refs={{}} />);

      const hash = JSON.parse(utils.getByTestId('hash').textContent!);
      expect(hash).toEqual(childrenKeys.join(''));

      const newChildrenKeys = childrenKeys.concat('child3');
      const newChildren = getChildren(newChildrenKeys);
      utils.rerender(<TestComponent menuItems={newChildren} refs={{}} />);

      const newHash = JSON.parse(utils.getByTestId('hash').textContent!);
      expect(newHash).toEqual(newChildrenKeys.join(''));
    });
  });
});
