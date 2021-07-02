/* eslint-disable comma-dangle */
import fetch from 'node-fetch';
import { createSlice } from '@reduxjs/toolkit';
import { BACKEND_BASE_URL } from '../config/config'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {},
    status: '',
    messages: {
      error: {},
      success: {}
    },
    isLoggedIn: false
  },
  reducers: {
    setErrorMessage: (state, action) => {
      state.messages.error = action.payload
    },
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload
    },
    setMessage: (state, action) => {
      state.messages = action.payload
    },
    setSuccessMessage: (state, action) => {
      state.messages.success = action.payload
    },
    setUser: (state, action) => {
      state.isLoggedIn = true
      state.user = action.payload
    }
  },

});

export const { actions } = userSlice

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
        const { user } = await response.json()
        dispatch(actions.setUser(user))
        dispatch(actions.setIsLoggedIn(true))
        window.sessionStorage.setItem('token', user.token)
        dispatch(actions.setMessage({ success: { login: 'You are logged in!' } }))
      } else {
        const { message } = await response.json()
        dispatch(actions.setMessage({ error: { login: message } }))
      }
    } catch (err) {
      console.log('>>> LOGIN ERROR:', err);
      dispatch(actions.setMessage({ error: { login: 'Failed to login.' } }))
    }
  }
}

export const registerUser = (name, lastname, phone, city, email, password) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${BACKEND_BASE_URL}/api/user/register`, {
        method: 'POST',
        body: JSON.stringify({ name, lastname, phone, city, email, password }),
        headers: { 'Content-Type': 'application/json' }
      })
      if (response.status === 203) {
        const user = await response.json()
        dispatch(actions.setUser(user))
        dispatch(actions.setMessage({ success: { register: 'Succesfully registered!' } }))
      } else {
        const { message } = await response.json()
        dispatch(actions.setMessage({ error: { register: message } }))
      }
    } catch (err) {
      console.log('>>> REGISTER ERROR:', err);
      dispatch(actions.setMessage({ error: { register: 'Failed to register' } }))
    }
  }
}

export const logoutUser = () => {
  return async (dispatch) => {
    dispatch(actions.setUser(null))
    dispatch(actions.setIsLoggedIn(false))
    window.sessionStorage.clear()
  }
}
export default userSlice.reducer