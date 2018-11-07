/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-unused-vars */
import 'babel-polyfill';
import ScrollMenu, { innerStyle, InnerWrapper, defaultSetting } from './scrollMenu';

const Arrow = ({ text, className }) => {
  return (
    <div
      className={className}
    >{text}</div>
  );
};

describe('test Arrow', () => {
  const onClick = jest.fn();
  const left = {
    className: 'arrow-prev',
    text: '<',
    onClick: jest.fn()
  };
  const right = {
    className: 'arrow-next',
    text: '>',
    onClick: jest.fn()
  };

  it('arrow left', () => {
    const wrapper = shallow(
      <Arrow {...left} />
    );
    expect(wrapper.find('.' + left.className).length).toEqual(1);
    expect(wrapper.find('.' + right.className).length).toEqual(0);
  });
  it('arrow right', () => {
    const wrapper = shallow(
      <Arrow {...right} />
    );
    expect(wrapper.find('.' + left.className).length).toEqual(0);
    expect(wrapper.find('.' + right.className).length).toEqual(1);
  });

  // xit('click', () => {
  //   const p = { ...left, onClick };
  //   const wrapper = shallow(
  //     <Arrow {...p} />
  //   );
  //   wrapper.simulate('click');
  //   expect(onClick.mock.calls.length).toBe(1);
  // });
});


const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });

const items = [
  ['item1', { getBoundingClientRect: () => ({ x: 0, width: 10, left: 0 }) }],
  ['item2', { getBoundingClientRect: () => ({ x: 10, width: 20, left: 10 }) }],
  ['item3', { getBoundingClientRect: () => ({ x: 30, width: 30, left: 30 }) }],
  ['item4', { getBoundingClientRect: () => ({ x: 60, width: 50, left: 60 }) }],
  ['item5', { getBoundingClientRect: () => ({ x: 110, width: 50, left: 110 }) }],
  ['item6', { getBoundingClientRect: () => ({ x: 160, width: 50, left: 160 }) }],
  ['item7', { getBoundingClientRect: () => ({ x: 210, width: 50, left: 210 }) }]
];
  
const MenuItem = ({ text, selected }) => {
  return (
    <div
      style={{
        marginLeft: '50px',
        marginRight: '50px',
        userSelect: 'none',
        cursor: 'pointer',
        border: selected ? '1px blue solid' : 'none'
      }}
      className={selected ? 'active' : ''}
    >
      {text}
    </div>
  );
};

const Menu = (list, selected) => list.map(el => {
  const name = el[0];
  const isSelected = name === selected;

  return (
    <MenuItem
      text={name}
      key={name}
      selected={isSelected}
    />
  );
});

const menu = Menu(items, '');

const props = {
  data: menu,
  arrowLeft: ArrowLeft,
  arrowRight: ArrowRight,
  selected: 3,
  translate: -50
};

describe('test innerWrapper', () => {
  const onClick = jest.fn();
  const setRef = jest.fn();

  const props = {
    data: menu,
    setRef: setRef,
    onClick: onClick,
    translate: 0,
    dragging: true,
    mounted: false,
    transition: 0.4,
    selected: 0
  };

  it('mount inner wrapper', () => {
    const wrapper = mount(<InnerWrapper {...props} />);
    expect(wrapper.find('MenuItem').length).toEqual(menu.length);

    expect(setRef.mock.calls.length).toEqual(menu.length + 1);
  });

  it('click on item', () => {
    const wrapper = mount(<InnerWrapper {...props} />);
    const item = wrapper.find('MenuItem').first();
    item.simulate('click');
    expect(onClick.mock.calls.length).toEqual(1);
    expect(onClick.mock.calls[0][0]).toEqual(menu[0].key);
  });
});

describe('test menu', () => {

  const wrapper = mount(<ScrollMenu {...props} />);
  it('set correct innerStyle', () => {
    let style, result;
    result = {
      width: '9900px',
      transform: 'translate3d(10px, 0px, 0px)',
      transition: 'transform 0s',
      whiteSpace: 'nowrap',
      textAlign: 'left',
      userSelect: 'none'
    };

    style = innerStyle({ translate: 10, dragging: true, mounted: true, transition: 0.4 });
    expect(style).toEqual(result);

    style = innerStyle({ translate: 20, dragging: false, mounted: false, transition: 0.4 });
    expect(style).toEqual({ ...result, transform: 'translate3d(20px, 0px, 0px)' });

    style = innerStyle({ translate: 10, dragging: false, mounted: true, transition: 0.4 });
    expect(style).toEqual({ ...result, transition: 'transform 0.4s' });
  });
  it('don"t render arrow', () => {
    const { arrowLeft, arrowRight, ...rest } = props; 
    const wrapper = mount(<ScrollMenu {...rest} />); 
    expect(wrapper.find('Arrow').length).toBe(0);
  });
  it('render null if menuItems empty', () => {
    const wrapper = mount(<ScrollMenu data={[]}/>); 
    wrapper.instance().setInitial();
    expect(wrapper.html()).toEqual(null);
  });
  it('render left arrow', () => {
    const { arrowRight, ...rest } = props; 
    const wrapper = mount(<ScrollMenu {...rest} />); 
    expect(wrapper.find('.arrow-prev').length).toBe(1);
  });
  it('render right arrow', () => {
    const { arrowLeft, ...rest } = props; 
    const wrapper = mount(<ScrollMenu {...rest} />); 
    expect(wrapper.find('.arrow-next').length).toBe(1);
  });
  it('handle arrowClickRight dispatch handleArrowClick', () => {
    const arrowClick = jest.fn();
    wrapper.instance().handleArrowClick = arrowClick;
    wrapper.instance().handleArrowClickRight();
    expect(arrowClick.mock.calls.length).toEqual(1);
  });
  it('handle arrowClickRight fn', () => {
    const arrowClickRight = jest.fn();
    wrapper.instance().handleArrowClickRight = arrowClickRight;
    wrapper.instance().handleArrowClickRight();
    expect(arrowClickRight.mock.calls.length).toEqual(1);
  });
  it('not render empty arrows', () => {
    const wrapper = mount(<ScrollMenu data={menu} />);
    expect(wrapper.find('Arrow').length).toBe(0);
  });
  it('set default values', () => {
    const { selected: s, translate: t, data: d, ...rest } = props;
    const wrapper = mount(<ScrollMenu {...rest} />);
    const state = wrapper.state();
    const { selected, translate, data, mounted } = state;
    expect(selected === ScrollMenu.defaultProps.selected);
    expect(translate === ScrollMenu.defaultProps.translate);
    expect(data === ScrollMenu.defaultProps.data);
    expect(mounted);
  });
  it('set initial selected item and translate', () => {
    const state = wrapper.state();
    const { selected, translate } = state;
    expect(selected === props.selected);
    expect(translate === props.translate);
  });
  it('set initial variables', () => {
    const getMenuItems = jest.fn()
      .mockReturnValue([1, 2, 3]);
    const updateWidth = jest.fn()
      .mockReturnValue({ wWidth: 500, menuPos: 30 });
    const setMounted = jest.fn();
    const getAlignItemsOffset = jest.fn();
    wrapper.instance().getMenuItems = getMenuItems;
    wrapper.instance().updateWidth = updateWidth;
    wrapper.instance().setMounted = setMounted;
    wrapper.instance().getAlignItemsOffset = getAlignItemsOffset;
    wrapper.instance().setInitial();
    expect(getMenuItems.mock.calls.length).toEqual(1);
    expect(getAlignItemsOffset.mock.calls.length).toEqual(1);
    expect(updateWidth.mock.calls.length).toEqual(1);
    const { wWidth, menuPos, menuItems } = wrapper.instance();
    expect(wWidth).toEqual(500);
    expect(menuPos).toEqual(30);
    expect(menuItems).toEqual([1, 2, 3]);

    const { key, ...newData } = menu[0];
    wrapper.setProps({ data: [newData] });
    wrapper.instance().setInitial();
    expect(wrapper.instance().selected).toEqual(0);
  });
});

