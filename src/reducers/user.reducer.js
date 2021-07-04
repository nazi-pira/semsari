import { createSlice } from '@reduxjs/toolkit';
import { BACKEND_BASE_URL } from '../config/config';
import { authHeader } from '../helpers/request';

import { alertActions } from './alert.reducer'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    isAuthenticated: false
  },
  reducers: {
    setUser: (state, action) => {
      state.isAuthenticated = true
      state.user = action.payload
    },
    resetUser: (state) => {
      state.isAuthenticated = false
      state.user = null
    }
  }
});

export const userActions = userSlice.actions

export const userService = {
  login(email, password) {
    return async (dispatch) => {
      try {
        const response = await fetch(`${BACKEND_BASE_URL}/api/user/login`,
          {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' }
          })
        if (response.status === 200) {
          const { user } = await response.json()
          dispatch(userActions.setUser(user))
          sessionStorage.setItem('user', JSON.stringify(user))
          dispatch(alertActions.success('You are signed in!'));
        } else {
          const { message } = await response.json()
          dispatch(alertActions.error(message))
          dispatch(userService.logout())
        }
      } catch (err) {
        console.log('loginUser ERROR:', err.toString());
        dispatch(userService.logout())
        dispatch(alertActions.error(err.toString()))
      }
    }
  },

  register({ name, lastname, phone, city, email, password }) {
    return async (dispatch) => {
      try {
        const response = await fetch(`${BACKEND_BASE_URL}/api/user/register`, {
          method: 'POST',
          body: JSON.stringify({ name, lastname, phone, city, email, password }),
          headers: { 'Content-Type': 'application/json' }
        })
        const json = await response.json()

        if (response.ok) {
          sessionStorage.setItem('user', JSON.stringify(json.user))
          dispatch(userActions.setUser(json.user))
          dispatch(alertActions.success('Succesfully registered!'))
        } else {
          dispatch(alertActions.error(json.message))
        }
      } catch (err) {
        dispatch(alertActions.error(err.toString()))
      }
    }
  },

  authenticate() {
    const session = JSON.parse(sessionStorage.getItem('user'));

    if (session?.token) {
      return async (dispatch) => {
        try {
          const response = await fetch(`${BACKEND_BASE_URL}/api/user/auth`,
            {
              method: 'GET',
              headers: authHeader()
            })
          if (response.status === 200) {
            const json = await response.json()
            sessionStorage.setItem('user', JSON.stringify(json.user))
            dispatch(userActions.setUser(json.user))
          }
          if (response.status === 401) {
            dispatch(userActions.resetUser())
          }
        } catch (err) {
          dispatch(alertActions.error(err.toString()))
        }
      }
    } else {
      // Not authenticated so logout user
      return async () => {
        userService.logout()
      }
    }
  },
  logout() {
    return async (dispatch) => {
      dispatch(userActions.resetUser())
      sessionStorage.clear()
    }
  }
}

export default userSlice.reducer