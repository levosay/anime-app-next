import Button from '../Button/Button'
import Link from 'next/link'
import {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'

import {
  CardItem, Img, Background, CardFooter, CardTitle, CardWrapper
} from './styled'

const CardListFavorite = ({ animeItems }) => {
  const favoriteList = useSelector(state => state.favorite)
  const [cards, setCards] = useState(animeItems)

  useEffect(() => {
    setCards(animeItems)
  }, [favoriteList])

  return (
    <CardWrapper>
      {cards.map(item => (
        <Link
          key={item.attributes.canonicalTitle}
          href={`/detailed/${item.id}`}
          passHref
        >
          <CardItem>
            <Background/>
            <Img
              src={item.attributes.posterImage.large}
              alt={item.attributes.canonicalTitle}
            />
            <CardFooter>
              <CardTitle>
                {item.attributes.canonicalTitle}
              </CardTitle>
              <Button
                id={item.id}
                title={item.attributes.canonicalTitle}
                src={item.attributes.posterImage.large}
              />
            </CardFooter>
          </CardItem>
        </Link>
      ))}
    </CardWrapper>
  )
}

export default CardListFavorite


