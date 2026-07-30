import type { queries } from 'storybook/test';
import { expect, fireEvent, userEvent, waitFor, within } from 'storybook/test';

export type Canvas = ReturnType<typeof within<typeof queries>>;
type HorArrows = { left: boolean; right: boolean };
type VerArrows = { up: boolean; down: boolean };

/**
 * Scrolling is animated (500ms by default) and item visibility is reported by
 * an IntersectionObserver, so nothing about the menu is true at the moment a
 * click returns. Every assertion below therefore polls the live DOM through
 * `waitFor` until it settles, rather than sleeping for a fixed interval and
 * hoping. Generous, because it is an upper bound that is almost never reached —
 * a passing assertion returns as soon as it holds.
 */
const settleTimeout = 5000;

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

  /** Resolves once the IntersectionObserver has classified the items. */
  async isReady() {
    await waitFor(
      () =>
        expect(
          this.canvas.getAllByText('visible: false')[0],
        ).toBeInTheDocument(),
      { timeout: settleTimeout },
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

  async getSelectedCards() {
    return (await this.getCards('selected: true')) || [];
  }

  async getSelectedCardsKeys() {
    const nodes = await this.getSelectedCards();
    return nodes.map((el) => el.innerText.split('\n')[0]);
  }

  /** Waits until exactly these cards, in order, report themselves visible. */
  async expectVisibleCards(keys: string[]) {
    await waitFor(
      async () => {
        const nodes = await this.getVisibleCards();
        expect(nodes.map((el) => el.innerText.split('\n')[0])).toEqual(keys);
      },
      { timeout: settleTimeout },
    );
  }

  async cardHidden(card: string) {
    // The query has to live inside the callback: re-running it is the whole
    // point, and the previous version resolved it once up front and then polled
    // that stale snapshot.
    await waitFor(
      async () => {
        const hiddenCards = await this.getCards(`${card}\nvisible: false`);
        expect(hiddenCards[0]).toBeInTheDocument();
      },
      { timeout: settleTimeout },
    );
  }

  async clickPrev() {
    await userEvent.click(this.canvas.getByTestId(this.leftArrow));
  }

  async clickNext() {
    await userEvent.click(this.canvas.getByTestId(this.rightArrow));
  }

  async arrowsVisible(arrows: HorArrows | VerArrows) {
    let firstArrow: HorArrows['left'] | VerArrows['up'];
    let secondArrow: HorArrows['right'] | VerArrows['down'];
    if ('up' in arrows) {
      firstArrow = arrows.up;
      secondArrow = arrows.down;
    } else {
      firstArrow = arrows.left;
      secondArrow = arrows.right;
    }

    await waitFor(
      () => {
        const first = this.canvas.getByTestId(this.leftArrow);
        const second = this.canvas.getByTestId(this.rightArrow);

        if (firstArrow) {
          expect(first).toBeVisible();
        } else {
          expect(first).not.toBeVisible();
        }

        if (secondArrow) {
          expect(second).toBeVisible();
        } else {
          expect(second).not.toBeVisible();
        }
      },
      { timeout: settleTimeout },
    );
  }
}

export const leftArrowSelector = 'left-arrow';
export const rightArrowSelector = 'right-arrow';
export const upArrowSelector = 'up-arrow';
export const downArrowSelector = 'down-arrow';

export const scrollSmokeTest = async (testObj: TestObj) => {
  await testObj.arrowsVisible({ up: false, down: true });
  await testObj.expectVisibleCards(['test0', 'test1', 'test2']);

  await testObj.clickNext();
  await testObj.cardHidden('test0');
  await testObj.arrowsVisible({ up: true, down: true });
  await testObj.expectVisibleCards(['test3', 'test4', 'test5']);

  await testObj.clickNext();
  await testObj.cardHidden('test5');
  await testObj.arrowsVisible({ up: true, down: true });
  await testObj.expectVisibleCards(['test6', 'test7', 'test8']);

  await testObj.clickNext();
  await testObj.cardHidden('test6');
  await testObj.arrowsVisible({ up: true, down: false });
  await testObj.expectVisibleCards(['test7', 'test8', 'test9']);

  await testObj.clickPrev();
  await testObj.cardHidden('test7');
  await testObj.arrowsVisible({ up: true, down: true });
  await testObj.expectVisibleCards(['test4', 'test5', 'test6']);

  await testObj.clickPrev();
  await testObj.cardHidden('test4');
  await testObj.arrowsVisible({ up: true, down: true });
  await testObj.expectVisibleCards(['test1', 'test2', 'test3']);

  await testObj.clickPrev();
  await testObj.cardHidden('test3');
  await testObj.arrowsVisible({ up: false, down: true });
  await testObj.expectVisibleCards(['test0', 'test1', 'test2']);
};

export const ScrollTest = ({
  leftArrow = leftArrowSelector,
  rightArrow = rightArrowSelector,
} = {}) => ({
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const testObj = new TestObj(canvas, { leftArrow, rightArrow });
    await testObj.isReady();

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
