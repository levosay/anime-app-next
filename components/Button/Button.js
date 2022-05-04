import { Btn } from './styled'
import {useActions} from '../../hooks/useActions'

const Button = ({onClick, ...props}) => {
  const {setFavorite, removeFavorite} =useActions()

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
          props.src,
        )}
      {...props}
    />
  )
}

export default Button
