import React from 'react';
import { render } from '@testing-library/react';
import Item, { type Props } from './Item';
import { itemClassName } from '../../constants';

const setup = ({ children, className, id, index, refs }: Props) => {
  return render(
    <Item className={className} id={id} index={index} refs={refs}>
      {children}
    </Item>,
  );
};

describe('Item', () => {
  const className = `${itemClassName} item-custom`;

  test('should pass data-key data-index and className attrs', () => {
    const id = 'test1';
    const index = 1;
    const refs = {};
    const { container } = setup({
      className,
      id,
      index,
      refs,
    });

    const child = container.firstChild as HTMLElement;
    expect(child.getAttribute('data-key')).toEqual(id);
    expect(child.getAttribute('data-index')).toEqual(String(index));
    expect(child.getAttribute('class')).toEqual(className);
  });

  test('should assign ref to refs', () => {
    const id = 'test1';
    const index = 1;
    const refs: any = {};
    setup({ className, id, index, refs });

    expect(Object.keys(refs)).toHaveLength(1);
    expect(refs[index].current).toBeInTheDocument();
  });

  test('should render children', () => {
    const id = 'child1';
    const index = 1;
    const refs: any = {};
    const text = 'text123';
    const { findByTestId, findByText } = setup({
      children: <div data-test-id={id}>{text}</div>,
      className,
      id,
      index,
      refs,
    });

    expect(findByTestId(id)).toBeTruthy();
    expect(findByText(text)).toBeTruthy();
  });
});
