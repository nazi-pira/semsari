import fetch from 'node-fetch';
import { createSlice } from '@reduxjs/toolkit';
import { BACKEND_BASE_URL } from '../config/config'
import { authHeader, parseQuery } from '../helpers/request'

import { alertActions } from './alert.reducer'

export const itemSlice = createSlice({
  name: 'item',
  initialState: {
    items: [],
    item: null
  },
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload
    },
    setItem: (state, action) => {
      state.item = action.payload
    }
  }

});

export const { actions } = itemSlice

export const getItemsByQuery = (queryParams) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${BACKEND_BASE_URL}/api/item/${parseQuery(queryParams)}`,
        {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' }
        })
      if (response.status === 200) {
        const items = await response.json()
        dispatch(actions.setItems(items))
      } else {
        const { message } = await response.json()
        dispatch(alertActions.error(message))
      }
    } catch (err) {
      dispatch(alertActions.error(err.toString()))
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
      if (response.ok) {
        const item = await response.json()
        dispatch(actions.setItem(item))
      } else {
        dispatch(alertActions.error('Failed to get item!'))
      }
    } catch (err) {
      dispatch(alertActions.error('Failed to get item!'))
    }
  }
}

export const createItem = ({ title, description, price }) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${BACKEND_BASE_URL}/api/item`, {
        method: 'POST',
        body: JSON.stringify({ title, description, price }),
        headers: authHeader()
      })
      if (response.ok) {
        const newItem = await response.json()
        dispatch(actions.setItem(newItem))
      } else {
        dispatch(alertActions.error('Failed to create item!'))
      }
    } catch (err) {
      dispatch(alertActions.error('Failed to create item!'))
    }
  }
}

export default itemSlice.reducer