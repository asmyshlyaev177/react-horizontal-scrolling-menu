import { render } from '@testing-library/react';
import React from 'react';

import { itemClassName } from '../../constants';
import type { Refs } from '../../types';
import Item, { type Props } from './Item';

const setup = ({ children, className, id, index, registerRef }: Props) => {
  return render(
    <Item className={className} id={id} index={index} registerRef={registerRef}>
      {children}
    </Item>,
  );
};

/** Stands in for the registry `ScrollMenu` owns. */
const makeRegistry = () => {
  const refs: Refs = {};
  return {
    refs,
    registerRef: (index: number, node: HTMLElement | null) => {
      refs[String(index)] = { current: node };
    },
  };
};

describe('Item', () => {
  const className = `${itemClassName} item-custom`;

  test('should pass data-key data-index and className attrs', () => {
    const id = 'test1';
    const index = 1;
    const { registerRef } = makeRegistry();
    const { container } = setup({
      className,
      id,
      index,
      registerRef,
    });

    const child = container.firstChild as HTMLElement;
    expect(child.getAttribute('data-key')).toEqual(id);
    expect(child.getAttribute('data-index')).toEqual(String(index));
    expect(child.getAttribute('class')).toEqual(className);
  });

  test('should register its node with the parent', () => {
    const id = 'test1';
    const index = 1;
    const { refs, registerRef } = makeRegistry();
    setup({ className, id, index, registerRef });

    expect(Object.keys(refs)).toHaveLength(1);
    expect(refs[index].current).toBeInTheDocument();
  });

  test('should render children', () => {
    const id = 'child1';
    const index = 1;
    const { registerRef } = makeRegistry();
    const text = 'text123';
    const { findByTestId, findByText } = setup({
      children: <div data-test-id={id}>{text}</div>,
      className,
      id,
      index,
      registerRef,
    });

    expect(findByTestId(id)).toBeTruthy();
    expect(findByText(text)).toBeTruthy();
  });
});
