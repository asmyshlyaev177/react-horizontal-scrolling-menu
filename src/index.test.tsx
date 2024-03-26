import {
  act,
  fireEvent,
  render,
  type RenderResult,
} from '@testing-library/react';
import React from 'react';

import * as constants from './constants';
import { VisibilityContext } from './context';
import { type publicApiType } from './createApi';
import * as createApi from './createApi';
import useIntersectionObserver from './hooks/useIntersectionObserver';
import * as useOnCb from './hooks/useOnCb';
import { type ItemType } from './types';

import { ScrollMenu, type Props } from '.';

jest.mock('./hooks/useIntersectionObserver');
jest.mock('./hooks/useOnCb', () => ({
  __esModules: true,
  useOnCb: jest.fn(),
}));

const defaultItems = ['test1', 'test2'];
const scrollContainerClassName = 'scroll-class';
const getContext = (context: publicApiType) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { items: _1, scrollContainer: _2, ...rest } = context;
  return rest;
};
function Child({ itemId }: { itemId: string }) {
  const context = React.useContext(VisibilityContext);

  const text = getContext(context);
  return (
    <div data-testid={itemId} key={itemId}>
      {JSON.stringify({ itemId, ...text })}
    </div>
  );
}
const defaultChildren = defaultItems.map((itemId) => (
  <Child key={itemId} itemId={itemId} />
));

const LArrow = () => {
  const context = React.useContext(VisibilityContext);
  return (
    <button
      onClick={() => context.scrollPrev()}
      className="left-arrow"
      data-testid="left-arrow"
    >
      {JSON.stringify(getContext(context))}
    </button>
  );
};

const RArrow = () => {
  const context = React.useContext(VisibilityContext);
  return (
    <button
      onClick={() => context.scrollNext()}
      className="right-arrow"
      data-testid="right-arrow"
    >
      {JSON.stringify(getContext(context))}
    </button>
  );
};

interface SetupProps extends Omit<Props, 'children'> {
  rerender?: RenderResult<
    typeof import('@testing-library/dom/types/queries')
  >['rerender'];
  children?: ItemType | ItemType[];
}
const setup = ({
  children = defaultChildren,
  rerender,
  ...props
}: SetupProps = {}) => {
  if (rerender) {
    rerender(<ScrollMenu {...props}>{children}</ScrollMenu>);
    return render(<div />);
  }
  return render(<ScrollMenu {...props}>{children}</ScrollMenu>);
};

const options = {
  ratio: 0.9,
  root: null,
  rootMargin: '5px',
  threshold: [0.05, 0.5, 0.75, 0.95],
};

