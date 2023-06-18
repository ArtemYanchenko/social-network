import React from 'react';
import {store} from './bll/redux-store';

export const StoreContext = React.createContext(store)