import React from 'react';
import { act, fireEvent, render } from '@testing-library/react';
import ScrollContainer, { type Props } from './ScrollContainer';
import { scrollContainerClassName } from '../../constants';

const setup = ({ className, scrollRef, onScroll }: Props) => {
  return render(
    <ScrollContainer
      className={className}
      onScroll={onScroll}
      scrollRef={scrollRef}
    >
      Child
    </ScrollContainer>,
  );
};

describe('ScrollContainer', () => {
  describe('className', () => {
    test('default', () => {
      const scrollRef: React.Ref<HTMLDivElement> = { current: null };
      const { container } = setup({ scrollRef });

      expect(container.firstChild).toHaveClass(scrollContainerClassName);
    });

    test('custom', () => {
      const className = 'test123';

      const scrollRef: React.Ref<HTMLDivElement> = { current: null };
      const { container } = setup({ className, scrollRef });

      expect(container.firstChild).toHaveClass(scrollContainerClassName);
      expect(container.firstChild).toHaveClass(className);
    });
  });

  test('should render children and use ref', () => {
    const scrollRef: React.Ref<HTMLDivElement> = { current: null };
    const { container, getByText } = setup({ scrollRef });

    expect(scrollRef.current).toEqual(container.firstChild);
    expect(getByText('Child')).toBeTruthy();
  });

  test('should fire onScroll', () => {
    const onScroll = jest.fn();
    const scrollRef: React.Ref<HTMLDivElement> = { current: null };
    const { container } = setup({ onScroll, scrollRef });

    expect(onScroll).toHaveBeenCalledTimes(0);
    act(() => {
      fireEvent.scroll(container.firstChild as Node);
    });

    expect(onScroll).toHaveBeenCalledTimes(1);
  });
});
