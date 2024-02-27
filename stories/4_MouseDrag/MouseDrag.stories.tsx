/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import type { Meta } from '@storybook/react';
import { createLiveEditStory } from 'storybook-addon-code-editor';
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { within, fireEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import { setupEditor } from '../setupEditor';
import { availableImports } from '../availableImports';
import { ScrollMenu } from '../../src/index';
import { ScrollTest, TestObj } from '../test';
import { SizeWrapper } from '../SizeWrapper';

// @ts-ignore
import ExampleRaw from './MouseDrag.source.tsx?raw';
import Example from './MouseDrag.source';

const meta: Meta<typeof ScrollMenu> = {
  title: 'Examples/MouseDrag',
  component: Example,
  decorators: [
    (Story) => (
      <SizeWrapper>
        <Story />
      </SizeWrapper>
    ),
  ],
};

export default meta;

export const MouseDrag = createLiveEditStory({
  code: ExampleRaw,
  availableImports,
  modifyEditor: setupEditor,
});

export const Test = ScrollTest();

export const TestDrag = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const testObj = new TestObj(canvas, { leftArrow: '', rightArrow: '' });
    await testObj.wait();

    const lastCard = (await testObj.getVisibleCards()).slice(-1)[0];
    expect(await testObj.getSelectedCardsKeys()).toHaveLength(0);
    await lastCard.click();
    expect(await testObj.getSelectedCards()).toHaveLength(1);

    await drag(lastCard, { delta: { x: -350, y: 0 } });
    await testObj.wait();

    expect(await testObj.getVisibleCardsKeys()).toEqual([
      'test2',
      'test3',
      'test4',
    ]);
  },
};

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

function getElementClientCenter(element: HTMLElement) {
  const { left, top, width, height } = element.getBoundingClientRect();
  return {
    x: left + width / 2,
    y: top + height / 2,
  };
}

const getCoords = (charlie: HTMLElement) =>
  isElement(charlie) ? getElementClientCenter(charlie) : { x: 0, y: 0 };

const sleep = (ms: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

async function drag(
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
