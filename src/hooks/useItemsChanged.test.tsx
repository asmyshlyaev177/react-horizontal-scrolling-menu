import { render } from '@testing-library/react';
import React from 'react';

import { ItemsMap } from '../ItemsMap';
import { id as itemId } from '../constants';
import { type IOItem } from '../types';

import useItemsChanged from './useItemsChanged';

const TestComponent = ({
  menuItems,
  items,
}: {
  menuItems?: React.JSX.Element[];
  items: ItemsMap;
}) => {
  const hash = useItemsChanged(menuItems, items);

  return <div data-testid="hash">{JSON.stringify(hash)}</div>;
};

describe('useItemsChanged', () => {
  const getChildren = (keys: string[]) =>
    keys.map((key) => {
      const props = { [itemId]: key };

      return (
        <div {...props} key={key}>
          {key}
        </div>
      );
    });

  describe('should return hash based on children', () => {
    test('empty string if there is no children', () => {
      const utils = render(
        <TestComponent menuItems={undefined} items={new ItemsMap()} />,
      );

      const hash = JSON.parse(utils.getByTestId('hash').textContent!);

      expect(hash).toEqual('');
    });

    test('should return hash when have children', () => {
      const childrenKeys = ['child1', 'chidl2'];

      const children = getChildren(childrenKeys);

      const utils = render(
        <TestComponent menuItems={children} items={new ItemsMap()} />,
      );

      const hash = JSON.parse(utils.getByTestId('hash').textContent!);
      expect(hash).toEqual(childrenKeys.join(''));

      const newChildrenKeys = childrenKeys.concat('child3');
      const newChildren = getChildren(newChildrenKeys);
      utils.rerender(
        <TestComponent menuItems={newChildren} items={new ItemsMap()} />,
      );

      const newHash = JSON.parse(utils.getByTestId('hash').textContent!);
      expect(newHash).toEqual(newChildrenKeys.join(''));
    });
  });

  describe('when child removed', () => {
    test('should remove child from ItemsMap', () => {
      const childrenKeys = ['child1', 'chidl2', 'child3'];
      const itemsMap = new ItemsMap();

      const children = getChildren(childrenKeys);

      const utils = render(
        <TestComponent menuItems={children} items={itemsMap} />,
      );

      const hash = JSON.parse(utils.getByTestId('hash').textContent!);
      expect(hash).toEqual(childrenKeys.join(''));

      childrenKeys.forEach((key) => {
        itemsMap.set(key, { key } as IOItem);
      });
      expect(itemsMap.toItems()).toEqual(childrenKeys);

      const removeFirst = <T,>(arr: T[]) => arr.slice(1);

      const newChildren = removeFirst(children);

      utils.rerender(
        <TestComponent menuItems={newChildren} items={itemsMap} />,
      );

      expect(itemsMap.toItems()).toEqual(['chidl2', 'child3']);

      const newHash = JSON.parse(utils.getByTestId('hash').textContent!);
      expect(newHash).toEqual(removeFirst(childrenKeys).join(''));
    });
  });
});