describe('ScrollMenu', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  test('should render without props', () => {
    (useIntersectionObserver as jest.Mock).mockReturnValue(defaultItems);
    const { container } = setup();

    expect(container.firstChild).toBeTruthy();
    expect(container).toMatchSnapshot();
  });

  describe('useIntersectionObserver', () => {
    test('should pass props to it', () => {
      (useIntersectionObserver as jest.Mock).mockReturnValue(defaultItems);
      const { container } = setup();

      expect(container.firstChild).toBeTruthy();
      expect(useIntersectionObserver).toHaveBeenCalled();
      const call = (useIntersectionObserver as jest.Mock).mock.calls[0].slice(
        -1,
      )[0];
      expect(call).toMatchObject({
        items: expect.any(Object),
        itemsChanged: '',
        options,
        refs: Object.fromEntries(
          defaultItems.map((_, ind: number) => [
            String(ind),
            { current: expect.any(Element) },
          ]),
        ),
      });
    });
  });

  describe('onInit and onUpdate cbs', () => {
    test('should pass onInit and onUpdate to useOnCb', () => {
      (useIntersectionObserver as jest.Mock).mockReturnValue(defaultItems);
      useOnCb.useOnCb as jest.Mock;
      const onInit = jest.fn();
      const onUpdate = jest.fn();
      const { container } = setup({
        onInit,
        onUpdate,
      });

      expect(container.firstChild).toBeTruthy();

      expect(useOnCb.useOnCb).toHaveBeenCalled();
      const lastCall = (useOnCb.useOnCb as jest.Mock).mock.calls.slice(
        -1,
      )[0][0];
      comparePublicApi(lastCall.context);
      expect(lastCall.onInit).toEqual(onInit);
      expect(lastCall.onUpdate).toEqual(onUpdate);
    });
  });

  describe('apiRef', () => {
    test('MutableRef', () => {
      (useIntersectionObserver as jest.Mock).mockReturnValue(defaultItems);
      const apiRef = { current: {} } as React.MutableRefObject<publicApiType>;

      const { container } = setup({ apiRef });

      expect(container.firstChild).toBeTruthy();

      comparePublicApi(apiRef.current);
    });

    test('Callback', () => {
      (useIntersectionObserver as jest.Mock).mockReturnValue(defaultItems);
      const apiRef = { current: {} } as React.MutableRefObject<publicApiType>;
      const cb = (api: publicApiType) => {
        apiRef.current = api;
      };

      const { container } = setup({ apiRef: cb });

      expect(container.firstChild).toBeTruthy();

      comparePublicApi(apiRef.current);
    });
  });

  describe('containerRef', () => {
    test('MutableRef', () => {
      (useIntersectionObserver as jest.Mock).mockReturnValue(defaultItems);
      const containerRef = {
        current: {},
      } as React.MutableRefObject<Element>;
      const { container } = setup({ containerRef });
      const scrollContainer = container.querySelector(
        '.react-horizontal-scrolling-menu--scroll-container',
      );

      expect(container.firstChild).toBeTruthy();
      expect(containerRef.current).toEqual(scrollContainer);
    });

    test('Callback', () => {
      (useIntersectionObserver as jest.Mock).mockReturnValue(defaultItems);
      const containerRef = {
        current: {},
      } as React.MutableRefObject<Element>;
      const cb = (elem: Element) => {
        containerRef.current = elem;
      };
      const { container } = setup({ containerRef: cb });
      const scrollContainer = container.querySelector(
        '.react-horizontal-scrolling-menu--scroll-container',
      );

      expect(container.firstChild).toBeTruthy();
      expect(containerRef.current).toEqual(scrollContainer);
    });
  });

  describe('Children, arrows, header and footer', () => {
    test('LeftArrow, ScrollContainer, MenuItems, RightArrow', () => {
      (useIntersectionObserver as jest.Mock).mockReturnValue(defaultItems);

      const { container, getByTestId } = setup({
        LeftArrow: LArrow,
        RightArrow: RArrow,
        scrollContainerClassName,
      });

      const OuterWrapper = container.getElementsByClassName(
        constants.wrapperClassName,
      )?.[0];
      const LeftArrow = getByTestId('left-arrow');
      const RightArrow = getByTestId('right-arrow');
      const ScrollContainer = container.getElementsByClassName(
        constants.scrollContainerClassName,
      )?.[0];

      const context = {
        isFirstItemVisible: false,
        isLastItemVisible: false,
      };

      expect(ScrollContainer).toHaveClass(scrollContainerClassName);
      expect(LeftArrow).toHaveClass('left-arrow');
      expect(JSON.parse(LeftArrow.textContent!)).toEqual(context);
      expect(RightArrow).toHaveClass('right-arrow');
      expect(JSON.parse(RightArrow.textContent!)).toEqual(context);

      expect(OuterWrapper).toContainElement(LeftArrow);
      expect(OuterWrapper).toContainElement(RightArrow);
      expect(OuterWrapper).toContainElement(ScrollContainer as HTMLElement);

      const MenuItems = ScrollContainer;

      defaultItems.forEach((item) =>
        expect(MenuItems.textContent).toContain(item),
      );

      expect(container).toMatchSnapshot();
    });

    test('Header and footer', () => {
      (useIntersectionObserver as jest.Mock).mockReturnValue(defaultItems);

      const Header = <div data-testid="header">Header</div>;
      const Footer = <div data-testid="footer">Footer</div>;

      const { container, getByTestId } = setup({
        Header,
        Footer,
        scrollContainerClassName,
      });

      const OuterWrapper = container.getElementsByClassName(
        constants.wrapperClassName,
      )?.[0];

      const header = getByTestId('header');
      const footer = getByTestId('footer');

      const ScrollContainer = container.getElementsByClassName(
        constants.scrollContainerClassName,
      )?.[0];

      expect(OuterWrapper).toContainElement(header);
      expect(OuterWrapper).toContainElement(footer);
      expect(OuterWrapper).toContainElement(footer as HTMLElement);

      const MenuItems = ScrollContainer;

      defaultItems.forEach((item) =>
        expect(MenuItems.textContent).toContain(item),
      );

      expect(container).toMatchSnapshot();
    });
  });

  describe('Events', () => {
    test('should fire onScroll', () => {
      (useIntersectionObserver as jest.Mock).mockReturnValue(defaultItems);
      const onScroll = jest.fn();
      const { container } = setup({ onScroll });

      const ScrollContainer = container.getElementsByClassName(
        constants.scrollContainerClassName,
      )?.[0];

      act(() => {
        fireEvent.scroll(ScrollContainer);
      });

      expect(onScroll).toHaveBeenCalledTimes(1);
      const call = onScroll.mock.calls[0][0];
      comparePublicApi(call);
    });

    test('should fire onWheel', () => {
      (useIntersectionObserver as jest.Mock).mockReturnValue(defaultItems);
      const onWheel = jest.fn();
      const { container } = setup({ onWheel });

      act(() => {
        fireEvent.wheel(container.firstChild as Element);
      });

      expect(onWheel).toHaveBeenCalledTimes(1);
      const call = onWheel.mock.calls[0][0];
      comparePublicApi(call);
    });

    describe('touch events', () => {
      test('should fire onTouchStart', () => {
        (useIntersectionObserver as jest.Mock).mockReturnValue(defaultItems);
        const onTouchStart = jest.fn();
        const { container } = setup({ onTouchStart });

        act(() => {
          fireEvent.touchStart(container.firstChild as Element);
        });

        expect(onTouchStart).toHaveBeenCalled();
        const call = onTouchStart.mock.calls[0][0];
        comparePublicApi(call);
      });

      test('should fire onTouchMove', () => {
        (useIntersectionObserver as jest.Mock).mockReturnValue(defaultItems);
        const onTouchMove = jest.fn();
        const { container } = setup({ onTouchMove });

        act(() => {
          fireEvent.touchMove(container.firstChild as Element);
        });

        expect(onTouchMove).toHaveBeenCalled();
        const call = onTouchMove.mock.calls[0][0];
        comparePublicApi(call);
      });

      test('should fire onTouchEnd', () => {
        (useIntersectionObserver as jest.Mock).mockReturnValue(defaultItems);
        const onTouchEnd = jest.fn();
        const { container } = setup({ onTouchEnd });

        act(() => {
          fireEvent.touchEnd(container.firstChild as Element);
        });

        expect(onTouchEnd).toHaveBeenCalled();
        const call = onTouchEnd.mock.calls[0][0];
        comparePublicApi(call);
      });
    });

    test('should fire onMouseDown', () => {
      (useIntersectionObserver as jest.Mock).mockReturnValue(defaultItems);
      const onMouseDown = jest.fn();
      const { container } = setup({ onMouseDown });

      act(() => {
        fireEvent.mouseDown(container.firstChild as Element);
      });

      expect(onMouseDown).toHaveBeenCalled();
      const call = onMouseDown.mock.calls[0][0];
      comparePublicApi(call);
    });

    test('should fire onMouseUp', () => {
      (useIntersectionObserver as jest.Mock).mockReturnValue(defaultItems);
      const onMouseUp = jest.fn();
      const { container } = setup({ onMouseUp });

      act(() => {
        fireEvent.mouseUp(container.firstChild as Element);
      });

      expect(onMouseUp).toHaveBeenCalled();
      const call = onMouseUp.mock.calls[0][0];
      comparePublicApi(call);
    });

    test('should fire onMouseMove', () => {
      (useIntersectionObserver as jest.Mock).mockReturnValue(defaultItems);
      const onMouseMove = jest.fn();
      const { container } = setup({ onMouseMove });

      act(() => {
        fireEvent.mouseMove(container.firstChild as Element);
      });

      expect(onMouseMove).toHaveBeenCalled();
      const call = onMouseMove.mock.calls[0][0];
      comparePublicApi(call);
    });

    describe('className', () => {
      test('should pass classNames', () => {
        (useIntersectionObserver as jest.Mock).mockReturnValue(defaultItems);

        const itemClassName = 'item-class';
        const wrapperClassName = 'wrapper-class';

        const { container } = setup({
          itemClassName,
          scrollContainerClassName,
          wrapperClassName,
        });

        const Wrapper = container.getElementsByClassName(
          constants.wrapperClassName,
        )?.[0];

        const ScrollContainer = container.getElementsByClassName(
          constants.scrollContainerClassName,
        )?.[0];

        expect(Wrapper.getAttribute('class')).toEqual(
          `${constants.wrapperClassName} ${wrapperClassName}`,
        );

        expect(ScrollContainer.getAttribute('class')).toEqual(
          `${constants.scrollContainerClassName} ${scrollContainerClassName}`,
        );

        const item = ScrollContainer.firstChild as HTMLElement;
        expect(item.getAttribute('class')).toEqual(
          `${constants.itemClassName} ${itemClassName}`,
        );
      });
    });
  });

  describe('RTL', () => {
    test('should add .rtl class', () => {
      (useIntersectionObserver as jest.Mock).mockReturnValue(defaultItems);

      const itemClassName = 'item-class';
      const wrapperClassName = 'wrapper-class';

      const { container } = setup({
        itemClassName,
        scrollContainerClassName,
        wrapperClassName,
        RTL: true,
      });

      const Wrapper = container.getElementsByClassName(
        constants.wrapperClassName,
      )?.[0];

      const ScrollContainer = container.getElementsByClassName(
        constants.scrollContainerClassName,
      )?.[0];

      expect(Wrapper.getAttribute('class')).toEqual(
        `${constants.wrapperClassName} ${wrapperClassName}`,
      );

      expect(ScrollContainer.getAttribute('class')).toEqual(
        `${constants.scrollContainerClassName} ${scrollContainerClassName} rtl`,
      );
    });
  });

  test('createApi called with noPolyfill', () => {
    (useIntersectionObserver as jest.Mock).mockReturnValue(defaultItems);
    const createApiSpy = jest.spyOn(createApi, 'default');

    setup({
      noPolyfill: true,
    });

    expect(createApiSpy).toHaveBeenCalled();
    const noPolyfill = createApiSpy.mock.calls[0][2];
    expect(noPolyfill).toEqual(true);
  });
});

function comparePublicApi(call: publicApiType) {
  const {
    getItemById,
    getItemByIndex,
    isItemVisible,
    isLastItem,
    scrollNext,
    scrollPrev,
    scrollToItem,
    isFirstItemVisible,
    isLastItemVisible,
    items,
    scrollContainer,
  } = call;

  expect(getItemById).toEqual(expect.any(Function));
  expect(getItemByIndex).toEqual(expect.any(Function));
  expect(isItemVisible).toEqual(expect.any(Function));
  expect(isLastItem).toEqual(expect.any(Function));
  expect(scrollNext).toEqual(expect.any(Function));
  expect(scrollPrev).toEqual(expect.any(Function));
  expect(scrollToItem).toEqual(expect.any(Function));
  expect(isFirstItemVisible).toEqual(expect.any(Boolean));
  expect(isLastItemVisible).toEqual(expect.any(Boolean));
  expect(items).toEqual(expect.any(Object));
  expect(scrollContainer).toEqual({ current: expect.any(Element) });
}
