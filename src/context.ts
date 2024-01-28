import React from 'react';

import { publicApiType } from './createApi';

export const VisibilityContext = React.createContext<publicApiType>(
  {} as publicApiType
);
