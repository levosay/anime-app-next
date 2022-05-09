import Button from '../Button/Button'
import Link from 'next/link'
import InfiniteScroll from "react-infinite-scroll-component";
import {useEffect, useState} from 'react'
import getData from '../../pages/api'
import {useSelector} from 'react-redux'

import {
  CardItem, Img, Background, CardFooter, CardTitle, CardWrapper
} from './styled'

const CardList = ({ animeItems, hasMoreFavorite = true }) => {
  const favoriteList = useSelector(state => state.favorite)

  const [cards, setCards] = useState(animeItems)
  const [hasMore, setHasMore] = useState(hasMoreFavorite)

  const getMorePost = async () => {
    const {data} = await getData(
      process.env.NEXT_PUBLIC_FIRST_URL + cards.length
    )
    setCards((post) => [...post, ...data])
  }

  useEffect(() => {
    setCards(animeItems)
  }, [favoriteList])

  return (
    <InfiniteScroll
      next={getMorePost}
      dataLength={cards.length}
      hasMore={hasMore}
      loader={<h3> Loading...</h3>}
    >
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
    </InfiniteScroll>
  )
}

export default CardList


