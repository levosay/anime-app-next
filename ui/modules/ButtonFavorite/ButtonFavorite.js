import {useDispatch, useSelector} from 'react-redux'
import {useMemo} from 'react'
import {removeFavoriteAction, setFavoriteAction} from 'store/favorite'
import Button from 'ui/components/Button/Button'

const ButtonFavorite = ({id, src, title}) => {
  const dispatch = useDispatch()
  const favoriteList = useSelector(state => state.favorite)
  const isFavorite = useMemo(() => {
    return favoriteList.some(item => item.id === id)
  }, [id, favoriteList])

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

  const selectHandler = (event) => {
    if (isFavorite) {
      remFavorite(event, id)
    } else {
      addFavorite(
        {
          event,
          id,
          src,
          title
        }
      )
    }
  }

  const titleBtnFavorite = () => {
    if (isFavorite) {
      return 'Remove'
    } else {
      return 'Add to favorites'
    }
  }

  return (
    <Button
      onClick={(event) => selectHandler(event)}
    >
      {titleBtnFavorite()}
    </Button>
  )
}

export default ButtonFavorite
