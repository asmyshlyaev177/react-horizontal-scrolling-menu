import * as formkit from '@formkit/auto-animate/react';
import React from 'react';
import styled from 'styled-jss';
import * as useHooks from 'usehooks-ts';

// @ts-expect-error err
import * as styles from '../dist/styles.css';
import * as Lib from '../src/index';

export const availableImports = {
  react: React,
  'react-horizontal-scrolling-menu': Lib,
  'styled-jss': styled,
  'react-horizontal-scrolling-menu/dist/styles.css': styles,
  '@formkit/auto-animate/react': formkit,
  'usehooks-ts': useHooks,
};
