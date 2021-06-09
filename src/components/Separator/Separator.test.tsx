import React from 'react';
import { render } from '@testing-library/react';
import Separator, { Props } from './Separator';

const setup = ({ id, index, refs }: Props) => {
  return render(<Separator id={id} index={index} refs={refs} />);
};

describe('Separator', () => {
  test('should pass data-key, data-index and className attrs', () => {
    const id = 'test1';
    const index = 1.1;
    const refs = {};
    const { container } = setup({ id, index, refs });

    const child = container.firstChild as HTMLElement;
    expect(child.getAttribute('data-key')).toEqual(id);
    expect(child.getAttribute('data-index')).toEqual(String(index));
    expect(child.getAttribute('class')).toEqual(
      'react-horizontal-scrolling-menu--separator'
    );
  });

  test('should assign ref to refs', () => {
    const id = 'test1';
    const index = 1.1;
    const refs: any = {};
    setup({ id, index, refs });

    expect(Object.keys(refs)).toHaveLength(1);
    expect(refs[index].current).toBeInTheDocument();
  });
});