describe('functions', () => {

  describe('visibility functions', () => {
    const wrapper = mount(<ScrollMenu {...props} />);
    wrapper.instance().wWidth = 500;
    wrapper.instance().menuPos = 50;
    wrapper.instance().menuWidth = 350;
    wrapper.instance().menuItems = items;
    wrapper.instance().firstPageOffset = 10;
    wrapper.setState({
      translate: 0
    });
    it('elemVisible - check visibility of element', () => {
      expect(wrapper.instance().elemVisible({ x: -50, elWidth: 50 })).toBe(false);
      expect(wrapper.instance().elemVisible({ x: -50, elWidth: 50, offset: 50 })).toBe(false);
      expect(wrapper.instance().elemVisible({ x: 0, elWidth: 50, offset: 50 })).toBe(true);
      expect(wrapper.instance().elemVisible({ x: 0, elWidth: 50, offset: 100 })).toBe(true);
      expect(wrapper.instance().elemVisible({ x: 50, elWidth: 50, offset: 100 })).toBe(true);
      expect(wrapper.instance().elemVisible({ x: 50, elWidth: 50, offset: 300 })).toBe(true);
      expect(wrapper.instance().elemVisible({ x: 50, elWidth: 50, offset: 351 })).toBe(false);
      expect(wrapper.instance().elemVisible({ x: 101, elWidth: 50, offset: 100 })).toBe(true);
      expect(wrapper.instance().elemVisible({ x: 150, elWidth: 50, offset: 100 })).toBe(true);
      expect(wrapper.instance().elemVisible({ x: 350, elWidth: 50, offset: 0 })).toBe(true);
      expect(wrapper.instance().elemVisible({ x: 351, elWidth: 50, offset: 0 })).toBe(true);
      expect(wrapper.instance().elemVisible({ x: 250, elWidth: 50, offset: -100 })).toBe(true);
      expect(wrapper.instance().elemVisible({ x: 250, elWidth: 50, offset: -150 })).toBe(true);
      expect(wrapper.instance().elemVisible({ x: 250, elWidth: 50, offset: -200 })).toBe(true);
      expect(wrapper.instance().elemVisible({ x: 250, elWidth: 50, offset: -201 })).toBe(true);
      expect(wrapper.instance().elemVisible({ x: 350, elWidth: 50, offset: 0 })).toBe(true);
      expect(wrapper.instance().elemVisible({ x: 351, elWidth: 50, offset: 0 })).toBe(true);
      expect(wrapper.instance().elemVisible({ x: 400, elWidth: 50, offset: 0 })).toBe(false);
    });

    it('getVisibleItems', () => {
      wrapper.instance().menuPos = 0;
      expect(wrapper.instance().getVisibleItems({})).toEqual(items);

      wrapper.instance().menuPos = 10;
      expect(wrapper.instance().getVisibleItems({})).toEqual(items.slice(1, 10));

      wrapper.instance().menuWidth = 50;
      expect(wrapper.instance().getVisibleItems({})).toEqual(items.slice(1, 3));

      wrapper.instance().menuWidth = 350;
      expect(wrapper.instance().getVisibleItems({ offset: 50 })).toEqual(items.slice(0, 10));
      expect(wrapper.instance().getVisibleItems({ offset: -10 })).toEqual(items.slice(2, 10));
      expect(wrapper.instance().getVisibleItems({ offset: -20 })).toEqual(items.slice(2, 10));
      expect(wrapper.instance().getVisibleItems({ offset: -30 })).toEqual(items.slice(3, 10));
      expect(wrapper.instance().getVisibleItems({ offset: -60 })).toEqual(items.slice(4, 7));
    });

    it('itBeforeStart', () => {
      wrapper.setProps({ alignCenter: false });
      wrapper.instance().firstPageOffset = 20;
      expect(wrapper.instance().itBeforeStart(0)).toEqual(false);
      expect(wrapper.instance().itBeforeStart(-10)).toEqual(false);
      expect(wrapper.instance().itBeforeStart(50)).toEqual(true);
      expect(wrapper.instance().itBeforeStart(100)).toEqual(true);
    
      wrapper.setProps({ alignCenter: true });
      expect(wrapper.instance().itBeforeStart(0)).toEqual(false);
      expect(wrapper.instance().itBeforeStart(-10)).toEqual(false);
      expect(wrapper.instance().itBeforeStart(19)).toEqual(false);
      expect(wrapper.instance().itBeforeStart(21)).toEqual(true);
      expect(wrapper.instance().itBeforeStart(50)).toEqual(true);
      expect(wrapper.instance().itBeforeStart(100)).toEqual(true);
    });

    it('itAfterEnd', () => {
      wrapper.setProps({ alignCenter: false });
      wrapper.instance().menuWidth = 30;
      wrapper.instance().allItemsWidth = 150;
      wrapper.instance().lastPageOffset = 20;

      expect(wrapper.instance().itAfterEnd(0)).toEqual(false);
      expect(wrapper.instance().itAfterEnd(50)).toEqual(false);
      expect(wrapper.instance().itAfterEnd(100)).toEqual(false);
      expect(wrapper.instance().itAfterEnd(-118)).toEqual(false);

      expect(wrapper.instance().itAfterEnd(-121)).toEqual(true);
      expect(wrapper.instance().itAfterEnd(-200)).toEqual(true);
    
      wrapper.setProps({ alignCenter: true });
      expect(wrapper.instance().itAfterEnd(0)).toEqual(false);
      expect(wrapper.instance().itAfterEnd(50)).toEqual(false);
      expect(wrapper.instance().itAfterEnd(100)).toEqual(false);
      expect(wrapper.instance().itAfterEnd(-140)).toEqual(false);

      expect(wrapper.instance().itAfterEnd(-141)).toEqual(true);
      expect(wrapper.instance().itAfterEnd(-200)).toEqual(true);
    });

  });

  describe('width functions', () => {
    const prop = { ...props, alignCenter: true };
    const menuWrapper = { getBoundingClientRect: () => ({ x: 10, width: 20, left: 10 }) };   
    const getPagesOffsets = jest.fn();
    const wrapper = mount(<ScrollMenu {...prop} />);
    wrapper.instance().ref.menuWrapper = menuWrapper;
    wrapper.instance().getPagesOffsets = getPagesOffsets;

    const getWidthResult = { wWidth: 1024, menuPos: 10, menuWidth: 20, allItemsWidth: 260};

    it('getItemsWidth', () => {
      wrapper.instance().menuItems = items;
      const width = wrapper.instance().getItemsWidth({});
      expect(width).toEqual(260);
    });

    it('getWidth', () => {
      const width = wrapper.instance().getWidth({ items });
      expect(width).toEqual(getWidthResult);
    });

    it('updateWidth, no alignCenter no offsets', () => {
      wrapper.instance().menuItems = items;
      wrapper.instance().updateWidth({});
      expect(getPagesOffsets.mock.calls.length).toEqual(1);
      const result = getPagesOffsets.mock.calls[0];
      const expected = getWidthResult;

      for (const val in expected) {
        expect(result[0][val]).toEqual(expected[val]);
      }

      wrapper.setProps({ alignCenter: false });
      wrapper.instance().updateWidth({});
      expect(getPagesOffsets.mock.calls.length).toEqual(1);
    });
  });

  describe('get index functions', () => {
    const wrapper = mount(<ScrollMenu {...props} />);
    wrapper.instance().menuItems = items;

    it('getItemInd get item index fn', () => {
      expect(wrapper.instance().getItemInd(null, ['item2'])).toEqual(0);
      expect(wrapper.instance().getItemInd(items, null)).toEqual(0);
      expect(wrapper.instance().getItemInd(items, ['item2'])).toEqual(1);
      expect(wrapper.instance().getItemInd(items, ['item3'])).toEqual(2);
    });

    it('getNextItemInd - get next item', () => {
      const menuItemsLength = items.length;

      expect(wrapper.instance().getNextItemInd(false, [])).toEqual(menuItemsLength);
      expect(wrapper.instance().getNextItemInd(true, [])).toEqual(0);

      expect(wrapper.instance().getNextItemInd(true, [ ['item3', false], ['item4', false] ]))
        .toEqual(1);
      expect(wrapper.instance().getNextItemInd(true, [ ['item2', false], ['item4', false] ]))
        .toEqual(0);
      expect(wrapper.instance().getNextItemInd(true, [ ['item9', false], ['item4', false] ]))
        .toEqual(0);

      expect(wrapper.instance().getNextItemInd(false, [ ['item3', false], ['item3', false] ]))
        .toEqual(3);
      expect(wrapper.instance().getNextItemInd(false, [ ['item2', false], ['item4', false] ]))
        .toEqual(4);
    });

    it('getNextItem fn', () => {
      expect(wrapper.instance().getNextItem(items[0][0])).toEqual(items[1]);
      expect(wrapper.instance().getNextItem(items[6][0])).toEqual(items[6]);
    });
    it('getPrevItem fn', () => {
      expect(wrapper.instance().getPrevItem(items[1][0])).toEqual(items[0]);
      expect(wrapper.instance().getPrevItem(items[3][0])).toEqual(items[2]);
      expect(wrapper.instance().getPrevItem(items[0][0])).toEqual(items[0]);
    });
  });

  describe('offsets', () => {
    const wrapper = mount(<ScrollMenu {...props} />);
    wrapper.setState({ translate: 0 });
    wrapper.instance().menuItems = items;

    it('getOfsetToItem', () => {
      wrapper.instance().menuItems = [];
      expect(wrapper.instance().getOffsetToItem({ itemId: 9 })).toEqual(0);

      wrapper.instance().menuItems = items;
      expect(wrapper.instance().getOffsetToItem({ itemId: 0 })).toEqual(0);
      expect(wrapper.instance().getOffsetToItem({ itemId: 1 })).toEqual(10);
      expect(wrapper.instance().getOffsetToItem({ itemId: 2 })).toEqual(30);
      expect(wrapper.instance().getOffsetToItem({ itemId: 3 })).toEqual(60);

      wrapper.setState({ translate: 30 });
      expect(wrapper.instance().getOffsetToItem({ itemId: 0 })).toEqual(-30);
      expect(wrapper.instance().getOffsetToItem({ itemId: 1 })).toEqual(-20);
      expect(wrapper.instance().getOffsetToItem({ itemId: 2 })).toEqual(0);
      expect(wrapper.instance().getOffsetToItem({ itemId: 3 })).toEqual(30);

      wrapper.setState({ translate: -30 });
      expect(wrapper.instance().getOffsetToItem({ itemId: 0 })).toEqual(30);
      expect(wrapper.instance().getOffsetToItem({ itemId: 1 })).toEqual(40);
      expect(wrapper.instance().getOffsetToItem({ itemId: 2 })).toEqual(60);
      expect(wrapper.instance().getOffsetToItem({ itemId: 3 })).toEqual(90);
      expect(wrapper.instance().getOffsetToItem({ itemId: 12 })).toEqual(240);
    });

    it('getOfsset fn', () => {
      const getVisibleItems = jest.fn(); 
      const getScrollLeftOffset = jest.fn().mockReturnValue('left'); 
      const getScrollRightOffset = jest.fn().mockReturnValue('right'); 
      wrapper.instance().getVisibleItems = getVisibleItems;
      wrapper.instance().getScrollLeftOffset = getScrollLeftOffset;
      wrapper.instance().getScrollRightOffset = getScrollRightOffset;

      expect(wrapper.instance().getOffset(true)).toEqual('left');
      expect(getVisibleItems.mock.calls.length).toEqual(1);
      expect(getScrollLeftOffset.mock.calls.length).toEqual(1);
      expect(wrapper.instance().getOffset(false)).toEqual('right');
      expect(getVisibleItems.mock.calls.length).toEqual(2);
      expect(getScrollRightOffset.mock.calls.length).toEqual(1);

      expect(getVisibleItems.mock.calls[0]).toEqual([{ items: items }]);
    });

    it('getCenterOffset fn', () => {
      wrapper.instance().firstPageOffset = 10;
      wrapper.instance().lastPageOffset = 20;
      wrapper.instance().menuWidth = 350;

      const itemsWidth = wrapper.instance().getItemsWidth({ items });
      expect(wrapper.instance().getCenterOffset({ items }))
        .toEqual(
          (350 - itemsWidth) / 2
        );

    });

    describe('getScrollRightOffset fn', () => {
      const prop = {
        items,
        translate: 0
      };
      const wrapper = mount(<ScrollMenu {...props} />);
      wrapper.setState(prop);
      wrapper.instance().wWidth = 500;
      wrapper.instance().menuWidth = 100;
      wrapper.instance().menuItems = items;
      wrapper.instance().firstPageOffset = 10;
      wrapper.instance().lastPageOffset = 20;
      wrapper.instance().menuPos = 0;

      const checkScroll = (alignCenter = false, menuPos = 0, empty = false) => {
        wrapper.instance().menuPos = menuPos;
        wrapper.setProps({ alignCenter });
        const visibleItems = wrapper.instance().getVisibleItems({});
        const offset = wrapper.instance().getScrollRightOffset(empty ? [] : visibleItems, items);
        return [offset, visibleItems.length];
      };

      it('scroll', () => {
        expect(checkScroll(false)).toEqual([60, 3]);
      });

      it('scroll from right edge', () => {
        expect(checkScroll(false, 100)).toEqual([60, 1]);
      });

      it('scroll align', () => {
        expect(checkScroll(true)).toEqual([60, 3]);
      });

      it('scroll align from right edge', () => {
        expect(checkScroll(true, 100)).toEqual([80, 1]);
      });

      it('visibleItems empty use last item', () => {
        expect(checkScroll(true, 100, true)).toEqual([130, 1]);
      });

    });

    describe('getScrollLeftOffset fn', () => {
      const items1 = [
        ['item1', { getBoundingClientRect: () => ({ x: -90, width: 10, left: -90 }) }],
        ['item2', { getBoundingClientRect: () => ({ x: -80, width: 20, left: -80 }) }],
        ['item3', { getBoundingClientRect: () => ({ x: -60, width: 30, left: -60 }) }],
        ['item4', { getBoundingClientRect: () => ({ x: -30, width: 50, left: -30 }) }],
        ['item5', { getBoundingClientRect: () => ({ x: 20, width: 50, left: 20 }) }],
        ['item6', { getBoundingClientRect: () => ({ x: 60, width: 50, left: 60 }) }],
        ['item7', { getBoundingClientRect: () => ({ x: 110, width: 50, left: 110 }) }]
      ];
      const prop = {
        items: items1,
        translate: 0
      };
      const wrapper = mount(<ScrollMenu {...props} />);
      wrapper.setState(prop);
      wrapper.instance().wWidth = 500;
      wrapper.instance().menuWidth = 110;
      wrapper.instance().menuItems = items;
      wrapper.instance().firstPageOffset = 10;
      wrapper.instance().lastPageOffset = 20;
      wrapper.instance().menuPos = 0;

      const checkScroll = (alignCenter = false, menuPos = 0, items = items1) => {
        wrapper.setState({ items: items });
        wrapper.instance().menuPos = menuPos;
        wrapper.setProps({ alignCenter });
        const visibleItems = wrapper.instance().getVisibleItems({ items: items });
        const offset = wrapper.instance().getScrollLeftOffset(visibleItems, items);
        return [offset, visibleItems.length];
      };

      it('scroll left', () => {
        expect(checkScroll(false, 100)).toEqual([-100, 1]);
      });
      it('scroll left to first', () => {
        expect(checkScroll()).toEqual([0, 2]);
      });
      it('scroll left from left edge', () => {
        expect(checkScroll(false, 0, items)).toEqual([0, 4]);
      });
      it('scroll after manual drag', () => {
        expect(checkScroll(false, 15, items1)).toEqual([0, 2]);
      });

      it('scroll align left', () => {
        expect(checkScroll(true)).toEqual([-10, 2]);
      });
      it('scroll align left from left edge', () => {
        expect(checkScroll(true, 0, items)).toEqual([-10, 4]);
      });
      it('scroll align after manual drag', () => {
        expect(checkScroll(true, 55, items1)).toEqual([-90, 2]);
      });

    });

    it('getPagesOffsets', () => {
      const { firstPageOffset, lastPageOffset } = wrapper.instance().getPagesOffsets({});
      expect(firstPageOffset).toEqual(45);
      expect(lastPageOffset).toEqual(45);
    });

    describe('handleWheel', () => {
      const wrapper = mount(<ScrollMenu {...props} />);
      const arrowClick = jest.fn(); 
      wrapper.instance().handleArrowClick = arrowClick;
      let ev = {
        deltaY: 0,
        stopPropagation: () => null,
        preventDefault: () => null
      };
      it('scroll left', () => {
        ev.deltaY = -10;
        wrapper.instance().handleWheel(ev);

        expect(arrowClick.mock.calls.length).toEqual(1);
        expect(arrowClick.mock.calls[0]).toEqual([]);
        arrowClick.mockClear();
      });
      it('scroll right', () => {
        ev.deltaY = 10;
        wrapper.instance().handleWheel(ev);

        expect(arrowClick.mock.calls.length).toEqual(1);
        expect(arrowClick.mock.calls[0]).toEqual([false]);
        arrowClick.mockClear();
      });
      it('wheel disabled', () => {
        wrapper.setProps({ wheel: false });
        ev.deltaY = -10;
        wrapper.instance().handleWheel(ev);

        expect(arrowClick.mock.calls.length).toEqual(0);
        arrowClick.mockClear();
      });
    });

    describe('handleArrowClick', () => {
      const wrapper = mount(<ScrollMenu {...props} />);
      wrapper.setProps({ alignCenter: false });
      wrapper.instance().allItemsWidth = 200;
      wrapper.instance().menuWidth = 50;
      wrapper.instance().firstPageOffset = 5;
      wrapper.instance().lastPageOffset = 6;
      const onUpdate = jest.fn();
      wrapper.instance().onUpdate = onUpdate;

      const checkClick = (left = false, align = false, before = false, after = false) => {
        const itBeforeStart = jest.fn().mockReturnValue(before);
        wrapper.instance().itBeforeStart = itBeforeStart;
        const itAfterEnd = jest.fn().mockReturnValue(after);
        wrapper.instance().itAfterEnd = itAfterEnd;
        const getOffset = jest.fn().mockReturnValue(20);
        wrapper.instance().getOffset = getOffset;

        wrapper.instance().handleArrowClick(left);
        const { translate, xPoint } = wrapper.state();
        expect(xPoint).toEqual(0);
        return translate;
      };

      it('left noAlign', () => {
        expect(checkClick(true)).toEqual(-20);
      });
      it('left noAlign itBeforeStart', () => {
        expect(checkClick(true, false, true)).toEqual(0);
      });
      it('right noAlign', () => {
        expect(checkClick(false)).toEqual(-20);
      });
      it('right noAlign itAfterEnd', () => {
        expect(checkClick(false, false, false, true)).toEqual(-150);
      });

      it('left align', () => {
        wrapper.setProps({ alignCenter: true });
        expect(checkClick(true, true)).toEqual(-20);
      });
      it('left align itBeforeStart', () => {
        wrapper.setProps({ alignCenter: true });
        expect(checkClick(true, true, true)).toEqual(5);
      });
      it('right align', () => {
        wrapper.setProps({ alignCenter: true });
        expect(checkClick(false, true)).toEqual(-20);
      });
      it('right align itAfterEnd', () => {
        wrapper.setProps({ alignCenter: true });
        expect(checkClick(false, true, false, true)).toEqual(-156);
      });
      it('call onUpdate if translate changed', () => {
        const wrapper = mount(
          <ScrollMenu
            {...props}
          />
        );
        const onUpdate = jest.fn();
        wrapper.instance().onUpdate = onUpdate;
        const getOffset = jest.fn().mockReturnValue(120);
        wrapper.instance().getOffset = getOffset;

        wrapper.setState({ translate: 0 });
        wrapper.instance().allItemsWidth = 300;
        wrapper.instance().menuWidth = 200;
        const click = wrapper.instance().handleArrowClick(false);
        expect(wrapper.instance().state.translate).toEqual(-100);

        expect(onUpdate.mock.calls.length).toEqual(1);
      });
      it('do not call onUpdate if translate same', () => {
        const wrapper = mount(
          <ScrollMenu
            {...props}
          />
        );
        const onUpdate = jest.fn();
        wrapper.instance().onUpdate = onUpdate;
        const getOffset = jest.fn().mockReturnValue(-0);
        wrapper.instance().getOffset = getOffset;

        wrapper.setState({ translate: 0 });
        wrapper.instance().allItemsWidth = 300;
        wrapper.instance().menuWidth = 200;
        const click = wrapper.instance().handleArrowClick(false);
        expect(wrapper.instance().state.translate).toEqual(0);

        expect(onUpdate.mock.calls.length).toEqual(0);
      });
      it('do nothing width right noAlign, items width less than menu width', () => {
        const wrapper = mount(
          <ScrollMenu
            {...props}
            alignCenter={false}
          />
        );
        const onUpdate = jest.fn();
        wrapper.instance().onUpdate = onUpdate;

        wrapper.setState({ translate: 0 });
        wrapper.instance().allItemsWidth = 100;
        wrapper.instance().menuWidth = 200;
        expect(wrapper.instance().state.translate).toEqual(0);
        const click = wrapper.instance().handleArrowClick(false);
        expect(click).toEqual(false);
        expect(wrapper.instance().state.translate).toEqual(0);

        expect(onUpdate.mock.calls.length).toEqual(0);
      });
    });

    describe('getAlignItemsOffset', () => {
      it('allItemsWidth less tham menuWidth', () => {
        const wrapper = mount(<ScrollMenu {...props} />);
        const handleArrowClick = jest.fn();
        wrapper.instance().handleArrowClick = handleArrowClick;
        wrapper.instance().allItemsWidth = 10;
        wrapper.instance().menuWidth = 100;
        const { translate } = wrapper.state();

        wrapper.instance().getAlignItemsOffset();
        expect(handleArrowClick.mock.calls.length).toEqual(1);
        expect(handleArrowClick.mock.calls[0][0]).toEqual(false);
        expect(wrapper.state().translate).toEqual(translate);
      });
      it('center is visible, more items on the left and right', () => {
        const wrapper = mount(<ScrollMenu {...props} />);
        const handleArrowClick = jest.fn();
        const getVisibleItems = jest.fn().mockReturnValue([]);
        wrapper.instance().handleArrowClick = handleArrowClick;
        wrapper.instance().getVisibleItems = getVisibleItems;
        wrapper.instance().allItemsWidth = 200;
        wrapper.instance().menuWidth = 100;

        wrapper.instance().getAlignItemsOffset();
        expect(handleArrowClick.mock.calls.length).toEqual(0);
        expect(getVisibleItems.mock.calls.length).toEqual(1);
        expect(wrapper.state().translate).toEqual(0);
      });
      it('left edge visible', () => {
        const wrapper = mount(<ScrollMenu {...props} />);
        const handleArrowClick = jest.fn();
        const visibleItems = wrapper.instance().menuItems;
        const getVisibleItems = jest.fn().mockReturnValue(visibleItems.slice(0, 1));
        wrapper.instance().handleArrowClick = handleArrowClick;
        wrapper.instance().getVisibleItems = getVisibleItems;
        wrapper.instance().allItemsWidth = 200;
        wrapper.instance().menuWidth = 100;
        wrapper.instance().firstPageOffset = 55;

        wrapper.instance().getAlignItemsOffset();
        expect(handleArrowClick.mock.calls.length).toEqual(0);
        expect(getVisibleItems.mock.calls.length).toEqual(1);

        expect(wrapper.instance().getAlignItemsOffset()).toEqual(55);

        wrapper.setProps({ alignCenter: false });
        wrapper.instance().getAlignItemsOffset();
        expect(wrapper.instance().getAlignItemsOffset()).toEqual(defaultSetting.translate);
      });
      it('right edge visible', () => {
        const wrapper = mount(<ScrollMenu {...props} />);
        const handleArrowClick = jest.fn();
        const visibleItems = wrapper.instance().menuItems;
        const getVisibleItems = jest.fn().mockReturnValue(visibleItems.slice(-1));
        wrapper.instance().handleArrowClick = handleArrowClick;
        wrapper.instance().getVisibleItems = getVisibleItems;
        wrapper.instance().allItemsWidth = 200;
        wrapper.instance().menuWidth = 100;
        wrapper.instance().firstPageOffset = 55;
        wrapper.instance().lastPageOffset = 65;

        wrapper.instance().getAlignItemsOffset();
        expect(handleArrowClick.mock.calls.length).toEqual(0);
        expect(getVisibleItems.mock.calls.length).toEqual(1);

        expect(wrapper.instance().getAlignItemsOffset()).toEqual(-165);

        wrapper.setProps({ alignCenter: false });
        wrapper.instance().getAlignItemsOffset();
        expect(wrapper.instance().getAlignItemsOffset()).toEqual(-100);
      });
    });

  });

  describe('dragging', () => {

    const ev = pos => ({ clientX: pos });
    it('don not drag if dragging disabled', () => {
      const wrapper = mount(<ScrollMenu {...props} dragging={false} />);
      expect(wrapper.instance().handleDragStart()).toEqual(false);
      expect(wrapper.instance().handleDrag()).toEqual(false);
      expect(wrapper.instance().handleDragStop()).toEqual(false);
    });
    it('don not drag for right mouse button', () => {
      const wrapper = mount(<ScrollMenu {...props} />);
      const ev = { buttons: 2 };
      wrapper.instance().handleDragStart(ev);
      const { dragging, xPoint } = wrapper.state();
      expect(dragging).toEqual(false);
    });

    it('handleDragStart', () => {
      const wrapper = mount(<ScrollMenu {...props} />);
      wrapper.setState({ dragging: false, xPoint: 100 });
      wrapper.instance().handleDragStart();

      const { dragging, xPoint } = wrapper.state();
      expect(dragging).toEqual(true);
      expect(xPoint).toEqual(0);
    });

    it('handleDrag', () => {
      const wrapper = mount(<ScrollMenu {...props} />);

      wrapper.instance().menuWidth = 100;
      wrapper.instance().allItemsWidth = 200;
      wrapper.instance().firstPageOffset = 10;
      wrapper.instance().lastPageOffset = 15;
      wrapper.setState({
        dragging: false
      });
      expect(wrapper.instance().handleDrag()).toEqual(false);

      const checkDrag = (translate, xPoint, x) => {
        wrapper.setState({ dragging: true, translate, xPoint });
        wrapper.instance().handleDrag(ev(x));
        const { translate: trans, xPoint: xP } = wrapper.state();
        return [trans, xP];
      };

      expect(checkDrag(50, 0, 35)).toEqual([50, 35]);
      expect(checkDrag(-250, 0, 30)).toEqual([-250, 30]);
      expect(checkDrag(-50, 30, 35)).toEqual([-45, 35]);
      expect(checkDrag(-50, 35, 45)).toEqual([-40, 45]);

      expect(checkDrag(50, 55, 5)).toEqual([defaultSetting.translate, 5]);
    });

    it('handleDragStop', () => {
      const wrapper = mount(<ScrollMenu {...props} />);
      const ev = point => ({ clientX: point });
      const getPoint = jest.fn().mockReturnValue(0);
      wrapper.instance().getPoint = getPoint;

      wrapper.setState({ dragging: false });
      expect(wrapper.instance().handleDragStop(ev)).toEqual(false);

      wrapper.instance().allItemsWidth = 250;
      wrapper.instance().menuWidth = 100;
      wrapper.instance().firstPageOffset = 10;
      wrapper.instance().lastPageOffset = 15;
      wrapper.instance().startDragTranslate = 0;
      wrapper.setState({
        dragging: true,
        translate: 0,
        xPoint: 0,
        alignCenter: false
      });

      const checkDrag = (translate, alignCenter, x, xPoint = 0) => {
        wrapper.setState({ xPoint, translate, dragging: true });
        wrapper.setProps({ alignCenter });
        wrapper.instance().handleDragStop(ev(x));
        const XPoint = wrapper.instance().getPoint(ev(x));
        const { translate: trans, dragging } = wrapper.state();
        expect(dragging).toEqual(false);
        return [trans, XPoint];
      };

      expect(checkDrag(100, true, 5)).toEqual([10, 0]);
      expect(checkDrag(100, false, 5)).toEqual([0, 0]);
      expect(checkDrag(-200, true, 5)).toEqual([-165, 0]);
      expect(checkDrag(-200, false, 5)).toEqual([-150, 0]);
      expect(checkDrag(-50, false, 5, null)).toEqual([-50, 0]);
    });

    it('call getPoint(e)', () => {
      const beforeStart = jest.fn().mockReturnValue(false);
      const afterEnd = jest.fn().mockReturnValue(false);
      const getPoint= jest.fn().mockReturnValue(100);
      const props = {
        translate: 0,
        dragging: true
      };
      const wrapper = mount(<ScrollMenu {...props} />);
      wrapper.instance().itBeforeStart = beforeStart;
      wrapper.instance().itAfterEnd = afterEnd;
      wrapper.instance().getPoint = getPoint;
      wrapper.setState({ dragging: true });
      const ev = { clientX: 35 };
      expect(wrapper.instance().getPoint(ev)).toEqual(100);
      expect(getPoint.mock.calls.length).toEqual(1);
    });

    it('set xPoint from getPoint', () => {
      const beforeStart = jest.fn().mockReturnValue(false);
      const afterEnd = jest.fn().mockReturnValue(false);
      const props = {
        translate: 0,
        dragging: true
      };
      const wrapper = mount(<ScrollMenu {...props} />);
      wrapper.instance().itBeforeStart = beforeStart;
      wrapper.instance().itAfterEnd = afterEnd;
      wrapper.setState({ dragging: true });
      const ev = { clientX: 35 };
      expect(wrapper.instance().getPoint(ev)).toEqual(35);
    });
    it('get clientX or touch cordinates', () => {
      const wrapper = mount(<ScrollMenu {...props} />);
      const ev1 = { touches: [{clientX:25}] };
      const ev2 = { clientX: 35 };
      expect(wrapper.instance().getPoint(ev1)).toEqual(25);
      expect(wrapper.instance().getPoint(ev2)).toEqual(35);
    });
    it('fire onUpdate if translate different', () => {
      const wrapper = mount(<ScrollMenu {...props} alignCenter={true} dragging={true} />);
      const onUpdate = jest.fn();
      wrapper.instance().onUpdate = onUpdate;
      const itBeforeStart = jest.fn().mockReturnValue(true);
      wrapper.instance().itBeforeStart = itBeforeStart;

      wrapper.setState({ translate: 50  });
      wrapper.instance().startDragTranslate = 50;
      wrapper.instance().firstPageOffset = 100;

      wrapper.instance().handleDragStart();
      wrapper.instance().handleDrag(ev(35));
      wrapper.instance().handleDragStop(ev(120));

      expect(onUpdate.mock.calls.length).toEqual(1);
    });
    it('don not fire onUpdate if translate same', () => {
      const wrapper = mount(<ScrollMenu {...props} />);
      const onUpdate = jest.fn();
      wrapper.instance().onUpdate = onUpdate;
      const itBeforeStart = jest.fn().mockReturnValue(true);
      wrapper.instance().itBeforeStart = itBeforeStart;
      wrapper.setState({ translate: 50 });
      wrapper.instance().startDragTranslate = 50;
      wrapper.instance().firstPageOffset = 50;

      wrapper.instance().handleDragStart();
      wrapper.instance().handleDrag(ev(50));
      wrapper.instance().handleDragStop(ev(50));

      expect(onUpdate.mock.calls.length).toEqual(0);
    });
    it('set translate to 0 if items width less then menu width', () => {
      const wrapper = mount(<ScrollMenu {...props} alignCenter={false} />);
      const afterEnd = jest.fn().mockReturnValue(false);
      const itBeforeStart = jest.fn().mockReturnValue(false);
      wrapper.instance().itBeforeStart = itBeforeStart;
      wrapper.instance().itAfterEnd = afterEnd;
      wrapper.setState({
        xPoint: 111,
        translate: 50,
      });
      wrapper.instance().startDragTranslate = 55;
      wrapper.instance().firstPageOffset = 30;
      wrapper.instance().menuWidth = 200;
      wrapper.instance().allItemsWidth = 190;

      wrapper.instance().handleDragStart();
      wrapper.instance().handleDrag(ev(50));
      wrapper.instance().handleDragStop(ev(56));

      expect(wrapper.state().translate).toEqual(0);
      expect(wrapper.state().xPoint).toEqual(defaultSetting.xPoint);
    });
  });

  describe('onUpdate after click arrow', () => {
    it('set 0 if key from props not exist', () => {
      const onUpdate = jest.fn();
      const wrapper = mount(
        <ScrollMenu
          data={props.data}
          selected={3}
          translate={-50}
          onUpdate={onUpdate}
        />);
      wrapper.instance().handleArrowClick();
      expect(onUpdate.mock.calls.length).toEqual(1);
    });
    it('onUpdate after dragStop', () => {
      const onUpdate = jest.fn();
      const wrapper = mount(
        <ScrollMenu
          data={props.data}
          selected={props.data[1].key}
          translate={-50}
          onUpdate={onUpdate}
        />);
      wrapper.setState({ dragging: true });
      wrapper.instance().handleDragStop();
      expect(onUpdate).toHaveBeenCalled();
    });
  });

  describe('add/remove eventListeners', () => {

    it('add event listeners', () => {
      const map = {};
      window.addEventListener = jest.fn((event, cb) => {
        map[event] = cb;
      });
      document.addEventListener = jest.fn((event, cb) => {
        map[event] = cb;
      });

      const setInitial = jest.fn();
      const handleDrag = jest.fn();
      const handleDragStop = jest.fn();
      const wrapper = mount(<ScrollMenu {...props} />);
      wrapper.instance().setInitial = setInitial;
      wrapper.instance().handleDrag = handleDrag;
      wrapper.instance().handleDragStop = handleDragStop;

      wrapper.instance().componentDidMount();

      window.resizeTo();
      expect(map).toHaveProperty('mousemove');
      expect(map).toHaveProperty('mouseup');
      expect(map).toHaveProperty('resize');
      expect(setInitial.mock.calls.length).toEqual(1);
    });

    it('delete event handler after unmount', () => {
      const map = {};
      window.removeEventListener = jest.fn((event, cb) => {
        delete map[event];
      });
      document.removeEventListener = jest.fn((event, cb) => {
        delete map[event];
      });

      const setInitial = jest.fn();
      const handleDrag = jest.fn();
      const handleDragStop = jest.fn();
      const wrapper = mount(<ScrollMenu {...props} />);
      wrapper.instance().setInitial = setInitial;
      wrapper.instance().handleDrag = handleDrag;
      wrapper.instance().handleDragStop = handleDragStop;

      wrapper.instance().componentWillUnmount();

      window.resizeTo();
      expect(setInitial.mock.calls.length).toEqual(0);

      expect(map).not.toHaveProperty('mousemove');
      expect(map).not.toHaveProperty('mouseup');
      expect(map).not.toHaveProperty('resize');
    });
  });

  describe('item click', () => {

    it('onItemClick', () => {
      const wrapper = mount(<ScrollMenu {...props} />);
      wrapper.instance().onItemClick(items[3][0]);
      expect(wrapper.instance().selected).toEqual(items[3][0]);
    });

    it('mouse up after drag is not a click', () => {
      const wrapper = mount(<ScrollMenu {...props} />);
      wrapper.setProps({ clickWhenDrag: false });
      wrapper.instance().selected = 'item1';
      wrapper.setState({
        dragging: false,
        xDraggedDistance: 30,
        xPoint: 0
      });
      wrapper.instance().onItemClick(items[2][0]);
      expect(wrapper.instance().selected).toEqual('item1');
    });
    it('clickWhenDrug true select item under cursor after drag', () => {
      const wrapper = mount(<ScrollMenu {...props} />);
      wrapper.setProps({ clickWhenDrag: true });
      wrapper.instance().selected = 'item1';
      wrapper.setState({
        dragging: false,
        xDraggedDistance: 30,
        xPoint: 0
      });
      wrapper.instance().onItemClick(items[2][0]);
      expect(wrapper.instance().selected).toEqual('item3');
    });

    it('trigger onSelect after click', () => {
      const onSelect = jest.fn();
      const wrapper = mount(<ScrollMenu {...props} onSelect={onSelect} />);
      wrapper.instance().selected = 'item1';
      wrapper.setState({
        dragging: false
      });
      wrapper.instance().onItemClick(items[2][0]);
      expect(onSelect.mock.calls.length).toEqual(1);
      expect(onSelect.mock.calls[0]).toEqual(['item3']);
    });
  });

  describe('update props', () => {
    it('update translate', () => {
      const wrapper = mount(<ScrollMenu {...props} />);
      wrapper.setProps({ translate: 0 });
      expect(wrapper.state().translate).toEqual(0);
    });
    
    it('update selected', () => {
      const wrapper = mount(<ScrollMenu {...props} />);
      wrapper.setProps({ selected: 'item3' });
      expect(wrapper.instance().selected).toEqual('item3');
    });
  });

  describe('update menu items', () => {
    const prop = {
      ...props,
      translate: 0,
      alignCenter: true
    };
    const menuNew = Menu(items.slice(3, 10), '');
    it('call setInitial', () => {
      const wrapper = mount(<ScrollMenu {...prop} />);
      const setInitial = jest.fn();
      wrapper.instance().setInitial = setInitial;
      wrapper.setProps({ data: menuNew });
      expect(wrapper.instance().needUpdate).toEqual(false);
      expect(setInitial.mock.calls.length).toEqual(1);
    });
    it('do not call setInitial if data is same', () => {
      const wrapper = mount(<ScrollMenu {...prop} />);
      const setInitial = jest.fn();
      wrapper.instance().setInitial = setInitial;
      wrapper.setProps({ data: menuNew });
      expect(setInitial.mock.calls.length).toEqual(1);
      wrapper.setProps({ data: menuNew });
      expect(setInitial.mock.calls.length).toEqual(1);
    });
    it('update menu elements', () => {
      const wrapper = mount(<ScrollMenu {...prop} />);
      wrapper.setProps({ data: menuNew });
      expect(wrapper.instance().menuItems.length).toEqual(4);
      expect(wrapper.state().translate).toEqual(0);
    });
    describe('update translate and offsets if items changed', () => {
      const menuNew = Menu(items.slice(4, 6), '');
      const getAlignItemsOffset = jest.fn().mockReturnValue(25);
      const setInitial = jest.fn();
      const updateWidth = jest.fn().mockReturnValue({
        allItemsWidth: 100,
        firstPageOffset: 25,
        lastPageOffset: 30,
        menuPos: 50,
        menuWidth: 500,
        translate: 20,
        wWidth: 755
      });
      afterEach(() => {
        getAlignItemsOffset.mockClear();
        setInitial.mockClear();
        updateWidth.mockClear();
      });

      it('call setInitial', () => {
        const wrapper = mount(<ScrollMenu {...props} />);
        wrapper.instance().setInitial = setInitial;
        wrapper.setProps({ data: menuNew });
        expect(setInitial.mock.calls.length).toEqual(1);
      });
      it('call getAlignItemsOffset', () => {
        const onUpdate = jest.fn();
        const prop = { ...props, onUpdate };
        const wrapper = mount(<ScrollMenu {...prop} />);
        wrapper.instance().updateWidth = updateWidth;
        wrapper.instance().getAlignItemsOffset = getAlignItemsOffset;
        wrapper.setProps({ data: menuNew });
        expect(updateWidth.mock.calls.length).toEqual(1);
        expect(getAlignItemsOffset.mock.calls.length).toEqual(1);
        expect(onUpdate).toHaveBeenCalled();
        expect(wrapper.state().translate).toEqual(25);
      });
    });
    describe('hide arrows flag', () => {
      const prop = { ...props, hideArrows: true };
      const wrapper = mount(<ScrollMenu {...prop} />);

      it('All items width greater than menu width', () => {
        wrapper.instance().menuWidth = 200;
        wrapper.instance().allItemsWidth = 300;
        expect(wrapper.instance().isArrowsVisible()).toEqual(true);
      });
      it('All items width less than menu width', () => {
        wrapper.instance().menuWidth = 200;
        wrapper.instance().allItemsWidth = 100;
        expect(wrapper.instance().isArrowsVisible()).toEqual(false);
      });
      it('All items width equal  menu width', () => {
        wrapper.instance().menuWidth = 200;
        wrapper.instance().allItemsWidth = 200;
        expect(wrapper.instance().isArrowsVisible()).toEqual(false);
      });
    });
  });

});
