import {createAction, createReducer} from '@reduxjs/toolkit'
import {SET_FAVORITE, REMOVE_FAVORITE} from '../../constant/storeTypes'

export const setFavoriteAction = createAction(SET_FAVORITE)
export const removeFavoriteAction = createAction(REMOVE_FAVORITE)

const initialState = {
  favorite: []
}

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setFavoriteAction, (state, action) => {
      state.favorite = [...state.favorite, action.payload]
    })
    .addCase(removeFavoriteAction, (state, action) => {
      state.favorite = state.favorite.filter(item => item.id !== action.payload)
    })
})
