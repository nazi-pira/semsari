import fetch from 'node-fetch';
import { createSlice } from '@reduxjs/toolkit';
import { BACKEND_BASE_URL } from '../config/config'
import { authHeader, parseQuery } from '../helpers/request'

import { alertActions } from './alert.reducer'

export const itemSlice = createSlice({
  name: 'item',
  initialState: {
    carouselItems: [],
    item: null,
    myItems: [],
    searchResult: []

  },
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload
    },
    setCarouselItems: (state, action) => {
      state.carouselItems = action.payload
    },
    setMyItems: (state, action) => {
      state.myItems = action.payload
    },
    setItem: (state, action) => {
      state.item = action.payload
    },
    setSearchResult: (state, action) => {
      state.searchResult = action.payload
    }
  }

});

export const { actions } = itemSlice

export const getCarouselItems = (queryParams) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${BACKEND_BASE_URL}/api/item/${parseQuery(queryParams)}`,
        {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' }
        })
      if (response.status === 200) {
        const items = await response.json()
        dispatch(actions.setCarouselItems(items))
      } else {
        const { message } = await response.json()
        dispatch(alertActions.error(message))
      }
    } catch (err) {
      dispatch(alertActions.error(err.toString()))
    }
  }
}

export const getSearchResults = (queryParams) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${BACKEND_BASE_URL}/api/item/${parseQuery(queryParams)}`,
        {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' }
        })
      if (response.status === 200) {
        const items = await response.json()
        dispatch(actions.setSearchResult(items))
      } else {
        const { message } = await response.json()
        dispatch(alertActions.error(message))
      }
    } catch (err) {
      dispatch(alertActions.error(err.toString()))
    }
  }
}

export const getMyItems = (queryParams) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${BACKEND_BASE_URL}/api/item/${parseQuery(queryParams)}`,
        {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' }
        })
      if (response.status === 200) {
        const items = await response.json()
        dispatch(actions.setMyItems(items))
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
        dispatch(alertActions.success(`${title} created!`))
      } else {
        dispatch(alertActions.error('Failed to create item!'))
      }
    } catch (err) {
      dispatch(alertActions.error('Failed to create item!'))
    }
  }
}

export default itemSlice.reducer