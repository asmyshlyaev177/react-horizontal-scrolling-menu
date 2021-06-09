import React from 'react';

import createApi from './createApi';

type context = ReturnType<typeof createApi>;

export const VisibilityContext = React.createContext<context>({} as context);
