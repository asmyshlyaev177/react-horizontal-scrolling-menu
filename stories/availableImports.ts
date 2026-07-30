import styled from '@emotion/styled';
import * as formkit from '@formkit/auto-animate/react';
import React from 'react';
import * as useHooks from 'usehooks-ts';

// @ts-expect-error err
import * as styles from '../dist/styles.css';
import * as Lib from '../src/index';

// The addon types each entry as `Record<string, unknown>`, but a module's default
// export can be callable — `@emotion/styled` is a function — so widen it here.
export const availableImports = {
  react: React,
  'react-horizontal-scrolling-menu': Lib,
  '@emotion/styled': styled,
  'react-horizontal-scrolling-menu/dist/styles.css': styles,
  '@formkit/auto-animate/react': formkit,
  'usehooks-ts': useHooks,
} as unknown as Record<string, Record<string, unknown>>;
