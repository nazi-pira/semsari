import { createSlice } from '@reduxjs/toolkit';
import { BACKEND_BASE_URL } from '../config/config';
import { authHeader } from '../helpers/request';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    status: '',
    messages: {
      error: {},
      success: {}
    },
    isLoggedIn: false
  },
  reducers: {
    setMessage: (state, action) => {
      state.messages = action.payload
    },
    setUser: (state, action) => {
      state.isLoggedIn = true
      state.user = action.payload
    },
    resetUser: (state) => {
      state.isLoggedIn = false
      state.user = null
    }
  }
});

const { setMessage, setUser, resetUser } = userSlice.actions

export const userService = {
  login(email, password) {
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
          dispatch(setUser(user))
          window.sessionStorage.setItem('user', JSON.stringify(user))
          dispatch(setMessage({ success: { login: 'You are logged in!' } }))
        } else {
          const { message } = await response.json()
          dispatch(setMessage({ error: { login: message } }))
        }
      } catch (err) {
        console.log('loginUser ERROR:', err.toString());
        dispatch(setMessage({ error: { login: err.toString() } }))
      }
    }
  },

  register(name, lastname, phone, city, email, password) {
    return async (dispatch) => {
      try {
        const response = await fetch(`${BACKEND_BASE_URL}/api/user/register`, {
          method: 'POST',
          body: JSON.stringify({ name, lastname, phone, city, email, password }),
          headers: { 'Content-Type': 'application/json' }
        })
        if (response.status === 203) {
          const user = await response.json()
          window.sessionStorage.setItem('user', JSON.stringify(user))
          dispatch(setUser(user))
          dispatch(setMessage({ success: { register: 'Succesfully registered!' } }))
        } else {
          const { message } = await response.json()
          dispatch(setMessage({ error: { register: message } }))
        }
      } catch (err) {
        console.log('registerUser ERROR:', err.toString());
        dispatch(setMessage({ error: { register: err.toString() } }))
      }
    }
  },

  auth() {
    return async (dispatch) => {
      try {
        const response = await fetch(`${BACKEND_BASE_URL}/api/user/current`,
          {
            method: 'GET',
            headers: authHeader()
          })
        if (response.status === 200) {
          const { user } = await response.json()
          // Success
          window.sessionStorage.setItem('user', JSON.stringify(user))
          dispatch(setUser(user))
          dispatch(setMessage({ success: { auth: 'Authenticated.' } }))
        }
        if (response.status === 401) {
          dispatch(resetUser())
          dispatch(setMessage({ error: { auth: 'User not authenticated!' } }))
          // redirect to login
        }
      } catch (err) {
        console.log('authUser - ERROR:', err.toString())
        dispatch(setMessage({ error: { auth: err.toString() } }))
        console.log('dada');
      }
    }
  },
  logout() {
    return async (dispatch) => {
      dispatch(resetUser())
      window.sessionStorage.clear()
    }
  }
}

export default userSlice.reducer