import {useActions} from '../../hooks/useActions'
import {useSelector} from 'react-redux'

import { Btn } from './styled'

const Button = ({onClick, id, src, title, ...props}) => {
  const favoriteList = useSelector(state => state.favorite)
  const {setFavorite, removeFavorite} =useActions()

  const isFavorite = (id) => {
    return favoriteList.some(item => item.id === id)
  }

  const addFavorite = ({event, id, src, title}) => {
    event.stopPropagation()
    setFavorite({
      id: id,
      attributes: {
        canonicalTitle: title,
        posterImage: {
          large: src,
        }
      },
    })
  }

  const remFavorite = (event, id) => {
    event.stopPropagation()
    removeFavorite(id)
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
