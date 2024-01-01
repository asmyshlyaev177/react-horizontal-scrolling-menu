/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import type { Meta } from '@storybook/react';
import { createLiveEditStory } from 'storybook-addon-code-editor';
import styled from 'styled-jss';
/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
  within,
  fireEvent,
  userEvent,
  waitFor,
} from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import { setupEditor } from '../setupEditor';
import { ScrollMenu } from '../../src/index';
import * as Lib from '../../src/index';
import { ScrollTest, TestObj } from '../test';
import { SizeWrapper } from '../SizeWrapper';

// @ts-ignore
import ExampleRaw from './MouseDrag.source.tsx?raw';
import Example from './MouseDrag.source';

const meta: Meta<typeof ScrollMenu> = {
  title: 'ScrollMenu/MouseDrag',
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
  availableImports: {
    react: React,
    'react-horizontal-scrolling-menu': Lib,
    'styled-jss': styled,
  },
  modifyEditor: setupEditor,
});

export const Test = ScrollTest();

export const TestDrag = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const testObj = new TestObj(canvas, { leftArrow: '', rightArrow: '' });
    await testObj.wait();

    const lastCard = (await testObj.getCards()).slice(-1)[0];

    await drag(lastCard, { delta: { x: -530, y: 0 } });
    await testObj.wait();

    expect(await testObj.getVisibleCards()).toEqual([
      'test3',
      'test4',
      'test5',
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
  }
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
