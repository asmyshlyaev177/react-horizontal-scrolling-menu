import React from 'react';
import { render } from '@testing-library/react';
import { ScrollMenu } from '.';
import { MockedObserver, traceMethodCalls } from './testUtils';
import type { IntersectionObserverCB } from './testUtils';

const items = ['test1', 'test2'];
const children = items.map((item) => {
  const itemId = { itemId: item };
  return (
    <div data-testid={item} key={item} {...itemId}>
      {item}
    </div>
  );
});

const setup = () => {
  return render(<ScrollMenu>{children}</ScrollMenu>);
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
});
