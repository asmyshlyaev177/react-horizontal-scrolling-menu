/* eslint-disable @typescript-eslint/ban-ts-comment */
import { within, userEvent, waitFor } from '@storybook/testing-library';
import type { queries } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

type Canvas = ReturnType<typeof within<typeof queries>>;
type HorArrows = { left: boolean; right: boolean };
type VerArrows = { up: boolean; down: boolean };
export class TestObj {
  canvas: Canvas;
  leftArrow: string;
  rightArrow: string;

  constructor(canvas: Canvas, { leftArrow, rightArrow }) {
    this.canvas = canvas;
    this.leftArrow = leftArrow;
    this.rightArrow = rightArrow;
  }

  async isReady() {
    await waitFor(() =>
      expect(this.canvas.getAllByText('visible: false')[0]).toBeInTheDocument()
    );
  }

  async getCards(text = '') {
    const elems = await this.canvas.getAllByText(
      (_content, element) =>
        !!(element as HTMLElement)?.innerText?.includes(text),
      { selector: '.card' }
    );

    return [...elems];
  }

  async getVisibleCards(length = 3) {
    const cards = await this.getCards('visible: true');
    const visibleCards = cards.map((el) => el.innerText.split('\n')[0]);

    expect(visibleCards).toHaveLength(length);

    return visibleCards;
  }

  async cardHidden(card: string) {
    const hiddenCards = await this.getCards(`${card}\nvisible: false`);

    await waitFor(() => expect(hiddenCards[0]).toBeInTheDocument());
  }

  async wait(timeout = 700) {
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

export const ScrollTest = ({
  leftArrow = leftArrowSelector,
  rightArrow = rightArrowSelector,
} = {}) => ({
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const testObj = new TestObj(canvas, { leftArrow, rightArrow });
    await testObj.isReady();

    await testObj.arrowsVisible({ up: false, down: true });
    expect(await testObj.getVisibleCards()).toEqual([
      'test0',
      'test1',
      'test2',
    ]);

    await testObj.clickNext();
    await testObj.cardHidden('test0');
    await testObj.arrowsVisible({ up: true, down: true });
    expect(await testObj.getVisibleCards()).toEqual([
      'test3',
      'test4',
      'test5',
    ]);

    await testObj.clickNext();
    await testObj.cardHidden('test5');
    await testObj.arrowsVisible({ up: true, down: true });
    expect(await testObj.getVisibleCards()).toEqual([
      'test6',
      'test7',
      'test8',
    ]);

    await testObj.clickNext();
    await testObj.cardHidden('test6');
    await testObj.arrowsVisible({ up: true, down: false });
    expect(await testObj.getVisibleCards()).toEqual([
      'test7',
      'test8',
      'test9',
    ]);

    await testObj.clickPrev();
    await testObj.cardHidden('test7');
    await testObj.arrowsVisible({ up: true, down: true });
    expect(await testObj.getVisibleCards()).toEqual([
      'test4',
      'test5',
      'test6',
    ]);

    await testObj.clickPrev();
    await testObj.cardHidden('test4');
    await testObj.arrowsVisible({ up: true, down: true });
    expect(await testObj.getVisibleCards()).toEqual([
      'test1',
      'test2',
      'test3',
    ]);

    await testObj.clickPrev();
    await testObj.cardHidden('test3');
    await testObj.arrowsVisible({ up: false, down: true });
    expect(await testObj.getVisibleCards()).toEqual([
      'test0',
      'test1',
      'test2',
    ]);
  },
});
