import {useDispatch, useSelector} from 'react-redux'

import { Btn } from './styled'
import {removeFavoriteAction, setFavoriteAction} from '../../store/favorite'

const Button = ({onClick, id, src, title, ...props}) => {
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
    <Btn
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
      {...props}
    >
      {isFavorite(id) ? 'Remove' : 'Add to favorites'}
    </Btn>
  )
}

export default Button
