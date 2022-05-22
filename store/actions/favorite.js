import {REMOVE_FAVORITE, SET_FAVORITE} from '../../constant/storeTypes'

export const setFavorite = (state) => {
  return {type: SET_FAVORITE, payload: state}
}

export const removeFavorite = (state) => {
  return {type: REMOVE_FAVORITE, payload: state}
}
