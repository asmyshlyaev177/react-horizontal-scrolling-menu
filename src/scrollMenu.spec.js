/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import { mount, shallow } from 'enzyme';
import ScrollMenu from './scrollMenu';
import { defaultProps } from './defautSettings';

const ev = pos => ({ clientX: pos });

beforeEach(() => {
  jest.spyOn(window, 'requestAnimationFrame').mockImplementation(cb => cb());
  jest.useFakeTimers();
});
afterEach(() => {
  window.requestAnimationFrame.mockRestore();
});

const arrowOnClick = jest.fn();
// eslint-disable-next-line react/prop-types
const Arrow = ({ text, className }) => {
  return (
    <div
      onClick={arrowOnClick}
      className={className}
    >{text}</div>
  );
};

describe('test Arrow', () => {
  const left = {
    className: 'arrow-prev',
    text: '<',
  };
  const right = {
    className: 'arrow-next',
    text: '>',
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

});


const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });

const items = [
  ['item1', { key: 'item1', elem: {getBoundingClientRect: () => ({ x: 0, width: 10, left: 0 }) }}],
  ['item2', { key: 'item2', elem: {getBoundingClientRect: () => ({ x: 10, width: 20, left: 10 }) }}],
  ['item3', { key: 'item3', elem: {getBoundingClientRect: () => ({ x: 30, width: 30, left: 30 }) }}],
  ['item4', { key: 'item4', elem: {getBoundingClientRect: () => ({ x: 60, width: 50, left: 60 }) }}],
  ['item5', { key: 'item5', elem: {getBoundingClientRect: () => ({ x: 110, width: 50, left: 110 }) }}],
  ['item6', { key: 'item6', elem: {getBoundingClientRect: () => ({ x: 160, width: 50, left: 160 }) }}],
  ['item7', { key: 'item7', elem: {getBoundingClientRect: () => ({ x: 210, width: 50, left: 210 }) }}],
];

const getItems = (offset = 0) => [
  ['item1', { index: 0, key: 'item1', elem: { getBoundingClientRect: () => ({ x: offset + 0, width: 10, left: offset + 0 }) }}],
  ['item2', { index: 1, key: 'item2', elem: { getBoundingClientRect: () => ({ x: offset + 10, width: 20, left: offset + 10 }) }}],
  ['item3', { index: 2, key: 'item3', elem: { getBoundingClientRect: () => ({ x: offset + 30, width: 30, left: offset + 30 }) }}],
  ['item4', { index: 3, key: 'item4', elem: { getBoundingClientRect: () => ({ x: offset + 60, width: 50, left: offset + 60 }) }}],
  ['item5', { index: 4, key: 'item5', elem: { getBoundingClientRect: () => ({ x: offset + 110, width: 50, left: offset + 110 }) }}],
  ['item6', { index: 5, key: 'item6', elem: { getBoundingClientRect: () => ({ x: offset + 160, width: 50, left: offset + 160 }) }}],
  ['item7', { index: 6, key: 'item8', elem: { getBoundingClientRect: () => ({ x: offset + 210, width: 50, left: offset + 210 }) }}],
];

const itemOnClick = jest.fn();
// eslint-disable-next-line react/prop-types
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
      onClick={itemOnClick}
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

export const menu = Menu(items, '');

export const props = {
  data: menu,
  arrowLeft: ArrowLeft,
  arrowRight: ArrowRight,
  selected: 3,
  translate: -50
};

describe('test menu', () => {

  const wrapper = mount(<ScrollMenu {...props} />);
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
  it('onClick from arrow component', () => {
    arrowOnClick.mockClear();
    const wrapper = mount(<ScrollMenu {...props} />);
    const arrowClickRight = jest.fn();
    wrapper.instance().handleArrowClickRight = arrowClickRight;
    wrapper.find('.arrow-next').simulate('click');
    expect(arrowOnClick.mock.calls.length).toEqual(1);
  });
  it('not render empty arrows', () => {
    const wrapper = mount(<ScrollMenu data={menu} />);
    expect(wrapper.find('Arrow').length).toBe(0);
  });
  it('set default values', () => {
    const { selected: s, translate: t, data: d, ...rest } = props;
    const wrapper = mount(<ScrollMenu {...rest} />);
    const state = wrapper.state();
    const { selected, translate, data } = state;
    expect(selected === ScrollMenu.defaultProps.selected);
    expect(translate === ScrollMenu.defaultProps.translate);
    expect(data === ScrollMenu.defaultProps.data);
  });
  it('set initial selected item and translate', () => {
    const state = wrapper.state();
    const { selected, translate } = state;
    expect(selected === props.selected);
    expect(translate === props.translate);
  });
  describe('set initial variables', () => {
    it('call updateWidth', () => {
      const wrapper = mount(<ScrollMenu {...props} />);
      const getMenuItems = jest.fn()
        .mockReturnValue(menu);
      const updateWidth = jest.fn()
        .mockReturnValue({ wWidth: 500, menuPos: 30 });
      const checkFirstLastItemVisibility = jest.fn()
        .mockRejectedValue({ firstItemVisible: true, lastItemVisible: false });
      wrapper.instance().checkFirstLastItemVisibility = checkFirstLastItemVisibility;
      wrapper.instance().getMenuItems = getMenuItems;
      wrapper.instance().updateWidth = updateWidth;
      wrapper.data = null;
      wrapper.menuItems = [];
      wrapper.instance().setInitial();
      expect(updateWidth.mock.calls.length).toEqual(1);
    });

    it('set new data and new selected', () => {
      const wrapper = mount(<ScrollMenu {...props} />);
      const { key, ...newData } = menu[0];
      wrapper.setProps({ data: [newData] });
      wrapper.instance().setInitial();
      expect(wrapper.instance().selected).toEqual('3');
    });

  });
  it('pass 0 as translate props, must not be changed', () => {
    const newProps = { ...props, translate: 0 };
    const wrapper = mount(<ScrollMenu {...newProps} />);
    wrapper.instance().setInitial();
    expect(wrapper.state().translate).toEqual(0);
  });
  it('pass defaultProps.translate as translate props, must not be changed', () => {
    const newProps = { ...props, translate: defaultProps.translate };
    const wrapper = mount(<ScrollMenu {...newProps} />);
    wrapper.instance().setInitial();
    expect(wrapper.state().translate).toEqual(defaultProps.translate);
  });
  it('don not call onUpdate on mount', () => {
    const onUpdate = jest.fn();
    const wrapper = mount(<ScrollMenu {...props} />);
    wrapper.instance().onUpdate = onUpdate;

    wrapper.instance().setInitial();

    expect(onUpdate).not.toHaveBeenCalled();
  });
});

