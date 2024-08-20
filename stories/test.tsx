/* eslint-disable @typescript-eslint/ban-ts-comment */
import { expect } from '@storybook/jest';
import {
  within,
  userEvent,
  waitFor,
  fireEvent,
} from '@storybook/testing-library';

import type { queries } from '@storybook/testing-library';

export type Canvas = ReturnType<typeof within<typeof queries>>;
type HorArrows = { left: boolean; right: boolean };
type VerArrows = { up: boolean; down: boolean };
export class TestObj {
  canvas: Canvas;
  leftArrow: string;
  rightArrow: string;

  constructor(
    canvas: Canvas,
    { leftArrow, rightArrow }: { leftArrow: string; rightArrow: string },
  ) {
    this.canvas = canvas;
    this.leftArrow = leftArrow;
    this.rightArrow = rightArrow;
  }

  async isReady() {
    await waitFor(() =>
      expect(this.canvas.getAllByText('visible: false')[0]).toBeInTheDocument(),
    );
  }

  async getCards(text = '') {
    const elems = await this.canvas.queryAllByText(
      (_content, element) =>
        !!(element as HTMLElement)?.innerText?.includes(text),
      { selector: '.card' },
    );

    return [...(elems || [])];
  }

  async getVisibleCards() {
    return (await this.getCards('visible: true')) || [];
  }

  async getVisibleCardsKeys(length = 3) {
    const nodes = await this.getVisibleCards();
    const keys = nodes.map((el) => el.innerText.split('\n')[0]);

    expect(keys).toHaveLength(length);

    return keys;
  }

  async getSelectedCards() {
    return (await this.getCards('selected: true')) || [];
  }

  async getSelectedCardsKeys() {
    const nodes = await this.getSelectedCards();
    return nodes.map((el) => el.innerText.split('\n')[0]);
  }

  async cardHidden(card: string) {
    const hiddenCards = await this.getCards(`${card}\nvisible: false`);

    await waitFor(() => expect(hiddenCards[0]).toBeInTheDocument());
  }

  async wait(timeout = 800) {
    await new Promise((res) => setTimeout(() => res(true), timeout));
  }

  async clickPrev() {
    await userEvent.click(this.canvas.getByTestId(this.leftArrow));
    await this.wait();
  }

  async clickNext() {
    await userEvent.click(this.canvas.getByTestId(this.rightArrow));
    await this.wait();
  }

  async arrowsVisible(arrows: HorArrows | VerArrows) {
    let firstArrow, secondArrow;
    if ('up' in arrows) {
      firstArrow = arrows.up;
      secondArrow = arrows.down;
    } else {
      firstArrow = arrows.left;
      secondArrow = arrows.right;
    }

    if (firstArrow) {
      expect(await this.canvas.getByTestId(this.leftArrow)).toBeVisible();
    } else {
      expect(await this.canvas.getByTestId(this.leftArrow)).not.toBeVisible();
    }

    if (secondArrow) {
      expect(await this.canvas.getByTestId(this.rightArrow)).toBeVisible();
    } else {
      expect(await this.canvas.getByTestId(this.rightArrow)).not.toBeVisible();
    }
  }
}

export const leftArrowSelector = 'left-arrow';
export const rightArrowSelector = 'right-arrow';
export const upArrowSelector = 'up-arrow';
export const downArrowSelector = 'down-arrow';

export const scrollSmokeTest = async (testObj: TestObj) => {
  await testObj.arrowsVisible({ up: false, down: true });
  expect(await testObj.getVisibleCardsKeys()).toEqual([
    'test0',
    'test1',
    'test2',
  ]);

  await testObj.clickNext();
  await testObj.cardHidden('test0');
  await testObj.arrowsVisible({ up: true, down: true });
  expect(await testObj.getVisibleCardsKeys()).toEqual([
    'test3',
    'test4',
    'test5',
  ]);

  await testObj.clickNext();
  await testObj.cardHidden('test5');
  await testObj.arrowsVisible({ up: true, down: true });
  expect(await testObj.getVisibleCardsKeys()).toEqual([
    'test6',
    'test7',
    'test8',
  ]);

  await testObj.clickNext();
  await testObj.cardHidden('test6');
  await testObj.arrowsVisible({ up: true, down: false });
  expect(await testObj.getVisibleCardsKeys()).toEqual([
    'test7',
    'test8',
    'test9',
  ]);

  await testObj.clickPrev();
  await testObj.cardHidden('test7');
  await testObj.arrowsVisible({ up: true, down: true });
  expect(await testObj.getVisibleCardsKeys()).toEqual([
    'test4',
    'test5',
    'test6',
  ]);

  await testObj.clickPrev();
  await testObj.cardHidden('test4');
  await testObj.arrowsVisible({ up: true, down: true });
  expect(await testObj.getVisibleCardsKeys()).toEqual([
    'test1',
    'test2',
    'test3',
  ]);

  await testObj.clickPrev();
  await testObj.cardHidden('test3');
  await testObj.arrowsVisible({ up: false, down: true });
  expect(await testObj.getVisibleCardsKeys()).toEqual([
    'test0',
    'test1',
    'test2',
  ]);
};

export const ScrollTest = ({
  leftArrow = leftArrowSelector,
  rightArrow = rightArrowSelector,
} = {}) => ({
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const testObj = new TestObj(canvas, { leftArrow, rightArrow });
    await testObj.isReady();
    await testObj.wait();

    await scrollSmokeTest(testObj);
  },
});

export async function drag(
  element: HTMLElement,
  {
    to: inTo = undefined,
    delta = undefined,
    steps = 20,
    duration = 300,
  }: {
    to?: undefined | { x: number; y: number };
    delta?: undefined | { x: number; y: number };
    steps?: number;
    duration?: number;
  },
) {
  const from = getElementClientCenter(element);
  const to = delta
    ? {
        x: from.x + delta.x,
        y: from.y + delta.y,
      }
    : getCoords(inTo as unknown as HTMLElement);

  const step = {
    x: (to.x - from.x) / steps,
    y: (to.y - from.y) / steps,
  };

  const current = {
    clientX: from.x,
    clientY: from.y,
  };

  fireEvent.mouseEnter(element, current);
  fireEvent.mouseOver(element, current);
  fireEvent.mouseMove(element, current);
  fireEvent.mouseDown(element, current);
  for (let i = 0; i < steps; i++) {
    current.clientX += step.x;
    current.clientY += step.y;
    await sleep(duration / steps);
    fireEvent.mouseMove(element, current);
  }
  fireEvent.mouseUp(element, current);
}

function getElementClientCenter(element: HTMLElement) {
  const { left, top, width, height } = element.getBoundingClientRect();
  return {
    x: left + width / 2,
    y: top + height / 2,
  };
}

const getCoords = (charlie: HTMLElement) =>
  isElement(charlie) ? getElementClientCenter(charlie) : { x: 0, y: 0 };

function isElement(obj: unknown) {
  if (typeof obj !== 'object') {
    return false;
  }
  let prototypeStr, prototype;
  do {
    prototype = Object.getPrototypeOf(obj);
    // to work in iframe
    prototypeStr = Object.prototype.toString.call(prototype);
    // '[object Document]' is used to detect document
    if (
      prototypeStr === '[object Element]' ||
      prototypeStr === '[object Document]'
    ) {
      return true;
    }
    obj = prototype;
    // null is the terminal of object
  } while (prototype !== null);
  return false;
}

const sleep = (ms: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
