/* eslint-disable comma-dangle */
import { configureStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';

import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger';

import userReducer from '../reducers/user.reducer';
import itemReducer from '../reducers/item.reducer';

const middlewares = [thunkMiddleware]

if (process.env.NODE_ENV !== 'production') {
  middlewares.push(createLogger())
}

const rootReducer = combineReducers({
  user: userReducer,
  item: itemReducer
})

export const store = configureStore(
  {
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production', // Dev-tools disabled for production.
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middlewares),
  }
);