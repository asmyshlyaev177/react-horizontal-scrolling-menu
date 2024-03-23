import React from 'react';
import styled from 'styled-jss';

import * as Lib from '../src/index';
// @ts-expect-error err
import * as styles from '../dist/styles.css';
import * as formkit from '@formkit/auto-animate/react';

export const availableImports = {
  react: React,
  'react-horizontal-scrolling-menu': Lib,
  'styled-jss': styled,
  'react-horizontal-scrolling-menu/dist/styles.css': styles,
  '@formkit/auto-animate/react': formkit,
};