describe('functions', () => {

  describe('onUpdate', () => {
    it('translate same old, don not call fn', () => {
      const onUpdate = jest.fn();
      const prop = { ...props, onUpdate };
      const wrapper = mount(<ScrollMenu {...prop} />);

      expect(onUpdate.mock.calls.length).toEqual(0);

      const { translate } = wrapper.instance().state;
      wrapper.setState({ translate });

      expect(onUpdate.mock.calls.length).toEqual(0);
    });

    it('translate changed, call fn', () => {
      const onUpdate = jest.fn();
      const prop = { ...props, onUpdate };
      const wrapper = mount(<ScrollMenu {...prop} />);

      expect(onUpdate.mock.calls.length).toEqual(0);

      wrapper.setState({ translate: defaultProps.translate + 10 });
      expect(onUpdate.mock.calls.length).toEqual(1);
    });

    it('arguments', () => {
      const onUpdate = jest.fn();
      const prop = { ...props, onUpdate };
      const wrapper = mount(<ScrollMenu {...prop} />);

      wrapper.instance().onUpdate({ translate: 0, translateOld: 0 });
      expect(onUpdate.mock.calls.length).toEqual(0);

      wrapper.instance().onUpdate({ translate: 5, translateOld: 0 });
      expect(onUpdate.mock.calls.length).toEqual(1);
    });

    it('call on handleDragStop if translate changed', () => {
      const onUpdate = jest.fn();
      const prop = { ...props, dragging: true, alignCenter: true, onUpdate };
      const wrapper = mount(<ScrollMenu {...prop} />);
      wrapper.setState({ dragging: true, translate: 0, startDragTranslate: 10 });
      const itBeforeStart = jest.fn();
      itBeforeStart.mockReturnValue(false);
      wrapper.instance().itBeforeStart = itBeforeStart;
      const itAfterEnd = jest.fn();
      itAfterEnd.mockReturnValue(false);
      wrapper.instance().itAfterEnd = itAfterEnd;

      wrapper.setState({ translate: 50 });
      wrapper.instance().handleDragStop();
      expect(onUpdate.mock.calls.length).toEqual(1);
    });

    it('do not call on handleDragStop if translate same', () => {
      const onUpdate = jest.fn();
      const prop = { ...props, dragging: true, alignCenter: true, onUpdate };
      const wrapper = mount(<ScrollMenu {...prop} />);
      wrapper.setState({ dragging: true, translate: 0, startDragTranslate: 0 });
      const itBeforeStart = jest.fn();
      itBeforeStart.mockReturnValue(false);
      wrapper.instance().itBeforeStart = itBeforeStart;
      const itAfterEnd = jest.fn();
      itAfterEnd.mockReturnValue(false);
      wrapper.instance().itAfterEnd = itAfterEnd;

      expect(onUpdate.mock.calls.length).toEqual(0);
      wrapper.setState({ translate: 0 });
      wrapper.instance().handleDragStop();
      expect(onUpdate.mock.calls.length).toEqual(0);
    });

  });

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
      expect(wrapper.instance().elemVisible({ x: -50, elWidth: 50, offset: 50 })).toBe(true);
      expect(wrapper.instance().elemVisible({ x: 0, elWidth: 50, offset: 50 })).toBe(true);
      expect(wrapper.instance().elemVisible({ x: 0, elWidth: 50, offset: 100 })).toBe(true);
      expect(wrapper.instance().elemVisible({ x: 50, elWidth: 50, offset: 100 })).toBe(true);
      expect(wrapper.instance().elemVisible({ x: 50, elWidth: 50, offset: 300 })).toBe(false);
      expect(wrapper.instance().elemVisible({ x: 50, elWidth: 50, offset: 351 })).toBe(false);
      expect(wrapper.instance().elemVisible({ x: 101, elWidth: 50, offset: 100 })).toBe(true);
      expect(wrapper.instance().elemVisible({ x: 150, elWidth: 50, offset: 100 })).toBe(true);
      expect(wrapper.instance().elemVisible({ x: 350, elWidth: 50, offset: 0 })).toBe(false);
      expect(wrapper.instance().elemVisible({ x: 351, elWidth: 50, offset: 0 })).toBe(false);
      expect(wrapper.instance().elemVisible({ x: 250, elWidth: 50, offset: -100 })).toBe(true);
      expect(wrapper.instance().elemVisible({ x: 250, elWidth: 50, offset: -150 })).toBe(true);
      expect(wrapper.instance().elemVisible({ x: 250, elWidth: 50, offset: -200 })).toBe(true);
      expect(wrapper.instance().elemVisible({ x: 250, elWidth: 50, offset: -201 })).toBe(true);
      expect(wrapper.instance().elemVisible({ x: 350, elWidth: 50, offset: 0 })).toBe(false);
      expect(wrapper.instance().elemVisible({ x: 351, elWidth: 50, offset: 0 })).toBe(false);
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
      wrapper.instance().menuWidth = 30;
      wrapper.instance().allItemsWidth = 150;
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
    const getPagesOffsets = jest.fn()
      .mockReturnValue({items: [], wWidth: 15, menuPos: 5, menuWidth: 10, allItemsWidth: 7 });
    const wrapper = mount(<ScrollMenu {...prop} />);
    wrapper.instance().menuWrapper = menuWrapper;
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
      expect(getPagesOffsets.mock.calls.length).toEqual(2);
    });
  });

  describe('get index functions', () => {
    const wrapper = mount(<ScrollMenu {...props} />);
    wrapper.instance().menuItems = items;

    it('getItemIndexByKey', () => {
      const itemIndex = wrapper.instance().getItemIndexByKey('item1');
      expect(itemIndex).toEqual(0);
      const itemIndex2 = wrapper.instance().getItemIndexByKey('item5');
      expect(itemIndex2).toEqual(4);
      const itemIndex3 = wrapper.instance().getItemIndexByKey('item555');
      expect(itemIndex3).toEqual(-1);
      const itemIndex4 = wrapper.instance().getItemIndexByKey(null);
      expect(itemIndex4).toEqual(-1);
      const itemIndex5 = wrapper.instance().getItemIndexByKey();
      expect(itemIndex5).toEqual(-1);
    });

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

    it('getOffsetAtStart', () => {
      // return offset for first page of items for alignCenter
      const prop = { ...props, alignCenter: true };
      const wrapper = mount(<ScrollMenu {...prop} />);
      wrapper.instance().firstPageOffset = 10;
      expect(wrapper.instance().getOffsetAtStart()).toEqual(10);

      wrapper.setProps({ alignCenter: false });
      expect(wrapper.instance().getOffsetAtStart()).toEqual(defaultProps.translate);
    });
    it('getOffsetAtEnd', () => {
      // return offset for last page of items for alignCenter
      const prop = { ...props, alignCenter: true };
      const wrapper = mount(<ScrollMenu {...prop} />);
      const [ allItemsWidth, menuWidth, lastPageOffset ] = [200, 50, 20];
      wrapper.instance().allItemsWidth = allItemsWidth;
      wrapper.instance().menuWidth = menuWidth;
      wrapper.instance().lastPageOffset = lastPageOffset;

      const offset = -(allItemsWidth - menuWidth);
      expect(wrapper.instance().getOffsetAtEnd()).toEqual(offset - lastPageOffset);

      wrapper.setProps({ alignCenter: false });
      expect(wrapper.instance().getOffsetAtEnd()).toEqual(offset);
    });

    describe('getOffsetToItemByKey', () => {
      const prop = { ...props, alignCenter: true };
      const wrapper = mount(<ScrollMenu {...prop} />);
      const translate = 20;
      wrapper.setState({ translate });
      const menuPos = 30;
      wrapper.instance().menuPos = menuPos;

      it('no key value return current translate', () => {
        const result = wrapper.instance().getOffsetToItemByKey(null);
        expect(result).toEqual(translate);
      });
      it('key does not exist return current translate', () => {
        const result = wrapper.instance().getOffsetToItemByKey('test_567');
        expect(result).toEqual(translate);
      });
      describe('calc and return translate', () => {
        const getVisibleItems = jest.fn();
        getVisibleItems.mockReturnValue([]);
        wrapper.instance().getVisibleItems = getVisibleItems;

        it('align center', () => {
          wrapper.setProps({ alignCenter: true });
          const getOffsetToItemByIndex = jest.fn();
          const translate = 70;
          getOffsetToItemByIndex.mockReturnValue(translate);
          const offset = 50;
          const getCenterOffset = jest.fn();
          getCenterOffset.mockReturnValue(offset);
          const getVisibleItems = jest.fn();
          getVisibleItems.mockReturnValue([]);
          const itBeforeStart = jest.fn();
          itBeforeStart.mockReturnValue(false);
          const itAfterEnd = jest.fn();
          itAfterEnd.mockReturnValue(false);
          wrapper.instance().getOffsetToItemByIndex = getOffsetToItemByIndex;
          wrapper.instance().getCenterOffset = getCenterOffset;
          wrapper.instance().getVisibleItems = getVisibleItems;
          wrapper.instance().itBeforeStart = itBeforeStart;
          wrapper.instance().itAfterEnd = itAfterEnd;

          const resultExpected = -(translate - offset);
          const result = wrapper.instance().getOffsetToItemByKey(items[3][0]);

          expect(getOffsetToItemByIndex.mock.calls.length).toEqual(1);
          expect(getCenterOffset.mock.calls.length).toEqual(1);
          expect(getVisibleItems.mock.calls.length).toEqual(1);
          expect(itBeforeStart.mock.calls.length).toEqual(1);
          expect(itAfterEnd.mock.calls.length).toEqual(1);
          expect(result).toEqual(+resultExpected.toFixed(3));
        });

        it('no align center', () => {
          wrapper.setProps({ alignCenter: false });
          const getOffsetToItemByIndex = jest.fn();
          const translate = 70;
          getOffsetToItemByIndex.mockReturnValue(translate);
          const offset = defaultProps.translate;
          const getVisibleItems = jest.fn();
          getVisibleItems.mockReturnValue([]);
          const itBeforeStart = jest.fn();
          itBeforeStart.mockReturnValue(false);
          const itAfterEnd = jest.fn();
          itAfterEnd.mockReturnValue(false);
          wrapper.instance().getOffsetToItemByIndex = getOffsetToItemByIndex;
          wrapper.instance().getVisibleItems = getVisibleItems;
          wrapper.instance().itBeforeStart = itBeforeStart;
          wrapper.instance().itAfterEnd = itAfterEnd;

          const resultExpected = -(translate - offset);
          const result = wrapper.instance().getOffsetToItemByKey(items[3][0]);

          expect(getOffsetToItemByIndex.mock.calls.length).toEqual(1);
          expect(getVisibleItems.mock.calls.length).toEqual(1);
          expect(itBeforeStart.mock.calls.length).toEqual(1);
          expect(itAfterEnd.mock.calls.length).toEqual(1);
          expect(result).toEqual(+resultExpected.toFixed(3));
        });

        it('it before start', () => {
          wrapper.setProps({ alignCenter: false });
          const getOffsetToItemByIndex = jest.fn();
          const translate = 70;
          getOffsetToItemByIndex.mockReturnValue(translate);
          const getVisibleItems = jest.fn();
          getVisibleItems.mockReturnValue([]);
          const itBeforeStart = jest.fn();
          itBeforeStart.mockReturnValue(true);
          const itAfterEnd = jest.fn();
          itAfterEnd.mockReturnValue(false);
          const getOffsetAtStart = jest.fn();
          getOffsetAtStart.mockReturnValue(25);
          wrapper.instance().getOffsetToItemByIndex = getOffsetToItemByIndex;
          wrapper.instance().getVisibleItems = getVisibleItems;
          wrapper.instance().itBeforeStart = itBeforeStart;
          wrapper.instance().itAfterEnd = itAfterEnd;
          wrapper.instance().getOffsetAtStart = getOffsetAtStart;

          const resultExpected = 25;
          const result = wrapper.instance().getOffsetToItemByKey(items[3][0]);

          expect(result).toEqual(+resultExpected.toFixed(3));
        });

        it('it after end', () => {
          wrapper.setProps({ alignCenter: false });
          const getOffsetToItemByIndex = jest.fn();
          const translate = 70;
          getOffsetToItemByIndex.mockReturnValue(translate);
          const offset = defaultProps.translate;
          const getVisibleItems = jest.fn();
          getVisibleItems.mockReturnValue([]);
          const itBeforeStart = jest.fn();
          itBeforeStart.mockReturnValue(false);
          const itAfterEnd = jest.fn();
          itAfterEnd.mockReturnValue(true);
          const getOffsetAtEnd = jest.fn();
          getOffsetAtEnd.mockReturnValue(25);
          wrapper.instance().getOffsetToItemByIndex = getOffsetToItemByIndex;
          wrapper.instance().getVisibleItems = getVisibleItems;
          wrapper.instance().itBeforeStart = itBeforeStart;
          wrapper.instance().itAfterEnd = itAfterEnd;
          wrapper.instance().getOffsetAtEnd = getOffsetAtEnd;

          const resultExpected = 25;
          const result = wrapper.instance().getOffsetToItemByKey(items[3][0]);

          expect(result).toEqual(+resultExpected.toFixed(3));
        });
      });

    });

    it('getOfsetToItem', () => {
      wrapper.instance().menuItems = [];
      expect(wrapper.instance().getOffsetToItemByIndex({ index: 9 })).toEqual(0);

      wrapper.instance().menuItems = items;
      expect(wrapper.instance().getOffsetToItemByIndex({ index: 0 })).toEqual(0);
      expect(wrapper.instance().getOffsetToItemByIndex({ index: 1 })).toEqual(10);
      expect(wrapper.instance().getOffsetToItemByIndex({ index: 2 })).toEqual(30);
      expect(wrapper.instance().getOffsetToItemByIndex({ index: 3 })).toEqual(60);

      wrapper.setState({ translate: 30 });
      expect(wrapper.instance().getOffsetToItemByIndex({ index: 0 })).toEqual(-30);
      expect(wrapper.instance().getOffsetToItemByIndex({ index: 1 })).toEqual(-20);
      expect(wrapper.instance().getOffsetToItemByIndex({ index: 2 })).toEqual(0);
      expect(wrapper.instance().getOffsetToItemByIndex({ index: 3 })).toEqual(30);

      wrapper.setState({ translate: -30 });
      expect(wrapper.instance().getOffsetToItemByIndex({ index: 0 })).toEqual(30);
      expect(wrapper.instance().getOffsetToItemByIndex({ index: 1 })).toEqual(40);
      expect(wrapper.instance().getOffsetToItemByIndex({ index: 2 })).toEqual(60);
      expect(wrapper.instance().getOffsetToItemByIndex({ index: 3 })).toEqual(90);
      expect(wrapper.instance().getOffsetToItemByIndex({ index: 12 })).toEqual(240);
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
      const setUp = (translate) => {
        const wrapper = mount(<ScrollMenu {...props} />);
        wrapper.instance().wWidth = 500;
        wrapper.instance().menuWidth = 100;
        wrapper.instance().firstPageOffset = 10;
        wrapper.instance().lastPageOffset = 20;
        wrapper.instance().menuPos = 50;
        const items = getItems(translate);
        wrapper.instance().menuItems = items;
        wrapper.setState({ translate });

        return { wrapper, items };
      };

      describe('scrollBy 0', () => {
        it('translate -150', () => {
          const { wrapper, items } = setUp(-150);
          const visibleItems = wrapper.instance().getVisibleItems({});
          expect(wrapper.instance().getScrollRightOffset(visibleItems, items))
            .toEqual(-160);
        });

        it('translate -100', () => {
          const { wrapper, items } = setUp(-100);
          const visibleItems = wrapper.instance().getVisibleItems({});
          expect(wrapper.instance().getScrollRightOffset(visibleItems, items))
            .toEqual(-160);
        });

        it('translate 0', () => {
          const { wrapper, items } = setUp(0);
          const visibleItems = wrapper.instance().getVisibleItems({});
          expect(wrapper.instance().getScrollRightOffset(visibleItems, items))
            .toEqual(-60);
        });

        it('translate 100', () => {
          const { wrapper, items } = setUp(100);
          const visibleItems = wrapper.instance().getVisibleItems({});
          expect(wrapper.instance().getScrollRightOffset(visibleItems, items))
            .toEqual(20);
        });
        it('translate 150', () => {
          const { wrapper, items } = setUp(150);
          const visibleItems = wrapper.instance().getVisibleItems({});
          expect(wrapper.instance().getScrollRightOffset(visibleItems, items))
            .toEqual(-160);
        });
      });

      describe('scrollBy 1', () => {
        it('translate -150', () => {
          const { wrapper, items } = setUp(-150, 1);
          const visibleItems = wrapper.instance().getVisibleItems({});
          expect(wrapper.instance().getScrollRightOffset(visibleItems, items))
            .toEqual(-160);
        });

        it('translate -100', () => {
          const { wrapper, items } = setUp(-100, 1);
          const visibleItems = wrapper.instance().getVisibleItems({});
          expect(wrapper.instance().getScrollRightOffset(visibleItems, items))
            .toEqual(-160);
        });

        it('translate 0', () => {
          const { wrapper, items } = setUp(0, 1);
          const visibleItems = wrapper.instance().getVisibleItems({});
          expect(wrapper.instance().getScrollRightOffset(visibleItems, items))
            .toEqual(-60);
        });

        it('translate 100', () => {
          const { wrapper, items } = setUp(100, 1);
          const visibleItems = wrapper.instance().getVisibleItems({});
          expect(wrapper.instance().getScrollRightOffset(visibleItems, items))
            .toEqual(20);
        });
        it('translate 150', () => {
          const { wrapper, items } = setUp(150, 1);
          const visibleItems = wrapper.instance().getVisibleItems({});
          expect(wrapper.instance().getScrollRightOffset(visibleItems, items))
            .toEqual(-160);
        });
      });
    });

    describe('getScrollLeftOffset fn', () => {
      const setUp = (translate, scrollBy = 0) => {
        const wrapper = mount(<ScrollMenu {...props} scrollBy={scrollBy} />);
        wrapper.instance().wWidth = 500;
        wrapper.instance().firstPageOffset = 10;
        wrapper.instance().lastPageOffset = 20;
        wrapper.instance().menuPos = 50;
        wrapper.instance().menuWidth = 100;
        const getItemsWidth = jest.fn()
          .mockReturnValue(70);
        wrapper.instance().getItemsWidth = getItemsWidth;

        const items = getItems(translate);
        wrapper.instance().menuItems = items;
        wrapper.setState({ translate });

        return { wrapper, items };
      };

      describe('scrollBy 0', () => {
        it('translate -150', () => {
          const { wrapper, items } = setUp(-150);
          const visibleItems = wrapper.instance().getVisibleItems({});
          expect(wrapper.instance().getScrollLeftOffset(visibleItems, items))
            .toEqual(-60);
        });

        it('translate -100', () => {
          const { wrapper, items } = setUp(-100);
          const visibleItems = wrapper.instance().getVisibleItems({});
          expect(wrapper.instance().getScrollLeftOffset(visibleItems, items))
            .toEqual(-10);
        });

        it('translate 0', () => {
          const { wrapper, items } = setUp(0);
          const visibleItems = wrapper.instance().getVisibleItems({});
          expect(wrapper.instance().getScrollLeftOffset(visibleItems, items))
            .toEqual(40);
        });

        it('translate 100', () => {
          const { wrapper, items } = setUp(100);
          const visibleItems = wrapper.instance().getVisibleItems({});
          expect(wrapper.instance().getScrollLeftOffset(visibleItems, items))
            .toEqual(50);
        });
        it('translate 150', () => {
          const { wrapper, items } = setUp(150);
          const visibleItems = wrapper.instance().getVisibleItems({});
          expect(wrapper.instance().getScrollLeftOffset(visibleItems, items))
            .toEqual(50);
        });
      });

      describe('scrollBy 1', () => {
        it('translate -150', () => {
          const { wrapper, items } = setUp(-150, 1);
          const visibleItems = wrapper.instance().getVisibleItems({});
          expect(wrapper.instance().getScrollLeftOffset(visibleItems, items))
            .toEqual(-110);
        });

        it('translate -100', () => {
          const { wrapper, items } = setUp(-100, 1);
          const visibleItems = wrapper.instance().getVisibleItems({});
          expect(wrapper.instance().getScrollLeftOffset(visibleItems, items))
            .toEqual(-60);
        });

        it('translate 0', () => {
          const { wrapper, items } = setUp(0, 1);
          const visibleItems = wrapper.instance().getVisibleItems({});
          expect(wrapper.instance().getScrollLeftOffset(visibleItems, items))
            .toEqual(20);
        });

        it('translate 100', () => {
          const { wrapper, items } = setUp(100, 1);
          const visibleItems = wrapper.instance().getVisibleItems({});
          expect(wrapper.instance().getScrollLeftOffset(visibleItems, items))
            .toEqual(50);
        });
        it('translate 150', () => {
          const { wrapper, items } = setUp(150, 1);
          const visibleItems = wrapper.instance().getVisibleItems({});
          expect(wrapper.instance().getScrollLeftOffset(visibleItems, items))
            .toEqual(50);
        });
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
      wrapper.instance().allItemsWidth = 500;
      wrapper.instance().menuWidth = 100;
      wrapper.instance().firstPageOffset = 3;
      wrapper.instance().lastPageOffset = 4;

      const checkClick = (offset = 0, left = false, align = false, before = false, after = false) => {
        const items = getItems(offset);
        wrapper.instance().menuItems = items;
        wrapper.setProps({ alignCenter: align });
        wrapper.setState({ translate: offset });
        const getOffset = jest.fn().mockReturnValue(30);
        wrapper.instance().getOffset = getOffset;
        const getCenterOffset = jest.fn().mockReturnValue(10);
        wrapper.instance().getCenterOffset = getCenterOffset;

        const itBeforeStart = jest.fn().mockReturnValue(before);
        wrapper.instance().itBeforeStart = itBeforeStart;
        const itAfterEnd = jest.fn().mockReturnValue(after);
        wrapper.instance().itAfterEnd = itAfterEnd;

        const getOffsetAtStart = jest.fn().mockReturnValue(5);
        wrapper.instance().getOffsetAtStart = getOffsetAtStart;
        const getOffsetAtEnd = jest.fn().mockReturnValue(6);
        wrapper.instance().getOffsetAtEnd = getOffsetAtEnd;

        const onUpdate = jest.fn();
        wrapper.instance().onUpdate = onUpdate;

        const { translate: oldTranslate } = wrapper.state();
        wrapper.instance().handleArrowClick(left);
        const { translate, xPoint } = wrapper.state();
        expect(xPoint).toEqual(0);

        const tranlsateChanged = oldTranslate !== translate;
        expect(onUpdate.mock.calls.length).toEqual(+tranlsateChanged);

        return translate;
      };

      it('do nothing width right noAlign, items width less than menu width', () => {
        const wrapper = mount(
          <ScrollMenu
            {...props}
            alignCenter={false}
          />
        );
        const onUpdate = jest.fn();

        wrapper.setState({ translate: 0 });
        wrapper.instance().onUpdate = onUpdate;
        wrapper.instance().allItemsWidth = 100;
        wrapper.instance().menuWidth = 200;
        expect(wrapper.instance().state.translate).toEqual(0);
        const click = wrapper.instance().handleArrowClick(false);
        expect(click).toEqual(false);
        expect(wrapper.instance().state.translate).toEqual(0);

        expect(onUpdate.mock.calls.length).toEqual(0);
      });

      it('left noAlign', () => {
        expect(checkClick(0, true)).toEqual(5);
      });
      it('left noAlign itBeforeStart', () => {
        expect(checkClick(0, true, false, true)).toEqual(5);
      });
      it('right noAlign', () => {
        expect(checkClick(0, false)).toEqual(30);
      });
      it('right noAlign itAfterEnd', () => {
        expect(checkClick(0, false, false, false, true)).toEqual(6);
      });

      it('left align', () => {
        expect(checkClick(0, true, true)).toEqual(5);
      });
      it('left align itBeforeStart', () => {
        expect(checkClick(0, true, true, true)).toEqual(5);
      });
      it('right align', () => {
        expect(checkClick(0, false, true)).toEqual(40);
      });
      it('right align itAfterEnd', () => {
        expect(checkClick(0, false, true, false, true)).toEqual(6);
      });
    });

  });

  describe('dragging', () => {

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

      expect(checkDrag(50, 55, 5)).toEqual([defaultProps.translate, 5]);
    });

    it('handleDragStop', () => {
      const wrapper = mount(<ScrollMenu {...props} />);
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
      expect(wrapper.instance().getPoint(ev(35))).toEqual(100);
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
      expect(wrapper.instance().getPoint(ev(35))).toEqual(35);
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
      const itBeforeStart = jest.fn().mockReturnValue(true);
      wrapper.instance().itBeforeStart = itBeforeStart;

      wrapper.instance().onUpdate = onUpdate;
      wrapper.setState({ translate: 50  });
      wrapper.instance().startDragTranslate = 50;
      wrapper.instance().firstPageOffset = 100;

      wrapper.instance().handleDragStart();
      wrapper.instance().handleDrag(ev(35));

      expect(onUpdate.mock.calls.length).toEqual(1);
    });
    it('don not fire onUpdate if translate same', () => {
      const wrapper = mount(<ScrollMenu {...props} />);
      wrapper.setProps({ alignCenter: true });
      const onUpdate = jest.fn();
      wrapper.setState({ translate: 50 });
      wrapper.instance().startDragTranslate = 50;
      wrapper.instance().firstPageOffset = 50;
      const itBeforeStart = jest.fn();
      itBeforeStart.mockReturnValue(false);
      wrapper.instance().onUpdate = onUpdate;
      wrapper.instance().itBeforeStart = itBeforeStart;
      const itAfterEnd = jest.fn();
      itAfterEnd.mockReturnValue(false);
      wrapper.instance().itAfterEnd = itAfterEnd;

      wrapper.setState({ translate: 50 });
      expect(onUpdate.mock.calls.length).toEqual(0);

      wrapper.instance().handleDragStart();
      wrapper.instance().handleDrag(ev(50));

      expect(onUpdate.mock.calls.length).toEqual(0);
    });
    it('call onUpdate after handleDragStop', () => {
      const wrapper = mount(<ScrollMenu {...props} />);
      wrapper.setProps({ alignCenter: true });
      const onUpdate = jest.fn();
      wrapper.setState({ translate: 50 });
      wrapper.instance().startDragTranslate = 50;
      wrapper.instance().firstPageOffset = 50;
      const itBeforeStart = jest.fn();
      itBeforeStart.mockReturnValue(false);
      wrapper.instance().onUpdate = onUpdate;
      wrapper.instance().itBeforeStart = itBeforeStart;
      const itAfterEnd = jest.fn();
      itAfterEnd.mockReturnValue(false);
      wrapper.instance().itAfterEnd = itAfterEnd;

      wrapper.instance().handleDragStart();
      wrapper.instance().handleDrag(ev(50));
      wrapper.instance().handleDragStop(ev(50));

      expect(onUpdate.mock.calls.length).toEqual(1);
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
      expect(wrapper.state().xPoint).toEqual(defaultProps.xPoint);
    });

    it('allItemsWidth less than menuWidth - don not allow drag', () => {
      const wrapper = mount(<ScrollMenu {...props} />);
      wrapper.instance().menuItems = items;
      wrapper.setProps({ alignCenter: true });
      wrapper.instance().menuWidth = 300;
      wrapper.instance().allItemsWidth = 150;
      wrapper.instance().lastPageOffset = 20;
      wrapper.instance().firstPageOffset = 20;

      expect(wrapper.instance().itBeforeStart(-10)).toEqual(true);
      expect(wrapper.instance().itBeforeStart(19)).toEqual(true);
      expect(wrapper.instance().itBeforeStart(21)).toEqual(true);
      expect(wrapper.instance().itBeforeStart(50)).toEqual(true);
      expect(wrapper.instance().itAfterEnd(100)).toEqual(true);
      expect(wrapper.instance().itAfterEnd(-140)).toEqual(true);
      expect(wrapper.instance().itAfterEnd(-141)).toEqual(true);
      expect(wrapper.instance().itAfterEnd(-200)).toEqual(true);

      wrapper.setProps({ alignCenter: false });
      expect(wrapper.instance().itBeforeStart(0)).toEqual(true);
      expect(wrapper.instance().itBeforeStart(-10)).toEqual(true);
      expect(wrapper.instance().itBeforeStart(50)).toEqual(true);
      expect(wrapper.instance().itBeforeStart(100)).toEqual(true);
      expect(wrapper.instance().itAfterEnd(100)).toEqual(true);
      expect(wrapper.instance().itAfterEnd(-118)).toEqual(true);
      expect(wrapper.instance().itAfterEnd(-121)).toEqual(true);
      expect(wrapper.instance().itAfterEnd(-200)).toEqual(true);
    });
  });

  describe('add/remove eventListeners', () => {

    //TODO fix jest global.window object
    xit('add event listeners', () => {
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

    xit('delete event handler after unmount', () => {
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

    it('trigger original onClick handler', () => {
      itemOnClick.mockClear();
      const wrapper = mount(<ScrollMenu {...props}/>);
      const item = wrapper.find(MenuItem).first();
      item.simulate('click');
      expect(itemOnClick.mock.calls.length).toEqual(1);
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
        setInitial.mockClear();
        updateWidth.mockClear();
      });

      it('call setInitial', () => {
        const wrapper = mount(<ScrollMenu {...props} />);
        wrapper.instance().setInitial = setInitial;
        wrapper.setProps({ data: menuNew });
        expect(setInitial.mock.calls.length).toEqual(1);
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

    describe('hide single arrow if at first/last element, hideSingleArrow flag', () => {
      const prop = { ...props, hideSingleArrow: true };

      describe('check first and last item visibility on mount', () => {
        it('checkFirstLastItemVisibility have been called', () => {
          const checkFirstLastItemVisibility = jest.fn()
            .mockReturnValue({ firstItemVisible: true, lastItemVisible: true });
          const getVisibleItems = jest.fn()
            .mockReturnValue([]);
          const wrapper = mount(<ScrollMenu {...prop} />);

          wrapper.instance().getVisibleItems = getVisibleItems;
          wrapper.instance().checkFirstLastItemVisibility = checkFirstLastItemVisibility;
          wrapper.instance().setInitial();
          expect(checkFirstLastItemVisibility).toHaveBeenCalled();
          expect(getVisibleItems).toHaveBeenCalled();
        });

        it('first item visible thus left arrow hidden', () => {
          const p = { ...prop, translate: 0, hideArrows: false };
          const wrapper = mount(<ScrollMenu {...p} />);
          wrapper.instance().wWidth = 500;
          wrapper.instance().menuPos = 0;
          wrapper.instance().menuWidth = 100;
          wrapper.instance().menuItems = items;
          wrapper.instance().firstPageOffset = 0;

          const { firstItemVisible } = wrapper.instance().checkFirstLastItemVisibility({});
          expect(firstItemVisible).toEqual(true);
          wrapper.setState({
            firstItemVisible, leftArrowVisible: !firstItemVisible,
            lastItemVisible: false, rightArrowVisible: true,
          });

          expect(wrapper.html().includes(`${defaultProps.arrowDisabledClass}`));
        });

        it('first item not visible thus left arrow visible', () => {
          const p = { ...prop, translate: 0 };
          const wrapper = mount(<ScrollMenu {...p} />);
          wrapper.instance().wWidth = 500;
          wrapper.instance().menuPos = 0;
          wrapper.instance().menuWidth = 100;
          wrapper.instance().menuItems = items;
          wrapper.instance().firstPageOffset = 0;

          const { firstItemVisible } = wrapper.instance().checkFirstLastItemVisibility({ translate: -100 });
          expect(firstItemVisible).toEqual(false);
          wrapper.setState({
            firstItemVisible, leftArrowVisible: !firstItemVisible,
            lastItemVisible: false, rightArrowVisible: true,
          });
          expect(!wrapper.html().includes(`${defaultProps.arrowDisabledClass}`));
        });

        it('last item visible thus right arrow hidden', () => {
          const p = { ...prop, translate: 0 };
          const wrapper = mount(<ScrollMenu {...p} />);
          wrapper.instance().wWidth = 500;
          wrapper.instance().menuPos = 0;
          wrapper.instance().menuWidth = 100;
          wrapper.instance().menuItems = items;
          wrapper.instance().firstPageOffset = 0;

          const { lastItemVisible } = wrapper.instance().checkFirstLastItemVisibility({ translate: -200 });
          expect(lastItemVisible).toEqual(true);
          wrapper.setState({
            firstItemVisible: false, leftArrowVisible: false,
            lastItemVisible, rightArrowVisible: !lastItemVisible,
          });
          expect(wrapper.html().includes(`${defaultProps.arrowDisabledClass}`));
        });

        it('last item not visible thus right arrow visible', () => {
          const p = { ...prop, translate: 0 };
          const wrapper = mount(<ScrollMenu {...p} />);
          wrapper.instance().wWidth = 500;
          wrapper.instance().menuPos = 0;
          wrapper.instance().menuWidth = 100;
          wrapper.instance().menuItems = items;
          wrapper.instance().firstPageOffset = 0;

          const { lastItemVisible } = wrapper.instance().checkFirstLastItemVisibility({ translate: -100 });
          expect(lastItemVisible).toEqual(false);
          wrapper.setState({
            firstItemVisible: false, leftArrowVisible: false,
            lastItemVisible, rightArrowVisible: !lastItemVisible,
          });
          expect(!wrapper.html().includes(`${defaultProps.arrowDisabledClass}`));
        });
        it('last and fist items not visible thus both arrows visible', () => {
          const p = { ...prop, translate: 0 };
          const wrapper = mount(<ScrollMenu {...p} />);
          wrapper.instance().wWidth = 500;
          wrapper.instance().menuPos = 0;
          wrapper.instance().menuWidth = 70;
          wrapper.instance().menuItems = items;
          wrapper.instance().firstPageOffset = 0;

          const {
            firstItemVisible,
            lastItemVisible
          } = wrapper.instance().checkFirstLastItemVisibility({ translate: -100 });
          expect(firstItemVisible).toEqual(false);
          expect(lastItemVisible).toEqual(false);
          expect(wrapper.html().includes(`${defaultProps.arrowDisabledClass}`));
        });
      });

      describe('check arrow visibility after update', () => {
        it('check via RAF', () => {
          const p = { ...prop, translate: 0 };
          const wrapper = mount(<ScrollMenu {...p} />);
          const setFirstLastItemVisibility = jest.fn();
          wrapper.instance().setFirstLastItemVisibility = setFirstLastItemVisibility;
          wrapper.setState({ translate: 50 });

          expect(setFirstLastItemVisibility).toHaveBeenCalled();
        });
        it('check via setTimeout after animation end', () => {
          const p = { ...prop, transition: 0.5, translate: 0 };
          const wrapper = mount(<ScrollMenu {...p} />);
          const setFirstLastItemVisibility = jest.fn();
          const checkFirstLastItemVisibility = jest.fn();
          const getVisibleItems = jest.fn().mockRejectedValue([]);
          wrapper.instance().setFirstLastItemVisibility = setFirstLastItemVisibility;
          wrapper.instance().checkFirstLastItemVisibility = checkFirstLastItemVisibility;
          wrapper.instance().getVisibleItems = getVisibleItems;

          jest.clearAllTimers();
          expect(setFirstLastItemVisibility.mock.calls.length).toEqual(0);
          wrapper.setState({ translate: 50 });
          jest.runAllTimers();

          expect(setFirstLastItemVisibility).toHaveBeenCalled();
        });

      });

      describe('scroll to selected item on start', () => {
        it('scrollToSelected false', () => {
          const scrollTo = 'item7';
          const prop = { ...props, scrollToSelected: false };
          const wrapper = mount(<ScrollMenu {...prop} />);
          const getOffsetToItemByKey = jest.fn();
          getOffsetToItemByKey.mockReturnValue(35);
          wrapper.instance().getOffsetToItemByKey = getOffsetToItemByKey;
          const isScrollNeeded = jest.fn();
          isScrollNeeded.mockReturnValue(true);
          wrapper.instance().isScrollNeeded = isScrollNeeded;
          wrapper.instance().wWidth = 500;
          wrapper.instance().menuPos = 20;
          wrapper.instance().menuWidth = 100;
          wrapper.instance().menuItems = items;
          wrapper.instance().firstPageOffset = 10;

          wrapper.setProps({ selected: scrollTo });
          expect(wrapper.instance().selected).toEqual(scrollTo);
          expect(isScrollNeeded).not.toHaveBeenCalled();
          expect(getOffsetToItemByKey.mock.calls.length).toEqual(0);
        });
        it('selected visible do not scroll - isScrollNeeded fn', () => {
          const prop = { ...props, scrollToSelected: true };
          const wrapper = mount(<ScrollMenu {...prop} />);
          wrapper.setState({ translate: 0 });
          wrapper.instance().wWidth = 500;
          wrapper.instance().menuPos = 0;
          wrapper.instance().menuWidth = 100;
          wrapper.instance().menuItems = items;
          wrapper.instance().firstPageOffset = 10;

          expect(
            wrapper.instance()
              .isScrollNeeded({ itemId: 'item1', translate: 0 }))
            .toEqual(false);
          expect(
            wrapper.instance()
              .isScrollNeeded({ itemId: 'item2', translate: 0 }))
            .toEqual(false);
          expect(
            wrapper.instance()
              .isScrollNeeded({ itemId: 'item3', translate: 0 }))
            .toEqual(false);
        });

        it('selected item not visible', () => {
          const prop = { ...props, scrollToSelected: true };
          const wrapper = mount(<ScrollMenu {...prop} />);
          wrapper.setState({ translate: 0 });
          wrapper.instance().wWidth = 500;
          wrapper.instance().menuPos = 0;
          wrapper.instance().menuWidth = 100;
          wrapper.instance().menuItems = items;
          wrapper.instance().firstPageOffset = 10;

          expect(
            wrapper.instance()
              .isScrollNeeded({ itemId: 'item4', translate: 0 }))
            .toEqual(true);

          expect(
            wrapper.instance()
              .isScrollNeeded({ itemId: 'item5', translate: 0 }))
            .toEqual(true);
          expect(
            wrapper.instance()
              .isScrollNeeded({ itemId: 'item6', translate: 0 }))
            .toEqual(true);
        });

        it('scroll to item when mount', () => {
          const scrollTo = 'item7';
          const prop = { ...props, scrollToSelected: true, selected: scrollTo };
          const wrapper = mount(<ScrollMenu {...prop} />);
          wrapper.instance().wWidth = 500;
          wrapper.instance().menuPos = 0;
          wrapper.instance().menuWidth = 100;
          wrapper.instance().menuItems = items;
          wrapper.instance().firstPageOffset = 10;

          const { translate } = wrapper.state();
          expect(
            wrapper.instance()
              .isScrollNeeded({ itemId: scrollTo, translate }))
            .toEqual(true);
          expect(wrapper.instance().selected).toEqual(scrollTo);
          // const offsetToItem = wrapper.instance().getOffsetToItemByKey(scrollTo);
          // expect(wrapper.state().translate).toEqual(offsetToItem);
        });

        it('scroll to item when change props', () => {
          const scrollTo = 'item7';
          const prop = { ...props, scrollToSelected: true, selected: 'item1' };
          const wrapper = mount(<ScrollMenu {...prop} />);
          const getOffsetToItemByKey = jest.fn();
          getOffsetToItemByKey.mockReturnValue(35);
          wrapper.instance().getOffsetToItemByKey = getOffsetToItemByKey;
          const isScrollNeeded = jest.fn();
          isScrollNeeded.mockReturnValue(true);
          wrapper.instance().isScrollNeeded = isScrollNeeded;
          wrapper.instance().wWidth = 500;
          wrapper.instance().menuPos = 20;
          wrapper.instance().menuWidth = 100;
          wrapper.instance().menuItems = items;
          wrapper.instance().firstPageOffset = 10;

          const { translate } = wrapper.state();
          expect(
            wrapper.instance()
              .isScrollNeeded({ itemId: scrollTo, translate }))
            .toEqual(true);

          // TODO don't know why doesn't work
          // translate in state does not change
          // const offsetToItem = wrapper.instance().getOffsetToItemByKey(scrollTo);
          wrapper.setProps({ selected: scrollTo });
          expect(wrapper.instance().selected).toEqual(scrollTo);
          expect(isScrollNeeded).toHaveBeenCalled();
          expect(getOffsetToItemByKey.mock.calls.length).toEqual(1);
          // expect(wrapper.state().translate).toEqual(offsetToItem);
        });

      });

      describe('bugs', () => {
        describe('issue 40/41 left arrow click after select item - should update', () => {
          // TODO add test cases for other props and refactor
          const setup = () => {
            const prop = { ...props, scrollToSelected: false, alignCenter: false, selected: 'item3' };
            const wrapper = mount(<ScrollMenu {...prop} />);

            wrapper.instance().onItemClick('item3');
            wrapper.setState({ translate: 20 });
            wrapper.setProps({ translate: 20 });

            const props = wrapper.props();
            const state = wrapper.state();
            return ({ wrapper, props, state });
          };

          it('new translate in props and in state - update', () => {
            const { wrapper, props, state } = setup();
            const shouldUpdate = wrapper.instance().shouldComponentUpdate({ ...props, translate: 30 }, { ...state, translate: 30 });
            expect(shouldUpdate).toEqual(true);
          });
          it('new translate only in state - update', () => {
            const { wrapper, props, state } = setup();
            const shouldUpdate = wrapper.instance().shouldComponentUpdate({ ...props }, { ...state, translate: 30 });
            expect(shouldUpdate).toEqual(true);
          });
          it('new translate only in props - update', () => {
            const { wrapper, props, state } = setup();
            const shouldUpdate = wrapper.instance().shouldComponentUpdate({ ...props, translate: 30 }, { ...state });
            expect(shouldUpdate).toEqual(true);
          });
          it('same translate - do not update', () => {
            const { wrapper, props, state } = setup();
            const shouldUpdate = wrapper.instance().shouldComponentUpdate(props, state);
            expect(shouldUpdate).toEqual(false);
          });

          it('new selected prop - update', () => {
            const { wrapper, props, state } = setup();
            wrapper.instance().selected = 'new';
            const shouldUpdate = wrapper.instance().shouldComponentUpdate(props, state);
            expect(shouldUpdate).toEqual(true);
          });

        });
      });
    });

  });

  describe('resize', () => {
    it('', () => {
      const wrapper = mount(<ScrollMenu {...props} />);
      const updateWidth = jest.fn();
      const getVisibleItems = jest.fn().mockReturnValue([]);
      const getCenterOffset = jest.fn().mockReturnValue(100);
      const getOffsetToItemByIndex = jest.fn().mockReturnValue(50);
      wrapper.instance().updateWidth = updateWidth;
      wrapper.instance().getVisibleItems = getVisibleItems;
      wrapper.instance().getOffsetToItemByIndex = getOffsetToItemByIndex;
      wrapper.instance().getCenterOffset = getCenterOffset;

      expect(wrapper.state().translate).toEqual(-50);

      wrapper.instance().resize();

      jest.runAllTimers();
      expect(wrapper.state().translate).toEqual(50);
    });
  });

});
