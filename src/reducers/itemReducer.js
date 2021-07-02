/* eslint-disable comma-dangle */
import fetch from 'node-fetch';
import { createSlice } from '@reduxjs/toolkit';
import { BACKEND_BASE_URL } from '../config/config'

export const itemSlice = createSlice({
  name: 'item',
  initialState: {
    status: '',
    items: [],
    item: null,
    messages: {
      error: {},
      success: {}
    },
  },
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload
    },
    setItem: (state, action) => {
      state.item = action.payload
    },
    setMessage: (state, action) => {
      state.messages = action.payload
    },
  },

});

export const { actions } = itemSlice

const addSearchQuery = (params) => {
  const uri = new URL('http://www')
  Object.keys(params).forEach((key) => {
    uri.searchParams.set(key, params[key]);
  })
  return uri.search
}

export const getItemsByQuery = (queryParams) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${BACKEND_BASE_URL}/api/item/${addSearchQuery(queryParams)}`,
        {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' }
        })
      if (response.status === 200) {
        const items = await response.json()
        console.log(">>items", items);
        dispatch(actions.setItems(items))
      } else {
        const { message } = await response.json()
        dispatch(actions.setMessage({ error: { search: message } }))
      }
    } catch (err) {
      console.log('>>> getItemsByQuery ERROR:', err);
      // dispatch(actions.setMessage({ error: { search: err } }))
    }
  }
}

export const getItemById = (itemId) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${BACKEND_BASE_URL}/api/item/${itemId}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      })
      if (response.status === 200) {
        const item = await response.json()
        console.log(item);
        dispatch(actions.setItem(item))
      } else {
        const { message } = await response.json()
        dispatch(actions.setMessage({ error: { getItem: message } }))
      }
    } catch (err) {
      console.log('>>> getItemById ERROR:', err);
      dispatch(actions.setMessage({ error: { getItem: err } }))
    }
  }
}

export const createItem = ({ title, description, price, user }) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${BACKEND_BASE_URL}/api/item`, {
        method: 'POST',
        body: JSON.stringify({ title, description, price }),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${user.token}`
        }
      })
      if (response.status === 201) {
        const newItem = await response.json()
        dispatch(actions.setItem(newItem))
      } else {
        const { message } = await response.json()
        dispatch(actions.setMessage({ error: { getItem: message } }))
      }
    } catch (err) {
      console.log('>>> createItem ERROR:', err);
      dispatch(actions.setMessage({ error: { getItem: err } }))
    }
  }
}

export default itemSlice.reducer