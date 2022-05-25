import {useDispatch, useSelector} from 'react-redux'

import {removeFavoriteAction, setFavoriteAction} from 'store/favorite'
import Button from 'ui/components/Button/Button'

const ButtonFavorite = ({id, src, title}) => {
  const dispatch = useDispatch()
  const favoriteList = useSelector(state => state.favorite)

  const isFavorite = (id) => {
    return favoriteList.some(item => item.id === id)
  }

  const addFavorite = ({event, id, src, title}) => {
    event.stopPropagation()
    dispatch(setFavoriteAction({
      id: id,
      attributes: {
        canonicalTitle: title,
        posterImage: {
          large: src,
        }
      },
    }))
  }

  const remFavorite = (event, id) => {
    event.stopPropagation()
    dispatch(removeFavoriteAction(id))
  }

  return (
    <Button
      onClick={(event) => isFavorite(id) ?
        remFavorite(event, id)
        :
        addFavorite(
          {
            event,
            id,
            src,
            title
          }
        )}
    >
      {isFavorite(id) ? 'Remove' : 'Add to favorites'}
    </Button>
  )
}

export default ButtonFavorite
