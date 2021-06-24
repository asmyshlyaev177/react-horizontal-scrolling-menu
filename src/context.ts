import React from 'react';

import createApi from './createApi';

export type VisibilityContextTypes = ReturnType<typeof createApi>;

export const VisibilityContext = React.createContext<VisibilityContextTypes>(
    {} as VisibilityContextTypes
);
