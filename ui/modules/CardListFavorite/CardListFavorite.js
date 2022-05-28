import {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import Card from '../../components/Card/Card'

const CardListFavorite = ({ animeItems }) => {
  const favoriteList = useSelector(state => state.favorite)
  const [cards, setCards] = useState(animeItems)

  useEffect(() => {
    setCards(animeItems)
  }, [favoriteList])

  return (
    <Card
      cards={cards}
    />
  )
}

export default CardListFavorite


