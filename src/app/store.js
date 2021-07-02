/* eslint-disable comma-dangle */
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userReducer from '../reducers/userReducer';
import itemReducer from '../reducers/itemReducer';

const reducer = combineReducers({
  user: userReducer,
  item: itemReducer
})

export const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== 'production',
});
