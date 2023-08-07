import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './reducers';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});

/*REDUX
import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { rootReducer } from './reducers';

const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);*/
