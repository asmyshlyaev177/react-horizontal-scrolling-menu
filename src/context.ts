import React from 'react';

import createApi from './createApi';

type VisibilityContextTypes = ReturnType<typeof createApi>;

export const VisibilityContext = React.createContext<VisibilityContextTypes>(
    {} as VisibilityContextTypes
);
