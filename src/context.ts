import React from 'react';

import { type publicApiType } from './createApi';

export const VisibilityContext = React.createContext<publicApiType>(
  {} as publicApiType
);
