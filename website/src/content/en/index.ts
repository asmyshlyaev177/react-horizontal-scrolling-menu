import type { SiteCopy } from '../types.ts';
import { chrome } from './chrome.ts';
import { compare } from './compare.ts';
import { comparePairs } from './compare-pairs.ts';
import { examples } from './examples.ts';
import { examplePage, examplesHub } from './examples-hub.ts';
import { home } from './home.ts';
import { manifest } from './manifest.ts';
import { useCases } from './use-cases.ts';

/** English — the source language. Every other locale mirrors this shape. */
export const en: SiteCopy = {
  chrome,
  home,
  compare,
  comparePairs,
  useCases,
  manifest,
  examples,
  examplesHub,
  examplePage,
};

export default en;
