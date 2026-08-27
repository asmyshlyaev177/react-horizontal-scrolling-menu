import { act, fireEvent, render } from '@testing-library/react';
import React from 'react';

import { scrollContainerClassName } from '../../constants';
import ScrollContainer, { type Props } from './ScrollContainer';

const _containerRef = { current: null };
const _scrollRef = { current: null };

const setup = ({
  className,
  label,
  scrollRef = _scrollRef,
  onScroll,
  containerRef = _containerRef,
}: Omit<Omit<Props, 'containerRef'>, 'scrollRef'> & {
  containerRef?: Props['containerRef'];
  scrollRef?: Props['scrollRef'];
} = {}) => {
  return render(
    <ScrollContainer
      className={className}
      label={label}
      onScroll={onScroll}
      scrollRef={scrollRef}
      containerRef={containerRef}
    >
      Child
    </ScrollContainer>,
  );
};

describe('ScrollContainer', () => {
  beforeEach(() => {
    _containerRef.current = null;
    _scrollRef.current = null;
  });

  describe('className', () => {
    test('default', () => {
      const { container } = setup();

      expect(container.firstChild).toHaveClass(scrollContainerClassName);
    });

    test('custom', () => {
      const className = 'test123';

      const { container } = setup({ className });

      expect(container.firstChild).toHaveClass(scrollContainerClassName);
      expect(container.firstChild).toHaveClass(className);
    });
  });

  // The container scrolls, so it has to be reachable by keyboard on its own —
  // nothing the consumer puts inside is guaranteed to be focusable.
  describe('keyboard access', () => {
    test('always carries a tab stop', () => {
      const { container } = setup();

      expect(container.firstChild).toHaveAttribute('tabindex', '0');
    });

    test('a bare tab stop announces no role or name', () => {
      const { container } = setup();

      expect(container.firstChild).not.toHaveAttribute('role');
      expect(container.firstChild).not.toHaveAttribute('aria-label');
    });

    test('a label makes it a named region', () => {
      const label = 'Categories';

      const { container } = setup({ label });

      expect(container.firstChild).toHaveAttribute('role', 'region');
      expect(container.firstChild).toHaveAttribute('aria-label', label);
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
    const { container } = setup({ onScroll });

    expect(onScroll).toHaveBeenCalledTimes(0);
    act(() => {
      fireEvent.scroll(container.firstChild as Node);
    });

    expect(onScroll).toHaveBeenCalledTimes(1);
  });

  test('should pass containerRef', () => {
    const scrollRef: React.Ref<HTMLDivElement> = { current: null };
    const containerRef: React.Ref<HTMLDivElement> = { current: null };
    const { container, getByText } = setup({ scrollRef, containerRef });

    expect(scrollRef.current).toEqual(container.firstChild);
    expect(containerRef.current).toEqual(container.firstChild);
    expect(getByText('Child')).toBeTruthy();
  });
});
