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
      state.items = action.payload
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
        dispatch(actions.setItems(items))
      } else {
        const { message } = await response.json()
        dispatch(actions.setMessage({ error: { search: message } }))
      }
    } catch (err) {
      console.log('>>> getItems ERROR:', err);
      dispatch(actions.setMessage({ error: { search: err } }))
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
        dispatch(actions.setItem(item))
      } else {
        const { message } = await response.json()
        dispatch(actions.setMessage({ error: { getItem: message } }))
      }
    } catch (err) {
      console.log('>>> REGISTER ERROR:', err);
      dispatch(actions.setMessage({ error: { getItem: err } }))
    }
  }
}

export default itemSlice.reducer