import React from 'react';
import { render } from '@testing-library/react';
import { ScrollMenu } from '.';
import { MockedObserver, traceMethodCalls } from './testUtils';
import type { IntersectionObserverCB } from './testUtils';
import * as constants from './constants';

const items = ['test1', 'test2'];
const children = items.map((item) => {
  const itemId = { itemId: item };
  return (
    <div data-testid={item} key={item} {...itemId}>
      {item}
    </div>
  );
});

const setup = ({ ...props } = {}) => {
  return render(<ScrollMenu {...props}>{children}</ScrollMenu>);
};

describe('ScrollMenu', () => {
  let observer: any;
  let mockedObserverCalls: { [k: string]: any } = {};
  beforeEach(() => {
    Object.defineProperty(window, 'IntersectionObserver', {
      writable: true,
      value: jest
        .fn()
        .mockImplementation(function TrackMock(
          cb: IntersectionObserverCB,
          options: IntersectionObserverInit
        ) {
          observer = traceMethodCalls(
            new MockedObserver(cb, options),
            mockedObserverCalls
          );

          return observer;
        }),
    });
  });
  afterEach(() => {
    observer = null;
    mockedObserverCalls = {};
  });

  test('should render without props', () => {
    const { container } = setup();

    expect(container.firstChild).toBeTruthy();
  });

  test('should pass classNames', () => {
    const itemClassName = 'item-class';
    const separatorClassName = 'sep-class';
    const scrollContainerClassName = 'scroll-class';
    const wrapperClassName = 'wrapper-class';

    const { container, debug } = setup({
      itemClassName,
      separatorClassName,
      scrollContainerClassName,
      wrapperClassName,
    });

    debug(container);

    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.getAttribute('class')).toEqual(
      `${constants.wrapperClassName} ${wrapperClassName}`
    );

    const scrollContainer = wrapper.firstChild as HTMLElement;
    expect(scrollContainer.getAttribute('class')).toEqual(
      `${constants.scrollContainerClassName} ${scrollContainerClassName}`
    );

    const item = scrollContainer.firstChild as HTMLElement;
    expect(item.getAttribute('class')).toEqual(
      `${constants.itemClassName} ${itemClassName}`
    );

    const separator = scrollContainer.childNodes[1] as HTMLElement;
    expect(separator.getAttribute('class')).toEqual(
      `${constants.separatorClassName} ${separatorClassName}`
    );
  });
});
