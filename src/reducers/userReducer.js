/* eslint-disable comma-dangle */
import fetch from 'node-fetch';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { BACKEND_BASE_URL } from '../config/config'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {},
    status: '',
    messages: {}
  },
  reducers: {
    setMessage: (state, action) => {
      state.messages = action.payload
    },
    setUser: (state, action) => {
      state.user = action.payload
    }
  },

});

export const { setMessages } = userSlice.actions

export const loginUser = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${BACKEND_BASE_URL}/api/user/login`,
        {
          method: 'POST',
          body: JSON.stringify(email, password),
          headers: { 'Content-Type': 'application/json' }
        })
      if (response.status === 200) {
        const user = await response.json()
        dispatch(userSlice.actions.setUser(user))
        dispatch(userSlice.actions.setMessage({ success: 'You are logged in.' }))
      } else {
        const { message } = await response.json()
        dispatch(userSlice.actions.setMessage({ error: message }))
      }
    } catch (err) {
      console.error('>>> error:', err);
      dispatch(userSlice.actions.setMessage({ error: 'Failed to login.' }))
    }
  }
}

export const registerUser = (name, lastname, phone, city, email, password) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${BACKEND_BASE_URL}/api/user/register`, {
        method: 'POST',
        body: JSON.stringify(name, lastname, phone, city, email, password),
        headers: { 'Content-Type': 'application/json' }
      })
      if (response.status === 203) {
        const user = await response.json()
        dispatch(userSlice.actions.setUser(user))
        dispatch(userSlice.actions.setMessage({ success: 'You are logged in.' }))
      } else {
        const { message } = await response.json()
        dispatch(userSlice.actions.setMessage({ error: message }))
      }
    } catch (err) {
      console.error('>>> error:', err);
      dispatch(userSlice.actions.setMessage({ error: 'Failed to login.' }))
    }
  }
}

export default userSlice.reducer