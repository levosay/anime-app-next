import {REMOVE_FAVORITE, SET_FAVORITE} from '../../constant/storeTypes'

const initFavoriteState = []

export const favoriteReducer = (state = initFavoriteState, action) => {
  switch (action.type) {
    case SET_FAVORITE:
      return [...state, action.payload]
    case REMOVE_FAVORITE:
      return state.filter(item => item.id !== action.payload)
    default:
      return state
  }
}
