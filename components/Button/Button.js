import { Btn } from './styled'
import {useActions} from '../../hooks/useActions'
import {useSelector} from 'react-redux'

const Button = ({onClick, ...props}) => {
  const favoriteList = useSelector(state => state.favorite)
  const {setFavorite, removeFavorite} =useActions()

  const isFavorite = (id) => {
    return favoriteList.some(item => item.id === id)
  }

  const addFavorite = (event, id, key, src, title) => {
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
      onClick={(e) => isFavorite(props.id) ?
        remFavorite(e, props.id)
        :
        addFavorite(
          e,
          props.id,
          props.title,
          props.src,
          props.title,
        )}
      {...props}
    >
      {isFavorite(props.id) ? 'Remove' : 'Add to favorites'}
    </Btn>
  )
}

export default Button
