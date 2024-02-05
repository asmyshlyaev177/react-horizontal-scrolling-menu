import React from 'react';
import { render } from '@testing-library/react';
import Separator, { type Props } from './Separator';
import { separatorClassName } from '../../constants';
import type { Refs } from '../../types';

const setup = ({ className, id, index, refs }: Props) => {
  return render(
    <Separator className={className} id={id} index={index} refs={refs} />,
  );
};

describe('Separator', () => {
  const className = `${separatorClassName} custom-separator`;

  test('should pass data-key, data-index and className attrs', () => {
    const id = 'test1';
    const index = 1.1;
    const refs: Refs = {};
    const { container } = setup({ className, id, index, refs });

    const child = container.firstChild as HTMLElement;
    expect(child.getAttribute('data-key')).toEqual(id);
    expect(child.getAttribute('data-index')).toEqual(String(index));
    expect(child.getAttribute('class')).toEqual(className);
  });

  test('should assign ref to refs', () => {
    const id = 'test1';
    const index = 1.1;
    const refs: Refs = {};
    setup({ className, id, index, refs });

    expect(Object.keys(refs)).toHaveLength(1);
    expect(refs[index].current).toBeInTheDocument();
  });
});
