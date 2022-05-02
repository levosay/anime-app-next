export const setFavorite = (state) => {
  return {type: 'SET_FAVORITE', payload: state}
}

export const removeFavorite = (state) => {
  return {type: 'REMOVE_FAVORITE', payload: state}
}
