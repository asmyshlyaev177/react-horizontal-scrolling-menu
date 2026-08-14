import type { SiteCopy } from '../types.ts';
import { chrome } from './chrome.ts';
import { compare } from './compare.ts';
import { examples } from './examples.ts';
import { examplePage, examplesHub } from './examples-hub.ts';
import { home } from './home.ts';
import { manifest } from './manifest.ts';

/** English — the source language. Every other locale mirrors this shape. */
export const en: SiteCopy = {
  chrome,
  home,
  compare,
  manifest,
  examples,
  examplesHub,
  examplePage,
};

export default en;
