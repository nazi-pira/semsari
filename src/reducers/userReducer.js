import { createSlice } from '@reduxjs/toolkit';
import { BACKEND_BASE_URL } from '../config/config'

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

export const { setMessage, setUser, resetUser } = userSlice.actions

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
        dispatch(setUser(user))
        window.sessionStorage.setItem('token', user.token)
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
        window.sessionStorage.setItem('token', user.token)
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
}

export const authUser = () => {
  return async (dispatch) => {
    const token = window.sessionStorage.getItem('token')
    if (!token) {
      // redirect to login
    }

    try {
      const response = await fetch(`${BACKEND_BASE_URL}/api/user/current`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Token ${token}`
          }
        })
      if (response.status === 200) {
        const { user } = await response.json()
        // Success
        window.sessionStorage.setItem('token', user.token)
        dispatch(setUser(user))
        dispatch(setMessage({ success: { auth: 'Authenticated.' } }))
      }
      if (response.status === 401) {
        dispatch(resetUser())
        dispatch(setMessage({ error: { auth: 'User not authenticated!' } }))
        // redirect to login
      }
    } catch (err) {
      console.log("authUser - ERROR:", err.toString())
      dispatch(setMessage({ error: { auth: err.toString() } }))
      console.log('dada');
    }
  }
}


export const logoutUser = () => {
  return async (dispatch) => {
    dispatch(resetUser())
    window.sessionStorage.clear()
  }
}
export default userSlice.reducer