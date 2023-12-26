/* eslint-disable @typescript-eslint/ban-ts-comment */
import { within, userEvent, waitFor } from '@storybook/testing-library';
import type { queries } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

type Canvas = ReturnType<typeof within<typeof queries>>;

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

  async getVisibleCards() {
    const visibleCards = [
      ...this.canvas.getAllByText(
        (_content, element) =>
          !!(element as HTMLElement)?.innerText?.includes('visible: true'),
        { selector: '.card' }
      ),
    ].map((el) => el.innerText.split('\n')[0]);

    expect(visibleCards).toHaveLength(3);

    return visibleCards;
  }

  async cardHidden(card: string) {
    await waitFor(() =>
      expect(
        this.canvas.getAllByText(
          (_content, element) =>
            !!(element as HTMLElement)?.innerText?.includes(
              `${card}\nvisible: false`
            ),

          { selector: '.card' }
        )[0]
      ).toBeInTheDocument()
    );
  }

  async clickPrev() {
    await userEvent.click(this.canvas.getByTestId(this.leftArrow));
  }

  async clickNext() {
    await userEvent.click(this.canvas.getByTestId(this.rightArrow));
  }

  async arrowsVisible({ up, down }: { up: boolean; down: boolean }) {
    if (up) {
      expect(await this.canvas.getByTestId(this.leftArrow)).toBeVisible();
    } else {
      expect(await this.canvas.getByTestId(this.leftArrow)).not.toBeVisible();
    }

    if (down) {
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
