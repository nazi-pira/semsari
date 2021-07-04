/* eslint-disable comma-dangle */
import { configureStore, combineReducers } from '@reduxjs/toolkit';

import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger';

import user from '../reducers/user.reducer';
import item from '../reducers/item.reducer';
import { alert } from '../reducers/alert.reducer';

const middlewares = [thunkMiddleware]

if (process.env.NODE_ENV !== 'production') {
  middlewares.push(createLogger())
}

const rootReducer = combineReducers({
  user,
  item,
  alert
})

export const store = configureStore(
  {
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production', // Dev-tools disabled for production.
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middlewares),
  }
);