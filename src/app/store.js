/* eslint-disable comma-dangle */
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import userReducer from '../reducers/userReducer';

const reducer = combineReducers({
  user: userReducer,
  counter: counterReducer
})

export const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== 'production',
});
